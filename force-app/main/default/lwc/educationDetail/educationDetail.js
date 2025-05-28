import { LightningElement, track } from 'lwc';

export default class EducationDetail extends LightningElement {
    @track educations=[{
        id:0,
        degree:'',
        year:'',
        institute:''
    }];     

    handleEducationChange(event) {
        let index = event.target.dataset.index;
        let field = event.target.dataset.field;
        let value = event.target.value;

        this.educations[index][field] = value;
        this.updateResume();
    }

    updateResume(){
        let updateEducationsEvent = new CustomEvent('updateeducations',{
            detail: this.educations
        });

        this.dispatchEvent(updateEducationsEvent);
    }

    addEducation(){
        let nextIndex = this.educations.length;
        this.educations.push({
            id:nextIndex,
            degree:'',
            year:'',
            institute:''
        })

        // this.Educations.push({
        //     id: this.Educations.length,
        //     name: ''
        // });
    }
}