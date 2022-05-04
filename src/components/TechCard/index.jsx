import {TechCardS} from "./styles.js"

export const TechCard = ({tech}) => {
    return(
        <TechCardS>
            <p>{tech.title}</p>
            <p>{tech.status}</p>
        </TechCardS>
    )
}