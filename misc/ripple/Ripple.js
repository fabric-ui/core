import styles from './styles/Ripple.module.css'
import PropTypes from 'prop-types'
import {useEffect, useRef} from "react";

export default function Ripple(props) {
    const ref = useRef()
    const wrapperRef = useRef()
    const handleMouseDown = (e) => {
        const parent = wrapperRef.current.parentNode.getBoundingClientRect()
        wrapperRef.current.style.width = parent.width + 'px'
        wrapperRef.current.style.height = parent.height + 'px'

        const elements = document.elementsFromPoint(e.clientX, e.clientY).filter(e => e.className === styles.wrapper)
        if (elements.includes(wrapperRef.current) && elements.indexOf(wrapperRef.current) === 0) {
            const rect = ref.current.parentNode.getBoundingClientRect()

            ref.current?.style.setProperty('--size', rect.width + 'px')
            ref.current?.style.setProperty('--x', (e.clientX - rect.x) + 'px')
            ref.current?.style.setProperty('--y', (e.clientY - rect.y) + 'px')
            ref.current.classList.add(styles.ripple)
        }
    }
    useEffect(() => {

        document.addEventListener('mousedown', handleMouseDown)
        if (props.opacity)
            ref.current?.style.setProperty('--opacity', props.opacity)


        return () => {
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    useEffect(() => {
        if (props.accentColor)
            ref.current?.style.setProperty('--accent-color', props.accentColor)
    }, [props.accentColor])


    return (
        <span className={styles.wrapper} ref={wrapperRef}>
            <span
                className={styles.content}
                ref={ref}
                onAnimationEnd={(e) => {
                    if (!e.currentTarget.classList.contains(styles.exit)) {
                        ref.current.classList.add(styles.exit)
                        ref.current.classList.remove(styles.ripple)
                    } else {
                        ref.current.classList.remove(styles.exit)
                        ref.current.classList.remove(styles.ripple)
                    }

                }}
            />
       </span>

    )
}
Ripple.propTypes = {
    disabled: PropTypes.bool,
    accentColor: PropTypes.string,
    opacity: PropTypes.number
}