import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  films = [];
  detailFilm : any;
  modalRef?: BsModalRef;

  constructor(
    private common : CommonService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getAllFilm();
  }

  getAllFilm(){
    this.common.getAllFilmService().subscribe(data => {
     this.films =  JSON.parse(JSON.stringify(data)).results
     console.log(this.films)
    })
  }

  openModal(template: TemplateRef<any>, film : any) {
    this.detailFilm = film;
     this.modalRef = this.modalService.show(template);
   }

}
