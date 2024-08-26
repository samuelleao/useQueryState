import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import useQueryState from "@/hooks/use-query-state";
import { Button } from "./ui/button";

export function DemoDialog() {
  const [open, setOpen] = useQueryState('open-dialog', { defaultValue: false });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          lacus porttitor, cursus diam nec, fermentum libero.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}