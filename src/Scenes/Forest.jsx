{
  /* Forest */
}
import { CrookedPine } from '../Models/Environment/CrookedPine'
import { v4 } from 'uuid'

export const Forest = () => {
  let size = 12
  let [i, j, random] = [7, 1, 0]
  return (
    <>
      {[...Array(size)].map(() => {
        if (j === 5) {
          j = 1
          i += 1
        }
        j += 1
        random = parseInt(Math.random() * 10)
        return (
          <>
            {/* Left forest */}
            <CrookedPine
              key={v4()}
              position={[i, 0, j]}
              rotation={[0, random, 0]}
            />
            {/* Right forest */}
            <CrookedPine
              key={v4()}
              position={[-i, 0, j]}
              rotation={[0, random, 0]}
            />
          </>
        )
      })}
    </>
  )
}
