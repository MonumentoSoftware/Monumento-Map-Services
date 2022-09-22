# Monumento Angular Map Services

A simple set of tools to easily create maps on angular, and using the Ionic framework.

## Table of Contents

- [Intro]
- [Install]
- [Usage]

## Intro

This project was born as a way to enable a faster development when using leaflet for angular.
Specially if you are using a ui library as Ionic.

## Install

Check the [Dependencies](#Dependencies)
Run the command:

```sh
npm i map-service-monumento
```

### Dependencies

Install these packages:

- leaflet
- ngx-leaflet

with the command:

```sh
npm install leaflet
npm install @asymmetrik/ngx-leaflet
```

If you intend to use this library in a typescript project (utilizing the typings),
you'll need to install the leaflet typings:

```sh
npm install --save-dev @types/leaflet
```

## Usage

a simple map on Angular 13:

```ts
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "map-service-test";
  public map!: Map;

  constructor(private mapService: MapGeneralService) {}
  async ngOnInit() {
    this.map = this.mapService.setupMap("map");
    const tile = await this.mapService.getDefaultSateliteLayer();
    tile.addTo(this.map);
  }
}
```

If you are using Ionic Framework, you need to set the map on the method ionViewWillEnter.
Like this:

```ts
 async ionViewWillEnter() {
    this.map = this.mapService.setupMap('map');
    const tile = await this.mapService.getDefaultSateliteLayer();
    tile.addTo(this.map);
}
```
