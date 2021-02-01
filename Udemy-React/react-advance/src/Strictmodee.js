import React, { Component ,StrictMode} from 'react'

class Strictmodee extends Component {
    render() {
        return (
            <React.StrictMode>
                <Test/>
            </React.StrictMode>
        )
    }
}

class Test extends Component{
    componentWillUnmount(){
        
    }
        render(){
            return(
                <div>Test to Strict Mode</div>
            )
        }
}


export default Strictmodee ;