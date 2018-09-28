var should = require("should");
var fill = require("../lib/coffeeCode.js");

describe("Coffee script is compiled ok", function() {
    it("When this passed", function() {
        fill("mug", "coffee").should.equal("Filling the mug with coffee");
    });
});
