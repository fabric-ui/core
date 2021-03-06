import PropTypes from "prop-types"
import React, {useMemo} from "react"
import styles from "./styles/Vertical.module.css"
import Switcher from "../switcher/Switcher"
import Row from "./components/Row"

export default function VerticalTabs(props) {
   const children = React.Children.toArray(props.children)
   const groups = useMemo(() => {

      return [...new Set(children.map(item => item.props.group))]
   }, [props.children])

   return (
      <div className={[props.className, styles.wrapper].join(' ')} style={{...props.styles, ...{position: 'relative'}}}>
         <div className={[styles.header, props.headerClassName].join(' ')} style={props.headerStyles}>

            {groups.map((e, i) => (
               <React.Fragment key={i + '-class'}>
                  <Row
                     setOpen={props.setOpen}
                     open={props.open}
                     data={e}
                     index={i}
                     buttons={children.map(item => {
                        return {
                           label: item?.props.label,
                           group: item?.props.group,
                           disabled: item?.props.disabled
                        }
                     })}
                     groupName={e}/>
               </React.Fragment>
            ))}

         </div>

         <Switcher className={children[props.open]?.props.className}
                   styles={{...{width: '100%'}, ...children[props.open]?.props.styles}} openChild={props.open}>
            {children.map((el, index) => (
               <React.Fragment key={index + '-tab-vertical'}>
                  {el}
               </React.Fragment>
            ))}
         </Switcher>
      </div>
   )
}

VerticalTabs.propTypes = {
   open: PropTypes.number.isRequired,
   setOpen: PropTypes.func.isRequired,

   className: PropTypes.string,
   styles: PropTypes.object,

   headerClassName: PropTypes.string,
   headerStyles: PropTypes.object,

   children: PropTypes.node.isRequired,
}
