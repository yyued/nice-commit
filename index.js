const path = require('path')
const fs = require('fs')

const projectPath = path.resolve(process.cwd(), '../../')
const eslintConfig = path.resolve(projectPath, '.eslintrc.js')
const huskyConfig = path.resolve(projectPath, '.huskyrc')

if (fs.existsSync(eslintConfig)) {
  console.error('[error: eslint conf exist]')
} else {
  fs.writeFileSync(eslintConfig, fs.readFileSync(path.resolve(__dirname, './eslint-config/eslintrc')))
}

if (fs.existsSync(huskyConfig)) {
  console.error('[error: husky conf exist]')
} else {
  fs.writeFileSync(huskyConfig, JSON.stringify({
    "hooks": {
      "commit-msg": "eslint --ext .vue,.js ./src/ && commitlint -E HUSKY_GIT_PARAMS"
    }
  }, null, 4))
}
