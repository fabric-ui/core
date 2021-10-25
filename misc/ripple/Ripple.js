import styles from './styles/Ripple.module.css'
import PropTypes from 'prop-types'
import {useEffect, useRef} from "react";

export default function Ripple(props) {
    const ref = useRef()
    const handleExit = () => {
        ref.current.style.transition = 'none'
        ref.current.classList.remove(styles.rippleAnim)
        ref.current.classList.remove(styles.rippleExitAnim)
    }
    const handleMouseDown = (event) => {
        ref.current.classList.remove(styles.rippleExitAnim)
        const box = ref.current.parentNode.getBoundingClientRect()
        let x = event.clientX - box.x, y = event.clientY - box.y

        ref.current.style.left = x + 'px'
        ref.current.style.top = y + 'px'
        ref.current.classList.add(styles.rippleAnim)
    }
    useEffect(() => {
        const target = ref.current.parentNode

        if (!props.disabled && !props.keep) {
            ref.current.classList.remove(styles.rippleAnim)
            ref.current.classList.remove(styles.rippleExitAnim)
            ref.current.style.opacity = '0'
            ref.current.style.width = '16px'
            ref.current.style.height = '16px'
            ref.current.style.transition = 'opacity 150ms ease-in'

            if (props.opacity)
                ref.current.style.setProperty('--opacity', props.opacity)

            document.addEventListener('mouseup', handleExit)
            target.addEventListener('mousedown', handleMouseDown)
        } else if (props.keep) {
            ref.current.classList.remove(styles.rippleAnim)
            ref.current.classList.remove(styles.rippleExitAnim)
            ref.current.style.opacity = props.opacity ? props.opacity : '.15'
            ref.current.style.width = '200%'
            ref.current.style.height = '200%'
            ref.current.style.left = '50%'
            ref.current.style.top = '50%'
        }
        return () => {
            document.removeEventListener('mouseup', handleExit)
            target.removeEventListener('mousedown', handleMouseDown)
        }
    }, [props.disabled, props.keep])
    useEffect(() => {
        ref.current.style.setProperty('--size', ref.current.parentNode.offsetWidth + 'px')
    })
    return (
        <span className={styles.wrapper} ref={ref} style={{background: props.accentColor}}/>
    )
}
Ripple.propTypes = {
    disabled: PropTypes.bool,
    accentColor: PropTypes.string,
    opacity: PropTypes.number,
    keep: PropTypes.bool
}