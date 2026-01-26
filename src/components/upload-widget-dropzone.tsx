import { useDropzone } from "react-dropzone";

export function UploadWidgetDropzone() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop(acceptedFiles) {
      console.log(acceptedFiles);
    },
  });
  return (
    <div className="flex flex-col gap-3 px-3">
      <div
        className="flex h-32 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-zinc-700 border-dashed bg-black/20 p-5 text-zinc-400 transition-colors hover:border-zinc-600 data-[active=true]:border-indigo-500 data-[active=true]:bg-indigo-500/10 data-[active=true]:text-indigo-400"
        data-active={isDragActive}
        {...getRootProps()}
      >
        <input type="file" {...getInputProps()} />

        <span className="text-xs">Drop your files here or</span>
        <span className="text-xs underline">click to open picker</span>
      </div>

      <span className="text-xs text-zinc-400">
        Only PNG and JPG files are supported.
      </span>
    </div>
  );
}
