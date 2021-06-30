import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 30)
  },
  paper: {
    maxWidth: 4000,
    margin: `${theme.spacing(10)}px auto`,
    padding: theme.spacing(5)
  }
}));

const message = `Please reach out to us in case of any problem .`;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={10}>
          <Grid item>
            <Avatar>V</Avatar>
          </Grid>

          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={10}>
          <Grid item>
            <Avatar>V</Avatar>
          </Grid>

          <Grid item xs>
            <Typography noWrap>
              <b>Email:</b>xyz@gmail.com <br></br>Our helpline number is
              +91123456789
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={10}>
          <Grid item>
            <Avatar>V</Avatar>
          </Grid>

          <Grid item xs>
            <Typography>
              <b>Address:</b>Mumbai,Maharastra,Kalyan,411078,Nagar Road V Mall
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
