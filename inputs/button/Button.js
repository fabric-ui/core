import PropTypes from "prop-types";
import styles from './styles/Button.module.css'
import {useCallback, useMemo} from "react";

export default function Button(props) {
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
    }, [props.variant, , props.highlight]);
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

    return (
        <button
            className={[styles.button, variant.normal, props.highlight ? variant.highlight : undefined, color].join(' ')}
            onClick={onClick}
            style={props.styles}
            disabled={props.disabled}
        >
            {props.children}
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