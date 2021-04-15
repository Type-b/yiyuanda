
let intervalTime = function (startTime, endTime) {
  // var timestamp=new Date().getTime(); //计算当前时间戳
  var timestamp = (Date.parse(new Date())) / 1000// 计算当前时间戳 (毫秒级)
  var date1 = '' // 开始时间
  if (timestamp < startTime) {
    date1 = startTime
  } else {
    date1 = timestamp // 开始时间
  }
  var date2 = endTime // 结束时间
  // var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
  var date3 = (date2 - date1) / 1000 // 时间差的毫秒数
  // 计算出相差天数
  var days = Math.floor(date3 / (24 * 3600))
  // 计算出小时数

  var leave1 = date3 % (24 * 3600) // 计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600))
  // 计算相差分钟数
  var leave2 = leave1 % (3600) // 计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60))
  var test = date2 - date1
  // 计算相差秒数

  var leave3 = leave2 % (60) // 计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3)
  // console.log(days + '天 ' + hours + '小时 ')
  // return days + '天 ' + hours + '小时 ' + minutes + ' 分钟' + seconds + ' 秒' + test
  return days
}
export default intervalTime
