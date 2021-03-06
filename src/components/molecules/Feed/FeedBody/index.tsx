import React, { FunctionComponent } from "react";
import Image from "components/atoms/Image";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface FeedBodyProps {
	src: any;
}

const PrevArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "lightgreen",
				marginLeft: "5%",
				zIndex: 1,
				borderRadius: "50%",
			}}
			onClick={onClick}
		/>
	);
};

const NextArrow = (props: any) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "lightgreen",
				marginRight: "5%",
				zIndex: 1,
				borderRadius: "50%",
			}}
			onClick={onClick}
		/>
	);
};

const FeedBody: FunctionComponent<FeedBodyProps> = (props) => {
	const { src } = props;
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
	};
	return (
		<Container>
			<StyledSlider {...settings}>
				{src.map((image: { key: string }, index: number) => {
					const imageUrl =
						"https://sgsncns130837-dev.s3.ap-northeast-2.amazonaws.com/public/" +
						image.key;
					return (
						<Image
							src={imageUrl}
							key={index}
							category={"rectangle"}
							width="612px"
						/>
					);
				})}
			</StyledSlider>
		</Container>
	);
};

const Container = styled.div``;

const StyledSlider = styled(Slider)`
	padding: 0 0;
	width: 100%;
	background-color: black;
	.slick-slide .slidecontainer {
		display: inline-block;
		vertical-align: middle;
		float: none;
	}
	.slick-track {
		position: relative;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
	}
`;
export default FeedBody;
