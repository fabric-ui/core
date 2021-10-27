import PropTypes from 'prop-types'
import styles from '../styles/Row.module.css'
import React from 'react'
import RowCell from "../../shared/RowCell";
import keyTemplate from "../templates/keyTemplate";
import Button from "../../../inputs/button/Button";
import {ArrowDropDownRounded} from "@material-ui/icons";
import Dropdown from "./Dropdown";

export default function Row(props) {
    return (
        <div style={{display: 'flex', borderBottom: ' var(--border-0) 1px solid'}} ref={props.reference}>
            <Button className={styles.row} onClick={() => props.onClick()} >
                {props.keys.map((e, i) => (
                    <div
                        className={styles.cell}
                        key={i + '-row-cell-' + props.index}
                        style={{
                            width: `${(1 / props.keys.length) * 100}%`,
                            padding: '0 2px'
                            // color: 'var(--color-2)'
                        }}>
                        <div className={styles.overflow}>
                            <RowCell data={props.entry} field={e}/>
                        </div>
                    </div>
                ))}
            </Button>
            <div className={styles.cell}
                 style={{
                     display: props.hasOptions ? 'flex' : 'none',
                     justifyContent: 'center',
                     width: '30px',
                     alignItems: 'center',
                     height: '60px'
                 }}>
                <Dropdown
                    className={styles.mainButton}
                    label={<ArrowDropDownRounded/>}
                    buttons={props.controlButtons}
                    onClickProps={props.entry}/>
            </div>
        </div>
    )
}

Row.propTypes = {
    keys: PropTypes.arrayOf(keyTemplate),
    entry: PropTypes.object,
    onClick: PropTypes.func,
    hasOptions: PropTypes.bool,
    index: PropTypes.number,
    reference: PropTypes.func,
    controlButtons: PropTypes.array

}
