
import React from 'react'


export default function Dashbord() {
    
    const array = ['chairpose.jpg','dance.png','eagle.png','garland.png','gate.png','half-moon.png','parivrtta-trikonasana.png', 'tadasana.png','vrksasana.png'];
    const images = array.map(image => {
        return <img key={image} src={require(`../assets/images/poses/${image}`)} className="img-responsive width-20" />
     });
    return(
        <div className="py-5">
                <div className="container">
                <div  className="row"  >
                       { images }
                    </div>
                    </div>
                </div>
            
    )
}
