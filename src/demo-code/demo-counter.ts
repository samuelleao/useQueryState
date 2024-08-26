
export const code = `import useQueryState from "@/hooks/use-query-state";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

export function DemoCounter() {
  const [count, setCount] = useQueryState("count", { defaultValue: 0 })
  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCount(count - 1)}
        aria-label="Diminuir contador"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-2xl font-medium">{count}</span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCount(count + 1)}
        aria-label="Aumentar contador"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}`