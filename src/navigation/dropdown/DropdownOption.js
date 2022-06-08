import styles from './styles/Dropdown.module.css'
import PropTypes from "prop-types";
import Button from "../../inputs/button/Button";
import React, {useContext} from "react";
import DropdownProvider from "./DropdownProvider";
import Icon from "../../visualization/icon/Icon";

export default function DropdownOption(props) {
   const context = useContext(DropdownProvider)
   return (
      <div data-keepalive={`${props.option.keepAlive}`} style={{...{width: '100%'}, ...props.styles}}
           className={props.className}>
         <Button
            disabled={props.option.disabled}
            onClick={() => {
               if (context?.setOpen && !props.option.keepAlive)
                  context?.setOpen(false)
               props.option.onClick(props.option.onClickEvent)
            }}
            className={styles.button}>
            <div className={styles.iconSpace}>

               {props.option.icon ?
                  <Icon styles={props.option.iconStyles}>
                     {props.option.icon}
                  </Icon>
                  :
                  null
               }
            </div>

            <div className={[styles.buttonLabel, styles.overflow].join(' ')}>
               {props.option.label}
            </div>
            {props.option.shortcut ?
               <div className={styles.shortcut}>
                  {props.option.shortcut}
               </div>
               :
               null}

         </Button>
      </div>
   )
}
DropdownOption.propTypes = {
   styles: PropTypes.object,
   className: PropTypes.string,
   option: PropTypes.shape({
      label: PropTypes.any,
      icon: PropTypes.string,
      iconStyles: PropTypes.object,

      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      keepAlive: PropTypes.bool,
      shortcut: PropTypes.string
   })
}
