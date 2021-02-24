import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/46351795?s=460&u=89fb13927b709f238a50f96e7d81ded591672464&v=4" alt="Hugo Matheus"/>
            <div>
                <strong>Hugo Matheus</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}