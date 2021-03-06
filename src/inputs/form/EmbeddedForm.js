import * as PropTypes from "prop-types"
import React, {useMemo} from "react"
import FormRow from "./FormRow"
import Checkbox from "../checkbox/Checkbox"
import DateField from "../date/DateField"
import TextField from "../text/TextField"
import SelectField from "../select/SelectField"
import Form from "./Form"
import TextArea from "../text/TextArea"

function Input(props) {
    return useMemo(() => {
        switch (props.type) {

        case "text":
            return (<TextField
                {...props.customProps}
                width={props.width}
                height={props.height}
                handleChange={(f) => {

                    props.handleChange({
                        event: f, key: props.fieldKey
                    })
                }}
                value={props.value}
                disabled={props.disabled}
                label={props.label}
                required={props.required}
                placeholder={props.placeHolder}/>)
        case "date":
            return (<DateField
                {...props.customProps}
                width={props.width}
                height={props.height}
                handleChange={(f) => {
                    props.handleChange({
                        event: f, key: props.fieldKey
                    })
                }}
                value={props.value}
                required={props.required}
                disabled={props.disabled}
                placeholder={props.placeHolder}
                label={props.label}/>)

        case "select":
            return (<SelectField
                {...props.customProps}
                width={props.width}
                height={props.height}
                handleChange={(f) => {
                    props.handleChange({
                        event: f, key: props.fieldKey
                    })
                }}
                value={props.value}
                required={props.required}
                disabled={props.disabled}
                label={props.label}
            />)
        case "text-area":
            return (<TextArea
                {...props.customProps}
                width={props.width}
                height={props.height}
                handleChange={(f) => {
                    props.handleChange({
                        event: f, key: props.fieldKey
                    })
                }}
                value={props.value}
                disabled={props.disabled}
                label={props.label}
                required={props.required}
                placeholder={props.placeHolder}/>)
        case "check":
            return (
                <Checkbox

                    {...props.customProps}
                    label={props.label}
                    width={props.width}
                    height={props.height}
                    required={props.required}
                    checked={props.value}
                    disabled={props.disabled}
                    handleCheck={(f) => {
                        props.handleChange({
                            event: !f, key: props.fieldKey
                        })
                    }}/>
            )
        default:
            return props.children ? props.children : null
        }
    }, [props])


}

Input.propTypes = {

    label: PropTypes.string,
    placeHolder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    fieldKey: PropTypes.string,
    type: PropTypes.oneOf(["custom", "text", "select", "multi-select", "check", "date", "file"]).isRequired,
    customProps: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,


    children: PropTypes.node, // CUSTOM INPUT
    value: PropTypes.any,
    handleChange: PropTypes.func
}


export default function EmbeddedForm(props) {
    return (<Form {...props}>
        {(data, handleChange) => props.sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex + "-section-input-row"}>
                <FormRow rowGap={section.rowGap} title={section.title} groups={section.groups}
                    columnGap={section.columnGap}>
                    {section.inputs.map((input, inputIndex) => (
                        <React.Fragment key={sectionIndex + "-section-input-row-" + inputIndex}>
                            <Input {...input} fieldKey={input.key} value={data[input.key]} handleChange={handleChange}/>
                        </React.Fragment>))}
                </FormRow>
            </React.Fragment>))}
    </Form>)
}


EmbeddedForm.propTypes = {

    sections: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string, groups: PropTypes.string,

        columnGap: PropTypes.string,
        rowGap: PropTypes.string,
        inputs: PropTypes.arrayOf(PropTypes.shape({

            required: PropTypes.bool,

            label: PropTypes.string,
            placeHolder: PropTypes.string,

            disabled: PropTypes.bool,
            key: PropTypes.string,
            type: PropTypes.oneOf(["text", "text-area", "select", "multi-select", "check", "date", "custom"]).isRequired,
            customProps: PropTypes.object,
            width: PropTypes.string,
            height: PropTypes.string,


            children: PropTypes.node // CUSTOM INPUT,

        })).isRequired
    })).isRequired,

    returnButton: PropTypes.bool, title: PropTypes.string,

    hook: PropTypes.object.isRequired,

    create: PropTypes.bool, dependencies: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string, type: PropTypes.oneOf(["string", "number", "object", "bool", "date", "array"])
    })), handleSubmit: PropTypes.func.isRequired,

    handleClose: PropTypes.func, submitLabel: PropTypes.string
}
