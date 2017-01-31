import React, { Component } from 'react';
import description from './description';
import Projects from './projects';
import About from './about';
import Skills from './skills';

export default () => {
	return (
		<div className="app">
			<div className="name"><h1><span>monika</span><br /> zarako-dobrowner</h1></div>
				<About />
				<Skills />
				<Projects />
		</div>
	)
}
