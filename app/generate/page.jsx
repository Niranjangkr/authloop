"use client"

import { Step1, Step2, Step3 } from '@/components/generate/'
import React, { useState } from 'react'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const page = () => {
  const [step, setStep] = useState(1);
  const [audioBlob, setAudioBlob] = useState(null);
  const recorderControls = useAudioRecorder();

  return (
    <>
      <img
        alt="Hero image"
        className="absolute inset-0 object-cover z-0 transform -translate-x-1/2 -translate-y-1/2 top-[60%] left-1/2 opacity-45 w-[700px] h-[700px]"
        src="/loop-light.png"
      />
      {
        step === 1 ?
          <Step1 setStep={setStep} /> :
          step === 2 ?
            <Step2 recorderControls={recorderControls} setStep={setStep} /> :
            <Step3 setStep={setStep} />
      }

      <div className='hidden'>
        <AudioRecorder
          onRecordingComplete={(blob) => {
            console.log("helo", blob)
            setAudioBlob(blob);
          }}
          recorderControls={recorderControls}
        />
      </div>
    </>
  )
}

export default page