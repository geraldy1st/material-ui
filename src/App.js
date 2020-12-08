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

import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


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
    typography:{
        h2: {
            fontSize: 36,
            marginBottom: 15
        }
    },
    // palette: {
    //     primary: {
    //         main: green[300],
    //     },
    //     secondary: {
    //         main: orange[200],
    //     }
    // }
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
          <Container maxWidth="xs">
            <div className="App">
                <header className="App-header" style={{paddingTop: 15}}>
                    <AppBar color='secondary'>
                        <ToolBar>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6'>
                                MUI Themeing
                            </Typography>
                            <Button>
                                Login
                            </Button>
                        </ToolBar>
                    </AppBar>
                    <Typography variant="h2" component="div">
                        Welcome to MUI
                    </Typography>
                    <Typography variant="subtitle1">
                        Learn how to use Material UI
                    </Typography>
                <ButtonStyled />
                <Grid container spacing={4} justify="center">
                    <Grid item xs={3} sm={6} >
                        <Paper style={{height:75,  width: "100%"}} />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <Paper style={{height:75, width: "100%"}} />
                    </Grid>
                    <Grid item xs={3} sm={6} lg={12}>
                        <Paper style={{height:75, width: "100%"}} />
                    </Grid>
                </Grid>
                <br/>
                
                    <TextField variant="outlined"
                    color="secondary"
                    type="email"
                    label='The Time'
                    placeholder="test@test.com" />
                    <CheckboxExample />
                
                    <ButtonGroup variant="contained" color="primary">
                        <Button startIcon={<SaveIcon />}
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
        </Container>
       </ThemeProvider>
  );
}

export default App;
