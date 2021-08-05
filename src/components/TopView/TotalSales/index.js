import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DCard from '../../DCard/DCard'

const useStyles = makeStyles({
  compareWrapper: {
      fontSize: 12,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
  },
  compare: {
    marginTop: 5,
    color: '#666',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default function Index() {
  const classes = useStyles();

  return (
    <div >
      <DCard title="累计销售额" value="￥ 32,039,165">
        <DCard.Body>
          <div className={classes.compareWrapper}>
            <div className={classes.compare}>
              <span>日同比</span>
              <span className="emphasis">7.33%</span>
              <div className="increase"></div>
            </div>
            <div className={classes.compare}>
              <span>月同比</span>
              <span className="emphasis">38.79%</span>
              <div className="decrease"></div>
            </div>
          </div>
        </DCard.Body>
        <DCard.Footer>
          <span>昨日销售额</span>
          <span className="emphasis">￥ 30,100,000</span>
        </DCard.Footer>
      </DCard>
    </div>
  )
}
