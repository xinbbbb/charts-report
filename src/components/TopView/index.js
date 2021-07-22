import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TodaySales from './TotalSales'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}))

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TodaySales />
        </Grid>
        <Grid item xs={6} sm={3}>
          {/* <DCard /> */}
        </Grid>
        <Grid item xs={6} sm={3}>
         {/* <DCard /> */}
        </Grid>
        <Grid item xs={6} sm={3}>
         {/* <DCard /> */}
        </Grid>
      </Grid>
    </div>
  )
}
