import React from 'react';
//import gamecard from components.
import GameCard from './GameCard.js';
//import button component from react-bootstrap component.
import Button from 'react-bootstrap/Button';

//create game.
class Game extends React.Component {
    constructor(props) {
        super(props);
        //set the state.
        this.state = {
            winningCard: this.getWinningCard()
            , streakDetail: ""
            , winningCardEmoji: "monkey4.jpg"
            , losingCardEmoji: "monkey3.jpg"
            , cardClicked: 0
            , isGameOver: false
            ,
        }
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    //get a random number from an array of using Math random.
    getWinningCard = () => {
        const cardArray = [1, 2, 3];
        const winningCard = Number(cardArray[Math.floor(Math.random() * cardArray.length)]);
        return winningCard;
    }

    //click function called when card is chosen.
    handleCardClick(i) {
        const newGamesCount = this.state.gamesCount + 1;
        let winningCard = this.state.winningCard;

        //update the state.
        this.setState({
            gamesCount: newGamesCount
            , cardClicked: i
            ,
        });

        // declare winner or loser
        const oldStreak = this.state.streak;
        let streakDetail, adjustedStreak;
        let winningCardEmoji = "monkey4.jpg";
        let losingCardEmoji = "monkey3.jpg";

        if (i === winningCard) {
            streakDetail = "Win!";
        } else {
            streakDetail = "Sorry, Lost!";
        }

        // update state
        this.setState({
            streak: adjustedStreak
            , streakDetail: streakDetail
            , oldStreak: oldStreak
            , winningCardEmoji: winningCardEmoji
            , losingCardEmoji: losingCardEmoji
            ,
        });

        //delay two seconds and then flip to see cards not chosen.
        setTimeout(() => {
            this.setState({
                isGameOver: true
                ,
            })
        }
            , 2000);
    }

    //function to play again.
    resetGame() {
        this.setState({
            winningCard: this.getWinningCard()
            , cardClicked: 0
            , streakDetail: ""
            , oldStreak: this.state.streak
            , isGameOver: false
            ,
        });
    }

    render() {
        //render play again button only when a card has been already been clicked after the first play.
        let playAgainButton;
        if (this.state.cardClicked !== 0) {
            playAgainButton = <><br /><Button onClick={() => this.resetGame()}>Play Again?</Button></>
        }
        //return to dispkay the cards and play again button.
        return (
            <>
                <h3>Pick the correct Monkey to Win!</h3>
                <div className="col-9 row" style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <GameCard number="1" handleCardClick={this.handleCardClick} cardClicked={this.state.cardClicked === 1 ? true : false} isWinningCard={this.state.winningCard === 1 ? true : false} cardEmoji={this.state.winningCard === 1 ? this.state.winningCardEmoji : this.state.losingCardEmoji} isGameOver={this.state.isGameOver} />
                    <GameCard number="2" handleCardClick={this.handleCardClick} cardClicked={this.state.cardClicked === 2 ? true : false} isWinningCard={this.state.winningCard === 2 ? true : false} cardEmoji={this.state.winningCard === 2 ? this.state.winningCardEmoji : this.state.losingCardEmoji} isGameOver={this.state.isGameOver} />
                    <GameCard number="3" handleCardClick={this.handleCardClick} cardClicked={this.state.cardClicked === 3 ? true : false} isWinningCard={this.state.winningCard === 3 ? true : false} cardEmoji={this.state.winningCard === 3 ? this.state.winningCardEmoji : this.state.losingCardEmoji} isGameOver={this.state.isGameOver} />
                </div>
                <div style={{ width: '99%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h3 className="result">{this.state.streakDetail}</h3><br />
                    <div className="playAgain">{playAgainButton}</div>
                </div>
            </>
        );
    }
}

//export the code to make it available outside of this module.
export default Game;