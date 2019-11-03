import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Pagination } from "semantic-ui-react";
import 'semantic-ui-css/components/menu'

class History extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      text_items: [],
      page: 1,
      pages: 1
    };
  }

  componentDidMount(){
    const url = "/api/v1/text_items";
    axios.get(url)
    .then(res => {
      this.setState({text_items: res.data.text_items, page: res.data.page, pages: res.data.pages})
    })
    
  }

  handlePage = (e, {activePage}) => {
    let gotopage = { activePage };
    let pagenum = gotopage.activePage;
    let pagestring = pagenum.toString();
    const url = "/api/v1/text_items?page=" + pagestring
    axios.get(url)
    .then(res => {
      this.setState({text_items: res.data.text_items, page: res.data.page})
    })
  }

  render(){
    const textItems = this.state.text_items
    const textItemsList = textItems.length ? (
      textItems.map((textItem, index) => {
        return(
          <tr key={textItem.id}>
            <td>{index + 1}</td>
            <td>{textItem.text}</td>
            <td>{textItem.vowels_count}</td>
          </tr>
        )
      })
    ) : (
      <tr><td>No records</td></tr>
    )
    return(
      <div>
        
        <div className='container'>
          <div className='row col-lg-12 m-0 p-0'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Row</th>
                  <th scope="col">Text</th>
                  <th scope="col">Vowels Count</th>
                </tr>
              </thead>
              <tbody>
                {textItemsList}
              </tbody>
            </table>

            <Pagination onPageChange={this.handlePage} siblingRange={4}
              defaultActivePage={this.state.page} totalPages={this.state.pages}
              />
          </div>
        </div>
      </div>
    )
  }

}
export default History;