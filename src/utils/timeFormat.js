function getDateDay (timestamp) {
  let date = new Date(timestamp)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  let W = (date.getDay())
  switch (W) {
    case 1:
      W = '周一'
      break
    case 2:
      W = '周二'
      break
    case 3:
      W = '周三'
      break
    case 4:
      W = '周四'
      break
    case 5:
      W = '周五'
      break
    case 6:
      W = '周六'
      break
    case 7:
      W = '周日'
      break

  }
  // let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  // let m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  // let s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds())

  return {date :Y + M + D,day:W}
}

export {
  getDateDay
}