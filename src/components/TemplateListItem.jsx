import { useState, useCallback } from "react"
import { ListItemText, ListItemButton } from "@mui/material"
import { NewTemplateDialog } from "./NewTemplateDialog"
import { getRelativeTime } from "../services/getRelativeTime"
import { sendTemplateLoad } from "../services/eventCommunication"
import {
  localStorageSet,
  localStorageGet,
  localStorageDelete,
} from "../services/localStorageOps"
import toast from "react-hot-toast"

export function TemplateListItem({
  title,
  lastSaveDate,
  handleClose,
  isCreateNewTemplateButton,
  menuType,
  onDelete,
}) {
  const [openNewTemplateDialog, setOpenNewTemplateDialog] = useState(false)

  const saveTemplate = useCallback((templateTitle) => {
    const templateContent =
      document.querySelector(".output-content").textContent
    localStorageSet({ key: templateTitle, value: templateContent })
    toast.success("Template was successfully saved.")
  }, [])

  const openTemplate = useCallback(async (templateTitle) => {
    const templateContent = localStorageGet({ key: templateTitle })
    sendTemplateLoad(templateContent.content)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success("Template was successfully loaded.")
  }, [])

  const deleteTemplate = useCallback(
    (templateTitle) => {
      const userConfirmation = confirm(
        `Are you sure you want to delete the template "${templateTitle}"?`
      )
      if (!userConfirmation) return
      localStorageDelete({ key: templateTitle })
      onDelete(templateTitle)
      toast.success("Template was successfully deleted.")
    },
    [onDelete] // handleClose
  )

  const handleTemplateClick = useCallback(() => {
    if (isCreateNewTemplateButton) {
      setOpenNewTemplateDialog(true)
    } else if (menuType === "save") {
      saveTemplate(title)
      handleClose()
    } else if (menuType === "open") {
      openTemplate(title)
      handleClose()
    } else if (menuType === "delete") {
      deleteTemplate(title)
    }
  }, [
    isCreateNewTemplateButton,
    menuType,
    saveTemplate,
    title,
    handleClose,
    openTemplate,
    deleteTemplate,
  ])

  const handleSave = useCallback(
    (newTitle) => {
      // To do: validation (max X characters, min 1 character, unique title)
      saveTemplate(newTitle)
      handleClose()
    },
    [saveTemplate, handleClose]
  )

  const date = getRelativeTime(new Date(lastSaveDate))
  const secondaryText = date ? `Last saved ${date}` : ""

  return (
    <>
      <ListItemButton onClick={handleTemplateClick}>
        <ListItemText primary={title} secondary={secondaryText} />
      </ListItemButton>
      {isCreateNewTemplateButton && (
        <NewTemplateDialog
          open={openNewTemplateDialog}
          onClose={setOpenNewTemplateDialog}
          onSave={handleSave}
        />
      )}
    </>
  )
}
