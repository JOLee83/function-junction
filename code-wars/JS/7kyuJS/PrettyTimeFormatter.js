function prettyTimeFormat(seconds) {
  if (seconds < 60) {
    return Math.floor(seconds).toString()
  }
  if (seconds < 3600) {
    let min = Math.floor(seconds / 60)
    let sec = ("0" + Math.floor(seconds - (min * 60))).slice(-2)

    return `${min}:${sec}`
  }
  if (seconds >= 3600) {
    let hr = Math.floor(seconds / 3600)
    let min = ("0" + Math.floor((seconds - (3600 * hr)) / 60)).slice(-2)
    let sec = ("0" + Math.floor(seconds - (hr * 3600) - (min * 60))).slice(-2)

    return `${hr}:${min}:${sec}`
  }
}