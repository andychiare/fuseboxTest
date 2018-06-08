(function(){
    var _11c4 = {};
    _11c4.f = {}
    // cached modules
    _11c4.m = {};
    _11c4.r = function(id) {
        var cached = _11c4.m[id];
        // resolve if in cache
        if (cached) {
            return cached.m.exports;
        }
        var file = _11c4.f[id];
        if (!file)
            return;
        cached = _11c4.m[id] = {};
        cached.exports = {};
        cached.m = { exports: cached.exports };
        file.call(cached.exports, cached.m, cached.exports);
        return cached.m.exports;
    };
// default/index.js
_11c4.f[0] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
function a() {
    console.log('a');
}
exports.a = a;
}
window['myWidget']=_11c4.r(0)
})();