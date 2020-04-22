// MENU . JSX

import React from 'react';

export function Menu(props) {

	const logoCopy = props.logoCopy;
	const logoSize = props.logoSize;
	const callCopy = props.callCopy;

	var logoURL;
	switch (logoSize) {
		case 'S': logoURL = '/img/snowflakeS.png'; break;
		case 'L': logoURL = '/img/snowflakeL.png'; break;
		case 'XL': logoURL = '/img/snowflakeXL.png'; break;
		default: logoURL = 'img/snowflakeM.png';
	}

	return <>
				<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
					<a className="navbar-brand" href="/">
						<img src={logoURL} className="float-left" alt="logo" />
					</a>
					<h1 className="display-4">{logoCopy}</h1>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<span className="navbar-text">{callCopy}</span>
							</li>
						</ul>
					</div>
				</nav>
			</>;

}

/*
 *	  Copyright 2020 Daniel Giribet
 *
 *	 Licensed under the Apache License, Version 2.0 (the "License");
 *	 you may not use this file except in compliance with the License.
 *	 You may obtain a copy of the License at
 *
 *		 http://www.apache.org/licenses/LICENSE-2.0
 *
 *	 Unless required by applicable law or agreed to in writing, software
 *	 distributed under the License is distributed on an "AS IS" BASIS,
 *	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	 See the License for the specific language governing permissions and
 *	 limitations under the License.
 */