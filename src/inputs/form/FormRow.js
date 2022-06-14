import PropTypes from "prop-types"
import styles from "./styles/FormRow.module.css"
import React, {useEffect, useMemo, useRef, useState} from "react"
import ToolTip from "../../feedback/tooltip/ToolTip"
import useLocale from "../../misc/hooks/useLocale"
import Accordion from "../../navigation/accordion/Accordion"
import AccordionSummary from "../../navigation/accordion/AccordionSummary"

export default function FormRow(props) {
   useEffect(() => {
      setIndex(Array.prototype.indexOf.call(ref.current.parentNode.children, ref.current) + 1)
   }, [])
   const checkEl = (dd, res, setRes) => {
      const isText = typeof dd.props.value === 'string' ? (dd.props.value.length > 0) : true

      setRes(res && (!dd.props.required || ((dd.props.value !== undefined && dd.props.value !== null || typeof dd.props.checked === "boolean") && isText && dd.props.required === true)))
   }


   const completed = useMemo(() => {
      let res = true
      React.Children.toArray(props.children).forEach(e => {
         if (e.type === React.Fragment) {
            const c = React.Children.toArray(e.props.children)
            c.forEach(dd => checkEl(dd, res, (r) => res = r))
         } else
            checkEl(e, res, (r) => res = r)

      })

      return res
   }, [props.children])


   const [index, setIndex] = useState()
   const ref = useRef()
   const translate = useLocale()
   const groups = useMemo(() => {
      return props.groups ? props.groups.split(' ').map(e => parseInt(e)) : []


   }, [props.groups])

   const childrenToRender = useMemo(() => {
      const c = React.Children.toArray(props.children)
      let res = [], currentIndex = 0
      for (let i = 0; i < groups.length; i++) {
         res[i] = c.slice(currentIndex, currentIndex + groups[i])

         currentIndex += groups[i]
      }

      if (currentIndex < c.length) {
         res[res.length] = c.slice(currentIndex, c.length)
      }


      return res
   }, [props.children, groups])
   return (

      <Accordion reference={ref}
                 styles={{   overflow:' visible'}}
                 attributes={{
         'data-completed': `${completed}`
      }}>
         <AccordionSummary styles={{position: 'relative'}}>
            <div className={styles.indicator} style={{background: completed ? '#0095ff' : '#ff5555'}}/>
            <ToolTip content={!completed ? translate('not_completed') : translate('complete')} justify={"start"}
                     align={'middle'}/>
            {props.title ? props.title : (translate('step') + ' ' + index)}
         </AccordionSummary>
         <div className={styles.wrapper} style={{rowGap: props.rowGap}}>
            {childrenToRender.map((g, i) => (
               <div className={styles.group} key={i + '-form-group-' + index} style={{columnGap: props.columnGap}}>
                  {g.map((child, ind) => (
                     <React.Fragment key={i + '-form-group-' + index + '-input-' + ind}>
                        {child}
                     </React.Fragment>
                  ))}
               </div>
            ))}
         </div>
      </Accordion>
   )
}

FormRow.propTypes = {
   rowGap: PropTypes.string,
   columnGap: PropTypes.string,

   groups: PropTypes.string,
   children: PropTypes.node,
   title: PropTypes.string,
}
