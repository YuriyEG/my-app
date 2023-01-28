

import './App.css';
import Page from './page';
import ShowBuildPhoto from './Showbuildphoto';


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}









function App() {
      
  return (
      <div>
            <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum...</p>
</div>


            <div className='header'>
                  <div className='modul'>
                        ЖИЛЫЕ МОДУЛИ
                  </div>
                  <div className='phone'>
                        8 (800) 885-15-88
                  </div>
            </div>
            
            <div className='logo-picture'>
            
            </div>
            <div className='header'>
                  <div className='modul'>
                        ЖИЛЫЕ МОДУЛИ
                  </div>
                  <div className='phone'>
                        8 (800) 885-15-88
                  </div>
            </div>
            <div className='buildfoto'>
                  <ShowBuildPhoto />
                  
            </div>
            <div className='header'>
                  <div className='modul'>
                        ЖИЛЫЕ МОДУЛИ
                  </div>
                  <div className='phone'>
                        8 (800) 885-15-88
                  </div>
            </div>
            <div className='pharagraph'>
                  <div className='pharagraph2'>
                        <h1>О ТЕХНОЛОГИИ</h1>
                        <p>Производство жилых модульных зданий, на базе каркасно панельной технологии</p>
                        
                        <h1>Преимущества</h1>
                        <h2>Мобильность</h2>
                        <h2>Короткие сроки монтажа</h2>
                        <h2>Монтаж под ключ</h2>
                        <h2>Полное инженерное оснащение</h2>
                  </div>
            </div>
            

            <div className='buildfoto'>
                  <ShowBuildPhoto />
                  
            </div> 
            <div className='header'>
                  <div className='modul'>
                        ЖИЛЫЕ МОДУЛИ
                  </div>
                  <div className='phone'>
                        8 (800) 885-15-88
                  </div>
            </div>  
            
            
            
             
             
                 
            
            <div className='buildfoto'>
                  <ShowBuildPhoto />
                  
            </div> 
            <div className='header'>
                  <div className='modul'>
                        ЖИЛЫЕ МОДУЛИ
                  </div>
                  <div className='phone'>
                        8 (800) 885-15-88
                  </div>
            </div>

            <div className='pharagraph'>
                  <div className='pharagraph2'>
                        <h1>О ТЕХНОЛОГИИ</h1>
                        <p>Производство жилых модульных зданий, на базе каркасно панельной технологии</p>
                        
                        <h1>Преимущества</h1>
                        <h2>Мобильность</h2>
                        <h2>Короткие сроки монтажа</h2>
                        <h2>Монтаж под ключ</h2>
                        <h2>Полное инженерное оснащение</h2>
                  </div>
            </div>
            <div className='form'>
                  <form>
                        <input></input>
                        <input></input>
                        <input></input>
                        <input type='submit' value='Отправить' class='mysubmit'/>
                  </form>
                  
            </div>
            
                        
                        
                        
                  

            
      
            
      </div>
  )
 
}

export default App;
