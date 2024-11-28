import './homePage.scss'
import SearchBar from "../../components/searchBar/SearchBar"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
function HomePage(){
  const {currentUser}=useContext(AuthContext)
  
return(
  <div className='homePage'>
    <div className='textContainer'>
      <div className="wrapper">
      <h1>Discover Real Estate and Secure Your Dream Home</h1>
      <p>
      Explore the world of real estate and find the home you’ve always envisioned. With options ranging from modern apartments to spacious houses, there’s a perfect fit for every preference and budget. Benefit from professional guidance and a variety of listings to make finding your ideal home a seamless experience. Start today!
      </p>
      <SearchBar/>
      <div className="boxes">
        <div className="box">
          <h1>16+</h1>
          <h2>Years Of Experience</h2>
        </div>
        <div className="box">
          <h1>200+</h1>
          <h2>Award Gained</h2>
        </div>
        <div className="box">
          <h1>2000+</h1>
          <h2>Property Ready</h2>
        </div>
      </div>
      </div>
    </div>
    <div className='imgContainer'>
      <img src='/bg.png' alt=''/>
    </div> 



  </div>
)
}
export default HomePage;