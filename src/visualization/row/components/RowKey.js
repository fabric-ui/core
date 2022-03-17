import PropTypes from "prop-types";
import useField from "../hooks/useField";
import styles from '../styles/Row.module.css'
import React from 'react'

export default function RowKey(props) {
   const data = useField(props.field, props.object, props.method)

   return (
      <div className={styles.row}>
            <span title={data} className={[styles.cell, props.className].join(' ')} style={props.styles}>
               {data}
            </span>
         {props.selfContained ?
            <label className={styles.footer} title={props.field.label}>
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
      type: PropTypes.oneOf(['number', 'string', 'bool', 'date']).isRequired,
      hoursOffset: PropTypes.number,
      method: PropTypes.func
   }).isRequired,

}
