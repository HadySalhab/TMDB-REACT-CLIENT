import { useState } from "react";
const useSnack = (open = false) => {
	const [isOpen, setOpen] = useState(open);

	const showSnack = () => {
		setOpen(true);
	};
	const hideSnack = () => {
		setOpen(false);
	};

	return {
		isOpen,
		showSnack,
		hideSnack,
	};
};

export default useSnack;
