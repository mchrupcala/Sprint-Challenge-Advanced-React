import React from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios';

class PlayerList extends React.Component {
    constructor() {
        super();

    };

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {/* <PlayerCard /> */}
            </div>
        )
    }
}

export default PlayerList;