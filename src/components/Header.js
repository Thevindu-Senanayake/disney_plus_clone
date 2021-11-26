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
`

const Navbar = styled.div`
	display: flex;

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
		}
	}
`