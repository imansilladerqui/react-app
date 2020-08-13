import React from "react";
import styles from './cards.module.scss';
import Description from '../description/description';

const Cards = (props) => {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <img alt={props.name} src={props.habitants.thumbnail}/>
          
          <div className={styles.title}>
            <div className={styles.name}>
              {props.habitants.name}
            </div>

            <Description
              name={props.habitants.name}
              age={props.habitants.age} 
              hairColor={props.habitants.hair_color}
              height={props.habitants.height}
              weight={props.habitants.weight}
              professions={props.habitants.professions}
              friends={props.habitants.friends}/>
          </div>          
        </div>
      </div>
    );
};

export default Cards;