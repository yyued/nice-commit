# nice-commit

自动创建 Git Commit Hook 进行规范检测，主要检测以下内容：

* `.js` / `.vue` 文件符合 ESLint [YYUED](https://github.com/yyued/eslint-config-yyued) 规范
* commit message 符合 [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) 规范

## 使用

#### 1. 在项目中执行安装

```sh
$ npm i nice-commit --save-dev

# or

$ yarn add nice-commit --dev
```

#### 2. 创建配置文件

```sh
$ npx nice-commit

# or

$ yarn exec nice-commit
```

安装时自动在项目中创建配置文件

* `.editorconfig`
* `.eslintrc.js`
* `.eslintignore`
* `.huskyrc`
* `.commitlintrc.js`

注意：安装模块需要项目存在 **package.json**
