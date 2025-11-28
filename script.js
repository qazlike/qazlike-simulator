document.addEventListener("DOMContentLoaded", function(){
  const btn = document.getElementById('calculateBtn');
  const res = document.getElementById('result');
  btn.addEventListener('click', function(){
    const b = Number(document.getElementById('budget').value);
    const p = Number(document.getElementById('population').value);
    if(!b || !p){ res.innerHTML = '<b>Error:</b> enter numbers'; return; }
    const per = (b/p).toFixed(2);
    res.innerHTML = '<h3>Budget per citizen: '+per+'</h3>';
  });
});
