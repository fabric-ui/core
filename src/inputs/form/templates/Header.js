import styles from "../styles/Form.module.css"
import React from "react"
import PropTypes from "prop-types"
import Button from "../../button/Button"
import useLocale from "../../../misc/hooks/useLocale"
import Icon from "../../../visualization/icon/Icon"

export default function Header(props) {
    const translate = useLocale()

    return (
        <div className={styles.header} style={{boxShadow: props.scrolled ? undefined : 'none'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: props.returnButton ? undefined : '4px'}}>
                <div className={styles.headerContent}>
                    <Button className={styles.buttonContainer}
                            styles={{display: props.returnButton ? undefined : 'none'}}
                            onClick={() => props.handleClose()}>
                        <Icon>arrow_back</Icon>
                    </Button>
                    {props.title}
                </div>

                <div className={styles.headerContent}>
                    <Button
                        className={styles.submitButton} disabled={props.disabled}
                        variant={'filled'}

                        onClick={() => {
                            props.hook.setChanged(false)
                            props.handleSubmit(props.hook.data, props.hook.clearState)
                        }}>
                        {props.submitLabel ? props.submitLabel : (props.create ? translate('create') : translate('save'))}
                    </Button>
                </div>
            </div>

        </div>
    )
}

Header.propTypes = {
    scrolled: PropTypes.bool,

    disabled: PropTypes.bool,
    returnButton: PropTypes.bool,
    title: PropTypes.string,
    hook: PropTypes.object.isRequired,
    create: PropTypes.bool,

    handleSubmit: PropTypes.func.isRequired,

    handleClose: PropTypes.func,
    submitLabel: PropTypes.string,

}
