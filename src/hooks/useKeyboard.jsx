import { useCallback, useEffect, useState } from 'react'

function actionByKey (key) {
  const keyActionMap = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump',
    Digit1: 'dirt',
    Digit2: 'grass',
    Digit3: 'glass',
    Digit4: 'wood',
    Digit5: 'log'
  }

  return keyActionMap[key]
}

function useKeyboard () {
  const [actions, setActions] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  })

  const handleKeyDown = useCallback((e) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((a) => ({ ...a, [action]: true }))
    }
  }, [])

  const handleKeyUp = useCallback((e) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((a) => ({ ...a, [action]: false }))
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return actions
}

export default useKeyboard
