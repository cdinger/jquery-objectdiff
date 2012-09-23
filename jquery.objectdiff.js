/**
 * jquery-objectdiff  - a jQuery plugin
 *
 * version 1.0
 *
 * This plugin is just a helper function for calculating a diff of two similar
 * objects ala ActiveRecord's changes hash. Just pass in two objects and this
 * function will return an object of changes that contains only the properties 
 * that have changed. Differences are stored in arrays; the first element has 
 * the 'before' value and the second element is the 'after' value.
 * 
 * Usage:
 * 
 *    var before = {id:123, name:{first:"Johnny", last:"Johnson"}};
 *    var after = {id:123, name:{first:"John", last:"Johnson"}, age:30};
 *    var changes = $.objectDiff(before, after);
 *
 * Result (contents of changes):
 *
 *    {name: {first:["Johnny","John"]}, age:[null,30]}
 *
 */
(function($){ 
  $.objectDiff = function(a, b, c) {
    c = {};
    $.each([a, b], function(index, obj) {
      for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (typeof obj[prop] === "object" && obj[prop] !== null) {
            c[prop] = $.objectDiff(a[prop], b[prop], c);
          }
          else {
            if (a[prop] !== b[prop]) {
              c[prop] = [a[prop], b[prop]];
            }
          }
        }
      }
    });
    return c;
  }
})(jQuery);
