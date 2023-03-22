import { createTheme } from "@mui/material/styles";

import type {} from "@mui/x-date-pickers/themeAugmentation";

export const HIKI_THEME = createTheme({
  palette: {
    primary: {
      main: "#0052CC",
    },
    error: {
      main: "#EB4747",
    },
  },
  typography: {
    fontFamily: "Mulish",
    button: {
      textTransform: "capitalize",
    },
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: "#0052CC",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 62,
          height: 42,
          padding: 9,
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: "#ffffff",
            transform: "translateX(20px)",
          },
        },
        switchBase: {
          top: 1,
          left: 2,
        },
        track: {
          borderRadius: 12,
          ".Mui-checked.Mui-checked + &": {
            opacity: 1,
            backgroundColor: "#0052CC",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          border: "1px solid rgba(136, 136, 136, 0.4)",
          borderRadius: "8px !important",
        },
        input: {
          // Some CSS
          padding: "12px 16px !important",
          //   border: 0
        },
      },
    },
  },
});
