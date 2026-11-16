# miyapad-test-plugin

A small plugin for testing [Miyapad](https://github.com/LordFoogThe4rd/miyapad)'s Plugins tab.

It counts how many times it has started, replaces `{{test}}` in prompts with `the test plugin is working`, logs the length of each generation to the console, and adds `Test plugin: started N time(s)` to the quick switcher's commands.

## Install

Preferences → Plugins → **Import from URL…**, with this address:

```
https://raw.githubusercontent.com/LordFoogThe4rd/miyapad-test-plugin/main/miyapad-test-plugin.js
```

The plugin is named after the file, `miyapad-test-plugin`. Import it, switch it on, then reload.

To test updates, change anything in `miyapad-test-plugin.js` here and press **Update** on the plugin's row in Miyapad.
