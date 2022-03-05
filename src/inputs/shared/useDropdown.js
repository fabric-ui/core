import {useEffect, useRef} from "react";

export default function useDropdown(open, setOpen, buttonRef){
   const ref = useRef()
   const handleMouseDown = (e) => {
      if(open && !document.elementsFromPoint(e.clientX, e.clientY).includes(ref.current) && (!buttonRef || !buttonRef.current || !document.elementsFromPoint(e.clientX, e.clientY).includes(buttonRef.current)))
         setOpen(false)
   }
   useEffect(() => {
      document.addEventListener('mousedown', handleMouseDown)
      return () => {
         document.removeEventListener('mousedown', handleMouseDown)
      }
   }, [open])


   return ref
}
