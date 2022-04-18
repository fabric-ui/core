import PropTypes from "prop-types";
import styles from './styles/Masonry.module.css'
import React, {useEffect, useMemo, useRef, useState} from "react";

export default function Masonry(props) {
   const children = React.Children.toArray(props.children)
   const [quantityPerRow, setQuantityPerRow] = useState(0)
   const [initialized, setInitialized] = useState(false)

   const ref = useRef()
   const callback = () => {
      const q = Math.floor(ref.current?.offsetWidth / 250)
      if (q > props.quantityPerRow || (props.quantityPerRow && (q * props.quantityPerRow) < ref.current?.offsetWidth))
         setQuantityPerRow(props.quantityPerRow)
      else
         setQuantityPerRow(q <= 0 ? 1 : q)
   }

   useEffect(() => {
      const resize = new ResizeObserver(callback)
      resize.observe(ref.current)

      return () => resize.disconnect()
   }, [])

   const callbackSort = () => {
      let newColumns = Array(quantityPerRow)

      let onColumn = 0
      for (let i = 0; i < (children.length > quantityPerRow ? children.length : quantityPerRow); i++) {
         const child = children[i]
         if (child) {

            if (newColumns[onColumn] !== undefined)
               newColumns[onColumn].push(child)
            else
               newColumns[onColumn] = [child]

         } else {
            if (newColumns[onColumn] !== undefined)
               newColumns[onColumn].push(<div key={'filled-child-' + i}/>)
            else
               newColumns[onColumn] = [<div key={'filled-child-' + i}/>]
         }
         if (onColumn === quantityPerRow - 1)
            onColumn = 0
         else
            onColumn += 1
      }
      setColumns(newColumns)
   }
   const [columns, setColumns] = useState([])
   const [changed, setChanged] = useState(false)
   useEffect(() => {
      setChanged(true)
   }, [props.changeListener])
   useEffect(() => {
      callbackSort()
   }, [props.quantityPerRow, props.gap, quantityPerRow])
   useEffect(() => {
      if (children.length > 0 && (columns.flat().length !== (children.length > quantityPerRow ? children.length : quantityPerRow) || changed || !initialized)) {
         console.log('HER')
         setInitialized(true)
         setChanged(false)
         callbackSort()
      }
   }, [children])

   return (
      <div className={props.className} style={props.styles}>
         <div ref={ref} className={styles.wrapper} style={{gap: props.gap}}>
            {columns.map((column, i) => {
               return (
                  <div className={styles.column} key={'masonry-column-' + i} style={{gap: props.gap}}>
                     {column.map(row => row)}
                  </div>
               )
            })}
         </div>
      </div>
   )
}

Masonry.propTypes = {
   changeListener: PropTypes.any,
   gap: PropTypes.string,
   maxCellWidth: PropTypes.number,
   quantityPerRow: PropTypes.number,

   children: PropTypes.node.isRequired,

   styles: PropTypes.object,
   className: PropTypes.string
}
