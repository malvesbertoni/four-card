import React from 'react';
import styles from './Cards.module.css';
import cx from 'classnames';

import imgSupervisor from '../../images/icon-supervisor.svg';
import imgTeamBuilder from '../../images/icon-team-builder.svg';
import imgKarma from '../../images/icon-karma.svg';
import imgCalculator from '../../images/icon-calculator.svg';

function Cards() {
    return (
        <div className={styles.container}>
            <div className={cx(styles.card, styles.supervisor)}>
                <div className={styles.cardHeader}>
                    <h2>Supervisor</h2>
                    <p>Monitors activity to identify project roadblocks</p>
                </div>
                <div>
                    <img className={styles.cardImage} src={imgSupervisor} alt="Supervisor"/>
                </div>
            </div>
 
            <div className={cx(styles.card, styles.teamBuilder)}>
                <div className={styles.cardHeader}>
                    <h2>Team Builder</h2>
                    <p>Scans our talent network to create the optimal team for your project</p>
                </div>
                <div>
                    <img  className={styles.cardImage} src={imgTeamBuilder} alt="Team Builder"/>
                </div>
            </div>

            <div className={cx(styles.card, styles.karma)}>
                <div className={styles.cardHeader}>
                    <h2>Karma</h2>
                    <p>Regularly evaluates our talent to ensure quality</p>
                </div>
                <div>
                    <img  className={styles.cardImage} src={imgKarma} alt="Karma"/>
                </div>
            </div>

            <div className={cx(styles.card, styles.calculator)}>
                <div className={styles.cardHeader}>
                    <h2>Calculator</h2>
                    <p>Uses data from past projects to provide better delivery estimates</p>
                </div>
                <div>
                    <img  className={styles.cardImage} src={imgCalculator} alt="Calculator"/>
                </div>
            </div>
        
        </div>
    );
}

export default Cards;