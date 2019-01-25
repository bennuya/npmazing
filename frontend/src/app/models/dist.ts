export class Dist {
    constructor(json_dist: any) {
      this.latest = json_dist.latest;
      this.old = json_dist.old;
    }
    latest: string;
    old: string;
  }
  