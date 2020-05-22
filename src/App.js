import React from 'react';
import styles from './App.module.css';

import imgSupervisor from './images/icon-supervisor.svg';
import imgTeamBuilder from './images/icon-team-builder.svg';
import imgKarma from './images/icon-karma.svg';
import imgCalculator from './images/icon-calculator.svg';

function App() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderTitle}>
          Reliable, efficient delivery
        </div>
        <div className={styles.mainHeaderSubtitle}>
          Powered by Technology
        </div>
        <p>Our Artificial Intelligence powered tools use millions of project data <br />
          points to ensure that your project is successful</p>
      </div>
      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
          </div>
          <div className={styles.cardImage}>
            <img src={imgSupervisor} alt="Supervisor"/>
          </div>
          <div className={styles.cardHeader}>
            <h2>Team Builder</h2>
            <p>Scans our talent network to create the optimal team for your project</p>
          </div>
          <div className={styles.cardImage}>
            <img src={imgTeamBuilder} alt="Supervisor"/>
          </div>
          <div className={styles.cardHeader}>
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
          </div>
          <div className={styles.cardImage}>
            <img src={imgKarma} alt="Supervisor"/>
          </div>
          <div className={styles.cardHeader}>
            <h2>Calculator</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
          </div>
          <div className={styles.cardImage}>
            <img src={imgCalculator} alt="Supervisor"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
