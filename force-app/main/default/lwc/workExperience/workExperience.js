import { LightningElement, track } from 'lwc';

export default class WorkExperience extends LightningElement {
    @track workExperiences=[{
            id:0,
            title:'',
            name:'',
            startDate:'',
            endDate:''
        }];     
    
    handleWorkExperienceChange(event) {
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;
    
        this.workExperiences[index][field] = value;
        this.updateResume();
    }
    
    updateResume(){
        let updateWorkExperiencesEvent = new CustomEvent('updateworkexperiences',{
            detail: this.workExperiences
            });
            //event name should always be in small, not updateworkExperiences
        this.dispatchEvent(updateWorkExperiencesEvent);
    }
    
    addWorkExperience(){
        let nextIndex = this.workExperiences.length;
        this.workExperiences.push({
            id:nextIndex,
            title:'',
            name:'',
            startDate:'',
            endDate:''
        })
    }
}