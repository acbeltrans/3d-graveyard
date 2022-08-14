import { Road } from "../Models/Environment/Road"

export const RoadPath = () => {
    return(
        <>
            
            <Road
                position= {[0, 0, 1]}
            />
            <Road
                position= {[0, 0, 2]}
            />
            <Road
                position= {[0, 0, 3]}
            />
        </>
    )
}