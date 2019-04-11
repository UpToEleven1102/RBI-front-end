import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { Component, OnInit, Input, HostListener } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { angularMath } from "angular-ts-math";

@Component({
  selector: "app-manual-rbi",
  templateUrl: "./manual-rbi.component.html",
  styleUrls: ["./manual-rbi.component.scss"]
})
export class ManualRbiComponent {
  rbiForm = new FormGroup({
    manual_rush_yards: new FormControl(),
    manual_rec_yards: new FormControl(),
    manual_rush_attempts: new FormControl(),
    manual_catches: new FormControl(),
    manual_rush_tds: new FormControl(),
    manual_rec_tds: new FormControl(),
    manual_fumbles: new FormControl(),
    rbi: new FormControl()
  });

  @HostListener("keydown", ["$event"])
  onKeyDown(e: KeyboardEvent) {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return; // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  mm(x) {
    return Math.max(0, Math.min(x, 3));
  }

  onSubmit() {
    //const result:  ManualRbiComponent = Object.assign({}, this.rbiForm.value);
    //console.log(result);

    var a =
      (this.rbiForm.get("manual_rush_yards").value /
        this.rbiForm.get("manual_rush_attempts").value -
        3.5) *
      2.1;
    var b =
      (this.rbiForm.get("manual_rec_yards").value /
        this.rbiForm.get("manual_catches").value -
        7) *
      1.7;
    var c =
      (this.rbiForm.get("manual_rush_tds").value /
        this.rbiForm.get("manual_rush_attempts").value) *
      50.3;
    var d =
      (this.rbiForm.get("manual_rec_tds").value /
        this.rbiForm.get("manual_catches").value) *
      57.4;
    var f =
      3 -
      (this.rbiForm.get("manual_fumbles").value /
        (this.rbiForm.get("manual_catches").value +
          this.rbiForm.get("manual_rush_attempts").value)) *
        129.9;
    var x = 0.87 * a + 0.13 * b;
    var y = 0.87 * c + 0.13 * d;
    var z = f;
    var rbi_value = ((this.mm(x) + this.mm(y) + this.mm(z)) / 9) * 100;
    var rbi_fixed = rbi_value.toFixed(2);

    if (Number.isNaN(rbi_value)) {
      this.rbiForm.get("rbi").setValue("ERROR: NOT A NUMBER. PLEASE FILL IN MINIMUM RUSH ATTEMPTS AND CATCHES TO GET VALID RBI");
    } else {
      this.rbiForm.get("rbi").setValue(rbi_fixed);
    }
    
  }
}
