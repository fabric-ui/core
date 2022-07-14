import React, {useRef} from "react"
import styles from "./styles/Accordion.module.css"
import PropTypes from "prop-types"
import AccordionSummary from "./AccordionSummary"

export default function Accordion(props) {
    const summary = React.Children.toArray(props.children).find(e => e.type === AccordionSummary)
    const content = React.Children.toArray(props.children).filter(e => e.type !== AccordionSummary)
    const ref = useRef()

    return (
        <details
            {...props.attributes}
            open={props.initializeOpen}
            className={[styles.details, props.className].join(" ")} ref={props.reference ? props.reference : ref}
            style={props.styles}
        >
            <summary
                className={[styles.summary, summary?.props.className].join(" ")}
                style={summary?.props.styles}
            >
                <span data-icon={"true"} data-accordion={"true"} style={{fontSize: "1.25rem"}}>expand_more</span>
                {summary}
            </summary>
            <div
                className={props.contentClassName}
                style={props.contentStyles}
            >
                {content}
            </div>
        </details>
    )

}
Accordion.propTypes = {
    initializeOpen: PropTypes.bool,
    contentClassName: PropTypes.string,
    contentStyles: PropTypes.object,
    attributes: PropTypes.object,
    reference: PropTypes.object,
    className: PropTypes.string,
    styles: PropTypes.object,
    children: PropTypes.node
}
