function create(n) {
    function getVertices() {
        var r = [];

        r.push(1);
        r.push(0);
        r.push(0);
        r.push(1);

        r.push(-0.5);
        r.push(0.866);
        r.push(0);
        r.push(1);

        r.push(-0.5);
        r.push(-0.866);
        r.push(0);
        r.push(1);

        return new Float32Array(r);
    }

    function getFaces() {
        var r = [];
        r.push(0);
        r.push(1);
        r.push(2);
        r.push(0);
        return new Uint16Array(r);
    }

    return { getVertices: getVertices, getFaces: getFaces };
}

exports.create = create;
