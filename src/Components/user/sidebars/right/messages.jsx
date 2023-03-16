import { FaSearch, FaFilter, FaDotCircle } from 'react-icons/fa'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './messages.css'

const Messages = () => {
    const [searchBox, setSearchBox] = useState('')

    const searching = (e) => {
        const {value} = e.target

        setSearchBox(value)
    }


    return (
        <div className='messages'>
            <h2>Messages</h2>

            <div className="search-bar">
                <span className='search-icon'>
                    <FaSearch />
                </span>

                <input 
                    type="text" 
                    name='search' 
                    onChange={(e) => searching(e)}
                    value={searchBox}
                    placeholder='Search messages'
                />

                <span className="filter">
                    <FaFilter />
                </span>
            </div>
            
            <nav className='link-cont'>
                <NavLink className='link isActive'>Primary</NavLink>
                <NavLink className='link'>General</NavLink>
                <NavLink className='link'>Requests</NavLink>
            </nav>

            <div className="friends">
                <div className="person">
                    <div className="image">
                        <img src="Images/elon-musk.jpg" alt="" />
                    </div>

                    <div className="person-info">
                        <div className="personal">
                            <div className="name-container">
                                <p className="person-name">Big Fame</p>
                                <FaDotCircle className='online'/>
                            </div>
                            <p className="active"></p>
                        </div>

                        <p className="last-message"> This is your last message</p>
                    </div>
                </div>

                <div className="person">
                    <div className="image">
                        <img src="Images/elon-musk.jpg" alt="" />
                    </div>

                    <div className="person-info">
                        <div className="personal">
                            <div className="name-container">
                                <p className="person-name">Big Fame</p>
                                <FaDotCircle className='online'/>
                            </div>
                            <p className="active"></p>
                        </div>

                        <p className="last-message"> This is your last message</p>
                    </div>
                </div>
                
                <div className="person">
                    <div className="image">
                        <img src="Images/elon-musk.jpg" alt="" />
                    </div>

                    <div className="person-info">
                        <div className="personal">
                            <div className="name-container">
                                <p className="person-name">Big Fame</p>
                                <FaDotCircle className='online'/>
                            </div>
                            <p className="active"></p>
                        </div>

                        <p className="last-message"> This is your last message</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
