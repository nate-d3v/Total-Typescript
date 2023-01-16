//Typing Functions
const addListener = (onFocusChange: FocusListener) => {
	window.addEventListener('focus', () => {
		onFocusChange(true);
	});

	window.addEventListener('blur', () => {
		onFocusChange(false);
	});
};

type FocusListener = (isFocused: boolean) => void;
