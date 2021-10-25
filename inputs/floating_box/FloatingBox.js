import React, {useEffect, useRef} from "react";
import PropTypes from 'prop-types'
import styles from './styles/FloatingBox.module.css'

export default function FloatingBox(props) {
    const ref = useRef()
    const handleMouseDown = (event) => {
        if (event.target !== ref.current)
            props.setOpen(false)
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown)

        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [props.open])

    return (
        <div style={{visibility: !props.open ? 'hidden' : 'visible', opacity: !props.open ? '0' : '1'}}
             className={styles.selectBox} ref={ref}>
            {props.children}
        </div>
    )
}

FloatingBox.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    children: PropTypes.node,
    reference: PropTypes.object
}