/**
 * @file 本文件为服务调用对象配置实现
 * @author PRD UX R&D Dept.
 * 配置项目说明:
 * commonConfig -- 默认服务调用对象配置
 * root -- 分域服务调用对象配置，其中的属性对应具体的一个域的服务调用配置
 * (详细配置项参见{@link https://github.com/axios/axios Axios}官网)
 * @example <caption>演示配置</caption>
 * // 定义默认服务调用对象超时时间为5秒，同时，定义一个
 * // 关联到 http://10.18.9.11:3001/ 这个域上的服务的
 * // 服务调用对象 foo，在此域上的服务调用超时时间为2秒
 * // 且请求头上带又一个自定义http头字段 myHead。
 * const conf = {
 *   commonConfig: {
 *     timeout: 5000,
 *   },
 *   root: {
 *     foo: {
 *       baseURL: 'http://10.18.9.11:3001/',
 *       timeout: 2000,
 *       headers: {
 *         myHead: 'foo-head',
 *       },
 *     }
 *   }
 * }
 */

// 静态配置对象，此对象在 /static/conf/app-conf.js 内配置
const appConf = window.APP_CONF

/**
 * 服务调用对象配置
 * @type {Object}
 */
var isPro = process.env.NODE_ENV === 'production' //process.env.NODE_ENV用于区分是生产环境还是开发环境
const conf = {
  commonConfig: {
    timeout: 20000
  },
  
  root: {
    default: {
        baseURL: isPro ?  'https://www.yiyuanda.net:8443' : 'http://localhost:8181'     //前面一个是你服务器的地址，后面一个是跨域的接口名
        // baseURL: 'http://188.131.147.95:8080'
    },
    picurl: {
      baseURL: 'http://188.131.147.95'
    }

  }
}

// 将优先的静态配置覆盖本配置
function overrideConf () {
  let urls = 'http://188.131.147.95:8080'
  let root = conf.root
  if (urls) {
    for (let key in urls) {
      if (key in root) {
        root[key].baseURL = urls[key]
      }
    }
  }
}

// 调整配置优先级
overrideConf()

export default conf
