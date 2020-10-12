const et = require('element-theme')
// 第一步生成样式变量文件
// et.init('./src/theme.scss')
// 第二步根据实际需要修改该文件
// ...
// 第三步根据该文件编译出自定义的主题样式文件
et.run({
  config: './src/theme.scss',
  out: './src/theme'
})