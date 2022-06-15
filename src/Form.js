import React, {Component} from 'react'




class Form extends Component {
  initialState = {
    title: '',
    price: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
    console.log(event.target.value)
    this.setState({
      [name]: value,
    })
  }
  
  submitForm = () => {
    this.props.handleForm(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { title, price } = this.state;
  
    return (
      <form>
        <div class="label__wrap">
            <label htmlFor="title">цена</label>
            <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange} />
         </div>
        <div class="label__wrap">
            <label htmlFor="price">товар</label>
            <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={this.handleChange} />
            </div>
            <div>
            <input type="button" value="Добавить" onClick={this.submitForm} />
          </div>
      </form>
    );
  }
  
  
}

export default Form;