import React from "react"
import NewTableRow from "./NewTableRow/NewTableRow"



let NewTable = (props) => {
let addNewTableRow = () => {
props.dispatch({type:"ADD-NEW-TEAM"})
}
let currentGame = props.table_data
console.log(currentGame)
let makeTable = currentGame.result.map(team => 
    <NewTableRow result={team.gameResult}/>)
    return (
        <div>
        <div>

{makeTable}
</div>
<div><button onClick={addNewTableRow}>add row</button></div>
        </div>
    )
}

export default NewTable