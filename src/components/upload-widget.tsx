// biome-ignore lint/performance/noNamespaceImport: < >
import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetMinimizedButton } from "./upload-widget-minimidez-button";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";

export function UploadWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <Collapsible.Root onOpenChange={setIsWidgetOpen}>
      <div className="w-full max-w-90 overflow-hidden rounded-xl bg-zinc-900 shadow-shape">
        {!isWidgetOpen && <UploadWidgetMinimizedButton />}

        <Collapsible.Content>
          <UploadWidgetHeader />

          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />
            <div className="box-content h-px border-black/50 border-t bg-zinc-800" />
            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}
