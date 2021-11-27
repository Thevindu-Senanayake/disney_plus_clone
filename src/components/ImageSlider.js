import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {

	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}

	return (
		<Carousel {...settings}>
			<Wrapper>
				<img src="/images/slider-badging.jpg" />
			</Wrapper>
			<Wrapper>
				<img src="/images/slider-badag.jpg" />
			</Wrapper>
		</Carousel>
	)
}

export default ImageSlider

const Carousel = styled(Slider)`
	margin-top: 20px;

	.slick-list {
		overflow: visible;
	}

	.li.slick-active button::before {
		color: white
	}

	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	button {
		z-index: 1;
	}
`

const Wrapper = styled.div`
	img {
		border: 4px solid transparent;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		box-shadow: rgb(0 0 0 / 70%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		transition-duration: 300ms;

		&:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		}
	}
`