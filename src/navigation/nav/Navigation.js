import styles from './styles/Nav.module.css'
import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import NavigationGroup from "./NavigationGroup";

export default function Navigation(props) {
   const children = useMemo(() => {
      const ch = React.Children.toArray(props.children).filter(c => c.type.name === NavigationGroup.name)
      return {
         end: ch.filter(c => c.props.justify !== 'start'),
         start: ch.filter(c => c.props.justify === 'start')
      }
   }, [props.children])
   return (
      <nav className={styles.wrapper}>
         <div className={[styles.group, props.groupClassName].join(' ')} style={props.groupStyles} data-end={'false'}>
            {children.start.map((c, i) => (
               <React.Fragment key={'navigation-child-start-' + i}>
                  {c}
               </React.Fragment>
            ))}
         </div>
         <div className={[styles.group, props.groupClassName].join(' ')} style={props.groupStyles} data-end={'true'}>
            {children.end.map((c, i) => (
               <React.Fragment key={'navigation-child-end-' + i}>
                  {c}
               </React.Fragment>
            ))}
         </div>
      </nav>
   )
}
Navigation.propTypes = {
   children: PropTypes.node,
   groupClassName: PropTypes.string,
   groupStyles: PropTypes.object
}
