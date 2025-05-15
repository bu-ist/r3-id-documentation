# [Project Name]

---

**Contents:**

- [Quick start](#quick-start)
- [Project information](#project-information)
- [Development workflow](#development-workflow)
- [Supported technologies](#supported-technologies)
- [Troubleshooting](#troubleshooting)

---

## Quick start

- [Set up a new custom theme](https://github.com/bu-ist/responsive-child-starter/wiki/Set-up-a-new-custom-theme)
- Install your [development dependencies](https://github.com/bu-ist/responsive-child-starter/wiki/Install-development-dependencies), including [nvm](https://github.com/nvm-sh/nvm) if you haven't already.
- `nvm use` - Set the correct node version.
- `npm install` - Install all development dependencies.
- `npm start` - Watch for changes and compiles uncompressed assets.
- Upload to [your sandbox](http://sites.bu.edu/marcom-team/departments/interactive-design/interactive-design-workflow/development/sandboxes-overview/) to see changes.

### Note

This repo contains several optional files and folders that can speed up development. These can be removed without issue and should be if not used. These are:

- `src/blocks/example-dynamic-3` - Example block.
- `src/blocks/example-dynamic-2` - Example block.
- `src/blocks/example-dynamic` - Example block.
- `src/js/classic-editor.js` - Classic editor only scripts.
- `src/js/block-editor.js` - Block editor only scripts.
- `src/js/admin.js` - Admin only scripts.

---

### Package Management

Please update this if you have a newer version of Node and can verify the theme compiles with it.

| Name | Version | Purpose |
|---|---|---|
| node.js | 20 LTS | Support for npm |
| npm | 8.3.1 | Package management. See package.json for a full list of packages. |
| webpack | 5.95.0  | Capable of transforming, bundling, or packaging just about any resource or asset. |
| sass-loader | 12.6.0 | Compiles SASS/SCSS to CSS. |
| @wordpress/scripts | 27.9.0 | Reusable scripts tailored for WordPress development. |

### Frontend Dependencies

| Name | Version | Purpose |
|---|---|---|
| Responsive Foundation (Required) | 5.0.0-alpha.10 | Basic styles and utilities for all Boston University themes |
| BU PrePress (Optional, delete if irrelevant to this project) | X | Editorial tools for Boston University schools and colleges which produce magazines or other news publications. |
| BU Blocks (Optional, delete if irrelevant to this project) | X | Custom Gutenberg blocks for Boston University websites. Required by BU PrePress. |

### Linting Scripts

- `npm run format` - Formats source code in a consistent way using [prettier](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#format).
- `npm run lint` - Runs all the following lint scripts:
- `npm run lint:css` - Lints css files using [stylelint](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#lint-style).
- `npm run lint:html` - Lints html inside php and js files using PHPCS.
- `npm run lint:js` - Lints js files using [eslint](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#lint-js).
- `npm run lint:js:fix` - Trys to fix as many issues as possible using [eslint](https://eslint.org/docs/latest/use/command-line-interface#fix-problems).
- `npm run lint:md` - Lints md files using [markdownlint](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#lint-md-docs).
- `npm run lint:php` - Lints modified php files using [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer).
- `npm run lint:php:all` - Lints all php files using [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer).
- `npm run lint:pkg` - Lints package.json using [npm-package-json-lint](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#lint-pkg-json).

### Build Scripts

- `npm run start` - Runs all the following watch scripts:
- `npm run watch:scripts` - Watches js and scss files for changes and compile uncompressed files when detected.
- `npm run watch:theme` - Watches theme.json files for changes and compile when detected.
- `npm run build` - Runs all the following build scripts:
- `npm run build:theme` - Builds the production ready theme.json file.
- `npm run build:scripts` - Builds compressed production ready css and js files.
- `npm run build:i18n` - Adds text domain to code and builds pot file.
- `npm run build:version` - Updates the version in style.css based on package version.

---

## Troubleshooting

- [Force CSS and JavaScript to refresh when you deploy changes](https://github.com/bu-ist/responsive-child-starter/wiki/Versioning).

### Compiling errors

You'll see these types of errors in the terminal, and this should be your first stop if anything isn't working as expected, including styles not showing up. Try running the following if your theme is not compiling successfully:

1. If this theme successfully compiled before, check for a code error first. Look for red in the terminal, and see if you can trace it back to a file and line number. If the error is in your code, try to fix the error. If the error is in Responsive Foundation, continue with the following steps to see if it can be resolved. Both CSS and JavaScript errors can cause this behavior.
2. Delete `package-lock.json`, then run `npm install`, even if you have already run it before.
3. Run `node -v` and `npm -v` to see your current node and npm versions. Do they match the versions in the [supported technologies list](#supported-technologies)? If not, use nvm to change the version by running `nvm use [VERSION NUMBER]`, where `[VERSION NUMBER]` is replaced with the version from the list above.

### "X isn't showing on my sandbox" errors

Once you've confirmed your theme is compiling, the next step is to make sure your files are uploading correctly.

1. If you are using monitoring or upload on save, check that the monitoring is actually enabled.
2. Check the settings in your FTP tool of choice (usually SFTP for Sublime Text, Publishing settings in Coda, or SFTP for VSCode). Is your theme mapped to the correct sandbox, and uploading to the correct folder?
3. Create a simple text file in your code editor, such as `text.txt`. Upload (don't monitor) the file using your code editor. Now, open a FTP program such as Transmit, Filezilla, or Cyberduck, and navigate to your theme folder in the server. Did the file upload? If so, your FTP is working correctly, and this is either a monitoring problem (go back to step 1) or a CSS problem (go to the next section).

### Styling errors

If you've confirmed a file is uploading, but the CSS you expect to see still isn't showing up, it's probably your CSS selector. Here's how to test that.

1. Choose a very broad text selector you can easily see, such as `body` or `h1`. Set the color to red, and use the important flag, like so: `h1 { color: red !important; }` Upload your file again.
2. If you see the change, the problem is with your selector and overriding. If you do not see the change, try one more time with a different selector.
3. If you still do not see the change, clear your cache. Try a hard refresh first (shift+cmd+r). You can also try opening a private window.
4. If you _still_ do not see the change, wait five minutes, and try again. Rarely, the issue will be with caching on the server side. Grab a coffee, come back, and give it one more try.
5. If you're still not seeing the change here, it's time to ask for help. See if a designer or developer has a few minutes to help you out in the #interactive-design channel.

# Linking to Foundation

To create a local link with Responsive Foundation use:

- NPM Link for Node 16 or lower
- Yalc (<https://github.com/wclr/yalc>) for Node 16+ with NPM 7 or higher

## Yalc

Yalc acts as a local repository for your locally developed packages.

### Linking packages

Linking a package with yalc should not make changes to your package.json file in this repo.

You will need two terminal windows and a local copy of Responsive Foundation repo with the 6.0 or greater version as well as this repo.

#### In Responsive Foundation's terminal

Run `npm run yalc:all` or better use the `npm run yalc:watch` script which will automate the process in Responsive Foundation. What you need to do in Foundation is have yalc publish each npm package you want to work on to the local repository store. So if you are making changes to burf-theme you'll want to ensure that yalc is publishing @bostonuniversity/burf-theme package and doing so every time you make a code change to it. That is where the `watch` script comes in handy as that will watch for changes and automatically publish updates to the package from your local repo files to the yalc local package repository on your machine.

#### In Responsive Child Starter's terminal

Run `npx yalc link <package-name>`. For example `npx yalc link @bostonuniversity/burf-theme` will link up the burf-tools package to this repo so your
local changes in burf-tools within Responsive Foundation will show up here in this repo. The normal `npm start` and `npm run build` commands should
see your local changes to burf-tools and use that code. This will let you test out those code changes in this repo.

Each package from foundatioin will need to linked up separately as each is published to NPM as a separate package:
`npx yalc link @bostonunversity/burf-base`
`npx yalc link @bostonuniversity/burf-theme`
`npx yalc link @bostonuniversity/burf-customizations`
`npx yalc link @bostonuniversity/burf-tools`

### Unlinking packages

1. Disconnect Yalc and unlink by running `npx yalc remove <package-name>` or `npx yalc remove --all` to remove everything. Make sure to do this before merging your code changes in as Yalc should only be used for local development. Once published this repo should use versioned dependencies published to NPM or Github.
2. Run `npm install` again as your linked package may need to be reinstalled.
