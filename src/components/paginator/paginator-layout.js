import React from "react";
import styles from './paginator-layout.module.scss';

const PaginatorLayout = (props) => {
      
    return (
      <main className={styles.container}>
        {props.children}
      </main>
    );
};

export default PaginatorLayout;