import React, {useEffect, useRef, useState} from 'react'
import styles from "../styles/Alert.module.css";
import Alert from "../Alert";
import * as DOM from 'react-dom/client'

export default function useAlert(dark) {
   const [defaultTimeout, setDefaultTimeout] = useState(3500)
   const target = useRef()
   const pushAlert = (message, type) => {
      const newElement = document.createElement('div')
      target.current?.appendChild(newElement)
      target.current.style.zIndex = 999
      const root = DOM.createRoot(newElement)
      root.render(
         <Alert
            dark={dark}
            message={message}
            handleClose={() => {
               newElement.className = styles.outAnimation
               newElement.addEventListener('animationend', () => {
                  root.unmount()
                  try {
                     target.current?.removeChild(newElement)
                  } catch (e) {
                  }
               }, {once: true})

            }}
            type={type}
            defaultTimeout={defaultTimeout}
         /> )
   }

   useEffect(() => {
      target.current = document.createElement('div')
      document.body.appendChild(target.current)
      target.current.className = styles.wrapper
      target.current.style.zIndex = -1
      alert.pushAlert = pushAlert
   }, [])




   return {pushAlert, defaultTimeout, setDefaultTimeout}
}
