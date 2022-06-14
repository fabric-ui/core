import React, {useEffect, useMemo} from "react"
import styles from "./styles/Alert.module.css"
import Button from "../../inputs/button/Button"
import PropTypes from "prop-types"
import fabricStyles from "../../Fabric.module.css"
import Icon from "../../visualization/icon/Icon"

export default function Alert(props) {

    const variant = useMemo(() => {
        switch (props.type) {
        case "success":
            return {color: "#00F400", icon: <Icon>done</Icon>}
        case "alert":
            return {color: "#FFFF3E", icon: <Icon>warning</Icon>}
        case "info":
            return {color: "#0095ff", icon: <Icon>info</Icon>}
        default:
            return {color: "#ff5555", icon: <Icon>error</Icon>}
        }
    }, [props.type])

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.handleClose()
        }, props.defaultTimeout)
        return () => clearTimeout(timeout)
    }, [props.defaultTimeout])

    return (
        <div className={[styles.alertContainer, props.dark ? fabricStyles.dark : fabricStyles.light].join(" ")} style={{"--background": variant.color}}>
            <div className={styles.content} >
                <div
                    className={ styles.icon }
                >
                    {variant.icon}
                </div>
                {props.message}
            </div>
            <Button
                color={"secondary"}
                className={styles.button}
                onClick={() => props.handleClose()}
            >
                <Icon styles={{fontSize: "1.1rem"}}>close</Icon>
            </Button>
        </div>
    )
}
Alert.propTypes = {
    dark: PropTypes.bool.isRequired,
    defaultTimeout: PropTypes.number.isRequired,
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}
