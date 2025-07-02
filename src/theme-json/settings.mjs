export default {
	// For refrence to settings avalable to theme.json v1: https://developer.bu.edu/gutenberg/best-practices/bu-child-starter/theme-json/
	// Additional refrence avalable on https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/#settings
    "settings": {
		"border": {
			"customRadius": true,
			// Additional border settings coming in Theme.json v2: https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-v2/
		},
		"color": {
			// CSS varibables assigned to colors should be declared with fallback values or be defined in admin.css so as to be visible in the settings panel swatch.
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"link": true,
			"palette": [
				// The colors defined here are used to populate the color palettes for background/fill colors, as well as text/content and links (if enabled).
				// Thus its not possible to have certain colors only available to say backgorund or only for text.
				
				// The following colors are carried over from the themes stylesheet

				// https://developer.wordpress.org/themes/global-settings-and-styles/settings/color/#custom-color-palette
				{
					"name": "BU Red",
					"slug": "theme-color-bu",
					"color": "var(--theme-color-bu,#c00)"
				},
				{
					"name": "BU Red Dark",
					"slug": "theme-color-bu-dark",
					"color": "var(--theme-color-bu,#800000)"
				},
				{
					"name": "Light",
					"slug": "theme-color-light",
					"color": "var(--theme-color-light,#F4F6F8)"
				},
				{
					"name": "Light Accent",
					"slug": "theme-color-light-accent",
					"color": "var(--theme-color-light-accent,#DBE2E8)"
				},
				{
					"name": "Dark",
					"slug": "theme-color-dark",
					"color": "var(--theme-color-dark,#292929)"
				},
				{
					"name": "Dark Accent",
					"slug": "theme-color-dark-accent",
					"color": "var(--theme-color-dark-accent,#16191B)"
				},
				{
					"name": "Link",
					"slug": "theme-color-link",
					"color": "var(--theme-color-link,#0f69d7)"
				},
				{
					"name": "Link on Dark",
					"slug": "theme-color-link-dark",
					"color": "var(--theme-color-link-dark,#4DA6FF)"
				},
				{
					"name": "White",
					"slug": "theme-color-white",
					"color": "var(--theme-color-white,#FFF)"
				},
				{
					"name": "Black",
					"slug": "theme-color-black",
					"color": "var(--theme-color-link-dark,#000)"
				}
			],
			"gradients": [
				// https://developer.wordpress.org/themes/global-settings-and-styles/settings/color/#custom-gradients
				{
					"name": "BU Red Gradient",
					"slug": "bu-gradient",
					"gradient": "linear-gradient(to bottom,var(--theme-color-bu,#c00) 0%,var(--theme-color-bu,#800000) 100%)"
				},
				{
					"name": "Light Gradient",
					"slug": "light-gradient",
					"gradient": "linear-gradient(to bottom,var(--theme-color-light,#F4F6F8) 0%,var(--theme-color-light-accent,#DBE2E8) 100%)"
				},
				{
					"name": "Dark Gradient",
					"slug": "dark-gradient",
					"gradient": "linear-gradient(to bottom,var(--theme-color-dark,#292929) 0%,var(--theme-color-dark-accent,#16191B) 100%)"
				}
			],
			"duotone": [
				// https://developer.wordpress.org/themes/global-settings-and-styles/settings/color/#custom-duotone-filters
			]
		},
		"custom": {},
		"layout": {
			// These settings specify the sizes for default and wide content sizes (align-wide if enabled)
			// Even if these sizes are definted in the theme style sheet, theve values are plugged in dynamicly in certain instantes like for nested content in the group block
			// https://developer.wordpress.org/themes/global-settings-and-styles/settings/layout/
			"contentSize": "var(--bu-container-max-inline-size--content)",
			"wideSize": "var(--bu-container-max-inline-size--wide)"
		},
		"spacing": {
			"customMargin": true,
			"customPadding": true,
			"units": [ "px", "em", "rem", "vh", "vw" ]
		},
		"typography": {
			// https://developer.wordpress.org/themes/global-settings-and-styles/settings/typography/
			"customFontSize": false,
			"customFontStyle": false,
			"customFontWeight": false,
			"customLineHeight": false,
			"customTextDecorations": false,
			"customTextTransforms": false,
			"dropCap": false,
			"fontFamilies": [],

			"fontSizes": [
				// The following font sizes are carried over from the themes stylesheet
				{
					"slug": "extra-small",
					"size": "var(--bu-font-size-xs,clamp(0.8rem,0.17vw + 0.76rem,0.89rem))",
					"name": "Extra small"
				},
				{
					"slug": "small",
					"size": "var(--bu-font-size-sm,clamp(1rem,0.34vw + 0.91rem,1.19rem))",
					"name": "Small"
				},
				{
					"slug": "medium",
					"size": "var(--bu-font-size-md,clamp(1.25rem,0.61vw + 1.1rem,1.58rem))",
					"name": "Medium"
				},
				{
					"slug": "large",
					"size": "var(--bu-font-size-lg,clamp(1.56rem,1vw + 1.31rem,2.11rem))",
					"name": "Large"
				},
				{
					"slug": "x-large",
					"size": "var(--bu-font-size-xl,clamp(1.95rem,1.56vw + 1.56rem,2.81rem))",
					"name": "Extra Large"
				},
				{
					"slug": "xx-large",
					"size": "var(--bu-font-size-xxl,clamp(2.44rem,2.38vw + 1.85rem,3.75rem))",
					"name": "2X Large"
				},
				{
					"slug": "xxx-large",
					"size": "var(--bu-font-size-xxxl,clamp(3.05rem,3.54vw + 2.17rem,5rem))",
					"name": "3X Large"
				},
			]
		},
		"blocks": {
			// Block specific settings follow the same format as top level settings
			"core/paragraph": {
				"border": {},
				"color": {},
				"custom": {},
				"layout": {},
				"spacing": {},
				"typography": {}
			},
			"core/heading": {},
			"etc": {}
		}
	}
}
