import PropTypes from 'prop-types'
import styles from '../../styles/Alert.module.css'
import {CheckCircleRounded, CloseRounded, ErrorRounded, ReportProblemRounded} from '@material-ui/icons'
import React, {useEffect, useMemo, useRef, useState} from 'react'
import ReactDOM from "react-dom";
import AlertPT from "../../locales/LocalesPT";
import Details from "../details/Details";

export default function Alert(props) {
    const lang = AlertPT
    const [open, setOpen] = useState(false)

    const ref = useRef()
    const getColor = (type) => {
        let response = {
            style: {},
            icon: undefined,
            message: undefined,
            messageCode: undefined
        }
        switch (type) {
            case 'error':
                response = {
                    style: {
                        background: '#ff5555',
                        color: 'white'
                    },
                    icon: (
                        <div style={{
                            color: 'white',
                            background: '#FF2626',
                            width: '40px',
                            height: '40px',
                            padding: '8px',
                            borderRadius: '8px'
                        }} className={styles.alertContentContainer}>
                            <ReportProblemRounded/>
                        </div>
                    ),
                    message: lang.error,
                    messageCode: props.data.httpStatusCode

                }
                break
            case 'alert':
                response = {
                    style: {
                        background: '#FFFF3E',
                        color: '#555555'
                    },
                    icon: (
                        <div style={{
                            color: 'white',
                            background: '#F4F400',
                            width: '40px',
                            height: '40px',
                            padding: '8px',
                            borderRadius: '8px'
                        }} className={styles.alertContentContainer}>
                            <ErrorRounded/>
                        </div>
                    ),
                    message: props.data.message,
                    messageCode: props.data.httpStatusCode
                }
                break
            case 'success':
                response = {
                    style: {
                        background: '#00F400',
                        color: '#555555'
                    },
                    icon: (
                        <div style={{
                            color: 'white',
                            background: '#00C300',
                            width: '40px',
                            height: '40px',
                            padding: '8px',
                            borderRadius: '8px'
                        }} className={styles.alertContentContainer}>
                            <CheckCircleRounded/>
                        </div>
                    ),
                    message: props.data.httpStatusCode === 201 ? lang.created : lang.success,
                    messageCode: props.data.httpStatusCode
                }

                break
            default:
                break
        }

        return response
    }
    const visuals = useMemo(() => {
        return getColor(props.type)
    }, [])
    useEffect(() => {

        console.log('SETTING TIMEOUT')
        const timeout = setTimeout(() => {

            if (!open)
                try {
                    ReactDOM.unmountComponentAtNode(ref.current?.parentNode);
                } catch (e) {
                    console.log(e)
                }
        }, 5000)

        return () => {
            console.log('RESETTING TIMEOUT')
            if (timeout)
                clearTimeout(timeout)
        }
    }, [open])

    return (
        <>
            <Details
                open={open}
                handleClose={() => {
                    setOpen(false)
                    console.log('CLOSING')
                }}
                data={props.data}
            />
            <button
                ref={ref}
                className={styles.alertContainer}
                onClick={() => setOpen(true)}
                style={{...visuals.style, ...{opacity: open ? 0 : 1, visibility: open ? 'hidden' : 'visible'}}}

            >
                <div className={styles.alertContentContainer}>
                    {visuals.icon}
                    <div>
                        {visuals.message}
                    </div>
                    {visuals.messageCode !== undefined ?
                        <div style={{fontSize: '.8rem'}}>
                            ({visuals.messageCode})
                        </div>
                        :
                        null
                    }
                </div>

                <button
                    className={styles.buttonContainer}
                    onClick={() => ReactDOM.unmountComponentAtNode(ref.current.parentNode)}
                >
                    <CloseRounded style={{fontSize: '1.15rem', color: visuals.style.color}}/>
                </button>
            </button>
        </>
    )
}

Alert.propTypes = {

    data: PropTypes.shape({
        message: PropTypes.string,
        details: PropTypes.string,
        httpStatusCode: PropTypes.number,
        package: PropTypes.any,
        method: PropTypes.string,
        url: PropTypes.string
    }),
    type: PropTypes.oneOf(['error', 'alert', 'success']),
}
