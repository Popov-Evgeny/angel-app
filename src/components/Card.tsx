import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ICard} from '../types';

interface Props {
  card: ICard;
}
const CardCom: React.FC<Props> = ({card}) => {
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Услуга:
          </Typography>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            {card.description}
          </Typography>
          <Typography sx={{ marginTop: 3, fontSize: 14 }} color="text.secondary">
            Стоимость: <i><b>{card.price} руб.</b></i>
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button variant="outlined" size="small">Узнать больше</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardCom;
