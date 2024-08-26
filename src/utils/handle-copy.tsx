import { CopyFn } from "@/hooks/use-clipboard"
import { toast } from "sonner"

export function handleCopy(text: string, copy: CopyFn) {
  copy(text)
    .then(() => {
      toast.success('Copied!')
    })
    .catch(error => {
      toast.success('Failed to copy!', {
        description: error,
      })
    })
}