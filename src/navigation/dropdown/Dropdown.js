import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import PropTypes from "prop-types";
import styles from './styles/Dropdown.module.css'
import Button from "../../inputs/button/Button";
import Modal from "../modal/Modal";
import DropdownOptions from "./DropdownOptions";
import DropdownProvider from './DropdownProvider'

export default function Dropdown(props) {
   const [open, setOpen] = useState(false)
   const [translation, setTranslation] = useState('')

   const modalRef = useCallback((node) => {
      if (node && translation.length === 0) {
         const bBox = node.parentNode.getBoundingClientRect()
         const button = ref.current?.getBoundingClientRect()
         const offX = props.offsetX ? props.offsetX : 4,
            offY = props.offsetY ? props.offsetY : 4
         let y = `calc(50% + ${button.height / 2}px)`, x = 0
         if (bBox.y < 0)
            y = 'calc(50% + ' + ((-bBox.y + offY + button.height) / 2) + 'px)'

         if (bBox.x < 0)
            x = (-bBox.x + offX) + 'px'


         if ((bBox.y + bBox.height) > document.body.offsetHeight)
            y = (document.body.offsetHeight - (bBox.y + bBox.height) - offY - button.height) + 'px'

         if ((bBox.x + bBox.width) > document.body.offsetWidth)
            x = (document.body.offsetWidth - (bBox.x + bBox.width) - offX) + 'px'


         setTranslation(`translate(${x}, ${y})`)
      }
   }, [props.offsetX, props.offsetY, translation.length])
   const ref = useRef()
   const resizeObs = useRef()
   useEffect(() => {
      resizeObs.current = new ResizeObserver(() => {
         setOpen(false)
      })
      resizeObs.current?.observe(document.body)
   }, [])

   const content = useMemo(() => {
      return React.Children.toArray(props.children).find(e => {
         return e?.type?.name === DropdownOptions.name
      })
   }, [props.children])

   const label = useMemo(() => {
      return React.Children.toArray(props.children).filter(e => !e?.type?.name || e?.type.name !== DropdownOptions.name)
   }, [props.children])
   return (
      <>
         <Button

            highlight={open || props.highlight}
            attributes={{
               ...props.attributes,
               ...{
                  'data-open': `${open}`
               }
            }}
            reference={ref}
            styles={{
               ...props.styles, ...{
                  display: props.hideArrow ? undefined : 'flex',
                  alignItems: props.hideArrow ? undefined : 'center',
                  gap: props.hideArrow ? undefined : '4px'
               }
            }}
            variant={props.variant} color={props.color}
            onClick={() => {
               if(props.onOpen)
                  props.onOpen()
               setOpen(true)
            }}
            disabled={props.disabled}
            className={props.className}>
            {label.map(l => l)}

            {props.hideArrow ? null : <span className={'material-icons-round'}>arrow_drop_down</span>}

            <Modal
               variant={"fit"}
               styles={{transform: translation}}
               blurIntensity={0}
               className={[styles.buttons, props.wrapperClassname].join(' ')}
               animationStyle={'fade'}
               open={open}
               handleClose={() => {
                  setOpen(false)
                  setTranslation('')
                  if(props.onClose)
                     props.onClose()
               }}>
               <div ref={modalRef}>
                  <DropdownProvider.Provider value={{
                     setOpen,
                     open
                  }}>
                     {content}
                  </DropdownProvider.Provider>
               </div>
            </Modal>
         </Button>

      </>
   )
}

Dropdown.propTypes = {
   onOpen: PropTypes.func,
   onClose: PropTypes.func,

   attributes: PropTypes.object,
   hideArrow: PropTypes.bool,
   wrapperClassname: PropTypes.string,
   highlight: PropTypes.bool,
   variant: PropTypes.oneOf(['minimal', 'filled', 'outlined', 'minimal-horizontal']),
   className: PropTypes.string,
   styles: PropTypes.object,
   disabled: PropTypes.bool,
   children: PropTypes.node,
   offsetX: PropTypes.number,
   offsetY: PropTypes.number
}
