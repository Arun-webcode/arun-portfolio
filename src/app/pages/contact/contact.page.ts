import { Component, OnInit } from '@angular/core';
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
  logoInstagram,
  logoTwitter
} from 'ionicons/icons';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
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
    scriptUrl: 'https://script.google.com/macros/s/AKfycbzP0IN-udqNmV3yLehqHn5_NirR0WGXY98iBB0VPmgY4yLbdBphze6huLm5ytouqzHa/exec',

    // Step 2: Your Google Sheet ID (from the sheet URL)
    // Example: https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
    sheetId: '1Nc4k13HSODuhMZMXG48FgfVsxzN9ChUVNFw3E3iERUA',

    // Step 3: Sheet name where data will be stored
    sheetName: 'Form Responses 1' // Change this to your actual sheet name
  };

  constructor(
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
      logoInstagram,
      logoTwitter
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
          source: 'Form Responses 1'
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
    // TODO: Implement Google Sheets submission
    // This method will send form data to your Google Apps Script

    /* 
    GOOGLE APPS SCRIPT CODE TO ADD TO YOUR SCRIPT.GOOGLE.COM PROJECT:
    
    function doPost(e) {
      try {
        // Get the active spreadsheet (replace with your sheet ID)
        const sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEET_ID_HERE').getSheetByName('Contact_Submissions');
        
        // Parse the form data
        const data = JSON.parse(e.postData.contents);
        
        // Add headers if this is the first submission
        if (sheet.getLastRow() === 0) {
          sheet.getRange(1, 1, 1, 6).setValues([['Timestamp', 'Name', 'Email', 'Subject', 'Message', 'Source']]);
        }
        
        // Add the form data to the sheet
        sheet.appendRow([
          data.timestamp,
          data.name,
          data.email,
          data.subject,
          data.message,
          data.source
        ]);
        
        return ContentService
          .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
          .setMimeType(ContentService.MimeType.JSON);
          
      } catch (error) {
        return ContentService
          .createTextOutput(JSON.stringify({success: false, message: error.toString()}))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    */

    console.log('Sending data to Google Sheets:', formData, this.GOOGLE_SHEETS_CONFIG);

    if (!this.GOOGLE_SHEETS_CONFIG.scriptUrl) {
      throw new Error('Google Sheets integration not configured. Please add your Google Apps Script URL.');
    }
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain'
    });

    const response = await this.http.post(this.GOOGLE_SHEETS_CONFIG.scriptUrl, formData, {
      headers: headers, responseType: 'text'
    }).toPromise();
    console.log('Google Sheets response:', response);


    // Return void as expected by the method signature
  }

  downloadResume() {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'assets/Arun_Resume.pdf';
    link.download = 'Arun_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openLinkedIn() {
    window.open('https://www.linkedin.com/in/arun-webcode/', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/Arun-webcode', '_blank');
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=919315325253&text=Hi%20Arun%2C%20I%20visited%20your%20site!', '_blank');
  }

  sendEmail() {
    window.open('mailto:arun.webcode@gmail.com', '_blank');
  }
}

