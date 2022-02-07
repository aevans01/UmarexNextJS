import React from "react";
import "../styles/Carousel.css";
import ux from "../assets/UX Airguns Logo Mark_3Color.png"
function Carousel(){
    return(
        <div class="flex-container">
	<div class="spinner"><p>
		<div class="cube1"></div>
		<div class="cube2"></div>
		</p>
	</div>
	<div class="flex-slide home">
    <img className="airguns" src={ux}/>
		<div class="flex-title flex-title-home"></div>
		<div class="flex-about flex-about-home"><p>Click here to navigate to the home section of the website</p></div>
	</div>
	<div class="flex-slide about">
		<div class="flex-title"></div>
		<div class="flex-about"><p>Click here to navigate to the About section of the website</p></div>
	</div>
	<div class="flex-slide work">
		<div class="flex-title"></div>
		<div class="flex-about"><p>Listing relevant snippets of work:</p>
		</div>
	</div>
	<div class="flex-slide contact">
		<div class="flex-title"></div>
				<div class="flex-about">
					<p>Use the contact form below</p>
		</div>
	</div>
    <div class="flex-slide fifth">
		<div class="flex-title"></div>
				<div class="flex-about">
					<p>Use the contact form below</p>
		</div>
	</div>
    <div class="flex-slide sixth">
		<div class="flex-title"></div>
				<div class="flex-about">
					<p>Use the contact form below</p>
		</div>
	</div>
</div>
    )
}

export default Carousel;