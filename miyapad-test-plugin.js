// A test plugin for Miyapad's Plugins tab: it counts its starts, replaces {{test}} in prompts,
// logs each generation, and adds a command to the quick switcher.
// @miyapad-min 2.9.0
// @miyapad-start-timeout 5
// @miyapad-hook-timeout 10

const { hooks, storage, settings } = miyapad;

const starts = ((await storage.get('starts')) ?? 0) + 1;
await storage.set('starts', starts);
console.log(`[miyapad-test-plugin] started ${starts} time(s) on Miyapad ${miyapad.version}`);

hooks.prompt.push(prompt => prompt.replaceAll('{{test}}', 'the test plugin is working'));

hooks.output.push((text, { complete }) => {
	console.log(`[miyapad-test-plugin] output: ${text.length} characters, complete: ${complete}`);
});

hooks.commands.push({
	label: `Test plugin: started ${starts} time(s)`,
	action: () => alert(`The test plugin has started ${starts} time(s).\nModel: ${settings.endpointModel ?? 'not set'}`),
});
