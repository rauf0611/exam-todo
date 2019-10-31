import React from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    state = {
        inputValue:'',
        list:[]
    }
   
    OnChange = (e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    OnClick = (e)=>{
        this.setState({
            list:this.state.inputValue
        })
    }
    AddTodo = () =>{
        this.props.dispatch({
            type:'ADD_TODO'
        })

    }
    DeleteTodo=()=>{
        this.props.dispatch({
            type:'DELETE_TODO'
        })

    }

    render() {
        return (
            <div>
                <input className='w-25' value={this.state.inputValue} onChange={this.OnChange} placeholder='What do you want to do?' /> 
                <button onClick={this.OnClick}>Add</button>
                

                <ul>
                    <li>
                        {this.state.list}
                    </li>
                    </ul>                            
                

            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        
    }
}

export default connect (mapStateToProps) (TodoList);
