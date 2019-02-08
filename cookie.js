function getCookie(cookieKey) {
    var cookieString = document.cookie + ";"
    var cookieKeyIndex = cookieString.indexOf(cookieKey)
    console.log("KeyIndex: " + cookieKeyIndex)
    if (cookieKeyIndex === -1) {
        return null
    }
    var endOfCookieVal = cookieString.substring(cookieKeyIndex).indexOf(";")
    console.log("EndKeyIndex: " + endOfCookieVal)
    return cookieString.substring(cookieKeyIndex + cookieKey.length + 1, cookieKeyIndex + endOfCookieVal)
}

var cookieKey = "snkrs-hunt-count"
var cookieVal = getCookie(cookieKey)
console.log("CookieVal " + cookieVal)
var cookieInt = 0
if (cookieVal != null && !isNaN(cookieVal)) {
    cookieInt = parseInt(cookieVal)
}
console.log("CookieInt " + cookieVal)

var button = document.getElementById("check_count")
button.innerHTML = "Check In Count: " + cookieInt
document.cookie = cookieKey + "=" + (cookieInt + 1)
