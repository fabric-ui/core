import styles from './styles/Form.module.css'
import React from "react";
import useForm from "./hooks/useForm";
import Header from "./templates/Header";
import PropTypes from "prop-types";


export default function Form(props) {
    const disabled = useForm({
        dependencies: props.dependencies,
        data: props.hook.data,
        changed: props.hook.changed
    })


    return (
        <div className={styles.wrapper}>
            <Header {...props} disabled={disabled}/>
            <div style={{
                paddingBottom: '100px',
                display: 'grid',
                gap: '8px'
            }}>
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
    dependencies: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        type: PropTypes.oneOf(['string', 'number', 'object', 'bool', 'date', 'array'])
    })),
    handleSubmit: PropTypes.func.isRequired,
    metadata: PropTypes.shape({
        lastModified: PropTypes.any,
        creator: PropTypes.any,
    }),
    handleClose: PropTypes.func,
    submitLabel: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.any, label: PropTypes.string, onClick: PropTypes.func,
        disabled: PropTypes.bool
    }))
}
