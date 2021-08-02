// create your App component here
import React from 'react'

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            number:0,
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
         .then(resp => resp.json())
         .then(json => {
             console.log(json)
             this.setState({
                 number: json.number
             })
         })
    }

    render() {
        return <div>{this.state.number}</div>
    }


}