import './explore.css'
import {FaGreaterThan} from 'react-icons/fa'

const Explore = () => {
  return (
    <div className="explore">
      <div className="explore-head">
        <h2>Explore</h2>
        <span className='see-all'>See all</span>
      </div>

      <div className="d-middle-cont">
        <div className="explore-others">
          <span className="others">Products</span>
          <span className="others">Illustrations</span>
          <span className="others">Website</span>
          <span className="others">Interests</span>
        </div>

        <span className="navig-right">
          <FaGreaterThan />
        </span>
      </div>

      <div className="all-exp-images">
        <div className="upp-img-div">
          <div className="exp-images-cont col1">
            <img src="Images/profile-2.jpg" alt="" />
          </div>

          <div className="exp-images-cont col2">
            <img src="Images/profile-3.jpg" alt="" />
          </div>

          <div className="exp-images-cont right-image">
            <img src="Images/moses-bliss.jpg" alt="" />
          </div>

          <div className="exp-images-cont col3">
            <img src="Images/elon-musk.jpg" alt="" />
          </div>

          <div className="exp-images-cont col4">
            <img src="Images/facts.jpg" alt="" />
          </div>
        </div>

        <div className="botm-exp-images">
           <div className="exp-images-cont left-image">
            <img src="Images/elon-musk.jpg" alt="" />
          </div>

          <div className="exp-images-cont col1">
            <img src="Images/profile-3.jpg" alt="" />
          </div>

          <div className="exp-images-cont col2">
            <img src="Images/profile-2.jpg" alt="" />
          </div>

          <div className="exp-images-cont col4">
            <img src="Images/facts.jpg" alt="" />
          </div>

          <div className="exp-images-cont col5">
            <img src="Images/cynthia.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore;
