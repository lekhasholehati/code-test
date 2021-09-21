import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  detailPeople : any;

  constructor(
    private router        : Router,
    private route         : ActivatedRoute,
    private common        : CommonService
  ) { }

  ngOnInit(){
    this.route.params.subscribe(param => {
      if(param.url){
        this.getPeopleByUrl(param.url)
      }
    })
  }

  getPeopleByUrl(url : string){
    this.common.getPeopleByUrl(url).subscribe(data => {
      this.detailPeople =  JSON.parse(JSON.stringify(data))
      console.log(this.detailPeople)
    })
  }

}
