import React from 'react'
import styles from '../styles/Sort.module.css'
import {useContext} from "react";
import DataProvider from "../hooks/DataProvider";
import {Button} from "@f-ui/core";

export default function Sort(props) {
   const context = useContext(DataProvider)

   return (
      <div className={styles.container}>
         {context.keys.map((k, index) => (
            <Button
               disabled={k.sortDisabled}
               key={index + '-sort-key-' + k.key} className={styles.cell}
                    styles={{borderLeft: index < context.data.length && index > 0? 'var(--fabric-border-primary) 1px solid' : undefined}}
                    onClick={() => {
                       if(!context.currentSort[index])
                          context.setCurrentSort(prev => {
                             const clone = [...prev]
                             clone[index] = {
                                key: k.key,
                                sort: 'desc',
                                type: k.type
                             }
                             return clone
                          })
                       else{
                          switch (context.currentSort[index].sort){
                             case undefined:
                                context.setCurrentSort(prev => {
                                   const clone = [...prev]
                                   clone[index] = {
                                      key: k.key,
                                      sort: 'desc',
                                      type: k.type
                                   }
                                   return clone
                                })
                                break
                             case 'desc':
                                context.setCurrentSort(prev => {

                                   const clone = [...prev]
                                   clone[index] = {
                                      key: k.key,
                                      sort: 'asc',
                                      type: k.type
                                   }
                                   return clone
                                })
                                break
                             case 'asc':
                                context.setCurrentSort(prev => {
                                   const clone = [...prev]
                                   clone[index] = {
                                      key: k.key,
                                      sort: undefined,
                                      type: k.type
                                   }
                                   return clone
                                })
                                break
                             default:
                                break
                          }
                       }
                    }}
            >
               <label className={styles.label} title={k.label}>
                  {k.label}
               </label>

               <span className={'material-icons-round'} style={{fontSize: '1.1rem', transform: context.currentSort[index]?.sort === 'asc' ? 'rotate(180deg)' : undefined, color: !context.currentSort[index]?.sort ? '#999999' : undefined}}>
                  keyboard_arrow_down
               </span>
            </Button>
         ))}
      </div>
   )
}
