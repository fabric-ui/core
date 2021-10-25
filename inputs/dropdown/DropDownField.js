import styles from '../shared/Dropdown.module.css'
import PropTypes from 'prop-types'
import React, {useMemo, useRef, useState} from 'react'
import {ArrowDropDownRounded} from '@material-ui/icons'
import LocalePT from '../shared/LocalePT'
import FloatingBox from "../floating_box/FloatingBox";
import ToolTip from "../../feedback/tooltip/ToolTip";

import shared from '../shared/Shared.module.css'
import Ripple from "../../misc/ripple/Ripple";

export default function DropDownField(props) {
    const [open, setOpen] = useState(false)

    const lang = LocalePT
    const ref = useRef()
    const selected = useMemo(() => {
        return props.choices.find(e => e.key === props.value)
    }, [props.value])

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
                 }}>{props.label}
            </div>
            <div className={shared.wrapper}>
                <button
                    disabled={props.disabled}
                    style={{
                        height: props.size === 'small' ? '36px' : '56px',
                        overflow: "hidden", maxWidth: 'unset'
                    }}
                    className={[color.className, styles.selectContainer, shared.labelContainer].join(' ')}
                    onClick={() => setOpen(!open)}
                >
                    <Ripple opacity={.15} disabled={props.disabled} accentColor={color.color}/>
                    <ArrowDropDownRounded
                        style={{transform: !open ? 'unset' : 'rotate(180deg)', transition: '150ms linear'}}/>
                    {selected ?
                        <div className={styles.valueContainer} style={{color: selected.color}}>
                            {selected.value}
                        </div>
                        : props.label}

                </button>
            </div>
            <FloatingBox open={open} setOpen={setOpen} reference={ref.current}  width={'100%'}>

                <div className={styles.dropDownChoicesContainer}>
                    {props.choices.map((choice, index) => (

                        <button
                            key={index + '-choice-button'}
                            style={{
                                color: choice.key === props.value ? 'white' : choice.color ? choice.color : undefined,
                                background: choice.key === props.value ? '#0095ff' : undefined
                            }}

                            onClick={() => {
                                props.handleChange(choice.key)
                                setOpen(false)
                            }}
                            className={styles.dropDownButton}
                        >
                            {choice.value}
                            <ToolTip content={choice.value}/>
                        </button>


                    ))}
                </div>
            </FloatingBox>
            <div className={shared.alertLabel}
                 style={{
                     color: props.value === null || props.value === undefined ? '#ff5555' : '#262626',
                     visibility: props.required ? 'visible' : 'hidden',
                 }}
            >
                {lang.required}
            </div>

        </div>
    )
}

DropDownField.propTypes = {
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
    size: PropTypes.oneOf(['small', 'default']),
    colorVariant: PropTypes.oneOf(['default', 'secondary'])
}
