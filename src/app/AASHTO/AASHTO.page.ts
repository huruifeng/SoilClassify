import { Component} from '@angular/core';

import { NavController,AlertController } from '@ionic/angular';

@Component({
  selector: 'AASHTO',
  templateUrl: 'AASHTO.page.html',
  styleUrls: ['AASHTO.page.scss']
})
export class AASHTOPage {

    pss10: string | number= "";
    pss40: string | number= "";
    pss200: string |number = "";
    LL: string | number = "";
    PL: string | number = "";
    PI: string | number = "";
    GI: string | number = "";
    temp_GI: string | number = "";
    ashname: string = ""

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
            this.showAlert("Error", "Input more parameters. <br> <sub>No.200 seive </sub>");
            return;
        } else if (<number>this.pss200 < 25 && "" == this.pss40) {
            this.showAlert("Error", "Input more parameters. \n<sub>No.40 seive</sub>");
            return;
        }
        else if (<number>this.pss200 <= 15 && <number>this.pss40 <= 30 && "" == this.pss10) {
            this.showAlert("Error", "Input more parameters. \n<sub>No.10 seive</sub>");
            return;
        } 

        if (this.LL === "") {
            this.LL = 0;
        }

        if (this.PL === "") {
            this.PL = 0;
        }

        if ("" == this.PI) {
            this.PI = <number>this.LL - <number>this.PL;
        }

        this.temp_GI = (<number>this.pss200 - 35) * (0.2 + 0.005 * (<number>this.LL - 40)) + 0.01 * (<number>this.pss200 - 15) * (<number>this.PI - 10);

        if (<number>this.pss200 >= 36) {
            if (<number>this.LL <= 40) {
                if (<number>this.PI <= 10) {
                    this.ashname = "A-4";
                    this.GI = this.temp_GI;
                }
                else {
                    this.ashname = "A-6";
                    this.GI = this.temp_GI;
                }
            }
            else {
                if (<number>this.PI <= 10) {
                    this.ashname = "A-5";
                    this.GI = this.temp_GI;
                }
                else {
                    if (<number>this.PI > <number>this.LL - 30) {
                        this.ashname = "A-7-6";
                        this.GI = this.temp_GI;
                    }
                    else {
                        this.ashname = "A-7-5";
                        this.GI = this.temp_GI;
                    }
                }
            }
        }
        else if (<number>this.pss200 <= 10 && <number>this.pss40 >= 51) {
            this.ashname = "A-3";
            this.GI = this.temp_GI;
        }
        else if (<number>this.pss200 <= 15 && <number>this.pss40 <= 30 && <number>this.pss10 <= 50 && <number>this.PI <= 6) {
            this.ashname = "A-1-a";
            this.GI = this.temp_GI;
        }
        else if (<number>this.pss200 <= 25 && <number>this.pss40 <= 50 && <number>this.PI <= 6) {
            this.ashname = "A-1-b";
            this.GI = this.temp_GI;
        }
        else {
            if (<number>this.LL <= 40) {
                if (<number>this.PI <= 10) {
                    this.ashname = "A-2-4";
                    this.GI = this.temp_GI;
                }
                else {
                    this.ashname = "A-2-6";
                    this.GI = 0.01 * (<number>this.pss200 - 15) * (<number>this.PI - 10);
                }
            }
            else {
                if (<number>this.PI <= 10) {
                    this.ashname = "A-2-5";
                    this.GI = this.temp_GI;
                }
                else {
                        this.ashname = "A-2-7";
                        this.GI = 0.01 * (<number>this.pss200 - 15) * (<number>this.PI - 10);
                }
            }
        }


        if (this.LL === 0) {
            this.GI = 0;
        }

        if (this.GI <= 0) {
            this.GI = 0;
        } 
        this.result = "SOIL TYPE: <b>" + this.ashname + " &nbsp(" + this.GI.toFixed() + ")</b>";

        this.showAlert("Result", this.result);

        let res_p=document.getElementById("result_aashto") as HTMLElement
        res_p.style.display="inline";
        res_p.innerHTML =this.result;

        

        return;

    }

    reset() {
        this.pss10 = "";
        this.pss40 = "";
        this.pss200 = "";
        this.LL = "";
        this.PL = "";
        this.PI = "";
        let res_p=document.getElementById("result_aashto") as HTMLElement
        res_p.style.display="inline";
        res_p.innerHTML = "";
    }

}
