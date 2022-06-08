import React, {useMemo, useRef} from "react";
import styles from "../styles/Modal.module.css";

export default function useModal({animationStyle, variant}) {
   const mountingPoint = useRef()
   const source = useRef()
   const target = useRef()
   const animation = useMemo(() => {
      let anim = {
         enter: styles.enterFade,
         exit: styles.exitFade,
      }

      switch (animationStyle) {
         case 'slide-left': {
            anim = {
               enter: styles.slideLeftEnter,
               exit: styles.slideLeftExit,
            }
            break
         }

         case 'slide-right': {
            anim = {
               enter: styles.slideRightEnter,
               exit: styles.slideRightExit,
            }
            break
         }
         case 'slide-bottom': {
            anim = {
               enter: styles.slideBottomEnter,
               exit: styles.slideBottomExit,
            }
            break
         }
         case 'none':
            anim = {
               enter: styles.emptyAnim,
               exit: styles.emptyAnimExit,
            }
            break
         default:
            break

      }
      return anim
   }, [])



   const animate = (enter) => {
      if (enter)
         target.current?.classList.add(animation.enter)
      else {
         target.current?.classList.remove(animation.enter)
         target.current?.classList.add(animation.exit)
      }
   }

   const getParentPosition = () => {
      const bBox = source.current?.parentNode?.getBoundingClientRect()

      if (bBox && variant === 'fit') {
         return {
            top: (bBox.top + bBox.height / 2) + 'px',
            left: (bBox.left + bBox.width / 2) + 'px',
            transform: 'translate(-50%, -50%)'
         }
      } else
         return {}
   }
   return {
      animations: animation,

      animate,
      target,
      source,
      getParentPosition,
      mountingPoint
   }
}
