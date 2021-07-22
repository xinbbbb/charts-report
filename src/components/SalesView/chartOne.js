import React from 'react'
import { BarChart, CartesianGrid, Bar, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { month: '1月', salesCount: 400 },
  { month: '2月', salesCount: 200 },
  { month: '3月', salesCount: 500 },
  { month: '4月', salesCount: 300 },
  { month: '5月', salesCount: 340 },
  { month: '6月', salesCount: 700 },
  { month: '7月', salesCount: 600 },
  { month: '8月', salesCount: 1000 },
  { month: '9月', salesCount: 490 },
  { month: '10月', salesCount: 420 },
  { month: '11月', salesCount: 210 },
  { month: '12月', salesCount: 105 }
];

export default function chartOne() {
  return (
    <BarChart
        margin={{top: 0, right: 0, bottom: 0, left: 0}}
        width={650}
        height={200}
        data= {data}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="month"tickMargin={8} tickSize={5} />
        <YAxis tickLine={false} axisLine={false} tickSize={15}/>
        <Tooltip />
        <Bar maxBarSize={20} dataKey="salesCount" fill="#ff7300" />
    </BarChart>
  )
}
