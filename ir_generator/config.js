'use strict';

const config = {
	devices: {
		acer_tv: {
			name: 'acer_tv',
			class: 'tv',
			icon: './assets/remote.svg',
			images: {
				small: './assets/images/small.jpg',
				large: './assets/images/large.jpg',
			},
			capabilities: ['onoff', 'volume_mute', 'volume_up', 'volume_down', 'channel_up', 'channel_down'],
			capabilityToCommandMap: {
				onoff: 'POWER_TOGGLE',
				volume_mute: 'MUTE_TOGGLE',
				volume_up: 'VOLUME_UP',
				volume_down: 'VOLUME_DOWN',
				channel_up: 'CHANNEL_UP',
				channel_down: 'CHANNEL_DOWN',
			},
			signal: {
				id: 'acer_tv',
				type: 'prontohex',
		        sof: [9000, 4500],
		        eof: [563],
		        words: [
		            [562, 563],
		            [562, 1688]
		        ],
		        packing: true,
		        prefixData: [134, 198],
		        repetitions: 5,
		        options: {
		          cmdNumberPrefix: "DIGIT_",
		          minTxInterval: 250
		        },
		        cmds: {
		          POWER_TOGGLE             :[0x80, 0x7F],
		          MUTE_TOGGLE              :[0x78, 0x87],
		          SRC_TV                   :[0x30, 0xCF],
		          SRC_PC                   :[0x24, 0xDB],
		          SRC_AV                   :[0x44, 0xBB],
		          SRC_SCART                :[0xC4, 0x3B],
		          SLEEP                    :[0x04, 0xFB],
		          ZOOM                     :[0x64, 0x9B],
		          DIGIT_0                  :[0x58, 0xA7],
		          DIGIT_1                  :[0x88, 0x77],
		          DIGIT_2                  :[0x48, 0xB7],
		          DIGIT_3                  :[0xC8, 0x37],
		          DIGIT_4                  :[0x28, 0xD7],
		          DIGIT_5                  :[0xA8, 0x57],
		          DIGIT_6                  :[0x68, 0x97],
		          DIGIT_7                  :[0xE8, 0x17],
		          DIGIT_8                  :[0x18, 0xE7],
		          DIGIT_9                  :[0x98, 0x67],
		          AGAIN                    :[0x38, 0xC7],
		          ENTER                    :[0xA4, 0x5B],
		          MENU                     :[0xF8, 0x07],
		          UP                       :[0x02, 0xFD],
		          DOWN                     :[0x22, 0xDD],
		          RIGHT                    :[0xC2, 0x3D],
		          LEFT                     :[0x82, 0x7D],
		          OK                       :[0x42, 0xBD],
		          VOLUME_UP                :[0x20, 0xDF],
		          VOLUME_DOWN              :[0xA0, 0x5F],
		          CHANNEL_UP               :[0x40, 0xBF],
		          CHANNEL_DOWN             :[0xC0, 0x3F],
		          SUBTITLE                 :[0x92, 0x6D],
		          TEXT                     :[0x52, 0xAD],
		          SUBTITLE                 :[0x94, 0x6B],
		          RED                      :[0x5C, 0xA3],
		          GREEN                    :[0xDC, 0x23],
		          YELLOW                   :[0x3C, 0xC3],
		          BLUE                     :[0xBC, 0x43],
		          display                  :[0x60, 0x9F],
		          wide                     :[0xE0, 0x1F],
		          srs                      :[0x84, 0x7B],
		          ebutton                  :[0xA6, 0x59],
		          pip                      :[0x00, 0xFF],
		          swap                     :[0x70, 0x8F],
		          active                   :[0x90, 0x6F],
		          position                 :[0xB0, 0x4F],
		          sizemode                 :[0x08, 0xF7],
		          index                    :[0xF0, 0x0F],
		          reveal                   :[0xD2, 0x2D],
		          size                     :[0xD0, 0x2F],
		          mix                      :[0x14, 0xEB],
		          hold                     :[0x62, 0x9D],
		          mpx                      :[0xE4, 0x1B],
		        }
			},
			actions: [
				{
					id: 'send_cmd',
					title: 'ir_generator.flow.send_cmd',
					args: [
						{
							name: 'cmd',
							type: 'autocomplete',
						},
					],
				},
				{
					id: 'send_cmd_number',
					title: 'ir_generator.flow.send_cmd_number',
					args: [
						{
							name: 'number',
							type: 'number',
							min: '0',
							max: '9999',
						},
					],
				},
			],
			pair: {
				viewOrder: ['generic_check_device', 'generic_done'],
			},
		},
	},
};

module.exports = config;
