import { LightningElement } from 'lwc';

export default class PersonalInformation extends LightningElement {
    PersonalInformation = {};

    handlePIChange(event){
        //access values from UI using event keyword
        let fieldName = event.target.dataset.field;
        let fieldValue = event.target.value;

        //updated the property for a particular field
        this.PersonalInformation[fieldName] = fieldValue;

        //calling updateResume function
        this.updateResume();
    }

    updateResume(){
        // creating custom event 'updatePI'
        let updatePIevent = new CustomEvent('updatepi',{
            detail: this.PersonalInformation
        });

        //dispatching the event
        this.dispatchEvent(updatePIevent);
    }
}