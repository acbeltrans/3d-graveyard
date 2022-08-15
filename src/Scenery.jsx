import { Floor } from "./Scenes/Floor"
import { TheFence } from "./Scenes/TheFence";
import { RoadPath } from "./Scenes//RoadPath";
import { Doorway } from "./Models/Gravestones/Doorway";
import { Center } from "./Scenes/Center";
import { TheGravestones } from "./Scenes/TheGravestones";
import { Forest } from "./Scenes/Forest";
import { Skeleton } from "./Models/Characters/Skeleton";


export const Scenery = () => {
  return (
    <>
        <Floor/>
        <TheFence/>
        <RoadPath/>
        <Doorway position={[0,0,1]} />
        <Center/>
        <TheGravestones/>
        <Forest/>
        <Skeleton position={[0,0,-5]} rotation={[0,3.2,0]} />
    </>
  )
}