import {Input, Pipe, PipeTransform} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./Models/User";

@Pipe({
  name: 'users'


})
export class UsersPipe implements PipeTransform {

  constructor() {

  }


  transform(value: User[],
            ...args:any): any {
    let resUser ; value.forEach(user => {
      resUser+=`<div>
<h2>${user?.id}--${user?.name}--${user?.username}--${user?.email}</h2>
</div>`
    })
    return resUser;


  }
}
