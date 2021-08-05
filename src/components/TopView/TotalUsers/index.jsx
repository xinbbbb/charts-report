import { AreaChart, Tooltip, Area } from 'recharts'
import DCard from '../../DCard/DCard'
import './index.css'

const data = [
  { day: '05-01', MAU: 1000, pv: -2013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { day: '05-02', MAU: 2200, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
  { day: '05-03', MAU: 2300, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { day: '05-04', MAU: 7200, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
];

export default function Index() {
  return (
    <DCard title="累计用户数" value="1,800,320">
      <DCard.Body>
        <AreaChart
          width={240}
          height={50}
          data= {data}
        >
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(0, 136, 254, 0.8)" />
              <stop offset="95%" stopColor="rgba(0, 136, 254, 0)" />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
              type="monotone"
              dataKey="MAU"
              stroke="#0088FE"
              strokeWidth="2"
              fillOpacity="1"
              fill="url(#MyGradient)"
            />     
        </AreaChart>
      </DCard.Body>
      <DCard.Footer>
        <div className="total-users-footer">
          <span>日同比</span>
          <span className="emphasis">80.02%</span>
          <div className="increase"></div>
          <span style={{paddingLeft: "25px"}}>月同比</span>
          <span className="emphasis">125.03%</span>
          <div className="decrease"></div>
        </div>
      </DCard.Footer>
    </DCard>
  )
}
