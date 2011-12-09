var countdown;

if (typeof require !== 'undefined') {
    countdown = require('../public/countdown');
}

exports.create = function () {
    var responseTime;
    var requestTime;
    var updated;

    function isExpired(date) {
        return requestTime === undefined ||
            getTimeSinceUpdate(date) > 60000 &&
                getTimeSinceRequest(date.getTime()) > 30000 &&
                getTimeSinceResponse(date.getTime()) > 10000;
    }

    function setUpdated(u) {
        updated = u;
    }

    function getTimeSinceUpdate(date) {
        if (updated) {
            return countdown.getNow(date) - countdown.millisSinceMidnight(updated);
        } else {
            return '?';
        }
    }

    function getTimeSinceRequest(now) {
        return now - requestTime;
    }

    function getTimeSinceResponse(now) {
        return now - responseTime;
    }

    function setRequest(currentTimeMillis) {
        requestTime = currentTimeMillis;
    }

    function setResponse(currentTimeMillis) {
        responseTime = currentTimeMillis;
    }

    function getResponseTime() {
        return responseTime;
    }

    function getDebugString() {
        var now = new Date();
        return getTimeSinceUpdate(now) + '⊂' +
            getTimeSinceRequest(now.getTime()) + '⊃' +
            getTimeSinceResponse(now.getTime());
    }

    return {
        getResponseTime: getResponseTime,
        setUpdated: setUpdated,
        setRequest: setRequest,
        setResponse: setResponse,
        isExpired: isExpired,
        getDebugString: getDebugString
    }
};