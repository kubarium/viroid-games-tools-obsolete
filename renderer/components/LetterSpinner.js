import React, { Component } from "react"
import { connect } from "react-redux"
import { actionCreator } from "../borek/borekActions"

const mapStateToProps = (state, ownProps) => ({ ...state })

const mapDispatchToProps = {}

class LetterSpinner extends Component {
  render() {
    return <div>LetterSpinner {this.props.borek}</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterSpinner)
