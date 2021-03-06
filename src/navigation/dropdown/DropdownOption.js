import styles from "./styles/Dropdown.module.css"
import PropTypes from "prop-types"
import Button from "../../inputs/button/Button"
import React, {useContext} from "react"
import DropdownProvider from "./DropdownProvider"

export default function DropdownOption(props) {
   const context = useContext(DropdownProvider)
   return (
      <div data-keepalive={`${props.option.keepAlive}`} style={{...{width: '100%'}, ...props.styles}}
           className={props.className}>
         <Button
            disabled={props.option.disabled}
            onClick={event => {
               if (context?.setOpen && !props.option.keepAlive)
                  context?.setOpen(false)
               if(props.option.onClick)
                  props.option.onClick(event, props.option, () => context.setOpen(false))
            }}
            className={styles.button}>
            <div className={styles.iconSpace}>
               {props.option.icon}
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
      icon: PropTypes.node,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
      keepAlive: PropTypes.bool,
      shortcut: PropTypes.string
   })
}
