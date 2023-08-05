import React from "react";
const storeContext = React.createContext(null)

const Provider = (props) => {
    return <storeContext.Provider store={props.store} >
        {props.children}</storeContext.Provider>

}

export default storeContext