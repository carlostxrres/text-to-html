import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import { CopyButton } from "./CopyButton"
import { sendTemplateLoad } from "../services/eventCommunication"

export function OutputToolbar({ outputText }) {
  const onClearButtonClick = () => sendTemplateLoad("")
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <CopyButton text={outputText} />
      <Button onClick={onClearButtonClick}>Clear all</Button>
    </ButtonGroup>
  )
}
