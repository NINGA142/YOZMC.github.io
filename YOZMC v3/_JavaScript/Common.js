function Onload() 
{
  localStorage.setItem('menu status', 'close')
}
function menu() 
{
  let status = localStorage.getItem('menu status');
  let menu_button = document.getElementById('mno');
  let menu_button_span1 = document.querySelector('.menu-btn span');
  let menu_button_span2 = document.querySelector('.menu-btn span:nth-child(2)');
  let menu_button_span3 = document.querySelector('.menu-btn span:nth-child(3)')
  
  if (status == 'close') 
  {
    menu_button.style.display='block';
    localStorage.setItem('menu status', 'open')
    menu_button_span1.style.width='18%';
    menu_button_span1.style.height='100%';
    menu_button_span2.style.width = '18%';
    menu_button_span2.style.height = '100%';
    menu_button_span3.style.width = '18%';
    menu_button_span3.style.height = '100%';
    menu_button_span1.style.marginTop ='0';
    menu_button_span2.style.marginTop ='0';
    menu_button_span3.style.marginTop ='0';
    menu_button_span1.style.marginLeft ='0';
    menu_button_span2.style.marginLeft ='37.5%';
    menu_button_span3.style.marginLeft ='75%';
    
  }else if (status == 'open')
  {
    menu_button.style.display='none';
    localStorage.setItem('menu status', 'close');
    menu_button_span1.style.width = '100%';
    menu_button_span1.style.height = '18%';
    menu_button_span2.style.width = '100%';
    menu_button_span2.style.height = '18%';
    menu_button_span3.style.width = '100%';
    menu_button_span3.style.height = '18%';
    menu_button_span1.style.marginTop = '0';
    menu_button_span2.style.marginTop = '37.5%';
    menu_button_span3.style.marginTop = '75%';
    menu_button_span1.style.marginLeft = '0';
    menu_button_span2.style.marginLeft = '0';
    menu_button_span3.style.marginLeft = '0';
  }
}