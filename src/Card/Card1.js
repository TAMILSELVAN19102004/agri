import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Card/Card.css'
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Nav from '../Navpar/Nav';



export default function Card1() {
 const navigate=useNavigate()
  const [count,setCount]=useState(0);
  const increment = () =>{
    setCount(count+1)
}
const decrement = () =>{
    setCount(count-1)
}
const [count1,setCount1]=useState(0);
  const i = () =>{
    setCount1(count1+1)
}
const d = () =>{
    setCount1(count1-1)
}  
const [count2,setCount2]=useState(0);
const ic = () =>{
  setCount2(count2+1)
}
const de = () =>{
  setCount2(count2-1)
}

const [count3,setCount3]=useState(0);
const ice = () =>{
  setCount3(count3+1)
}
const dec = () =>{
  setCount3(count3-1)
}
const [count4,setCount4]=useState(0);
const icer = () =>{
  setCount4(count4+1)
}
const decr = () =>{
  setCount4(count4-1)
}

const [count5,setCount5]=useState(0);
const incre = () =>{
  setCount5(count5+1)
}
const decre = () =>{
  setCount5(count5-1)
}

const [count6,setCount6]=useState(0);
const increm = () =>{
  setCount6(count6+1)
}
const decrem = () =>{
  setCount6(count6-1)
}

const [count7,setCount7]=useState(0);
const increme = () =>{
  setCount7(count7+1)
}
const decreme = () =>{
  setCount7(count7-1)
}


const handleBuy=()=>
{
  navigate("/Pay")
}








return (
    <>
    <div className='l1'>
      <Nav/>
        <center>
    <h1 className='l2' > PRODUCTS </h1>
    </center>
<div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://tse1.mm.bing.net/th?id=OIP.B2IYyCc7kjZ1_--86_147QHaE7&pid=Api&P=0&h=180"
      />
      </CardActionArea>
      <CardContent>
       <Typography variant="body2" color="text.secondary">
        FASHNEX Resistance Tube with Foam Handles for Stretching, Mobility, Weight Training
         The Toning Tube Resistance Band is for Home Workout For Men & Women
        </Typography>
        <h4>Price : ₹ 799</h4>
      </CardContent>
      <CardActions>
        <Button size="small">Add : {count}</Button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <Button onClick={handleBuy}size="small" >Buy Now</Button>
</CardActions>
        <Stack spacing={1}>
          <h3>Rate this Product</h3>
      <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
    <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://m.media-amazon.com/images/I/51mHtdYZnAL.AC_UL480_FMwebp_QL65.jpg"
       />
      </CardActionArea>
      <CardContent>
       <Typography variant="body2" color="text.secondary">
        Marine Pearl 8ft Set of 2 Heavy Duty Yoga Strap - Many Stylish Colors,
         Best for Daily Stretchng, Yoga Pilates, Physical Therapy, Fitness(Parrot Green)
         For Men & Women  Exercise
        
        </Typography>
        <h4>Price : ₹ 719</h4>
      </CardContent>
      <CardActions>
        <Button size="small">ADD : {count1}</Button>
        <button onClick={i}>+</button>
        <button onClick={d}>-</button>
        <Button  onClick={handleBuy} size="small">Buy Now</Button>
        </CardActions>
        <Stack spacing={1}>
        <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
<div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}></div>
    <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://m.media-amazon.com/images/I/318aYNq+RkL.AC_UL480_FMwebp_QL65.jpg"
        />
      </CardActionArea>
      <CardContent>
       <Typography variant="body2" color="text.secondary">
        Wiselife Professional Latex Resistance Thera Band (Heavy Resistance)
       Stretching, Cardio, Strength Training, Home Fitness, Exercise,
          Gym Workout For Men & Women
        </Typography>
        <h4>Price : ₹ 599</h4>
      </CardContent>
      <CardActions>
        <Button size="small">ADD : {count2}</Button>
        <button onClick={ic}>+</button>
        <button onClick={de}>-</button>
        <Button  onClick={handleBuy} size="small">Buy Now</Button>
       </CardActions>
       <Stack spacing={1}>
       <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
   <Card sx={{ maxWidth: 300 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190 }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://m.media-amazon.com/images/I/51-9LXA1E9L.AC_UL480_QL65.jpg"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Set of 2, Citron  (Set of Two) | Premium Hand Weight Dumbbell 
        | Exercise and Fitness Training Equipment for Home and Gym Use | Full Body Workout | For Men & Women
        </Typography>
        <h4>Price : ₹ 5699</h4>
      </CardContent>
      <CardActions>
        <Button size="small">ADD : {count3}</Button>
        <button onClick={ice}>+</button>
        <button onClick={dec}>-</button>
        <Button  onClick={handleBuy} size="small">Buy Now</Button>
      </CardActions>
      <Stack spacing={1}>
      <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
</div>
</div>
<div style={{display:"flex" , justifyContent:"space-evenly"}}>
<div style={{display:"flex",justifyContent:"space-evenly"}}>
<Card sx={{ maxWidth: 300,  marginTop: 5}}>
<CardActionArea>
      <CardMedia
        sx={{ height: 190}}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://m.media-amazon.com/images/I/61egByHWqfL.AC_UL480_FMwebp_QL65.jpg"
      />
      </CardActionArea>
      <CardContent>
         <Typography variant="body2" color="text.secondary">
        Kore Chrome Plated Steel Heavy Dumbbell with Soft Padded Cushion Handles (2 kg) - Set of 2
       Dumbbells (Boxed in Pair) 
      </Typography>
      <h4>Price : ₹ 9899</h4>
      </CardContent>
      <CardActions>
        <Button size="small">ADD : {count4}</Button>
        <button onClick={icer}>+</button>
        <button onClick={decr}>-</button>
        <Button onClick={handleBuy} size="small">Buy Now</Button>
       </CardActions>
       <Stack spacing={1}>
       <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
    </div>
    <Card sx={{ maxWidth: 300, marginTop: 5 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190  }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://m.media-amazon.com/images/I/61Da1DunI+L.SX679.jpg"
       />
      </CardActionArea>
      <CardContent>
       <Typography variant="body2" color="text.secondary">
        ODDISH; way to fitness Tummy trimmer Double Spring for Abdominal exerciser
         and Tummy twister for waist trimmer Combo pack for Men and Women 
         </Typography>
         <h4>Price : ₹ 1899</h4>
      </CardContent>
      
      <CardActions>
        <Button size="small">ADD : {count5}</Button>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
        <Button onClick={handleBuy} size="small">Buy Now</Button>
        </CardActions>
        <Stack spacing={1}>
        <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Card sx={{ maxWidth: 300,  marginTop: 5}}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190}}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://tse4.mm.bing.net/th?id=OIP.b-zA6Asifrh2DcppN9A-7wHaFg&pid=Api&P=0&h=180"
      />
      </CardActionArea>
      <CardContent>
      <Typography variant="body2" color="text.secondary">
        
  Durafit Heavy Hike | 5 HP Peak DC Motorized Foldable Treadmill | Auto Incline | Home Cardio | Max Speed 16 Km/Hr
   | Max User Weight 120 Kg
       </Typography>
       <h4>Price : ₹ 21999</h4>
      </CardContent>
      <CardActions>
        <Button size="small">ADD : {count6}</Button>
        <button onClick={increm}>+</button>
        <button onClick={decrem}>-</button>
        <Button  onClick={handleBuy} size="small">Buy Now</Button>
       </CardActions>
       <Stack spacing={1}>
       <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
    </div>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Card sx={{ maxWidth: 300, marginTop: 5 }}>
    <CardActionArea>
      <CardMedia
        sx={{ height: 190  }}
        AAAAAAFAAECAwQGB//EADsQAAIBAwIFAQYEB
        image="https://tse1.mm.bing.net/th?id=OIP.GdCiRtTldKS-mWrrhEs_9QHaEK&pid=Api&P=0&h=180"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Aurion Premium Strength Training Kettlebells for Weightlifting - 1Pc 
          Gym Equipment  Heavy Workout Fitness Iron  Heavy Lifting for Men and Women Home 
        </Typography>
          <h4>Price : ₹ 4599</h4>
      </CardContent>
      <CardActions>
        <Button size="small">ADD : {count7}</Button>
        <button onClick={increme}>+</button>
        <button onClick={decreme}>-</button>
        <Button  onClick={handleBuy} size="small">Buy Now</Button>
         </CardActions>
         <Stack spacing={1}>
         <h3>Rate this Product</h3>
  <Rating name="size-medium" defaultValue={2} />
 </Stack>
    </Card>
    </div>
</div>









</div>
</>
);
}