import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'
import '../Stripe.css'

function StripeContainer() {

    const PUBLIC_KEY = "pk_test_51KxoiEGhZm6pvdiCrT2CclXca0wIGAWcMjFVEBV32tS0G4ETDQTxt98t6MG4suMdKxW6rdFqtdgIzwZvMtbxNb2300nLSxBNuu"
    const stripeTestPromise = loadStripe(PUBLIC_KEY)

  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}

export default StripeContainer