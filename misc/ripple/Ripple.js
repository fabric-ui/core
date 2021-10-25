import styles from './styles/Ripple.module.css'
import PropTypes from 'prop-types'
import {useEffect, useRef} from "react";

export default function Ripple(props) {
    const ref = useRef()
    const handleExit = () => {
        ref.current.classList.remove(styles.rippleAnim)
        ref.current.classList.remove(styles.rippleExitAnim)
    }
    const handleMouseDown = (event) => {
        const box = ref.current.parentNode.getBoundingClientRect()
        let x = event.clientX - box.x, y = event.clientY - box.y

        ref.current.style.left = x + 'px'
        ref.current.style.top = y + 'px'
        ref.current.classList.add(styles.rippleAnim)
    }
    useEffect(() => {
        const target = ref.current.parentNode
        if(!props.disabled) {
            if(props.opacity)
                ref.current.style.setProperty('--opacity', props.opacity)
            ref.current.style.setProperty('--size', target.offsetWidth + 'px')
            document.addEventListener('mouseup', handleExit)
            target.addEventListener('mousedown', handleMouseDown)
        }
        return () => {
            document.removeEventListener('mouseup', handleExit)
            target.removeEventListener('mousedown', handleMouseDown)
        }
    }, [props.disabled])

    return (
        <span className={styles.wrapper} ref={ref} style={{background: props.accentColor}}/>
    )
}
Ripple.propTypes = {
    disabled: PropTypes.bool,
    accentColor: PropTypes.string,
    opacity: PropTypes.number
}