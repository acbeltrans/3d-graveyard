import { Grass } from "../Models/Environment/Grass"
export const Floor = () => {
    let size = 294;
    let j = -7;
    let i = -10;
    return (
        <>  
            {[...Array(size)].map((e,s) => {
                if (j === 7) {j=-7; i+=1;}
                j+=1;
                return (
                    <Grass key={s} position={[i,0,j]} />
                )
                
            })}     
        </>
    )
}
