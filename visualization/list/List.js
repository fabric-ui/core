import PropTypes from 'prop-types'
import styles from './styles/List.module.css'
import ListHeader from "./components/ListHeader";
import React from "react";
import Empty from "../../feedback/empty/Empty";
import TableLayout from "./components/table/TableLayout";
import keyTemplate from "./templates/keyTemplate";
import useList from "./hook/useList";
import Settings from "./components/Settings";

export default function List(props) {
    const {maxHeight, keys, keysDispatcher, actions, setOpenSettings, openSettings, wrapperRef} = useList(props.keys)

    return (
        <div className={styles.container}>
            <Settings open={openSettings} keys={keys} actions={actions} setOpen={setOpenSettings}
                      dispatchKeys={keysDispatcher}/>
            <ListHeader
                title={props.title} noFilters={props.noFilters}
                setFilters={props.hook.setFilters}
                filters={props.hook.filters}
                createOption={props.createOption}
                onCreate={props.onCreate}
                cleanState={props.hook.clean}
                keys={keys} actions={actions} dispatch={keysDispatcher}
                setOpenSettings={setOpenSettings}
            />
            <div
                className={styles.tableWrapper}
                style={{height: maxHeight}}
                ref={wrapperRef}>
                {props.hook.data.length === 0 ?
                    <Empty/>
                    :
                    null
                }
                <TableLayout
                    data={props.hook.data} keys={keys} controlButtons={props.controlButtons} maxHeight={maxHeight}
                    setCurrentPage={props.hook.setCurrentPage} currentPage={props.hook.currentPage}
                    onRowClick={props.onRowClick} hasMore={props.hook.hasMore}
                    sorts={props.hook.sorts} onlyVisualization={props.onlyVisualization}
                    setSorts={props.hook.setSorts} loading={props.hook.loading}
                />
            </div>
        </div>
    )
}

List.propTypes = {
    noFilters: PropTypes.bool,
    hook: PropTypes.object.isRequired,
    onRowClick: PropTypes.func,
    keys: PropTypes.arrayOf(keyTemplate).isRequired,
    controlButtons: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.element,
        label: PropTypes.any,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    })),
    title: PropTypes.any,

    createOption: PropTypes.bool,
    onCreate: PropTypes.func,
    onlyVisualization: PropTypes.bool
}
