import "./Main.css"
import { useRef, useState, useCallback, useEffect } from "react"
import { QuillEditor } from "./QuillEditor"

export const Main = () => {
  const leftPaneRef = useRef(null)
  const rightPaneRef = useRef(null)
  const gutterRef = useRef(null)

  const [isResizing, setIsResizing] = useState(false)
  const [prevX, setPrevX] = useState(0)
  const [leftPaneWidth, setLeftPaneWidth] = useState(null)

  const handleMouseDown = useCallback((e) => {
    setIsResizing(true)
    setPrevX(e.clientX)
    setLeftPaneWidth(leftPaneRef.current.getBoundingClientRect().width)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (!isResizing) return

      const newX = prevX - e.clientX
      setLeftPaneWidth((width) => width - newX)
      setPrevX(e.clientX)
    },
    [prevX, isResizing]
  )

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
  }, [])

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp, isResizing])

  return (
    <main>
      <div
        className="pane left"
        ref={leftPaneRef}
        style={{ width: leftPaneWidth ? `${leftPaneWidth}px` : "40vw" }}
      >
        <QuillEditor />
      </div>
      <div className="pane right" ref={rightPaneRef}>
        This is the right pane.
        <div
          className="gutter"
          ref={gutterRef}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </main>
  )
}
