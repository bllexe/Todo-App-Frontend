import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserServiceService } from "../services/user-service.service";

@Injectable()
export class ApplicationGuard {

    constructor(public userService:UserServiceService,
        public router:Router){

        }

        canActive(){
            if(this.userService.loggedUser && this.userService.loggedUser.id){
                return true;
            }
            this.router.navigate(['login']);
            return false;
        }

}
