import styles from "../shared/styles/Select.module.css"
import PropTypes from "prop-types"
import React, {useMemo, useRef, useState} from "react"
import ToolTip from "../../feedback/tooltip/ToolTip"

import shared from "../shared/styles/Shared.module.css"
import Button from "../button/Button"
import useLocale from "../../misc/hooks/useLocale"
import Modal from "../../navigation/modal/Modal"
import Icon from "../../visualization/icon/Icon"

export default function SelectField(props) {
   const [open, setOpen] = useState(false)
   const translate = useLocale()
   const ref = useRef()
   const buttonRef = useRef()
   const selected = useMemo(() => {
      return props.choices.find(e => e.key === props.value)
   }, [props.value])

   return (
      <div
         style={{
            width: props.width,
            alignItems: props.value ? 'unset' : 'flex-start',
         }}
         ref={ref}
         className={styles.wrapper}
      >
         <div className={shared.labelContainer}
              style={{
                 visibility: (props.value !== undefined && props.value !== null) ? 'visible' : 'hidden',
                 opacity: (props.value !== undefined && props.value !== null) ? '1' : '0',
              }}>
            <div className={shared.overflow}>
               {props.label}
            </div>
         </div>
         <div
            className={shared.wrapper}
            data-highlight={open ? open : undefined}
            data-disabled={props.disabled ? props.disabled : undefined}
         >
            <Button
               disabled={props.disabled}

               reference={buttonRef}
               highlight={open}
               styles={{
                  height: props.height ? props.height : '45px',
                  overflow: "hidden",
                  maxWidth: 'unset'
               }}
               className={[styles.selectContainer, shared.labelContainer].join(' ')}
               onClick={() => setOpen(!open)}
            >
                    <Icon
                       styles={{transform: !open ? 'unset' : 'rotate(180deg)', transition: '150ms linear'}}
                       >arrow_drop_down</Icon>

               {selected ?
                  <div className={styles.overflow} style={{color: selected.color}}>
                     {selected.value}
                  </div>
                  : props.label}

            </Button>
         </div>

         <Modal
            open={open}
            handleClose={() => setOpen(false)}
                variant={'fit'}
            className={styles.dropDownChoicesContainer}
            blurIntensity={'0'}>

            {props.choices.map((choice, index) => (
               <React.Fragment key={index + '-choice-button'}>
                  <Button
                     styles={{
                        borderRadius: '0',
                        borderTop: index > 0 ? 'var(--fabric-border-primary) 1px solid' : 'none'
                     }}
                     variant={choice.key === props.value ? 'filled' : undefined}
                     onClick={() => {
                        props.handleChange(choice.key)
                        setOpen(false)
                     }}
                     className={styles.dropDownButton}
                  >
                     <div className={styles.overflow}>
                        {choice.value}
                     </div>
                     <ToolTip content={choice.value}/>
                  </Button>
               </React.Fragment>

            ))}
         </Modal>

         <div className={shared.alertLabel}
              style={{
                 color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
              }}
         >
            {props.required ? translate('required') : undefined}
            {props.helperText ?
               <div className={shared.helperText}>
                        <Icon styles={{
                           fontSize: '1rem'
                        }} >info</Icon>
                  <ToolTip content={props.helperText} align={'start'}/>
               </div>
               :
               null
            }
         </div>

      </div>
   )
}

SelectField.propTypes = {
   helperText: PropTypes.string,

   width: PropTypes.string,
   label: PropTypes.string,
   choices: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
      color: PropTypes.string
   })).isRequired,
   handleChange: PropTypes.func.isRequired,
   value: PropTypes.any,
   required: PropTypes.bool,
   disabled: PropTypes.bool,
   height: PropTypes.string,
}
