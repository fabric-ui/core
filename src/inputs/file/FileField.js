import React, {useContext, useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import styles from './styles/FileField.module.css'
import shared from '../shared/styles/Shared.module.css'
import FileModal from "./templates/FileModal";
import ThemeContext from "../../misc/context/ThemeContext";
import Button from "../button/Button";
import ToolTip from "../../feedback/tooltip/ToolTip";
import useLocale from "../../misc/hooks/useLocale";

export default function FileField(props) {
   const translate = useLocale()

   const [openModal, setOpenModal] = useState(false)


   const files = useMemo(() => {
      if (props.value && Array.isArray(props.value))
         return props.value
      else
         return []
   }, [props.value])

   const themes = useContext(ThemeContext)
   return (
      <div style={{
         width: props.width,
         display: "grid",
         gap: '4px'
      }}>

         <div className={shared.labelContainer}
              style={{
                 opacity: files.length > 0 ? 1 : 0,
                 transition: 'visibility 0.2s ease,opacity 0.2s ease'
              }}>
            <div className={shared.overflow}>
               {props.label}
            </div>

         </div>
         <div
            className={shared.wrapper}
            data-highlight={openModal ? openModal : undefined}
            data-disabled={props.disabled ? props.disabled : undefined}
         >
            <Button
               disabled={props.disabled}
               variant={'outlined'}
               highlight={openModal}
               styles={{
                  height: props.height ? props.height : '45px',
                  maxWidth: 'unset', marginTop: 'unset'
               }}
               className={[styles.button, shared.labelContainer].join(' ')}
               onClick={() => setOpenModal(true)}
            >
               <div className={shared.labelContainer}>
                  {props.placeholder}
                  {files.length > 0 ?
                     <div style={{
                        fontSize: '.7rem',
                        color: themes ? 'var(--fabric-color-secondary)' : '#777777'
                     }}>
                        ({files.length} {translate('uploaded_files')})
                     </div>
                     :
                     null}
               </div>
               <span
                  style={{fontSize: '1.2rem'}}
                  className="material-icons-round">attach_file</span>

            </Button>
         </div>
         <div className={shared.alertLabel}
              style={{
                 color: (files.length === 0) ? '#ff5555' : undefined
              }}>
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

         <FileModal
            {...props}
            open={openModal} setOpen={setOpenModal} files={files} multiple={props.multiple}
            setFiles={props.handleChange}
            accept={props.acceptTypes && Array.isArray(props.acceptTypes) ? props.acceptTypes : []}
            handleFileRemoval={props.handleFileRemoval}/>
      </div>
   )
}

FileField.propTypes = {
   helperText: PropTypes.string,

   handleFileRemoval: PropTypes.func.isRequired,
   value: PropTypes.array,
   multiple: PropTypes.bool,
   acceptTypes: PropTypes.array,
   handleChange: PropTypes.func.isRequired,
   label: PropTypes.string,
   width: PropTypes.string,
   required: PropTypes.bool,
   disabled: PropTypes.bool,
   height: PropTypes.string,
   placeholder: PropTypes.string
}
