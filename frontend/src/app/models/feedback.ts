export class Feedback {
    constructor(json_feedback: any) {
        this.name = json_feedback.name;
        this.email = json_feedback.email;
        this.feedback = json_feedback.feedback;
    }
    name: string;
    email: string;
    feedback: string;
}
