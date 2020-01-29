import React, { Component } from "react";
import { Link } from "@reach/router";

/**
 * literally just a dropdown lmao
 *
 * Proptypes
 * @param {string} title
 * @param {array} list pages/options that will be included
 * 
 */
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listOpen: false,
        headerTitle: this.props.title,
    };
  }

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  componentDidMount() {
      console.log(this.props.list)

  }

  render() {
      const {list} = this.props
      const {listOpen, headerTitle} = this.state
    return (
        <div className= "Dropdown-wrapper">
            <div 
            className= "Dropdown-header"
            onClick={() => this.toggleList()}>
                <div className= "Dropdown-title">
                    {headerTitle}
                </div>
            </div>
        {listOpen && <ul className="Dropdown-list">
            {list.map((item, i) => (
                <li>
                <Link
                className= "Dropdown-listItem"
                key={item.id}
                to= {item.link}
                key={i}
                >
                    {item.title}</Link></li>
            ))}
        </ul>
  }
        </div>
  )
}
     
  }

export default Dropdown;