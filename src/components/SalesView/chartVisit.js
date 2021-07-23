import React from 'react'
import { BarChart, CartesianGrid, Bar, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { month: '1月', visitCount: 2663 },
  { month: '2月', visitCount: 4432 },
  { month: '3月', visitCount: 7546 },
  { month: '4月', visitCount: 1235 },
  { month: '5月', visitCount: 8765 },
  { month: '6月', visitCount: 5567 },
  { month: '7月', visitCount: 7686 },
  { month: '8月', visitCount: 8676 },
  { month: '9月', visitCount: 17535 },
  { month: '10月', visitCount: 9584 },
  { month: '11月', visitCount: 9595 },
  { month: '12月', visitCount: 3433 }
];

export default function chartOne() {
  return (
    <BarChart
        margin={{top: 0, right: 0, bottom: 0, left: 5}}
        width={750}
        height={200}
        data= {data}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="month"tickMargin={8} tickSize={5} />
        <YAxis tickLine={false} axisLine={false} tickSize={15}/>
        <Tooltip />
        <Bar maxBarSize={20} dataKey="visitCount" fill="#ff7300" />
    </BarChart>
  )
}
