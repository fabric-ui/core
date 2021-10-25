import React, {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import styles from './styles/FileField.module.css'
import shared from '../shared/Shared.module.css'
import {AttachFileRounded} from '@material-ui/icons'
import LocalePT from '../shared/LocalePT'
import FileModal from "./templates/FileModal";
import Ripple from "../../misc/ripple/Ripple";

export default function FileField(props) {
    const lang = LocalePT

    const [openModal, setOpenModal] = useState(false)

    const color = useMemo(() => {
        if (props.colorVariant === 'secondary')
            return {
                className: shared.secondaryVariant,
                color: '#0095ff'
            }
        else return {
            className: undefined,
            color: '#0095ff'
        }

    }, [])

    const files = useMemo(() => {
        if (props.files && Array.isArray(props.files))
            return props.files
        else
            return []
    }, [props.files])
    return (
        <div style={{
            width: props.width,
            marginBottom: 'auto',
            display: "grid",
            gap: '4px'
        }}>

            <div className={shared.labelContainer}
                 style={{
                     opacity: files.length > 0 ? 1 : 0,
                     transition: 'visibility 0.2s ease,opacity 0.2s ease'
                 }}>{props.label}</div>
            <div className={shared.wrapper}>
                <button
                    style={{
                        height: props.size === 'small' ? '36px' : '56px',
                        overflow: "hidden"
                    }}
                    className={[color.className, styles.button].join(' ')}
                    onClick={() => setOpenModal(true)}
                >
                    <Ripple opacity={.15} disabled={props.disabled} accentColor={color.color}/>
                    <div
                        className={shared.labelContainer}
                        style={{
                            color: '#555555',
                            alignItems: 'center',
                            height: '100%',
                            gap: '16px',
                            display: 'flex'
                        }}
                    >
                        Anexar arquivos
                        {files.length > 0 ?
                            <div style={{fontSize: '.7rem', color: '#777777'}}>
                                ({files.length} Anexados)
                            </div>
                            :
                            null}
                    </div>


                    <AttachFileRounded style={{fontSize: '1.2rem'}}/>


                </button>
            </div>
            <div className={shared.alertLabel}
                 style={{
                     color: (files.length === 0) ? '#ff5555' : undefined,
                     visibility: props.required ? 'visible' : 'hidden'
                 }}>{lang.required}</div>

            <FileModal open={openModal} setOpen={setOpenModal} files={files} multiple={props.multiple}
                       setFiles={props.handleChange}
                       accept={props.acceptTypes && Array.isArray(props.acceptTypes) ? props.acceptTypes : []}
                       handleFileRemoval={props.handleFileRemoval}/>
        </div>
    )
}

FileField.propTypes = {
    handleFileRemoval: PropTypes.func,
    files: PropTypes.array,
    multiple: PropTypes.bool,
    acceptTypes: PropTypes.array,
    handleChange: PropTypes.func,
    label: PropTypes.string,
    width: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,

    size: PropTypes.oneOf(['small', 'default']),
    colorVariant: PropTypes.oneOf(['default', 'secondary'])
}
