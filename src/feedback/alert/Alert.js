import React, {useEffect, useMemo} from 'react'
import styles from "./styles/Alert.module.css";
import Button from "../../inputs/button/Button";
import PropTypes from "prop-types";
import fabricStyles from '../../misc/theme/styles/Fabric.module.css'

export default function Alert(props) {

   const variant = useMemo(() => {
      switch (props.type) {
         case 'success':
            return {color: '#00F400', icon: <span className="material-icons-round">done</span>}
         case 'alert':
            return {color: '#FFFF3E', icon: <span className="material-icons-round">warning</span>}
         case 'info':
            return {color: '#0095ff', icon: <span className="material-icons-round">info</span>}
         default:
            return {color: '#ff5555', icon: <span className="material-icons-round">error</span>}
      }
   }, [props.type])

   useEffect(() => {
      const timeout = setTimeout(() => {
         props.handleClose()
      }, props.defaultTimeout)
      return () => clearTimeout(timeout)
   }, [props.defaultTimeout])

   return (
      <div className={[styles.alertContainer, props.dark ? fabricStyles.dark : fabricStyles.light].join(' ')} style={{'--background': variant.color}}>
         <div className={styles.content} >
            <div
               className={ styles.icon }
            >
               {variant.icon}
            </div>
            {props.message}
         </div>
         <Button
            color={'secondary'}
            className={styles.button}
            onClick={() => props.handleClose()}
         >
            <span style={{fontSize: '1.1rem'}} className="material-icons-round">close</span>
         </Button>
      </div>
   )
}
Alert.propTypes = {
   dark: PropTypes.bool.isRequired,
   defaultTimeout: PropTypes.number.isRequired,
   type: PropTypes.string,
   message: PropTypes.string.isRequired,
   handleClose: PropTypes.func.isRequired
}
