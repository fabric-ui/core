import React, {useLayoutEffect, useState} from 'react'
import PropTypes from "prop-types";
import styles from './styles/TreeView.module.css'
import {v4} from 'uuid';
import Node from "./utils/Node";

function getBezierCurve({x, y}, {x1, y1}) {
   let p = x < x1 ? x + (x1 - x) / 2 : x1 + (x - x1) / 2
   return `M${x},${y} C${p},${y} ${p},${y1} ${x1},${y1}`
}

export default function TreeView(props) {
   const [wrapperKey, setWrapperKey] = useState()
   useLayoutEffect(() => {
      if(!wrapperKey)
         setWrapperKey(v4())
   }, [])

   return (
       <figure className={styles.wrapper} onContextMenu={e => {
          e.preventDefault()

       }}>
          {props.nodes.map((n, i) => (
             <ul className={styles.tree} key={i + '-root-' + wrapperKey}>
                <Node wrapperKey={wrapperKey} index={i} content={n.content} subNodes={n.subNodes} isRoot={true}/>
             </ul>
          ))}
       </figure>
   )
}
TreeView.propTypes = {
   nodes: PropTypes.arrayOf(PropTypes.shape({

      content: PropTypes.node,
      subNodes: PropTypes.array,
   }))
}
