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










<https://github.com/bu-ist/bu-block-components/tree/develop/components/image>

# BU Image

## Status: BETA

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

### ???
The developer can choose to use this component with or without the ability to edit, select, or remove the image.

For example if the image should always be displayed and the ID of the image is already known such as the featured image by getting it using the Post Chooser component along with the rest of the post data you can choose to not permit the image to be removed by leaving the onRemove function passed to the component empty. You'll also want to set canEditImage to false so that no edit controls are presented to the user.

To prevent the user from editing (overriding) the featured image leave the option canOverrideImage to false.

This component can be used when building a block and you do want to allow the user to upload or select an image from the media library. This would be the typical case when there is no previously selected post to grab an image from.

In that scenario you'll want to setup your own onSelect handler, and onRemove handlers.

The Component also supports an optional Focal Point Control to allow the focal point of the image to be set for use with Object-Fit scaling.
