import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});

const Speech = () => {
    const [value, setValue] = React.useState("");
    const { speak } = useSpeechSynthesis();
    const theme = useTheme();

    return (
        <div className="speech">
            <div className="group">
                <h2>This App Converts Text to Speech using React JS</h2>
            </div>
            <div className="group">
            <TextField
                rows="10"
                value={value}
                variant="filled"
                onChange={(e) => setValue(e.target.value)}
                ></TextField>
            </div>
            <div className="group">
            <Button variant="outlined" onClick={() => speak({ text: value})}>Speak</Button>
            </div>
        </div>
    )
};
const darkModeTheme = createTheme(getDesignTokens('dark'));


export default Speech;