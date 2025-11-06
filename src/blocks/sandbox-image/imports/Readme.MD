# BU Image

## Status: BETA

Original issue: <https://github.com/bu-ist/id-gutenberg/issues/176>

It is a common pattern in our projects to need to display an image inside a component and either allow the user to select/upload the image OR to display the image from some post data such as the featured image from a selected post.

This component can display an image by passing it a media ID. The component also supports uploading or selecting an image from the media library and allowing the user to remove the image.

The developer can choose to use this component with or without the ability to edit, select, or remove the image.

For example if the image should always be displayed and the ID of the image is already known such as the featured image by getting it using the Post Chooser component along with the rest of the post data you can choose to not permit the image to be removed by leaving the onRemove function passed to the component empty. You'll also want to set canEditImage to false so that no edit controls are presented to the user.

To prevent the user from editing (overriding) the featured image leave the option canOverrideImage to false.

This component can be used when building a block and you do want to allow the user to upload or select an image from the media library. This would be the typical case when there is no previously selected post to grab an image from.

The Component also supports an optional Focal Point Control to allow the focal point of the image to be set for use with Object-Fit scaling.

This Component has 3 main states:

1. Placeholder - If there is no set image, and a user CANNOT edit it, then we show the standard [WP Placeholder](https://developer.wordpress.org/block-editor/reference-guides/components/Placeholder/).
2. MediaPlaceholder - If there is no set image, and a user CAN edit it, then we show the standard [WP MediaPlaceholder](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md).
3. Media - Displays the media as either image, figure, or picture.

## Props

### canEditImage

If true and no mediaId is set, the <MediaPlaceholder> component will show with the Upload and Media Library buttons.

If true and a mediaID is set, the image will be displayed and the side panel with have the option to remove or replace the image will be available.

- Type: `Boolean`
- Required: No
- Default: false

### debug

If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.

- Type: `Boolean`
- Required: No
- Default: false

### tag

The HTML tag to use for image display.

- Type: `String` img | picture | figure
- Required: No
- Default: img

### size

The size of the image to use. Can be any registered image size.

- Type: `String`
- Required: No
- Default: thumbnail

### sourceSizes

The sizes to use for img srcset or picture source.

- Type: `Array`
- Required: No
- Default: []
- Example:

```js
[
    {
        srcset: 'thumbnail',
        descriptor: '200w',
        media: '(min-width: 600px)',
    },
    {
        srcset: 'full',
        descriptor: '2x',
        media: '(min-width: 300px)',
    },
]
```

### altSource

The source of the alt attribute for `picture` and `img` tags or figcaption for `picture`. The values alt, caption, title, or description will pull from that field in the media library. Any other text, including `""` will be what is displayed.

- Type: `String` alt | caption | title | description | user input
- Required: No
- Default: alt

### mediaId

The ID of the media object to use.

- Type: `Number`
- Required: No
- Default: undefined

### className

Will be applied to the output.

- Type: `String`
- Required: No
- Default: undefined

### canEditFocalPoint

If yes, the user can set the focal point.

- Type: `Boolean`
- Required: No
- Default: false

### focalPoint

The focal point of the image.

- Type: `Object`
- Required: No
- Default: { x: 0.5, y: 0.5 }

### label

Title of the placeholder.

- Type: `String`
- Required: No
- Default: undefined

### instructions

Instructions of the placeholder.

- Type: `String`
- Required: No
- Default: undefined

### labels

An object that can contain a `title` and `instructions` properties. These properties are passed to the placeholder component as `label` and `instructions` respectively.

- Type: `Object`
- Required: No
- Default: undefined
