import React from 'react';

import styles from './HeaderContent.module.css';

function HeaderContent() {
    return (
        <div className={styles.container}>
            <div className={styles.mainHeader}>
                <div className={styles.mainHeaderTitle}>
                    Reliable, efficient delivery
                </div>
                <div className={styles.mainHeaderSubtitle}>
                    Powered by Technology
                </div>
                    <p>Our Artificial Intelligence powered tools use millions of project data
                        points to ensure that your project is successful</p>
            </div>
        </div>
    );
}

export default HeaderContent;