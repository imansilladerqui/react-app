import React from "react";
import styles from './cards-layout.module.scss';

const CardsLayout = (props) => {
      
    return (
      <div className={styles.container}>
        {props.children}
      </div>
    );
};

export default CardsLayout;