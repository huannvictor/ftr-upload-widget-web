import { Trigger } from "@radix-ui/react-collapsible";
import { Maximize2 } from "lucide-react";

export function UploadWidgetMinimizedButton() {
  return (
    <Trigger className="group flex w-full items-center justify-between bg-white/2 px-5 py-3">
      <span className="font-medium text-sm">Upload files</span>

      <Maximize2
        className="size-4 text-zinc-400 group-hover:text-zinc-100"
        strokeWidth={1.5}
      />
    </Trigger>
  );
}
