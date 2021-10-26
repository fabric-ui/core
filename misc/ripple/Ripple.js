import styles from './styles/Ripple.module.css'
import PropTypes from 'prop-types'
import {useEffect, useRef, useState} from "react";

export default function Ripple(props) {
    const ref = useRef()

    const handleMouseDown = (e) => {

            ref.current.removeAttribute('data-active')
            ref.current.setAttribute('data-active', true)
            removeAllAnimations()

            ref.current?.classList.remove(styles.exit)

            const rect = ref.current.parentNode.getBoundingClientRect()
            ref.current?.style.setProperty('--size', rect.width + 'px')
            ref.current?.style.setProperty('--x', (e.clientX - rect.x) + 'px')
            ref.current?.style.setProperty('--y', (e.clientY - rect.y) + 'px')
            ref.current?.classList.add(styles.ripple)

    }
    const handleMouseUp = () => {
        const active = JSON.parse(ref.current.getAttribute('data-active'))
        const ended = JSON.parse(ref.current.getAttribute('data-animation-ended'))
        if ( active) {
            if (ended || ended === null) {
                ref.current?.classList.remove(styles.ripple)
                ref.current?.classList.add(styles.exit)
            }

            ref.current.removeAttribute('data-active')
            ref.current.setAttribute('data-active', false)
        }
    }
    const handleMouseOut = () => {
        if ( JSON.parse(ref.current.getAttribute('data-animation-ended'))) {
            ref.current.removeAttribute('data-animation-ended')
            ref.current.setAttribute('data-animation-ended', true)

            ref.current?.classList.remove(styles.ripple)
            ref.current?.classList.add(styles.exit)

        }

    }
    useEffect(() => {

        ref.current?.parentNode.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        ref.current?.parentNode.addEventListener('mouseout', handleMouseOut)
        if (props.opacity)
            ref.current?.style.setProperty('--opacity', props.opacity)
        if (props.accentColor)
            ref.current?.style.setProperty('--accent-color', props.accentColor)

        return () => {
            ref.current?.parentNode.removeEventListener('mouseout', handleMouseOut)
            document.removeEventListener('mouseup', handleMouseUp)
            ref.current?.parentNode.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])


    const removeAllAnimations = () => {
        ref.current?.classList.remove(styles.fill)
        ref.current?.classList.remove(styles.ripple)
        ref.current?.classList.remove(styles.exit)
    }

    const handleAnimExit = (active) => {
        if (ref.current.classList.contains(styles.ripple) && !ref.current.classList.contains(styles.exit) && (props.keep || active)) {
            ref.current?.classList.add(styles.fill)
        } else if (!ref.current.classList.contains(styles.exit)) {
            ref.current?.classList.remove(styles.ripple)
            ref.current?.classList.add(styles.exit)
        }
    }

    return (
        <span
            className={styles.wrapper}
            ref={ref}
            onAnimationStart={() => {
                if (!ref.current?.classList.contains(styles.exit))
                    ref.current.setAttribute('data-animation-ended', false)
            }}
            onAnimationEnd={e => {
                ref.current.removeAttribute('data-animation-ended')
                ref.current.setAttribute('data-animation-ended', true)
                handleAnimExit(JSON.parse(ref.current.getAttribute('data-active')))
            }}
        />

    )
}
Ripple.propTypes = {
    disabled: PropTypes.bool,
    accentColor: PropTypes.string,
    opacity: PropTypes.number
}