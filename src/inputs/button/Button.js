import PropTypes from "prop-types";
import styles from './styles/Button.module.css'
import React, {useEffect, useMemo, useRef} from "react";
import Ripple from "../../misc/ripple/Ripple";

export default function Button(props) {
   const ref = useRef()
   const variant = useMemo(() => {
      switch (props.variant) {
         case 'minimal':
            return {
               normal: styles.minimal,
               highlight: [styles.minimalHighlight, styles.baseHighlight].join(' ')
            }
         case 'filled':
            return {
               normal: styles.filled,
               highlight: styles.filledHighlight
            }

         case 'outlined':
            return {
               normal: styles.outlined,
               highlight: [styles.outlinedHighlight, styles.baseHighlight].join(' ')
            }
         case 'minimal-horizontal':
            return {
               normal: [styles.minimal, styles.minimalHorizontal].join(' '),
               highlight: [styles.minimalHighlight, styles.baseHighlight].join(' ')
            }
         default:
            return {
               normal: [styles.default, styles.outlined].join(' '),
               highlight: [styles.outlinedHighlight, styles.baseHighlight].join(' ')
            }
      }
   }, [props.variant, props.highlight]);

   useEffect(() => {
      if (props.attributes) {
         const refA = props.reference ? props.reference : ref
         Object.keys(props.attributes)
            .forEach(a => {
               refA.current?.setAttribute(a, props.attributes[a])
            })
      }
   }, [props.attributes, props.reference])

   return (
      <button
         className={[styles.button, variant.normal, props.highlight ? variant.highlight : undefined, props.className].join(' ')}
         onClick={props.onClick} ref={props.reference ? props.reference : ref}
         style={props.styles}
         data-highlight={JSON.stringify(props.highlight)}
         disabled={props.disabled}
      >
         <Ripple
            disabled={props.disabled}
            opacity={props.variant === 'filled' ? .8 : undefined}

         />
         {props.children}
      </button>

   )
}

Button.propTypes = {
   attributes: PropTypes.object,

   reference: PropTypes.object,
   variant: PropTypes.oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
   children: PropTypes.node,
   styles: PropTypes.object,
   onClick: PropTypes.func,
   disabled: PropTypes.bool,
   highlight: PropTypes.bool,

   className: PropTypes.string
}
