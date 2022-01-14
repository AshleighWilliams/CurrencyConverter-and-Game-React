import React from 'react';
//import card component from react-bootstrap.
import Card from 'react-bootstrap/Card';
//import image component from react-bootstrap.
import Image from 'react-bootstrap/Image';
//import react card flip.
import ReactCardFlip from 'react-card-flip';
//import back of card image from Images.
import cardBack from "./Images/backofcard.jpg"
//import image from Images.
import MonkeyFour from "./Images/monkey4.jpg"
//import image from Images.
import MonkeyThree from "./Images/monkey3.jpg"

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleCardClick = this.props.handleCardClick.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.backOfCardImage = cardBack;
    }

    //allow card to flip.
    flipCard(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        let onClick = null;
        //passing the card number back up
        if (!this.props.isAnyCardUp) {
            onClick = () => { this.handleCardClick(Number(this.props.number)); this.flipCard(window.event); };
        }

        const win = MonkeyFour;
        const lose = MonkeyThree;
        const isFlipped = this.props.isGameOver ? true : this.props.cardClicked ? true : false;

        //return to display card image as win with back of card image.
        if (this.props.isWinningCard) {
            return (
                <ReactCardFlip isFlipped={isFlipped}>
                    <div key="front">
                        <Image src={this.backOfCardImage} style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '10px' }} onClick={onClick} />
                    </div>

                    <div key="back">
                        <Card style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '18px' }} onClick={onClick}>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cardImg" src={win} style={{ width: '200px', height: '300px', margin: '5px' }} alt={win} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </ReactCardFlip>
            )
        } 
        //return to display card image as lose with back of card image.
        else {
            return (
                <ReactCardFlip isFlipped={isFlipped}>
                    <div key="front">
                        <Image src={this.backOfCardImage} style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '10px' }} onClick={onClick} />
                    </div>

                    <div key="back">
                        <Card style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '18px' }} onClick={onClick}>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cardImg" src={lose} style={{ width: '200px', height: '300px', margin: '5px' }} alt={lose} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </ReactCardFlip>
            )
        }
    }
}

//export the code to make it available outside this module.
export default GameCard;