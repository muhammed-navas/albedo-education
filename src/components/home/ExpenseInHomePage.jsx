"use client"

import React, { useState } from 'react'
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", totalHours: 80, totalSalary: 70 },
  { month: "Feb", totalHours: 55, totalSalary: 70 },
  { month: "Mar", totalHours: 95, totalSalary: 65 },
  { month: "Apr", totalHours: 95, totalSalary: 65 },
  { month: "May", totalHours: 35, totalSalary: 70 },
]

export default function ExpenseRatio() {
  const [period, setPeriod] = useState('this-month')

  return (
    <div className="w-full max-w-4xl ">
      <div className="bg-transparent rounded-3xl ">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-base font-medium text-gray-500">
                Expense Ratio
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-semibold">₹8,000</span>
                <span className="text-sm text-gray-500">Total Profit</span>
              </div>
            </div>
            <select 
              className="w-[140px] bg-white border border-gray-300 rounded-md px-2 py-1 text-xs"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >{["this Month","this Week","today"].map((item,i)=>
              <option key={i} value={item}>{item}</option>
            )}
            </select>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Total Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>Total Salary</span>
            </div>
          </div>
        </div>
        <div className="">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#cec6c8" />
              <XAxis
                dataKey="month"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 125]}
                ticks={[0, 25, 50, 75, 100, 125]}
              />
              <Tooltip 
                contentStyle={{ background: 'white', border: 'none', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                labelStyle={{ color: '#333' }}
              />
              <Line
                type="monotone"
                dataKey="totalHours"
                stroke="hsl(216, 100%, 50%)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  stroke: 'white',
                  strokeWidth: 2,
                  fill: "hsl(216, 100%, 50%)",
                }}
              />
              <Line
                type="monotone"
                dataKey="totalSalary"
                stroke="hsl(280, 100%, 50%)"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 6,
                  stroke: 'white',
                  strokeWidth: 2,
                  fill: "hsl(280, 100%, 50%)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}