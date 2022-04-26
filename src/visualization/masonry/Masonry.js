import PropTypes from "prop-types";
import styles from './styles/Masonry.module.css'
import React, {useEffect, useMemo, useRef, useState} from "react";

export default function Masonry(props) {
   const children = React.Children.toArray(props.children)

   const [quantityPerRow, setQuantityPerRow] = useState(0)
   const ref = useRef()
   const callback = () => {
      const q = Math.floor(ref.current?.offsetWidth / (props.maxCellWidth ? props.maxCellWidth : 250))
      if (q > props.quantityPerRow || (props.quantityPerRow && q >= props.minCellWidth && (q * props.quantityPerRow) < ref.current?.offsetWidth))
         setQuantityPerRow(props.quantityPerRow)
      else
         setQuantityPerRow(q <= 0 ? 1 : q)
   }

   useEffect(() => {
      const resizeOBS = new ResizeObserver(callback)
      resizeOBS.observe(ref.current)
      return ()=> resizeOBS.disconnect()
   }, [])

   const columns = useMemo(() => {
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

      return newColumns
   }, [props.quantityPerRow, props.gap, quantityPerRow, props.children])

   return (
      <div className={props.className} style={props.styles}>
         <div ref={ref} className={styles.wrapper} style={{gap: props.gap}}>
            {columns.map((column, j)=> (
               <div className={styles.column} style={{gap: props.gap}} key={'masonry-column-data-' + j}>
                  {column.map((row, i) => (
                     <React.Fragment key={j+'-masonry-row-data-' + i}>
                        {row}
                     </React.Fragment>
                  ))}
               </div>
            ))}
         </div>
      </div>
   )
}

Masonry.propTypes = {
   gap: PropTypes.string,
   maxCellWidth: PropTypes.number,
   minCellWidth: PropTypes.number,
   quantityPerRow: PropTypes.number,

   children: PropTypes.node.isRequired,

   styles: PropTypes.object,
   className: PropTypes.string
}
