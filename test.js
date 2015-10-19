import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';

test(async t => {
	const stdout = await pify(childProcess.execFile)('./cli.js', ['sindresorhus'], {cwd: __dirname});
	t.is(stdout.trim().split('\n')[0], 'Name: Sindre Sorhus');
});
