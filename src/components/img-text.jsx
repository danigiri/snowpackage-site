// MENU . JSX

import React from 'react';

export class ImgText extends React.Component {

constructor(props) {

	super(props);

	this.text = props.text;
	const textClass = 'card-title text-'+(props.textColor ? props.textColor : 'dark');
	switch (props.textSize) {
		case 'S': this.finalText = <h5 className={textClass}>{this.text}</h5>; break;
		case 'L': this.finalText = <h4 className={textClass}>{this.text}</h4>; break;
		case 'XL': this.finalText = <h2 className={textClass}>{this.text}</h2>; break;
		default: this.finalText = <h3 className={textClass}>{this.text}</h3>;
	}
	this.imgURL = props.imgURL;

}


render() {
	return	<div className="card text-{this.textColor}">
				<img 	className="card-img img-white" 
						src={this.imgURL} 
						alt={this.text}
						style={{filter: 'blur(1px)', }}/>
				<div className="card-img-overlay">{this.finalText}</div>
			</div>;
}


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