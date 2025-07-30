import type React from "preact/compat";

const Main: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-10 items-center justify-center w-full h-[100vh]">
            <div className="flex flex-col items-center justify-center bg-black w-52 h-[550px] gap-y-4 rounded-3xl">
                <div className="flex items-center justify-center text-8xl bg-red-600/30 w-36 h-36 rounded-full">00</div>
                <div className="bg-yellow-500/30 w-36 h-36 rounded-full"></div>
                <div className="flex items-center justify-center text-8xl bg-green-600/30 w-36 h-36 rounded-full">00</div>
            </div>
            <div className="space-x-10">
                <button className="bg-green-600 px-5 py-2 rounded-lg">START</button>
                <button className="bg-red-600 px-5 py-2 rounded-lg">STOP</button>
            </div>
    </div>
 )
}

export default Main