import { useDetails } from "../../contexts/DetailsContext"
import PaymentFailed from "./PaymentFailed"
import PaymentSuccessful from "./PaymentSuccessful"

function Payment() {
    const {isPayment} = useDetails()
    return (
        <div>
            {isPayment ? <PaymentSuccessful/> : <PaymentFailed/>}
        </div>
    )
}

export default Payment
