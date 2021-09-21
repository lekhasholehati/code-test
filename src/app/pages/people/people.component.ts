import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  peoples = [];

  constructor(
    private common : CommonService,
    private router        : Router,
    private route         : ActivatedRoute,
  ) { }

  ngOnInit(){
    this.getAllPeople();
  }

  getAllPeople(){
    this.common.getAllPeopleService().subscribe(data =>{
      this.peoples =  JSON.parse(JSON.stringify(data)).results
     console.log(this.peoples)
    })
  }

  redirectToDetail(url : string){
    console.log(url)
    this.router.navigate(['people-detail', url]);
  }

}
