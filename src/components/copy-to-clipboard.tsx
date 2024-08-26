import { CopyFn, useCopyToClipboard } from "@/hooks/use-clipboard";
import { Button } from "./ui/button";
import { Check, Copy } from "lucide-react";
import { handleCopy } from "@/utils/handle-copy";
import { Fragment } from "react/jsx-runtime";
import { cn } from "@/lib/utils";

export function CopyButton({ text, className, initialText }: { text: string, className?: string, initialText?: string }) {
  const [copiedText, copy] = useCopyToClipboard()
  return (
    <Button className={cn(className)} size={initialText ? "default" : "icon"} variant="outline" onClick={() => handleCopy(text, copy)}><>
      {copiedText ? (
        <Fragment>
          <Check className="h-4 w-4 text-emerald-400" />
          <span className="sr-only">Código copiado!</span>
        </Fragment>
      ) : (
        <Fragment>
          <Copy className="h-4 w-4" />
          {initialText ? <span className="ml-2">{initialText}</span> : <span className="sr-only">Copiar Código Completo do Contador</span>}
        </Fragment>
      )}
    </></Button>
  )
}
