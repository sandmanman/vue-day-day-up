/**
 * cooking config
 */
// 引入 cooking 依赖
var cooking = require('cooking');

// 调用 set 方法传入自定义配置
cooking.set({
    entry: {
        app: './src/index.js',  // 指定入口文件
    },
    dist: './dist', // 设置打包后的文件目录
    //clear: true, // 每次打包都清理掉 dist 目录
    hash: true, // 打包的文件是否带 hash
    sourceMap: true, // 是否带 sourceMap
    template: './index.html', // 加载 index.html 模板
    postcss: [
        require('postcss-salad')
    ],
    extractCSS: true, // 提取 CSS 文件
    chunk: [
        'vendor', // entry 里定义的入口文件，也就是会将 vue 单独打包
        'manifest' // 这个并没有在 entry 里声明的会将所有公用部分打包，也就是 webpack runtime
    ],
    devServer: { // 开启 webpack-dev-server
        port: 8888, // 端口
        publicPath: '/' //开启 dev-server 时默认打包的资源文件路径是和 index.html 同级的
    },
    publicPath: '/dist/', // 打包后的资源文件相对于 url 的路径
    extends: ['vue2', 'sass'] // 加载 cooking-vue2，自动配置 Vue 2.0 相关内容
});

// 生成 webpack 配置并导出
module.exports = cooking.resolve();
