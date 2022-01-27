function sym(...args) {
	let values = args.flat(Infinity);
	let objs = [];
	for (let i = 0; i < args.length; i++) {
		objs[i] = args[0].reduce((a, v) => ({ ...a, [v]: v }), {});
	}

	return objs;
}
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
