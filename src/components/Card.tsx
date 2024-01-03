import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ICard} from '../types';
import {useNavigate} from 'react-router-dom';

interface Props {
  card: ICard;
}
const CardCom: React.FC<Props> = ({card}) => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      width: 300,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
      }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
          }}
        >
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            {card.title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/services/${card.id}`)}
          >Узнать больше</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardCom;
