(function(){
    var _7bd4 = {};
    _7bd4.f = {}
    // cached modules
    _7bd4.m = {};
    _7bd4.r = function(id) {
        var cached = _7bd4.m[id];
        // resolve if in cache
        if (cached) {
            return cached.m.exports;
        }
        var file = _7bd4.f[id];
        if (!file)
            return;
        cached = _7bd4.m[id] = {};
        cached.exports = {};
        cached.m = { exports: cached.exports };
        file.call(cached.exports, cached.m, cached.exports);
        return cached.m.exports;
    };
// default/index.js
_7bd4.f[0] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
function a() {
    console.log('a');
}
exports.a = a;
}
_7bd4.r(0)
})();