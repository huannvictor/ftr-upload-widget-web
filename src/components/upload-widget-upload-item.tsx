import { Progress, ProgressIndicator } from "@radix-ui/react-progress";
import { Download, ImageUp, Link2, RefreshCcw, X } from "lucide-react";
import { Button } from "./ui/button";

export function UploadWidgetUploadItem() {
  return (
    <div className="relative flex flex-col gap-3 overflow-hidden rounded-lg bg-white/2 p-3 shadow-shape-content">
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1 font-medium text-xs">
          <ImageUp className="size-3 text-zinc-300" strokeWidth={1.5} />
          <span>screenshot.png</span>
        </span>
        <span className="flex items-center gap-1.5 text-xxs text-zinc-400">
          <span className="line-through">3MB</span>
          <div className="size-1 rounded-full bg-zinc-700" />
          <span>
            300 KB
            <span className="ml-1 text-emerald-400">-94%</span>
          </span>
          <div className="size-1 rounded-full bg-zinc-700" />
          <span>45%</span>
        </span>
      </div>

      <Progress className="group h-1 overflow-hidden rounded-full bg-zinc-800">
        <ProgressIndicator
          className="h-1 bg-indigo-500"
          style={{ width: "43%" }}
        />
      </Progress>

      <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
        <Button size="icon-sm">
          <Download className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Download compressed file</span>
        </Button>

        <Button size="icon-sm">
          <Link2 className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Copy remote url</span>
        </Button>

        <Button size="icon-sm">
          <RefreshCcw className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Retry upload</span>
        </Button>

        <Button size="icon-sm">
          <X className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Cancel Upload</span>
        </Button>
      </div>
    </div>
  );
}
