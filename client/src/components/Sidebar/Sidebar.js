import SelectionDropdown from "../SelectionDropdown/SelectionDropdown";
import { IconAddCircle,Button,BUTTON_VARIANTS  } from 'cdk-radial';

const Sidebar=()=>{
    return (
        <>
        <div style={{witdth:"96%",borderRadius:"10px",padding:"7px"}}>
            <Button text="Add Connection" variant={BUTTON_VARIANTS.TEXT} style={{borderRadius:"10px",width:"100%",backgroundColor: "rgb(155, 154, 154)",color:"rgb(240, 250, 240)"}}/>
        </div>
        <SelectionDropdown type="Source"/>
        <SelectionDropdown type="Target"/>
        </>
    )
}

export default Sidebar;