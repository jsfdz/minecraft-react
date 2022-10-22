import React, { useEffect, useState } from 'react'
import useKeyboard from '../hooks/useKeyboard'
import { useStore } from '../hooks/useStore'
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../assets/img/images'

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg
}

function TextureSelector () {
  const [visible, setVisible] = useState(false)
  const [activeTexture, setTexture] = useStore(state => [state.texture, state.setTexture])
  const {
    dirt,
    grass,
    glass,
    wood,
    log
  } = useKeyboard()

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log
    }
    const pressedTexture = Object.entries(textures).find(([_, value]) => value)
    if (pressedTexture) {
      setTexture(pressedTexture[0])
    }
  }, [setTexture, dirt, grass, glass, wood, log])

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 2000)
    setVisible(true)
    return () => clearTimeout(visibilityTimeout)
  }, [activeTexture])

  return visible &&
    <div className='absolute centered texture-selector'>
      {
        Object.entries(images).map(([key, src]) => {
          return (
            <img
              key={key}
              src={src}
              className={`${key === activeTexture ? 'active' : ''}`}
              alt={key}
            />
          )
        })
      }
    </div>
}

export default TextureSelector
