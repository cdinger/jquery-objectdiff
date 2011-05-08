jquery-objectdiff  - a jQuery plugin

This plugin is just a helper function for calculating a diff of two similar
objects ala ActiveRecord's changes hash. Just pass in two objects and this
function will return an object of changes that contains only the properties 
that have changed. Differences are stored in arrays; the first element has 
the 'before' value and the second element is the 'after' value.

Usage:

    var before = {id:123, name:{first:"Johnny", last:"Johnson"}};
    var after = {id:123, name:{first:"John", last:"Johnson"}, age:30};
    var changes = $.objectDiff(before, after);

Result (contents of changes):

    {name: {first:["Johnny","John"]}, age:[null,30]}

