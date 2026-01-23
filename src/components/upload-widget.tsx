import { UploadWidgetDropzone } from "./upload-widget-dropzone";
import { UploadWidgetHeader } from "./upload-widget-header";
import { UploadWidgetUploadList } from "./upload-widget-upload-list";

export function UploadWidget() {
  return (
    <div className="w-full max-w-90 overflow-hidden rounded-xl bg-zinc-900 shadow-shape">
      <UploadWidgetHeader />

      <div className="flex flex-col gap-4 py-3">
        <UploadWidgetDropzone />
        <div className="box-content h-px border-black/50 border-t bg-zinc-800" />
        <UploadWidgetUploadList />
      </div>
    </div>
  );
}
