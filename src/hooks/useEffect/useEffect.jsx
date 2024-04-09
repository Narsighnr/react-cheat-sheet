import {useEffect} from 'react'

function UseEffect() {

    useEffect(()=>{
        alert('hello world! from none dependency useEffect ;D ');
    },[]);

    const codeSnippetNoneDeps = `
        useEffect(()=>{ 
            alert('hello world! ;D')
        },[]);
    `;

    const codeSnippetDeps = `
    useEffect(()=>{ 
        alert('hello world! ;D ')
    },[getData,sendData]);

    `
  return (
    <div className=' bg-sky-950 leading-10 p-6  w-full flex flex-col gap-8'>
        <h1 className='text-blue-300 text-2xl md:text-3xl lg:text-4xl'>useEffect():</h1>
        <p className=' text-white font-normal text-base md:text-lg lg:text-xl text-justify '>
            * - useEffect is going to do instructions scince a Function/Functions or a Component/Components or apis 
            are mounting or updating and it depends on the [](square brackets) in the second part of it,what it contains,
            calls dependencies, till they change/update or mount ,useEffect will work well!<br/>
            * - And remember that if [] is empty then useEffect whould work when the page or component is mounting or updating ,else it will
            work for its dependencies when they updating or remounting...<br/>
            * - Oh and note that useEffect first parameter is always a function that contains your instructions!<br/>
        </p>
        <div className='w-full flex flex-col'>
            <p className='text-white font-normal text-base md:text-xl lg:text-lg m-2'>Whitout dependencies:</p>
            <pre className='w-full text-wrap bg-gray-950 text-yellow-300 text-sm md:text-base lg:text-lg '>
                 <code>
                    {codeSnippetNoneDeps}
                </code>
            </pre>
            <p className='text-white font-normal text-base md:text-xl lg:text-lg m-2'>By dependencies:</p>
            <pre className='bg-gray-950 text-yellow-300 w-full text-sm md:text-base lg:text-lg  '>
                <code>
                    {codeSnippetDeps}
                </code>
            </pre>
        </div>
      
    </div>
  )
}

export default UseEffect