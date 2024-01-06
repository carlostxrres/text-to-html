import * as React from "react"
import MenuItem from "@mui/material/MenuItem"
import toast from "react-hot-toast"
import { TemplateDialog } from "./TemplateDialog"
import { capitalize } from "../services/stringOps"

export function TemplateMenuItem({ children, handleMenuClose, menuType }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    if (menuType === "save") {
      const currentHTML = document.querySelector(".output-content").textContent
      if (!currentHTML) {
        toast.error("No HTML to save")
        return
      }
      // Here, show the SaveTemplateDialog. With all saved templates, and an option for a new one.
    } else if (menuType === "open") {
      console.log("Open template")
    }

    setOpen(true)
  }

  const title = `${capitalize(menuType)} template`

  return (
    <div>
      <MenuItem variant="outlined" onClick={handleClickOpen}>
        {children}
      </MenuItem>

      <TemplateDialog
        open={open}
        setOpen={setOpen}
        handleMenuClose={handleMenuClose}
        menuType={menuType}
      >
        {title}
      </TemplateDialog>
    </div>
  )
}
