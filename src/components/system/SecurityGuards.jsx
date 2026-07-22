import { useEffect } from 'react'

function shouldBlockImageInteraction(target) {
  return target instanceof HTMLElement && Boolean(target.closest('img, [data-protected-image="true"]'))
}

export default function SecurityGuards() {
  useEffect(() => {
    function handleContextMenu(event) {
      event.preventDefault()
    }

    function handleCopy(event) {
      event.preventDefault()
    }

    function handleCut(event) {
      event.preventDefault()
    }

    function handleSelectStart(event) {
      if (shouldBlockImageInteraction(event.target)) {
        event.preventDefault()
      }
    }

    function handleDragStart(event) {
      if (shouldBlockImageInteraction(event.target)) {
        event.preventDefault()
      }
    }

    function handleKeyDown(event) {
      const key = event.key.toLowerCase()
      const blocked =
        (event.ctrlKey || event.metaKey) &&
        ['c', 's', 'u', 'p'].includes(key)

      if (blocked) {
        event.preventDefault()
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
