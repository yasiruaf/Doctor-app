import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {
  patientData: any;
  scales: any[] = [];
  selectedTab = 0;

  constructor(private http: HttpClient, private navCtrl: NavController) { }

  ngOnInit(): void {
    this.loadPatientData();
  }

  loadPatientData() {
    this.http.get('assets/data/patient-data.json').subscribe(data => {
      this.patientData = data;
      if (this.patientData && this.patientData.result && this.patientData.result.length > 0) {
        this.scales = this.patientData.result[0].scales;
      }
    });
  }

  selectTab(index: number) {
    this.selectedTab = index;
  }

  goBack() {
    this.navCtrl.back();
  }

}
