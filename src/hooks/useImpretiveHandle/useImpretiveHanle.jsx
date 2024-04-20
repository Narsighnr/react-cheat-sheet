import React, { useRef, useState } from 'react'
import CustomInput from './customInput'
import ImparetiveModal from './impretiveModal';

function UseImpretiveHandle() {

    const [value,setValue] = useState('red');
    const inputRef = useRef(null);

    const [open,setOpen] = useState(false);
    const modalRef = useRef();
console.log('modalRef.current', modalRef.current)
  return (
    <div className=' bg-sky-950 leading-10 p-6  w-full flex flex-col gap-8'>
        <h1 className='text-blue-300 text-2xl md:text-3xl lg:text-4xl'>useImpretiveHandle():</h1>
        <p className=' text-white font-light text-base md:text-lg lg:text-xl text-justify '>
            *- useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.<br/>
            *- when you use Ref for refrence to an element its ok, but what if you want to access/refrence an element inside of<br/>
            a component in the parent component? the answer is by using forwardRef and useImpretiveHandle hook.
        </p>
        <div className='w-max flex flex-col gap-3'>
            <CustomInput
            ref={inputRef}
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <button onClick={()=> inputRef.current.focus()} className=' border-none bg-gray-200 px-3 py-1'>Focus</button>
        </div>
        <br/>
        <div>
         
            <div>
                <button 
                className='px-3 p-2 border border-black bg-gray-400 text-white'
                onClick={()=> modalRef.current.focusConfirmBtn()}
                >
                    Confirm
                </button>
                <button 
                className='px-3 p-2 border border-black bg-gray-400 text-white'
                onClick={()=> modalRef.current.focusDenyBtn()}
                >
                    Deny
                </button>
                <button 
                className='px-3 p-2 border border-black bg-gray-400 text-white'
                onClick={()=> modalRef.current.focusCloseBtn()}
                >
                    Close
                </button>
                <button 
                className='px-3 p-2 border border-black bg-gray-400 text-white'
                onClick={()=> setOpen(true)}
                >
                    Open
                </button>
                <ImparetiveModal
                ref={modalRef}
                isOpen={open}
                onClose={()=> setOpen(false)}
                />
            </div>
        </div>
    </div>
    
  )
}

export default UseImpretiveHandle