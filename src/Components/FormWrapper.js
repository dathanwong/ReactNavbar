import React, {useContext} from 'react';
import MyContext from '../Context/MyContext';

const FormWrapper = (props) => {

    const {name, setName} = useContext(MyContext);

    return ( 
        <div className="row my-3 justify-content-center">
            <div className="col-2">
                Your Name:
            </div>
            <div className="col-2">
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
        </div>
     );
}
 
export default FormWrapper;