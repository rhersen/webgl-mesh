var webgl = require("./webgl");
var shaders = require("./shaders");

var canvas = $('canvas#webgl');

var vertexLoaded = function (data) {
    shaders.setVertex(data);
    $.get('/shader.frag', '', fragmentLoaded, 'text');
};

var fragmentLoaded = function (data) {
    shaders.setFragment(data);
    webgl.init(canvas[0].getContext("experimental-webgl"));
    webgl.mousemove(250, 250);
    webgl.draw();
};


$.get('/shader.vert', '', vertexLoaded, 'text');

canvas.mousemove(function (event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    webgl.mousemove(x, y);
    webgl.draw();
});
