import React, { Component } from 'react'
import img1 from "../images/banana images.webp"
import img2 from"../images/mango.avif"
export class Cc1 extends Component {
    constructor(){
        super();
        this.state={
            BANANA:0,
            MANGO:0
        }
    }
    incrementCounter=()=>{
        this.setState({BANANA:this.state.BANANA+1})
    }
    increment=()=>{
        this.setState({MANGO:this.state.MANGO+1})
    }
  render() {
    return (
      <div style={{background:"yellow"}}>
        <center>
        <h1> Bob ate {this.state.BANANA} Bananas {this.state.MANGO} Mangoes</h1>
        <img src={img1} height="200" width="200" style={{margin:30}}></img>
        <img src={img2} height="200" width="200" style={{margin:30}}></img>
        <br></br>
        <button onClick={this.incrementCounter}style={{background:"blue",margin:50}}>Eat Banana</button>
        <button onClick={this.increment}style={{background:"blue",margin:50}}>Eat Mango</button>
        </center>
      </div>
    )
  }
}

export default Cc1