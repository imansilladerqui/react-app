import React from "react";
import styles from './description.module.scss';
import {withRouter} from 'react-router-dom';
import {isEmpty} from 'lodash';


const Description = (props) => {
    const searchFilter = (key, value) => {
      return props.history.push(`/filter?${key}=${value}`);
    }

    return (
      <div className={styles.container}>
        <p className={styles.featuresTitle}>features</p>
        <div className={styles.boxesContainer}>
          
          <div className={styles.boxes} onClick={()=>{searchFilter('age', props.age)}}>
            <p className={styles.description}>{props.age}</p>
            <p className={styles.descriptionTitle}>Age</p>
          </div>
          <div className={styles.boxes} onClick={()=>{searchFilter('hair_color', props.hairColor)}}>
            <p className={styles.description}>{props.hairColor}</p>
            <p className={styles.descriptionTitle}>Hair Color</p>
          </div>
          <div className={styles.boxes} onClick={()=>{searchFilter('height', props.height)}}>
            <p className={styles.description}>{Math.ceil(props.height)} cm</p>
            <p className={styles.descriptionTitle}>Height</p>
          </div>
          <div className={styles.boxes} onClick={()=>{searchFilter('weight', props.weight)}}>
            <p className={styles.description}>{Math.ceil(props.weight)} kg</p>
            <p className={styles.descriptionTitle}>Weight</p>
          </div>
          {
            !isEmpty(props.professions) &&
              <div className={styles.professions}>
              <p className={styles.professionsTitle}>Professions</p>
              <p className={styles.professionsTags}>
                {props.professions.map((data, index)=>{
                  return <span key={index} onClick={()=>{searchFilter('professions', data)}}>{data}</span>
                })}
              </p>
            </div>
          }
          {
            !isEmpty(props.friends) &&
              <div className={styles.friends}>
                <p className={styles.friendsTitle}>Friends</p>
                <p className={styles.friendsTags}>
                  {props.friends.map((data, index)=>{
                    return <span key={index} onClick={()=>{searchFilter('friends', data)}}>{data}</span>
                  })}
                </p>
              </div>
          }
        </div>
      </div>

    );
};

export default withRouter(Description);