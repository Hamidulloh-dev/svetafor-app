import { useEffect, useRef, useState } from 'preact/hooks'
import './index.css'
// import Main from './layouts/Main'


export function App() {

  const [light, setLight] = useState<'red' | 'redYellow' | 'green' | 'greenYellow'>('red')
  const intervalRef = useRef<number | null>(null)
    
    const start = () => {
        if (intervalRef.current) return 
            intervalRef.current = setInterval(() => {
              setLight((e) => {
                  if (e === 'red') return 'redYellow'
                  if (e === 'redYellow') return 'green'
                  if (e === 'green') return 'greenYellow'
                  return 'red'
              })
            }, 1000)
        console.log(intervalRef.current);
        
    }

    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [])

  return <div className="flex flex-col gap-y-10 items-center justify-center w-full h-[100vh]">
            <div className="flex flex-col items-center justify-center bg-black w-52 h-[550px] gap-y-4 rounded-3xl">
          
                <div className={`flex items-center justify-center text-8xl w-36 h-36 rounded-full
                     ${light === 'red' ? 'bg-red-600' : 'bg-red-600/30'}`}>00</div>
          
                <div className={` w-36 h-36 rounded-full 
                    ${light === 'redYellow' || light === 'greenYellow' ? 'bg-yellow-500' : 'bg-yellow-500/30'}`}></div>
          
                <div className={`flex items-center justify-center text-8xl  w-36 h-36 rounded-full 
                    ${light === 'green' ? 'bg-green-600' : 'bg-green-600/30'}`}>00</div>
          
            </div>
            <div className="space-x-10">
                <button onClick={start} className="bg-green-600 px-5 py-2 rounded-lg">START</button>
                <button onClick={stop} className="bg-red-600 px-5 py-2 rounded-lg">STOP</button>
            </div>
    </div>
}
