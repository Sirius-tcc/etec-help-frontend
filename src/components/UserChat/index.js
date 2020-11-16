import React from 'react'
import { Link } from 'react-router-dom'


import './styles.css'

function UserChat({ img, notifications, selected }){


    return(

        <>
            <div id="user-chat">
                {selected?<div className="selected"/>:<></>}

                <div className="user">
                    <Link to="/chat">
                        {img?<img src={ img } alt=""/>:""}
                    </Link>

                </div>

                {notifications>0?<div className="notifications">
                    <span>
                        { notifications }
                    </span>
                </div>:<></>}
            </div>
        </>
    )
}

export default UserChat