import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
import {
  dirtImg,
  grassImg,
  glassImg,
  logImg,
  woodImg
} from './images'

const dirtTextura = new TextureLoader().load(dirtImg)
const grassTextura = new TextureLoader().load(grassImg)
const glassTextura = new TextureLoader().load(glassImg)
const logTextura = new TextureLoader().load(logImg)
const woodTextura = new TextureLoader().load(woodImg)
const groundTextura = new TextureLoader().load(grassImg)

dirtTextura.magFilter = NearestFilter
grassTextura.magFilter = NearestFilter
glassTextura.magFilter = NearestFilter
logTextura.magFilter = NearestFilter
woodTextura.magFilter = NearestFilter
groundTextura.magFilter = NearestFilter
groundTextura.wrapS = RepeatWrapping
groundTextura.wrapT = RepeatWrapping

export {
  dirtTextura,
  grassTextura,
  glassTextura,
  logTextura,
  woodTextura,
  groundTextura
}
