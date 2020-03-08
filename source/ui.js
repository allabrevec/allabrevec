'use strict';
const path = require('path');
const React = require('react');
const {Box, Text} = require('ink');
const SelectInput = require('ink-select-input').default;
const open = require('open');
const terminalImage = require('terminal-image');

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const createItems = items => {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
};

const items = createItems([
	{
		label: 'WebSite',
		url: 'http://allabrevec.tokyo'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/allabrevec'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/allabrevec'
	},
	{
		label: 'Blog',
		url: 'https://allabrevec.hatenablog.com/'
	},
	{
		label: '(=ﾟωﾟ)ﾉ',
		async action() {
			console.log(await terminalImage.file(path.join(__dirname, '../image/rainbow.png')));
		}
	},
	{
		label: '---------'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]);

module.exports = () => (
	<Box flexDirection="column">
		<Box marginTop={1} marginBottom={1}>
			<Text>私たちは3人で掛け替えのないワルツを踊る。</Text>
		</Box>
		<Box marginBottom={1}>
			<Text>by Yuri, Chojuku, Ms.Izumi</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
