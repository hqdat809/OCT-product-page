import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import "./Content.scss"

function Content() {
    return (
        <div className='wrapper-content'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Content
