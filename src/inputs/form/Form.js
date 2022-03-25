import styles from './styles/Form.module.css'
import React, {useEffect, useRef, useState} from "react";
import Header from "./templates/Header";
import PropTypes from "prop-types";


export default function Form(props) {

    const [disabled, setDisabled] = useState(false)
    const contentRef = useRef()
    useEffect(() => {
        const childNodes = contentRef.current.childNodes
        let completed = true

        childNodes.forEach((e) => {
           console.log(e)
            completed = completed && JSON.parse(e.getAttribute('data-completed'))
        })

        setDisabled(!completed || !props.hook.changed)
    }, [props.hook.changed, props.hook.data])

    const [scrolled, setScrolled] = useState(false)

    return (
        <div
            onScroll={event => {
                if (event.target.scrollTop > 0)
                    setScrolled(true)
                else
                    setScrolled(false)
            }}
            className={styles.wrapper}
        >
            <Header {...props} disabled={disabled} scrolled={scrolled}/>
            <div className={styles.content} ref={contentRef}>
                {props.children(props.hook.data, props.hook.handleChange)}
            </div>
        </div>
    )
}

Form.propTypes = {
    returnButton: PropTypes.bool,
    title: PropTypes.string,

    hook: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired,

    create: PropTypes.bool,

    handleSubmit: PropTypes.func.isRequired,

    handleClose: PropTypes.func,
    submitLabel: PropTypes.string
}
