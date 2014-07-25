
  var svg = document.getElementById("logo");
  svg.addEventListener("load",function(){
    var color = Please.make_color({
      saturation: 0.4
    })
    var scheme = Please.make_scheme(Please.HEX_to_HSV(color), {
      scheme_type: 'analogous',
    })
    var svgDoc = svg.contentDocument;
    var s = document.getElementById("logo")
    var triangles = svgDoc.getElementById('triangles').childNodes;
    var pointMap = []
    for(var i = 0; i < triangles.length; i++) {
      var triangle = triangles[i]
      if(triangle.nodeType == 1) {
        triangle.setAttribute('fill', scheme[Math.floor(Math.random() * 6)])
        var path = triangle.getAttribute('d')
        var points = path.split(' ')
        for(var j = 0; j < points.length; j++) {
          var point = points[j].substring(1)
          if(pointMap[point]) {
            points[j] = points[j][0] + pointMap[point]
          } else {
            var numbers = point.split(',')
            for (var k = 0; k < numbers.length; k++) {
              numbers[k] = parseInt(numbers[k]) - 3 + Math.floor(Math.random() * 6)
            };
            var newPoint = numbers[0] + "," + numbers[1]
            pointMap[point] = newPoint
            points[j] = points[j][0] + newPoint
          }
        }
        triangle.setAttribute('d', points.join(' '))
      }
    }

    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
      links[i].style.color = color;
    }
  })

