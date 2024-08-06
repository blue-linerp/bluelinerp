self.__BUILD_MANIFEST = function(s, c, e) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:path*/_meta",
                destination: e
            }],
            fallback: []
        },
        "/": [s, c, "static/css/7efbcb4d290c74eb.css", "static/chunks/pages/index-58d6904a7c04a872.js"],
        "/404": [s, "static/chunks/pages/404-f6adea097cdb32d1.js"],
        "/_error": ["static/chunks/pages/_error-dd90bb46189eedd0.js"],
        "/business": [s, c, "static/css/4d80f20dbec94a26.css", "static/chunks/pages/business-46a5b17d9b91a2f8.js"],
        "/city": [s, c, "static/css/9269008c6cf06f08.css", "static/chunks/pages/city-40f284d613e08d10.js"],
        "/docs": [s, "static/chunks/pages/docs-20962907011a16c0.js"],
        "/docs/definitions": [s, "static/chunks/pages/docs/definitions-9d8d89e8250aa5c7.js"],
        "/docs/keybind": [s, "static/chunks/pages/docs/keybind-09ffccf7e0323684.js"],
        "/docs/login": [s, "static/chunks/pages/docs/login-aa21dc0c6ff8e86b.js"],
        "/docs/rules": [s, "static/chunks/pages/docs/rules-e2c27db8abc9643b.js"],
        "/groups": [s, c, "static/css/0f2afa78cdbce1e9.css", "static/chunks/pages/groups-db97c2bc4104750f.js"],
        "/webmap": [s, "static/chunks/pages/webmap-2e4b3944f33083ca.js"],
        sortedPages: ["/", e, "/_app", "/_error", "/business", "/city", "/docs", "/docs/definitions", "/docs/keybind", "/docs/login", "/docs/rules", "/groups", "/webmap"]
    }
}("static/chunks/220-34feffbd2cd1f96f.js", "static/chunks/801-f29010ac79646ae6.js", "/404"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();