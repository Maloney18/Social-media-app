import { IoIosPersonAdd } from 'react-icons/io'
import './notification.css'

const Notification = () => {
  return (
    <div className='notification'>
        <div className="note-head">
            <h2>Notification</h2>
            <span>See all</span>
        </div>

        <div className="mentions">
            <p className="bolder-text"> Stories About You </p>

            <div className="mentions-item">
                <div className="item-image">
                    <img src="Images/profile-2.jpg" alt="" />
                </div>

                <div className="ment-word">
                    <p className="up-word">Mentions</p>
                    <p className="lighter-word">2 stories mentioned you</p>
                </div>
            </div>
        </div>

        <div className="new-notif">
            <p className="bolder-text"> New </p>

            <div className="all-new-notif">
                <div className="new-notif-item">
                    <div className="item-image">
                        <img src="Images/profile-3.jpg" alt="" />
                    </div>

                    <div className="notif-word">
                        <p className="word"><span className="up-word">Mubi</span> started following you. <span className="time lighter-word">1m</span></p>
                    </div>

                    <div className="notif-icon">
                        <IoIosPersonAdd />
                    </div>
                </div>

                <div className="new-notif-item">
                    <div className="item-image">
                        <img src="Images/profile-3.jpg" alt="" />
                    </div>

                    <div className="notif-word">
                        <p className="word"><span className="up-word">Mubi</span> started following you. <span className="time lighter-word">1m</span></p>
                    </div>

                    <div className="notif-icon">
                        <IoIosPersonAdd />
                    </div>
                </div>
                
                <div className="new-notif-item">
                    <div className="item-image">
                        <img src="Images/profile-3.jpg" alt="" />
                    </div>

                    <div className="notif-word">
                        <p className="word"><span className="up-word">Mubi</span> started following you. <span className="time lighter-word">1m</span></p>
                    </div>

                    <div className="notif-icon">
                        <IoIosPersonAdd />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification;