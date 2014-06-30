# project-settings
> pjs-project-settings is a global npm package that helps other pjs projects keep their build process up to date. 

## Installation
Install pjs-project-settings globally.

```shell
$ npm i pjs-project-settings -g
```

Then run pjs-project-settings from the directory you want to update. 

It will override your Gruntfile.js and add a directory called grunt/tasks and grunt/settings.

You'll be prompted for every override, except for settings, which should be kept up to date. 

If you have an existing Gruntfile and want to preserve some of your tasks, try using [grunt-generate-configs](https://github.com/creynders/grunt-generate-configs) with -js option. `generate_configs -js` from the directory of your project. Then copy the output to the grunt/tasks as you see fit.

Once you're set up, make sure the grunt tasks are installed and listed in your package.json under devDependencies.

## Grunt tasks

### Basic tasks

* `clean` Removes files and directories.
* `copy` Copies files and directories.
* `jsbeautifier` Beautifies js files
* `jshint` Lints js for errors.
* `replace` Replaces template vars
* `rig` Combines js files (like concat but better).
* `uglify` Minifies js files
* `watch` Watches for changes and runs tasks when they change, usually the `default` task.

### More specific

* `bump` Bump the version in the package.json and the bower.json. Example: `grunt bump --level minor`.
* `githooks` pre-commit: Make sure js files are beautified according to p-js conventions. Build a release, and add the dist folder.

### Troubleshooting

You must have the grunt tasks installed. 
For example, if you get the warning:
> Warning: Task "jsbeautifier" not found. Use --force to continue.

Run: 
```shell
npm i grunt-jsbeautifier --save-dev
```

### Aliases

This changes often per project, but the most basic `default` grunt task list and `release` grunt task list are included in `grunt/tasks/aliases.yml`.

* default: `clean`, `jshint:devel`, `rig`, `replace`, `copy`
* release: `clean`, `jshint:release`, `rig`, `replace`, `copy`, `uglify`

### Linting

In grunt/settings you'll find jshint.json and jshint-dev.json. jshint.json is used for release builds, and jshint-dev.json is used for dev builds while you're editing your code.

In dev mode, the differences are:

- you can skip semicolons (asi = false).
- you can have trailing whitespace (trailing = false). 
- you can use debug statements (debug = true).
- you can use console and alert (devel = true).
- no indent enforced (indent options removed).

For a quick overview of the current settings see [here](https://gist.github.com/giannif/be6f2391bff8a64156f7).

### Beautifying

Below are the pjs settings for beautifying. See [here](https://github.com/beautify-web/js-beautify) for more about these options.

> **_Workflow Tip_**: If you're using Sublime Text, install JSFormat and use these as your settings. And add `"format_on_save": true`.

```javascript
{
    "indent_with_tabs": true,
    "preserve_newlines": true,
    "max_preserve_newlines": 10,
    "jslint_happy": false,
    "brace_style": "collapse",
    "keep_array_indentation": false,
    "keep_function_indentation": false,
    "space_before_conditional": true,
    "break_chained_methods": false,
    "eval_code": false,
    "unescape_strings": false,
    "wrap_line_length": 0
}
```


