import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import "./feeds.css";
const cards = [
  {
    title: 'Access Engineering PLC',
    subtitle: 'Developer',
    description: 'Access Engineering PLC is a Sri Lankan civil engineering company engaged in the construction industry and supply of construction-related services and materials.',
    link: '',
  },
  {
    title: 'Card 2',
    subtitle: 'Subtitle 2',
    description: 'Description 2',
    link: '',
  },
  {
    title: 'Card 3',
    subtitle: 'Subtitle 3',
    description: 'Description 3',
    link: '',
  },
 
  {
    title: 'Card 4',
    subtitle: 'Subtitle 4',
    description: 'Descrigfhjnkmptihjkon 4',
    link: '',
  },
  {
    title: 'Card 4',
    subtitle: 'Subtitle 4',
    description: 'Descrigfhjnkmptihjkon 4',
    link: '',
  },
];

export default function OutlinedCard() {
  return (
    <div style={{padding:10,flexwrap:"wrap"}}>
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center', 
      alignItems: 'center',
     
      '& > *': {
        width: '100%',
        padding: '16px',
        '@media (min-width: 600px)': {
          width: '50%',
        },
        '@media (min-width: 960px)': {
          width: '33.33%',
        },
        '@media (min-width: 1280px)': {
          width: '25%',
        },
      },
    }}>


<Grid container spacing={3}>
  {cards.map((card) => (
    <Grid item xs={12} sm={6} md={3} key={card.title}>
      <div className='container3'style={{flexWrap:'wrap',justifyContent:"flex-start"}}>
      <Card variant="outlined" style={{ margin: 10 ,width: "100%", height:"330px", backgroundColor: "rgb(194,194,204)" }} >
        <CardContent>
          <Typography sx={{ mt:1,fontSize: 20,  fontWeight: 'bold',
          fontFamily: 'Georgia, serif',fontSize:"25px" }} color="rgb(12,23,112)"  >
            {card.title}
          </Typography>
          <Typography variant="h5" component="div">
            {/* be{bull}nev{bull}o{bull}lent */}
          </Typography>
          <Typography sx={{ mb: 1.5 ,mt:1}} color="text.secondary">
            {card.subtitle}
          </Typography>
          <Typography variant="body2"sx={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '100px' }}>
            {card.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: '0px' }}>
          <Link to={card.link}>
            <Button>
              See More
            </Button>
          </Link>
        </CardActions>
      </Card>
      </div>
    </Grid>
  ))}
</Grid>


     
    </Box>
    </div>
  );
}
