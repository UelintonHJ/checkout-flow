export function PaymentMethod() {
    return (
        <div className="rounded-lg bg-white p-4 shadow-sm">
            <h2 className="font-medium">
                Pagamento
            </h2>

            <p className="mt-2 text-sm text-zinc-600">
                Cartão de crédito • **** 1234
            </p>

            <p className="mt-2 text-xs text-zinc-500">
                Você poderá revisar ou alterar a forma de pagamento antes da confirmação.
            </p>
        </div>
    )
}