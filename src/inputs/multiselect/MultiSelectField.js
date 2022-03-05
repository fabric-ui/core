import styles from '../shared/styles/Select.module.css'

import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState} from 'react'
import ToolTip from "../../feedback/tooltip/ToolTip";
import Checkbox from "../checkbox/Checkbox";
import shared from '../shared/styles/Shared.module.css'
import Button from "../button/Button";
import useLocale from "../../misc/hooks/useLocale";
import useDropdown from "../shared/useDropdown";

export default function MultiSelectField(props) {
   const [open, setOpen] = useState(false)
   const translate = useLocale()
   const ref = useRef()
   const [selected, setSelected] = useState([])

   useEffect(() => {
      if (typeof props.value === 'string' && selected.length === 0 && props.value.length > 0)
         setSelected(props.value.split('-*/'))
      else if (props.asArray)
         setSelected(props.value ? props.value : [])
   }, [props.value])


   const buttonRef = useRef()
   const dropdownRef = useDropdown(open, setOpen, buttonRef)

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
               disabled={props.disabled} variant={"outlined"}
               highlight={open}
               styles={{
                  height: props.height ? props.height : '45px',
                  overflow: "hidden",
                  maxWidth: 'unset'
               }}
               reference={buttonRef}
               className={[styles.selectContainer, shared.labelContainer].join(' ')}
               onClick={() => setOpen(!open)}
            >
                        <span
                           style={{transform: !open ? 'unset' : 'rotate(180deg)', transition: '150ms linear'}}
                           className="material-icons-round">arrow_drop_down</span>

               {props.value ?
                  <div className={styles.valueContainer}>
                     {props.asArray ? props.value.length : (props.value.split('-*/').length - 1)} - {translate('values')}
                  </div>
                  : props.label}
            </Button>
         </div>


            <div className={styles.dropDownChoicesContainer} ref={dropdownRef} style={{padding: '0 8px', display: open ? undefined : 'none'}}>
               {props.choices.map((choice, index) => (
                  <div
                     style={{overflow: "hidden"}}
                     className={styles.multiSelectRow}
                     key={'multi-choice-' + index}>
                     <Checkbox
                        type={'checkbox'}
                        handleCheck={() => {
                           let newSelected = [...selected]
                           if (selected.includes(choice.key)) {
                              newSelected.splice(newSelected.indexOf(choice.key), 1)
                              setSelected(newSelected)
                           } else {
                              newSelected.push(choice.key)
                              setSelected(newSelected)
                           }

                           if (!props.asArray) {
                              let newData = ''
                              newSelected.forEach(e => {
                                 if (e.length > 0)
                                    newData = newData + '-*/' + e
                              })
                              props.handleChange(newData)
                           } else
                              props.handleChange(newSelected)
                        }} className={styles.multiSelectRowCheckbox}
                        checked={selected.includes(choice.key)}
                        label={
                           <div
                              style={{color: choice.color ? choice.color : undefined}}
                              className={styles.multiSelectRowContent}
                           >
                              {choice.value}
                           </div>
                        }
                     />

                     <ToolTip content={choice.value} align={'middle'} justify={'start'}/>
                  </div>
               ))}
            </div>

         <div className={shared.alertLabel}
              style={{
                 color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
              }}
         >
            {props.required ? translate('required') : undefined}
            {props.helperText ?
               <div className={shared.helperText}>
                      <span
                         style={{fontSize: '1rem'}}
                         className="material-icons-round">info</span>

                  <ToolTip content={props.helperText} align={'start'}/>
               </div>
               :
               null
            }
         </div>

      </div>
   )
}

MultiSelectField.propTypes = {
   helperText: PropTypes.string,

   width: PropTypes.string,
   label: PropTypes.string,
   choices: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.any,
      color: PropTypes.string
   })).isRequired,
   handleChange: PropTypes.func.isRequired,
   value: PropTypes.any,
   required: PropTypes.bool,
   disabled: PropTypes.bool,
   asArray: PropTypes.bool,
   height: PropTypes.string,
}
