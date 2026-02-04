import { CheckoutLayout } from '../../pages/Checkout/CheckoutLayout';
import { OrderSummary } from '../../components/OrderSummary';
import { PaymentMethod } from '../../components/PaymentMethod';
import { PriceBreakdown } from '../../components/PriceBreakdown';
import { CheckoutFooter } from '../../components/CheckoutFooter';
import { CheckoutProvider } from '../../context/CheckoutContext';

export function CheckoutPage() {
    return (
        <CheckoutProvider>
            <CheckoutLayout>
                <OrderSummary />
                <PaymentMethod />
                <PriceBreakdown />
                <CheckoutFooter />
            </CheckoutLayout>
        </CheckoutProvider>

    )
}