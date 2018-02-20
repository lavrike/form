import React, {Component} from 'react'
import Input from './Input'
import Button from './Button1'
import CheckboxExampleSimple from './Checkbox'

class Form extends Component {
    render() {
        return(
            <form>
                <Input />
                <Button />
                <CheckboxExampleSimple />
            </form>
        );

    }
        
}
export default Form;