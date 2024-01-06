// import { TransitionUp } from "./TransitionUp.jsx"
import { Fragment, useState, useEffect, useCallback } from "react"
import { murmurhash2 } from "../services/hashOps"
import Dialog from "@mui/material/Dialog"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import CloseIcon from "@mui/icons-material/Close"
import { TemplateListItem } from "./TemplateListItem"
import { localStorageGetAll } from "../services/localStorageOps"

export function TemplateDialog({
  open,
  setOpen,
  handleMenuClose,
  menuType,
  children,
}) {
  const [localStorageTemplates, setLocalStorageTemplates] = useState([])

  const handleClose = () => {
    setOpen(false)
    handleMenuClose()
  }

  const handleDelete = useCallback((templateTitle) => {
    setLocalStorageTemplates((localStorageTemplates) =>
      localStorageTemplates.filter((item) => item.title !== templateTitle)
    )
  }, [])

  const updateLocalStorageTemplates = () => {
    const localStorageTemplates = localStorageGetAll()
    setLocalStorageTemplates(Object.values(localStorageTemplates))
  }

  useEffect(() => {
    updateLocalStorageTemplates()
  }, [open])

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
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            width: "100%",
          }}
        >
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
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
        </Toolbar>
      </AppBar>

      <List>
        {menuType === "save" && (
          <TemplateListItem
            title="Create a new template..."
            lastSaveDate=""
            key={"0"}
            isCreateNewTemplateButton
            handleClose={handleClose}
          />
        )}
        {localStorageTemplates.length < 1 && menuType !== "save" ? (
          <ListItem>
            <ListItemText
              primary="There are no saved templates"
              secondary={`You have to save a template first, in order to ${menuType} it.`}
            />
          </ListItem>
        ) : (
          localStorageTemplates
            .sort((a, b) => a.lastSaveDate < b.lastSaveDate)
            .map(({ title, lastSaveDate }, index) => {
              const shouldShowDivider = menuType === "save" || index !== 0
              const uniqueKey = [
                lastSaveDate.toString().slice(-6),
                murmurhash2(title),
              ].join("")
              return (
                <Fragment key={uniqueKey}>
                  {shouldShowDivider && <Divider />}
                  <TemplateListItem
                    title={title}
                    lastSaveDate={lastSaveDate}
                    isCreateNewTemplateButton={false}
                    handleClose={handleClose}
                    menuType={menuType}
                    onDelete={handleDelete}
                  />
                </Fragment>
              )
            })
        )}
      </List>
    </Dialog>
  )
}
