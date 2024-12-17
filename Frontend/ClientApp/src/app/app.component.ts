import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-root',
  imports: [GoogleMapsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  center={ lat: -30.559482, lng: 22.937506 }
  zoom = 8;
  pin: { position: google.maps.LatLngLiteral; label: string } = {
    position: this.center,
    label: 'South Africa',
  };

  ngOnInit(): void {
    this.autocomplete();
  }

  autocomplete(): void {
    const input = document.getElementById('autocomplete') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const position = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        this.center = position;
        this.zoom = 12;
        this.addPin(position, place.name || '');
      }
    });
  }

  clickOnMap(event: google.maps.MapMouseEvent): void {
    if (event.latLng) {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.addPin(position, "");
    }
  }

  addPin(position: google.maps.LatLngLiteral, label: string): void {
    this.pin= { position, label };
  }

  showDetails(marker: any): void {
    alert(`lng: ${marker.position.lng}, lat: ${marker.position.lat}`);
  }
}