import { forwardRef } from "react"
import Slide from "@mui/material/Slide"

export function TransitionUp() {
  forwardRef(function TransitionUp(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })
}
