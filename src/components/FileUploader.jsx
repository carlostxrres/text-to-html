import { useRef } from "react"
import MenuItem from "@mui/material/MenuItem"
import { localStorageSet } from "../services/localStorageOps"
import CloudUpload from "@mui/icons-material/CloudUpload"

export function FileUploader() {
  const fileInputRef = useRef()

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result)

          const templates = Object.values(json)
          templates.forEach(({ title, content }) =>
            localStorageSet({ key: title, value: content })
          )
        } catch (error) {
          console.error("Error parsing JSON:", error)
        }
      }

      reader.onerror = (e) => {
        console.error("Error reading file:", e)
      }

      reader.readAsText(file)
    }
  }

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".json"
        onChange={handleFileChange}
      />

      <MenuItem onClick={handleButtonClick} disableRipple>
        <CloudUpload />
        Import templates backup
      </MenuItem>
    </div>
  )
}
