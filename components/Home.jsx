import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WorksComp } from "./workcomp"

export function HomeComp() {
  return (
    <div>
      <header className="w-full py-6 lg:py-12 flex justify-center">
        <div className="container flex flex-col items-center gap-2 px-4 md:px-6 lg:gap-4 lg:flex-row lg:justify-between">
          <Link className="flex items-center gap-2 text-2xl font-extrabold" href="#">
            Auth
            <span className="text-gray-400 font-extrabold">loop</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium tracking-wide">
            
            <Link
              className="flex items-center gap-1.5 transition-colors hover:text-gray-900 dark:hover:text-gray-50 ml-2"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-1.5 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              How It Works
            </Link>
            <Link
              className="flex items-center gap-1.5 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Features
            </Link>
            
            <Link
              className="flex items-center gap-1.5 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="border rounded-lg border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Sign In
            </Link>
            <Link
              className="rounded-lg border border-gray-200 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 "
              href="#"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <Button className="p-1.5 rounded-full" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="w-full flex-col items-center">
        <section className="w-full py-12 md:py-16 lg:py-20 border-t flex justify-center border-gray-700 h-[80vh] mb-6">
          <img
            alt="Hero image"
            className="absolute inset-0 object-cover z-0 transform -translate-x-1/2 -translate-y-1/2 top-[60%] left-1/2 opacity-45 w-[700px] h-[700px]"
            src="/loop-light.png"
          />
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 z-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Introducing</div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Voice Fingerprint Authentication
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your unique voice, your secure key. Say goodbye to passwords with the power of voice biometrics.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Explore How It Works
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="/generate"
              >
                Try Voice Fingerprint now
              </Link>
            </div>
          </div>
        </section>
        <WorksComp />
        <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_700px]">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="393"
              src="https://assets-global.website-files.com/6146143fd598aae11fb65972/6230915b20391fdce22784a1_HRZ2NTrYcFwAshsWBIAP1CHI3tjOMMv6F1p-wMCASeSO0KSUR_6z57Yy54Bhpai7MovWZ6DgrdWvShGd9Da37IUooXr1yiDSTAXdNIW_b4hxXvs8s7VOAIYoPokGThmhV7wquhoN.jpeg"
              width="700"
            />
            
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frictionless User Experience</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Effortless logins, every time. Our voice authentication ensures a seamless user experience with secure
                  access to accounts and services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Robust Security</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Cutting-edge ML algorithms for top-notch protection. Our voice fingerprint technology offers advanced
                  security, accurately identifying users and preventing unauthorized access.
                </p>
              </div>
            </div>
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="393"
              src="https://assets-global.website-files.com/61845f7929f5aa517ebab941/63a06f726c26c8dda5deba70_The%20Battle%20of%20Authentication-%20Which%20Type%20Is%20Most%20Secure.jpg"
              width="700"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience the Innovation</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Contact us to learn more about our voice fingerprint authentication technology. Let{"'"}s discuss how we can
                integrate innovation and security for your organization.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-16 lg:py-20 flex justify-center">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have questions? Want to know more about our solutions? Reach out to us. We{"'"}re here to help.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Input placeholder="Enter your email" required type="email" />
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="flex-shrink-0 w-full py-6 border-t flex justify-center border-gray-700">
        <div className="container flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="hidden md:inline-block">© 2024 Authloop. All rights reserved.</span>
          <span className="mx-2 border-l h-4 border-gray-200 dark:border-gray-800" />
          <Link
            className="flex items-center gap-1.5 underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="flex items-center gap-1.5 underline transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </div>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
