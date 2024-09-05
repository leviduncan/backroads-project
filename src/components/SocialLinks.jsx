import React from 'react'

const SocialLinks = ({slink, classy}) => {
    return (
        <li key={slink.id}>
            <a href={slink.href} target="_blank" className={classy}>
                <i className={slink.icon}></i>
            </a>
        </li>
    )
}

export default SocialLinks