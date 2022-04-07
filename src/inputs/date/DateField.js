import PropTypes from 'prop-types'
import React, {useEffect, useMemo, useRef, useState} from 'react'
import styles from './styles/DateField.module.css'
import Button from "../button/Button";
import TextField from "../text/TextField";
import useDate from "./misc/useDate";
import useLocale from "../../misc/hooks/useLocale";
import useDropdown from "../shared/useDropdown";

export default function DateField(props) {

   const [open, setOpen] = useState()
   const translate = useLocale()
   const pattern = useMemo(() => {
      if (props.pattern)
         return props.pattern
      else return 'dd/mm/yyyy'
   }, [props.pattern])
   const {
      date,
      calendar,
      initialized,
      setChanged,
      changed,
      parseDate
   } = useDate(props.value, pattern, props.hoursOffset)

   const getDays = (month) => {
      let res = []
      if ((month - 1) < calendar.length) {
         let days = calendar[month - 1].days;
         for (let i = 0; i < days; i++) {
            res.push(
               <React.Fragment key={month + '-month-' + (i + 1) + '-day'}>
                  <Button
                     className={styles.dayContainer}
                     highlight={date.day === (i + 1)}
                     variant={date.day === (i + 1) ? 'filled' : 'outlined'}
                     onClick={() => {
                        const currentDate = new Date()
                        const newDay = i + 1

                        setOpen(false)
                        props.handleChange(parseDate(newDay, month, !date.year ? currentDate.getFullYear() : date.year))
                        setChanged(true)
                     }}
                  >
                     {i + 1}
                  </Button>
               </React.Fragment>
            )
         }
      }
      return res
   }

   const [mask, setMask] = useState()
   useEffect(() => {
      setMask(pattern.replaceAll('y', '9').replaceAll('d', '9').replaceAll('m', '9'))
   }, [pattern])

   const buttonRef = useRef()
   const dropdownRef = useDropdown(open, setOpen, buttonRef)

   return (
      <div style={{position: 'relative', width: props.width, height: 'fit-content'}}>
         <TextField
            {...props}

            handleChange={e => {
               setChanged(true)
               props.handleChange(e.target.value)
            }}
            disabled={props.disabled}
            helperText={props.helperText}
            width={'100%'} highlight={open}
            value={initialized && !changed ? parseDate(date.day, date.month, date.year) : props.value}

            placeholder={props.label}
            label={props.label}
            mask={mask}
            maskEnd={(
               <Button
                  onClick={() => setOpen(true)}
                  disabled={props.disabled}
                  className={styles.button}
                  reference={buttonRef}>
                        <span style={{
                           fontSize: '1.1rem'
                        }} className="material-icons-round">calendar_today</span>
               </Button>
            )} noMargin={true}
            required={props.required}
         />

         <div className={styles.calendar} ref={dropdownRef}
              style={{padding: '0 8px', display: open ? undefined : 'none'}}>
            <div className={styles.monthContainer}>
               <Button className={styles.buttonContainer} styles={{width: 'fit-content', margin: 'unset'}}
                       onClick={() => {
                          const d = new Date()
                          const newDay = date.day ? date.day : d.getDate()
                          const newMonth = (date.month && date.month === 1) || (!date.month && d.getMonth() === 1) ? 12 : (date.month ? date.month : d.getMonth()) - 1
                          const newYear = newMonth === 12 ? (date.year ? date.year - 1 : d.getFullYear() - 1) : (date.year ? date.year : d.getFullYear())
                          props.handleChange(parseDate(newDay, newMonth, newYear))
                       }}>
                            <span style={{
                               fontSize: '1.1rem'
                            }} className="material-icons-round">arrow_back_ios</span>

               </Button>
               <div className={styles.currentDate}>
                  <div>
                     {!date.month || date.month > 12 || date.month < 1 ? calendar[(new Date()).getMonth()].month : calendar[date.month - 1].month}
                  </div>
                  -
                  <div>
                     {!date.year ? new Date().getFullYear() : date.year}
                  </div>
               </div>
               <Button
                  className={styles.buttonContainer}
                  styles={{width: 'fit-content', margin: 'unset'}}
                  onClick={() => {
                     const d = new Date()
                     const newDay = date.day ? date.day : d.getDate()
                     const newMonth = (date.month && date.month === 12) || (!date.month && d.getMonth() === 12) ? 1 : (date.month ? date.month : d.getMonth() + 1) + 1
                     const newYear = newMonth === 1 ? (date.year ? date.year + 1 : d.getFullYear() + 1) : (date.year ? date.year : d.getFullYear())
                     props.handleChange(parseDate(newDay, newMonth, newYear))
                  }}>
                  <span style={{fontSize: '1.1rem', transform: 'rotate(180deg'}}
                        className="material-icons-round">arrow_back_ios</span>

               </Button>
            </div>

            <div className={styles.daysContainer}>
               {getDays(!date.month || date.month > 12 || date.month < 1 ? (new Date()).getMonth() : date.month).map(e => e)}
            </div>

         </div>
      </div>
   )
}

DateField.propTypes = {
   height: PropTypes.string,
   hoursOffset: PropTypes.number,
   helperText: PropTypes.string,

   width: PropTypes.string,
   label: PropTypes.string,
   handleChange: PropTypes.func.isRequired,
   value: PropTypes.string,
   required: PropTypes.bool,
   disabled: PropTypes.bool,
   size: PropTypes.oneOf(['small', 'default']),
   pattern: PropTypes.oneOf(['yyyy-mm-dd', 'yyyy/mm/dd', 'yyyy-dd-mm', 'yyyy/dd/mm', 'mm/dd/yyyy', 'mm-dd-yyyy', 'dd/mm/yyyy', 'dd-mm-yyyy']),
   onEnter: PropTypes.func
}
