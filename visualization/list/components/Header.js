import PropTypes from 'prop-types'
import styles from '../styles/Row.module.css'
import React from 'react'
import keyTemplate from "../templates/keyTemplate";
import {SettingsRounded} from "@material-ui/icons";
import HeaderCell from "./HeaderCell";

export default function Header(props) {
    return (
        <div className={styles.headerRow}>
            {props.keys.map((e, i) => (
                <React.Fragment key={i + 'header-row-cell'}>
                    <HeaderCell
                        hasOptions={props.hasOptions}
                        setSorts={props.setSorts}
                        value={e} sorts={props.sorts}
                       length={props.keys.length}
                    />
                </React.Fragment>
            ))}
            <div className={styles.cell} style={{display: props.hasOptions ? 'flex' : 'none', justifyContent: 'center', width: '30px'}}>
                <SettingsRounded style={{fontSize: '1.1rem', color: 'var(--color-4)'}}/>
            </div>
        </div>
    )
}

Header.propTypes = {
    keys: PropTypes.arrayOf(keyTemplate),
    hasOptions: PropTypes.bool,
    setSorts: PropTypes.func,
    sorts: PropTypes.arrayOf(PropTypes.object)
}
