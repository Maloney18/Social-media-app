import { IoMdSettings } from 'react-icons/io';
import { FaGreaterThan } from 'react-icons/fa';
import './userProfile.css';
import Lottie from 'lottie-react';
import Empty from './empty-state.json'

const UserProfile = () => {
  return (
    <div className="profile flex-cont">
        <div className="flex-cont">
          <div className="background-image">
            <img src="Images/facts.jpg" alt="background" />
          </div>
          <div className="profile-info flex-cont">
            <div className="profile-image">
              <img src="Images/profile-pic.jpg" alt="profile" />
            </div>
            <div className="profile-user">
              <p className="profile-name">Rich BigFame</p>
              <p className='handle-name'>@__bigfame</p>
            </div>
          </div>
        </div>

        <div className="interests">
          <p className="int">Art</p>
          <p className="int">Music</p>
          <p className="int">Travels</p>
        </div>

        <div className='button-settings'>
          <div className="edit-button">
            <button>Edit Profile</button>
          </div>
          <div className="settings"><IoMdSettings /></div>
        </div>

        <div className="rating">
          <div className="rating-cont flex-cont">
            <p className="figure">200</p>
            <p className="rating-info">posts</p>
          </div>

          <div className="rating-cont flex-cont">
            <p className="figure">2k+</p>
            <p className="rating-info">followers</p>
          </div>

          <div className="rating-cont flex-cont">
            <p className="figure">500</p>
            <p className="rating-info">following</p>
          </div>
        </div>

        <div className="photos flex-cont">
          <div className="photos-head">
            <p className="photos-label">Photos</p>
            <FaGreaterThan className='goTo'/>
          </div>

          <div className="photos-cont">
            <div className="main-photo">
              <img src="Images/profile-2.jpg" alt="" />
            </div>

            <div className="other-photos">
              <div className="other-photos-img">
                <img src="Images/profile-3.jpg" alt="" className='other-photos-img'/>
              </div>
              <div className="other-photos-img">
                <img src="Images/elon-musk.jpg" alt="" className='other-photos-img'/>
              </div>
              <div className="other-photos-img">
                <img src="Images/profile-pic.jpg" alt="" className='other-photos-img'/>
              </div>

              <div className="last-photo">
                <img src="Images/Facebook.png" alt="" className='other-photos-img'/>
                <span className='overlay'>+4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="videos flex-cont">
          <div className="videos-head">
            <h2 className="videos-label">Videos</h2>
            <FaGreaterThan className='goTo'/>
          </div>

          <div className="videos-cont">
            <div className="empty-cont flex-cont">
              <div className="empty-word flex-cont">
                <p className='no-post'>No post(s) yet!</p>
                <span className='click-add'>click here to add</span>
              </div>
              <Lottie className='empty' animationData={Empty} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserProfile