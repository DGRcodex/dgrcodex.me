import styles from './PersonalData.module.css';

const PersonalData: React.FC = () => {
    return (
        <header className={`${styles.container} container mx-auto flex flex-col items-center justify-center mb-8`}>
            <h1 className={`${styles.title} text-5xl font-bold text-gray-800 mb-4 ${styles.moveRight}`}>DANIEL GARCIA ROJAS</h1>
            <h2 className={`${styles.subtitle} text-2xl font-medium text-gray-600 mb-4 ${styles.moveLefth}`}>FULLSTACK DEVELOPER</h2>
            <div className="flex flex-row justify-center gap-4">
                
              
            </div>
        </header>
    );
};

export default PersonalData;
