import { blue, pink, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    palette: {
        primary: {
          light: blue[300],
          main: "#080091",
          dark: blue[700],
        },
        secondary: {
          light: pink[300],
          main: "#e09bcd",
          dark: pink[700],
        },
      },
});