import React, {useEffect, useMemo, useRef, useState} from "react";
import PropTypes from "prop-types";
import styles from './styles/Context.module.css'
import Button from "../../inputs/button/Button";
import Icon from "../../visualization/icon/Icon";


export default function ContextMenu(props) {
   const ref = useRef()
   const contextRef = useRef()
   const [selected, setSelected] = useState()

   const options = useMemo(() => {
      if (selected)
         return props.options.filter(o => Array.from(selected.attributes).find(attr => attr.nodeName === o.requiredTrigger))
      else {
         if (contextRef.current)
            contextRef.current.style.zIndex = -1
         return []
      }
   }, [props.options, selected])


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


         contextRef.current.style.visibility = "visible"
         contextRef.current.style.zIndex = "999"
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
            contextRef.current.style.visibility = "hidden"

      }
   }

   useEffect(() => {
      if (props.options.length > 0) {
         document.addEventListener('mousedown', handleMouseDown)
         ref.current?.parentNode.addEventListener('contextmenu', handleContext)
      }
      return () => {
         document.removeEventListener('mousedown', handleMouseDown)
         ref.current?.parentNode.removeEventListener('contextmenu', handleContext)
      }
   }, [selected, props.options])


   return (
      <>

         <div className={styles.wrapper} ref={contextRef} style={{display: options && options.length > 0 ? undefined : "none"}}>
            {options.map((el, i) => (
               <React.Fragment key={'options-' + i}>
                  <Button
                     className={styles.basicButton}
                     color={'secondary'}
                     onClick={e => {
                        el.onClick(selected, e)
                        if (contextRef.current)
                           contextRef.current.style.visibility = "hidden"
                        if (selected)
                           selected.style.outline = 'transparent 2px solid'
                        setSelected(undefined)
                     }}>
                     <div className={styles.basicIconWrapper}>
                        {el.icon ?
                           <Icon styles={el.iconStyles}>
                              {el.icon}
                           </Icon>
                           :
                           null}
                     </div>
                     {el.label}
                  </Button>
               </React.Fragment>
            ))}
         </div>
         <div        {...props.attributes} className={props.className} data-self={'true'} style={props.styles}
                     ref={ref}>
            {props.children}
         </div>
      </>
   )
}

ContextMenu.propTypes = {
   onContext: PropTypes.func,
   onContextOut: PropTypes.func,

   triggers: PropTypes.arrayOf(PropTypes.string).isRequired,
   options: PropTypes.arrayOf(PropTypes.shape({
      onClick: PropTypes.func,
      label: PropTypes.string,
      shortcut: PropTypes.any,
      icon: PropTypes.string,
      iconStyles: PropTypes.object,

      requiredTrigger: PropTypes.string.isRequired
   })).isRequired,
   attributes: PropTypes.object,

   children: PropTypes.node,
   styles: PropTypes.object,
   className: PropTypes.string
}
