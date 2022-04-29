import PropTypes from "prop-types";
import useField from "../hooks/useField";
import styles from '../styles/Row.module.css'
import React, {useState} from 'react'

export default function RowKey(props) {
   const [loading, setLoading] = useState(false)

   const [color, setColor] = useState()
   const data = useField(props.field, props.object, props.field.method, setColor, setLoading)

   return (
      <div className={styles.row}

           style={{
         color: color,
         width: props.field.additionalWidth ? `calc(100% + ${props.field.additionalWidth})` : undefined
      }}>

         <div
            className={[styles.cell, props.className,].join(' ')}
            onClick={props.field.onClick}
            title={props.field.type !== 'image' ?
               props.field.type === 'string' ? props.object[props.field.key] : data
               : null}
            style={{
               ...props.styles, ...{


                  display: loading ? 'none' : props.asCard && props.field.type === 'image' ? 'flex' : undefined,
                  justifyContent: props.asCard && props.field.type === 'image' ? 'center' : undefined,
                  alignItems: props.field.hideLabel ? 'center' : undefined
               }
            }}
         >

            {props.selfContained && props.asCard && props.field.label ?
               <label className={styles.footer} title={props.noTitle ? undefined : props.field.label}>
                  {props.field.label}:
               </label>
               :
               null
            }
            <div className={styles.overflow}>
               {data}
            </div>
         </div>
         {loading ? <div className={styles.pulse}/> : null}
         {props.selfContained && !props.asCard && props.field.label && !props.field.hideLabel ?
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
      hideLabel: PropTypes.bool,
   }).isRequired,

   noTitle: PropTypes.bool

}
