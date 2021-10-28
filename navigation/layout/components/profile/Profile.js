import PropTypes from 'prop-types'
import React, {useState} from 'react'
import styles from './styles/Profile.module.css'
import AnimationFrame from "../../templates/AnimationFrame";
import {Avatar} from "@material-ui/core";
import Button from "../../../../inputs/button/Button";
import ToolTip from "../../../../feedback/tooltip/ToolTip";


export default function Profile(props) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={styles.appsContainer}
            onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget))
                    setOpen(false)
            }}
        >
            {props.profile && Object.keys(props.profile).length > 0 ?
                <Button
                    className={styles.buttonContainer}
                    onClick={() => setOpen(!open)}
                    highlight={open}
                    styles={{
                        paddingLeft: '2px',
                        paddingRight: '2px',
                        whiteSpace: 'nowrap'
                    }}
                >
                    <div style={{
                        fontSize: '.85rem',
                        fontWeight: 'bold',
                        transition: '150ms linear'
                    }}>
                        Bem vindo
                    </div>

                    <div className={styles.overflowEllipsis} style={{maxWidth: '100%'}}>
                        {props.profile.name}
                    </div>
                    <Avatar style={{width: '30px', height: '30px'}} src={props.profile.image}/>
                    <ToolTip content={props.profile.name}/>
                </Button>
                :
                <Button
                    className={styles.buttonContainer}
                    onClick={() => props.fallbackProfileButton.onClick()}
                    styles={{
                        justifyContent: 'center',
                        minWidth: '100px',
                        gap: '8px'
                    }}
                >
                    <div>
                        {props.fallbackProfileButton.label}
                    </div>
                    {props.fallbackProfileButton.icon}
                </Button>
            }

            <AnimationFrame render={open}>
                <div className={styles.floatingBox}>
                    {props.buttons.map((button, index) => !button ? null : (
                        <React.Fragment key={'profile-button-' + index}>
                            <Button
                                className={styles.buttonContainer}

                                disabled={button.disabled}
                                onClick={() => button.onClick()}
                                styles={{
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    height: '44px'
                                }}>

                                {button.icon}
                                <div className={styles.buttonLabel}> {button.label}</div>
                            </Button>
                        </React.Fragment>
                    ))}
                </div>
            </AnimationFrame>
        </div>
    )
}
Profile.propTypes = {
    fallbackProfileButton: PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.any,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }),
    redirect: PropTypes.func,
    profile: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        image: PropTypes.string
    }),
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            icon: PropTypes.any,
            onClick: PropTypes.func,
            disabled: PropTypes.bool
        })
    )
}
