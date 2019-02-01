import { Author } from "./author";
import { Bugs } from "./bugs";
import { Dist } from "./dist";
import { Maintainers } from "./maintainers";
import { Repository } from "./repository";

export class Package {
  constructor(json_package: any) {
    this._id = json_package._id;
    this.name = json_package.name;
    this.author = json_package.author;
    this.bugs = json_package.bugs;
    this.description = json_package.description;
    this.dist = json_package.dist;
    this.homepage = json_package.homepage;
    this.keywords = json_package.keywords;
    this.license = json_package.license;
    this.maintainers = json_package.maintainers;
    this.readme = json_package.readme;
    this.readmeFilename = json_package.readmeFilename;
    this.repository = json_package.respository;
    this.time = json_package.time;
    this.users = json_package.users;
    this.versions = json_package.versions;

  }
  _id: string;
  name: string;
  author: Author;
  bugs: Bugs;
  description: string;
  dist: Dist;
  homepage: string;
  keywords: [string];
  license: string;
  maintainers: Maintainers[];
  readme: string;
  readmeFilename: string;
  repository: Repository;
  time: [Date];
  users: [string];
  versions: [string];
}
