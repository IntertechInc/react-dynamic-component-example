import React from 'react'

import scriptjs from 'scriptjs'

const Null = () => null

export default class Dynamic extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      Hello: Null,
      RowFooter: Null
    }

    this.load = this.load.bind(this)
  }

  componentWillMount () {
    setTimeout(this.load, 1500)
  }

  load () {
    scriptjs('https://fierce-aluminum.glitch.me/bundle', () => {
      this.setState({
        Hello: window.customComponents.Hello,
        RowFooter: window.customComponents.RowFooter
      })
    })
  }

  render () {
    const {Hello, RowFooter} = this.state

    return (
      <span>row content <br />
        <Hello name='hi' />
        <RowFooter />
      </span>
    )
  }
}
