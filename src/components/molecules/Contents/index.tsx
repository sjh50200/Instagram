import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "components/atoms/Image";

interface ContentType {
	category: "search" | "profile";
	popular?: Array<string>;
	thumbnails: Array<string>;
}

const Contents: FunctionComponent<ContentType> = (props) => {
	const { category, popular, thumbnails } = props;

	return (
		<Wrapper>
			{category === "search" && (
				<>
					<TitleDiv>
						<Title>인기 게시물</Title>
					</TitleDiv>
					<Grid>
						{popular.map((value, index) => {
							return (
								<Image category="square" src={popular[index]} width="293px" />
							);
						})}
					</Grid>
					<TitleDiv>
						<Title>최근 게시물</Title>
					</TitleDiv>
				</>
			)}
			<Grid>
				{thumbnails.map((value, index) => {
					return (
						<Image category="square" src={thumbnails[index]} width="293px" />
					);
				})}
			</Grid>
		</Wrapper>
	);
};

export default Contents;

const Wrapper = styled.div``;

const TitleDiv = styled.div`
	display: flex;
	justify-content: left;
`;

const Title = styled.h2`
	color: #8e8e8e;
	font-size: 14px;
	margin-bottom: 20px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 28px;
	row-gap: 28px;
	margin-bottom: 50px;
`;
