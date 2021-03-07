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
npm i -D eslint-config-marine
```

additionally (if not already in place), you will need `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`

```bash
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
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

or React:

```json
{
	"extends": "marine/react"
}
```

or any other JSX:

```json
{
	"extends": "marine/jsx"
}
```

or Vue.js:

```json
{
	"extends": "marine/vue"
}
```

Using the Vue extended config will require you to additionally install `eslint-plugin-vue` and `babel-eslint`

```bash
npm i -D babel-eslint eslint-plugin-vue
```

or Angular:

```json
{
	"extends": "marine/angular"
}
```

Using the Angular extended config will require you to additionally install `@angular-eslint/builder`, `@angular-eslint/eslint-plugin`, `@angular-eslint/eslint-plugin-template`, and `@angular-eslint/template-parser`

```bash
npm i -D @angular-eslint/builder @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser
```

# Prettier usage

If you want to apply your own `.prettierrc` rules with support for disabling the correct rules, just add `/prettier` before the target name.

Also make sure you install `prettier`, `eslint-plugin-prettier` and `eslint-config-prettier` for this to work.

```bash
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

```json
{
	"extends": "marine/prettier"
}
```

```json
{
	"extends": "marine/prettier/node"
}
```

or React:

```json
{
	"extends": "marine/prettier/react"
}
```

or any other JSX:

```json
{
	"extends": "marine/prettier/jsx"
}
```

or Vue.js:

```json
{
	"extends": "marine/prettier/vue"
}
```

or Angular:

```json
{
	"extends": "marine/prettier/angular"
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
