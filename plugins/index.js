const fs = require('fs');
class HelloCompilationPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    const that = this;
    compiler.hooks.beforeRun.tapAsync('FileListPlugin',function (compiler, callback) {
      console.log('before run');
      console.log(that.options)
      fs.writeFile(that.options.output, JSON.stringify(compiler), 'UTF-8');
      // webpack的配置项
      console.log(compiler.options)
      // console.log(compiler)
      callback();
    })
    // compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
    //   // 在生成文件中，创建一个头部字符串：
    //   var filelist = 'In this build:\n\n';
    //   console.log(compilation);
    //   // 遍历所有编译过的资源文件，
    //   // 对于每个文件名称，都添加一行内容。
    //   for (var filename in compilation.assets) {
    //     filelist += ('- '+ filename +'\n');
    //   }

    //   // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    //   compilation.assets['filelist.md'] = {
    //     source() {
    //       return filelist;
    //     },
    //     size() {
    //       return filelist.length;
    //     }
    //   };

    //   callback();
    // });
  }
}

module.exports = HelloCompilationPlugin;