import {Role} from "./role.model";

export class User {
  username!: string;
  password!: string;
  roles!:Role[];
}
