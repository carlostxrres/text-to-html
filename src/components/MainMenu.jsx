import * as React from "react"
import { TemplateMenuItem } from "./TemplateMenuItem"
import { FileUploader } from "./FileUploader"
import { exportStorage } from "../services/localStorageOps"
import { styled, alpha } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
// import EditIcon from "@mui/icons-material/Edit"
import Divider from "@mui/material/Divider"
import SaveIcon from "@mui/icons-material/Save"
import FolderOpenIcon from "@mui/icons-material/FolderOpen"
import DeleteIcon from "@mui/icons-material/Delete"
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import CloudDownload from "@mui/icons-material/CloudDownload"
// import CloudUpload from "@mui/icons-material/CloudUpload"
// import toast, { Toaster } from "react-hot-toast"

const props = ({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
})

const funct = (props) => {
  return (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  )
}

const StyledMenu = styled(funct)(props)

export function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const exportStorageAndClose = () => {
    exportStorage()
    handleClose()
  }
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        // endIcon={<KeyboardArrowDownIcon />}
      >
        Templates
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <TemplateMenuItem
          disableRipple
          handleMenuClose={handleClose}
          menuType="save"
        >
          <SaveIcon />
          Save template
        </TemplateMenuItem>

        <TemplateMenuItem
          disableRipple
          handleMenuClose={handleClose}
          menuType="open"
        >
          <FolderOpenIcon />
          Open template
        </TemplateMenuItem>

        <TemplateMenuItem
          disableRipple
          handleMenuClose={handleClose}
          menuType="delete"
        >
          <DeleteIcon />
          Delete templates
        </TemplateMenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={exportStorageAndClose} disableRipple>
          <CloudDownload />
          Export templates backup
        </MenuItem>

        <FileUploader />
      </StyledMenu>
    </div>
  )
}
