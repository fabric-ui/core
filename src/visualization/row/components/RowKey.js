import PropTypes from "prop-types";
import useField from "../hooks/useField";
import styles from '../styles/Row.module.css'
import React, {useEffect, useState} from 'react'
import ToolTip from "../../../feedback/tooltip/ToolTip";

export default function RowKey(props) {
   const [loading, setLoading] = useState(false)

   const [color, setColor] = useState()
   const data = useField(props.field, props.object, props.field.method, setColor, setLoading)

   return (
      <div className={styles.row} style={{color: color}}>

         <div
            className={[styles.cell, props.className, ].join(' ')}
            onClick={props.field.onClick}
            style={{
               ...props.styles, ...{

                  width: props.additionalWidth ? `calc(100% + ${props.additionalWidth})` : undefined,
                  display:loading ? 'none' : props.asCard && props.field.type === 'image' ? 'flex' : undefined,
                  justifyContent: props.asCard && props.field.type === 'image' ? 'center' : undefined
               }
            }}
         >
            {props.field.type !== 'image' ?
               <ToolTip>
                  {data}
               </ToolTip>
               : null}
            {props.selfContained && props.asCard && props.field.label ?
               <label className={styles.footer} title={props.noTitle ? undefined : props.field.label}>
                  {props.field.label}:
               </label>
               :
               null
            } {data}
         </div>
         {loading ? <div className={styles.pulse}/>: null}
         {props.selfContained && !props.asCard && props.field.label ?
            <label className={styles.footer} title={props.noTitle ? undefined : props.field.label}>
               {props.field.label}
            </label>
            :
            null
         }
      </div>
   )

}

RowKey.propTypes = {
   className: PropTypes.string,
   styles: PropTypes.object,
   index: PropTypes.number,
   selfContained: PropTypes.bool,
   object: PropTypes.object.isRequired,
   asCard: PropTypes.bool,

   field: PropTypes.shape({
      label: PropTypes.string,
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['number', 'string', 'bool', 'date', 'object', 'image']).isRequired,
      subfieldKey: PropTypes.string,
      hoursOffset: PropTypes.number,
      method: PropTypes.func,
      maskStart: PropTypes.any,
      maskEnd: PropTypes.any,
      additionalWidth: PropTypes.string,
      onClick: PropTypes.func,
   }).isRequired,

   noTitle: PropTypes.bool

}
