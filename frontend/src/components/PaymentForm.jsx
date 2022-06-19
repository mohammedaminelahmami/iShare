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

const updatePlanApi = async ()=>{
    let formData = new FormData();
    formData.append('username', localStorage.getItem('username'));
    await axios.post('http://localhost/ishare/backend/user/changePlan', formData)
}

const insertPayment = ()=>{
    let formDataPayment = new FormData();
    formDataPayment.append('username', localStorage.getItem('username'));

    axios.post('http://localhost/ishare/backend/payment/payment', formDataPayment)
    .then(response =>{
        // console.log(response.data);
    })
    .catch(error =>{
        console.log(error);
    })
}

const payment_Ex = async ()=>{
    let formDataPayment_Ex = new FormData();
    formDataPayment_Ex.append('username', localStorage.getItem('username'));
    let response = await axios.post('http://localhost/ishare/backend/payment/payment_Ex', formDataPayment_Ex);
    if(response.data === '0')
    {
        localStorage.removeItem('plan'+localStorage.getItem('username'));
    }
}

payment_Ex();

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
                    // changer plan 0 --> 1 user --> pro
                    updatePlanApi();
                    insertPayment();
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