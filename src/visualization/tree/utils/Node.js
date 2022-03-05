import React from 'react'
import PropTypes from "prop-types";

export default function Node(props) {

   return (

      <li>
         <span> {props.content}</span>

         {props.subNodes.length > 0 ?
            <ul>
               {props.subNodes?.map((m, i) => (
                  <React.Fragment key={i + '-element-' + props.wrapperKey}>
                     <Node subNodes={m.subNodes} content={m.content} isRoot={false} wrapperKey={props.wrapperKey}
                           index={props.index + 1}/>
                  </React.Fragment>
               ))}
            </ul>
            :
            null}

      </li>

   )
}
Node.propTypes = {
   wrapperKey: PropTypes.string.isRequired,
   isRoot: PropTypes.bool,
   content: PropTypes.node,
   subNodes: PropTypes.array,
   index: PropTypes.number.isRequired
}
