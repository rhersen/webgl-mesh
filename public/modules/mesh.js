function create(n) {
    function getVertices() {
        var r = [];

        for (var i = 0; i <= n; i++) {
            for (var j = 0; j <= n; j++) {
                r.push(2 * i / n - 1);
                r.push(0);
                r.push(2 * j / n - 1);
                r.push(1);
            }
        }

        return new Float32Array(r);
    }

    function getFaces() {
        var r = [];
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                r.push((n + 1) * i + j);
                r.push((n + 1) * i + j + 1);
                r.push((n + 1) * i + n + j + 1);
                r.push((n + 1) * i + n + j + 1);
                r.push((n + 1) * i + j + 1);
                r.push((n + 1) * i + n + j + 2);
            }
        }
        return new Uint16Array(r);
    }

    return { getVertices:getVertices, getFaces:getFaces };
}

exports.create = create;
