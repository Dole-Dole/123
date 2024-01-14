"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 100,
})
  .move(-17)
  .pause(1000)
  .move(17)
  .delete()
  .go();
