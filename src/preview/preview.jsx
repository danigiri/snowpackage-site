// PREVIEW . JSX

import { useLocation, useParams} from 'react-router-dom';

//import { Header } from '../components/header';
import { Menu } from '../components/menu';
import { Search } from '../components/search';
//import { Body } from '../components/body';
import { Title } from '../components/title';
//import { Row } from '../components/row';
//import { Col } from '../components/col';
import { ImgText } from '../components/img-text';
import { Footer } from '../components/footer';
import { Copyright } from '../components/copyright';
import { ExtraLink } from '../components/extra-link';

export function Preview(props) {

	const { component } = useParams();
	const query = useQuery(); 
	let params = {};
	query.forEach((v, k) => params[k] = v);
	//const content = { children: query.has('_VALUE') ? query.get('_VALUE') : '' };

	let preview;
	switch(component) {
		case 'Menu':
			preview = Menu(params);
		break;
		case 'Search':
			preview = new Search(params).render();
		break;
		case 'Title':
			preview = Title(params);
		break;
		case 'ImgText':
			preview = new ImgText(params).render();
		break;
		case 'Footer':
			preview = Footer(params);
		break;
		case 'Copyright':
			preview = Copyright(params);
		break;
		case 'ExtraLink':
			preview = ExtraLink(params);
		break;
	default:
		preview = '';
	}

	return  preview;

}


function useQuery() {
	return new URLSearchParams(useLocation().search);
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

