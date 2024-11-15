import { BsThreeDots } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
// import {Link} from 'react-router-dom'

const data = [
  { value: 300 },
  { value: 150 },
  { value: 400 },
  { value: 350 },
  { value: 500 },
]

export default function AllDataPreview( {title,path,Totaodata}) {
  return (
    <div className="w-full ">
      <div className="rounded-3xl  relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <FaGraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-semibold">{Totaodata}</h2>
              <p className="text-gray-600 text-sm">{title}</p>
            </div>
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            {/* <Link to={path} > */}
            <BsThreeDots className="h-5 w-5" />
            {/* </Link> */}
          </button>
        </div>

        {/* Chart */}
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9333ea" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#9333ea"
                strokeWidth={2}
                fill="url(#colorValue)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}