function getCacheData(key) {
    return window.cache[key];
}
var tom = getCacheData('tom');
tom.run();
