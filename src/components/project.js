import React from 'react';

export default (props) => {
	return (
		<div className="project">
			<div className="image-overlay-container">
				<div className="image-div">
					<img className="image" src={props.image} />
				</div>
				<div className="overlay">
					<h1>{props.title}</h1>
				</div>
			</div>
			<div className="project-text">
				<p>{props.description}</p>
				<h4>CONTRIBUTION</h4>
				<p>{props.contribution}</p>
				<div className="links">
					<div className="button"><a href={props.site}>SITE</a></div>
					{props.code ? <div className="button"><a href={props.code}>CODE</a></div> : ""}
				</div>
			</div>
		</div>
		);
}
