import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from 'axios'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

function PaymentForm() {

    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const HandleSubmit = async (e)=>{
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if(!error)
        {
            try {
                const {id} = paymentMethod
                const response = await axios.post('http://localhost:4000/payment', {
                    amount: 500,
                    id
                })

                if(response.data.success)
                {
                    console.log("successful payment !");
                    setSuccess(true)
                }
            } catch (error) {
                console.log("ERROR" . error);
            }
        }else{
            console.log(error.message);
        }
    }

  return (
    <>
       {!success ?
       <form onSubmit={HandleSubmit}>
           <fieldset className='FormGroup'>
               <div className="FormRow">
                   <CardElement options={CARD_OPTIONS} />
               </div>
           </fieldset>
           <button className='pay'>Pay</button>
       </form>
       :
       <div>
           <h2>Successful Payment ! </h2>
       </div>
        } 
    </>
  )
}

export default PaymentForm