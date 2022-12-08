import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  name=""
  searchData:any=[]

  constructor(private api : ApiService, private route : Router)
  {

  }


  readValues=()=>{
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchPatient(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        this.searchData=response
      }

    )

  }

  deleteButtonClick=(id:any)=>
  {
      let data:any ={"id":id}
      this.api.deletPatient(data).subscribe(
      
        (response:any)=>
        {
          console.log(response)
          if(response.status == "success")
          {
            alert("added")
            this.route.navigate([""])
          }
          
        }

        


      )

      
  }

}
