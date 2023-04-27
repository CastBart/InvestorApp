import styles from './Header.module.css'
import Navigation from './Navigation'

export default function Header(props){
    return(
        <header className={`${styles.header} container-fluid`}>
            <Navigation />
        </header>
    )
}