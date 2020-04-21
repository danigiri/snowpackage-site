// BODY . JSX

import React from 'react';

export function Copyright(props) {

	const legalCopy = props.legalCopy;

	return	<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
				<ul className="list-group list-group-horizontal">
					<span class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{legalCopy}</span>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								{props.children}
							</li>
						</ul>
					</div>
				</ul>
			</nav>;

}