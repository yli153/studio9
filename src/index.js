import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PastryCard from './PastryCard';
import CardGroup from 'react-bootstrap/CardGroup';

class App extends Component {
  constructor() {
      super();
      this.state = {
        items:[{name: "Raspberry Danish", info: "80g: 320cal", img: 'assets/danish.jpg'}, 
               {name: "Chocolate Eclair", info: "85g: 350cal", img: 'assets/eclair.jpg'}, 
               {name: "Plain Croissant", info: "70g: 290cal", img: 'assets/croissant.jpg'}, 
               {name: "Cinnamon Swirl", info: "80g: 365cal", img: 'assets/swirl.jpg'}, 
               {name: "Chocolate Twist", info: "90g: 333cal", img: 'assets/twist.jpg'}, 
               {name: "Apple Turnover", info: "100g: 317cal", img: 'assets/turnover.jpg'}, 
               {name: "Belgian Bun", info: "100g: 360cal", img: 'assets/bun.jpg'}, 
               {name: "Strawberry Tart", info: "90g: 224cal", img: 'assets/tart.jpg'}]
      };
    }

  render() {
    let pastryCards = this.state.items.map(item => <PastryCard item={item}/>) 
    return (
        <div>
          <h3>Nutrition Information of Popular Pastries</h3>
          <CardGroup>{pastryCards}</CardGroup>
        </div>
    );
  }
}

ReactDOM.render(
   <App />,
  document.getElementById('root')
);



