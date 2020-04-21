import React from 'react';

/* eslint-disable no-unused-vars */
import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { Search } from '../components/search';
import { Body } from '../components/body';
import { Title } from '../components/title';
import { Row } from '../components/row';
import { Col } from '../components/col';
import { ImgText } from '../components/img-text';
import { Footer } from '../components/footer';
import { Copyright } from '../components/copyright';
import { ExtraLink } from '../components/extra-link';

/* eslint-enable no-unused-vars */

export function Root() {
	const _root = 
<>
<Header>
<Menu callCopy="Please enjoy this demo site!" logoCopy="Welcome to Snow Package" logoSize="M"/>
<Search searchButtonCopy="Search!" searchExamplesCopy="iPhone, Android, Phones..." startCategory="Phones"/>
</Header>
<Body>
<Title>Need some inspiration for today?</Title>
<Row>
	<Col size="8">
		<ImgText imgURL="/img/photos/cars.png" text="Cars!" textColor="light" textSize="XL"/>
		<ImgText imgURL="/img/photos/houses.png" text="Nice apartments" textColor="light" textSize="M"/>
	</Col>
	<Col size="4">
		<ImgText imgURL="/img/photos/clothes.png" text="Clothes" textColor="white" textSize="XL"/>
		<ImgText imgURL="/img/photos/phones.png" text="Handsets" textColor="muted" textSize="L"/>
	</Col>
</Row>
</Body>
<Footer>
<Copyright legalCopy="(c) 2020 Snow package test site">
	<ExtraLink link="https://github.com/" text="Github"/>
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
