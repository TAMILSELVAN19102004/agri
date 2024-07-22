import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Terms.css'
const Terms = () => {
  const navi=useNavigate();
  const subscription = () =>{
    navi('/Signup')
  }
  return (
    <div className='container'>
      
      <center>
        <h1>Terms and Conditions</h1><br></br>
        </center>
        <ul>
        
        <li><b>Acceptance of Terms: </b></li>
        <p className='cont'>By using our online fitness website, you agree to be bound by these terms and conditions, our Privacy Policy, and any other policies or guidelines posted on our website.</p>
        <li><b>User Eligibility: </b></li>
        <p className='cont'>You must be at least 18 years old to use our service. If you are under 18, you may only use the service with the involvement of a parent or guardian.</p>
        <li><b>Account Registration: </b></li>
        <p className='cont'>To access certain features of our service, you may need to register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <li><b>Content Usage: </b></li>
        <p className='cont'>The content provided through our service is for personal, non-commercial use only. You may not reproduce, distribute, modify, or publicly display any content without prior written permission.</p>
        <li><b>Payment and Subscription: </b></li>
        <p className='cont'>Some features of our service may require payment or subscription. By subscribing to our service, you agree to pay all applicable fees and charges.</p>
        <li><b>Cancellation and Refunds: </b></li>
        <p className='cont'>You may cancel your subscription at any time. Refunds will be provided according to our refund policy, which may vary depending on your subscription plan.</p>
        <li><b>Disclaimer of Warranties: </b></li>
        <p className='cont'>Our service is provided on an "as is" and "as available" basis, without any warranties of any kind. We do not guarantee that our service will be uninterrupted, secure, or error-free.</p>
        <li><b>Changes to Terms: </b></li>
        <p className='cont'>We reserve the right to update or modify these terms and conditions at any time without prior notice. Your continued use of our service after any such changes constitutes acceptance of the updated terms.</p>
        <center><button className='ok' onClick={subscription}>OK</button></center>
        </ul>
        
    </div>
  )
}

export default Terms