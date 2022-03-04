import React from 'react';
import styles from './local.module.css';

export default function local({bold}) {
  return (
    <>
      <h1 className="bg">
        global style
      </h1>
      
      {/*alternative way: [styles.localcolor,styles.localsize,'bg'].join(' ') */}
      <p className={`${styles.localcolor} ${styles.localsize} bg`} style={{fontWeight: bold, fontStyle: 'italic'}}>local style </p>
    </>
    

  )
}
