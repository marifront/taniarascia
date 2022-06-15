import React, {Component} from 'react'

const MyTableHead = () => {
    return (
        <thead>
        <tr>
            <th>
                Продукт
            </th>
            <th>
                Цена, руб.
            </th>
        </tr>
    </thead>
    )
}

const MyTableBody = (props) => {
    const tableRows = props.tableData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.price}</td>
                <td><button onClick={() => props.removeData(index)}>Удалить</button></td>
            </tr>
        )
    })

    return <tbody>{tableRows}</tbody>
    
}

class MyTable  extends Component {
    render () {
        const {tableData, removeData} = this.props;
        return (
            <table>
                <MyTableHead/>
                <MyTableBody tableData={tableData} removeData={removeData}/>
            </table>
        )
    }
}

export default MyTable 