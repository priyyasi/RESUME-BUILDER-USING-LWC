import { LightningElement } from 'lwc';

export default class Summary extends LightningElement {
    summary = '';

    handleSummaryChange(event){
        //access values from UI using event keyword
        //since there is only one field, we don't need to use data-field
        this.summary = event.target.value;

        //calling updateResume function
        this.updateResume();
    }

    updateResume(){
        // creating custom event 'updatePI'
        let updateSummaryEvent = new CustomEvent('updatesummary',{
            detail: this.summary
        });

        //dispatching the event
        this.dispatchEvent(updateSummaryEvent);
    }
}