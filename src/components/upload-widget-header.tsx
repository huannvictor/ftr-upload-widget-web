import { Minimize2 } from "lucide-react";
import { Button } from "./ui/button";

export function UploadWidgetHeader() {
  return (
    <div className="flex w-full items-center justify-between border-zinc-800 border-b bg-white/2 p-4 py-2">
      <span className="font-medium text-sm">Upload files</span>

      <Button className="-mr-2" size="icon">
        <Minimize2 className="size-4" strokeWidth={1.5} />
      </Button>
    </div>
  );
}
