import { IoIosPersonAdd } from 'react-icons/io'
import './Suggestions.css'

const Suggestions = () => {
  return (
    <div className='suggestions'>
        <div className="upper-most">
            <h2>Suggested For You</h2>
            <span className='see-all'>See all</span>
        </div>

        <div className="all-suggestion">
            <div className="add-new">
                <div className="new-image">
                    <img src="Images/profile-3.jpg" alt="" />
                </div>

                <div className="new-name">
                    <p>Maloney</p>
                    <span className="time">Recently</span>
                </div>

                <div className="add-icon">
                    <IoIosPersonAdd />
                </div>
            </div>
            
            <div className="add-new">
                <div className="new-image">
                    <img src="Images/profile-3.jpg" alt="" />
                </div>

                <div className="new-name">
                    <p>Maloney</p>
                    <span className="time">Recently</span>
                </div>

                <div className="add-icon">
                    <IoIosPersonAdd />
                </div>
            </div>

            <div className="add-new">
                <div className="new-image">
                    <img src="Images/profile-3.jpg" alt="" />
                </div>

                <div className="new-name">
                    <p>Maloney</p>
                    <span className="time">Recently</span>
                </div>

                <div className="add-icon">
                    <IoIosPersonAdd />
                </div>
            </div>

            <div className="add-new">
                <div className="new-image">
                    <img src="Images/profile-3.jpg" alt="" />
                </div>

                <div className="new-name">
                    <p>Maloney</p>
                    <span className="time">Recently</span>
                </div>

                <div className="add-icon">
                    <IoIosPersonAdd />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Suggestions