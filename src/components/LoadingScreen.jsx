import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {

    const[text, setText] = useState("");
    const fullText = "Laddar sida";

    useEffect(() =>{
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if(index > fullText.length){
                clearInterval(interval);
                setTimeout(()=> {
                    onComplete();
                }, 1000);
            }
        }, 100);
        return () => clearInterval(interval)
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-purple-200 flex flex-col items-center justify-center">
          <div className="mb-6 text-4xl font-mono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {text}
            <span className="animate-blink ml-2 text-cyan-400">|</span>
          </div>
      
          <div className="w-[240px] h-[3px] bg-purple-800/30 rounded relative overflow-hidden shadow-[0_0_10px_rgba(192,132,252,0.2)]">
            <div className="w-[40%] h-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] animate-loading-bar" />
          </div>
        </div>
      );
      
}