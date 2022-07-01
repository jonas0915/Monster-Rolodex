import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div>
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     // console.log("Card-list");
//     const { monsters } = this.props;

//     return (
//       <div>
//         <div className="card-list">
//           {monsters.map((monster) => {
//             return (
//               <div>
//                 <Card monster={monster} id={this.props.id} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default CardList;
