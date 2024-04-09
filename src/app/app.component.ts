import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EpicodeAngularAppBuildWeek';

  log:boolean = false;
ngOnInit(): void {
  const token=localStorage.getItem('user')
  if(token){
    this.log=true;
  }else{
    this.log= false;
   
  }
}
haNdleevent(v:string){
  console.log(v);
  this.log=  v==='true'?true:false;
}
}
