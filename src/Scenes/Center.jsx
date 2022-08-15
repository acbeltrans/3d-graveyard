{
  /* Center scene */
}
import { Altar } from '../Models/Gravestones/Altar'
import { LargeCrypt } from '../Models/Gravestones/LargeCrypt'
import { Coffin } from '../Models/Gravestones/Coffin'
import { Crypt } from '../Models/Gravestones/Crypt'
import { SmallCrypt } from '../Models/Gravestones/SmallCrypt'
import { Cross } from '../Models/Objects/Cross'
import { Candles } from './Candles'
import { Zombie } from '../Models/Characters/Zombie'

export const Center = () => {
  return (
    <>
      {/* Main altar with cross and candles */}
      <Altar position={[0, 0, 3]} />
      <Candles />
      <Cross position={[1.5, 0, 3]} />
      <Cross position={[-1.5, 0, 3]} />

      {/* Large crypt */}
      <LargeCrypt position={[0, 0, 6]} />
      <Coffin position={[0, 0, 6]} />

      {/* Left crypt */}
      <Crypt position={[2, 0, 6]} />
      <Coffin position={[2, 0, 6]} scale={0.8} />

      {/* Right crypt */}
      <Crypt position={[-2, 0, 6]} />
      <Coffin position={[-2, 0, 6]} scale={0.8} />

      {/* Small crypts in circle (clockwise) */}
      <SmallCrypt position={[-5.5, 0, 6]} rotation={[0, 1.6, 0]} />
      <SmallCrypt position={[-4.5, 0, 4]} rotation={[0, 4.3, 0]} />
      <SmallCrypt position={[-3.5, 0, 2.5]} rotation={[0, 4.2, 0]} />
      <SmallCrypt position={[-2, 0, 1.5]} rotation={[0, 0.5, 0]} />
      <SmallCrypt position={[2, 0, 1.5]} rotation={[0, 2.5, 0]} />
      <SmallCrypt position={[3.5, 0, 2.5]} rotation={[0, 2.2, 0]} />
      <SmallCrypt position={[4.5, 0, 4]} rotation={[0, 2, 0]} />
      <SmallCrypt position={[5.5, 0, 6]} rotation={[0, 1.6, 0]} />

      {/* Left zombie */}
      <Zombie position={[3.8, 0, 6]} />
      {/* Right zombie */}
      <Zombie position={[-3.8, 0, 6]} />
    </>
  )
}
