import {useState} from 'react'

function UseState() {
    const [counter,setCounter] = useState(0);
    const [fruit,setFruit] = useState([]);
    const [newFruit,setNewFruit] = useState('')
    counter == 0 ? setCounter(counter+1) : 0 ;
    const addFruit = ()=>{
        if (newFruit == '' ) return null
        setFruit(prevArray => [...prevArray, newFruit]);//add element in array state
    }
    const addCounter = ()=>{
        setCounter(prevCounter=> prevCounter + 1)
    }
    console.log('fruit', fruit)
  return (
    <div className='m-6  max-w-[50ch] gap-5 flex flex-col items-center border border-gray-400 p-6 overflow-hidden'>
        <div className='flex font-bold text-xl border border-gray-300 p-3'>
            <span>Counter in moment :</span>
            <h1>{counter}</h1>
        </div>
        <div className='grid font-semibold text-lg gap-3 border border-gary-300 p-3'>
            <label htmlFor="">New Array Element:</label>
            <input 
            type="text" 
            onChange={e => setNewFruit(e.target.value)}
            className='border border-red-300 p-2'
            />
        </div>
        <button className='bg-gray-200 px-4 py-2' onClick={addFruit}>Add Fruit</button>
        <button className='bg-gray-200 px-4 py-2' onClick={addCounter}>Counter++</button>
        <h1 className={`bg-blue-600 text-white p-3 !w-["100%] h-max !max-w-["100%"] ${fruit == '' ? 'hidden' : 'block'}  overflow-hidden`} >
            {
                `${fruit.join(' , ')} ` // fasele join ro raAyat kon nazari shrink nemishe to display
            }
        </h1>
    </div>
  )
}

export default UseState
