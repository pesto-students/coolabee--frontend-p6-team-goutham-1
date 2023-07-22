import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Main() {
  return (
    <div style={{width:'auto',height:'100vh'}}>
      <div style={{display:'flex',justifyContent:'center',fontSize:'3em',paddingTop:'1vh',fontWeight:'bolder',color:'#787878',marginTop:'2vh'}}>
        Build Your Wardrobe with
        
      </div>
      <div style={{display:'flex',justifyContent:'center',fontSize:'5em',paddingTop:'1vh',color:'#ff9999',fontWeight:'bolder'}}>
          COOLABEE
        </div>
        <div style={{height:'100vh',backgroundColor:'#F0F8FF',marginTop:'2vh'}}>
          <div style={{display:'flex',justifyContent:'center',fontSize:'2em',fontWeight:'bold',color:'#787878',padding:'2vh'}}>
            What You Get?
          </div>
         <div style={{display:'flex',gap:'2vh',justifyContent:'center',marginTop:'5vh'}}>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgO_ojjfZGSZudU3ofIGaual-T4WnwZn4F68Rx9nY&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Electronics
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get Your Electronics Choice over here,with over 6,000 +
            varities, ranging across all categories.
            For All Types of Usages.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCAH3j5WZEZy8LaDViXlLBiFSUNiv_s41nl4itgZE&s"
          alt="green iguana"
          style={{backgroundPosition:'cover'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Clothes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Get Your Clothes Choice over here,with over 6,000 +
            varities, ranging across all categories.
            For All Types of Usages.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gNLeoOHKN3bBlHDGRHyXPcM2c7AOP04Iug&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fashion
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Get Your Fashion Choice over here,with over 6,000 +
            varities, ranging across all categories.
            For All Types of Usages.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image="https://i1.wp.com/www.mrright.in/ideas/wp-content/uploads/2019/07/Home-Essentials-5-Things-Everyone-Should-Keep-In-Their-Home01.png?resize=883%2C650&ssl=1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Homes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Get Your Homes Essentials Choice over here,with over 6,000 +
            varities, ranging across all categories.
            For All Types of Usages.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         </div>
        </div>
    </div>
  )
}

export default Main