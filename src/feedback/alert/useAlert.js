import React, {useEffect, useRef} from "react"
import styles from "./styles/Alert.module.css"
import fabricStyles from "../../Fabric.module.css"

export default function useAlert(dark) {
    const target = useRef()
    const close = (newElement) => {
        newElement.className = styles.outAnimation
        newElement.addEventListener("animationend", () => {
            target.current.removeChild(newElement)
        }, {once: true})
    }
    const pushAlert = (message, type, delay = 50000) => {
        const newElement = document.createElement("div")
        target.current.appendChild(newElement)
        target.current.style.zIndex = 999
        let variant
        switch (type) {
        case "success":
            variant = {color: "#00F400", icon: "done"}
            break
        case "alert":
            variant = {color: "#FFFF3E", icon: "warning"}
            break
        case "info":
            variant = {color: "#0095ff", icon: "info"}
            break
        default:
            variant = {color: "#ff5555", icon: "error"}
            break
        }

        setTimeout(() => {
            close(newElement)
        }, delay)

        newElement.innerHTML = `
        <div class="${[styles.alertContainer, dark ? fabricStyles.dark : fabricStyles.light].join(" ")}" style="--background: ${variant.color}">
            <div class="${styles.content}">
                <div class="${styles.icon}">
                    <span data-icon="true">${variant.icon}</span>
                </div>
                ${message}
            </div>
            <button class="${styles.button}" data-action="-">
                <span data-icon="true" style="height: 1.1rem; font-size: 1.1rem">close</span>
            </button>
        </div>
      `
        newElement
            .getElementsByTagName("button")[0]
            .addEventListener(
                "click",
                () => close(newElement),
                {once: true}
            )
    }

    useEffect(() => {
        target.current = document.createElement("div")
        document.body.appendChild(target.current)
        target.current.className = styles.wrapper
        target.current.style.zIndex = -1
        alert.pushAlert = pushAlert
    }, [])
}
