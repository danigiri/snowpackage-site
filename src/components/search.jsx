// MENU . JSX

import React from 'react';

export class Search extends React.Component {

constructor(props) {

	super(props);

	this.startCategory = props.startCategory;
	this.searchButtonCopy = props.searchButtonCopy;
	this.searchExamplesCopy = props.searchExamplesCopy ? props.searchExamplesCopy : '';

	this.state = {searchCategory: this.startCategory};

}

handleChange(event) {
	this.setState({searchCategory: event.target.value});
}

render() {

	return <>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<form className="form-inline">
								<div className="row">
									<div className="col">
										<select id="category" 
												className="form-control"
												value={this.state.searchCategory} 
												onChange={this.handleChange}
										>
											<option>Cars</option>
											<option>Houses</option>
											<option>Clothes</option>
											<option>Phones</option>
											<option>Furniture</option>
											<option>Misc</option>
										</select>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<input 	className="form-control" 
												type="text" 
												placeholder={this.searchExamplesCopy} />
									</div>
								</div>
								<div className="row">
									<div className="col">
										<button
											className="btn btn-sm btn-outline-secondary" 
											type="button"
										>{this.searchButtonCopy}</button>
									</div>
								</div>
							</form>
						</ul>
					</div>
				</nav>
			</>;
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