function getInfoCompany(email='cuong.nguyenhai@hbc.com.vn'){
  var info = AdminDirectory.Users.get(email).orgUnitPath
  var company = info.split('/')[1]
  return company
}
function getInfoName(email = 'cuong.nguyenhai@hbc.com.vn'){
  var fullname = AdminDirectory.Users.get(email).name.fullName
  return fullname
}

function getManager(email = 'cuong.nguyenhai@hbc.com.vn'){
  var info = AdminDirectory.Users.get(email).relations
  for(var i = 0 ; i < info.length ; i++){
    if(info[i].type === 'manager')
      return info[i].value
  }
}