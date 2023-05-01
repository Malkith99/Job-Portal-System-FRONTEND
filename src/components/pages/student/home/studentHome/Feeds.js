import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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
];

export default function OutlinedCard() {
  return (
    <div style={{padding:"20px"}}>
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        width: '100%',
        padding: '80px',
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
      
      {cards.map((card) => (
        <Card key={card.title} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {card.subtitle}
            </Typography>
            <Typography variant="body2"sx={{ overflow: 'hidden', textOverflow: 'ellipsis', height: '100px' }}>
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={card.link}>
              <Button>
                See More
              </Button>
            </Link>
          </CardActions>
        </Card>
        
      ))}
    </Box>
    </div>
  );
}
