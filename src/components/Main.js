import React from "react"
import SideBar from "./SideBar"
import ChartContainer from "./containers/ChartContainer"

const Main = () => {
  const expenses = [
    {
      name: "Phone Recharge",
      date: "10 Jan 2022",
      amount: 50,
    },
    {
      name: "Grocery",
      date: "20 Feb 2022",
      amount: "120",
    },
  ]
  return (
    <div className="w-2/3 flex flex-col gap-6 border-2 border-blue-500 h-full">
      <input
        type="search"
        id="search"
        className="p-2 pl-4 text-sm text-gray-900 bg-gray-50 rounded-lg border  focus:ring-blue-500  dark:bg-gray-700 h-min w-min"
        placeholder="Search"
      />
      <div>
        <div className="border-4 border-red-400 flex w-full h-64 gap-6">
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

        {expenses.map((expense) => (
          <div className="m-4 w-56 h-full flex gap-4">
            <h2 className="py-6">{expense.name}</h2>
            <h3>{expense.date}</h3>
            <h3>{expense.amount}</h3>
          </div>
        ))}
      </div>
      <SideBar />
    </div>
  )
}

export default Main
