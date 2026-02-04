export function PriceBreakdown() {
    return (
        <div className="rounded-lg bg-white p-4 shadow-sm text-sm space-y-1">
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ 38,00</span>
            </div>
            <div className="flex justify-between text-zinc-600">
                <span>Taxa de entrega</span>
                <span>R$ 5,00</span>
            </div>
            <div className="mt-2 flex justify-between font-medium">
                <span>Total</span>
                <span>R$ 43,00</span>
            </div>

            <p className="mt-2 text-xs text-zinc-500">
                Valor final já inclui taxas e impostos
            </p>
        </div>
    )
}