import {ContainerS} from "./styles.js"

export const Container = (props) => {
    return(
        <ContainerS>
            {props.children}
        </ContainerS>
    )
}