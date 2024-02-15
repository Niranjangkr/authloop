"use client"

import { Step1, Step2, Step3 } from '@/components/generate/'
import React, { useState } from 'react'

const page = () => {
  const [step, setStep] = useState(1);
  return (
    <>
       {
        step === 1 ?
        <Step1 setStep={setStep} /> :
        step === 2 ?
        <Step2 setStep={setStep} /> :
        <Step3 setStep={setStep} />
       }
    </> 
  )
}

export default page