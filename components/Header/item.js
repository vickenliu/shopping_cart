import React ,{Component} from 'react'

export default class Item extends Component{

  // addToCart(e){
  //   let   name= this.refs.name.innerHTML,
  //         bio= this.refs.bio.innerHTML;
  //         console.log('item itself')
  //   this.props.addMe({name,bio})
  // }
  render(){
    let {name,bio}= this.props
    return(
    <div className="jumbotron">
      <ul className='item'>
        <li ref='name'>{name}</li>
        <li ref='bio'>{bio}</li>
        <button className='btn btn-primary pull-right' >Remove Item</button>
      </ul>
    </div>
    )
  }
}
