"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0D47A1", // 深めのブルーでプロフェッショナル
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF6F61", // 鮮やかさを抑えた上品なピンク
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAFA", // ほんのりグレーがかった白
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121", // より濃く読みやすい
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica Neue', sans-serif",
    fontSize: 15,
    h4: {
      fontWeight: 600,
      fontSize: "1.8rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12, // カードやボタンの角を少し丸く
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "6px 16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
