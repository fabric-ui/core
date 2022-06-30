import React, {useMemo, useRef} from "react"
import styles from "../styles/Modal.module.css"

export default function useModal({animationStyle, variant}) {
   const target = useRef()
   const animations = useMemo(() => {
      const anim = {
         enter: styles.enterFade,
         exit: styles.exitFade,
      }
      switch (animationStyle) {
         case "slide-left": {
            anim.enter = styles.slideLeftEnter
            anim.exit = styles.slideLeftExit
            break
         }
         case "slide-right": {
            anim.enter = styles.slideRightEnter
            anim.exit = styles.slideRightExit
            break
         }
         case "slide-bottom": {
            anim.enter = styles.slideBottomEnter
            anim.exit = styles.slideBottomExit
            break
         }
         case "none":
            anim.enter = styles.emptyAnim
            anim.exit = styles.emptyAnimExit
            break
         default:
            break
      }
      return anim
   }, [])


   return {
      animations,
      target,
   }
}
