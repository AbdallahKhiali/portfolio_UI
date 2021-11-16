import React,{useEffect} from 'react'
import "../style/Scenographie.css"
import { TweenMax, TimelineLite,Power3 } from "gsap";




import $ from "jquery";

function Scenographie() {

    useEffect(() => {
        TweenMax.set(".scene_image", { width: 250 });

        var tl = new TimelineLite();

        $(document)
        .on("mouseover", ".span_project", function(evt) {
            tl = new TimelineLite();
            tl.to(".scene_image", 1, {
              width: "250px",
              ease: Power3.easeInOut
            });
          }).on("mouseout", ".span_project", function(evt) {
            tl = new TimelineLite();
            tl.to($(".scene_image"), 0.5, {
              width: 0,
              ease: Power3.easeInOut
            });


      
    
          });
          
     
          
          
        }, [])
      
    
        const Project1ImagesHandler=()=>{
            /*Lumiere Cache*/
            document.querySelector('.image1').setAttribute('src',require('../assets/P1-1.jpeg').default)
            document.querySelector('.image2').setAttribute('src',require('../assets/P1-2.jpeg').default )
            document.querySelector('.image3').setAttribute('src',require('../assets/P1-3.jpeg').default )
            document.querySelector('.image4').setAttribute('src',require('../assets/P1-4.jpeg').default )
            document.querySelector('.image5').setAttribute('src',require('../assets/P1-5.jpeg').default)
            console.log(document.querySelector('.image1'))
         
        }
        
        const Project2ImagesHandler=()=>{
            /*Cinema*/
           
            document.querySelector('.image1').setAttribute('src',require('../assets/P2-5.jpeg').default)
            document.querySelector('.image2').setAttribute('src',require('../assets/P2-2.jpg').default)
            document.querySelector('.image3').setAttribute('src',require('../assets/P2-3.jpeg').default)
            document.querySelector('.image4').setAttribute('src',require('../assets/P2-4.jpeg').default)
            document.querySelector('.image5').setAttribute('src',require('../assets/P2-1.jpg').default)
            console.log(document.querySelector('.image1'))
        }
        const Project3ImagesHandler=()=>{
            /*Restaurant*/

            document.querySelector('.image1').setAttribute('src',require('../assets/P3-1.jpg').default)
            document.querySelector('.image2').setAttribute('src',require('../assets/P3-2.jpeg').default)
            document.querySelector('.image3').setAttribute('src',require('../assets/P3-3.jpg').default)
            document.querySelector('.image4').setAttribute('src',require('../assets/P3-4.jpg').default)
            document.querySelector('.image5').setAttribute('src',require('../assets/P3-5.jpg').default)
            console.log(document.querySelector('.image1'))
        }
        const Project4ImagesHandler=()=>{
            /*Eindhoven*/

            document.querySelector('.image1').setAttribute('src',require('../assets/P4-1.jpg').default)
            document.querySelector('.image2').setAttribute('src',require('../assets/P4-2.jpg').default)
            document.querySelector('.image3').setAttribute('src',require('../assets/P4-3.jpeg').default)
            document.querySelector('.image4').setAttribute('src',require('../assets/P4-4.jpg').default)
            document.querySelector('.image5').setAttribute('src',require('../assets/P4-5.jpg').default)
            console.log(document.querySelector('.image1'))
        }
        // const Project5ImagesHandler=()=>{
          
        // }

  
    return (
                <div className="scene_wrapper" >
                    <img src={require('../assets/cinema1.jpeg').default} className="scene_image image1" alt="image1"/>
                    <img src={require('../assets/cinema2.jpeg').default} className="scene_image image2"alt="image2" />
                    <img  src={require('../assets/cinema3.jpeg').default} className="scene_image image3" alt="image3"/>
                    <img src={require('../assets/cinema4.jpeg').default} className="scene_image image4"alt="image4" />
                    <img src={require('../assets/cinema5.jpeg').default} className="scene_image image5" alt="image5"/>
                   
                   
                    <ul className="scene_projects" >
                        <li className="scene_project project1"  >
                            <div>
                                    <span text-data="Lumiere Caché" className="span_project" onMouseEnter={Project2ImagesHandler}  >
                                        Lumiere Caché
                                    </span>
                                    <span  className="span_project_year" >
                                       <ul>
                                           <li>2020</li>
                                        </ul> 
                                    </span>
                            </div>
                        </li>
                        <li className="scene_project project2"  >
                            <div>
                                    <span text-data="Eindhoven" className="span_project" onMouseEnter={Project4ImagesHandler} >
                                        Eindhoven
                                    </span>
                                    <span  className="span_project_year" >
                                       <ul>
                                           <li>2021</li>
                                        </ul> 
                                    </span>
                            </div>
                        </li>
                        <li className="scene_project project3" >
                            <div>
                                    <span text-data="Restaurant" className="span_project" onMouseEnter={Project3ImagesHandler}  >
                                        Restaurant
                                    </span>
                                    <span  className="span_project_year" >
                                       <ul>
                                           <li>2019</li>
                                        </ul> 
                                    </span>
                            </div>
                        </li>
                        <li className="scene_project project4" >
                            <div>
                                    <span text-data="Cinema" className="span_project" onMouseEnter={Project1ImagesHandler} >
                                        Cinema
                                    </span>
                                    <span  className="span_project_year" >
                                       <ul>
                                           <li>2021</li>
                                        </ul> 
                                    </span>
                            </div>
                        </li>
                        {/* <li className="scene_project project5" >
                            <div>
                                    <span text-data="Project N'05" className="span_project" onMouseEnter={Project5ImagesHandler}  >
                                        Project N'05
                                    </span>
                                    <span  className="span_project_year" >
                                       <ul>
                                           <li>2021</li>
                                        </ul> 
                                    </span>
                            </div>
                        </li> */}
                    
                    </ul>
                </div>

    )
}

export default Scenographie
