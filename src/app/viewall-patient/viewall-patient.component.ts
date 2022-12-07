import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-patient',
  templateUrl: './viewall-patient.component.html',
  styleUrls: ['./viewall-patient.component.css']
})
export class ViewallPatientComponent {

  constructor(private api : ApiService)
  {
      this.api.FetchPatients().subscribe(
       
        (response)=>
        {
          this.data =response
        }

      )
  }
  data:any =[]

}
