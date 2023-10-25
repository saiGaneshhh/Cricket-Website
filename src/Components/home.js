import { useEffect, useState } from 'react';
import '../App.css';
import cricket from './cricket image.jpg'
import { Link } from 'react-router-dom';
import React from 'react';
import UserCard from './UserCard';
import {Carousel} from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //     setIndex(selectedIndex);
  // };
  
  let [crikData, setCrikData] = useState([])
  let [userInput, setUserInput] = useState("")
  const fetchData = () => {
    fetch("https://api.cricapi.com/v1/players?apikey=8c957fe0-0585-477b-8b88-49f1d7a4057b&offset=0")
      .then(res => res.json())
      .then(sai => {
        setCrikData(sai.data)
        console.log(data)
      })
  }
  const filterData = crikData.filter((val) => {
    return val.name.toUpperCase().includes(userInput.toUpperCase())
  })
  useEffect(() => {
    fetchData()
  }, [])
  let imageStyle = {
 
    backgroundImage:
    'url("https://e0.pxfuel.com/wallpapers/1015/658/desktop-wallpaper-cricket-for-android-cricket-batting-thumbnail.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (

    <div className='parent' style={imageStyle}>

       <Carousel >
       <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://economictimes.indiatimes.com/photo/101300638.cms"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://resources.pulse.icc-cricket.com/ICC/photo/2023/06/27/58598b3c-97a1-4e39-a830-ed4352609cc7/CWC23-Fixtures-announcement-16x9-v2.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Let's see who will own the ICC World Cup</h3>
                        <p>Host-India</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202306/wc2023-1_1-sixteen_nine.gif?size=948:533"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>India Vs Australia</h3>
                        <p>Venue : nderjit Singh Bindra Stadium, Mohali on 22 September</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.insider.in/image/upload/c_crop,g_custom/v1689100888/kg49jqluzihkf1cxvuzm.jpg"
                        alt="Fourth slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-india-vs-england-icc-mens-cwc-2023-0-2023-8-25-t-10-55-52.jpg"
                        alt="Fifth slide"
                    />
                    {/* <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>

      <div className='search'>

        <input type='text' placeholder='Enter Player Name....' onChange={(e) => setUserInput(e.target.value)} style={{ height: 'fit-content', color: 'rgb(223, 116, 223)' }} />

        <div className='userContainer'>

          <h1>CRICKETER'S</h1>
          {
            filterData.map((user) => {
              return (
                <Link to={`user/${user.id}`} state={user}>
                  <UserCard
                    // name={user.name} 
                    name={user.name}
                    country={user.country}
                  // country={user.country}
                  />
                </Link>





              )
            })

          }
        </div>
      </div>
    </div>



  );

}

export default Home;
