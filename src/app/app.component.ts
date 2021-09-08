
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder} from '@angular/forms'
import { HttpClient} from "@angular/common/http"
import { Service } from './pregsservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assignemnt';

  myform:any = FormGroup;
  allUser: any="";

  userData : any =[];

  serchValue: any= ""

  constructor(private formBuilder:FormBuilder, private service: Service){
     
  }
  
  
  ngOnInit(){

    this.myform = this.formBuilder.group({
      name : ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required ]]
    });  
}
 

submitForm(){
  if (this.myform.status === 'INVALID') {
      alert("Please enter details")        
  }else{
    let obj ={
      name: this.myform.value.name,
      email: this.myform.value.email,
      password : this.myform.value.password,
      mobile: this.myform.value.mobile
    }
    this.service.createUser(obj).subscribe((response: any) => {
      console.log(response);
    })
    // this.result_data.push(obj);  
    this.myform.reset();
    this.getUserDetails()
  }
}

getUserDetails(){
  this.service.getAllUser().subscribe((data:any) => {
    console.log(data);
    this.userData = data;
  })
}

}

