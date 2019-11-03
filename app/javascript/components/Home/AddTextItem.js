import React, {Component} from 'react'

class AddTextItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTextItem(this.state);
    this.setState({
      text: ''
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor='text'>Please enter your text</label>
          <textarea className="form-control" id='text' rows="2" onChange={this.handleChange} value={this.state.text}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddTextItem