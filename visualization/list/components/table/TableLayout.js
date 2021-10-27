import PropTypes from 'prop-types'
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import React from 'react'
import keyTemplate from "../../templates/keyTemplate";
import Row from "../Row";
import Header from "../Header";


export default function TableLayout(props) {
    const lastElementRef = useInfiniteScroll(props.setCurrentPage, props.currentPage, props.loading, props.hasMore)
    return (
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Header
                keys={props.keys.filter(e => e.visible)}
                sorts={props.sorts}
                setSorts={props.setSorts}
                hasOptions={props.controlButtons !== undefined && props.controlButtons.length > 0}
            />
            {props.data.map((e, index) => (
                <React.Fragment key={e.id + '-list-row'}>
                    <Row
                        onClick={() => props.onRowClick(e.data)}
                        entry={e.data}
                        index={index} controlButtons={props.controlButtons}
                        keys={props.keys.filter(e => e.visible)}
                        reference={lastElementRef}
                        hasOptions={props.controlButtons !== undefined && props.controlButtons.length > 0}
                    />
                </React.Fragment>
            ))}
        </div>
    )
}

TableLayout.propTypes = {
    data: PropTypes.array,
    keys: PropTypes.arrayOf(keyTemplate).isRequired,

    controlButtons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.element,
        label: PropTypes.any,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    })),
    onRowClick: PropTypes.func,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
    loading: PropTypes.bool,
    hasMore: PropTypes.bool,
    sorts: PropTypes.array,
    setSorts: PropTypes.func,
    onlyVisualization: PropTypes.bool
}
