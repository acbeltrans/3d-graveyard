import { Altar } from "./Figures/Altar"
import { Candle } from "./Figures/Candle";
import { Coffin } from "./Figures/Coffin";
import { DamagedBench } from "./Figures/DamagedBench";

export const Scenery = () => {
  return (
    <>
        <Altar
            position={[2,-2,0]} 
        />
        <Coffin 
            position={[2,2,0]} 
        />
        <Candle 
            position={[-2,2,0]} 
        />
        <DamagedBench
            position={[0,0,0]} 
        />
    </>
  )
}