import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  patientData: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit(): void {
    this.loadPatientData();
  }

  loadPatientData() {
    this.http.get('assets/data/patient-data.json').subscribe(data => {
      this.patientData = data;
    })
  }

  goToPage() {
    this.navCtrl.navigateForward('patient-details');
  }

}
