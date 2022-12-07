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
  doctorname=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
  {
    let data:any = {"name":this.name,"age":this.age,"place":this.place,"mobno":this.mobno,"doctorname":this.doctorname}
    console.log(data)
    this.api.AdPatients(data).subscribe(

       (response:any)=>
       {
          console.log(response)
       }

    )
  }

}
