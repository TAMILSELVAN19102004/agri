import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { orange } from '@mui/material/colors'
import Nav from '../Navpar/Nav'
import Typewriter from "typewriter-effect";
const Home = () => {
    
  return (
    <div>
       
<body className="color">
    
    <Nav/>

    <section class="hero">
        <center>
        <h1>
        <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                    
                    .changeDelay(100)
                    
                    .pauseFor(1000)
                    .typeString("Your Journey to Fitness Starts Here")
                    .start()
                    .pauseFor(5000)
                    
                }}
                ></Typewriter>
            </h1>
        </center>
    </section>

    <section style={{backgroundColor:"orangered"}}>
        <center>
        <h2>Popular Classes</h2>
        </center>
        <p>Explore our wide range of fitness classes to find the perfect one for you.</p>
        <p>Transform your body and mind with our expert trainers and personalized workout plans.</p>
        
    </section>
    <footer>
        <p>&copy; 2024 Fitness Hub. All rights reserved.</p>
    </footer>
</body>


    </div>
  )
}

export default Home