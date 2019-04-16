# eslint-config-marine
> Typescript ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html)

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/eslint-config-marine"><img src="https://img.shields.io/npm/v/eslint-config-marine.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/eslint-config-marine"><img src="https://img.shields.io/npm/dt/eslint-config-marine.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/iCrawl/eslint-config-marine"><img src="https://david-dm.org/iCrawl/eslint-config-marine/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/eslint-config-marine/"><img src="https://nodei.co/npm/eslint-config-marine.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Install

```bash
yarn add -D eslint-config-marine
```

## Usage

Add the ESLint config to your `package.json`:

```json
{
	"name": "my-project",
	...
	"eslintConfig": {
		"extends": "marine"
	}
}
```

Or to `eslintrc.js` or `eslintrc.json`:

```json
{
	"extends": "marine"
}
```

# Targets

If you are developing with Javascript consider adding:

```json
{
	"extends": "marine",
	"env": {
		"browser": true
	}
}
```

or use the platform specific configs for Node.js:

```json
{
	"extends": "marine/node"
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**eslint-config-marine** © [iCrawl](https://github.com/iCrawl), Released under the [MIT](https://github.com/iCrawl/eslint-config-marine/blob/master/LICENSE) License.  
Authored and maintained by iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)
