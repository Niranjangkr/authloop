import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const para = "The sun dipped below the horizon, casting hues of orange and pink across the sky. The air was cool and crisp, carrying the scent of pine and earth. Birds chirped their evening songs as they settled into their nests. A gentle breeze rustled through the leaves, creating a soothing melody."

export default function Step2({ setStep, recorderControls }) {
    const [isRecording, setIsRecording] = useState(false);
    const [recordingComplete, setRecordingComplete] = useState(false);
    const [timer, setTimer] = useState(5);

    const startRecording = () => {
        setIsRecording(true);
        recorderControls.startRecording()
    }

    useEffect(() => {
       if(isRecording){
        const id = setInterval(() => {
            setTimer(pre => pre - 1);
       }, 1000);

       return () => clearInterval(id);   
    }
    }, [isRecording]);

    const stopRecording = () => {
        setRecordingComplete(true);
        setIsRecording(false);
        recorderControls.stopRecording();
        setTimeout(() => {
            setStep(3);
        }, [1000])
    }

    useEffect(() => {
        if(timer === 0){
            stopRecording();
        }
    }, [timer]);
    
    return (
        <div key="2" className="max-w-sm mx-auto my-10 p-4 rounded-lg flex flex-col justify-center mt-4 mb-4 h-full">
            <div onClick={() => setStep(1)} className="flex items-center justify-between bg-green-400 w-fit rounded-full p-2 cursor-pointer">
                <ChevronLeftIcon className="text-black" />
            </div>
            {
                recordingComplete ?
                    <div className={`flex flex-col items-center justify-center flex-1 w-[384px] slide-in ${isRecording ? "":""}`}>
                        <p className="text-center text-xl text-white h-full flex items-center justify-center">
                            All done ✅
                        </p>
                    </div> :
                    <div className="flex flex-col items-center justify-center flex-1">
                        {
                            isRecording ?
                                <div className="h-full flex flex-col items-center justify-center">
                                    <p className="text-center text-lg font-semibold text-slate-200 h-fit">{para}</p>
                                </div>
                                :
                                <p className="text-center text-xl font-semibold text-slate-200 h-full flex items-center justify-center">"click the button down to show paragraph you'll need to read out loud"</p>
                        }
                        <div className="flex flex-col items-center justify-center flex-1" />

                        {
                            !isRecording ?
                                <Button onClick={startRecording} className="bg-green-500 hover:bg-green-500 text-white p-4 rounded-full mt-auto mb-4 relative z-10">
                                    <MicIcon className="text-white" />
                                </Button> :
                                <div className="p-6 mt-auto mb-4 rounded-full w-6 h-6 border border-green-50 bg-red-400 animate-pulse flex justify-center items-center text-black font-semibold" >{timer}</div>
                        }
                    </div>
            }
        </div>
    )
}

function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function MicIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
    )
}


function MoreVerticalIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
        </svg>
    )
}
