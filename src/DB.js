  const host = "118.69.225.159";
  const databaseName = "HBC";
  const userName = "sa";
  const password = "*hbc123";
  const port = 8500;
  const url = 'jdbc:sqlserver://'+host+':'+port+';databaseName='+databaseName;
  const connection = Jdbc.getConnection(url, userName, password);
function countCardCode(){
  try{
    var sql = "select count(*) FROM [192.168.3.9].DATA_HBC_Test.dbo.OCRD";
    var results = connection.createStatement().executeQuery(sql);
    var metaData = results.getMetaData();
    var columns = metaData.getColumnCount();
    while(results.next())
      var stt = results.getInt(1)
    connection.close()
    return stt
  }
  catch(err){Logger.log(err)}
}

function getCardCode(cardcode ='BHDADT' ){
  var data = []
  var sql = "select * FROM [192.168.3.9].DATA_HBC_Test.dbo.OCRD a where a.CardCode = ?"
  var statment = connection.prepareStatement(sql)
  statment.setString(1,cardcode)
  var results =  statment.executeQuery()
  while(results.next()){
    data.push(results.getString(2))
  }
  connection.close()
  return data
}
/* Code sql tạo bảng view giữa các bảng
*******************************************
create view vMasterData as 
select CardCode,CardName,GroupCode,CmpPrivate,LicTradNum,Phone1,Phone2,Fax,GroupNum,CreditLine,StreetNo,Block,City,Country, 'HBC' as 'Company'
from DATA_HBC_Test.dbo.OCRD 
union 
select CardCode,CardName,GroupCode,CmpPrivate,LicTradNum,Phone1,Phone2,Fax,GroupNum,CreditLine,StreetNo,Block,City,Country, 'AKBC' as 'Company'
from AKBC.dbo.OCRD 
union 
select CardCode,CardName,GroupCode,CmpPrivate,LicTradNum,Phone1,Phone2,Fax,GroupNum,CreditLine,StreetNo,Block,City,Country, 'DN' as 'Company'
from HBC_DN.dbo.OCRD 
union
select CardCode,CardName,GroupCode,CmpPrivate,LicTradNum,Phone1,Phone2,Fax,GroupNum,CreditLine,StreetNo,Block,City,Country, 'LBC' as 'Company'
from LBC_TT.dbo.OCRD 
*****************************

*/
function getLicTradNum(lictradnum){
  var data = ''
 var sql = 'select top 10 * from [192.168.3.9].master.dbo.vMasterData where LicTradNum = ?'
 var statment = connection.prepareStatement(sql)
 statment.setString(1,lictradnum)
 var results = statment.executeQuery()
 while(results.next()){
   if(results.getString(1) !== '')
   data = results.getString(1) +'-'+results.getString(2)+'-'+results.getString(5)+'-'+results.getString(15)
   }
 connection.close()
  if(data.length >= 1)
    return data
  else return false
 
}