import ReactDOM from "react-dom/client";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { HIKI_THEME } from "Styles/Theme";
import { LocalizationProvider } from "@mui/x-date-pickers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={HIKI_THEME}>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <App />
    </LocalizationProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
