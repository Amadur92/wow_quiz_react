import s from './NewTableRow.module.css'

let newTableRow = (roundCount) => {
let rounds = () => {
    let content = []
    for (let i = 0; i < roundCount; i++) {
        content.push(<th ><input defaultValue='0' className={s.roundinput}></input></th>)
    }
    return content
}
    return (
<tr>
<th>
    <input/>
</th>
{rounds()}
<th></th>
</tr>
    )
}

export default newTableRow