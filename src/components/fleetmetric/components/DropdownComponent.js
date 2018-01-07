import React from 'react';

class DropdownComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            dropdownValue:undefined
        }        
        this.onDropdownSelect   = this.onDropdownSelect.bind(this);
        this.fetchOptionByValue = this.fetchOptionByValue.bind(this);
    }
    
    onDropdownSelect(event){
        this.setState({dropdownValue:event.target.value});
        let selectedOption = this.fetchOptionByValue(event.target.value);
        if(selectedOption){
            this.props.onDropdownValueChange(selectedOption);
        }
    }
    
    fetchOptionByValue(selectedValue){
        let selectedOption;
        this.props.dropdownOptions.map((item) => {
            if(parseInt(item.value) === parseInt(selectedValue)){
                selectedOption = item;
            }
        });
        
        return selectedOption;
    }
    
    render(){
        return(
            <div className="d-flex flex-column">
                <label htmlFor="fleetService">{this.props.dropdownLabel}</label>
                <select className="custom-select" id="fleetService" aria-describedby="fleetServiceHelp" value={this.state.dropdownValue} onChange={(event)=>this.onDropdownSelect(event)}>
                    {
                        (this.props.defaultDisplay) ? <option defaultValue>{this.props.defaultDisplay}</option>:<option></option>
                    }
                    {
                        this.props.dropdownOptions.map((item, index) => {
                            return <option key={index} value={item.value}>{item.option}</option>
                        })
                    }
                </select>
                <small id="fleetServiceHelp" className="form-text text-muted">{this.props.dropdownLabelHelpText}</small>
            </div>
        )
    }
}

export default DropdownComponent;