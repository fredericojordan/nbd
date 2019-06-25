TweenMax.from(".planet", 0.9, {opacity: 0, scale:0, ease:Elastic.easeOut});
TweenMax.to(".planet", 6, {opacity: 0.05, x:628, y:100, rotation:1440, ease:Bounce.easeOut, delay:1});