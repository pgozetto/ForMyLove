import img1 from '../images/foto1.jpg';
import img2 from'../images/foto2.jpg';
import img3 from '../images/foto3.jpg';
import img4 from '../images/foto4.jpg';
import img5 from '../images/foto5.jpg';
import img6 from'../images/foto6.jpg';
import img7 from'../images/foto7.jpg';
import img8 from '../images/foto8.jpg';

function ShowImages() {
        function clickHandler() {
                return (event: React.MouseEvent) => {
                        let imagesContainer = document.getElementById("imagesContainer") as HTMLCanvasElement;
                        let button = document.getElementById("button") as HTMLButtonElement;

                        
                        button.style.display = "none";
                        imagesContainer.style.visibility = "visible";

                        
                        
                


                        
                

                        event.preventDefault();
                }
        }

        return (
                <div>
                        <button onClick={clickHandler()} id='button'>Clique aqui!</button>

                        <div className='imagesContainer' id='imagesContainer'>
                                <img src={img1} alt="foto1" className="img1"/>
                                <img src={img2} alt="foto2" className="img2"/>
                                <img src={img3} alt="foto3" className="img3"/>
                                <img src={img4} alt="foto4" className="img4"/>
                                <img src={img5} alt="foto5" className="img5"/>
                                <img src={img6} alt="foto6" className="img6"/>
                                <img src={img7} alt="foto7" className="img7"/>
                                <img src={img8} alt="foto8" className="img8"/>
                        </div>
                        

                </div>
        );
}

export default ShowImages;