# Blocks Library

This folder would contain any custom Blocks for the Block Editor as well as any
other block editor specific features such as sidebar plugins for the editor.

Each block is organized in it's own folder, and should contain it's JS code,
PHP, frontend styles, editor styles, and frontend JS

The wp-scripts config is changed to use `blocks` as the source directory
instead of the default of `src`. This is so that it is clearer when this
folder structure is placed in a larger theme or plugin that contains other
features such as page templates, custom post types, and theme or plugin styles.

## Block styles
As noted prior scss rules for blocks specific to a theme would live in `/src/blocks`

### Blocks Folder Style sheets
- `blocks-common.scss` is always enqueued and contains any shared css such as custom properties, and styles for small reusable HTML elements.
- `blocks-bundled.scss`  imports all of the base frontend styles for each block in order to create a final compiled stylesheet that contains all non-shared block frontend CSS.
- `blocks-styles.scss`  is for custom block styles.

### Block Style sheet
Each block inside of `/src/blocks` will have its own set of style sheets. 
- `block-base.scss` contains all of the base (structural) styles for this block.
- `style.scss` contains styles get applied both on the front of your site and in the editor.
- `editor.scss` contains styles that get applied inside the editor only.
