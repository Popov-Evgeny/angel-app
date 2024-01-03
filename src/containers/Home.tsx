import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: 5,
        justifyContent: 'center'
      }}>
      <Box
        component="div"
        sx={{
          textAlign: 'center',
          padding: '10px',
          maxWidth: '600px',
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          <i><b>Добро пожаловать на наш сайт.</b> </i>
        </Typography>
        <Typography component="p">
          На сегодняшний день нашим ресурсом уже воспользовались тысячи человек, нашли
          ответы на свои вопросы и получили профессиональную поддержку психолога.
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            marginBottom: '20px',
            padding: 1
          }}
        >
          <i>PS: Ваше счастье в ваших руках!</i>
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          maxWidth: '500px',
          maxHeight: '500px',
          overflow: 'hidden',
          minWidth: '300px'
        }}
      >
        <img style={{width: '100%', height: 'auto'}} src="../../public/Koleso720.png" alt="image"/>
      </Box>
    </Box>
  );
};

export default Home;