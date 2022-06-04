import React, {Component} from 'react'
import MyTable from './Table'

class App extends Component {
    state = {
        tableData: [
            {
                title: 'Торт',
                price: '300'
            },
            {
                title: 'Минеральная вода',
                price: '35'
            },
            {
                title: 'Чипсы',
                price: '110'
            },
        ]
    }

    // removeData = (index) => {
    //     const {tableData} = this.state;

    //     this.setState({
    //         tableData: tableData.filter((tableData, i) => {
    //             return i!==index
    //         })
    //     })
    // }

    // handleSubmit = (character) => {
    //     this.setState({characters: [...this.state.characters, character]})
    //   }

    render() {
        const {tableData} = this.state;
        return (
            <div className="container">
                <MyTable tableData={tableData} />
               
            </div>
        )
    }
  }

  export default App