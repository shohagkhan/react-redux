import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Count extends Component {
    render() {
        return (
            <div>
                {/* I think 'this' need for class component */}
                <h2>{this.props.count}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
