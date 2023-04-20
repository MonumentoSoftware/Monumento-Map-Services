import { Component, OnInit } from '@angular/core';
import { Map } from 'leaflet';
import { MapGeneralService } from 'projects/map-service/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'map-service-test';
  public map!: Map;

  constructor(private mapService: MapGeneralService) {}

  async ngOnInit() {
    this.map = this.mapService.setupMap('map');
    const tile = await this.mapService.getDefaultSateliteLayer();
    tile.addTo(this.map);
  }
}
