export const sendTemplateLoad = (template) => {
  const event = new CustomEvent("templateLoad", { detail: template })
  window.dispatchEvent(event)
}

export const updateEditorOnTemplateLoad = (setEditorContent) => {
  const onEventArriving = (eventInfo) => setEditorContent(eventInfo.detail)
  window.addEventListener("templateLoad", onEventArriving)
}
