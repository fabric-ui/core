import PropTypes from 'prop-types'
import React, {useState} from "react";
import styles from './styles/Tabs.module.css'
import Switcher from "../switcher/Switcher";
import Button from "../../inputs/button/Button";

export default function Tabs(props) {
    const [open, setOpen] = useState(0)

    return (
        <div
            className={styles.wrapper}
            style={{background: props.noChildHighlight ? 'unset' : undefined}}>
            <div className={styles.header}
                 style={{background: props.noChildHighlight ? 'var(--background-1)' : undefined}}>
                {props.children}
                <div className={styles.tabs}>
                    {props.buttons.map((e, i) => (
                        <React.Fragment key={i + '-button-header-tab'}>
                            <Button
                                variant={'minimal'}
                                highlight={open === i}

                                onClick={() => {
                                    if (e.onClick !== undefined)
                                        e.onClick()
                                    setOpen(i)
                                }}>
                                {e.label}
                            </Button>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <Switcher
                animationType={'sideways'}
                openChild={open}
                className={[props.className, styles.content].join(' ')}>
                {props.buttons.map((e, i) => (
                    <React.Fragment key={'horizontal-tabs-child-' + i}>
                        {e.children}
                    </React.Fragment>
                ))}
            </Switcher>

        </div>
    )
}

Tabs.proptypes = {
    className: PropTypes.string,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            children: PropTypes.node,
            onClick: PropTypes.func
        })
    ),
    children: PropTypes.node,
    noChildHighlight: PropTypes.bool
}
