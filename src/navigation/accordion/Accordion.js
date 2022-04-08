import React, {useEffect, useRef, useState} from 'react'
import styles from './styles/Accordion.module.css'
import PropTypes from "prop-types";
import AccordionSummary from "./AccordionSummary";
import Button from "../../inputs/button/Button";

export default function Accordion(props) {
   const summary = React.Children.toArray(props.children).find(e => e.type === AccordionSummary)
   const content = React.Children.toArray(props.children).filter(e => e.type !== AccordionSummary)
   const ref = useRef()

   const [open, setOpen] = useState(true)

   useEffect(() => {
      if (props.attributes) {
         const r = props.reference ? props.reference : ref
         Object.keys(props.attributes)
            .forEach(a => {
               r.current.setAttribute(a, props.attributes[a])
            })
      }
   }, [props.attributes])

   return (
      <div className={[styles.details, props.className].join(' ')} ref={props.reference ? props.reference : ref}
           style={props.styles}>
         <Button
            onClick={() => setOpen(!open)}
            className={[styles.summary, summary?.props.className].join(' ')}
            styles={summary?.props.styles}
         >
        <span
           style={{transform: !open ? 'rotate(-90deg)' : undefined, fontSize: '1.25rem', transition: '150ms linear'}}
           className={'material-icons-round'}>expand_more</span>
            {summary}
         </Button>
         <div className={props.contentClassName}
              onTransitionEnd={(e) => {
                 e.currentTarget.style.maxHeight = e.currentTarget.getBoundingClientRect().height + 'px'
              }}
              style={{...{maxHeight: !open ? 0 : '100vh', transition: '150ms ease-in', overflow: 'hidden'}, ...props.contentStyles}}>
            {content}
         </div>
      </div>
   )

}
Accordion.propTypes = {
   contentClassName: PropTypes.string,
   contentStyles: PropTypes.object,
   attributes: PropTypes.object,
   reference: PropTypes.object,
   className: PropTypes.string,
   styles: PropTypes.object,
   children: PropTypes.node
}
