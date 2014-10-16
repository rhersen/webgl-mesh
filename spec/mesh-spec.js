var target = require('../public/modules/mesh');

describe('parser', function () {

    it('should return faces', function () {
        var model = target.create(1);
        var result = model.getFaces();
        expect(result.length).toEqual(4);
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(1);
        expect(result[2]).toEqual(2);
        expect(result[3]).toEqual(0);
    });

});
