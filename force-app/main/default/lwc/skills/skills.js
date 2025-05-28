import { LightningElement, track } from 'lwc';

export default class Skills extends LightningElement {
    //empty array skills [] with single element {} initially
    //for arrays and object, if you want to make them reactive, add as you go add skill, then you have to use @track
    @track skills = [{  //@track -> to change UI as we click on add skill button 
        id:0, 
        name: ''
    }];

    handleSkillChange(event) {
        let index = event.target.dataset.index;
        let value = event.target.value;

        this.skills[index].name = value;
        this.updateResume();
    }

    updateResume(){
        let updateSkillsEvent = new CustomEvent('updateskills',{
            detail: this.skills
        });

        this.dispatchEvent(updateSkillsEvent);
    }

    addSkill(){
        let nextIndex = this.skills.length;
        this.skills.push({
            id: nextIndex,
            name: ''})

        // this.skills.push({
        //     id: this.skills.length,
        //     name: ''
        // });
    }
}