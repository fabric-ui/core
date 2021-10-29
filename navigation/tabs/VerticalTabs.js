import PropTypes from 'prop-types'
import React, {useMemo, useRef, useState} from "react";
import styles from './styles/Vertical.module.css'
import shared from './styles/Tabs.module.css'
import Switcher from "../switcher/Switcher";
import Row from "./components/Row";

export default function VerticalTabs(props) {
    const [open, setOpen] = useState({classSelected: 0, rowSelected: 0})

    const openTab = useMemo(() => {
        let indexClass = 0
        props.classes.forEach((e, i) => {
            if (open.classSelected > i)
                indexClass = indexClass + e.buttons.length
        })
        return indexClass + open.rowSelected
    }, [open, props.classes])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                {props.children}
                <div className={styles.tabs}>
                    {props.classes.map((e, i) => (
                        <React.Fragment key={i + '-class'}>
                            <Row setOpen={setOpen} open={open} data={e} index={i}/>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <Switcher openChild={openTab} className={styles.content}>
                {props.classes.map((e, i) => e.buttons.map((b, bI) => (
                    <React.Fragment key={i + '-vertical-tabs-child-' + bI}>
                        {b.children}
                    </React.Fragment>
                )))}
            </Switcher>
        </div>
    )
}

VerticalTabs.proptypes = {
    classes: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                children: PropTypes.node,
                onClick: PropTypes.func
            })
        ),
    })),
    children: PropTypes.node
}
