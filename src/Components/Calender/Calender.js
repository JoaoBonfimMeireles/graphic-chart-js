import React from 'react'

function Calender() {
    return(
        <div className="flex space-x-4 mr-5">
        <div className="relative">
          <select className="text-center padding block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Escolha a data de início</option>
            <option value="2024-04-01">01/04/2024</option>
            <option value="2024-04-02">02/04/2024</option>
            <option value="2024-04-03">03/04/2024</option>
          </select>
        </div>
        <div className="relative">
          <select className="text-center block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Escolha a data de fim</option>
            <option value="2024-04-05">05/04/2024</option>
            <option value="2024-04-06">06/04/2024</option>
            <option value="2024-04-07">07/04/2024</option>
          </select>
        </div>
      </div>
    )
}

export default Calender;