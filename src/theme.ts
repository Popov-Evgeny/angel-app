import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[100],
    },
    secondary: {
      main: '#f44336',
    },
  },
});