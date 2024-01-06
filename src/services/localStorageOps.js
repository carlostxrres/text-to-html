import { LOCAL_STORAGE_OBJECT_NAME } from "../constants.js"
import { toKebabCase } from "./toKebabCase.js"

export function localStorageGetAll() {
  const currentSavedTemplatesString =
    localStorage.getItem(LOCAL_STORAGE_OBJECT_NAME) || "{}"
  return JSON.parse(currentSavedTemplatesString)
}

const getStuff = ({ key, value }) => {
  const stuff = {}

  if (key) {
    stuff.localStorageKey = toKebabCase(key)
  }
  if (key && value) {
    stuff.element = {
      title: key,
      content: value,
      lastSaveDate: Date.now(),
    }
  }

  return stuff
}

export function localStorageSet({ key, value }) {
  const { element, localStorageKey } = getStuff({ key, value })

  const currentSavedTemplates = localStorageGetAll()
  currentSavedTemplates[localStorageKey] = element
  localStorage.setItem(
    LOCAL_STORAGE_OBJECT_NAME,
    JSON.stringify(currentSavedTemplates)
  )
}

export function localStorageGet({ key }) {
  const currentSavedTemplates = localStorageGetAll()

  const { localStorageKey } = getStuff({ key })
  return currentSavedTemplates[localStorageKey]
}

export function localStorageDelete({ key }) {
  const currentSavedTemplates = localStorageGetAll()
  const { localStorageKey } = getStuff({ key })

  delete currentSavedTemplates[localStorageKey]

  localStorage.setItem(
    LOCAL_STORAGE_OBJECT_NAME,
    JSON.stringify(currentSavedTemplates)
  )
}

const downloadObjectAsJson = (exportObj, exportName) => {
  const dataString = JSON.stringify(exportObj)
  const dataUrl = encodeURIComponent(dataString)
  const dataStr = `data:text/json;charset=utf-8,${dataUrl}`

  const downloadAnchorNode = Object.assign(document.createElement("a"), {
    href: dataStr,
    download: `${exportName}.json`,
  })

  document.body.appendChild(downloadAnchorNode)
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
  URL.revokeObjectURL(dataStr)
}

export function exportStorage(filename) {
  if (!filename) {
    const readableDateTime = new Date()
      .toISOString()
      .slice(0, 16)
      .replace(/[A-Z]/, " ")
      .replace(/:/, "-")
    filename = `HTML templates ${readableDateTime}`
  }

  const allLocalStorage = localStorageGetAll()
  downloadObjectAsJson(allLocalStorage, filename)
}
