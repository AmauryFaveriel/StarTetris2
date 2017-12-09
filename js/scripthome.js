  //Pour le texte clignotant
      var blink_speed = 500; var t = setInterval(function () {
        var ele = document.querySelector('.choose');
        ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
       }, blink_speed);



  //Pour les signes
    var left = document.querySelector('.sideItemLeft');
    var right = document.querySelector('.sideItemRight');

    left.addEventListener('mouseover', function () {
      right.style.opacity = '0.3';
    })
    left.addEventListener('mouseout', function () {
      right.style.opacity = '1';
    })

    right.addEventListener('mouseover', function () {
      left.style.opacity = '0.3';
    })
    right.addEventListener('mouseout', function () {
      left.style.opacity = '1';
    })
