export class Repository {
    constructor(json_repository: any) {
      this.type = json_repository.type;
      this.url = json_repository.url;
    }
    type: string;
    url: string;
  }
  