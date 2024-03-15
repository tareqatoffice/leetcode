var cancellable = function (fn, args, t) {
	var timeout = setTimeout(() => fn(...args), t);
	var cancelFn = function () {
		clearTimeout(timeout);
	};
	return cancelFn;
};

const cancellable = (fn, args, t) => {
	const timeout = setTimeout(() => fn(...args), t);
	return () => clearTimeout(timeout);
};
