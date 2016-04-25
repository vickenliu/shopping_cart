import React ,{Component} from 'react'
import Cart from './cart'

export default class Header extends Component{

  render(){
    return(
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <h1>Happy Shopping</h1>
            <div className='pull-right' id='carddisplay'>{this.props.selectedItems.length} items in your items
                <Cart selectedItems={this.props.selectedItems}/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
