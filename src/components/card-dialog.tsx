import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyButton } from "./copy-to-clipboard"
import { code } from "@/demo-code/demo-dialog"
import { DemoDialog } from "./demo-dialog"

export function CardDialog() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Dialog</CardTitle>
        <CopyButton className="absolute right-2 top-2" text={code}/>
      </CardHeader>
      <CardContent className="space-y-4">
        <DemoDialog />
      </CardContent>
    </Card>
  )
}

