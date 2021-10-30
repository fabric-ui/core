import PropTypes from "prop-types";
import Button from "../../inputs/button/Button";
import ToolTip from "../../feedback/tooltip/ToolTip";
import styles from './styles/SpeedDial.module.css'
export default function SpeedDialAction(props) {
    return (
        <div>
            <Button
                variant={'minimal'}
                disabled={props.disabled}
                onClick={props.onClick}
                className={styles.contentButton}
            >
                {props.icon}

            </Button>
            <ToolTip align={'middle'} justify={'start'} content={props.label}/>
        </div>
    )
}
SpeedDialAction.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}