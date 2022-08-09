import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, useTheme } from "@mui/material/styles";

const root = createRoot(document.getElementById("root"));

const Root = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

root.render(<Root />);
