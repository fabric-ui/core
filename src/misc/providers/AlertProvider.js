import React from "react";
import PropTypes from "prop-types";
import useAlert from "../../feedback/alert/hooks/useAlert";
import AlertContext from "../../feedback/alert/hooks/AlertContext";

export default function AlertProvider(props) {
   const alert = useAlert(props.theme === "dark")
   return (
      <AlertContext.Provider value={alert}>
         {props.children}
      </AlertContext.Provider>
   )
}
AlertProvider.propTypes = {
   theme: PropTypes.oneOf(['dark', 'light']),
   children: PropTypes.node
}
