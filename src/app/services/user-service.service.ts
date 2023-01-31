import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public userApiService:ApiUsersService,
    public authService:AuthService,) { }
}
