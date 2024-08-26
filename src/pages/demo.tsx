import { Button } from "@/components/ui/button"
import { Instagram, Github, LinkedinIcon } from "lucide-react"
import { CardCounter } from "@/components/card-counter"
import { CardInput } from "@/components/card-input"
import { CardDialog } from "@/components/card-dialog"
import { CopyButton } from "@/components/copy-to-clipboard"
import { code } from "@/components/demo-hook"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function Demo() {

  return (
    <div className="container relative flex flex-col min-h-screen bg-background text-foreground">
      <div className="w-full">
        <header className="flex flex-col text-center justify-center items-center pt-20">
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

        </header>

        <div className="py-10 space-y-4 w-full text-center">
          <span className="text-muted-foreground">To use this hook, you need install the following dependencies</span>
          <ScrollArea className="text-muted-foreground max-w-96 flex relative bg-neutral-900 py-3 px-4 gap-4 rounded mx-auto">
            <pre className="w-max">
              <code>npm install react-router-dom qs</code>
            </pre>
            <ScrollBar orientation="horizontal" />
            <CopyButton className="absolute right-1 top-1/2 -translate-y-1/2" text={"npm install react-router-dom qs"} />
          </ScrollArea>
        </div>

        <main className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
          <CardCounter />
          <CardInput />
          <CardDialog />
        </main>
      </div>
      <footer className="flex flex-col items-center gap-5 justify-center mt-auto py-20">
        <ul className="flex md:flex-row flex-col gap-10 items-center md:gap-4">
          <li>
            <a href="https://www.instagram.com/samuelleaoz/" target="_blank"><Instagram className="size-5" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/samuelleao/" target="_blank"><LinkedinIcon className="size-5" /></a>
          </li>
          <li>
            <Button variant="outline" asChild>
              <a href="https://github.com/samuelleao/useQueryState" target="_blank">
                <Github className="size-5 mr-2" /> See this page in github
              </a>
            </Button>
          </li>
        </ul>
        <p className="md:w-1/3 text-balance text-center text-muted-foreground">
          This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.
        </p>
      </footer>
    </div >
  )
}




