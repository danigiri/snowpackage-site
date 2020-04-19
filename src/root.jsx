import React from 'react';

/* eslint-disable no-unused-vars */
import { Header } from './components/header';
import { Menu } from './components/menu';
import { Search } from './components/search';
import { Body } from './components/body';
import { Title } from './components/title';
import { Row } from './components/row';
import { Col } from './components/col';
import { ImgText } from './components/img-text';
import { Footer } from './components/footer';
import { Copyright } from './components/copyright';
import { ExtraLink } from './components/extra-link';

/* eslint-enable no-unused-vars */

export function Root() {
	const _root = 
<>
<Header>
	<Menu logoCopy="Welcome to snow package" logoSize="L" callCopy="Please enjoy this demo site! "/>
	<Search startCategory="Cars" searchButtonCopy="Search now!" searchExamplesCopy="iPhone, Android..." />
</Header>
<Body>
	<Title>Need some inspiration for today?</Title>
	<Row>
		<Col col="8">
			<ImgText text="Cars!" textSize="XL" imgURL="/img/photos/cars.png" />
			<ImgText text="Clothes" textSize="XL" imgURL="/img/photos/clothes.png" textColor="white"/>
		</Col>
		<Col col="4">
			<ImgText text="Nice apartments" textSize="M" imgURL="/img/photos/houses.png" />
			<ImgText text="Handsets" textSize="L" imgURL="/img/photos/phones.png" />
		</Col>
	</Row>
</Body>
<Footer>
	<Copyright legalCopy="(c) 2020 Snow package test site">
		<ExtraLink text="Github" link="https://github.com/" />
	</Copyright>
</Footer>
</>;
	return _root;
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
