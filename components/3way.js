import React, { useState, useEffect } from 'react';


export default function _3Way({ price }) {
    const [odd1, setOdd1] = useState(0);
    const [odd2, setOdd2] = useState(0);
    const [odd3, setOdd3] = useState(0);

  
    const [arbPer, setArbPer] = useState(0);
    const [totalStake, setTotalStake] = useState(0);

    useEffect(() => {
        if (odd1 > 0 && odd2 > 0) {
          setArbPer(calArbPer(odd1, odd2, odd3))
        }
      }, [odd1, odd2, odd3, totalStake]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'odd1') {
          setOdd1(Number(value).toFixed(3));
        }
        if (name === 'odd2') {
          setOdd2(Number(value).toFixed(3));
        }
        if (name === 'odd3') {
            setOdd3(Number(value).toFixed(3));
          }
      };
    
      function copyVal(event) {
        const { innerHTML } = event.target;
        navigator.clipboard.writeText(innerHTML)
      }
    return (
        <>
            <div className="h-1/2 sm:h-1/3 grid grid-cols-4 gap-3 p-5 rounded-lg bg-gray-600">
                <div className="w-full h-full flex flex-col justify-center text-center font-normal text-xs text-gray-200">
                    <div>apple#3333</div>
                    <div>{price}</div>
                </div>
                <div className="w-full h-full flex flex-col justify-center text-center font-bold text-xl text-gray-200">Stake</div>
                <div className="w-full h-full flex flex-col justify-center text-center font-bold text-xl text-gray-200">USD</div>
                <div className="w-full h-full flex flex-col justify-center text-center font-bold text-xl text-gray-200">EUR</div>
                <div className="w-full h-full">
                    <input className='bg-gray-400 text-center w-full h-full placeholder-gray-700 font-medium'
                        type="number"
                        name='odd1'
                        placeholder='Odd 1'
                        onInput={e => setOdd1(e.target.value)}
                    />
                </div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.firstOddPer, arbPer.total) || 0).toFixed(2)}</div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.firstOddPer, arbPer.total) * price || 0).toFixed(2)}</div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.firstOddPer, arbPer.total) / price || 0).toFixed(2)}</div>
                <div className="w-full h-full">
                    <input className='bg-gray-400 text-center w-full h-full placeholder-gray-700 font-medium'
                        type="number"
                        name='odd2'
                        placeholder='Odd 2'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.secondOddPer, arbPer.total) || 0).toFixed(2)}</div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.secondOddPer, arbPer.total) * price || 0).toFixed(2)}</div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.secondOddPer, arbPer.total) / price || 0).toFixed(2)}</div>
                <div className="w-full h-full">
                    <input className='bg-gray-400 text-center w-full h-full placeholder-gray-700 font-medium'
                        type="number"
                        name='odd3'
                        placeholder='Odd 3'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.thirdOddPer, arbPer.total) || 0).toFixed(2)}</div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.thirdOddPer, arbPer.total) * price || 0).toFixed(2)}</div>
                <div className="bg-gray-500 flex flex-col w-full h-full text-center justify-center text-gray-300 font-semibold" onClick={copyVal}>{(calStakes(totalStake, arbPer.thirdOddPer, arbPer.total) / price || 0).toFixed(2)}</div>
                <div className="w-full h-full text-center">
                    <input className='bg-gray-400 text-center w-full h-full placeholder-gray-700 font-medium'
                        type="number"
                        placeholder='Stake'
                        onChange={e => setTotalStake(e.target.value)}
                    />
                </div>
                <div className="w-full h-full text-center flex flex-col justify-center text-gray-300">
                    <div>
                        Payout:&nbsp;
                        <div className={`font-bold ${arbPer.total > 100 ? "text-red-400" : "text-green-400"}`}>
                            {((totalStake / (arbPer.total / 100)) || 0).toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full text-center flex flex-col justify-center text-gray-300">
                    <div>
                        Profit:&nbsp;
                        <div className={`font-bold ${arbPer.total > 100 ? "text-red-400" : "text-green-400"}`}>
                            {((totalStake / (arbPer.total / 100)) - totalStake || 0).toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full text-center flex flex-col justify-center text-gray-300">
                    <div>
                        ROI:&nbsp;
                        <div className={`font-bold ${arbPer.total > 100 ? "text-red-400" : "text-green-400"}`}>
                            {((totalStake / (arbPer.total / 100) * 100) / totalStake - 100 || 0).toFixed(2)}%
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function calStakes(stake, oddPer, arbper) {
    return Math.round(((stake * oddPer) / arbper) * 100) / 100
  }
  
  // function ca
  function calArbPer(firstOdd, secondOdd, thirdOdd) {
    return {
      "firstOdd": firstOdd,
      "firstOddPer": ((1 / firstOdd) * 100).toFixed(6),
      "secondOdd": secondOdd,
      "secondOddPer": ((1 / secondOdd) * 100).toFixed(6),
      "thirdOdd": thirdOdd,
      "thirdOddPer": ((1 / thirdOdd) * 100).toFixed(6),
      "total": ((1 / firstOdd) * 100 + (1 / secondOdd) * 100 + (1 / thirdOdd) * 100).toFixed(6)
    }
  }
  