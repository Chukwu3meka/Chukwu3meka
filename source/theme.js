import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: '"Amiri", serif',
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#eba420",
    },
    secondary: {
      main: "#1197c0",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 5,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default muiTheme;
