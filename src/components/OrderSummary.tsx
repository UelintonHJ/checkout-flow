export function OrderSummary() {
    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            <h2 className="font-medium">
                Seu pedido
            </h2>

            <ul className="mt-2 text-sm text-zinc-700 space-y-1">
                <li>
                    Burguer artesanal
                </li>
                <li>
                    Batata frita
                </li>
            </ul>

            <p className="mt-3 text-xs text-zinc-500">
                Itens selecionados no restaurante
            </p>
        </div>
    )
}