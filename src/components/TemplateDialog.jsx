import Dialog from "@mui/material/Dialog"
// import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
// import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
// import ListItem from "@mui/material/ListItem"
// import ListItemText from "@mui/material/ListItemText"
import CloseIcon from "@mui/icons-material/Close"
import { TemplateListItem } from "./TemplateListItem"
import { TemplateList } from "./TemplateList"

export function TemplateDialog({
  open,
  setOpen,
  handleMenuClose,
  menuType,
  children,
}) {
  const handleClose = () => {
    setOpen(false)
    handleMenuClose()
  }

  return (
    <Dialog
      //   fullScreen
      open={open}
      onClose={handleClose}
      //   TransitionComponent={TransitionUp}
    >
      <AppBar
        sx={{ position: "relative" }}
        style={{
          minWidth: "min(20rem, 100vw)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="span">
          {children}
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </AppBar>

      {menuType === "save" && (
        <>
          <TemplateListItem
            title="Create a new template..."
            lastSaveDate=""
            key={"0"}
            isCreateNewTemplateButton
            handleClose={handleClose}
          />
          <Divider />
        </>
      )}

      <TemplateList menuType={menuType} open={open} handleClose={handleClose} />
    </Dialog>
  )
}
