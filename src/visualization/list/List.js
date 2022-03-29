import stylesClass from './styles/List.module.css'
import PropTypes from 'prop-types'
import useListData from "./hooks/useListData";
import React from "react";
import DataProvider from "./hooks/DataProvider";

export default function List(props) {
   const {
      hook,
      className,
      styles
   } = props
   return (
      <DataProvider.Provider value={hook}>
         <div className={[stylesClass.container, className].join(' ')} style={styles}>
            {props.children}
         </div>
      </DataProvider.Provider>
   )
}
List.propTypes = {
   children: PropTypes.node,
   // rowClassName: PropTypes.string,
   // rowStyles: PropTypes.object,
   //
   // cellClassName: PropTypes.string,
   // cellStyles: PropTypes.object,

   selfContained: PropTypes.bool,

   hook: PropTypes.instanceOf(useListData).isRequired,
   styles: PropTypes.object,
   className: PropTypes.string
}
