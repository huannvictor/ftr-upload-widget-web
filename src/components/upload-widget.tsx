// biome-ignore lint/performance/noNamespaceImport: < >
import * as Collapsible from "@radix-ui/react-collapsible";
import { motion, useCycle } from "motion/react";
import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetMinimizedButton } from "./upload-widget-minimized-button";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";

export function UploadWidget() {
  const [isWidgetOpen, toggleWidgetOpen] = useCycle(false, true);

  return (
    <Collapsible.Root onOpenChange={() => toggleWidgetOpen()}>
      <motion.div
        animate={isWidgetOpen ? "open" : "closed"}
        className="w-90 overflow-hidden rounded-xl bg-zinc-900 shadow-shape"
        variants={{
          closed: {
            width: "max-content",
            height: 44,
            transition: {
              type: "keyframes",
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
