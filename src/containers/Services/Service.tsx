import {useEffect, useState} from 'react';
import {ICard} from '../../types';
import {CARDS_SERVICES} from '../../constans';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Service = () => {
  const {id} = useParams() as { id: string };
  const [state, setState] = useState<ICard | null>(null);

  useEffect(() => {
    const service: ICard[] = CARDS_SERVICES.filter(item => item.id === id);
    setState(service[0]);
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'center',
        paddingTop: 5
      }}
    >
      {state && (
        <>
          <Typography variant="h5">{state.title}</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eos in laboriosam perferendis
            ratione ullam unde! Ad atque cum deserunt dolores ea enim eum ex facilis, libero maiores maxime minima natus
            necessitatibus nemo obcaecati officia placeat praesentium quos recusandae repellat repudiandae sunt tempora.
            Enim, error impedit in quaerat tenetur voluptatum.</Typography>

        </>
      )}
    </Box>
  );
};

export default Service;