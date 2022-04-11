import styles from './styles/Input.module.css'
import React, {useEffect, useMemo, useRef} from 'react'
import PropTypes from "prop-types";
import ParseCurrency from "./methods/ParseCurrency";
import shared from '../shared/styles/Shared.module.css'
import ToolTip from "../../feedback/tooltip/ToolTip";
import useLocale from "../../misc/hooks/useLocale";
import {useIMask} from "react-imask";


export default function TextField(props) {
   const translate = useLocale()
   const maskEndRef = useRef()
   const maskStartRef = useRef()
   const opts = useMemo(() => {
      return props.mask ?  {
         mask: props.mask,

         lazy: true, ...props.maskAttributes
      } : {}
   }, [props.mask])
   const {ref,
      maskRef,
      value,
      setValue,
      unmaskedValue,
      setUnmaskedValue,
      typedValue,
      setTypedValue,} = useIMask(opts);


   useEffect(() => {
      setValue(typeof props.value === 'string' ? props.value : '')
   }, [props.value])
   useEffect(() => {

      if (props.maskStart) ref.current.style.paddingLeft = (maskStartRef.current.offsetWidth + 10) + 'px'
      if (props.maskEnd) ref.current.style.paddingRight = (maskEndRef.current.offsetWidth + 10) + 'px'
   }, [props.maskStart, props.maskEnd])



   const valid = useMemo(() => {
      return ((value && value.toString().length > 0) || value === 0 || value === '0')
   }, [value])

   return (<div
      data-valid={`${valid}`}
      style={{
         width: props.width,
         height: 'fit-content',
         display: 'grid',
         alignItems: value ? 'unset' : 'flex-start',
         gap: '4px',
         overflow: 'visible'
      }}
   >
      <div
         className={shared.labelContainer}
         style={{
            visibility: valid ? 'visible' : 'hidden', opacity: valid ? '1' : '0',
         }}
      >
         <div className={shared.overflow}>
            {props.label}
         </div>
      </div>
      <div
         className={[shared.wrapper, styles.focus].join(' ')}
         data-disabled={props.disabled ? props.disabled : undefined}
      >
         {props.variant === 'area' ? (
               <textarea
            disabled={props.disabled}
            placeholder={props.placeholder}
            value={value }
            className={styles.inputContainer}
            style={{
            minHeight: props.size === 'small' ? '36px' : '56px',
            resize: props.disabled ? 'none' : 'vertical',
            overflow: 'hidden',
            transition: 'border 150ms ease-in, background 150ms ease-in',
            position: 'relative',
            zIndex: 5
         }}
            onBlur={() => {
            if (props.onBlur) props.onBlur()
         }}
            onKeyDown={e => {
            if (e.code === 'Enter' && props.onEnter) props.onEnter()
         }}
            onChange={props.handleChange}
            maxLength={props.maxLength}
            />

            ) : (
            <div style={{position: 'relative', width: '100%'}}>
               <div className={styles.mask} ref={maskStartRef}>
                  {props.maskStart}
               </div>
               <input
                  onKeyDown={e => {
                     if (e.code === 'Enter' && props.onEnter) props.onEnter()
                  }}
                  disabled={props.disabled} lang={''}
                  placeholder={props.placeholder}

                  type={props.type !== 'password' ? props.type : (!props.visible ? 'password' : 'text')}
                  value={value}
                  ref={ref}
                  onBlur={() => {
                     if (props.onBlur) props.onBlur()
                  }}
                  min="1" max="9999"
                  className={styles.inputContainer}
                  style={{
                     height: props.height ? props.height : '45px', position: 'relative', zIndex: 5
                  }}
                  onChange={e => {

                     let data = e.target.value
                     if (props.type === 'number' && props.floatFilter) {
                        data = ParseCurrency(e.target.value)
                     }
                     if (props.maxLength && (data.toString().length <= props.maxLength) || !props.maxLength) props.handleChange({target: {value: data}})
                  }}
                  maxLength={props.maxLength}
               />
               <div className={styles.mask} style={{right: '8px', left: 'unset'}} ref={maskEndRef}>
                  {props.maskEnd}
               </div>
            </div>
         )}
      </div>

      <div className={shared.alertLabel}
           style={{
              color: !valid ? '#ff5555' : undefined,
              display: props.noMargin && !props.required && !props.helperText ? 'none' : undefined
           }}>
         {props.required ? <div className={shared.overflow}>
            {translate('required')}
         </div> : undefined}
         {props.helperText ? <div className={shared.helperText}>
                         <span
                            style={{fontSize: '1rem'}}
                            className="material-icons-round">info</span>
            <ToolTip content={props.helperText} align={'start'}/>
         </div> : null}
         {props.type === 'number' && !props.noNumberIndicator ? <div className={shared.helperText}>
            <div className={styles.icon}>123</div>
            <ToolTip content={translate('numeric')} align={'start'}/>
         </div> : null}
      </div>

   </div>)
}

TextField.propTypes = {
   noNumberIndicator: PropTypes.bool,
   helperText: PropTypes.string,
   onBlur: PropTypes.func,
   onEnter: PropTypes.func,
   width: PropTypes.string,
   placeholder: PropTypes.string,
   label: PropTypes.string,
   handleChange: PropTypes.func.isRequired,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   required: PropTypes.bool,

   mask: PropTypes.string,
   maskAttributes: PropTypes.object,

   maxLength: PropTypes.number,

   disabled: PropTypes.bool,
   variant: PropTypes.oneOf(['default', 'area']),
   type: PropTypes.oneOf(['number', 'text', 'password']),

   maskStart: PropTypes.any,
   maskEnd: PropTypes.any,
   floatFilter: PropTypes.bool,
   height: PropTypes.string,
}
