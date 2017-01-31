import React from 'react';
import Project from './project';
import description from './description';
import CAimg from '../../images/ca.png';
import MMimg from '../../images/mm.png';
import LUimg from '../../images/lu.png';
import PMHimg from '../../images/pmh.png';
import BHSimg from '../../images/bhs.png';


export default (props) => {
	return (
			<div className="projects section">
				<h3>Here's what I've made:</h3>
				<Project title="mindful moments" image={MMimg} description={description.mm} contribution="UI, UX, React, LESS, copy" site="https://vast-reef-93477.herokuapp.com" code="https://github.com/mzarako/mindful-moments" />
				<Project title="cellular automaton" image={CAimg} description={description.ca} contribution="UI, UX, React, LESS, copy" site="https://jdobrowner.github.io/automaton" code="https://github.com/jdobrowner/automaton" />
				<Project title="learn ukulele" image={LUimg} description={description.lu} contribution="UI, UX, jQuery, CSS" site="https://jdobrowner.github.io/learn-ukulele/" code="https://github.com/jdobrowner/learn-ukulele" />
				<Project title="poem me happy" image={PMHimg} description={description.pmh} contribution="UI, UX, jQuery, NodeJS, Express, REST API, CSS" site="https://limitless-lowlands-69660.herokuapp.com" code="https://github.com/mzarako/acrostic" />
				<Project title="brighton hall school" image={BHSimg} description={description.bhs} contribution="UX, copy" site="http://www.brightonhallschool.org/" />
			</div>
		);
}
