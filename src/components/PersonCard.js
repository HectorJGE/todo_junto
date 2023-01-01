import React from 'react';

class PersonCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edad: this.props.edad
        }
        console.log(this.state.edad)
    }
    
    addEdad = () => {
        let i = this.state.edad;
        i++;
        this.setState({edad:i})
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.nombre}</h1>
                <p>Age: {this.state.edad}</p>
                <p>Hair color: {this.props.cabello}</p>
                <button onClick={this.addEdad} >Sumar Edad</button>
            </div>
        );
    }
}

export default PersonCard;
