import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PlanPricing from '../../components/PlanPricing'

function Pricing() {

  return (
    <div className="parentPricing font-['poppins']">
        <Nav />
        <PlanPricing />
        <Footer />
    </div>
  )
}

export default Pricing