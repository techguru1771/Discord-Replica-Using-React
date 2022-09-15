import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

function Banner() {
  return (
    <>
    <div class="main-container1">
        <nav>
            <div class="discord">
            <i class="fa-brands fa-discord">Discord</i>
            </div>
            <div class="navbar">
            <Link to="/download"> Download</Link>
            <a href=" nitro"> Nitro</a>
            <a href=" safety"> Satefy</a>
            <a href=" support"> Support</a>
            <a href=" blog"> Blog</a>
            <a href=" careers"> Careers</a>
        </div>  
        <div>
            <a href=" login"><button class="login"> Login </button></a>
        </div>
    </nav>
    <div class="container2">

        <div class="img1">
            <img src="./src/8a8375ab7908384e1fd6efe408284203.svg" alt=""/>
        </div>
        <div class="diss">
            <div>
                <h1>IMAGINE A PLACE...</h1>
            <p class="dis">...where you can belong to a school club, a gaming group, or a worldwide art community. 
                Where just you and a handful of friends can spend time together. 
                A place that makes it easy to talk every day and hang out more often.
            </p>
            </div>
            <div class="btn">
                <button class="u">Download for windows</button>
                <button class="v">Open Discord in your browser</button>
            </div>
        </div>
            <div class="img2">
            <img src="./src/c40c84ca18d84633a9d86b4046a91437.svg" alt=""/>
            </div>
    </div>
</div>
</>
  )
}

export default Banner