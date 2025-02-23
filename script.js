/*I am going to call all my declared id's in order that if some one click on something in header, scroll to more information in body and also that subject become red*/

const about = document.getElementById('about');
const skill = document.getElementById('skill');
const lan = document.getElementById('lan');
const eduu = document.getElementById('eduu');
const exp = document.getElementById('exp');
const about1 = document.getElementById('about1');
const skill1 = document.getElementById('skill1');
const lan1 = document.getElementById('lan1');
const eduu1 = document.getElementById('eduu1');
const exp1 = document.getElementById('exp1');
about.addEventListener('click', function(){
  about1.style.backgroundColor='red';
  about1.scrollIntoView({behavior: 'smooth'});
})
skill.addEventListener('click', function(){
  skill1.style.backgroundColor='red';
  skill1.scrollIntoView({behavior: 'smooth'});
})
lan.addEventListener('click', function(){
  lan1.style.backgroundColor='red';
  lan1.scrollIntoView({behavior: 'smooth'});
})
eduu.addEventListener('click', function(){
  eduu1.style.backgroundColor='red';
  eduu1.scrollIntoView({behavior: 'smooth'});
})
exp.addEventListener('click', function(){
  exp1.style.backgroundColor='red';
  exp1.scrollIntoView({behavior: 'smooth'});
})
eduu.addEventListener('click', function(){
  eduu1.style.backgroundColor='red';
  eduu1.scrollIntoView({behavior: 'smooth'});
})
exp.addEventListener('click', function(){
  exp1.style.backgroundColor='red';
  exp1.scrollIntoView({behavior: 'smooth'});
})
