import React, { Component } from "react"
import { connect } from "react-redux"
import { actionCreator } from "../borek/borekActions"

const mapStateToProps = (state, ownProps) => ({ ...state })

const mapDispatchToProps = {}

class LetterSpinner extends Component {
  render() {
    return (
      <div>
        LetterSpinners {this.props.borekReducer.borek} fucked up {this.props.borek} this{" "}
        {Object.keys(this.props.borekReducer)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterSpinner)
