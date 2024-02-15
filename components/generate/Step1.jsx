import { Button } from "@/components/ui/button"
import { Mic, X } from "lucide-react"
import Link from "next/link"

export default function Step1({setStep}) {
  return (
    <div key="1" className="max-w-sm mx-auto my-10 p-4 bg-gray-900 dark:bg-gray-800 rounded-lg flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-4 mt-4 ">
          <h2 className="text-xl font-semibold w-full text-center text-gray-50 dark:text-gray-200">
            Tips for creating your voice ID
          </h2>
        </div>
        <div className="mb-6 w-full h-[200px] mt-16 flex justify-center items-center">
          <img
          alt="Cocktail glass"
          className="mx-auto rounded-lg"
          height="200"
          src="/images/cyber-security.jpg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        </div>
      </div>
      <div className="p-4">
        <ul className="space-y-3 mb-6 text-slate-200 dark:text-gray-200">
          <li className="flex space-x-2">
            <span className="">➡️</span>
            <p> Make sure you're in a quiet room</p>
          </li>
          <li className="flex space-x-2">
            <span className="">➡️</span>
            <p> Hold your phone a few inches from your mouth</p></li>
          <li className="flex space-x-2">
            <span className="">➡️</span>
            <p> Speak naturally</p>
          </li>
        </ul>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
          By selecting "Create your voice ID", you consent to the collection, use, and retention described above.
          <Link className="text-blue-600 hover:text-blue-800" href="#">
            Learn more about voice data retention
          </Link>
        </p>
        <div className="flex justify-center">
          <Button onClick={() => setStep(2)} className="w-full border border-gray-200 text-gray-50 dark:text-gray-200">Create your voice ID</Button>
        </div>
      </div>
    </div>
  )
}

