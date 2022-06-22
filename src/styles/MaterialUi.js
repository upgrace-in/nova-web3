import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const MaterialUi = (props) => {
  const { children } = props;
  const { darkMode } = useSelector((state) => state.styles);
  // Override the default size of material ui
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    typography: {
      htmlFontSize: 10,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            fontSize: "62.5%",
          },
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MaterialUi.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MaterialUi;
