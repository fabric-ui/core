import React, {useContext, useMemo} from 'react'
import PropTypes from "prop-types";
import styles from './styles/Row.module.css'
import RowKey from "./components/RowKey";
import DataProvider from "../../misc/hooks/DataProvider";

export default function DataRow(props) {
   const context = useContext(DataProvider)
   const {
      keys,
      data,
      selfContained
   } = useMemo(() => {
      return {
         keys: !context.notValid ? context.keys : props.keys,
         data: !context.notValid && typeof props.index === 'number' ? context.data[props.index] : props.object,
         selfContained: !context.notValid ? context.selfContained : props.selfContained,
      }
   }, [context, props.index, props.keys, props.object, props.selfContained])

   if (!data)
      return null
   return (
      <div
         ref={props.reference}
         onClick={props.onClick}
         data-card={`${props.asCard ? props.asCard : false}`}

         className={[styles.wrapper, props.className].join(' ')}
         style={props.styles}>
         {keys.map((k, i) => (
            <React.Fragment key={'key-' + k.key + '-' + i}>
               <RowKey
                  asCard={props.asCard}
                  noTitle={props.noTitle}
                  index={i} className={props.cellClassName} styles={props.cellStyles} field={k} object={data}
                  selfContained={selfContained}/>
            </React.Fragment>
         ))}
      </div>
   )

}

DataRow.propTypes = {
   index: PropTypes.number,
   className: PropTypes.string,
   styles: PropTypes.object,
   asCard: PropTypes.bool,
   cellClassName: PropTypes.string,
   cellStyles: PropTypes.object,

   selfContained: PropTypes.bool,
   object: PropTypes.object,
   keys: PropTypes.arrayOf(PropTypes.shape({

      key: PropTypes.string.isRequired,
      label: PropTypes.string,
      type: PropTypes.oneOf(['string', 'number', 'object', 'date', 'bool', 'image']),
      subfieldKey: PropTypes.string,
      visible: PropTypes.bool,
      maskStart: PropTypes.any,
      maskEnd: PropTypes.any,
      hoursOffset: PropTypes.number,
      method: PropTypes.func,
      additionalWidth: PropTypes.string,
      onClick: PropTypes.func,
      hideLabel: PropTypes.bool
   })),
   onClick: PropTypes.func,
   reference: PropTypes.any,
   noTitle: PropTypes.bool
}
