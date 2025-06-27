# Embed GitHub .md

Pull in a markdown file and display it as HTML. Keep your documentation DRY.

See <https://github.com/bu-ist/r3-id-documentation/issues/290> for initial task.

## Known Issues

- Images do not load
- Might be nice to add a domain filter and an extension filter to FetchRawFile.mjs
- Might be nice to make FetchRawFile.mjs a common library
- As the content is external, it might distrupt accessibility
- Maybe use onChange so it doesn't fetch on every keystroke? <https://stackoverflow.com/questions/53479598/reactjs-save-input-value-on-blur-and-not-on-every-key-stroke>
