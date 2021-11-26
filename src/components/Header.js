import React from 'react';
import styled from 'styled-components';

function Header() {
	return (
		<Container>
			<Logo src="/images/logo.svg" alt="logo"/>
			<Navbar>
				<a>
					<img src="/images/home-icon.svg" alt="home" />
					<span>Home</span>
				</a>
				<a>
					<img src="/images/search-icon.svg" alt="home" />
					<span>search</span>
				</a>
				<a>
					<img src="/images/watchlist-icon.svg" alt="home" />
					<span>watchlist</span>
				</a>
				<a>
					<img src="/images/original-icon.svg" alt="home" />
					<span>originals</span>
				</a>
				<a>
					<img src="/images/movie-icon.svg" alt="home" />
					<span>movies</span>
				</a>
				<a>
					<img src="/images/series-icon.svg" alt="home" />
					<span>series</span>
				</a>
			</Navbar>
			<UserProPic src="https://imgr.search.brave.com/7gdcOWv3cfxZTomC6xs2tEPXEy6fqsmCyBI7cbcl-VM/fit/1200/1080/ce/1/aHR0cHM6Ly9kbTBx/eDh0MGk5Z2M5LmNs/b3VkZnJvbnQubmV0/L3RodW1ibmFpbHMv/dmlkZW8vQmtOWUot/cV9naXl5aHJ4Y3Uv/dmlkZW9ibG9ja3Mt/cHJvZmVzc2lvbmFs/LXByb2dyYW1tZXIt/d3JpdGluZy1hLXBy/b2dyYW1taW5nLWNv/ZGVfcjZnb2N3di1r/el90aHVtYm5haWwt/MTA4MF8wMS5wbmc" />
		</Container>
	)
}

export default Header

const Container = styled.div`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;

`

const Logo = styled.img`
	width: 80px;
	cursor: pointer;
`

const Navbar = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			text-transform: uppercase;
			cursor: pointer;
			position: relative;

			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`

const UserProPic = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`
