import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  name=""
  age=""
  place=""
  mobno=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any = {"name":this.name,"age":this.age,"place":this.place,"mobno":this.mobno}
    console.log(data)
    this.api.AdPatients(data).subscribe(

       (response:any)=>
       {
          console.log(response)
       }

    )
  }

}
