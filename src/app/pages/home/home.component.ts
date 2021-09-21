import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  films = [];
  detailFilm : any;
  modalRef?: BsModalRef;


  constructor(
    private common: CommonService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getAllFilm();
  }

  getAllFilm() {
    this.common.getAllFilmService().subscribe(data => {
      this.films = JSON.parse(JSON.stringify(data)).results
      console.log(this.films)
    })
  }
  openModal(template: TemplateRef<any>, film : any) {
   this.detailFilm = film;
    this.modalRef = this.modalService.show(template);
  }
}
