import React, {useLayoutEffect, useRef, useState} from 'react'
import styles from "../styles/Alert.module.css";
import Alert from "../Alert";
import ReactDOM from 'react-dom'

export default function useAlert(dark) {
   const [defaultTimeout, setDefaultTimeout] = useState(3500)
   const target = useRef()

   useLayoutEffect(() => {
      target.current = document.createElement('div')
      document.body.appendChild(target.current)
      target.current.className = styles.wrapper
      target.current.style.zIndex = -1
   }, [])

   const pushAlert = (message, type) => {
      const newElement = document.createElement('div')
      target.current?.appendChild(newElement)
      target.current.style.zIndex = 999

      ReactDOM.render(
         <Alert
            dark={dark}
            message={message}
            handleClose={() => {
               newElement.className = styles.outAnimation
               newElement.addEventListener('animationend', () => {
                  ReactDOM.unmountComponentAtNode(newElement)
                  try {
                     target.current?.removeChild(newElement)
                  } catch (e) {
                  }
               }, {once: true})

            }}
            type={type}
            defaultTimeout={defaultTimeout}
         />,
         newElement)
   }



   return {pushAlert, defaultTimeout, setDefaultTimeout}
}
