import PropTypes from "prop-types";
import styles from './styles/Masonry.module.css'
import React, {useEffect, useMemo, useRef, useState} from "react";

export default function Masonry(props) {

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
    const resize = new ResizeObserver(callback)
    resize.observe(ref.current)

    return () => resize.disconnect()
  }, [])

  const columns = useMemo(() => {
    let newColumns = Array(quantityPerRow)
    let onColumn = 0
    React.Children
      .toArray(props.children)
      .forEach(child => {
        if (newColumns[onColumn] !== undefined)
          newColumns[onColumn].push(child)
        else
          newColumns[onColumn] = [child]

        if (onColumn < quantityPerRow - 1)
          onColumn += 1
        else
          onColumn = 0
      })

    return newColumns
  }, [props.quantityPerRow, props.gap, quantityPerRow, props.children])

  return (
    <div className={props.className} style={props.styles}>
      <div ref={ref} className={styles.wrapper} style={{gap: props.gap}}>
        {columns.map((column, i) => (
          <div className={styles.column} key={'masonry-column-'+i} style={{gap: props.gap}}>
            {column.map(row => row)}
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
