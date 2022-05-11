import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Logo() {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
        console.log(isOpenMenu)
    }
    return (
        <>
            <div
                className='icon-menu-header'
                onClick={handleOpenMenu}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div
                className={`overlay-menu ${isOpenMenu && 'active-overlay'}`}
                onClick={handleOpenMenu}
            >
                <div
                    className='mid-header-mobile'
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div
                        className='icon-close-menu'
                        onClick={handleOpenMenu}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <ul className='mid-header-content'>
                        <li className='mid-header-item'>
                            Collection
                        </li>
                        <li className='mid-header-item'>
                            About
                        </li>
                        <li className='mid-header-item'>
                            Men
                        </li>
                        <li className='mid-header-item'>
                            Women
                        </li>
                        <li className='mid-header-item'>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
            <div className='logo-wrapper'>

            </div>
        </>

    )
}

export default Logo
