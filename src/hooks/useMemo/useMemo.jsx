import { useMemo, useState} from 'react'

function UseMemo() {

    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);
    // const doubleNumber = slowFunction(number);// if make this active and make useMemo version deactive/comment it will cause delay in rendering whole component
    const doubleNumber = useMemo(()=>{
        return slowFunction(number);
    },[number]);//as long as the number state dosent change,useMemo gonna read the data or do last change of instruction from the cache!!!
    //and it means we memoized the slowFunction(),And it gets dependencies like useEffect hook!!!,thus slowFunction dely wont effect on change theme function now!!!

    const themeStyle= {
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
    }

    const codeSnippetNoneDeps = `
        const doubleNumber = useMemo(()=>{
            return slowFunction(number);
        },[number]);
    `;
 

  return (
    <div className='flex flex-col w-full'>
        <div className='w-full flex flex-col md:flex-row lg:flex-row h-max'>
            <div className='flex flex-col w-full md:w-1/2 lg:w-1/3 bg-emerald-700 p-6 gap-4  text-lg'>
                <input type="number" name="" id="" className=' h-10 p-2' value={number} onChange={(e)=> setNumber(parseInt(e.target.value))} />
                <button className=" px-4 py-3 bg-slate-500 text-white" onClick={()=> setDark(prevDark => !prevDark)}>Change theme</button>
                <div style={themeStyle} className='h-10 w-full p-2 text-white'>{doubleNumber}</div>
            </div>
            <div className='w-full md:w-1/2 lg:w-2/3 bg-sky-950 p-4 text-white'>
                <h1 className='text-2xl'>Descriptions:</h1>
                <p className='text-xl font-light'>
                    Here we have an input that can make the number double and show it under the Change theme button,<br/>
                    but we have an inside function for making process slow,according to the code this function make a sample situation<br/>
                    for shows why we need use <span className='underline italic'>useMemo()</span>.
                    -When you are clicking on the <span className='underline italic'>Change theme</span> button, pay attention to<br/>
                    speed of changing process!<br/>
                    Yeah! the function is effected on the entire app,Why? because one you update state in react it's going to re-render<br/>
                    your entire component, which means that <span className='unerline italic'>slowFunction()</span> gets called every<br/>
                    single time that we render our app component,So wheather we changing the theme or updating the number or wheather some<br/>
                    other component is causeing this component reRender you are going to be forcing it to go through that slow function over and over and over again!!!<br/>
                    This is really big performance problem when you have this slow function that really dont change often,So react has built-in way to solve problems like this<br/>
                    And it calls <span className='italic underline'>useMemo()</span> hook. and memo stance for memoization which is the idea of<br/>
                    caching a value so you dont have to recompute it every single time.<br/>
                    <span className='italic underline text-orange-400 text-sm'>To see the effect of slowFuncion() on entire component make the useMemo code comment and then deComment the one without useMemo!</span>
                </p>
            </div>
        </div>
        <div className='w-full flex flex-col'>
            {/* <p className='text-black font-normal text-base md:text-xl lg:text-lg m-2'>Without dependencies:</p> */}
            <pre className='w-full text-wrap bg-gray-950 text-yellow-300 text-sm md:text-base lg:text-lg '>
                 <code>
                    {codeSnippetNoneDeps}
                </code>
            </pre>
        </div>
        <div className='w-full  bg-sky-950 p-4 text-white'>
                <h1 className='text-2xl'>Tips:</h1>
                <p className='text-xl font-light'>
                    * - Well after see what useMemo did, the question is <span className='italic text-orange-400'>Why just not memoize everything?</span>, And the answer is :<be/>
                    <span className='italic text-orange-300'>Because, it does give you some performance overheads and some and some memory overhead,for example,that useMemo function must be called every single render<br/>
                    of your component so you're calling an additional function and also it's saving the the value,the previous value in some memory variable, so you're forcing your memory to get larger every time you use Memo because<br/>
                    you have to store an additional variable in memory to store that previous value.<br/>
                    </span>
                    Now this isn't a huge deal but if you start to do this in everywhere in your application especially where you don't need it, it's going to cause additional memory usage and addiotional performance problems when <br/>
                    just not using it would have been better,So it's highly recommend you only use memo in this case when you actually need the performance benefits,like when the function you're calling is incredibly slow!!!
                    <span className='italic underline text-orange-400 text-sm'>To see the effect of slowFuncion() on entire component make the useMemo code comment and then deComment the one without useMemo!</span>
                </p>
            </div>
    </div>
  );
}

const slowFunction = (num)=>{
    console.log('calling slow function');
    for (let index = 0; index < 1000000000 ; index++) {}
    return num * 2
}//this function is just an example for making the process of page slow ,to create a situation for using useMemo hook!

export default UseMemo