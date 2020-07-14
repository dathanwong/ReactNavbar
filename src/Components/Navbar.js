import React, {useContext} from 'react';
import MyContext from '../Context/MyContext';

const Navbar = (props) => {

    const {name} = useContext(MyContext);

    return ( 
        <div style={{"background-color": "plum", "height": "50px"}} className="row justify-content-end">
            <div style={{"font-size": "larger", "font-weight": "bold", "color": "white"}} className="col text-right pr-4">
                Hi {name}!
            </div>
        </div>
     );
}
 
export default Navbar;