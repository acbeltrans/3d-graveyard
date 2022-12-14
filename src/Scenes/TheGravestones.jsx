{
  /* Gravestones */
}
import { Gravestone } from '../Models/Gravestones/Gravestone'
import { BrokenGravestone } from '../Models/Gravestones/BrokenGravestone'
import { GravestoneCross } from '../Models/Gravestones/GravestoneCross'
import { v4 } from 'uuid'

export const TheGravestones = () => {
  let size = 54
  let [i, j, x, z, random] = [1, -1, 1, -1, 0]
  return (
    <>
      {/* Left gravestones */}
      {[...Array(size)].map(() => {
        random = parseInt(Math.random() * 100)
        if (j === 5) {
          j = -1
          i += 1
        }
        j += 1

        if (random % 3 === 0) {
          return (
            <Gravestone
              key={v4()}
              position={[i, 0, -j]}
              rotation={[0, random, 0]}
            />
          )
        }
        if (random % 3 === 1) {
          return (
            <GravestoneCross
              key={v4()}
              position={[i, 0, -j]}
              rotation={[0, random, 0]}
            />
          )
        }
        if (random % 3 === 2) {
          return (
            <BrokenGravestone
              key={v4()}
              position={[i, 0, -j]}
              rotation={[0, random, 0]}
            />
          )
        }
      })}
      {/* Right gravestones */}
      {[...Array(size)].map(() => {
        random = parseInt(Math.random() * 100)
        if (z === 5) {
          z = -1
          x += 1
        }
        z += 1
        if (random % 3 === 0) {
          return (
            <Gravestone
              key={v4()}
              position={[-x, 0, -z]}
              rotation={[0, random, 0]}
            />
          )
        }
        if (random % 3 === 1) {
          return (
            <GravestoneCross
              key={v4()}
              position={[-x, 0, -z]}
              rotation={[0, random, 0]}
            />
          )
        }
        if (random % 3 === 2) {
          return (
            <BrokenGravestone
              key={v4()}
              position={[-x, 0, -z]}
              rotation={[0, random, 0]}
            />
          )
        }
      })}
    </>
  )
}
