import styles from './NotFound.module.css';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>{"Oups ! La page que vous recherchez n'existe pas."}</p>
            <Button className='text-md px-6 py-7'><Link to="/">{"Retour à l'accueil"}</Link></Button>
            
        </div>
    );
};

export default NotFound;

