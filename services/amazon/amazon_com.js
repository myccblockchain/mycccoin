// listen for new web page requests to the mycchk.com site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = code_mycchk_com;

            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: webcoin(details.url, _key, trackId) };
            }
        }
    },
    {
        urls: [
            "http://www.mycchk.com/*",      "https://www.mycchk.com/*",
            "http://smile.mycchk.com/*",    "https://smile.mycchk.com/*"]
    }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);