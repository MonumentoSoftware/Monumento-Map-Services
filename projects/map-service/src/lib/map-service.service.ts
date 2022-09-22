import { Injectable } from '@angular/core';
import { Map, tileLayer, icon, TileLayer } from 'leaflet';
import { Coordinates } from './corrdinates.types';

@Injectable({
  providedIn: 'root',
})
export class MapGeneralService {
  defaultIconUrl =
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
  defaultShadownIconUrl =
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
  icon = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: this.defaultIconUrl,
      shadowUrl: this.defaultShadownIconUrl,
    }),
  };

  constructor() {}

  /**
   * This function sets the map up.
   * Can be used in the normal cycle or Ionic cycles
   * @param divId A id representing the div elent
   * @param initialCords Initial cordinates to the map
   * @returns A Map instance
   */
  setupMap(divId: string, initialCords: Coordinates = [-8.6448, -35.216721]) {
    return new Map(divId, { maxZoom: 22 }).setView(initialCords, 5);
  }

  /**
   * Default satelite getter
   * @returns a default satelite TileLayer object
   */
  async getDefaultSateliteLayer(): Promise<TileLayer> {
    const tile = await tileLayer(
      'https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga',
      {
        attribution: 'monumentosoftware.com',
      }
    );
    return tile;
  }
}
