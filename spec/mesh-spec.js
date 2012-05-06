var target = require('../public/modules/mesh');

describe('parser', function () {
    it('should return vertices for n=1', function () {
        var n = 1;
        var model = target.create(n);
        var result = model.getVertices();
        expect(result.length).toEqual((n + 1) * (n + 1) * 4);
        expect(result[0]).toEqual(-1);
        expect(result[1]).toEqual(0);
        expect(result[2]).toEqual(-1);
        expect(result[4]).toEqual(-1);
        expect(result[5]).toEqual(0);
        expect(result[6]).toEqual(1);
        expect(result[8]).toEqual(1);
        expect(result[9]).toEqual(0);
        expect(result[10]).toEqual(-1);
        expect(result[12]).toEqual(1);
        expect(result[14]).toEqual(1);
    });

    it('should return vertices for n=2', function () {
        var n = 2;
        var model = target.create(n);
        var result = model.getVertices();
        expect(result.length).toEqual((n + 1) * (n + 1) * 4);
        expect(result[0]).toEqual(-1);
        expect(result[1]).toEqual(0);
        expect(result[2]).toEqual(-1);
        expect(result[8]).toEqual(-1);
        expect(result[9]).toEqual(0);
        expect(result[10]).toEqual(1);
        expect(result[24]).toEqual(1);
        expect(result[25]).toEqual(0);
        expect(result[26]).toEqual(-1);
        expect(result[32]).toEqual(1);
        expect(result[34]).toEqual(1);
    });

    it('should return faces', function () {
        var model = target.create(1);
        var result = model.getFaces();
        expect(result.length).toEqual(6);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(1);
        expect(result[2]).toEqual(2);
        expect(result[3]).toEqual(2);
        expect(result[4]).toEqual(1);
        expect(result[5]).toEqual(3);
    });

    it('should return faces', function () {
        var model = target.create(2);
        var result = model.getFaces();
        expect(result.length).toEqual(24);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(1);
        expect(result[2]).toEqual(3);
        expect(result[3]).toEqual(3);
        expect(result[4]).toEqual(1);
        expect(result[5]).toEqual(4);
        expect(result[6]).toEqual(1);
        expect(result[7]).toEqual(2);
        expect(result[8]).toEqual(4);
        expect(result[9]).toEqual(4);
        expect(result[10]).toEqual(2);
        expect(result[11]).toEqual(5);
        expect(result[12]).toEqual(3);
    });
});
