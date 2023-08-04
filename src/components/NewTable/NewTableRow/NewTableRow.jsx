import s from './NewTableRow.module.css'

let NewTableRow = (props) => {

    console.log(typeof(result))
    let resultRow = props.result.map(points => (<th ><input defaultValue='0' className={s.roundinput}>{points.value}</input></th>))
    

    return (
        <div>
<tr>
<th>
    <input/>
</th>
{resultRow}
<th></th>
</tr></div>
    )
}

export default NewTableRow