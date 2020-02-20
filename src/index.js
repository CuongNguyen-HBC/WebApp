function onInstall(){
    
}
function doGet(e){
    var param = JSON.stringify(e)
    var userProp = PropertiesService.getUserProperties()
    var curemail =  Session.getActiveUser().getEmail()
    var html = HtmlService.createTemplateFromFile('FirstPage')
    var lictradnum = getLicTradNum()
    html.lictradnum = lictradnum
    html.curemail = curemail
    html.company = getInfoCompany(curemail)
    html.fullname = getInfoName(curemail)
    
 return html.evaluate()
}

function include(filename){
  var html = HtmlService.createHtmlOutputFromFile(filename).getContent()
 return html
}
function appendSpreadsheet(data){  
    const CardName              = data.CardName 
    const GroupCode             = data.GroupCode
    const GroupCode2            = GroupCode.split('_').shift()
    const CmpPrivate            = data.CmpPrivate    
    const LicTradNum            = data.LicTradNum     
    const Phone1                = data.Phone1  
    const Phone2                = data.Phone2
    const Tel1                  = data.Tel1
    const Tel2                  = data.Tel2
    const Fax                   = data.Fax
    const GroupNum              = data.GroupNum
    const CreditLine            = data.CreditLine   
    const StreetNo              = data.StreetNo
    const Street                = data.Street   
    const Block                 = data.Block
    const State                 = data.State
    const City                  = data.City
    const Country               = data.Country   
    const Name                  = data.Name
    var   curemail              = Session.getActiveUser().getEmail()
    var   company               = getInfoCompany(curemail)
    var   CardCode              = genCode(company,GroupCode)
    const U_CardCode1           = CardCode   
    const title = 'CardCode\tCardCode01\tCardName\tGroupcode\tCmpPrivate\tFederalTaxID\tPhone1\tPhone2\tTel1\tTel2\tFax\tGroupNum\tCreditLine\tStreetNo\tStreet\tBlock\tState\tCity\tCountry\tName'
    const datatest = CardCode+'\t'+ CardCode+'\t'+CardName+'\t'+ GroupCode2 +'\t'+ CmpPrivate+'\t'+ LicTradNum+'\t'+ Phone1+'\t'+ Phone2+'\t'+ Tel1+'\t'+ Tel2+'\t'+ Fax+'\t'+ GroupNum+'\t'+ CreditLine+'\t'+ StreetNo+'\t'+ Street+'\t'+ Block+'\t'+ State+'\t'+ City+'\t'+ Country+'\t'+ Name+'\t'
    saveAsTXT(CardCode,datatest,title,company,curemail)
  // SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1B-cQYusdxcpzhvFsSFxaSyS7hURtG6NOLXKdvR7WAMw/edit#gid=0').getActiveSheet().appendRow([hoten,mst,sdt,nhom,nganh,loaikh,dtb1,dtdd2,thoihanno,hanmucno,dtb2,dtdd1,fax,diahchi,Session.getActiveUser().getEmail()])
}