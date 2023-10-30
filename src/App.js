import React, {useState} from 'react';
import './App.css';
import YoutubeIcon from './youtube.png'
import SearchIcon from './search.png'
import microphone from './microphone.png'
import create from './Create Video.png'
import notification from './notifications-bell-button.png'
import profile from './IMG_20211126_172538_550.jpg'
import homeIcon from './home.png'
import shorts from './short.jpeg'
import subscription from './subscribe.png'
import YourchanelIcon from './user.png'
import HistoryIcon from './history.png';
import yourVedios from './video.png';
import watchLater from './clock.png';


//
import verified from './check.png'
//
import Image01 from './01.jpeg';
import logo01 from './IMG_20211126_172538_550.jpg';
//
import Image02 from './02.avif';
import logo02 from './prof02.jpeg';
// //
import Image03 from './03.jpg';
import logo03 from './prof03.jpeg';
// //
import Image04 from './04.jpeg';
import logo04 from './prof04.webp';
//
import Image05 from './05.jpeg';
import logo05 from './prof 05.webp';
//
import Image06 from './6.webp';
import logo06 from './prof06.webp';

function App() { 
  return (
    <div>
        <div id='header'>
            <button> <img src={YoutubeIcon} id="YoutubeIcon"></img> <span>YouTube</span> </button>
            {/*  */}
            <div id='headerSearchDiv'>
              <input type='search' placeholder='Search' id='SearchInput'/>
              <button id='SearchIcon'> <img src={SearchIcon} /></button>
              <button id='microphone'> <img src={microphone} /></button>
            </div>
            {/*  */}
            <div id='createNotifictionDiv'>
            <button id='create'> <img src={create} /> </button>
            <button id='notification'> <img src={notification} /> </button>
            <button id='profile'> <img src={profile} /> </button>
            </div>
        </div>
        {/* header end */}

        <div id='bodySection'>
          <div id='bodyleftDiv'>
            <button> <img src={homeIcon} /> Home</button>
            <button> <img src={shorts} />Shorts</button>
            <button> <img src={subscription} />subscription</button>
          <div id='bodyleftDivYou'>
          <button id='YourchanelBtn'> <img src={YourchanelIcon} /> Your chanel</button>
          <button id='HistoryBtn'> <img src={HistoryIcon} /> History</button>
          <button id='HistoryBtn'> <img  src={yourVedios}/> Your Videos</button>
          <button id='HistoryBtn'> <img src={watchLater}  /> Watch later</button>
          </div>
          </div>

          {/* bodyRightDiv */}

          <div id='bodyRightDiv'>
              <div id='bodyRightBtnDiv' >
                  <button>All</button>
                  <button>Music</button>
                  <button>Mixesm moive musical</button>
                  <button>Live</button>
                  <button>Bollywood music</button>
                  <button>Computer Science</button>
                  <button>Ghazal</button>
                  <button>Microsoft Corporation</button>
                  <button>Accounting</button>
                  <button>Grammer</button>
                  <button>Sales</button>
                  <button>Watched</button>
                  {/* <button>Recently uploaded</button> */}
                  {/* Vedio Section */}
              </div>
              <div id='VedioSection'>
                <div className='card'>
                  <img src={Image01} className='cardImage'/>
                    <div className='cardData'>
                      <div className='logo'> <img src={logo01}/></div>
                      <div className='innerData'>
                        <h1>Moroco earthquake Hot conversation: Stefano Meloni opened it many time ...</h1>
                        <span>Aditya Roy <img className='verified' src={verified} /></span>
                        <span>2.1kM views <span className='time'>1 minute ago</span></span>
                      </div>
                    </div>
                  </div>     
                           {/*  */}
                <div className='card'>
                  <img src={Image02} className='cardImage'/>
                    <div className='cardData'>
                      <div className='logo'> <img src={logo02}/></div>
                      <div className='innerData'>
                        <h1>Coke Studio Season 9 | Paar Chanaa De | Shilpa Rao &amp; Noori.</h1>
                        <span>Aditya Roy <img className='verified' src={verified} /></span>
                        <span>2.1kM views <span className='time'>Just now</span></span>
                      </div>
                    </div>
                  </div>

                  <div className='card'>
                  <img src={Image03} className='cardImage'/>
                    <div className='cardData'>
                      <div className='logo'> <img src={logo03}/></div>
                      <div className='innerData'>
                        <h1>Faisal Mosque is now the sixth largest mosque in the world in terms of capacity ....</h1>
                        <span>Aditya Roy <img className='verified'   /></span>
                        <span>2M views <span className='time'>20 minute ago</span></span>
                      </div>
                    </div>
                  </div> 

                  <div className='card'>
                  <img src={Image04} className='cardImage'/>
                    <div className='cardData'>
                      <div className='logo'> <img src={logo04}/></div>
                      <div className='innerData'>
                        <h1>Inzamam-ul-Haq steps down as Pakistan chief selector amid conflict of interest allegations ...</h1>
                        <span>Aditya Roy <img className='verified' src={verified}/></span>
                        <span>2.1kM views <span className='time'>2 month ago</span></span>
                      </div>
                    </div>
                  </div> 

                  <div className='card'>
                  <img src={Image05} className='cardImage'/>
                    <div className='cardData'>
                      <div className='logo'> <img src={logo05}/></div>
                      <div className='innerData'>
                        <h1>It was built during the reign of Mughal emperor Shah Jahan, who bestowed it ...</h1>
                        <span>Aditya Roy <img className='verified'/></span>
                        <span>2.1kM views <span className='time'>49 minute ago</span></span>
                      </div>
                    </div>
                  </div>

                  <div className='card'>
                  <img src={Image06} className='cardImage'/>
                    <div className='cardData'>
                      <div className='logo'> <img src={logo06}/></div>
                      <div className='innerData'>
                        <h1>It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal ...</h1>
                        <span>Aditya Roy <img className='verified' src={verified} /></span>
                        <span>2.1kM views <span className='time'>2 years ago</span></span>
                      </div>
                    </div>
                  </div>   
              </div>
          </div>
        </div>
    </div>
  );
}
export default App;
