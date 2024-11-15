import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";

const timeRanges = ["This Week", "This Month", "This Year"];

const donutData = [
  { name: "To Pay", value: 3450, color: "#0ea5e9" },
  { name: "To Collect", value: 2000, color: "#9333ea" },
];

const barData = [
  {
    label: "Total pending",
    value: 9260,
    color: "#0ea5e9",
    icon: FaMoneyBillWave,
    bgColor: "bg-blue-100",
    w : '80%'
  },
  {
    label: "To collect",
    value: 9260,
    color: "#9333ea",
    icon: RiMoneyDollarCircleLine,
    bgColor: "bg-purple-100",
    w : '60%'
  },
  {
    label: "To pay",
    value: 9260,
    color: "#0d9488",
    icon: BsCashStack,
    bgColor: "bg-teal-100",
    w : '40%'
  },
];

export default function Component() {
  const [timeRange, setTimeRange] = useState(timeRanges[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const total = donutData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full mt-8 max-w-xl ">
      <div className="bg-[#f8f0ff] rounded-3xl p-6">
        {/* Header with Dropdown */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Summary</h2>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              {timeRange}
              <IoMdArrowDropdown className="h-5 w-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-1 z-10">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    className="w-full text-xs px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                      setTimeRange(range);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Donut Chart */}
          <div className="relative h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {donutData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      opacity={
                        activeIndex === null || activeIndex === index ? 1 : 0.5
                      }
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <p className="text-sm text-gray-600">Total Pending</p>
              <p className="text-xl font-semibold">₹{total.toLocaleString()}</p>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            {barData.map((item, index) => (
              <div key={index} className=" flex itmes-center gap-3 ">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${item.bgColor}`}>
                    <item.icon
                      className="h-4 w-4"
                      style={{ color: item.color }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between gap-2">
                    <span className="text-[11px] text-gray-600">
                      {item.label}
                    </span>
                    <div className="text-right text-xs text-gray-600">
                      ₹{item.value.toLocaleString()}.00
                    </div>
                  </div>
                  <div className="h-3 w-40 bg-gray-300 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: item.w,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-4 mt-6">
          {donutData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


