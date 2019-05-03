# vue-segment

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Vue.js plugin for Segment Analytics.js

[Segment Analytics.js Documentation](https://segment.com/docs/sources/website/analytics.js/)

## Setup

1. Add the `@dansmaculotte/vue-segment` dependency with `yarn` or `npm` to your project
2. Configure it:

```js
import Vue from 'vue'
import Segment from '@dansmaculotte/vue-segment'

Vue.use(Segment, {
  writekey: 'YOUR_SEGMENT_WRITE_KEY',
  disabled: true,
  settings: {
    ...
  }
})
```

## Usage

See [Segment Vue Quickstart Guide](https://github.com/segmentio/analytics-vue#how-to-get-started).

## Options

### writeKey

- Type: `String`
  - Default: `''`

### disabled

Disable automatic script loading, if you need compliance with GDPR.

- Type: `Boolean`
  - Default: `false`

### settings

See [Load options](https://segment.com/docs/sources/website/analytics.js/#load-options) reference.

- Type: `Object`,
  - Default: `{}`

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dansmaculotte/vue-segment.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/vue-segment

[npm-downloads-src]: https://img.shields.io/npm/v/@dansmaculotte/vue-segment/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/vue-segment

[david-dm-src]: https://david-dm.org/dansmaculotte/vue-segment/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dansmaculotte/vue-segment

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
