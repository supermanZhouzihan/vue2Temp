// const { defineConfig } = require('@vue/cli-service')
'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const Timestamp = new Date().getTime();

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const name = process.env.VUE_APP_TITLE || '天宇供应链管理系统' // 网页标题

const port = process.env.port || process.env.npm_config_port || 80 // 端口

module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    // host: '192.168.1.194',
    host: 'localhost',
    port: port,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        // target: `http://localhost:8080`,
        // target: 'http://192.168.1.133:8080',
        // target:'http://192.168.1.232:8080',
        // target:'http://192.168.1.161:8080',
        // target:'http://192.168.1.139:8080',

        // target: 'http://192.168.1.198:8082', //测试环境
        target:'http://47.108.149.12:8082',
        // target:'https://pro.scm.tysp.com/_javaMain',//生产环境
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      [process.env.VUE_APP_BASE_API_PURCHASE]: {
        // target: 'http://192.168.1.198:8009', //测试环境
        target: 'http://47.108.149.12:8009',
        // target:'https://pro.scm.tysp.com',//生产环境
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API_PURCHASE]: ''
        }
      },
      [process.env.VUE_APP_BASE_API_RICH_TEXT]: {
        // target: 'http://192.168.1.198:9205', //测试环境
        target: 'http://47.108.149.12:9205',
        // target:'https://pro.scm.tysp.com/_javaRichText',//生产环境
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API_RICH_TEXT]: ''
        }
      }
    }
    // disableHostCheck: true
  },
}
