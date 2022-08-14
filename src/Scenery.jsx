import { Floor } from "./Scenes/Floor"
import { Zombie } from "./Models/Characters/Zombie";
import { RoadPath } from "./Scenes//RoadPath";
import { Lightpost } from "./Models/Environment/Lightpost";
import { SingleLightpost } from "./Models/Environment/SingleLightpost";
import { TheFence } from "./Scenes/TheFence";

export const Scenery = () => {
  return (
    <>
        <Floor/>
        <TheFence/>
        <Zombie
          position={[2,0,3]}
        />
        <RoadPath
          position={[3,0,3]}
        />
        <Lightpost position={[2, 0, 2]} />
        <SingleLightpost position={[-3, 0, 4]} />
    </>
  )
}