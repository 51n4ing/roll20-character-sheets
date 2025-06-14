on("change:cthulhu_mythos", function() {
  getAttrs(["cthulhu_mythos"], function(values) {
    const mythos = parseInt(values.cthulhu_mythos) || 0;
    const san_max = 99 - mythos;
    setAttrs({ san_max: san_max });
  });
});

on("change:hp change:hp_max", function() {
  getAttrs(["hp", "hp_max"], function(values) {
    const hp = parseInt(values.hp) || 0;
    const max = parseInt(values.hp_max) || 1;
    const percent = Math.max(0, Math.min(100, (hp / max) * 100));
    setAttrs({
      hp_bar: percent + "%"
    });
  });
});
