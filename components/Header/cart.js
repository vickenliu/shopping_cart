import React ,{Component} from 'react'
import Item from './item'

export default class Cart extends Component{

  render(){
    let items= this.props.selectedItems.map((item,i)=>{
      return <Item {...item} key={i}/>
    })
    return(
      <div id='cart'>{items}</div>
    )
  }
}
