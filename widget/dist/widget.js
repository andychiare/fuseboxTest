(function(){
    var _14ee = {};
    _14ee.f = {}
    // cached modules
    _14ee.m = {};
    _14ee.r = function(id) {
        var cached = _14ee.m[id];
        // resolve if in cache
        if (cached) {
            return cached.m.exports;
        }
        var file = _14ee.f[id];
        if (!file)
            return;
        cached = _14ee.m[id] = {};
        cached.exports = {};
        cached.m = { exports: cached.exports };
        file.call(cached.exports, cached.m, cached.exports);
        return cached.m.exports;
    };
// default/index.js
_14ee.f[0] = function(module,exports){
Object.defineProperty(exports, '__esModule', { value: true });
function a() {
    console.log('a');
}
exports.a = a;
}
window['myWidget']=_14ee.r(0)
})();