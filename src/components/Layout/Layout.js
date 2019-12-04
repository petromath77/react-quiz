import React, { Component } from 'react'
import style from './Layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <div className={style.layout}>
        <main className={style.main}>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout;