import useField from "../hooks/useField";
import PropTypes from 'prop-types'
import keyTemplate from "../list/templates/keyTemplate";


export default function RowCell(props) {
    const content = useField(props.field, props.data)
    return (
        <span style={{color: props.field.getColor ? props.field.getColor(props.data[props.field.key]) : undefined}}>
            {content}
        </span>
    )
}
RowCell.propTypes = {
    data: PropTypes.object,
    field: keyTemplate
}