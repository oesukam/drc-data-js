### 🇨🇩The Democratic Republic of Congo locations data

[![Current Version](https://flat.badgen.net/npm/v/drc-data-js?icon=npm)](https://www.npmjs.org/package/drc-data-js)
[![Build Status](https://flat.badgen.net/travis/arb/drc-data-js?icon=travis)](https://travis-ci.org/arb/drc-data-js)
[![Code Coverage](https://flat.badgen.net/codecov/c/github/arb/drc-data-js?icon=codecov)](https://codecov.io/gh/arb/drc-data-js)

<!-- toc -->

- [🇨🇩The Democratic Republic of Congo locations data](#%f0%9f%87%a8%f0%9f%87%a9the-democratic-republic-of-congo-locations-data)
- [Examples](#examples)
  - [Provinces](#provinces)
- [Contribution](#contribution)
  - [Contributors](#contributors)
- [License](#license)
- [Author](#author)

<!-- tocstop -->

### Examples

#### Provinces
- Get all provinces
```js
const { provinces } = require('drc-data');

const allProvinces = provinces();
``` 

- Get specific province
```js
const { provinces } = require('drc-data');

const province = provinces('Equateur');
``` 

### Contribution

- Please read [the Contributing Guideline](./CONTRIBUTING.md) before raising a PR. 
  
#### Contributors

| [<img src="https://github.com/oesukam.png" width="100px;"><br><sub><b>Olivier Esuka</b></sub>](https://github.com/oesukam) |
| :------------------------------------------------------------------------------------------------------------------------: |


### License

MIT

### Author
[Olivier Esuka](https://github.com/oesukam)
