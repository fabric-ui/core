import React, {useRef, useState} from "react"
import styles from "./styles/Accordion.module.css"
import PropTypes from "prop-types"
import AccordionSummary from "./AccordionSummary"
import Button from "../../inputs/button/Button"
import Icon from "../../visualization/icon/Icon"

export default function Accordion(props) {
   const summary = React.Children.toArray(props.children).find(e => e.type === AccordionSummary)
   const content = React.Children.toArray(props.children).filter(e => e.type !== AccordionSummary)
   const ref = useRef()
   const [open, setOpen] = useState(true)

   return (
      <div
         {...props.attributes}
         className={[styles.details, props.className].join(' ')} ref={props.reference ? props.reference : ref}
           style={props.styles}>
         <Button
            onClick={() => setOpen(!open)}
            className={[styles.summary, summary?.props.className].join(' ')}
            styles={summary?.props.styles}
         >
        <Icon
           styles={{transform: !open ? 'rotate(-90deg)' : undefined, fontSize: '1.25rem'}}
           >expand_more</Icon>
            {summary}
         </Button>
         <div
            className={props.contentClassName}
            style={{
               ...props.contentStyles,
               ...{
                  display: !open ? 'none' : props.contentStyles?.display,
                  overflow: 'hidden'
               },
            }}>
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
