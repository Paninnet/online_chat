import React from 'react'
import classes from './Loader.module.css'

export const Loader = () => {
   return (
      <div className={classes.loader_wrapper}>
         <div className={classes.loader}>
            {/* <span class="visually-hidden">Loading...</span> */}
         </div>
      </div>
   )
}