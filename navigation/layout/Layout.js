import React, {useMemo, useState} from 'react';
import styles from './styles/Navigation.module.css'
import PropTypes from 'prop-types'
import Profile from './components/profile/Profile'
import Apps from './components/apps/Apps'
import {MenuOpenRounded} from "@material-ui/icons";
import SideBar from "./components/sidebar/SideBar";
import Loading from "./templates/Loading";
import Button from "../../inputs/button/Button";


export default function Layout(props) {

    const components = useMemo(() => {
        const nodes = React.Children.toArray(props.children)
        console.log()
        return {
            profile: nodes.find(e => e.type === Profile),
            apps: nodes.find(e => e.type === Apps),
            sideBar: nodes.find(e => e.type === SideBar),
            child: nodes.find(e => e.type !== SideBar && e.type !== Apps && e.type !== Profile)
        }
    }, [props])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Loading loading={props.loading}/>
                <div className={styles.content}>

                    <Button
                        highlight={props.openSideBar}
                        className={styles.button}
                        onClick={() => props.setOpenSideBar(!props.openSideBar)}
                    >
                        <MenuOpenRounded style={{
                            transform: props.openSideBar ? undefined : 'rotate(180deg)',
                            transition: '150ms linear'
                        }}/>
                    </Button>
                    <img
                        style={{height: '35px'}}
                        src={props.logo}
                        alt={'logo'}
                    />
                    {props.appName}
                </div>
                <div className={styles.content} style={{justifyContent: 'flex-end', gap: '8px'}}>
                    {components.apps}
                    {components.profile}
                </div>

            </div>

            <div className={styles.contentWrapper}>
                {components.sideBar}

                <div className={styles.children}>
                    {components.child}
                </div>
            </div>
        </div>
    )

}

Layout.propTypes = {
    children: PropTypes.node,
    appName: PropTypes.string,
    logo: PropTypes.any,
    loading: PropTypes.bool,
    openSideBar: PropTypes.bool.isRequired,
    setOpenSideBar: PropTypes.bool.isRequired
}
