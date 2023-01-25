

import './App.css';
import Page from './page';
import Builds from './builds';









function App() {
      
  return (
      <div>
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
            <div className='buildfoto'>
                  <Page />
            </div>   
            
            
             
            <div className='contact'>

                  <p><button>КОНТАКТЫ</button></p>
                  <p><button>О ТЕХНОЛОГИИ</button></p>      
                  <p><button>РАСЧИТАТЬ СТОИМОСТЬ</button></p>     
                              
          
            </div> 
            <div className='projects'>

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
