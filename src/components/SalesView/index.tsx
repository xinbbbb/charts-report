import React, { useState } from 'react'
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'


import './index.scss'
import ChartSale from './chartSale'
import ChartVisit from './chartVisit'
import UIPickers from '../DPickers'
import RankList from './rankList'

interface PropTypes {
  className: string;
  children?: any;
  index: any;
  value: any;
}

function TabPanel(props: PropTypes) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Index() {

  // const theme = useTheme()

  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Paper className='sales-view'>
      <div className='menu-wrapper'>
        <Tabs
          className='sales-view-menu'
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
        >
          <Tab label="销售额" {...a11yProps(0)} />
          <Tab label="访问量" {...a11yProps(1)} />
        </Tabs>
        <div className='menu-right'>
          <ButtonGroup size="small" color="primary" aria-label="outlined primary button group">
            <Button>Today</Button>
            <Button>This Week</Button>
            <Button>This Month</Button>
            <Button>This Month</Button>
          </ButtonGroup>
          <UIPickers />
        </div>
      </div>
      <div className='sales-view-chart-wrapper'
      >
        <TabPanel className='charts' value={value} index={0}>
          <ChartSale />
        </TabPanel>
        <TabPanel className='charts' value={value} index={1}>
          <ChartVisit />
        </TabPanel>
        <RankList/>

      </div>
    </Paper>
  )
}
