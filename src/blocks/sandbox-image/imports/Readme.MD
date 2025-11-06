# BU Image

## Status: BETA

Original issue: https://github.com/bu-ist/id-gutenberg/issues/176

It is a common pattern in our projects to need to display an image inside a component and either allow the user to select/upload the image OR to display the image from some post data such as the featured image from a selected post.

This component can display an image by passing it a media ID. The component also supports uploading or selecting an image from the media library and allowing the user to remove the image.

The developer can choose to use this component with or without the ability to edit, select, or remove the image.

For example if the image should always be displayed and the ID of the image is already known such as the featured image by getting it using the Post Chooser component along with the rest of the post data you can choose to not permit the image to be removed by leaving the onRemove function passed to the component empty. You'll also want to set canEditImage to false so that no edit controls are presented to the user.

To prevent the user from editing (overriding) the featured image leave the option canOverrideImage to false.

This component can be used when building a block and you do want to allow the user to upload or select an image from the media library. This would be the typical case when there is no previously selected post to grab an image from.

In that scenario you'll want to setup your own onSelect handler, and onRemove handlers.

The Component also supports an optional Focal Point Control to allow the focal point of the image to be set for use with Object-Fit scaling.

## Component setup

### canEditImage

If true and no mediaId is set, the <MediaPlaceholder> component will show with the Upload and Media Library buttons.

If true and a mediaID is set, the image will be displayed and the side panel with have the option to remove or replace the image will be available.

- Type: `boolean`
- Required: No
- Default: false

### debug

Incomplete. If Debug is set to true, output some helpful information to the console for block developers to utilize media object info in their block development.

- Type: `boolean`
- Required: No
- Default: false

### tag

The HTML tag to use for image display.

- Type: `string` img | picture | figure
- Required: No
- Default: img

### size

The size of the image to use. Can be any registered image size.

- Type: `string`
- Required: No
- Default: thumbnail

### altSource

The source of the alt attribute for `picture` and `img` tags or figcaption for `picture`. The values alt, caption, title, or description will pull from that field in the media library. Any other text, including `""` will be what is displayed.

- Type: `string` alt | caption | title | description | user input
- Required: No
- Default: alt

### mediaId

todo...

- Type: `number`
- Required: No
- Default: undefined








This Component has 3 main states:

## Placeholder // ! hasImage && ! canEditImage

If there is no set image, and a user CANNOT edit it, then we show the standard [WP Placeholder](https://developer.wordpress.org/block-editor/reference-guides/components/Placeholder/). Most attributes either default to the WP preset or are hardcoded within the BU component, but there are a few configurable options, listed below:

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











## MediaPlaceholder // ! hasImage && canEditImage

If there is no set image, and a user CAN edit it, then we show the standard [WP MediaPlaceholder](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/media-placeholder/README.md). Most attributes either default to the WP preset or are hardcoded within the BU component, but there are a few configurable options, listed below:

### accept

A string passed to `FormFileUpload` that tells the browser which file types can be upload to the upload window the browser use e.g: `image/*,video/*`.
More information about this string is available in <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers>.
This property is similar to the `allowedTypes` property. The difference is the format and the fact that this property affects the behavior of `FormFileUpload` while `allowedTypes` affects the behavior `MediaUpload`.

- Type: `String`
- Required: No
- Default: ???

### allowedTypes

Array with the types of the media to upload/select from the media library.
Each type is a string that can contain the general mime type e.g: `image`, `audio`, `text`,
or the complete mime type e.g: `audio/mpeg`, `image/gif`.
If allowedTypes is unset all mime types should be allowed.
This property is similar to the `accept` property. The difference is the format and the fact that this property affects the behavior of `MediaUpload` while `accept` affects the behavior `FormFileUpload`.

- Type: `Array`
- Required: No
- Default: ???

### labels

An object that can contain a `title` and `instructions` properties. These properties are passed to the placeholder component as `label` and `instructions` respectively.

- Type: `Object`
- Required: No
- Default: undefined












## Image // hasImage

### className

todo...

- Type: `string`
- Required: No
- Default: undefined

### canEditFocalPoint

todo...

- Type: `boolean`
- Required: No
- Default: false

### focalPoint

todo...

- Type: `Object`
- Required: No
- Default: { x: 0.5, y: 0.5 }


















**Image component the user can edit**
![Image Component Editable Example](BU_Image_Editable.gif)

**Image component the user cannot edit as the image id is set elsewhere**
![Image Component Not Editable Example](BU_Image_Not_Editable.gif)

An image display component for use within a block. This component can
display an image by passing it a media ID. The component also supports
uploading or selecting an image from the media library and allowing the
user to remove the image.

The developer can choose to use this component with or without the ability
to edit, select, or remove the image.

For example if the image should always be displayed and the ID of the image
is already known such as the featured image by getting it using the Post
Chooser component along with the rest of the post data you can choose to
not permit the image to be removed by leaving the `onRemove` function passed
to the component empty. You'll also want to set `canEditImage` to false so
that no edit controls are presented to the user.

To prevent the user from editing (overriding) the featured image leave the
option `canOverrideImage` to false.

This component can be used when building a block and you do want to allow the
user to upload or select an image from the media library. This would be the
typical case when there is no previously selected post to grab an image from.

In that scenario you'll want to setup your own `onSelect` handler, and `onRemove`
handlers.

The Component also supports an optional Focal Point Control to allow
the focal point of the image to be set for use with Object-Fit scaling.

## Usage

```js
import { BU_Image } from '@bostonuniversity/block-components';
```

```js
const handleImageSelect = ( media ) => {
 console.log("image Selected:", media);
 setAttributes({
  selectedPostIMG: media?.id
 })
};

const handleImageRemove = () => {
 setAttributes({
  selectedPostIMG: undefined
 })
};


<BU_Image
 className="my-custom-block-image"
 id={ selectedPostIMG }
 labels={{
  title: 'Select Image',
  instructions: 'Upload an image or pick one from your media library.'
 }}
 canEditImage={true}
 canOverrideImage={true}
 focalPoint={focalPoint}
 onChangeFocalPoint={handleFocalPointChange}
 onSelect={handleImageSelect}
 onRemove={handleImageRemove}
/>
```
