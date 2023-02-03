import { Grid,Box } from '@mui/material'
import React from 'react'
import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import arrow from '../../assets/images/icon-arrow-down.svg'



const Header = () => {
  return (
    <>
        <Grid item={true} className={styles.header}>
            <Navbar />
            <Box className={styles.headerMain}>
                <h1 className={styles.headerHeading}>WE ARE CREATIVES</h1>
                <img src={arrow} alt="" />
            </Box>
            



        </Grid>
    </>
  )
}

export default Header