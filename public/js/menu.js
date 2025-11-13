document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.getElementById('mobileToggle');
  if(!toggle) return;
  toggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
  });
});
