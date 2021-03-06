import React, {useContext, useEffect, useRef, useState} from "react"
import PropTypes from "prop-types"
import Button from "../../inputs/button/Button"
import DropdownOptions from "./DropdownOptions"
import DropdownProvider from "./DropdownProvider"
import Icon from "../../visualization/icon/Icon"
import Content from "./Content"
import ThemeContext from "../../misc/hooks/ThemeContext"

export default function Dropdown(props) {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const resizeOBS = new ResizeObserver(() => {
            setOpen(false)
        })
        resizeOBS.observe(document.body)
        return () => resizeOBS.disconnect()
    }, [])
    const theme = useContext(ThemeContext)
    const children = React.Children.toArray(props.children)
    return (
        <>
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
                {children.filter(e => e?.type?.name !== DropdownOptions.name).map(l => l)}
                {props.hideArrow ? null : <Icon>arrow_drop_down</Icon>}
            </Button>
            {open && typeof window !== "undefined" ?
                <Content
                    {...props}
                    theme={theme}
                    parent={ref.current}
                    close={() => {
                        if (props.onClose)
                            props.onClose()
                        setOpen(false)
                    }}>
                    <DropdownProvider.Provider
                        value={{
                            setOpen,
                            open
                        }}
                    >
                        {children.find(e => e?.type?.name === DropdownOptions.name)}
                    </DropdownProvider.Provider>
                </Content>
                :
                null
            }
        </>
    )
}

Dropdown.propTypes = {
    modalClassName: PropTypes.string,
    modalStyles: PropTypes.object,

    onOpen: PropTypes.func,
    onClose: PropTypes.func,

    attributes: PropTypes.object,
    hideArrow: PropTypes.bool,
    highlight: PropTypes.bool,
    variant: PropTypes.oneOf(["minimal", "filled", "outlined", "minimal-horizontal"]),
    className: PropTypes.string,
    styles: PropTypes.object,
    disabled: PropTypes.bool,
    children: PropTypes.node,
}
