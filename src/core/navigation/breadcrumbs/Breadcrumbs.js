import PropTypes from "prop-types";
import styles from './styles/Breadcrumbs.module.css'
import React from "react";
import {ArrowForwardIosRounded} from "@material-ui/icons";

export default function Breadcrumbs(props) {

    return (
        <div className={styles.wrapper}
             style={{justifyContent: props.justify === 'start' ? 'flex-start' : (props.justify === 'end' ? 'flex-end' : undefined)}}>
            {React.Children.toArray(props.children).map((crumb, i) => (
                <div className={styles.crumbWrapper}>
                    {crumb}

                    <ArrowForwardIosRounded style={{
                        fontSize: '1rem',
                        display: i === (React.Children.toArray(props.children).length - 1) ? 'none' : undefined
                    }}/>
                </div>
            ))}
        </div>
    )
}

Breadcrumbs.propTypes = {
    children: PropTypes.node,
    divider: PropTypes.string,
    justify: PropTypes.oneOf(['start', 'middle', 'end'])
}