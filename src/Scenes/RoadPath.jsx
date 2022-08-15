{
  /* Road Path */
}
import { Road } from '../Models/Environment/Road'
import { v4 } from 'uuid'

const size = 7

export const RoadPath = () => {
  return (
    <>
      {[...Array(size)].map((e, i) => (
        <Road key={v4()} position={[0, 0, -i]} />
      ))}
    </>
  )
}
