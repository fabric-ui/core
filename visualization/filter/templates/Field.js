import PropTypes from 'prop-types'
import Modal from "../../../navigation/modal/Modal";
import styles from '../styles/Field.module.css'
import {CheckRounded} from "@material-ui/icons";
import useFilter from "../hooks/useFilters";
import React from 'react'
import keyTemplate from "../../list/templates/keyTemplate";


export default function Field(props) {
    const {
        getField,
        changed
    } = useFilter(props.selectedField, props.setSelectedField)

    return (
        <Modal
            open={props.open}
            handleClose={() => {
                props.handleClose()
                props.setSelectedField(null)
            }} blurIntensity={.1}
            animationStyle={'fade'}
            wrapperClassName={styles.container}
        >
            {props.selectedField !== null && props.selectedField !== undefined ?
                (
                    <div style={{display: 'grid', alignContent: 'space-between', gap: '32px'}}>
                        {getField()}
                        <div style={{display: 'flex', gap: '4px'}}>
                            <button
                                className={[styles.baseButton, styles.cancelButton].join(' ')}
                                onClick={() => {
                                    props.handleClose()
                                    props.setSelectedField(null)
                                }}>
                                Cancelar
                            </button>
                            <button
                                className={styles.baseButton}
                                disabled={!changed}
                                onClick={() => props.applyFilter()}>
                                <CheckRounded/>
                                Aplicar
                            </button>
                        </div>
                    </div>
                )
                :
                null
            }
        </Modal>
    )
}

Field.propTypes = {
    applyFilter: PropTypes.func,
    keys: PropTypes.arrayOf(keyTemplate).isRequired,

    selectedField: PropTypes.object,
    setSelectedField: PropTypes.func,

    open: PropTypes.bool,
    handleClose: PropTypes.func,
}
