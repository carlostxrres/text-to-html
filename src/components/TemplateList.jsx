import { useMemo, useState, useCallback, useEffect } from "react"
import { murmurhash2 } from "../services/hashOps"
import { TemplateListItem } from "./TemplateListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import TextField from "@mui/material/TextField"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { localStorageGetAll } from "../services/localStorageOps"

export function TemplateList({ menuType, open, handleClose }) {
  const [localStorageTemplates, setLocalStorageTemplates] = useState([])
  const [filterValue, setFilterValue] = useState("")

  //   to do: should this be a useEffect or just run on every render?
  useEffect(() => {
    const localStorageTemplates = localStorageGetAll()
    setLocalStorageTemplates(Object.values(localStorageTemplates))
  }, [open])

  const handleFilterChange = useCallback((event) => {
    const newFilterValue = event.target.value
    setFilterValue(newFilterValue)
  }, [])
  const filteredTemplates = useMemo(() => {
    const lowerCaseFilterValue = filterValue.toLowerCase()
    return localStorageTemplates.map((template) => ({
      ...template,
      filteredOut: !template.title.toLowerCase().includes(lowerCaseFilterValue),
    }))
  }, [localStorageTemplates, filterValue])

  const handleDelete = useCallback((templateTitle) => {
    setLocalStorageTemplates((localStorageTemplates) =>
      localStorageTemplates.filter((item) => item.title !== templateTitle)
    )
  }, [])

  const sortedTemplates = useMemo(() => {
    return filteredTemplates.sort((a, b) => a.lastSaveDate < b.lastSaveDate)
  }, [filteredTemplates])

  const areThereNoTemplates = localStorageTemplates.length < 1

  return areThereNoTemplates && menuType === "save" ? (
    <></>
  ) : areThereNoTemplates ? (
    <ListItem>
      <ListItemText
        primary="There are no saved templates"
        secondary={`You have to save a template first, in order to ${menuType} it.`}
      />
    </ListItem>
  ) : (
    <>
      <TextField
        label="Filter templates..."
        size="small"
        variant="filled"
        style={{
          margin: "8px 15px",
        }}
        value={filterValue}
        onChange={handleFilterChange}
      />
      <Divider />
      <List>
        {sortedTemplates.map(({ title, lastSaveDate, filteredOut }) => {
          const uniqueKey =
            lastSaveDate.toString().slice(-6) + murmurhash2(title)
          return (
            !filteredOut && (
              <TemplateListItem
                key={uniqueKey}
                title={title}
                lastSaveDate={lastSaveDate}
                isCreateNewTemplateButton={false}
                handleClose={handleClose}
                menuType={menuType}
                onDelete={handleDelete}
              />
            )
          )
        })}
      </List>
    </>
  )
}
