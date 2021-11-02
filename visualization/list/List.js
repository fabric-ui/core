import PropTypes from 'prop-types'
import styles from './styles/List.module.css'
import ListHeader from "./components/ListHeader";
import React from "react";
import Empty from "../../feedback/empty/Empty";
import keyTemplate from "./templates/keyTemplate";
import useList from "./hook/useList";
import Settings from "./components/Settings";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Row from "./components/Row";

export default function List(props) {
    const {maxHeight, keys, keysDispatcher, actions, setOpenSettings, openSettings, wrapperRef} = useList(props.keys)
    const lastElementRef = useInfiniteScroll(props.hook.setCurrentPage, props.hook.currentPage, props.hook.loading, props.hook.hasMore)


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
                hasOptions={props.controlButtons && props.controlButtons.length > 0}
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

                {props.hook.data.map((e, index) => (
                    <React.Fragment key={e.id + '-list-row'}>

                        <Row
                            onClick={() => props.onRowClick(e.data)}
                            entry={e.data}
                            index={index}
                            controlButtons={props.controlButtons}
                            keys={props.keys.filter(e => e.visible === true)}
                            reference={lastElementRef}
                            hasOptions={props.controlButtons && props.controlButtons.length > 0}
                        />

                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

List.propTypes = {
    noFilters: PropTypes.bool,
    hook: PropTypes.object.isRequired,
    onRowClick: PropTypes.func.isRequired,
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
