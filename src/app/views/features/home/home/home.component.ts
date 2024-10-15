import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Html5QrcodeScanner, Html5Qrcode } from 'html5-qrcode';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  html5QrCode!: Html5Qrcode;
  isScannerVisible: boolean = false;

  ngOnDestroy(): void {
    // Cleanup the scanner on component destroy
    if (this.html5QrCode) {
      this.html5QrCode.clear();
    }
  }

  // Function to start scanning
  startScanning(): void {
    // Show the scanner div
    this.isScannerVisible = true;
  
    // Angular needs time to render the scanner div before initializing the QR code scanner
    setTimeout(() => {
      // Initialize html5QrCode if it's not already
      if (!this.html5QrCode) {
        this.html5QrCode = new Html5Qrcode("qr-reader");
      }
  
      // Start scanning
      this.html5QrCode.start(
        { facingMode: "environment" }, // Use the back camera
        {
          fps: 10,    // Frames per second
          qrbox: 250  // QR box size
        },
        this.onScanSuccess.bind(this), // Success callback
        this.onScanError               // Error callback
      ).catch(err => {
        alert(JSON.stringify(err))
        console.error(`Unable to start scanning: ${err}`);
      });
    }, 100); // Add a slight delay to ensure the element is rendered
  }

  // Success callback when a QR code is scanned successfully
  onScanSuccess(decodedText: string, decodedResult: any) {
    console.log(`Code scanned: ${decodedText}`);
    // Display the result in the UI
    document.getElementById('qr-reader-results')!.innerHTML = `QR Code: ${decodedText}`;
    // Optionally, stop the scanning if the result is satisfactory
    this.html5QrCode.stop().then(() => {
      console.log('Scanning stopped.');
      this.isScannerVisible = false;
    }).catch(err => console.error(`Unable to stop scanning: ${err}`));
  }

  // Error callback when the scan fails
  onScanError(error: any) {
    console.warn(`QR code scan error: ${error}`);
  }
}
