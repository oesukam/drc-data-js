## 🇨🇩The Democratic Republic of Congo locations data

[![npm version](https://badge.fury.io/js/drc-data-js.svg)](https://badge.fury.io/js/drc-data-js)
[![Build Status](https://travis-ci.org/oesukam/drc-data-js.svg?branch=master)](https://travis-ci.org/oesukam/drc-data-js)
[![Coverage Status](https://coveralls.io/repos/github/oesukam/drc-data-js/badge.svg?branch=master)](https://coveralls.io/github/oesukam/drc-data-js?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/da305cacd8dbfb410e93/maintainability)](https://codeclimate.com/github/oesukam/drc-data-js/maintainability)

### Table of contents
<!-- toc -->
  - [Table of contents](#table-of-contents)
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
