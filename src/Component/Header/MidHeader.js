import React, { useEffect } from 'react'


function MidHeader() {

    useEffect(() => {
        const headerItems = document.getElementsByClassName('mid-header-item')
        const arrHeaderItems = Array.from(headerItems)

        const changeHeaderItem = (e) => {
            arrHeaderItems.map(item2 => (item2.classList.remove('active'))
            )
            const selectedItem = e.target
            selectedItem.classList.add('active')
        }

        arrHeaderItems.map(item => (item.addEventListener('click', changeHeaderItem))
        )
    }, [])

    return (
        <>
            <div className='mid-header'>
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

        </>

    )
}

export default MidHeader
