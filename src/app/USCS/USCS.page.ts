import { Component } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'USCS',
  templateUrl: 'USCS.page.html',
  styleUrls: ['USCS.page.scss']
})
export class USCSPage {

  pss4: number | string = "";
  pss200: number | string = "";
  LL: number | string = "";
  PL: number | string = "";
  PI: number | string = "";
  cu: number | string = "";
  cc: number | string = "";
  d10: number | string = "";
  d30: number | string = "";
  d60: number | string = "";

  AP: number = 0;
  sym: string = "";
  soilname: string = "";

  result: string = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  calc() {

      if ("" == this.pss200) {
          this.showAlert("Error", "Input more parameters. <br/><sub>No.200 seive</sub>");
          return;
      } else if (<number>this.pss200 >= 50 && "" == this.LL) {
          this.showAlert("Error", "Input more parameters. <br/><sub>Liquid limit</sub>");
          return;
      }
      else if (<number>this.pss200 <= 50 && "" == this.pss4) {
          this.showAlert("Error", "Input more parameters. <br/><sub>No.4 seive</sub>");
          return;
      }

      if (this.pss4 === "") {
          this.pss4 = 0.0;
      }

      if (this.pss200 === "") {
          this.pss200 = "";
      }

      if (this.LL === "") {
          this.LL = "";
      }

      if (this.PL === "") {
          this.PL = "";
      }

      if (this.d10 === "" || this.d30 === "" || this.d10 === "") {
          this.d10 = 0.0001; this.d30 = 0.0001; this.d60 = 0.0001;
          if (this.cu === "") {
              this.cu = 0; 
          }
          if (this.cc === "") {
              this.cc = 0;
          }
      }
      else {
          this.cu = <number>this.d60 / <number>this.d10;
          this.cc = <number>this.d30 * <number>this.d30 / (<number>this.d10 * <number>this.d60);
      }

      this.cu = <any>(<number>this.cu * 100).toFixed() / 100;
      this.cc = <any>(<number>this.cc * 100).toFixed() / 100;

      this.AP = 0.73 * (<number>this.LL - 20);

      if (this.PI == "") {
          this.PI = <number>this.LL - <number>this.PL;
      }

      /////////////////////////////////////////////////////////////////
      if (<number>this.pss200 >= 50) {
          if (<number>this.LL >= 50) {
              if (<number>this.PI >= this.AP) {
                  this.sym = "CH";
                  if (<number>this.pss200 > 85) { this.soilname = "Fat clay"; }
                  else if (<number>this.pss200 <= 85 && <number>this.pss200 > 70) {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) { this.soilname = "Fat clay with sand"; }
                      else { this.soilname = "Fat clay with gravel"; }
                  }
                  else {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) {
                          if (<number>this.pss4 > 85) { this.soilname = "Sandy fat clay"; }
                          else { this.soilname = "Sandy fat clay with gravel"; }
                      }
                      else {
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Gravelly fat clay"; }
                          else { this.soilname = "Gavelly fat clay with sand"; }
                      }
                  }
              }
              else {
                  this.sym = "MH";
                  if (<number>this.pss200 > 85) { this.soilname = "Elastic silt"; }
                  else if (<number>this.pss200 <= 85 && <number>this.pss200 > 70) {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) { this.soilname = "Elastic silt with sand"; }
                      else { this.soilname = "Elastic silt with gravel"; }
                  }
                  else {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) {
                          if (<number>this.pss4 > 85) { this.soilname = "Sandy elastic silt"; }
                          else { this.soilname = "Sandy elastic silt with gravel"; }
                      }
                      else {
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Gravelly elastic silt"; }
                          else { this.soilname = "Gavelly elastic silt with sand"; }
                      }
                  }
              }
          }
          else {
              if (<number>this.PI > 7 && <number>this.PI >= this.AP) {
                  this.sym = "CL";
                  if (<number>this.pss200 > 85) { this.soilname = "Lean clay"; }
                  else if (<number>this.pss200 <= 85 && <number>this.pss200 > 70) {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) { this.soilname = "Lean clay with sand"; }
                      else { this.soilname = "Lean clay with gravel"; }
                  }
                  else {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) {
                          if (<number>this.pss4 > 85) { this.soilname = "Sandy Lean clay"; }
                          else { this.soilname = "Sandy Lean clay with gravel"; }
                      }
                      else {
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Gravelly Lean clay"; }
                          else { this.soilname = "Gavelly Lean clay with sand"; }
                      }
                  }
              }
              else if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                  this.sym = "ML";
                  if (<number>this.pss200 > 85) { this.soilname = "Silt"; }
                  else if (<number>this.pss200 <= 85 && <number>this.pss200 > 70) {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) { this.soilname = "Silt with sand"; }
                      else { this.soilname = "Silt with gravel"; }
                  }
                  else {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) {
                          if (<number>this.pss4 > 85) { this.soilname = "Sandy Silt"; }
                          else { this.soilname = "Sandy Silt with gravel"; }
                      }
                      else {
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Gravelly Silt"; }
                          else { this.soilname = "Gavelly Silt with sand"; }
                      }
                  }
              }
              else {
                  this.sym = "CL-ML";
                  if (<number>this.pss200 > 85) { this.soilname = "Silty clay"; }
                  else if (<number>this.pss200 <= 85 && <number>this.pss200 > 70) {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) { this.soilname = "Silty clay with sand"; }
                      else { this.soilname = "Silty clay with gravel"; }
                  }
                  else {
                      if (<number>this.pss4 - 0.5 * <number>this.pss200 >= 50) {
                          if (<number>this.pss4 > 85) { this.soilname = "Sandy Silty clay"; }
                          else { this.soilname = "Sandy Silty clay with gravel"; }
                      }
                      else {
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Gravelly Silty clay"; }
                          else { this.soilname = "Gavelly Silty clay with sand"; }
                      }
                  }
              }
          }
      }
      else {
          if (<number>this.pss4 >= 50) {
              if (<number>this.pss200 < 5) {
                  if (this.cu >= 6 && this.cc <= 3 && this.cc >= 1) {
                      this.sym = "SW";
                      if (<number>this.pss4 > 85) { this.soilname = "Well graded sand"; }
                      else { this.soilname = "Well graded sand with gravel"; }
                  }
                  else {
                      this.sym = "SP";
                      if (<number>this.pss4 > 85) { this.soilname = "Poorly graded sand"; }
                      else { this.soilname = "Poorly graded sand with gravel"; }
                  }
              }
              else if (<number>this.pss200 > 12) {
                  if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                      this.sym = "SM";
                      if (<number>this.pss4 > 85) { this.soilname = "Silty sand"; }
                      else { this.soilname = "Silty sand with gravel"; }
                  }
                  else if (<number>this.PI > 7 && <number>this.PI > this.AP) {
                      this.sym = "SC";
                      if (<number>this.pss4 > 85) { this.soilname = "Clayey sand"; }
                      else { this.soilname = "Clayey sand with gravel"; }
                  }
                  else {
                      this.sym = "SC-SM";
                      if (<number>this.pss4 > 85) { this.soilname = "Silty, Clayey sand"; }
                      else { this.soilname = "Silty, Clayey sand with gravel"; }
                  }
              }
              else {
                  if (this.cu >= 6 && this.cc <= 3 && this.cc >= 1) {
                      if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                          this.sym = "SW-SM";
                          if (<number>this.pss4 > 85) { this.soilname = "Well graded sand with silt"; }
                          else { this.soilname = "Well graded sand with silt and gravel"; }
                      }
                      else {
                          this.sym = "SW-SC";
                          if (<number>this.pss4 > 85) { this.soilname = "Well graded sand with clay (or silty clay)"; }
                          else { this.soilname = "Well graded sand with clay (or silty clay) and gravel"; }
                      }
                  }
                  else {
                      if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                          this.sym = "SP-SM";
                          if (<number>this.pss4 > 85) { this.soilname = "Poorly graded sand with silt"; }
                          else { this.soilname = "Poorly graded sand with silt and gravel"; }
                      }
                      else {
                          this.sym = "SP-SC";
                          if (<number>this.pss4 > 85) { this.soilname = "Poorly graded sand with clay (or silty clay)"; }
                          else { this.soilname = "Poorly graded sand with clay (or silty clay) and gravel"; }
                      }
                  }
              }
          }
          else {
              if (<number>this.pss200 < 5) {
                  if (this.cu >= 4 && this.cc <= 3 && this.cc >= 1) {
                      this.sym = "GW";
                      if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Well graded gravel"; }
                      else { this.soilname = "Well graded gravel with sand"; }
                  }
                  else {
                      this.sym = "GP";
                      if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Poorly graded gravel"; }
                      else { this.soilname = "Poorly graded gravel with sand"; }
                  }
              }
              else if (<number>this.pss200 > 12) {
                  if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                      this.sym = "GM";
                      if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Silty gravel"; }
                      else { this.soilname = "Silty gravel with sand"; }
                  }
                  else if (<number>this.PI > 7 && <number>this.PI > this.AP) {
                      this.sym = "GC";
                      if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Clayey gravel"; }
                      else { this.soilname = "Clayey gravel with sand"; }
                  }
                  else {
                      this.sym = "GC-GM";
                      if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Silty, clayey gravel"; }
                      else { this.soilname = "Silty, clayey gravel with sand"; }
                  }
              }
              else {
                  if (this.cu >= 4 && this.cc <= 3 && this.cc >= 1) {
                      if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                          this.sym = "GW-GM";
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Well graded gravel with silt"; }
                          else { this.soilname = "Well graded gravel with silt and sand"; }
                      }
                      else {
                          this.sym = "GW-GC";
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Well graded gravel with clay (or silty clay)"; }
                          else { this.soilname = "Well graded gravel with clay (or silty clay) and sand"; }
                      }
                  }
                  else {
                      if (<number>this.PI < 4 || <number>this.PI < this.AP) {
                          this.sym = "GP-GM";
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Poorly graded gravel with silt"; }
                          else { this.soilname = "Poorly graded gravel with silt"; }
                      }
                      else {
                          this.sym = "GP-GC";
                          if (<number>this.pss4 - <number>this.pss200 < 15) { this.soilname = "Poorly graded gravel with clay (or silty clay)"; }
                          else { this.soilname = "Poorly graded gravel with clay (or silty clay) and sand"; }
                      }
                  }
              }
          }
      }
     
      this.result = "SOIL SYMBOL: <b>" + this.sym + "</b><br>SOIL NAME: <b>" + this.soilname + "</b>";

      this.showAlert("Result", this.result);
      
      let res_p=document.getElementById("result_uscs") as HTMLElement
      res_p.style.display="inline";
      res_p.innerHTML =this.result;

      

      return;

  }

  reset() {
      this.pss4 = "";
      this.pss200 = "";
      this.LL = "";
      this.PL = "";
      this.PI = "";
      this.cu = "";
      this.cc = "";
      this.d10 = "";
      this.d30 = "";
      this.d60 = "";
      
      let res_p=document.getElementById("result_uscs") as HTMLElement
      res_p.style.display="inline";
      res_p.innerHTML = "";
  }


}
