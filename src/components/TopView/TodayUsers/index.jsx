import React from 'react'
import DCard from '../../DCard/DCard'
import { BarChart, Bar, Tooltip } from 'recharts'

const data = [
  { name: 'food', uv: -2000, pv: 1013, amt: -4500, bmk: -4301, time: 1, uvError: [100, 50], pvError: [110, 20] },
  { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, bmk: 2000, time: 2, uvError: 120, pvError: 50 },
  { name: 'storage', uv: 3200, pv: 1398, amt: 5000, bmk: 3000, time: 3, uvError: [120, 80], pvError: [200, 100] },
  { name: 'digital', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
  { name: 'cars', uv: 2800, pv: 2800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
  { name: 'bridge', uv: 2800, pv: 3800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 },
  { name: 'digital', uv: 2800, pv: 4800, amt: 4000, bmk: 1500, time: 4, uvError: 100, pvError: 30 }
];

export default function Index() {
  return (
    <DCard title="今日交易用户数" value="536,320">
      <DCard.Body>
        <BarChart
          width={240}
          height={50}
          data= {data}
        >
          <Tooltip />
          <Bar dataKey="pv" fill="#ff7300" />
        </BarChart>
      </DCard.Body>
      <DCard.Footer>
        <span>退货率</span>
        <span className="emphasis">3.2%</span>
      </DCard.Footer>
    </DCard>
  )
}
