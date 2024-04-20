import React from 'react'

function CustomInput({ style ,...props},ref) {
  return (
    <div>
        <input 
        {...props}
        ref={ref}
        style={{
            height:'3rem',
            width:'35ch',
            border:'3px solid darkBlue',
            padding:'.5rem',
            color: 'darkBlue',
            fontWeight: '500',
            ...style,
        }}
        type="text" 
         />
    </div>
  )
}

export default React.forwardRef(CustomInput)