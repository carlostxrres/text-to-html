import { useState } from "react"
import ReactQuill from "react-quill"
import { OutputToolbar } from "./OutputToolbar"
import "react-quill/dist/quill.snow.css"
import "react-quill/dist/quill.bubble.css"
import "./QuillEditor.css"
import Prism from "prismjs"
import "prismjs/components/prism-markup"
import "prismjs/themes/prism-tomorrow.css" // tomorrow okaidia
import pretty from "pretty"
import parse from "html-react-parser"
import { updateEditorOnTemplateLoad } from "../services/eventCommunication"

export function QuillEditor() {
  const [editorContent, setEditorContent] = useState("")

  const handleContentChange = (content) => {
    setEditorContent(content)
  }

  updateEditorOnTemplateLoad(setEditorContent)

  const formattedHtml = pretty(editorContent)
  const highlightedHtml = Prism.highlight(
    formattedHtml,
    Prism.languages.markup,
    "markup"
  )
  const reactElements = parse(highlightedHtml)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // 4, 5, 6
      ["bold", "italic", "underline", "strike"],
      ["blockquote"], // 'code-block'
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      // [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      // [{ 'direction': 'rtl' }],
      // [{ 'size': ['small', false, 'large', 'huge'] }],
      // [{ 'color': [] }, { 'background': [] }],
      // [{ 'font': [] }],
      // [{ 'align': [] }],
    
      ['clean']      
    ],
    history: {
      delay: 2000,
      maxStack: 500,
      //   userOnly: true,
    },
  }
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ]

  return (
    <>
      <ReactQuill
        theme="snow"
        value={editorContent}
        onChange={handleContentChange}
        className="quill input"
        modules={modules}
        formats={formats}
      />
      <div className="output">
        <div className="toolbar">
          <OutputToolbar outputText={formattedHtml} />
          {/* <CopyButton text={formattedHtml} /> */}
        </div>
        <pre className="output-content">
          <code className="language-markup">{reactElements}</code>
        </pre>
      </div>
    </>
  )
}
