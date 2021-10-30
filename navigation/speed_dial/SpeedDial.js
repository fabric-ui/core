import Button from "../../inputs/button/Button";
import styles from "./styles/SpeedDial.module.css";
import {MoreVertRounded} from "@material-ui/icons";
import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";

const OPEN_BY = {
    CLICK: 0,
    HOVER: 1
}
export default function SpeedDial(props) {
    const [open, setOpen] = useState(false)
    const [openBy, setOpenBy] = useState(null)
    const ref = useRef()
    const contentRef = useRef()
    const handleMouseEnter = () => {
        if (openBy === null) {
            setOpen(true)
            setOpenBy(OPEN_BY.HOVER)
        }
    }
    const handleMouseDown = (e) => {
        if (!document.elementsFromPoint(e.clientX, e.clientY).includes(ref.current.parentNode)) {
            setOpen(false)
            setOpenBy(null)
        }
    }
    const handleMouseOut = (e) => {
        setOpen(false)
        setOpenBy(null)
    }
    useEffect(() => {
        ref.current.addEventListener('mouseenter', handleMouseEnter)
        contentRef.current.addEventListener('mouseleave', handleMouseOut)
        document.addEventListener('mousedown', handleMouseDown)
        return () => {
            contentRef.current.removeEventListener('mouseleave', handleMouseOut)
            document.removeEventListener('mousedown', handleMouseDown)
            ref.current.removeEventListener('mouseenter', handleMouseEnter)
        }
    }, [openBy])
    return (
        <div style={{position: 'relative'}}>

            <div ref={contentRef} style={{
                visibility: open ? 'visible' : 'hidden',
                opacity: open ? '1' : '0',

            }} className={styles.content}>
                {props.children}
            </div>
            <Button
                reference={ref} highlight={open}
                variant={'minimal'}
                onClick={() => {
                    if (open) {
                        setOpen(false)
                        setOpenBy(null)
                    } else {
                        setOpen(true)
                        setOpenBy(OPEN_BY.CLICK)
                    }
                }}
                className={styles.button}>
                <MoreVertRounded/>
            </Button>
        </div>
    )
}
SpeedDial.propTypes = {
    children: PropTypes.node
}