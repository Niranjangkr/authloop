import { MagicWandIcon, LockClosedIcon, KeyboardIcon } from '@radix-ui/react-icons'

export function WorksComp() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 flex justify-center mt-[100px]">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">Discover the Magic</h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Unleash the power of voice authentication in 3 enchanting steps
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 max-w-sm sm:grid-cols-3 md:gap-8 lg:max-w-4xl lg:grid-cols-3 xl:max-w-5xl xl:gap-10 h-[30vh] min-h-[300px]">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-full border border-gray-200 w-14 h-14 flex items-center justify-center bg-white dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <MagicWandIcon className="w-5 h-5 text-gray-400 stroke-1 dark:text-gray-400 dark:stroke-1 flex items-center justify-center" />
            </div>
            <h3 className="text-lg font-semibold">Enchant</h3>
            <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
              Cast a spell with your voice to begin the authentication journey.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-full border border-gray-200 w-14 h-14 flex items-center justify-center bg-white dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <LockClosedIcon className="w-5 h-5 text-gray-400 stroke-1 dark:text-gray-400 dark:stroke-1" />
            </div>
            <h3 className="text-lg font-semibold">Discover</h3>
            <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
              Witness the mystical recognition of your unique voice pattern.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-full border border-gray-200 w-14 h-14 flex items-center justify-center bg-white dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <KeyboardIcon className="w-5 h-5 text-gray-400 stroke-1 dark:text-gray-400 dark:stroke-1" />
            </div>
            <h3 className="text-lg font-semibold">Unlock</h3>
            <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
              Open the gates to a world of possibilities with your authenticated voice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
