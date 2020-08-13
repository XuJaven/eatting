
// 自定义项目名称及其版本号
/* const date = new Date()
const year = String(date.getFullYear())
const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
const day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate() */


// 定义resolve方法
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  // 输出文件目录
  // outputDir: 'bss',
  // 去除map文件以减少打包体积
  productionSourceMap: false,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : '/',
  // 链式操作内部配置
  chainWebpack: config => {
    // 链式操作内部配置
    config.resolve.alias.set('@', resolve('src'))
    config.resolve.alias.set('#', resolve('public'))
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },
  configureWebpack: config => {
    // 生产环境
    if (process.env.NODE_ENV === 'production') {
      // 编译时删除console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
      // 开启Gzip
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
          algorithm: 'gzip',
          test: /\.(js|css|svg|woff|ttf|json|html)$/, // 匹配文件名
          threshold: 10240, // 只有大小大于该值的资源会被处理
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 不删除源文件
        })
      )
    }
  },
  // css相关配置
  css: {
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      less: {
        modifyVars: {
          // 'primary-color': '#1DA57A',
          // 'link-color': '#1DA57A',
          // 'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    port: 8090, // 配置端口
    /*proxy: {
       '/api': {
        target: '',
        changOrigin: true, // 跨域
        ws: true, // 是否代理websockets
        pathRewrite: {
          '^/api': '' // 重写请求
        }
      } 
    }*/
  },
  // 第三方插件配置
  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
