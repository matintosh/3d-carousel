const baseUnit = 8;

const px = (n) => {
	return n + 'px';
}

const unit = (n) => {
	return px(n * baseUnit);
}

const list = [
	'largest',
	'larger',
	'normal',
	'smaller',
	'smallest'
]

const size = {
	/**
	 * Global Units
	 */
	zero:					0,
	unit:					unit(1),
	line: {
		mxl:				unit(.5),
		ml:					unit(.375),
		ms:					unit(.25),
		mxs:				unit(.125)
	},
	border:	{
		mxl:				unit(.25),
		ml:					unit(.25),
		ms:					unit(.125),
		mxs:				unit(.125)
	},
	inherit:				'inherit',
	full:	 				'100%',
	radius: {
		largest: 			unit(4),
		larger: 			unit(3.5),
		normal: 			unit(3),
		smaller: 			unit(2),
		smallest: 			unit(1.5)
	},
	/**
	 * Grid
	 */
	gutter: {
		largest: {
			mxl:			40,
			ml:				36,
			ms:				34,
			mxs:			32
		},
		larger: {
			mxl:			32,
			ml:				28,
			ms:				26,
			mxs:			24
		},
		normal: {
			mxl:			24,
			ml:				20,
			ms:				18,
			mxs:			16
		},
		smaller: {
			mxl:			16,
			ml:				12,
			ms:				10,
			mxs:			8
		},
		smallest: {
			mxl:			8,
			ml:				6,
			ms:				4,
			mxs:			0
		},
	},
	columns: {
		mxl:				12,
		ml:					8,
		ms:					6,
		mxs:				4
	},
	container: {
		largest: 			unit(320),
		larger: 			unit(240),
		normal: 			unit(160),
		smaller: 			unit(120),
		smallest: 			unit(80),
	},
	sectionPadd: {
		largest: {
			mxl:			unit(20),
			ml:				unit(18),
			ms:				unit(16),
			mxs:			unit(14)
		},
		larger: {
			mxl:			unit(14),
			ml:				unit(13),
			ms:				unit(11),
			mxs:			unit(10),
		},
		normal: {
			mxl:			unit(10),
			ml:				unit(9),
			ms:				unit(8),
			mxs:			unit(7),
		},
		smaller: {
			mxl:			unit(7),
			ml:				unit(6),
			ms:				unit(5),
			mxs:			unit(4),
		},
		smallest: {
			mxl:			unit(4),
			ml:				unit(3),
			ms:				unit(2),
			mxs:			unit(1)
		}
	},
	/**
	 * Modals
	 */
	modal: {
		largest: 			unit(140),
		larger: 			unit(120),
		normal: 			unit(100),
		smaller: 			unit(80),
		smallest: 			unit(60),
	},
	videoModal: {
		normal: 			unit(92)
	},
	/**
	 * Distance
	 */
	margin: {
		largest: {
			mxl:			unit(5),
			ml:				unit(4.5),
			ms:				unit(4),
			mxs:			unit(3.5)
		},
		larger: {
			mxl:			unit(4),
			ml:				unit(3.5),
			ms:				unit(3),
			mxs:			unit(2.5)
		},
		normal: {
			mxl:			unit(3),
			ml:				unit(2.5),
			ms:				unit(2),
			mxs:			unit(1.5)
		},
		smaller: {
			mxl:			unit(2),
			ml:				unit(1.666),
			ms:				unit(1.333),
			mxs:			unit(1)
		},
		smallest: {
			mxl:			unit(1),
			ml:				unit(.75),
			ms:				unit(.5),
			mxs:			unit(.25)
		}
	},
	/**
	 * Font Sizes
	 */
	/* Headlines: */
	h1:	{
		text: {
			mxl:			unit(7),
			ml:				unit(6),
			ms:				unit(5),
			mxs:			unit(4)
		},
		lineHeight:			1.14 // unit(8)
	},
	h2:	{
		text: {
			mxl:			unit(6),
			ml:				unit(5),
			ms:				unit(4),
			mxs:			unit(3)
		},
		lineHeight:			1.17 // unit(7)
	},
	h3:	{
		text: {
			mxl:			unit(5),
			ml:				unit(4),
			ms:				unit(3),
			mxs:			unit(2.5)
		},
		lineHeight:			1.20 // unit(6)
	},
	h4:	{
		text: {
			mxl:			unit(4),
			ml:				unit(3),
			ms:				unit(2.5),
			mxs:			unit(2)
		},
		lineHeight:			1.25 // unit(5)
	},
	h5:	{
		text: {
			mxl:			unit(3),
			ml:				unit(2.5),
			ms:				unit(2),
			mxs:			unit(1.75)
		},
		lineHeight: 		1.33 // unit(4)
	},
	h6:	{
		text: {
			mxl:			unit(2),
			ml:				unit(1.75),
			ms:				unit(1.5),
			mxs:			unit(1.5)
		},
		lineHeight:			1.50 // unit(3)
	},
	/* Paragraph: */
	p: {
		largest: {
			text: {
				mxl: 		unit(2.5),
				ml: 		unit(2.25),
				ms: 		unit(2),
				mxs: 		unit(1.75)
			},
			lineHeight:  	1.50
		},
		larger: {
			text: {
				mxl: 		unit(2.25),
				ml: 		unit(2),
				ms: 		unit(1.75),
				mxs: 		unit(1.625)
			},
			lineHeight: 	1.56
		},
		normal: {
			text: {
				mxl:		unit(2),
				ml:			unit(1.75),
				ms:			unit(1.625),
				mxs:		unit(1.5)
			},
			lineHeight: 	1.50
		},
		smaller: {
			text: {
				mxl: 		unit(1.75),
				ml: 		unit(1.625),
				ms: 		unit(1.5),
				mxs: 		unit(1.375)
			},
			lineHeight: 	1.43
		},
		smallest: {
			text: {
				mxl: 		unit(1.625),
				ml: 		unit(1.5),
				ms: 		unit(1.375),
				mxs: 		unit(1.25)
			},
			lineHeight: 	1.50
		}
	},
	/* Labels */
	label: {
		mxl: 				unit(1.75),
		ml: 				unit(1.625),
		ms: 				unit(1.5),
		mxs: 				unit(1.375)
	},
	/**
	 * Buttons:
	 */
	buttonPaddings: {
		largest: {
			mxl: 			px(16) + ' ' + px(38),
			ml: 			px(14) + ' ' + px(34),
			ms: 			px(13) + ' ' + px(31),
			mxs: 			px(12) + ' ' + px(27)
		},
		larger: {
			mxl: 			px(13) + ' ' + px(30),
			ml: 			px(11) + ' ' + px(26),
			ms: 			px(10) + ' ' + px(23),
			mxs: 			px(8.5) + ' ' + px(21)
		},
		normal: {
			mxl: 			px(10) + ' ' + px(22),
			ml: 			px(8) + ' ' + px(18),
			ms: 			px(7.5) + ' ' + px(17),
			mxs: 			px(7) + ' ' + px(15)
		},
		smaller: {
			mxl: 			px(7) + ' ' + px(14),
			ml: 			px(4.5) + ' ' + px(12),
			ms: 			px(5) + ' ' + px(11),
			mxs: 			px(3.5) + ' ' + px(9)
		},
		smallest: {
			mxl: 			px(3.5) + ' ' + px(6),
			ml: 			px(2) + ' ' + px(6),
			ms: 			px(2.5) + ' ' + px(5),
			mxs: 			px(2) + ' ' + px(5)
		}
	},
	/**
	 * Icons:
	 */
	icon: {
		largest: {
			mxl:			px(40),
			ml:				px(36),
			ms:				px(34),
			mxs:			px(32)
		},
		larger: {
			mxl: 			px(32),
			ml: 			px(28),
			ms: 			px(26),
			mxs:			px(24)
		},
		normal: {
			mxl: 			px(24),
			ml: 			px(20),
			ms: 			px(18),
			mxs:			px(16)
		},
		smaller: {
			mxl: 			px(16),
			ml: 			px(14),
			ms: 			px(12),
			mxs:			px(10)
		},
		smallest: {
			mxl: 			px(10),
			ml: 			px(8),
			ms: 			px(6),
			mxs:			px(4)
		}
	},
	avatar: {
		largest: {
			size: {
				mxl:		unit(10),
				ml:			unit(8.666),
				ms:			unit(8.333),
				mxs:		unit(8)
			},
			text: {
				mxl:		unit(4),
				ml:			unit(3.75),
				ms:			unit(3.5),
				mxs:		unit(3.25)
			}
		},
		larger: {
			size: {
				mxl: 		unit(8),
				ml: 		unit(6.666),
				ms: 		unit(6.333),
				mxs:		unit(6)
			},
			text: {
				mxl: 		unit(3.5),
				ml: 		unit(3.25),
				ms: 		unit(3),
				mxs:		unit(2.75)
			}
		},
		normal: {
			size: {
				mxl: 		unit(6),
				ml: 		unit(4.666),
				ms: 		unit(4.333),
				mxs:		unit(4)
			},
			text: {
				mxl: 		unit(3),
				ml: 		unit(2.75),
				ms: 		unit(2.5),
				mxs:		unit(2.25)
			}
		},
		smaller: {
			size: {
				mxl: 		unit(4),
				ml: 		unit(2.666),
				ms: 		unit(2.333),
				mxs:		unit(2)
			},
			text: {
				mxl: 		unit(2.5),
				ml: 		unit(2.25),
				ms: 		unit(2),
				mxs:		unit(1.75)
			}
		},
		smallest: {
			size: {
				mxl: 		unit(2),
				ml: 		unit(1.666),
				ms: 		unit(1.333),
				mxs:		unit(1)
			},
			text: {
				mxl: 		unit(2),
				ml: 		unit(1.75),
				ms: 		unit(1.5),
				mxs:		unit(1.25)
			}
		}
	},
	/**
	 * Components
	 */
	header: {
		mxl:				unit(9),
		ml:					unit(8),
		ms:					unit(7),
		mxs:				unit(6),
	}
}

const weight = {
	/**
	 * Font Weights
	 */
	bold:				   	700,
	regular:				400
}

const media = {
	/**
	 * Breakpoint naming comes from the grid system we use.
	 * Default max-columns gets verbouse in each display mode.
	 *
	 * Breakpoint 	Purpose
	 * default: 	laptops
	 */
	/* max-width for Tablet-landscape (and smaller) */
	largest:				`(max-width: ${unit(150)})`,
	/* max-width for Tablet-portrait (and smaller) */
	larger:					`(max-width: ${unit(124)})`,
	/* max-width for Mobile-landscape (and smaller) */
	smaller:				`(max-width: ${unit(96)})`,
	/* max-width for Mobile-portrait (and smaller) */
	smallest:				`(max-width: ${unit(60)})`
}

/**
 * for docz compatibility
 */
module.exports = {
	media: media,
	size: size,
	list: list,
	weight: weight,
	unit: unit,
	px: px
};
