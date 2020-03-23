import React, { Component } from 'react'

class Gif extends Component {
    render() {
        const src="https://media.giphy.com/media/a93jwI0wkWTQs/giphy.gif"
        return (
            <img src={src} className="gif" />
        )
    }
}

export default Gif;
