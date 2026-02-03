// biome-ignore lint/performance/noNamespaceImport: < >
import * as Collapsible from "@radix-ui/react-collapsible";
import { motion, useCycle } from "motion/react";
import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetMinimizedButton } from "./upload-widget-minimized-button";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";

export function UploadWidget() {
  const isThereAnyPendingUpload = true;
  const [isWidgetOpen, toggleWidgetOpen] = useCycle(false, true);

  return (
    <Collapsible.Root asChild onOpenChange={() => toggleWidgetOpen()}>
      <motion.div
        animate={isWidgetOpen ? "open" : "closed"}
        className="w-90 animate-border overflow-hidden rounded-xl border border-transparent bg-zinc-900 data-[state=closed]:data-[progress=false]:shadow-shape data-[state=closed]:rounded-3xl data-[state=open]:shadow-shape data-[state=closed]:data-[progress=true]:[background:linear-gradient(45deg,#09090B,--theme(--color-zinc-900)_50%,#09090B)_padding-box,conic-gradient(from_var(--border-angle),--theme(--color-zinc-700/.48)_80%,--theme(--color-indigo-500)_86%,--theme(--color-indigo-300)_90%,--theme(--color-indigo-500)_94%,--theme(--color-zinc-600/.48))_border-box]"
        data-progress={isThereAnyPendingUpload}
        variants={{
          closed: {
            width: "max-content",
            height: 44,
            transition: {
              type: "inertia",
            },
          },
          open: {
            width: 360,
            height: "auto",
            transition: {
              duration: 0.1,
            },
          },
        }}
      >
        {!isWidgetOpen && <UploadWidgetMinimizedButton />}

        <Collapsible.Content>
          <UploadWidgetHeader />

          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />
            <div className="box-content h-px border-black/50 border-t bg-zinc-800" />
            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </motion.div>
    </Collapsible.Root>
  );
}
