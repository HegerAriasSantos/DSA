let rating = function (votes) {
	let assistence = 0;
	let classAgain = 0;
	let clarity = 0;

	for (let index = 0; index < votes.length; index++) {
		let { scoreAssitance, scoreClassAgain, scoreClarity } = votes[index];
		assistence += scoreAssitance * 20;
		classAgain += scoreClassAgain * 20;
		clarity += scoreClarity * 20;
	}
	assistence = Math.floor(assistence / votes.length);
	classAgain = Math.floor(classAgain / votes.length);
	clarity = Math.floor(clarity / votes.length);
	return { assistence, classAgain, clarity };
};

let votes = [
	{
		scoreAssitance: 5,
		scoreClassAgain: 1,
		scoreClarity: 5,
	},
	{
		scoreAssitance: 2,
		scoreClassAgain: 5,
		scoreClarity: 5,
	},
	{
		scoreAssitance: 3,
		scoreClassAgain: 5,
		scoreClarity: 5,
	},
];
console.log(rating(votes));
