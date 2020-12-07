import React from 'react'
import logo from './logo.svg';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import {makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import {green, orange } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
        border: 0,
        borderRadius: "15px",
        color: "#fff",
        padding: "5px 30px",
        marginBottom: "15px"
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[400],
        },
        secondary: {
            main: green[400],
        }
    }
})

function ButtonStyled(){
    const classes = useStyles();
    return(
        <Button className={classes.root}>Test styled button</Button>
    )
}

function CheckboxExample(){
    const [checked, setChecked] = React.useState(true)
    return(
        <FormControlLabel 
        control={
            <Checkbox 
                checkbox={checked}
                icon={<DeleteIcon />}
                checkedIcon={<SaveIcon />}
                onChange={(e)=>setChecked(e.target.checked)}
                color="secondary"
                inputProps={{
                    "aria-label": "primary checkbox"
                }}
            />
        }
        label='Testing Checkbox'
        />
    )
}

function App() {
  return (
      <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
          <ButtonStyled />
          <TextField variant="outlined"
          color="secondary"
          type="email"
          label='The Time'
          placeholder="test@test.com" />
        <CheckboxExample />
          
          <ButtonGroup variant="contained" 
          color="primary"
          >
            <Button
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                style={{ fontSize: 14, fontFamily: "monospace"}}
                onClick={ () => console.log("Submit was click")} >
                Submit
            </Button>       
            <Button
                startIcon={<DeleteIcon />}
                style={{fontSize: 14, fontFamily: "monospace"}}
                onClick={ () => console.log("Discard was click")} >
                Discard
            </Button>
          </ButtonGroup>
       
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
