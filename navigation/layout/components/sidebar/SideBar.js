import PropTypes from "prop-types";
import React, {useMemo} from "react";
import styles from "./styles/SideBar.module.css";
import ToolTip from "../../../../feedback/tooltip/ToolTip";
import Button from "../../../../inputs/button/Button";

export default function SideBar(props) {
    const buttonStyle = useMemo(() => {
        return {
            width: props.open ? '100%' : undefined,
            display: props.open ? 'flex' : 'grid',
            gap: props.open ? '6px' : '2px',
            justifyContent: props.open ? 'space-between' : 'center',
            justifyItems: props.open ? undefined : 'center',
            padding: props.open ? '8px' : '8px 2px'
        }
    }, [props.open])


    return (
        <div
            className={styles.wrapper} style={{width: !props.open ? '60px' : '225px'}}
        >
            <div className={styles.buttons} style={{padding: props.open ? ' 4px 8px' : '4px'}}>
                {props.buttons?.filter(e => e && e.position !== 'bottom').map((button, index) => !button ? null : (
                    <React.Fragment key={'side-bar-button-' + index}>
                        <Button
                            highlight={button.highlight}
                            className={styles.buttonContainer}
                            disabled={button.disabled}
                            onClick={() => button.onClick()}
                            styles={buttonStyle}
                        >
                            {button.icon}
                            <div
                                className={[styles.buttonLabel, styles.overflowEllipsis].join(' ')}
                                style={{
                                    maxWidth: '100%',
                                    fontSize: props.open ? undefined : '.65rem',
                                    textAlign: props.open ? undefined : 'center',
                                }}>
                                {button.label}
                            </div>
                            <ToolTip align={'middle'} justify={'end'} content={button.label}/>
                        </Button>

                    </React.Fragment>
                ))}

                <div className={styles.bottomOptions}>
                    {props.buttons?.filter(e => e && e.position === 'bottom').map((button, index) => !button ? null : (
                        <React.Fragment key={'side-bar-button-' + index}>
                            <Button
                                highlight={button.highlight}
                                className={styles.buttonContainer}
                                disabled={button.disabled}
                                onClick={() => button.onClick()}
                                styles={buttonStyle}
                            >
                                {button.icon}
                                <div
                                    className={[styles.buttonLabel, styles.overflowEllipsis].join(' ')}
                                    style={{
                                        maxWidth: '100%',
                                        fontSize: props.open ? undefined : '.65rem',
                                        textAlign: props.open ? undefined : 'center',
                                    }}>
                                    {button.label}
                                </div>
                                <ToolTip align={'middle'} justify={'end'} content={button.label}/>
                            </Button>

                        </React.Fragment>
                    ))}

                </div>
            </div>

        </div>
    )

}

SideBar.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.any,
            onClick: PropTypes.func,
            highlight: PropTypes.bool,
            position: PropTypes.oneOf(['bottom', 'default'])
        })
    ),

    open: PropTypes.bool

}
