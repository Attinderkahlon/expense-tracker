import React from "react"
import ChartContainer from "./containers/ChartContainer"
import data from "../expenses.json"

const Main = () => {
  return (
    <div className="w-full flex flex-col gap-6 border-2 text-white border-blue-500 bg-slate-900 h-screen p-5">
      <input
        type="search"
        id="search"
        className="p-2 pl-4 text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500  dark:bg-gray-700 h-min w-min"
        placeholder="Search"
      />
      <div>
        <div className="border-1  border-red-400 flex w-full h-64 gap-6">
          <ChartContainer>
            <div>Hello World 2</div>
          </ChartContainer>
          <ChartContainer>
            <div>Hello World 2</div>
          </ChartContainer>
          <div className="flex flex-col  gap-6 text-center">
            <div className="w-28 px-4 h-full bg-gray-50 rounded-2xl	 dark:bg-gray-800">
              Hello World
            </div>
            <div className="w-28 px-4 h-full bg-gray-50 rounded-2xl	 dark:bg-gray-800">
              Hello World
            </div>
          </div>
        </div>

        {data.map((expense) => (
          <div className="m-2 p-8 w-full flex justify-around ">
            <h2>{expense.name}</h2>
            <h3>{expense.date}</h3>
            <h3>{expense.amount}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
