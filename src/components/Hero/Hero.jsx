import React from 'react'
import css from './Hero.module.css'
import Heroimg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero=()=> {
  const transition={duration:3,type:"spring"}
  return (
    <div className={css.container}>
        {/* leftside */}
        <div className={css.heroSides}>
            <span className={css.text1}>Skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>Seedily say has suitable disposal and boy.<br/> Exercise joy man children rejoiced.</span>
            </div>
        </div>
        {/* middle */}
        <div className={css.wrapper}>

            <motion.div 
            initial={{bottom:"2rem"}} 
            whileInView={{bottom:"0rem"}}
            className={css.blueCircle}
            transition={transition}
            ></motion.div>

            <motion.img 
            initial={{bottom:"-2rem"}} 
            whileInView={{bottom:"0rem"}}
            transition={transition}
            src={Heroimg} alt="hh" width={600}/>

            <motion.div 
            initial={{right:"4%"}} 
            whileInView={{right:"2%"}}
            transition={transition}
            className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best Signup Offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>
        {/* rightside */}
        <div className={css.heroSides}>
            <div className={css.trafic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy customer</span>
            </div>
        </div>
    </div>
    
  )
}

export default Hero
