import { LightningElement, track } from 'lwc';

export default class ResumeBuilder extends LightningElement {
    @track personalInfo ={};
    summary = '';
    @track skills = [];
    @track educations = [];
    @track workExperiences = [];

    handleUpdatePI(event) {
        this.personalInfo = JSON.parse(JSON.stringify(event.detail));
        console.log(this.personalInfo);
    }

    handleUpdateSummary(event) {
        this.summary = event.detail;
        console.log(this.summary);
    }

    handleUpdateSkills(event) {
        this.skills = event.detail;
        console.log(this.skills);
    }

    handleUpdateEducation(event) {
        this.educations = event.detail;
        console.log(this.educations);
    }

    handleUpdateWorkExperiences(event) {
        this.workExperiences = event.detail;
        console.log(this.workExperiences);
    }
}