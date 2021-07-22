import React from 'react'
import DCard from '../../DCard/DCard'
import './index.css'

export default function Index() {

  return (
    <div >
      <DCard title="累计销售额" value="￥ 32,039,165">
        <DCard.Body>
          <div className="compare-wrapper">
            <div className="compare">
              <span>日同比</span>
              <span className="emphasis">7.33%</span>
              <div className="increase"></div>
            </div>
            <div className="compare">
              <span>月同比</span>
              <span className="emphasis">38.79%</span>
              <div className="decrease"></div>
            </div>
          </div>
        </DCard.Body>
        <DCard.Footer>
          <span>昨日销售额</span>
          <span className="emphasis">￥ 30,000,000</span>
        </DCard.Footer>
      </DCard>
    </div>
  )
}
