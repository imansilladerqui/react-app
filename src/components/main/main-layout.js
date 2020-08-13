import React from "react";
import styles from './main-layout.module.scss';

const MainLayout = (props) => {
      
    return (
      <main className={styles.container}>
        {props.children}
      </main>
    );
};

export default MainLayout;