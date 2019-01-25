export class Author {
  constructor(json_author: any) {
    this.email = json_author.email;
    this.name = json_author.name;
  }
  email: string;
  name: string;
}
