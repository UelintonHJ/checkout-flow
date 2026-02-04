import { createContext, useContext, useState, useRef } from "react"
import type { ReactNode } from "react"

type CheckoutState =
    | { status: "idle" }
    | { status: "loading"; loadingMessage: string; canCancel: boolean }
    | { status: "success" }
    | { status: "error"; error: "payment_refused" | "network" | "timeout" }

type CheckoutContextType = {
    state: CheckoutState
    isLoading: boolean
    confirmOrder: () => void
    retryOrder: () => void
    cancelOrder: () => void
}

const CheckoutContext = createContext<CheckoutContextType | null>(null)

export function CheckoutProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<CheckoutState>({ status: "idle" })

    const paymentTimeoutRef = useRef<number | null>(null)
    const confirmTimeoutRef = useRef<number | null>(null)
    const globalTimeoutRef = useRef<number | null>(null)

    const isLoading = state.status === "loading"

    function clearTimers() {
        if (paymentTimeoutRef.current) {
            clearTimeout(paymentTimeoutRef.current)
            paymentTimeoutRef.current = null
        }

        if (confirmTimeoutRef.current) {
            clearTimeout(confirmTimeoutRef.current)
            confirmTimeoutRef.current = null
        }

        if (globalTimeoutRef.current) {
            clearTimeout(globalTimeoutRef.current)
            globalTimeoutRef.current = null
        }
    }

    function confirmOrder() {
        if (isLoading) return

        clearTimers()

        setState({
            status: "loading",
            loadingMessage: "Validando pagamento...",
            canCancel: true
        })

        paymentTimeoutRef.current = window.setTimeout(() => {
            setState({
                status: "loading",
                loadingMessage: "Confirmando pedido...",
                canCancel: true
            })
        }, 1000)

        const outcomes: Array<"payment_refused" | "network" | "timeout" | "success"> = [
            "payment_refused",
            "network",
            "timeout",
            "success"
        ]

        const result = outcomes[Math.floor(Math.random() * outcomes.length)]
        const delay = result === "timeout" ? 5000 : 1500

        confirmTimeoutRef.current = window.setTimeout(() => {
            if (result === "payment_refused") {
                setState({ status: "error", error: "payment_refused" })
                return
            }

            if (result === "network") {
                setState({ status: "error", error: "network" })
                return
            }

            if (result === "timeout") {
                setState({ status: "error", error: "timeout" })
                return
            }

            setState({
                status: "success"
            })

            globalTimeoutRef.current = window.setTimeout(() => {
                setState({ status: "idle" })
            }, 3000)
        }, delay)
    }

    function cancelOrder() {
        clearTimers()
        setState({ status: "idle" })
    }

    function retryOrder() {
        clearTimers()
        confirmOrder()
    }

    return (
        <CheckoutContext.Provider
            value={{
                state,
                isLoading,
                confirmOrder,
                retryOrder,
                cancelOrder,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export function useCheckout() {
    const context = useContext(CheckoutContext)

    if (!context) {
        throw new Error("useCheckout must be used within CheckoutProvider")
    }

    return context
}