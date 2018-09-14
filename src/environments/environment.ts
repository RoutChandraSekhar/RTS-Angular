// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ApiEndPoint:'http://localhost:52314/',
  CandidatePageListSize:'5',
  CVOnlinePDFViewer:"https://docs.google.com?src=",
  CVOnlineViewer:"https://view.officeapps.live.com/op/embed.aspx?src=",
  CVCDownloader:"http://localhost:52314/api/request/downloadfile?filename=cv-1510-2018-250-2-34-34-765-636718844747659325-gd-9041d2ad-6e32-4adc-b32c-334aa02b0aff.jpg&DownloadFileName=cv.doc&file=",
  FileStorageURL:"http://localhost:52314/api/request/downloadfile?filename"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
