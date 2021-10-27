import useField from "../hooks/useField";
import PropTypes from 'prop-types'


export default function RowCell(props){
    const content = useField(props.field, props.data)
    return (
        <span>
            {content}
        </span>
    )
}
RowCell.propTypes={
    data: PropTypes.object,
    field: PropTypes.object
}