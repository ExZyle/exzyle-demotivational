# Exzyle Demotivational

[![Build Status](https://travis-ci.com/ExZyle/exzyle-demotivational.svg?branch=master)](https://travis-ci.com/ExZyle/exzyle-demotivational)
![GitHub repo size](https://img.shields.io/github/repo-size/exzyle/exzyle-demotivational)
![GitHub contributors](https://img.shields.io/github/contributors/exzyle/exzyle-demotivational)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![TradingView Follow @ExZyle](https://img.shields.io/badge/TradingView-%40ExZyle-brightgreen)](https://tradingview.com/u/ExZyle)

Exzyle-Demotivational is a `utility` that provides ` nihilistic and depressing messages` allowing `developers` to `have some fun appending to error messages`.

## Prior-Art
Thanks to [joranE/demotivr](https://github.com/joranE/demotivr
) for demotivationals and discouragement 😏.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of `node`

## Installing exzyle-demotivational

To install exzyle-demotivational, follow these steps:

Using `npm`:
```
npm i exzyle-demotivational
```

Using `yarn`:
```
yarn add exzyle-demotivational
```
## Using exzyle-demotivational

To use exzyle-demotivational, simply `require` or `import` the module.

Using node
```
const { demotivate } = require('exzyle-demotivational');

throw new Error(`Missing required parameters. ${demotivate()}`);

```

Using typescript
```
import { demotivate } as from 'exzyle-demotivational';

throw new Error(`Missing required parameters. ${demotivate()}`);
```

## Contributing to exzyle-demotivational
To contribute to exzyle-demotivational, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@exzyle](https://github.com/exzyle) 💻📖⚠️

## Contact

If you want to contact me you can reach me on TradingView [@ExZyle](https://tradingview.com/u/ExZyle).

Alternatively try reaching out on twitter [@ExzyleFreedom](https://twitter.com/ExzyleFreedom).

## License

This project uses the following license: [GNU General Public License version 3](https://choosealicense.com/licenses/gpl-3.0/).