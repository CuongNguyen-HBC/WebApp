function onInstall(){
    
}
function doGet(e){
    var param = JSON.stringify(e)
    var userProp = PropertiesService.getUserProperties()
    var curemail =  Session.getActiveUser().getEmail()
    var html = HtmlService.createTemplateFromFile('FirstPage')
    html.curemail = curemail
    html.company = getInfoCompany(curemail)
    html.fullname = getInfoName(curemail)
 return html.evaluate()
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
    const mst =  data.mst
    const sdt =  data.sdt
    const nhom = data.nhom
    const nganh = (data.nganh == '' ) ? "" : data.nganh.toString() 
    const loaikh= data.loaikh 
    const dtdd1= data.dtdd1
    const dtdd2= data.dtdd2
    const dtb1= data.dtb1
    const dtb2= data.dtb2
    const thoihanno= data.thoihanno
    const hanmucno = data.hanmucno
    const fax= data.fax
    //  Địa chỉ
    const sonha= data.sonha
    const tenduong= data.tenduong
    const phuongxa= data.phuongxa
    const quanhuyen= data.quanhuyen
    const tinhthanh= data.tinhthanh
    const quocgia= data.quocgia
    const diahchi = sonha + ' '+ tenduong + ' '+phuongxa + ' '+quanhuyen + ' '+tinhthanh + ' '+quocgia 
    var filename = 0
    const getfolder = DriveApp.getFolderById('1uWM6zs3Pu50YaJgB5u5EAS632kFz9AFs')
    const countFile = DriveApp.getFolderById('1uWM6zs3Pu50YaJgB5u5EAS632kFz9AFs').getFiles()
    while(countFile.hasNext()){
      Logger.log(countFile.next().getName())
      filename++
    }
    const newFile =  SpreadsheetApp.create(filename)
    const idsp = newFile.getId()
    const store = SpreadsheetApp.openById(idsp).appendRow([hoten,mst,sdt,nhom,nganh,loaikh,dtb1,dtdd2,thoihanno,hanmucno,dtb2,dtdd1,fax,diahchi,Session.getActiveUser().getEmail()])
    DriveApp.getFileById(idsp).makeCopy(++filename,getfolder)
    DriveApp.getFileById(idsp).setTrashed(true)
  SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1B-cQYusdxcpzhvFsSFxaSyS7hURtG6NOLXKdvR7WAMw/edit#gid=0').getActiveSheet().appendRow([hoten,mst,sdt,nhom,nganh,loaikh,dtb1,dtdd2,thoihanno,hanmucno,dtb2,dtdd1,fax,diahchi,Session.getActiveUser().getEmail()])
}