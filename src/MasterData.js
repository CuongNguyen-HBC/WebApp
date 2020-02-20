// Khai báo công ty 
  const a = []
  a['HBC']      = 'H'
  a['KBI']      = 'K'
  a['LBC']      = 'L'
  a['AKBC']     = 'A'
  a['AKiBC']    = 'I'
  a['GBC']      = 'G'
  a['HHBC']     = 'D'
  a['TBC']      = 'T'
// nhóm loại ngành hàng
  const b = []
  b['02_Cust_Đại_Lý']       = 'D'
  b['03_Cust_Dự_Án']        = 'P'
  b['04_Cust_Lẻ']           = 'R'
  b['05_Cust_Xuất_Khẩu']    = 'E'
// Folder theo công ty
  const c = []
  c['HBC']      = '14Q3YEmCPvVZS0Da6Tsno_T3VNilcYm9L'
  c['KBI']      = '1MwRkr6s0rNfv-PxzvHfFsFMd44yYi4je'
  c['LBC']      = '1_sMNIcKfx1UaxDrS_xFYKhCUf66CSgrR'
  c['AKBC']     = '1QHllOv5OK2jlC7x-XFqcJnq5sLvyTB0C'
  c['AKiBC']    = '1fYAi78qJcoZ_7_nqgkwsmh1_QA36RDe9'
  c['GBC']      = '1pRQJYUb-5fxAHfSkGEVqT8lFti--DRq3'
  c['HHBC']     = '1JatHbQg3d4j54psh_dFpc1g0h1Utb2ef'
  c['TBC']      = '1keK_TLCNNeVDMKKDZcVfc-0K8iwLJS97'
  
// Lưu 1 file CSV với data định dạng sẵn
function saveAsTXT(cardcode,data,title,company,curemail) {
    var folder = c[company]
    var fileName =  cardcode+'-'+curemail+".txt";
    var csvFile = title+'\r\n'+title+'\r\n'+data
    var convertUTF8 = Utilities.newBlob('')
    convertUTF8.setName(fileName)
    convertUTF8.setDataFromString(csvFile, 'UTF-16')
    var file = DriveApp.getFolderById(folder).createFile(convertUTF8)
}

function genCode(company = 'HBC',groupcode = '05_Cust_Xuất_Khẩu'){
  var date = new Date();
  var year = date.getFullYear().toString().substring(2, 4)
  var month = date.getMonth() + 1
  if(month <= 3)
    var quy = 1;
  if(month >= 4 && month <= 6)
    var quy = 2;
  if(month >= 7 && month <= 9)
    var quy = 3;
  if(month >= 10)
    var quy = 4;
 var stt = countCardCode()
 var cardcode =  a[company]+ b[groupcode] + ++stt
 Logger.log(cardcode)
    return cardcode
}