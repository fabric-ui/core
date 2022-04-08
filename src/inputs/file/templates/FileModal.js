import React, {useContext, useMemo, useRef} from "react";
import styles from '../styles/File.module.css'
import File from "./File";
import PropTypes from "prop-types";
import Empty from "../../../feedback/empty/Empty";
import Modal from "../../../navigation/modal/Modal";
import ThemeContext from "../../../misc/context/ThemeContext";
import Button from "../../button/Button";
import useLocale from "../../../misc/hooks/useLocale";

export default function FileModal(props) {
   const ref = useRef()
   const areaRef = useRef()

   const files = useMemo(() => {
      if (props.files !== undefined && props.files !== null) return props.files.map((e, i) => (
         <React.Fragment key={'file-' + i}>
            <File type={(e.name.split('.').pop())} index={i} name={e.name}
                  handleDelete={props.handleFileRemoval}/>
         </React.Fragment>))
   }, [props.files])
   const translate = useLocale()
   return (<Modal
      open={props.open}
      handleClose={() => props.setOpen(false)}
      animationStyle={'fade'}
      blurIntensity={'1px'}
      className={styles.modalContent}>
      <div className={styles.header}>
         <div style={{ userSelect: 'none', display: 'flex', alignItems: 'center', fontWeight: '550', fontSize: '.75rem'}}>
            {props.label}
         </div>
         <Button
            variant={!props.multiple && props.files.length > 0 ? undefined : 'filled'}
            disabled={!props.multiple && props.files.length > 0}
            onClick={event => {
               event.preventDefault()
               ref.current.click()
            }} className={styles.uploadButton}>
            {translate('upload_files')}
         </Button>
      </div>


      <div
         className={[styles.dropArea, props.files.length > 0 ? styles.dropAreaContent : ''].join(' ')}
         ref={areaRef}
         style={{background: !props.multiple && props.files.length > 0 ? 'var(--fabric-background-secondary)' : undefined}}
         onDragLeave={(e) => {
            if (!(!props.multiple && props.files.length > 0)) {
               areaRef.current.style.borderColor = 'var(--fabric-border-primary)'
               areaRef.current.style.background = 'var(--fabric-background-primary)'
            }
         }}
         onDragOver={(e) => {
            e.preventDefault()
            if (!(!props.multiple && props.files.length > 0)) {
               areaRef.current.style.borderColor = 'var(--fabric-accent-color)'
               areaRef.current.style.background = 'var(--fabric-background-tertiary)'
            }
         }}
         onDrop={e => {
            e.preventDefault()
            if (!(!props.multiple && props.files.length > 0)) {
               areaRef.current.style.borderColor = 'var(--fabric-accent-color)'
               areaRef.current.style.background = 'var(--fabric-background-tertiary)'
               props.setFiles([...props.files, ...Array.from(e.dataTransfer.files)])
            }

         }}>
         {props.files.length === 0 ? <Empty customLabel={translate('drag_files')}/> : files}
      </div>
      <input type="file" style={{display: 'none'}}
             disabled={props.disabled} accept={props.accept}
             multiple={props.multiple} ref={ref}
             onChange={event => {
                props.setFiles(Array.from(event.target.files))
                ref.current.value = ''
             }}
      />
      <div className={styles.headerAccepted}>
         {translate('accepted_types')}: {props.accept.length > 0 ? props.accept.map((e, i) => {
         e.split('.')[e.split('.').length - 1] + ((i < props.accept.length - 1) ? ', ' : '')
      }) : translate('all')}
      </div>

   </Modal>)
}

FileModal.propTypes = {

   handleFileRemoval: PropTypes.func,
   setFiles: PropTypes.func.isRequired,
   files: PropTypes.array,
   open: PropTypes.bool,
   setOpen: PropTypes.func,
   multiple: PropTypes.bool,
   accept: PropTypes.array
}
