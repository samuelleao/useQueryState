import { Button } from "@/components/ui/button"
import { Instagram, Github, LinkedinIcon } from "lucide-react"
import { CardCounter } from "@/components/card-counter"
import { CardInput } from "@/components/card-input"
import { CardDialog } from "@/components/card-dialog"
import { CopyButton } from "@/components/copy-to-clipboard"
import { code } from "@/components/demo-hook"

export default function Demo() {

  return (
    <div className="container relative flex flex-col min-h-screen bg-background text-foreground">
      <div>
        <header className="flex flex-col text-center justify-center items-center py-20">
          <h1 className="text-3xl font-semibold mb-2">React URL State</h1>
          <p className="text-balance md:w-1/3">Hook based on <a className="font-medium underline" target="_blank" href="https://nuqs.47ng.com/">n u q s</a> for a React Project using Vite JS with React Router DOM</p>
          <blockquote className="mt-8 space-y-4 ">
            <cite className="text-muted-foreground">Create by</cite>
            <div className="flex items-center justify-center gap-2">
              <img className="size-8 rounded-full" src="https://media.licdn.com/dms/image/v2/C4D03AQEtz7tKqKNJJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1662954279439?e=1730332800&v=beta&t=FHH4-KpwthEce3i3YlEu1t_NnZ1kpLaT_1TAubNjAvI" alt="Samuel Leão" />
              <cite>Samuel Leão</cite>
            </div>
            <CopyButton text={code} initialText="Copy Hook Code" />
          </blockquote>
          <div className="mt-8 space-y-4">
          <span className="text-muted-foreground">To use this hook, you need install the following dependencies</span>
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-2 gap-4 rounded">
          <pre><code className="text-muted-foreground">npm install react-router-dom qs</code></pre>
          <CopyButton text={"npm install react-router-dom qs"} />
          </div>
          </div>
        </header>
        <main className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardCounter />
          <CardInput />
          <CardDialog />
        </main>
      </div>
      <footer className="flex flex-col items-center gap-5 justify-center mt-auto py-20">
        <ul className="flex items-center gap-4">
          <li>
            <a href="https://www.instagram.com/samuelleaoz/" target="_blank"><Instagram className="size-5" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samuelleao/" target="_blank"><LinkedinIcon className="size-5" /></a>
          </li>
          <li><Button variant="outline"><Github className="size-5 mr-2" /> See this page in github</Button></li>
        </ul>
        <p className="md:w-1/3 text-balance text-center text-muted-foreground">
          This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.
        </p>
      </footer>
    </div>
  )
}




