import React from "react"
import newTableRow from "./NewTableRow/NewTableRow"



let NewTable = (props) => {
let addNewTableRow = () => {
props.dispatch("ADD-NEW-TEAM")


console.log(props)
}
let currentGame = props.table_data

    return (
        <div>
        <div>

{newTableRow(currentGame.roundCount)}
</div>
<div><button onClick={addNewTableRow}>add row</button></div>
        </div>
    )
}

export default NewTable