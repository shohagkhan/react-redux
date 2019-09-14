import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Count extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.countHere}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    countHere: state.count
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
