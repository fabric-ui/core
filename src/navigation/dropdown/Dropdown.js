import React, {useCallback, useEffect, useMemo, useRef, useState} from "react"
import PropTypes from "prop-types"
import styles from "./styles/Dropdown.module.css"
import Button from "../../inputs/button/Button"
import Modal from "../modal/Modal"
import DropdownOptions from "./DropdownOptions"
import DropdownProvider from "./DropdownProvider"
import Icon from "../../visualization/icon/Icon"

export default function Dropdown(props) {
    const [open, setOpen] = useState(false)


    const modalRef = useCallback((node) => {
        if(node) {
            const bBox = node.getBoundingClientRect()
            const button = ref.current?.getBoundingClientRect()
            const body = document.body.getBoundingClientRect()

            const offX = 8,
                offY = 4
            let y = `calc(50% + ${button.height / 2 }px)`,
                x = 0


            if (bBox.y < 0)
                y = "calc(50% + " + ((-bBox.y / 2 - offY + button.height / 2) / 2) + "px)"

            if (bBox.x < 0)
                x = (-bBox.x + offX) + "px"

            if ((button.y + bBox.height + button.height) > body.height)
                y = `calc(-50% - ${button.height/2}px)`


            if ((bBox.x + bBox.width) > body.width)
                x = (body.width - (bBox.x + bBox.width) - offX) + "px"

            node.parentNode.style.transform = `translate(${x}, ${y})`
        }
    }, [])
    const ref = useRef()

    useEffect(() => {
        const resizeOBS = new ResizeObserver(() => {
            setOpen(false)
        })
        resizeOBS.observe(document.body)
        return () => resizeOBS.disconnect()
    }, [])

    const content = useMemo(() => {
        return React.Children.toArray(props.children).find(e => {
            return e?.type?.name === DropdownOptions.name
        })
    }, [props.children])

    const label = useMemo(() => {
        return React.Children.toArray(props.children).filter(e => !e?.type?.name || e?.type.name !== DropdownOptions.name)
    }, [props.children])
    console.log(open)
    return (
        <span>
            <Button

                highlight={open || props.highlight}
                attributes={{
                    ...props.attributes,
                    "data-open": `${open}`
                }}
                reference={ref}
                styles={{
                    ...props.styles,
                    display: props.hideArrow ? undefined : "flex",
                    alignItems: props.hideArrow ? undefined : "center",
                    gap: props.hideArrow ? undefined : "4px"

                }}
                variant={props.variant}
                onClick={() => {
                    if (props.onOpen)
                        props.onOpen()
                    setOpen(true)
                }}
                disabled={props.disabled}
                className={props.className}>
                {label.map(l => l)}

                {props.hideArrow ? null : <Icon>arrow_drop_down</Icon>}


            </Button>
            <Modal
                variant={"fit"}
                styles={{transition: props.animate ? undefined : "none"}}
                blurIntensity={0}
                className={[styles.buttons, props.wrapperClassname].join(" ")}
                animationStyle={props.animate ? "fade" : "none"}
                open={open}
                handleClose={() => {
                    setOpen(false)
                    if (props.onClose)
                        props.onClose()
                }}>
                <div ref={modalRef} className={props.modalContentClassname} style={props.modalContentStyles}>
                    <DropdownProvider.Provider value={{
                        setOpen,
                        open
                    }}>
                        {content}
                    </DropdownProvider.Provider>
                </div>
            </Modal>
        </span>
    )
}

Dropdown.propTypes = {
    modalContentClassname: PropTypes.string,
    modalContentStyles: PropTypes.object,

    animate: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,

    attributes: PropTypes.object,
    hideArrow: PropTypes.bool,
    wrapperClassname: PropTypes.string,
    highlight: PropTypes.bool,
    variant: PropTypes.oneOf(["minimal", "filled", "outlined", "minimal-horizontal"]),
    className: PropTypes.string,
    styles: PropTypes.object,
    disabled: PropTypes.bool,
    children: PropTypes.node,
}
