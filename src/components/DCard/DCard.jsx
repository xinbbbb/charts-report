import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import './index.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  }
})
const Body = () => null

const Footer = () => null

const DCard = ({ title, value, children }) => {
  const classes = useStyles();
  let body, footer
  if(Array.isArray(children)) {
    body = children.find(el => el.type === Body)
    footer = children.find(el => el.type === Footer)
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <div className="title">{ title }</div>
          <div className="value">{ value }</div>
          <main className="chart">
            { body ? body.props.children : null }
          </main>
          <div className="line" />
          <footer className="total">
            { footer ? footer.props.children : null }
          </footer>
        </CardContent>
      </Card>
    </div>
  )
} 
DCard.Body = Body
DCard.Footer = Footer

export default DCard