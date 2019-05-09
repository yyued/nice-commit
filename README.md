# nice-commit

自动创建 Git Commit Hook 进行规范检测，主要检测以下内容：

* `.js` / `.vue` 文件符合 ESLint [YYUED](https://github.com/yyued/eslint-config-yyued) 规范
* commit 日志符合 [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) 规范

## 使用

在项目中执行安装即可

```bash
$ npm i nice-commit --save-dev

# or

$ yarn add nice-commit --dev
```

安装时，会自动在项目中创建配置文件 `.eslintrc.js` / `.huskyrc`

## 注意

安装模块需要项目存在 **package.json**
