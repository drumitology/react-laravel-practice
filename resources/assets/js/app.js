import React, { Component } from 'react'
import Example from './components/Example'
import { render } from 'react-dom'
const app = (props, target) => {
  console.log(props, target)
  //get initial props / redux state
  render(<Example {...props} />, document.getElementById(target))
}
window.app = app
