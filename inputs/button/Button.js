import PropTypes from "prop-types";
import styles from './styles/Button.module.css'
import {useCallback, useMemo, useRef} from "react";
import Ripple from "../../misc/ripple/Ripple";

export default function Button(props) {
    const ref = useRef()
    const variant = useMemo(() => {
        switch (props.variant) {
            case 'minimal':
                return {
                    normal: styles.minimal,
                    highlight: styles.minimalHighlight
                }
            case 'filled':
                return {
                    normal: styles.filled,
                    highlight: styles.filledHighlight
                }

            default:
                return {
                    normal: styles.outlined,
                    highlight: styles.outlinedHighlight
                }
        }
    }, [props.variant, props.highlight]);
    const color = useMemo(() => {
        if (props.color === 'secondary')
            return styles.secondaryVariant
        else
            return undefined
    }, [props.variant]);
    const onClick = useCallback((event) => {
        if (props.onClick)
            props.onClick(event)
    }, [])


    const accentColor = useMemo(() => {
        if (props.variant === 'filled') {
            if (props.color === 'secondary')
                return '#FF2626'
            else
                return '#0080DB'
        } else {
            if (props.color === 'secondary')
                return '#ff5555'
            else
                return '#0095ff'
        }
    }, [])
    return (
        <button
            className={[styles.button, variant.normal, props.highlight ? variant.highlight : undefined, color].join(' ')}
            onClick={onClick} ref={ref}
            style={props.styles}
            disabled={props.disabled}
        >
            <Ripple
                disabled={props.disabled}
                opacity={props.variant === 'filled' ? 1 : undefined}
                accentColor={accentColor}/>
            <span style={{position: 'relative', zIndex: 10}}>
                {props.children}
            </span>

        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['minimal', 'filled', 'outlined']),
    children: PropTypes.node,
    styles: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    highlight: PropTypes.bool,
    color: PropTypes.oneOf(['primary', 'secondary'])
}