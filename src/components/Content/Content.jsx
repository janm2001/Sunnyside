import React from 'react'
import styles from './Content.module.css'
import { Grid } from '@mui/material'
import egg from '../../assets/images/desktop/image-transform.jpg'
import glass from '../../assets/images/desktop/image-stand-out.jpg'


const Content = () => {
  return (
    <>
        <Grid container className={styles.container}>
  
      <Grid item xs={12} md={6} className={styles.text}>
        <h2 className={styles.title}>Transform your Brand</h2>
        <p>We are a full service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do the most of the marketing for you.</p>
        <a href="#f" className={styles.yellow}>Learn More</a>
      </Grid>
      <Grid item xs={12} md={6} className={styles.picBox}>
        <img src={egg} alt="egg" className={styles.pic}/>
      </Grid>
  
  <Grid item xs={12} md={6}>
    <img src={glass} alt="glass" className={styles.pic}/>
  </Grid>
  <Grid item xs={12} md={6} className={styles.text}>
  <h2 className={styles.title}>Stand out to the right audience</h2>
    <p>Using a collaborative formula of designers,researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital space.</p>
    <a href="#f" className={styles.red}>Learn More</a>
  </Grid>
  <Grid item xs={12} md={6} className={styles.graphics} id="about">
    <h2 className={styles.title}>Graphic Design</h2>
    <p>Great design makes you memoriable. We deliver artwork that underscores your brand message and captures potential clients attention.</p>
  </Grid>
  <Grid item xs={12} md={6} className={styles.photo}>
    <h2 className={styles.title}>Photography</h2>
    <p>Increase your credibility by getting the most stunning high quality photos that improve your business images.</p>
  </Grid>

  
</Grid>
    </>
  )
}

export default Content