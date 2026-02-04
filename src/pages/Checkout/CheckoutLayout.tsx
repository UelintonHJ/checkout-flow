import { CheckoutCancel } from "../../components/CheckoutCancel"
import { useCheckout } from "../../context/CheckoutContext"

type Props = {
    children: React.ReactNode
}

export function CheckoutLayout({ children }: Props) {
    const { isLoading } = useCheckout()

    return (
        <main className="min-h-screen bg-zinc-100 p-4">
            <section className="relative mx-auto max-w-md space-y-4">
                <header className="space-y-1">
                    <h1 className="text-xl font-semibold">
                        Revisar pedido
                    </h1>

                    <p className="text-sm text-zinc-600">
                        Confira os detalhes antes de confirmar. <br />
                        Você só será cobrado após a confirmação.
                    </p>
                </header>

                <div
                    className={`
                        transition-opacity space-y-4 transition-opacity
                        ${isLoading ? "opacity-60 pointer-events-none select-none" : ""}
                    `}
                >
                    {children}
                </div>

                <CheckoutCancel/>
            </section>
        </main>
    )
}