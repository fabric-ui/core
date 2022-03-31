import PropTypes from "prop-types";
import useField from "../hooks/useField";
import styles from '../styles/Row.module.css'
import React, {useState} from 'react'
import {ToolTip} from "../../../index";

export default function RowKey(props) {
   const [color, setColor] = useState()
   const data = useField(props.field, props.object, props.field.method, setColor)

   return (
      <div className={styles.row} style={{color: color}}>
         <ToolTip>
            <div>
               {data}
            </div>
            <label className={styles.footer} style={{color: 'inherit'}}>
               {props.field.label}
            </label>
         </ToolTip>
            <span className={[styles.cell, props.className].join(' ')} style={props.styles}>
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
      type: PropTypes.oneOf(['number', 'string', 'bool', 'date']).isRequired,
      hoursOffset: PropTypes.number,
      method: PropTypes.func
   }).isRequired,
   noTitle: PropTypes.bool

}
