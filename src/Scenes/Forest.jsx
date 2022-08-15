import { CrookedPine } from "../Models/Environment/CrookedPine";

import { v4 } from 'uuid'

export const Forest = () => {
    let size = 12;
    let [i, j ] = [7,1];
    let random = 0;
  return (
    <>
        {[...Array(size)].map(() => {
            if (j === 5) {j=1; i+=1;}
            j+=1;
            random = parseInt(Math.random() * 100)
            return ( 
                <>
                    <CrookedPine key={v4()} position={[i,0,j]} rotation={[0,random,0]} />
                    <CrookedPine key={v4()} position={[-i,0,j]} rotation={[0,random,0]} />
                </> 
            )
        })}
    </>
  )
}