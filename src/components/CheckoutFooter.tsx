import { useCheckout } from '../context/CheckoutContext'

export function CheckoutFooter() {
    const { state, isLoading, confirmOrder, retryOrder } = useCheckout()

    if (state.status === "success") {
        return (
            <div className="rounded-lg bg-green-50 p-4 text-center space-y-3">
                <div>
                    <p className="font-medium text-green-700">
                        Pedido confirmado
                    </p>
                    <p className="mt-1 text-sm text-green-600">
                        Você receberá atualizações sobre o preparo do pedido.
                    </p>
                </div>

                <button
                    className="w-full rounded-lg bg-green-700 py-2 text-white text-sm"
                    onClick={() => {
                        console.log("Acompanhar pedido")
                    }}
                >
                    Acompanhar pedido
                </button>
            </div>
        )
    }

    if (state.status === "error") {
        const { error } = state

        return (
            <div className="space-y-3">
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    {error === "payment_refused" && (
                        <>
                            <p className="font-medium text-center">
                                Pagamento recusado
                            </p>
                            <p className="mt-1">
                                O cartão não autorizou a transação. <br />
                                Tente novamente ou altere a forma de pagamento.
                            </p>
                        </>
                    )}

                    {error === "network" && (
                        <>
                            <p className="font-medium text-center">
                                Erro de conexão
                            </p>
                            <p className="mt-1">
                                Não conseguimos confirmar o pedido agora. <br />
                                Verifique sua internet e tente novamente.
                            </p>
                        </>
                    )}

                    {error === "timeout" && (
                        <>
                            <p className='font-medium text-center'>
                                Demorou mais do que o esperado
                            </p>

                            <p className='mt-1'>
                                Estamos com instabilidade para confirmar seu pedido agora. <br />
                                Você pode tentar novamente em instantes.
                            </p>
                        </>
                    )}
                </div>

                <button
                    onClick={retryOrder}
                    className="w-full rounded-lg bg-zinc-900 py-3 text-white font-medium"
                >
                    {error === "payment_refused" ? "Tentar novamente" : "Tentar mais tarde"}
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-2">
            <button
                onClick={confirmOrder}
                disabled={isLoading}
                className="w-full rounded-lg bg-zinc-900 py-3 text-white font-medium"
            >
                {isLoading ? "Confirmando pedido..." : "Confirmar pedido"}
            </button>

            {state.status === "loading" && (
                <p className="text-center text-xs text-zinc-500 animated-pulse">
                    {state.loadingMessage}
                </p>
            )}
        </div>
    )
}