import PropTypes from 'prop-types'
import styles from '../styles/Row.module.css'
import React, {useEffect, useRef, useState} from 'react'
import keyTemplate from "../templates/keyTemplate";
import {SettingsRounded} from "@material-ui/icons";
import HeaderCell from "./HeaderCell";

export default function Header(props) {
    const ref = useRef()
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        if (!scrolled && ref.current?.parentNode.scrollTop > 0)
            setScrolled(true)
        else if (ref.current?.parentNode.scrollTop === 0)
            setScrolled(false)
    }
    useEffect(() => {
        ref.current?.parentNode.addEventListener('scroll', handleScroll)
        return () => {
            ref.current?.parentNode.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])
    return (
        <div className={[styles.headerRow, scrolled ? styles.scrolledHeader : undefined].join(' ')} ref={ref}>
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
            <div className={styles.cell}
                 style={{display: props.hasOptions ? 'flex' : 'none', justifyContent: 'center', width: '30px', padding: 0}}>
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
