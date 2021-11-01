import styles from "../styles/Form.module.css";
import {ArrowBackRounded, MoreHorizRounded, MoreVertRounded} from "@material-ui/icons";
import React from "react";
import PropTypes from "prop-types";
import Button from "../../button/Button";
import EntityLayoutPT from "../locales/EntityLayoutPT";
import Dropdown from "../../../visualization/list/components/Dropdown";

export default function Header(props) {
    const lang = EntityLayoutPT

    return (
        <div className={styles.header}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={styles.headerContent}>
                    <Button className={styles.buttonContainer} color={'secondary'}
                            styles={{display: props.returnButton ? undefined : 'none'}}
                            onClick={() => props.handleClose()}>
                        <ArrowBackRounded/>
                    </Button>
                    {props.title}
                </div>

                <div className={styles.headerContent}>
                    <Dropdown
                        align={'bottom'}
                        className={styles.buttonContainer}
                        disabled={!props.options}
                        label={(
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <MoreHorizRounded/>
                                Opções
                            </div>
                        )}
                        buttons={props.options}
                    />

                    <Button
                        className={styles.buttonContainer}
                        variant={'filled'} styles={{padding: '8px 16px'}}
                        onClick={() => props.handleSubmit(props.data, props.hook.clearState)}>
                        {props.submitLabel ? props.submitLabel : (props.create ? lang.create : lang.save)}
                    </Button>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    returnButton: PropTypes.bool,
    title: PropTypes.string,
    hook: PropTypes.object.isRequired,
    create: PropTypes.bool,
    dependencies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.oneOf(['string', 'number', 'object', 'bool', 'date', 'array'])
    })),
    handleSubmit: PropTypes.func.isRequired,
    metadata: PropTypes.shape({
        lastModified: PropTypes.any,
        creator: PropTypes.any,
    }),
    handleClose: PropTypes.func,
    submitLabel: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.any, label: PropTypes.string, onClick: PropTypes.func,
        disabled: PropTypes.bool
    }))
}
