// EXPERIMENT . JSX


export function Experiment(props) {

	const children = props.children ? props.children : [];
	//const variant = props._variant;
	const variant = Math.random() < 0.5

	const A = children.length > 0 ? children[0] : '';
	const B = children.length>1 ? children[1] : children[0];	// if we only have one child we do an A|A

	if (variant) {
		return B;
	}

	return A;

}