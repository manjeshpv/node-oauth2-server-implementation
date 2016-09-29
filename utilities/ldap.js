var ldap = require('ldapjs');
var q = require('q');
var config = require('../config/ldap');
// console.log(ldap)
//ldap.Attribute.settings.guid_format = ldap.GUID_FORMAT_B;
var ldapBind = function(un, pw) {
  var deferred = q.defer();
  var ldapTree = config.tree;
  var unbind = function() {
    try {
      client.unbind();
    } catch (e) {
      return;
    }
  };
  var client = ldap.createClient({
    url: config.url
  });
  var opts = {
    filter: '(objectclass=*)', // this is the default filter
    attributes: ['givenName', 'sn', 'mail'] // remove this to get all fields back
  };
  client.bind('uid=' + un + ',' + ldapTree, pw, function(err) {
    if (err) {
      console.log(err)
      deferred.reject({
        error: true,
        errorMessage: 'Invalid credentials or LDAP error',
        err: err
      });
    } else {
      client.search('uid=' + un + ',' + ldapTree, opts, function(err, search) {
        if (err) {
          deferred.reject({
            error: true,
            errorMessage: 'LDAP search error',
            err: err
          });
        } else {
          search.on('searchEntry', function(entry) {
            deferred.resolve({
              error: false,
              errorMessage: '',
              data: {
                username: un,
                f_name: entry.object.givenName,
                l_name: entry.object.sn,
                email: entry.object.mail
              }
            });
          });
          search.on('searchReference', function(referral) {
            deferred.reject({
              error: true,
              errorMessage: 'LDAP referral - case not handled',
              err: err,
              referral: referral
            });
          });
          search.on('error', function(err) {
            deferred.reject({
              error: true,
              errorMessage: 'LDAP search error',
              err: err
            });
          });
          search.on('end', function() {
            unbind();
          });
        }
      });
    }
  });
  return deferred.promise;
};
var LdapAuth = function() {
  return;
};
LdapAuth.prototype.auth = function(un, pw) {
  var deferred = q.defer();
  if (!un || !pw) {
    deferred.reject({
      error: true,
      errorMessage: 'Username and password are required.'
    });
  } else {
    ldapBind(un, pw).then(function(result) {
      deferred.resolve(result);
    }, function(err) {
      deferred.reject(err);
    });
  }
  return deferred.promise;
};
module.exports = LdapAuth;
/*

// TEST DRIVER

var a = new ldapAuth();

a.auth('sswett', ';las0912').then(function(result) {
  console.log('success', result);
}, function(err) {
  console.log('error', err);
});
*/
/*

  // EXAMPLE LDAP FULL RESPONSE

 {
 "dn": "uid=sswett,ou=People,o=Intra,dc=sears,dc=com",
 "controls": [],
 "shcDisplayName": "Swett, Sam (IMX)",
 "shcHRBusUnit": "IMX",
 "manager": "uid=smulter,ou=people,o=intra,dc=sears,dc=com",
 "SHCDepartmentNumber": "SMRT38815B",
 "searsSalesID": "408971",
 "businessCategory": "SRO",
 "departmentNumber": "SMRT38815B",
 "userPassword": "{SSHA}c/xxxxxxx==",
 "seeAlso": "shcDepartmentNumber=SMRT3646D0,ou=departments,o=intra,dc=sears,dc=com",
 "shcHRLocClassification": "CORP",
 "searsHRAcctCd": "38815",
 "objectClass": [
 "top",
 "person",
 "organizationalPerson",
 "inetOrgPerson",
 "searsOrgPerson",
 "posixAccount"
 ],
 "uidNumber": "1234",
 "gidNumber": "5000",
 "homeDirectory": "/home/auto/sswett",
 "loginShell": "/bin/bash",
 "telephoneNumber": "+1 312 357 7818",
 "mail": "Sam.Swett1@searshc.com",
 "kmartActionDate": "20130504",
 "kmartActionBy": "cn=directory manager",
 "mailActionDate": "20130504",
 "mailActionBy": "cn=directory manager",
 "shcUUID": "09739502-1d03-4f3e-adfa-xxxxxxx",
 "roomNumber": "2N State #426B",
 "emplID": "41023818564",
 "cn": "Sam Swett",
 "sn": "Swett",
 "givenName": "Sam",
 "searsOrgJobCode": "SK3076",
 "searsHREmployeeStatus": "A",
 "searsHREmployeeFLSAStatus": "M",
 "shcHRLocType": "COR",
 "shcHRJobGrade": "L12",
 "shcHRCompPlan": "S",
 "shcHRLbrMgtCode": "N",
 "l": "00491",
 "searsHREmployeeClassification": "R",
 "searsHREmployeeType": "S",
 "searsHRAlternateType": "R",
 "searsHRPayType": "158",
 "serviceDate": "20140915",
 "jobDate": "20140915",
 "searsHRassociateGroup": "SCS",
 "title": "Mgr, Front End Development",
 "SHCLocNumber": "58491",
 "officerCode": "N",
 "uid": "sswett",
 "shcDepartmentName": "Integrated Retail Team",
 "shcHRLocDesc": "Sears Holdings Management Corp",
 "shcHRLocID": "58491"
 }

 */