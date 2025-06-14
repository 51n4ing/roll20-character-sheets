on("change:cthulhu_mythos", function() {
  getAttrs(["cthulhu_mythos"], function(values) {
    const mythos = parseInt(values.cthulhu_mythos) || 0;
    const san_max = 99 - mythos;
    setAttrs({ san_max: san_max });
  });
});
