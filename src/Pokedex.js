import React,{Component} from 'react';
import './Pokedex.css'
import Pokecard from './Pokecard';

// function setCards(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }

class Pokedex extends Component {
    static defaultProps = {
     pokemon:
        [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    
    }
    
    render(){
        // let pokeProps = this.Pokecard.props;
        return(
            <div className='Pokedex'>
            
            <h1>Total Experience: {this.props.exp}</h1>
            <p className='Pokedex-win'>{this.props.isWinner ? 'WINNER' : 'LOSER'}</p>
            <div className='Pokedex-cards'>
            {this.props.pokemon.map((el)=>(
                <Pokecard id={el.id} name={el.name} type={el.type} exp={el.base_experience} /> 
            ))}
            </div>
          
            </div>
        );
    };
}

// console.log(pokeProps)

export default Pokedex;