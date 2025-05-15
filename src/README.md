# SCSS Folder Structures and Organization
SCSS rules for a given theme live various sections and are comipled into tha number of different CSS files. Style can be found in two key locations `/src/scss` for rules relating to the overall theme and admin dashboard, and `/src/blocks/` for rules for a specific block.

## Theme Styles
`theme.scss` accounts for all the css rules applied to the frontend ooutput of a given site. Its partials are arranged and imported atomically; starting with the smallest and most general components such as Abstracts and Foundational and going up to larger structures like Templates and Plugins.

- Abstract and Foundational
- Shortcode
- Widgets
- Layout
- Templates
- Plugins

### Abstract and Foundational Styles
`/abstracts` is pure SCSS utilities live. Nothing in these folder actually rendered unless it's used. The partials in `/abstracts` will often house variables, mix-ins, functions, and other elments to be used elsewhere.

`/foundational` houses rules for the lowest most gemeral level of elements such as pure HTML layout elements (p, li, h1-6 etc...), forms, buttons and so forth.

### Shortcode and Widgets
`/shortcodes` and `widgets` houses rules for any componets of their respective categories that are core to responsive-framework.

### Layout
`/layout` houses partials relating to the way specific portions of the site are laid out and how the elements there within are styled ;i.e. Branding, Navigation, Content Area, Footer etc.

### Templates
`/templates` houses partials governing the rules and styles for the way content for specific post types,and page templates (i.e. Default Page Template, Sidebar Template, Archive Page,  Single Post)

### Plugins
Plugin can vary in size and will often have their own shortcodes, widgets, templates, and so on. Therefore the structures in `/plugins` follow their own atomic structure. For example:

- `"/plugins/bu-profiles` has templates as well as shortcodes. Therefore it has corresponding template partials at its base and shortcode partials in its `/shortcodes` subfolder.
- `"/plugins/bu-calendar` has templates as well as widgets. Therefore it has corresponding template partials at its base and widget partials in its `/widgets` subfolder.
- `/plugins/bu-prepress` introduces foundational elements, general components, blocks, as well as templates and thus has its own `/foundational`, `/components`, `/blocks`, and `/template` subfolders.

## Editor Styles
`editor-styles.scss` is for any styles the need to be abled to the content-area in the block editor, and can be thought of as a sibling stylesheet to `theme.scss` but with its scope reduced to just elements in the content area. There for it should pull in any partials employed in `theme.scss` that have to do with the content area.

Note, all styles that are eventually compiled into `editor-styles.css` are prepended with the `.editor-wrapper` class when ultimately enqued into WordPress. This is to limit those styles from affecting the rest of the Admin dashboard and editor UI. Additional note, for any styles that start with `body` or `:root`, WordPress will replace those with `.editor-wrapper` instead of prepending.

## Admin, Block Editor, and Classic Editor styling
The following stylesheets are for any styles that are to be applyed the Admin Dashboard UI. These should be used sparcely with considerate specificity as they can have unintened consequences with the behavior of the admin dashboard and can potentially affect the content area in the block editor.

`admin.scss` styles are loaded sitewide on any page throughout the admin dasboard.

`block-editor.scss` styles are only loaded when editing a block editor page.

`classic-editor.scss` styles are only loaded when editing a classic editor page.
