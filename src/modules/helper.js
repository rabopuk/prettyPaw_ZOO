// debounce сокращает количество вызовов функции

export const debounce = (fn, msec) => {
	let lastCall = 0,
		lastCallTimer = 0;

	return (...arg) => {
		const prevCall = lastCall;
		lastCall = Date.now();

		if (prevCall && (lastCall - prevCall) < msec) {
			clearTimeout(lastCallTimer);
		}

		lastCallTimer = setTimeout(() => fn(...arg), msec);
	};
};

