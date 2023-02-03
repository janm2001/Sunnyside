import { Link,Box } from '@mui/material'
import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/images/logo.svg'

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
            <Box className={styles.navbarBrand}>
                
                    <Link href="#"><img src={logo} alt="" /></Link>
                
            </Box>

            <Box className={styles.navbarLinks}>
                <Link href="#">About</Link>
                <Link href="#">Services</Link>
                <Link href="#">Projects</Link>
                <Link href="#" className={styles.contact}>Contact</Link>
            </Box>

        </nav>
    </div>
  )
}

export default Navbar