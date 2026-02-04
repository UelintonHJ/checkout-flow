import { useCheckout } from "../context/CheckoutContext"

export function CheckoutCancel() {
    const { state, cancelOrder } = useCheckout()

    if (state.status !== "loading" || !state.canCancel) return null

    return (
        <button
            onClick={cancelOrder}
            className="w-full text-xs text-zinc-500 underline"
        >
            Cancelar confirmação
        </button>
    )
}