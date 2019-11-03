import React, {Component} from "react";
import axios from 'axios';
import AddTextItem from "./AddTextItem"
import TextItems from "./TextItems"
import { Route, Switch } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      text_items: []
    }
  }

  addTextItem = (text_item) => {
    const url = "/api/v1/text_items"
    axios.post(url, {text_item})
    .then(res => {
      let text_items = [res.data.text_item, ...this.state.text_items]
      this.setState({
        text_items
      })
    })
    .catch(error => {alert("Sorry, text " + error.response.data.error.text[0])})
  }

  render(){
    return (
      <div>
        <div className='container'>
          <div className='row col-lg-12 m-2 p-0'>
            <div className='col-lg-6'>
              <AddTextItem addTextItem={this.addTextItem}/>
            </div>

            <div className='col-lg-6'>
              <TextItems textItems={this.state.text_items}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home