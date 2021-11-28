import React from 'react';
import styled from 'styled-components';

function Detail() {
	return (
		<Container>
			<Background>
				<img src="https://imgr.search.brave.com/cGCI8qEYBPTnBG8olDSFOkCyneafXUbA_T8klfE1XFw/fit/1200/675/ce/1/aHR0cHM6Ly93d3cu/YWRzbHpvbmUubmV0/L2FwcC91cGxvYWRz/LWFkc2x6b25lLm5l/dC8yMDIwLzA1L0Jh/by5qcGc" />
			</Background>
			<ImageTitle>
				<img src="/images/viewers-disney.png" />
			</ImageTitle>
			<Controls>
				<PlayButton>
					<img src="/images/play-icon-black.png" />
					<span>Play</span>
				</PlayButton>
				<TrailerButton>
					<img src="/images/play-icon-white.png" />
					<span>Trailer</span>
				</TrailerButton>
				<AddButton>
					<span>+</span>
				</AddButton>
				<GroupWatchButton>
					<img src="/images/group-icon.png" />
				</GroupWatchButton>
			</Controls>
			<SubTitle>
				2018 * 7m * Family, Fantasy, Kids, Animation
			</SubTitle>
			<Description>
				A Chinese mom who's sad when her grown up son leaves home gets another chance as motherhood when one of her dumplings springs to life. But she finds that nothing says cute and small forever.
			</Description>
		</Container>
	)
}

export default Detail

const Container = styled.div`
	min-height: calc(100v -70px);
	padding: calc(3.5vw + 5px);
	position: relative;
`

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;

	img{
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`

const Controls = styled.div`
	display: flex;
	align-items: center;
`

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	background: rgb(249, 249, 249);
	border: none;
	padding: 0px 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		background: rgb(198, 198, 198);
	}
`

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`

const AddButton = styled.button`
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	margin-right: 16px;

	span {
		font-size: 30px;
		color: white;
	}
`

const GroupWatchButton = styled(AddButton)`
	background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
	background: rgb(249, 249, 249);
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
`
