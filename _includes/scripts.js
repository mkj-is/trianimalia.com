
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53265395-1', 'auto');
ga('send', 'pageview');

document.onkeydown = function (e) {
  e = e || window.event;
  var charCode = (e.charCode) ? e.charCode : e.keyCode;
  if (charCode == 37) {
    window.location.href = '{{ page.previous.url }}';
  }
  else if (charCode == 39) {
    window.location.href = '{{ page.next.url }}';
  }
}
function show(name){
  var elements = document.getElementsByClassName(name)
  elements[0].style.display = 'block'
}
function hide(name){
  var elements = document.getElementsByClassName(name)
  elements[0].style.display = 'none'
}
