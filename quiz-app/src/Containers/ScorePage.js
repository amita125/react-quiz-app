import React, { Fragment } from "react";
import Player from "../Components/Player.js";

class ScorePage extends React.Component{
    constructor (props) {
        super(props)
        this.getWinner = this.getWinners.bind(this);
    };
    getWinners(array) {
        let winners = [];
        for (let index = 0; index < array.length; index++) { 
            if ((array[index].score>winners[0].score) || (winners == [])) {
                winners.push(array[index].name);
            } else if ((array[index].score=winners[0].score) || (winners == [])) {
                winners = array[index].name;
            };
        };
        return winners 
    };
    render() {
        let usersInfo = [{name: "Steven", score: 3},{name: "Liam", score: 3},{name: "Matt", score: 3}];
        let winners = this.getWinners(usersInfo) //this.props.usersInfo is an array with multiple users, each with a name and a score
        let players = this.props.usersInfo.map((x) =>
            <Player userInfo={x} winners={winners}/>
        );
        return(
            <Fragment>
                {players}
            </Fragment>
        )
    };
};

export default ScorePage;