import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; 
import DummyData from '../../../../Dummy/DummyData';
import {Link} from "react-router-dom"; 

const SeasonBlogContainer = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

const Tags = styled.div`
  text-align: center;
  padding: 20px 0px;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  padding-bottom: 70px;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
> div {
	padding: 5px;
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 2px;
	}
`;

const SetBlogH4 = styled.h4`
	font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
	margin-bottom: 5px;
	margin-left: 3px;
`;

const SetBlogP = styled.p`
	font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
	margin-bottom: 3px;
	margin-left: 3px;
`;

const Tag = styled.button`
outline: none;
border: none;
color: #eee;
margin: 0px 10px;
background-color: transparent;
cursor: pointer;
padding: 20px 0;
> p {
	font-size: 22px;
	margin-right: 30px;
	margin-left: 30px;
	color: #13294b;
	font-weight: bold;
}
`;

const MainPage = () => {
	const [season, setTag] = useState('spring');
	const [filteredImages, setFilteredImages] = useState([]);
	useEffect(() => {
		const filterBox = DummyData.filter((ele) => {
			if(ele.data) {
				return ele.data.season === season
			}
		})
		setFilteredImages(filterBox);
	}, [season])

	return (
		<SeasonBlogContainer>
			<Tags>
				<TagButton name="spring" handleSetTag={setTag} /> 
				<TagButton name="summer" handleSetTag={setTag} /> 
				<TagButton name="fall" handleSetTag={setTag} /> 
				<TagButton name="winter" handleSetTag={setTag} />
			</Tags>
			
			<Container>
					{filteredImages.map((el, i) => (
						<Link to={`/post/${el.id}`} style={{overflow: "hidden"}}>
							<div key={i} className="image-card">
								<img className="image" style={{height: "230px"}}  src={el.url} alt="" />    
								<SetBlogH4>{el.title}</SetBlogH4>
								<SetBlogP>{el.postcontents}</SetBlogP>                        
							</div>
						</Link>	
					))}
			</Container>                    
		</SeasonBlogContainer>
	);
}

const TagButton = ({ name, handleSetTag }) => {
	return (
		<Tag onClick={() => handleSetTag(name)}>
			<p>{name.toUpperCase()}</p>
		</Tag>
	);
};

export default MainPage;