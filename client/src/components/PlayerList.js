import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';
import  useFetch  from 'react-fetch-hook';

// class PlayerList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             playerData: []
//         }

//     };

//     componentDidMount() {
//         axios
//         .get('http://localhost:5000/api/players')
//         .then(res => {
//             // console.log(res.data)
//             this.setState({playerData: res.data})
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     render() {
//         return (
//             <div className="player-list">
//                 <PlayerCard 
//                 playerData={this.state.playerData}
//                 name={this.state.playerData.name}
//                 country={this.state.playerData.country}
//                 searches={this.state.playerData.searches}/>
//             </div>
//         )
//     }
// }


const PlayerList = () => {

    const { isLoading, data } = useFetch('http://localhost:5000/api/players');

        return isLoading ? (
            <div>Loading....</div>
        ) : (
            <div className="player-list">
                {console.log(data)}
                 <PlayerCard {...data} 
                // playerData=
            
                // playerData={data}
                name={data.name}
                country={data.country}
                searches={data.searches}
                />
            </div>
        );
    };

export default PlayerList;