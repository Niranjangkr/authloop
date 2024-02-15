import { Button } from "@/components/ui/button"

export default function Step3({setStep}) {
  return (
    <div key={3} className="max-w-sm mx-auto my-10 p-4  rounded-lg flex flex-col justify-center mt-4 mb-4 h-full relative z-10">
      <div className=" text-white max-w-sm mx-auto p-6 rounded-lg">
        <div className="flex flex-col items-center justify-center py-12">
          <CheckIcon className="w-24 h-24 text-green-500" />
          <h2 className="text-3xl font-semibold mt-4 mb-2">You're all set</h2>
          <p className="text-gray-400 text-center text-sm px-6">
            You can now use your voice ID if you're locked out of your account and need help. To manage your voice ID,
            go to Settings.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <Button className="bg-white text-black hover:text-white hover:border hover:border-slate-200">Done</Button>
            <Button onClick={() => setStep(1)} className="bg-transparent border border-white text-white">Go to Settings</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function PanelTopCloseIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  )
}
