import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline"
const Footer = () => {
  return (
    <div className={css.footerwrapper}>
        <hr />
        <div className={css.footer}>
            <div className={css.logo}>
                <img src={Logo} alt="dfd" />
                <span>nvzon</span>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                    <span>Contact Us</span>
                    <span className={css.pngline}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue</span>
                    </span>
                    <span className={css.pngline}>
                        <PhoneIcon className={css.icon}/>
                        <span>9199-102-092</span>
                    </span>
                    <span className={css.pngline}>
                        <InboxIcon className={css.icon}/>
                        <span>abcd@gamil.com</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                        <span>Account</span>
                        <span className={css.pngline}>
                            <LoginIcon className={css.icon}/>
                            <span>Sign in</span>
                        </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                        <span>Company</span>
                        <span className={css.pngline}>
                            <UsersIcon className={css.icon}/>
                            <span>About Us</span>
                        </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.details}>
                        <span>Resources</span>
                        <span className={css.pngline}>
                            <LinkIcon className={css.icon}/>
                            <span>Safty Privacy & Terms</span>
                        </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
