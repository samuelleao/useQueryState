import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DemoCounter } from "@/components/demo-counter"
import { CopyButton } from "./copy-to-clipboard"
import { code } from "@/demo-code/demo-counter"

export function CardCounter() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CopyButton className="absolute right-2 top-2" text={code}/>
      </CardHeader>
      <CardContent className="space-y-4">
        <DemoCounter />
      </CardContent>
    </Card>
  )
}