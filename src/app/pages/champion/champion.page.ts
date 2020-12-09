import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {

  public champion;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.champion = this.dataService.getChampionSelected();
    console.log(this.champion);
  }

}
