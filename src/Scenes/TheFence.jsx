import { Fence } from "../Models/Fence/Fence"
import { FenceCurve } from "../Models/Fence/FenceCurve"
import { Gate } from "../Models/Fence/Gate"
import { v4 } from 'uuid'

const largeSize = 10;
const smallSize = 7;
export const TheFence = () => {
    return (
        <>  
            {/* Northwest Fence Curve */}
            <FenceCurve position={[10,0,7]}  /> 
            {/* Northeast Fence Curve */}
            <FenceCurve position={[-10,0,7]} rotation={[0,4.7,0]} />
            {/* Southwest Fence Curve */}
            <FenceCurve position={[10,0,-6]} rotation={[0,1.55,0]} /> 
            {/* Southeast Fence Curve */}
            <FenceCurve position={[-10,0,-6]} rotation={[0,3.17,0]} />
            
            <Gate position={[0,0,-6.9]} />

            {/* North Fence */}
            {[...Array(largeSize)].map((e,i) =>{
                return (
                    <>  
                        <Fence key={v4()} position={[i,0,7]} />
                        <Fence key={v4()} position={[-i,0,7]} />
                    </>
                    
                )
            })}
            {/* South Fence */}
            {[...Array(largeSize-1)].map((e,i) =>{
                i+=1;
                return (
                    <>
                        <Fence key={v4()} position={[i,0,-6.9]} />
                        <Fence key={v4()} position={[-i,0,-6.9]} />
                    </>
                )
            })}
            {[...Array(smallSize)].map((e,i) =>{
                return (
                    <>
                        {/* North Left Fence */}
                        <Fence key={v4()} position={[10.89,0,i]} rotation={[0,4.7,0]}/>
                        {/* North Right Fence */}
                        <Fence key={v4()} position={[-10,0,i]} rotation={[0,4.7,0]} />
                        
                    </>
                )
            })}
            {[...Array(smallSize-1)].map((e,i) =>{
                return (
                    <>
                        {/* South Left Fence */}
                        <Fence key={v4()} position={[10.89,0,-i]} rotation={[0,4.7,0]} />
                        {/* South Right Fence */}
                        <Fence key={v4()} position={[-10,0,-i]} rotation={[0,4.7,0]} />
                    </>
                    
                )
            })}
            
        </>
    )
}
