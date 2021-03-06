import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

        switch (this.props.type){
            case ('bread-bottom'):
                ingredient = <div className = {classes.BreadBottom}></div>; 
                break;
    
            case ('bread-top'):
                ingredient =(
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>                
                );break;
    
            case ('Meat'):
                ingredient = <div className={classes.Meat}></div>
                break;
    
            case ('Cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
    
            case ('Salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
    
            case ('Tikki'):
                ingredient = <div className={classes.Tikki}></div>
                break;
                    
            default:
                ingredient = null;
        }
        return ingredient;

    }
}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
   
export default BurgerIngredient;