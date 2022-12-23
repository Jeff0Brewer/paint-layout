import React from 'react'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <span className={styles.logoWrap}>
                <div className={styles.logoImg}>
                    <Image
                        src="/logo.png"
                        alt="Company logo"
                        sizes="500px"
                        priority
                        fill
                    />
                </div>
                <div>
                    <h1 className={styles.logoTitle}>Mauris Vitae</h1>
                    <p className={styles.logoSubtitle}>Duis Aute Irure</p>
                </div>
            </span>
            <span className={styles.menu}>
                <a>amet venenatis</a>
                <a>elementum</a>
                <a>iaculis urna id</a>
                <a>At tellus</a>
                <a>Nisi est sit amet</a>
            </span>
        </nav>
    )
}

export default Nav
