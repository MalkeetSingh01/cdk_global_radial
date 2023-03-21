import { IconAccountCircle,NavigationContextSwitcher ,BUTTON_SIZES} from 'cdk-radial';
import "./SelectedDropdown.css"

const SelectionDropdown=(props)=>{
const  optionsData=[
    {
        id:"1",
        label:"option-1",
        value:"option --1",
    },
    {
        id:"2",
        label:"option-2",
        value:"option --2",
    },
    {
        id:"3",
        label:"option-3",
        value:"option --3",
    }
]

    return (
        <div className='dropdownDiv'>
            
  <NavigationContextSwitcher
  size="small"
    ariaLabel="Context switcher"
    dataTestId="global-navigation-context-switcher"
    defaultAvatarProps={{
      icon: <IconAccountCircle />,
      label: 'All Options',
      variant: 'icon'
    }}
    defaultSelectedValue={props.type}
    isOnGlobalHeader
    onClose={function noRefCheck(){}}
    onOpen={function noRefCheck(){}}
    onSelect={function noRefCheck(){}}
    options={
        optionsData.map((data,index)=>{
           return {
            avatarProps: {
            icon: <IconAccountCircle />,
            label: data.label,
            variant: 'text'
        },
        id:data.id,
        isDisabled: false,
        label: data.label,
        onClick: function noRefCheck(){}
    }
      },)
    }
  />

        </div>
    )
}
export default SelectionDropdown;