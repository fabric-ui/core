import styles from "../../Fabric.module.css"
import React, {useMemo} from "react"
import ThemeContext from "../hooks/ThemeContext"
import PropTypes from "prop-types"
import LanguageContext from "../hooks/LanguageContext"

export default function ThemeProvider(props) {
    const dark = useMemo(() => {
        return props.theme === "dark"
    }, [props.theme])
    const className = useMemo(() => {
        return dark ? props.darkClassName ? props.darkClassName : styles.dark : props.lightClassName ? props.lightClassName :styles.light
    }, [dark, props.darkClassName, props.lightClassName])

    return (
        <LanguageContext.Provider value={props.language !== undefined ? props.language : "pt"}>
            <ThemeContext.Provider value={{dark: dark, styles: styles}}>
                <div className={[className, props.className].join(" ")}>
                    {props.children}
                </div>
            </ThemeContext.Provider>
        </LanguageContext.Provider>
    )
}
ThemeProvider.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,

    theme: PropTypes.oneOf(["dark", "light"]),

    darkClassName: PropTypes.string,
    lightClassName: PropTypes.string,

    language: PropTypes.oneOf(["pt", "en"]),
    children: PropTypes.node.isRequired
}
