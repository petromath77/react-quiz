import React, { Component } from 'react'
import style from './Layout.module.scss';
import MenuToggle from '../Navigation/MenuToggle/MenuToggle';
import Overlay from '../UI/Overlay/Overlay'

class Layout extends Component {
  state= {
    open: false
  }

  onClickToggle = () => { 
    this.setState({
      open: !this.state.open
    })
  }

  render() {


    return (
      <>
        <MenuToggle clickToggle={this.onClickToggle} isActive={this.state.open} />
        <Overlay isOpen={this.state.open}/>
        <div className={style.layout}>
          <main className={style.main}>
            { this.props.children }
          </main>
        </div>
      </>
    )
  }
}

export default Layout;