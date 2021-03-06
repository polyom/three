import { Config } from "@polyom/engine";

export const tetromino: Config = {
	size: [10, 20],
	spawns: [
		[3, 0],
		[3, -1],
		[3, -2],
		[3, -3],
	],
	kicks: {
		I: [
			{
				left: [
					[0, 0],
					[-1, 0],
					[2, 0],
					[-1, 2],
					[2, -1],
				],
				right: [
					[0, 0],
					[-2, 0],
					[1, 0],
					[-2, -1],
					[1, 2],
				],
			},
			{
				left: [
					[0, 0],
					[2, 0],
					[-1, 0],
					[2, 1],
					[-1, -2],
				],
				right: [
					[0, 0],
					[-1, 0],
					[2, 0],
					[-1, 2],
					[2, -1],
				],
			},
			{
				left: [
					[0, 0],
					[1, 0],
					[-2, 0],
					[1, -2],
					[-2, 1],
				],
				right: [
					[0, 0],
					[2, 0],
					[-1, 0],
					[2, 1],
					[-1, -2],
				],
			},
			{
				left: [
					[0, 0],
					[-2, 0],
					[1, 0],
					[-2, -1],
					[1, 2],
				],
				right: [
					[0, 0],
					[1, 0],
					[-2, 0],
					[1, -2],
					[-2, 1],
				],
			},
		],
		JLTSZ: [
			{
				left: [
					[0, 0],
					[1, 0],
					[1, 1],
					[0, -2],
					[1, -2],
				],
				right: [
					[0, 0],
					[-1, 0],
					[-1, 1],
					[0, -2],
					[-1, -2],
				],
			},
			{
				left: [
					[0, 0],
					[1, 0],
					[1, -1],
					[0, 2],
					[1, 2],
				],
				right: [
					[0, 0],
					[1, 0],
					[1, -1],
					[0, 2],
					[1, 2],
				],
			},
			{
				left: [
					[0, 0],
					[-1, 0],
					[-1, 1],
					[0, -2],
					[-1, -2],
				],
				right: [
					[0, 0],
					[1, 0],
					[1, 1],
					[0, -2],
					[1, -2],
				],
			},
			{
				left: [
					[0, 0],
					[-1, 0],
					[-1, -1],
					[0, 2],
					[-1, 2],
				],
				right: [
					[0, 0],
					[-1, 0],
					[-1, -1],
					[0, 2],
					[-1, 2],
				],
			},
		],
		O: [
			{ left: [[0, 0]], right: [[0, 0]] },
			{ left: [[0, 0]], right: [[0, 0]] },
			{ left: [[0, 0]], right: [[0, 0]] },
			{ left: [[0, 0]], right: [[0, 0]] },
		],
	},
	pieces: [
		{
			shape: [
				[0, 0, 0, 0],
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			],
			kicks: "I",
		},
		{
			shape: [
				[1, 0, 0],
				[1, 1, 1],
				[0, 0, 0],
			],
			kicks: "JLTSZ",
		},
		{
			shape: [
				[0, 0, 1],
				[1, 1, 1],
				[0, 0, 0],
			],
			kicks: "JLTSZ",
		},
		{
			offset: [1, 0],
			shape: [
				[1, 1],
				[1, 1],
			],
			kicks: "O",
		},
		{
			shape: [
				[0, 1, 1],
				[1, 1, 0],
				[0, 0, 0],
			],
			kicks: "JLTSZ",
		},
		{
			shape: [
				[0, 1, 0],
				[1, 1, 1],
				[0, 0, 0],
			],
			kicks: "JLTSZ",
		},
		{
			shape: [
				[1, 1, 0],
				[0, 1, 1],
				[0, 0, 0],
			],
			kicks: "JLTSZ",
		},
	],
};
