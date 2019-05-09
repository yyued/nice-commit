const path = require('path')
const fs = require('fs')

const projectPath = path.resolve(process.cwd(), '../../')
const eslintConfig = path.resolve(projectPath, '.eslintrc.js')
const eslintIgnoreConfig = path.resolve(projectPath, '.eslintignore')
const huskyConfig = path.resolve(projectPath, '.huskyrc')
const commitlintConfig = path.resolve(projectPath, '.commitlintrc.js')
const packageJson = path.resolve(projectPath, 'package.json')
const editorConfig = path.resolve(projectPath, '.editorconfig')

const warn = msg => console.log(msg)

if (!fs.existsSync(packageJson)) {
  throw 'error: package.json not exist'
}

if (fs.existsSync(editorConfig)) {
  warn('warn: editor conf exist')
} else {
  fs.writeFileSync(editorConfig, fs.readFileSync(path.resolve(__dirname, '.editorconfig')))
}

if (fs.existsSync(eslintConfig)) {
  warn('warn: eslint conf exist');
} else {
  fs.writeFileSync(eslintConfig, fs.readFileSync(path.resolve(__dirname, 'eslint-config/eslintrc')))
}

if (fs.existsSync(eslintIgnoreConfig)) {
  warn('warn: eslint ignore conf exist')
} else {
  fs.writeFileSync(eslintIgnoreConfig, fs.readFileSync(path.resolve(__dirname, 'eslint-config/eslintignore')))
}

if (fs.existsSync(huskyConfig)) {
  warn('warn: husky conf exist')
} else {
  fs.writeFileSync(huskyConfig, JSON.stringify({
    "hooks": {
      "commit-msg": "eslint --ext .vue,.js ./ && commitlint -e $GIT_PARAMS"
    }
  }, null, 4))
}

if (fs.existsSync(commitlintConfig)) {
  warn('warn: commitlint conf exist')
} else {
  fs.writeFileSync(commitlintConfig, fs.readFileSync(path.resolve(__dirname, 'commitlint.config.js')))
}
