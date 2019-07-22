const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')

const projectPath = path.resolve(process.cwd(), '../../')
const eslintConfig = path.resolve(projectPath, '.eslintrc.js')
const eslintIgnoreConfig = path.resolve(projectPath, '.eslintignore')
const huskyConfig = path.resolve(projectPath, '.huskyrc')
const commitlintConfig = path.resolve(projectPath, '.commitlintrc.js')
const packageJson = path.resolve(projectPath, 'package.json')
const editorConfig = path.resolve(projectPath, '.editorconfig')

;(async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'eslintType',
      message: 'eslint 类型',
      choices: [
        { name: 'JS', value: '' },
        { name: 'TS', value: '/ts' },
        { name: 'Vue.js', value: '/vue' },
        { name: 'Vue.ts', value: '/vue-ts' }
      ]
    }
  ])

  const warn = msg => console.log(msg)

  if (!fs.existsSync(packageJson)) {
  // eslint-disable-next-line no-throw-literal
    throw 'error: package.json not exist'
  }

  if (fs.existsSync(editorConfig)) {
    warn('warn: editor conf exist')
  } else {
    fs.writeFileSync(editorConfig, fs.readFileSync(path.resolve(__dirname, '.editorconfig')))
  }

  if (fs.existsSync(eslintConfig)) {
    warn('warn: eslint conf exist')
  } else {
    const eslintConfigString =
`module.exports = {
  extends: [
    'yyued${answers.eslintType}'
  ]
}
`
    fs.writeFileSync(eslintConfig, eslintConfigString)
  }

  if (fs.existsSync(eslintIgnoreConfig)) {
    warn('warn: eslint ignore conf exist')
  } else {
    const eslintIgnoreConfigString =
`dist
assets
`
    fs.writeFileSync(eslintIgnoreConfig, eslintIgnoreConfigString)
  }

  if (fs.existsSync(huskyConfig)) {
    warn('warn: husky conf exist')
  } else {
    fs.writeFileSync(huskyConfig, JSON.stringify({
      hooks: {
        'commit-msg': 'eslint --ext .vue,.js ./ && commitlint -e $GIT_PARAMS'
      }
    }, null, 2))
  }

  if (fs.existsSync(commitlintConfig)) {
    warn('warn: commitlint conf exist')
  } else {
    fs.writeFileSync(commitlintConfig, fs.readFileSync(path.resolve(__dirname, 'commitlint.config.js')))
  }
})()
