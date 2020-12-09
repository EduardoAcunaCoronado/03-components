import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  champions: any[] = [];
  textoBuscar: string = '';

  constructor( private dataService: DataService, private router : Router ) { }

  ngOnInit() {
    this.dataService.getChampions().subscribe( champions => {
      this.champions = champions;
    });
  }

  onSearchChange( event ) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }

  goToChampion(champion : any) {
    this.dataService.setChampionSelected(champion);
    this.router.navigateByUrl('champion/' + champion.id);
  }

}
