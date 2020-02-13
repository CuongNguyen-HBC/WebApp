function onInstall(){
    
}
function doGet(e){
    var param = JSON.stringify(e)
    var userProp = PropertiesService.getUserProperties()
 return HtmlService.createTemplateFromFile('FirstPage').evaluate()
}

function include(filename){
 return HtmlService.createHtmlOutputFromFile(filename).getContent()
}
// function DriveTest(){
//     var ggdrive = Drive.Drives.list().items
//     Logger.log(ggdrive) 
//    }
function appendSpreadsheet(data){
    const ho = data.ho
    const ten = data.ten
    const hoten = ho + ' ' + ten
    const mst = data.mst
    const sdt = data.sdt
    const nhom = data.nhom
    const nganh = data.nganh.toString()
    Logger.log(nganh)
    const filename = 0
    const getfolder = DriveApp.getFolderById('1uWM6zs3Pu50YaJgB5u5EAS632kFz9AFs')
    const countFile = DriveApp.getFolderById('1uWM6zs3Pu50YaJgB5u5EAS632kFz9AFs').getFiles()
    while(countFile.hasNext()){
      Logger.log(countFile.next().getName())
      filename++
    }
    const newFile =  SpreadsheetApp.create(filename)
    const idsp = newFile.getId()
    const store = SpreadsheetApp.openById(idsp).appendRow([hoten,mst,sdt,nhom,nganh,Session.getActiveUser().getEmail()])
    //.appendRow(['123231','123123','123213','123213','123213','123213','a',Session.getActiveUser().getEmail()])
    DriveApp.getFileById(idsp).makeCopy(++filename,getfolder)
    DriveApp.getFileById(idsp).setTrashed(true)
  SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1B-cQYusdxcpzhvFsSFxaSyS7hURtG6NOLXKdvR7WAMw/edit#gid=0').getActiveSheet().appendRow([hoten,mst,sdt,nhom,nganh,Session.getActiveUser().getEmail()])
}
function Test(){
  var pageToken;
  var page;
  do {
   page = AdminDirectory.Users.list({
     domain: 'hbc.com.vn',
     orderBy: 'givenName',
     maxResults: 100,
     pageToken: pageToken
   });
   var users = page.users;
   if (users) {
     for (var i = 0; i < users.length; i++) {
       var user = users[i];
       Logger.log('%s (%s)', user.name.fullName, user.primaryEmail);
     }
   } else {
     Logger.log('No users found.');
   }
   pageToken = page.nextPageToken;
 } while (pageToken);
}