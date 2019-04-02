
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { angularMath } from 'angular-ts-math';

@Component({
  selector: 'app-manual-rbi',
  templateUrl: './manual-rbi.component.html',
  styleUrls: ['./manual-rbi.component.scss']
})



export class ManualRbiComponent {
 
      rbiForm = new FormGroup({
        manual_rush_yards: new FormControl( ),
        manual_rec_yards: new FormControl( ),
        manual_rush_attempts: new FormControl( ),
        manual_catches: new FormControl( ),
        manual_rush_tds: new FormControl( ),
        manual_rec_tds: new FormControl( ),
        manual_fumbles: new FormControl( ),
        rbi: new FormControl(),
      });
    
     mm(x) {
       return Math.max(0,Math.min(x,3));
     }


      onSubmit() {
        //const result:  ManualRbiComponent = Object.assign({}, this.rbiForm.value);
        //console.log(result);


        
        var a = ((this.rbiForm.get('manual_rush_yards').value)/(this.rbiForm.get('manual_rush_attempts').value) - 3.5) * 2.1;
        var b = (((this.rbiForm.get('manual_rec_yards').value)/(this.rbiForm.get('manual_catches').value)-7) * 1.7);
        var c = ((this.rbiForm.get('manual_rush_tds').value) / (this.rbiForm.get('manual_rush_attempts').value))*50.3;
        var d = ((this.rbiForm.get('manual_rec_tds').value) /  (this.rbiForm.get('manual_catches').value)) * 57.4;
        var f = 3 - (this.rbiForm.get('manual_fumbles').value/((this.rbiForm.get('manual_catches').value) + (this.rbiForm.get('manual_rush_attempts').value))) * 129.9;
        var x = .87*a + .13*b;
        var y = .87*c + .13*d;
        var z = f;
        var rbi_value = ((this.mm(x) + this.mm(y) + this.mm(z)) / 9 ) * 100;
        this.rbiForm.get('rbi').setValue(rbi_value);
      }
  }

