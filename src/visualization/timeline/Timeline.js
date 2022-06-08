import React, {useRef} from 'react'

import PropTypes from "prop-types";
import styles from './styles/Timeline.module.css'

export default function Timeline(props) {
   const children = React.Children.toArray(props.children)
   const ref = useRef()
   return (
      <div {...props.attributes} className={[styles.wrapper, props.className].join(' ')} ref={ref}
           data-variant={props.variant}
           style={{...props.styles, ...{gap: props.spineGap}}}>
         <div className={styles.content} style={{justifyItems: 'flex-end'}}>
            {children.map((c, i) => {
               if (i % 2 === 0)
                  return c
               return (
                  <div
                     key={i + '-timeline-cell-left'}
                     className={styles.filler}
                     style={props.variant === 'horizontal' ? {width: props.cardSize} : {height: props.cardSize}}/>
               )
            })}
         </div>
         <div className={[styles.column, props.spineClassName].join(' ')} style={props.spineStyles}/>
         <div className={styles.content}>
            {children.map((c, i) => {
               if (i % 2 !== 0)
                  return c
               return (
                  <div
                     key={i + '-timeline-cell-right'}
                     className={styles.filler}
                     style={props.variant === 'horizontal' ? {width: props.cardSize} : {height: props.cardSize}}/>
               )
            })}
         </div>
      </div>
   )
}
Timeline.propTypes = {
   spineStyles: PropTypes.object,
   spineClassName: PropTypes.string,
   className: PropTypes.string,
   styles: PropTypes.object,

   spineGap: PropTypes.string,
   cardSize: PropTypes.string.isRequired,
   variant: PropTypes.oneOf(['vertical', 'horizontal']),
   children: PropTypes.node.isRequired,
   attributes: PropTypes.object
}
