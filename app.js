#!/usr/bin/node
var _ = require('lodash');
var colors = require('colors');
var fs = require('fs');
var program = require('commander');
var twaddle = require('twaddle');
var util = require('util');

program
	.version(require('./package.json').version)
	.usage('[file or twaddle id...]')
	.option('-l, --list', 'Output the available Twaddle IDs')
	.option('-w, --words [count]', 'Try to output this many words')
	.option('-s, --sentences [count]', 'Try to output this many sentences')
	.option('-p, --paragraphs [count]', 'Try to output this many paragraphs')
	.option('--minspp, --min-sentences-per-paragraph [count]', 'Set the minimum number of sentences which make up a paragraph')
	.option('--maxspp, --max-sentences-per-paragraph [count]', 'Set the maximum number of sentences which make up a paragraph')
	.option('--noFixTrim', 'Disable the trimming of paragraphs')
	.option('--noFixCapitalFirst', 'Disable the correction of sentences to always have a leading capital letter')
	.option('-v, --verbose', 'Be verbose')
	.option('--no-color', 'Force disable color')
	.parse(process.argv);

if (program.list) {
	_(_.keys(twaddle.libraries))
		.sort()
		.forEach(function(id) {
			console.log(colors.blue(' -'), id);
		});
	console.log(colors.cyan(_.size(twaddle.libraries)), 'libraries in total');
	process.exit();
}


var tID;
if (!program.args.length) {
	console.log(colors.red('ERROR'), 'You must specify at least a file name or twaddle ID to get output');
	process.exit(1);
} else if (program.args.length == 1) {
	tID = program.args[0];
} else if (program.args.length > 1) {
	tID = program.args;
}

var options = {};
['words', 'sentences', 'paragraphs', 'minSentencesPerParagraph', 'maxSentencesPerParagraph'].forEach(function(arg) {
	if (program[arg] > 0) options[arg] = program[arg];
});

if (!program.noFixTrim) options.fixTrim = true;
if (!program.noFixCapitalFirst) options.fixCapitalFirst = true;

if (program.verbose) {
	console.log('Running Twaddle with ID', tID, 'and options', util.inspect(options, {depth: null, colors: true}));
}

console.log(twaddle.generate(tID, options));
