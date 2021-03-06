import styles from "../styles/Vertical.module.css"
import React, {useState} from "react"
import PropTypes from "prop-types"
import Button from "../../../inputs/button/Button"
import ToolTip from "../../../feedback/tooltip/ToolTip"
import Icon from "../../../visualization/icon/Icon"

export default function Row(props) {
    const [hidden, setHidden] = useState(false)
    return (
        <div className={styles.rowWrapper}>
            <Button
                className={styles.button} variant={'minimal-horizontal'}

                styles={{
                    display: props.groupName ? 'flex' : 'none',
                    alignItems: 'center',
                    padding: '2px 8px'
                }}
                onClick={() => setHidden(!hidden)}
            >
                <div className={styles.overflow}>
                    {props.groupName}
                </div>
                <ToolTip content={props.groupName}/>
               <Icon styles={{
                  transform: hidden ? 'rotate(180deg)' : "unset",
                  transition: '150ms linear'
               }}>
                  arrow_drop_down
               </Icon>
            </Button>

            {hidden ? null : props.buttons.map((b, bI) => b.label && b.group === props.groupName ? (
                <React.Fragment key={props.index + '-button-header-tab-' + bI}>
                    <Button
                        variant={'minimal-horizontal'}
                        className={[styles.button, styles.color].join(' ')}
                        styles={{fontWeight: 'normal', maxWidth: '100%', width: '100%', color: b.disabled ? "#999" : undefined}}
                        highlight={props.open === bI}
                        disabled={b.disabled}
                        onClick={() => {
                            props.setOpen(bI)
                        }}>
                        <div className={styles.overflow}>
                            {b.label}
                        </div>
                    </Button>
                </React.Fragment>
            ) : null)}

        </div>
    )
}

Row.propTypes = {
    groupName: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number,
    setOpen: PropTypes.func,
    open: PropTypes.number
}
