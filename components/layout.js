import React ,{Component} from 'react'
import Header from './Header/header'
import Genre from  './Sidebar/genre'
import Lists from  './Lists/lists'

export default class Layout extends Component{
  constructor(){
    super()
    this.state={
      item:[]
    }
  }

  updateCart(obj){
    let arr=this.state.item.concat([obj])
    this.setState({item:arr})

  }
  render(){
    console.log('layout state',this.state.item)
    return(
      <div id='body'>
        <Header selectedItems={this.state.item}/>
        <Genre/>
        <Lists handleClick={this.updateCart.bind(this)}/>
      </div>
    )
  }
}
