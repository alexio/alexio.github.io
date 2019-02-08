const cookieKeyOld = "snkrs-hunt-count";
const firstCookieKey = "snkrs-first-spot";
const secondCookieKey = "snkrs-second-spot";
const finalCookieKey = "snkrs-final-spot";

function getCookie(cookieKey) {
    var cookieString = document.cookie + ";";
    var cookieKeyIndex = cookieString.indexOf(cookieKey);
    console.log("KeyIndex: " + cookieKeyIndex);
    if (cookieKeyIndex === -1) {
        return null
    }
    var endOfCookieVal = cookieString.substring(cookieKeyIndex).indexOf(";");
    console.log("EndKeyIndex: " + endOfCookieVal);
    return cookieString.substring(cookieKeyIndex + cookieKey.length + 1, cookieKeyIndex + endOfCookieVal)
}

function hasCookie(cookieKey) {
    return document.cookie.indexOf(cookieKey) !== -1 && getCookie(cookieKey) === "true"
}

function putCookie(key, value) {
    document.cookie = key + "=" + value
}

function getCookieInt(cookieKey) {
    var cookieVal = getCookie(cookieKey);
    console.log("CookieVal " + cookieVal);
    var cookieInt = 0;
    if (cookieVal != null && !isNaN(cookieVal)) {
        cookieInt = parseInt(cookieVal)
    }
    return cookieInt
}

function updateButton(text) {
    var button = document.getElementById("check_count");
    button.innerHTML = text
}

function clearCookies() {
    putCookie(firstCookieKey, "false");
    putCookie(secondCookieKey, "false");
    putCookie(finalCookieKey, "false");
}

function hintCount() {
    var hintCount = 0;
    let keys = [firstCookieKey, secondCookieKey, finalCookieKey];
    keys.forEach(function (key) {
        console.log(key);

        if (hasCookie(key)) {
            hintCount += 1
        }
    });
    return hintCount
}

function setRemainingMessage() {
    let count = hintCount();
    var message;
    if (count === 3) {
        setDeepLink();
        message = "Shoe unlocked!!";
    } else {
        var remaining = 3 - count
        message = "Only " + remaining + " more spots left!";
    }
    updateButton(message)
}

function setDeepLink() {
    let deepLink = "SNKRS://story/6dc85f9a-61ae-452c-ab47-a3ec7d8827f1";
    let button = document.getElementById("appLink");
    button.href = deepLink;
}

// var cookieInt = getCookieInt(cookieKeyOld);
// cookieInt += 1;
// putCookie(cookieKey, cookieInt);
// console.log("CookieInt " + cookieVal);
// updateButton("Check In Count: " + cookieInt);

//Nike - Scavenger Hunt Location 1
