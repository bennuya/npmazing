export class Maintainers {
  constructor(json_maintainers: any) {
    this.email = json_maintainers.email;
    this.name = json_maintainers.name;
  }
  email: string;
  name: string;
}
