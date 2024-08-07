import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Cards.css';
import { useNavigate } from 'react-router-dom';


function Cards() {

    const nav=useNavigate();

  return (
    <div className="cards-container" id='carddd'>


    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image="src\assets\fat-loss-1.jpg" 
          alt="green iguana"
          />
        <CardContent>
          <p className='card-word'>
            Fat Loss
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image="src\assets\backworkouts.jpg"
          alt="green iguana"
          />
        <CardContent>
          <p className='card-word'>
            Back Workout
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image="src\assets\athome.jpg"
          alt="green iguana"
          />
        <CardContent>
          <p className='card-word'>
            At Home
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image="src\assets\fullbody.jpg"
          alt="green iguana"
          />
        <CardContent>
        <p className='card-word'>
            Full Body
          </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image="src\assets\beginner_0.jpg"
          alt="green iguana"
          />
        <CardContent>
            <p className='card-word'>
            Beginner
            </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='cards-1' sx={{ width: 345 }} onClick={(() => nav('/'))}>
      <CardActionArea>
        <CardMedia className='card-img'
          component="img"
          height="140"
          image="src\assets\musclebuilding.jpg"
          alt="green iguana"
          />
        <CardContent>
            <p className='card-word'>
            Muscle Building
            </p>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>

    
    

    </div>
  );
}

export default Cards;