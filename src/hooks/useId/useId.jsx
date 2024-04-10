import React, { useId } from 'react'

function UseId() {
    const id = useId();
    const id2 = useId();

    console.log('Generated id by useId():',id);
    console.log('Generated id by useId() and combinition with our keyword:',`${id}-email`);
    console.log('Generated id by useId() and combinition with our keyword:',`${id}-pass`);

    console.log('Second Generated id by useId():',id2);


  return (
    <div className='h-max flex flex-col gap-6  bg-sky-950 p-4 text-white'>
      <div className='   '>
        <h1 className='font-normal text-xl md:text-2xl lg:text-3xl'>UseId():</h1>
        <p className='text-base md:text-xl lg:text-xl mt-4 leading-10'>
          useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. <br/>
        </p>
        <h1 className='mt-4 text-base md:text-xl lg:text-xl'>Tips:</h1>
        <p className=' text-orange-400 text-base md:text-xl lg:text-xl'>
          * -useId is a Hook, so you can only call it at the top level of your component or your own Hooks. <br/>
          You can’t call it inside <span className=' underline italic'>loops</span> or <span className=' underline italic'>conditions</span>. If you need that, extract a new component and move the state into it.<br/>
          * -useId <span className=' underline italic'>should not</span> be used to generate <span className=' underline italic'>keys in a list</span> . Keys should be generated from your data.
        </p>
      </div>
        <form 
        action=""
        className='lg:w-1/3 md:w-2/3 w-full flex flex-col p-4  gap-4  bg-gray-950 text-yellow-300 shadow-md'
        >
            <label htmlFor={`${id}-email`}  >Email:</label>
            <input type="email" name="" id={`${id}-email`} className='h-10' />
            <label htmlFor={`${id}-password`}>Password:</label>
            <input type="password" name="" id={`${id}-pass`} className='h-10' />
        </form>
        <div className=' bg-gray-950 lg:w-1/3 md:w-2/3 w-full p-4'>
          <span className='font-semibold text-2xl '>{`Display generated id ===>`}</span><span className='font-semibold text-2xl text-red-600 ml-2'>{id}</span>
          <small className='block underline italic mt-3'>see more? open console log</small>
        </div>
    </div>
  )
}

export default UseId
