import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
    {
      name: 'Jan',
      last: 195,
      current: 105,
    },
    {
      name: 'Feb',
      last: 167,
      current: 140,
    },
    {
      name: 'Mar',
      last: 145,
      current: 102,
    },
    {
      name: 'Apr',
      last: 132,
      current: 158,
    },
    {
      name: 'May',
      last: 136,
      current: 150,
    },
    {
      name: 'Jun',
      last: 124,
      current: 172,
    },
    {
      name: 'Jul',
      last: 111,
      current: 210,
    },
    {
        name: 'Aug',
        last: 104,
        current: 152,
    },
    {
        name: 'Sep',
        last: 122,
        current: 145,
    },
    {
        name: 'Oct',
        last: 128,
        current: 118,
 
    },
    {
        name: 'Nov',
        last: 157,
        current: 138,
    },
    {
        name: 'Dec',
        last: 165,
        current: 128,
    },
];

function DashboardAreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart 
            width={500}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: -10,
                bottom: 0,
            }}

        >
            <defs>
                <linearGradient id='colorLast' x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#cacaca" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#cacaca" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#15aabf" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#15aabf" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="name" axisLine={false} tick={{fontSize: 14}} />
            <YAxis tick={{fontSize: 14}} />
            <Tooltip />
            <Legend verticalAlign="top" align='left' iconType="square" iconSize={16} height={40} />
            <Area name='Last year' type="monotone" id='last_year' dataKey="last" stroke="#a2a2a2" fill="url(#colorLast)"  />
            <Area name='This year' type="monotone" id='this_year' dataKey="current" stroke="#15aabf" fill="url(#colorCurrent)" activeDot={{ r: 8 }} />
        </AreaChart>
    </ResponsiveContainer>
  )
}

export default DashboardAreaChart