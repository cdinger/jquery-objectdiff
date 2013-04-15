describe("objectDiff", function() {
  it("should detect new properties in a simple, shallow object", function() {
    var before = {id:123, name:"blah"};
    var after = {id:123, name:"blah", age:30};
    var diff = {age:[undefined,30]};
    expect($.objectDiff(before, after)).toEqual(diff);
  });

  it("should detect deleted properties in a simple, shallow object", function() {
    var before = {id:123, name:"blah", age:30};
    var after = {id:123, name:"blah"};
    var diff = {age:[30, undefined]};
    expect($.objectDiff(before, after)).toEqual(diff);
  });

  it("should detect a change in a property value in a simple, shallow object", function() {
    var before = {id:123, name:"blah"};
    var after = {id:123, name:"asdf"};
    var diff = {name:["blah","asdf"]};
    expect($.objectDiff(before, after)).toEqual(diff);
  });

  it("should detect a change in a property value in a one-level nested object", function() {
    var before = {id:123, name: {first:"Johnny", last:"Johnson"}};
    var after = {id:123, name: {first:"John", last:"Johnson"}};
    var diff = {name:{first:["Johnny","John"]}};
    expect($.objectDiff(before, after)).toEqual(diff);
  });

  // Github issue #1
  it("should not detect a change if before and after value is null", function() {
    var before = {id:null};
    var after = {id:null};
    var diff = {};
    expect($.objectDiff(before, after)).toEqual(diff);
  });

  // Github issue #2
  it("should not throw exception when encountering sub-objects", function() {
    var a = { x: { i:1, j:2, k: 3 }};
    var b = { x: { i:2, j:2, k: 3 }, y: { i:2 }};
    var diff = {x:{i:[1,2]}, y:{i:[undefined,2]}};
    expect($.objectDiff(a, b)).toEqual(diff);
  });
});
