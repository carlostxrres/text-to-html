import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"

export function NewTemplateDialog({ open, onClose, onSave }) {
  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>Template title</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Type a title for your new template:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="template-title"
          label="Template title"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>Cancel</Button>
        <Button
          onClick={() => {
            const title = document.getElementById("template-title").value
            onSave(title)
            onClose(false)
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
