import * as React from "react"
// import Button from "@mui/material/Button"
// import { styled } from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import { toKebabCase } from "../services/toKebabCase"

export function DialogButton({ buttonText, dialogText, dialogTitle }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const DIALOG_HEADER_ID = `${toKebabCase(buttonText)}-dialog-header`

  return (
    <>
      <a href="#" className="discrete-anchor" onClick={handleClickOpen}>
        {buttonText}
      </a>
      <Dialog
        onClose={handleClose}
        aria-labelledby={DIALOG_HEADER_ID}
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id={DIALOG_HEADER_ID}>
          {dialogTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{dialogText}</DialogContent>
      </Dialog>
    </>
  )
}
