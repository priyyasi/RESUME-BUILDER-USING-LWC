import { LightningElement, api } from 'lwc';
//api is used to make properties public

export default class PreviewResume extends LightningElement {
    @api personalInfo ={};
    @api summary = '';
    @api skills = [];
    @api educations = [];
    @api workExperiences = [];
}