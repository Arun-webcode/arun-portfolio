import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  mail,
  call,
  location,
  send,
  checkmarkCircle,
  alertCircle,
  logoLinkedin,
  logoGithub,
  logoWhatsapp,
  download,
  logoTwitter,
  logoInstagram
} from 'ionicons/icons';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThemeSwitcherComponent } from 'src/app/components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, ThemeSwitcherComponent, HttpClientModule]
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  // Google Sheets Integration Configuration
  // TODO: Replace with your actual Google Sheets configuration
  private readonly GOOGLE_SHEETS_CONFIG = {
    // Step 1: Create a Google Apps Script web app
    // Go to script.google.com and create a new project
    // Add the doPost function to handle form submissions
    // Deploy as web app with execute permissions for "Anyone"
    scriptUrl: 'https://script.google.com/macros/s/AKfycbxlk8KG_7jae9_2YJaK4Y9u7HncSkuHmgIOyt_6aNZxa568e9Xhb5uXbnlpazTFg9Lx/exec',

    // Step 2: Your Google Sheet ID (from the sheet URL)
    // Example: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
    sheetId: '11Ez17rA1uKt_p20xUIKTEc_tYgMY2Ag6AGUTJh47FMQ',

    // Step 3: Sheet name where data will be stored
    sheetName: 'Sheet1'
  };

  constructor(
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    addIcons({
      mail,
      call,
      location,
      send,
      checkmarkCircle,
      alertCircle,
      logoLinkedin,
      logoGithub,
      logoWhatsapp,
      download,
      logoTwitter,
      logoInstagram
    });

    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        const formData = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
          timestamp: new Date().toISOString(),
          source: 'Portfolio Website'
        };

        // Send data to Google Sheets
        await this.submitToGoogleSheets(formData);

        this.submitSuccess = true;
        this.submitMessage = 'Thank you! Your message has been sent successfully.';
        this.contactForm.reset();

      } catch (error) {
        console.error('Form submission error:', error);
        this.submitSuccess = false;
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
      } finally {
        this.isSubmitting = false;

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    }
  }

  private async submitToGoogleSheets(formData: any): Promise<void> {
    if (!this.GOOGLE_SHEETS_CONFIG.scriptUrl) {
      console.error('Google Sheets integration not configured. Please add your Google Apps Script URL.');
    }

    const response: any = await this.http.post(this.GOOGLE_SHEETS_CONFIG.scriptUrl, formData, {
      headers: {
        'Content-Type': 'text/plain',
      }
    }).toPromise();

    if (response?.result === 'success') {
      this.presentToast('✅ Message sent successfully!', 'success');
    } else {
      this.presentToast('⚠️ Message not sent. Please try again.', 'warning');
    }

  }

  private async presentToast(message: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color
    });
    toast.present();
  }
}

// downloadResume() {
//   // Create a link element and trigger download
//   const link = document.createElement('a');
//   link.href = 'assets/Resume_Arun_Software_Dev.pdf';
//   link.download = 'Arun_Kumar_Resume.pdf';
//   link.target = '_blank';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }


// paste this code too continue the Google Apps Script function
// function doPost(e) {
//   try {
//     const sheet = SpreadsheetApp.openById('Sheet_Id').getSheetByName('Sheet1'); // sheet1 is sheet name
//     const data = JSON.parse(e.postData.contents);

//     const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
//     const nextRow = sheet.getLastRow() + 1;

//     const newRow = headers.map(header => {
//       if (header.toLowerCase() === 'timestamp') {
//         return new Date(); // insert current date-time
//       }
//       return data[header.trim()] || ''; // match header name with formData keys
//     });

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

//     // Optionally: Email yourself here too
//     MailApp.sendEmail({
//       to: "arun.webcode@gmail.com",
//       subject: "New Contact Message from Portfolio",
//       htmlBody: `
//         <b>Name:</b> ${data.name}<br>
//         <b>Email:</b> ${data.email}<br>
//         <b>Subject:</b> ${data.subject}<br>
//         <b>Message:</b> ${data.message}<br>
//         <b>Timestamp:</b> ${new Date().toString()}<br>
//         <b>Source:</b> ${data.source}
//       `
//     });

//     return ContentService
//       .createTextOutput(JSON.stringify({ result: 'success', row: nextRow }))
//       .setMimeType(ContentService.MimeType.JSON);

//   } catch (error) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }
