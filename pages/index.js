import React, { useState, useEffect } from 'react';

import _2Way from "../components/2way.js"
// import _3Way from "../components/3way.js"


export default function Home() {
  const [active, setActive] = useState(1);
  const [usdEur, setUsdEur] = useState(0);


  // useEffect(() => {
  //   if (usdEur == 0) {
  //     (async () => {
  //       let { ask } = await binancee.fetchTicker('EUR/USDT')
  //       setUsdEur(Number((ask + 0.001).toFixed(4)))
  //       console.log("got price", ask)
  //     })()
  //   }
  // }, [usdEur]);



  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-700">
      <div className='bg-gray-600 rounded-lg'>
        {/* <div className='h-10 sm:h-10 w-full flex justify-around align-middle rounded-lg bg-gray-400'>
          <div onClick={e => setActive(1)} className={`${active == 1 ? "bg-gray-600 rounded-tr-lg" : ""} w-full bg-gray-400 text-center h-full rounded-tl-lg flex flex-col justify-center`}>2way</div>
          <div onClick={e => setActive(2)} className={`${active == 2 ? "bg-gray-600 rounded-tl-lg rounded-tr-lg" : ""} w-full bg-gray-400 text-center h-full flex flex-col justify-center`}>3way</div>
          <div onClick={e => setActive(3)} className={`${active == 3 ? "bg-gray-600 rounded-tl-lg" : ""} w-full bg-gray-400 text-center h-full rounded-tr-lg flex flex-col justify-center`}>convert</div>

        </div> */}
        <_2Way />
        {/* {active == 2 && <_3Way price={usdEur} />} */}

      </div>
    </div>
  )
}


