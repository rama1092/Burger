import React from "react";
import Aux from '../../hoc/Auxilary';
import classes from './layout.module.css';

const layout = (props) => (
<Aux>  
    <div>toolbar, Sidedrawrar, Backdrop</div>
     <main className = {classes.Content}>
        {props.children}
     </main>
</Aux>
);

export default layout;  

