import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyButton } from "./copy-to-clipboard"
import { code } from "@/demo-code/demo-input"
import { DemoInput } from "./demo-input"

export function CardInput() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Input</CardTitle>
        <CopyButton className="absolute right-2 top-2" text={code}/>
      </CardHeader>
      <CardContent className="space-y-4">
        <DemoInput />
      </CardContent>
    </Card>
  )
}

