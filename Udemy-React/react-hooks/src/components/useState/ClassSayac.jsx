import React,{Component} from 'react';

class ClassSayac extends Component{
    state={
        sayac:0,
    };

    arttir=()=>(
        this.setState(prevState=>({
            sayac:prevState.sayac+1
        }))
    )
    render(){
        const {sayac}=this.state
        return(
            <div>
                <button onClick={this.arttir}>{sayac}</button>
            </div>
        );
    }
}

export default ClassSayac; 