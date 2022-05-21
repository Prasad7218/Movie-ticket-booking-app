import React from 'react'
import './Home.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Movies} from '../components/Movies'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'


const Home = () => {
   

  return (
      <>
           

<Box sx={{ flexGrow: 1,marginLeft:'60px' }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Movies.map((ele, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
       <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={ele.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {ele.cast}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
               Book tickets
              </Button>
            </CardActions>
          </Card>
    </Grid>
  ))
  }
</Grid>
</Box>
          )

      
      
   
      </>
  )
}

export default Home