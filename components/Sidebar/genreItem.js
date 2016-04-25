import React ,{Component} from 'react'

export default class Genre extends Component{

  render(){
    return(
      <li>
        {this.props.name}
      </li>
    )
  }
}
