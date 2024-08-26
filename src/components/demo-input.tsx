import useQueryState from "@/hooks/use-query-state"
import { Input } from "./ui/input"

export function DemoInput() {
  const [inputValue, setInputValue] = useQueryState("search", { defaultValue: "" })

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  )
}