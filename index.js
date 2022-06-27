module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-idiomatic-order",
  ],
  plugins: ["stylelint-order"],
  rules: {
    // # Avoid Errors
    // Color
    "color-no-invalid-hex": true,
    // Font family
    "font-family-no-duplicate-names": true,
    // Function
    "function-calc-no-unspaced-operator": true,
    "function-no-unknown": null,
    // String
    "string-no-newline": true,
    "unit-no-unknown": true,
    // Property
    "property-no-unknown": true,
    // Keyframe declaration
    "keyframe-declaration-no-important": true,
    // Keyframe block
    "keyframe-block-no-duplicate-selectors": true,
    // Declaration block
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
      },
    ],
    // Block
    "block-no-empty": null,
    // Selector
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    // Comment
    "comment-no-empty": null,
    // General / sheet
    "no-duplicate-selectors": null,
    // 'no-invalid-double-slash-comments': null,

    // # Enforce Conventions
    // Alpha-value
    "alpha-value-notation": null,
    // Hue
    "hue-degree-notation": "angle",
    // Color
    "color-function-notation": null,
    "color-hex-length": "long",
    "color-named": "never",
    // Length
    "length-zero-no-unit": true,
    // Font weight
    "font-weight-notation": [
      "numeric",
      {
        ignore: ["relative"],
      },
    ],
    // Function
    "function-url-quotes": "always",
    // Keyframes
    "keyframes-name-pattern": null,
    // Number
    "number-max-precision": null,
    // Custom property
    "custom-property-pattern": null,
    // Declaration block
    "declaration-empty-line-before": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "declaration-block-single-line-max-declarations": 5,
    // Selector
    "selector-attribute-quotes": "always",
    "selector-max-specificity": null,
    // General / sheet
    "unicode-bom": "never",

    // # Stylistic issues
    // ## Not handled by pretty printers
    // Custom property
    "custom-property-empty-line-before": null,
    // Rule
    "rule-empty-line-before": null,
    // At-rule
    "at-rule-empty-line-before": null,

    // # Stylistic issues
    // ## Handled by pretty printers
    // Color
    "color-hex-case": "lower",
    // Number
    "number-leading-zero": "never",
    // String
    "string-quotes": "double",
    // Unit
    "unit-case": "lower",
    // Value list
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    // Declaration block
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-trailing-semicolon": "always",
    // At-rule
    "at-rule-name-space-after": "always",
    // General / sheet
    indentation: 2,
    "max-empty-lines": 2,
    "no-extra-semicolons": true,

    // # Plugins
    // Plugin: stylelint-order
    "order/order": [
      "dollar-variables",
      "custom-properties",
      "at-variables",
      "declarations",
      "at-rules",
      "rules",
    ],
  },
  overrides: [
    {
      files: ["**/*.scss"],
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier",
        "stylelint-config-idiomatic-order",
      ],
      plugins: ["stylelint-order", "stylelint-scss"],
      customSyntax: "postcss-scss",
      rules: {
        indentation: 2,
        "no-invalid-position-at-import-rule": null,
        "scss/at-extend-no-missing-placeholder": null,
        "scss/at-function-named-arguments": "never",
        "scss/at-if-closing-brace-newline-after": null,
        "scss/at-if-closing-brace-space-after": null,
        "scss/at-if-no-null": null,
        "scss/at-mixin-argumentless-call-parentheses": "never",
        "scss/at-mixin-pattern": null,
        "scss/at-rule-conditional-no-parentheses": null,
        "scss/comment-no-empty": null,
        "scss/dimension-no-non-numeric-values": true,
        "scss/dollar-variable-colon-space-after": "at-least-one-space",
        "scss/dollar-variable-empty-line-before": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/double-slash-comment-whitespace-inside": null,
        "scss/function-quote-no-quoted-strings-inside": null,
        "scss/media-feature-value-dollar-variable": null,
        // Disable when using node-sass (No @use support)
        "scss/no-global-function-names": null,
        "scss/selector-no-redundant-nesting-selector": true,
      },
    },
  ],
};
