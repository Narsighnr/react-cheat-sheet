import React, { useEffect, useRef, useState } from 'react'

function UseRef() {

    const [count,setCount] = useState(0);

    const countRef = useRef(0);

    const inputRef = useRef(null);

    useEffect(()=>{ 
        inputRef.current.focus();
    },[]);

    const codeSnippet = `

    const inputRef = useRef(null);

    useEffect(()=>{ 
        inputRef.current?.focus();
    },[]);

    return(
        <>
            <input type="text" name="" id="" placeholder='type here...' ref={inputRef}/>
        </>
    )
    `;

    const handleIncrement = ()=>{
        setCount(count + 1);
        countRef.current++;

        console.log('State', count);
        console.log('Ref', countRef.current);
    }
 

  return (
    <div className=' bg-sky-950 leading-10 p-6  w-full flex flex-col gap-8'>
        <h1 className='text-blue-300 text-2xl md:text-3xl lg:text-4xl'>useRef():</h1>
        <p className=' text-white font-light text-base md:text-lg lg:text-xl text-justify '>
            ref is somthing similiar to state in the sense that you can hold and mutate values that are used in your component but the main diffrence is<br/>
            that unlike State , Ref does not trigger a re-render of the component and ref values are not used in the return body of the acctual component.<br/>
            its not for somthing that you're rendering,its a hook that is used for valuesb that are not needed for rendering.
            for more understanding,lets take a look at an example:
        </p>
    
        <div className=' w-max h-max bg-green-500 text-white p-6 flex flex-col justify-center items-center gap-4'>
            <div className='text-xl'>Count: {count}</div>
            <button onClick={handleIncrement} className=' bg-blue-900 text-white rounded-lg px-4 py-2'>Increment</button>
        </div>
        <p className=' text-white font-light text-base md:text-lg lg:text-xl text-justify '>
            * - first of all open the browser console then look at State's value logged and Ref's one, you will see the first<br/>
            log of State is 0 when you clicked on the increment button but the value of {count} is 1.and at that moment Ref will show<br/>
            1 in console log.its because State will accesss to the value only in next render,but Ref dosent.
            * - you should never use Ref inside of a return function because Ref dosent re-render your component so when you are<br/>
            incresing the ref,it wont show the value inside of returned component unless you use State beside of it.
        </p>
        <h3 className='text-lg font-semibold'>Another use case of useRef</h3>
        <pre className='w-full text-wrap bg-gray-950 text-yellow-300 text-sm md:text-base lg:text-lg '>
            <code>{codeSnippet}</code>
        </pre>
        <p className=' text-white font-light text-base md:text-lg lg:text-xl text-justify '>
            * - you can also access the element by useRef.current, it returns an object and then you can see what can you do with!!!<br/>
            * - it will refrence to the element by using "ref" prop inside of html tag.
        </p>
        <div className=' w-max h-max bg-green-500 text-white p-6 flex flex-col justify-center items-center gap-4'>
            <input type="text" name="" id="" placeholder='type here...' ref={inputRef}/>
        </div>
    </div>
  )
}

export default UseRef