import { Injectable } from '@angular/core'
import { Iuser } from './user.model'
@Injectable()

export class AuthService {
   currentUser:Iuser

   loginUser(userName:string,password:string){
      this.currentUser = {
         id: 1,
         userName:userName,
         firstName:'Fateh',
         lastName:'Mohammed'
      }
   }
   isAuthenticated(){
      return !!this.currentUser;
   }
}