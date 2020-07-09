import { useState } from "react";
const useDialog = (open = false) => {
	const [isOpen, setOpen] = useState(open);

	const showDialog = () => {
		setOpen(true);
	};
	const hideDialog = () => {
		setOpen(false);
	};

	return {
		isOpen,
		showDialog,
		hideDialog,
	};
};

export default useDialog;
