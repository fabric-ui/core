import React, {useState} from 'react';
import styles from './styles/Navigation.module.css'
import PropTypes from 'prop-types'
import Profile from './components/profile/Profile'
import Apps from './components/apps/Apps'
import {MenuOpenRounded} from "@material-ui/icons";
import SideBar from "./components/sidebar/SideBar";
import Loading from "./templates/Loading";
import Button from "../../inputs/button/Button";


export default function Layout(props) {
    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Loading loading={props.loading}/>
                <div className={styles.content}>

                    <Button
                        highlight={openSideBar}
                        className={styles.button}
                        onClick={() => setOpenSideBar(!openSideBar)}
                    >
                        <MenuOpenRounded style={{
                            transform: openSideBar ? undefined : 'rotate(180deg)',
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
                    <Apps
                        redirect={props.redirect}
                        buttons={props.appButtons}
                    />
                    <Profile
                        buttons={props.profileButtons}
                        fallbackProfileButton={props.fallbackProfileButton}
                        profile={props.profile}
                    />
                </div>

            </div>

            <div className={styles.contentWrapper}>
                <SideBar
                    open={openSideBar}
                    setOpen={setOpenSideBar}
                    buttons={props.sideBarButtons}
                    logo={props.logo}
                />

                <div className={styles.children}
                     style={{width: openSideBar ? 'calc(100% - 225px)' : 'calc(100% - 60px)'}}>
                    {props.children}
                </div>
            </div>
        </div>
    )

}

Layout.propTypes = {
    darkTheme: PropTypes.bool,
    children: PropTypes.element,
    appName: PropTypes.string,
    logo: PropTypes.any,
    profile: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        image: PropTypes.string
    }),

    redirect: PropTypes.func,
    loading: PropTypes.bool,
    sideBarButtons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.any,
            onClick: PropTypes.func,
            highlight: PropTypes.bool,
            position: PropTypes.oneOf(['bottom', 'default'])

        }),
    ),
    appButtons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.any,
            path: PropTypes.string,
            disabled: PropTypes.bool
        })
    ),
    profileButtons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.any,
            onClick: PropTypes.func,
            disabled: PropTypes.bool
        })
    ),
    fallbackProfileButton: PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.any,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    })
}
