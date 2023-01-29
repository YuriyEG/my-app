

import './App.css';
import Page from './page';
import ShowBuildPhoto from './Showbuildphoto';









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
            <div className='header'>
                  
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
            <div className='header'>
                  
            </div>
            <div  className='slide'>
                        <div className='modul2'>О ТЕХНОЛОГИИ</div>
                        <img src='1.jpg' alt='1'/> 
            </div>
            <div  className='slide'>
                        <div className='modul2'>ВАРИАНТЫ ПРОЕКТОВ</div>
                        <img src='1.jpg' alt='1'/> 
            </div>
            <div  className='slide'>
                        <div className='modul2'>ПОЧЕМУ СТОИТ КУПИТЬ ИМЕННО У НАС</div>
                        <img src='1.jpg' alt='1'/> 
            </div>
            <div  className='slidebuild'>
                        <div className='modul2'>ПРОЦЕСС ИЗГОТОВЛЕНИЯ</div>
                        {/* <img src='1.jpg' alt='1'/>
                        <img src='2.jpg' alt='2'/>
                        <img src='3.jpg' alt='3'/>
                        <img src='4.jpg' alt='4'/>
                        <img src='5.jpg' alt='5'/>
                        <img src='6.jpg' alt='6'/>
                        <img src='7.jpg' alt='7'/> */}
                        <div className='divscroll'>
                              <div className="scroll">
                                          <img src='1.jpg' alt=''/>
                                          <img src='2.jpg' alt=''/>
                                          <img src='3.jpg' alt=''/>
                                          <img src='4.jpg' alt=''/>
                                          <img src='5.jpg' alt=''/>
                                          <img src='6.jpg' alt=''/>
                  

                              </div>

                        </div>
            </div> 
            <div  className='slide'>
                        <div className='modul2'>ПОЛУЧИТЬ РАСЧЕТ СТОИМОСТИ</div>
                        <img src='1.jpg' alt='1'/> 
            </div>          
            <div  className='slide'>
                        <div className='modul2'>ЗАКЛЮЧЕНИЕ</div>
                        <img src='1.jpg' alt='1'/> 
            </div>
            <div className='header'>
                  
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

            

            {/* <div className='buildfoto'>
                  <ShowBuildPhoto />
                  
            </div>  */}
            {/* <div className='header'>
                  
            </div>   */}
            
            
            
             
             
                 
            
            

            

            {/* <div className='footer'>
                  <div className='buildfoto'>
                  <ShowBuildPhoto />
                  
                  </div> 

            
                  
            </div>  */}
            
                  <ShowBuildPhoto />
            



            
            
                        
                        
                        
                  

            
      
            
      </div>
  )
 
}

export default App;
