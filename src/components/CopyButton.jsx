import Button from "@mui/material/Button"
import CopyAll from "@mui/icons-material/CopyAll"
import toast, { Toaster } from "react-hot-toast"

export function CopyButton({ text }) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const copyToClipboardWithToast = () => {
    if (text.length < 0 || text === "<p><br></p>") {
      toast.error("No HTML to copy")
      return
    }
    toast.promise(copyToClipboard(), {
      loading: "Copying...",
      success: "HTML successfully copied in clipboard",
      error: "HTML could not be copied in clipboard",
    })
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={copyToClipboardWithToast}
        endIcon={<CopyAll />}
      >
        Copy
      </Button>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "",
          style: {
            // borderRadius: "10px",
            background: "#252431",
            color: "#fff",
          },
        }}
      />
    </>
  )
}
