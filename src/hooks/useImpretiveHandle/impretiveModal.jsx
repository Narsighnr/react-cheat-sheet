import React, { useImperativeHandle, useRef } from 'react'

function ImparetiveModal({isOpen,onClose},ref) {

    const closeRef = useRef();
    const denyRef = useRef();
    const confirmRef = useRef();

    useImperativeHandle(ref,()=>{
        return{
            focusCloseBtn: () => closeRef.current.focus(),
            focusConfirmBtn: () => confirmRef.current.focus(),
            focusDenyBtn: () => denyRef.current.focus(),
        }
    },[]);

    if (!isOpen) return null

  return (
    <div className='w-[40ch] h-[30ch] border-2 border-black flex flex-col bg-white gap-3' ref={ref}>
        <div className='flex justify-end p-2 bg-black'>
            <button className=' bg-gray-200 w-10 h-10 ' ref={closeRef} onClick={onClose}>X</button>
        </div>
        <div className='flex justify-center text-lg '>
            Do you confirm?
        </div>
        <div className='flex justify-around mt-8'>
            <button className='px-2 border border-black bg-green-600' ref={confirmRef}>Yes</button>
            <button className='px-2 border border-black bg-red-500' ref={denyRef}>No</button>
        </div>
    </div>
  )
}

export default React.forwardRef(ImparetiveModal)