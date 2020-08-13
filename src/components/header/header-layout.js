import React from "react";
import styles from './header-layout.module.scss';

const HeaderLayout = (props) => {
      
    return (
      <main className={styles.container}>
          <div className={styles.title}>
              <h3>Brastlewark</h3>
              <small className={styles.name}>A beautiful community</small>
          </div>
        {props.children}
      </main>
    );
};

export default HeaderLayout;