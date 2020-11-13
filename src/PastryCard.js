import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class PastryCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card bg="light" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={this.props.item.img} className="image"/>
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <Card.Text>{this.props.item.info}</Card.Text>
                </Card.Body>
            </Card>
            </div>
        );
    };
}

export default PastryCard;



