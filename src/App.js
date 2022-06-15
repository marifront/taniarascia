import React, {Component} from 'react'
import MyTable from './Table'
import Form from './Form'

class App extends Component {
    state = {
        tableData: [
        ]
    }

    removeData = (index) => {
        const {tableData} = this.state;

        this.setState({
            tableData: tableData.filter((tableData, i) => {
                console.log(i, tableData);
                return i!==index
            })
        })
    }

    handleForm = (data) => {
        this.setState({tableData: [...this.state.tableData, data]})
    }

    // handleSubmit = (character) => {
    //     this.setState({characters: [...this.state.characters, character]})
    //   }

    render() {
        const {tableData} = this.state;
        return (
            <div className="container">
                <MyTable tableData={tableData}  removeData={this.removeData}/>
                <Form handleForm={this.handleForm}/>
               
            </div>
        )
    }
  }

  export default App