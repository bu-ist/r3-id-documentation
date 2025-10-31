# LoadingSpinner

This block is used to explore and adjust the parameters sent to the `<Image>` Component.

See @todo

## Component setup

### canEditImage={ attributes.canEditImage } // what to return attributes.canEditImage

If true, the <MediaPlaceholder> component will show the Upload and Media Library buttons.

- Type: `Boolean`
- Required: No
- Default: false

## Placeholder overrrides

### labelsPlaceholder

An object that can contain a `title` and `instructions` properties. These properties are passed to the placeholder component as `label` and `instructions` respectively.

- Type: `Object`
- Required: No
- Default: {}

## LoadingSpinner overrides

// not planned

## InspectorControls overrecids, we might not need these, maybe event listener works?

// onSelectCallback={ myOnSelectCallback }
// onRemoveCallback={ myOnRemoveCallback }

## For <MediaPlaceholder> <https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md>

### accept

A string passed to `FormFileUpload` that tells the browser which file types can be upload to the upload window the browser use e.g: `image/*,video/*`.
More information about this string is available in <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers>.
This property is similar to the `allowedTypes` property. The difference is the format and the fact that this property affects the behavior of `FormFileUpload` while `allowedTypes` affects the behavior `MediaUpload`.

- Type: `String`
- Required: No
- Platform: Web

### allowedTypes

Array with the types of the media to upload/select from the media library.
Each type is a string that can contain the general mime type e.g: `image`, `audio`, `text`,
or the complete mime type e.g: `audio/mpeg`, `image/gif`.
If allowedTypes is unset all mime types should be allowed.
This property is similar to the `accept` property. The difference is the format and the fact that this property affects the behavior of `MediaUpload` while `accept` affects the behavior `FormFileUpload`.

- Type: `Array`
- Required: No
- Default: undefined

### labelsMediaPlaceholder

An object that can contain a `title` and `instructions` properties. These properties are passed to the placeholder component as `label` and `instructions` respectively.

- Type: `Object`
- Required: No
- Default: {}

// need to add accept and have it match allowedTypes

## FocalPointPicker overrrides
