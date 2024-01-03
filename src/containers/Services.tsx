import {useEffect, useState} from 'react';
import {ICard} from '../types';
import CardCom from '../components/Card';
import Box from '@mui/material/Box';
import {CARDS_SERVICES} from '../constans';
import Typography from '@mui/material/Typography';

const Services = () => {
  const [state, setState] = useState<ICard[]>([]);

  useEffect(() => {
    setState(CARDS_SERVICES)
  }, []);

  return (
    <Box sx={{
      paddingTop: '10px',
      textAlign: 'center'
    }}>
      <Box component="div">
        <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam,
        magnam omnis optio possimus.</Typography>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut autem doloremque,
        earum facere fuga, in laudantium nam porro provident quasi quidem ratione suscipit veritatis?</Typography>
      </Box>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '10px'
        }}
      >
        <Typography variant="h6">Услуги понаправлениям</Typography>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '10px'
          }}
        >
          {state.map(item => (
            <CardCom key={Math.random()} card={item}/>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;