
import {
    DivClasses,

} from "./preloadercontentStyled";

const PreloaderContent = (props: {
    type: string;

}) => {
    const { type } = props;
    return (
        <DivClasses type={type} > </DivClasses>
    )
}

export default PreloaderContent
