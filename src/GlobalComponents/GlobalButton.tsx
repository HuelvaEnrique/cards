
import { ButtonGlobal } from './styledGlobalComponents'



const GlobalButton = (props: {
    name: string;
    handleFunction: () => void;
    //secondary?: boolean;
}) => {
    const { name, handleFunction /*secondary*/ } = props;
    return (
        <ButtonGlobal
            onClick={handleFunction}
        >
            {name}
        </ButtonGlobal>
    )
}

export default GlobalButton
