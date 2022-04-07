import PropTypes from "prop-types";
import useField from "../hooks/useField";
import styles from '../styles/Row.module.css'
import React, {useState} from 'react'

export default function RowKey(props) {
   const [color, setColor] = useState()
   const data = useField(props.field, props.object, props.field.method, setColor)

   return (
      <div className={styles.row} style={{color: color}}>

            <span
               className={[styles.cell, props.className].join(' ')}
               onClick={props.field.onClick}
               style={{...props.styles, ...{width: props.additionalWidth ? `calc(100% + ${props.additionalWidth})` : undefined}}}
               title={props.field.type !== 'image' ? undefined : data}
            >
               {data}
            </span>
         {props.selfContained ?
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
