import React, {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import styles from './styles/Context.module.css'


export default function ContextWrapper(props) {
   const ref = useRef()
   const contextRef = useRef()
   const [selected, setSelected] = useState()


   let targets, startPosition = {}
   const handleContext = (event) => {
      if (Math.abs(startPosition.x - event.clientX) < 10 && Math.abs(startPosition.y - event.clientY) < 10) {
         targets = document.elementsFromPoint(event.clientX, event.clientY)
         targets = targets.filter(t => {
            let hasAttribute = false
            Array.from(t.attributes).forEach(attr => {
               const has = props.triggers.find(f => attr.nodeName === f)
               if (has)
                  hasAttribute = hasAttribute || has
            })

            if (hasAttribute)
               return t
         })
         event.preventDefault()

         if (targets.length > 0) {

            const currentTarget = targets[0]

            setSelected(currentTarget)
            if (props.onContext !== undefined)
               props.onContext(currentTarget)
         } else
            setSelected(undefined)


         contextRef.current.style.zIndex = '999'
         const bBox = contextRef.current?.getBoundingClientRect()
         if (event.clientX + bBox.width > document.body.offsetWidth)
            contextRef.current.style.left = (event.clientX - bBox.width) + 'px'
         else
            contextRef.current.style.left = event.clientX + 'px'

         if ((event.clientY + bBox.height) > document.body.offsetHeight)
            contextRef.current.style.top = (event.clientY) + 'px'
         else
            contextRef.current.style.top = (event.clientY + bBox.height) + 'px'
      }
      startPosition = {x: 0, y: 0}
   }
   const handleMouseDown = (event) => {
      startPosition = {x: event.clientX, y: event.clientY}
      if (!document.elementsFromPoint(event.clientX, event.clientY).includes(contextRef.current)) {
         if (props.onContextOut !== undefined)
            props.onContextOut(selected)
         setSelected(undefined)
         if (contextRef.current)
            contextRef.current.style.zIndex = '-1'
      }
   }

   useEffect(() => {
      if (props.attributes) {
         Object.keys(props.attributes).forEach((attr) => {
            ref.current?.setAttribute(attr, `${props.attributes[attr]}`)
         })
      }

      document.addEventListener('mousedown', handleMouseDown)
      ref.current?.parentNode.addEventListener('contextmenu', handleContext)

      return () => {
         document.removeEventListener('mousedown', handleMouseDown)
         ref.current?.parentNode.removeEventListener('contextmenu', handleContext)
      }
   }, [props.attributes, selected])


   return (
      <>
         <div className={[styles.wrapper, props.wrapperClassName].join(' ')} style={props.wrapperStyles}
              ref={contextRef}>
            {props.content(selected, () => {
               if (selected) {
                  setSelected(undefined)
                  if (contextRef.current)
                     contextRef.current.style.zIndex = '-1'
               }
            })}
         </div>
         <div className={props.className} data-self={'true'} style={props.styles} ref={ref}>
            {props.children}
         </div>
      </>
   )
}

ContextWrapper.propTypes = {
   onContext: PropTypes.func,
   onContextOut: PropTypes.func,

   triggers: PropTypes.arrayOf(PropTypes.string),
   content: PropTypes.node,
   attributes: PropTypes.object,

   children: PropTypes.node,


   wrapperClassName: PropTypes.string,
   wrapperStyles: PropTypes.object,

   styles: PropTypes.object,
   className: PropTypes.string
}
