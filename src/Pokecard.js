import React,{Component} from 'react';
import './Pokecard.css';
import Pokedex from './Pokedex';
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3):num);

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return(
            <div className = 'Pokecard'>
            <h1>Pokecard</h1>
            <h1>{this.props.name}</h1>

            <img src={`${imgSrc}`} alt={this.props.name} />
            
            <div>Type: {this.props.type}</div>
            <div>XP: {this.props.exp}</div>
            </div>
        );
    };
}
 

export default Pokecard;