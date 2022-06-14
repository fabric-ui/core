import styles from "../../Fabric.module.css"
import React, {useMemo} from "react"
import ThemeContext from "../hooks/ThemeContext"
import PropTypes from "prop-types"
import LanguageContext from "../hooks/LanguageContext"

export default function ThemeProvider(props) {
    const dark = useMemo(() => {
        return props.theme === "dark"
    }, [props.theme])

    return (
        <LanguageContext.Provider value={props.language !== undefined ? props.language : "pt"}>
            <ThemeContext.Provider value={{dark: dark, styles: styles}}>
                <div className={[dark ? styles.dark : styles.light, props.className].join(" ")}>
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
    language: PropTypes.oneOf(["pt", "en"]),
    children: PropTypes.node.isRequired
}
