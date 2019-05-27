import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import {Router} from '@angular/router';


@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
})
export class BarcodeScannerComponent implements OnInit {
  options: BarcodeScannerOptions;

  
  constructor( 
    public scanner: BarcodeScanner,
    private router: Router) { 

    }

  ngOnInit() {

  }

  scan() {
    this.options = {
      prompt: 'Scan you barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.router.navigate(['/product-details/' + data.text])
      alert
    }, (err) => {
      console.log('Error: ', err)
    })
  }

}
