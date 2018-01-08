'use strict';
/* eslint-disable */
const config = {
	name: 'acer_tv',
	class: 'tv',
	icon: '../../ir_generator/assets/remote.svg',
	images: {
		small: '../../ir_generator/assets/images/small.jpg',
		large: '../../ir_generator/assets/images/large.jpg'
	},
	capabilities: ['onoff',
		'volume_mute',
		'volume_up',
		'volume_down',
		'channel_up',
		'channel_down'
	],
	capabilityToCommandMap: {
		onoff: 'POWER_TOGGLE',
		volume_mute: 'MUTE_TOGGLE',
		volume_up: 'VOLUME_UP',
		volume_down: 'VOLUME_DOWN',
		channel_up: 'CHANNEL_UP',
		channel_down: 'CHANNEL_DOWN'
	},
	signal: 'acer_tv',
	actions: [{
		id: 'acer_tv:send_cmd',
		title: 'ir_generator.flow.send_cmd',
		args: [{
			name: 'cmd',
			type: 'autocomplete'
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=acer_tv'
		}]
	}, {
		id: 'acer_tv:send_cmd_number',
		title: 'ir_generator.flow.send_cmd_number',
		args: [{
			name: 'number',
			type: 'number',
			min: '0',
			max: '9999'
		}, {
			name: 'device',
			type: 'device',
			filter: 'driver_id=acer_tv'
		}]
	}],
	pair: {
		viewOrder: ['generic_check_device', 'generic_done'],
		views: [{
			template: '../lib/pair/check_device.html',
			options: {
				title: 'views.generic_done.title',
				device_exists_message: 'views.generic_check_device.device_exists_message',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_check_device'
		}, {
			template: '../lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	id: 'acer_tv',
	driver: '../lib/ir/driver',
	signalDefinition: {
		id: 'acer_tv',
		repetitions: 1,
		options: {
			cmdNumberPrefix: 'DIGIT_',
			minTxInterval: 250
		},
		cmds: [
		  "POWER_TOGGLE",
		  "MUTE_TOGGLE",
		  "SRC_TV",
		  "SRC_PC",
		  "SRC_AV",
		  "SRC_SCART",
		  "SLEEP",
		  "ZOOM",
		  "DIGIT_0",
		  "DIGIT_1",
		  "DIGIT_2",
		  "DIGIT_3",
		  "DIGIT_4",
		  "DIGIT_5",
		  "DIGIT_6",
		  "DIGIT_7",
		  "DIGIT_8",
		  "DIGIT_9",
		  "AGAIN",
		  "ENTER",
		  "MENU",
		  "UP",
		  "DOWN",
		  "RIGHT",
		  "LEFT",
		  "OK",
		  "VOLUME_UP",
		  "VOLUME_DOWN",
		  "CHANNEL_UP",
		  "CHANNEL_DOWN",
		  "SUBTITLE",
		  "TEXT",
		  "RED",
		  "GREEN",
		  "YELLOW",
		  "BLUE",
		  "display",
		  "wide",
		  "srs",
		  "ebutton",
		  "pip",
		  "swap",
		  "active",
		  "position",
		  "sizemode",
		  "index",
		  "reveal",
		  "size",
		  "mix",
		  "hold",
		  "mpx"
		],
		parseCmd: undefined
	}
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(),
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);
