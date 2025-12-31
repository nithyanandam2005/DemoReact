import React from 'react'
import "./header.css"
import globe from"../images/home/Group.svg"
export default function Header() {
  return (
    <div>
        <header>
			<ul>
				<li><a href="#" alt="registerbutton"> <i class="fa-solid fa-envelope"></i> nithya@gmai.com </a></li>
				<li><a href="#" alt="logonbutton"><i class="fa-solid fa-phone"></i>  +91 6384200124</a></li>
			</ul>
			
			<h5>
			<i class="fa-solid fa-location-dot"></i> Chennai,TamilNadu,600001
			<a href="mailto:engsahaly@gmail.com?subject=Hello!"></a>
			</h5>

		</header>
		
		<nav>
			
			<ul>
				<li><a href="#" alt="homepage">home same</a></li>	
				<li><a href="#" alt="homepage">About us</a></li>	
				<li><a href="#" alt="homepage">Features</a></li>	
				<li><a href="#" alt="homepage">How it works</a></li>	
				<li><a href="#" alt="homepage">Blogs</a></li>	

				<button class="contact">Join wishlist</button>
				<button> contact</button>
			
			</ul>
			
			<h1>

			  <img src={globe} alt="" width={20} />Hanioo <span class="normalclass">  </span>
			</h1>
		</nav>
    </div>
  )
}