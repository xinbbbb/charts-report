import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TodaySales from './TotalSales'
import TotalOrders from './TotalOrders'
import TodayUsers from './TodayUsers'
import TotalUsers from './TotalUsers'

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
          <TotalOrders />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TodayUsers />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TotalUsers />
        </Grid>
      </Grid>
    </div>
  )
}
