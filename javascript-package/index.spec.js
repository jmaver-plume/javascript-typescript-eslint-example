const { foo } = require("./index");
require('chai').should()

describe("foo", function () {
  it.only("works", function () {
    foo().should.deep.eq(3);
  });
});
