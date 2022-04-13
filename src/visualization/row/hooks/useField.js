import React, {useMemo} from 'react'
import {addHours} from "../../../inputs/date/misc/useDate";
import useLocale from "../../../misc/hooks/useLocale";
import styles from '../styles/Row.module.css'

export default function useField(field, entity,method, setColor, setLoading) {
    const translate = useLocale()
    return useMemo(() => {
        if (!method && entity && entity[field.key] !== undefined && entity[field.key] !== null && ((field.type === 'object' && entity[field.key][field.subfieldKey]) || field.type !== 'object'))
            switch (field.type) {
                case 'string':
                    return (field.maskStart ? field.maskStart : '') + entity[field.key] + (field.maskEnd ? field.maskEnd : '')
                case 'number': {
                    let parts = entity[field.key].toString().split(".")
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")

                    return (field.maskStart ? field.maskStart : '') + (parts.join(".")) + (field.maskEnd ? field.maskEnd : '')
                }
                case 'bool':
                    return (field.maskStart ? field.maskStart : '') + (entity[field.key] ? 'Sim' : 'Não') + (field.maskEnd ? field.maskEnd : '')
                case 'date': {
                    let dateObj = new Date(entity[field.key])
                    if(field.hoursOffset !== undefined)
                        dateObj = addHours(field.hoursOffset, dateObj)
                    return (field.maskStart ? field.maskStart : '') + dateObj.toLocaleDateString() +(field.maskEnd ? field.maskEnd : '')
                }
               case 'object': {
                  if (entity[field.key] !== null || (entity[field.key] !== null && entity[field.key][field.subfieldKey] === undefined))
                     return (field.maskStart ? field.maskStart : '') + (entity[field.key][field.subfieldKey]) + (field.maskEnd ? field.maskEnd : '')
                  else
                     return field.fallback
               }
               case 'image':
                  setLoading(true)
                  return <img className={styles.image} onLoad={() => setLoading(false)} alt={field.label} src={entity[field.key]}/>
                default:
                    return entity[field.key]

            }
        else if(!method)
            return translate('empty')
         else
            return  method(setColor, field, entity)
    }, [field, entity])
}
