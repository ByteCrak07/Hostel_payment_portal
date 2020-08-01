import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import gectemblem from "C:/Users/Shone/Desktop/Reactjs/shone/src/assets/gectemblem.jpg";
import { createMuiTheme } from '@material-ui/core/styles';

const themes = createMuiTheme({
  palette: {
    primary: {
      main: '#00adb5',
      light: '#eeeeee'
    },
    secondary: {
      main: '#222831',
      light: '#393e46'
    }
  },
});
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: themes.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "themes.palette.secondary.light"
      },
      "&.Mui-focused fieldset": {
        borderColor: themes.palette.secondary.main,
      }
    }
  }
})(TextField);
const checkBoxStyles = theme => ({
  root: {
    color: "#A0A0A0",
    '&$checked': {
      color: themes.palette.primary.main,
    },
  },
  checked: {},
})

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: themes.palette.primary.light,
    height: '35rem',
    width: '30rem',
    borderRadius: '25px',
    boxShadow: `0px 10px 50px ${themes.palette.secondary.light}`
  },
  title: {
    fontWeight: 500,
    fontSize: 28,
    color: themes.palette.secondary.light
  },
  avatar: {
    margin: theme.spacing(3, 2, 2),
    width: 75,
    height: 75,
    border: "1px solid",
    borderColor: themes.palette.secondary.light
  },
  margin:{
    width: "86%",
    margin: theme.spacing(3, 4, 2)
  },
  marginControl: {
    margin: theme.spacing(0.1, 2.5),
    color: themes.palette.secondary.main
  },
  marginLink:{
    margin: theme.spacing(2, 4, 2)
  },
  submit: {
    width: "86%",
    margin: theme.spacing(3, 4, 1),
    backgroundColor: themes.palette.primary.main
  },
  link: {
    color: themes.palette.primary.main,
    "&:hover": {
        color: "#000000",
        textDecoration: "none #000000"
    }
},

}));
document.body.style = `background: ${themes.palette.primary.main}`;
export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="G" src={gectemblem} className={classes.avatar} />
        <Typography className={classes.title} component="h1" variant="h4">
          Sign in
          </Typography>
        <form className={`${classes.root}${classes.form}`} noValidate>
          <CssTextField
            className={classes.margin}
            variant="outlined"
            id="username"
            label="Register No"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <CssTextField
            className={classes.margin}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel className={classes.marginControl}
            control={
              <CustomCheckbox>
                <Checkbox name="Checkbox"/>
              </CustomCheckbox>

            }
            label={<Typography variant="h8" style={{ color: "#606060"}}>Remember me</Typography>}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container className={classes.marginLink}>
            <Grid item xs={6}>
              <Link className ={classes.link} href="#" variant="body2">
                Forgot password
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link className ={classes.link} href="#" variant="body2">
                Don't have account?SignUp
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}