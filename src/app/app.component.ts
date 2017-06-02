import { Component, ViewChild } from '@angular/core';
import { TelerikReportingModule, TelerikReportViewerComponent } from '@progress/telerik-angular-report-viewer';

interface Item {
  text: string,
  value: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss']
})
export class AppComponent {
  title = 'Telerik Angular 4 Report Viewer';  

 @ViewChild('viewer1') viewer :TelerikReportViewerComponent; 

  public listItems: Array<Item> =   [
    { text: "Barcodes", value: "barcodes.trdp" },
    { text: "Dashboard", value: "dashboard.trdp" }
  ];

  public defaultItem: { text: string, value: string } = { text: "Select report...", value: null };

  mySelectedReport:any= {
        report: null,
        parameters: {}
    };

  public handleSelectionChange(mySelectedValue: any): void {
    // console.log("handleReportChange", value);
    this.mySelectedReport.report = mySelectedValue.value;
    // console.log("My selected report: " + this.mySelectedReport.report);
    this.viewerContainerStyle.visibility = 'visible';
  }

  public handleValueChange(): void {
    this.viewer.setReportSource(this.mySelectedReport);
  }

  viewerContainerStyle = {
    visibility: 'hidden',
    position: 'absolute',
    top: '130px',
    height:'750px',
    bottom: '5px',
    width:'1250px',
    left: '175px',
    right: '40px',
    overflow: 'hidden',
    ['font-family']: 'ms sans serif'
  };
  
}
