var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected-!");
   //con.query("CREATE DATABASE mydb", function (err, result) {
   // if (err) throw err;
   //console.log("Database created");
   //});
	/*var msql = "CREATE TABLE sellers (Name VARCHAR(50) , cname VARCHAR(40) ,  mnumber BIGINT(10), Email VARCHAR(40)  , GSTno VARCHAR(15) , Saddress VARCHAR(40),PANno VARCHAR(10), brand VARCHAR(40), passw VARCHAR(40), pass VARCHAR(40) , cement VARCHAR(10),tmt VARCHAR(10), electrical VARCHAR(10),wooden VARCHAR(10),bathroom VARCHAR(10),paint VARCHAR(10),rmc VARCHAR(10),automation VARCHAR(10),dnw VARCHAR(10),roofing VARCHAR(10),glass VARCHAR(10),sand VARCHAR(10),bricks VARCHAR(10),plumbing VARCHAR(10),tiles VARCHAR(10),hardware VARCHAR(10),lighting VARCHAR(10),stones VARCHAR(10),homedecor VARCHAR(10),kitchen VARCHAR(10),chemicals VARCHAR(10) ,youare CHAR(20))";
    con.query(msql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
var msql1 = "CREATE TABLE contracting (Name1 VARCHAR(50) , mnumber1  BIGINT(10) , Email1 VARCHAR(40) , aadharno1  BIGINT(12) , passw1 VARCHAR(40), pass1 VARCHAR(40),civil1 CHAR(10), tile1 CHAR(10),plumbing1 CHAR(10), electrical1 CHAR(10), paint1 CHAR(10),carpenter1 CHAR(10),commercial1 CHAR(10),residential1 CHAR(10))";
    con.query(msql1, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 

var msql2 = "CREATE TABLE consulting (Name2 VARCHAR(50) , mnumber2  BIGINT(10), Email2 VARCHAR(40) , aadharno2  BIGINT(12) , passw2 VARCHAR(40), pass2 VARCHAR(40),commercial2 CHAR(30),residential2 CHAR(30),ur2 CHAR(30) )";
    con.query(msql2, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
var msql3 = "CREATE TABLE coustomer (Name3 VARCHAR(50) , mnumber3  BIGINT(10), Email3 VARCHAR(40), aadharno3  BIGINT(12) , passw3 VARCHAR(40), pass3 VARCHAR(40),bt3 CHAR(30) )";
    con.query(msql3, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
 
 var mysql4 = "create table tokenx (tokenid varchar(20), tokenexp varchar(40))";
     con.query(mysql4, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

	var msql5 = "CREATE TABLE temporarysellers (Name VARCHAR(50) , cname VARCHAR(40) ,  mnumber BIGINT(10), Email VARCHAR(40)  , GSTno VARCHAR(15) , Saddress VARCHAR(40),PANno VARCHAR(10), brand VARCHAR(40), passw VARCHAR(40), pass VARCHAR(40) , cement VARCHAR(10),tmt VARCHAR(10), electrical VARCHAR(10),wooden VARCHAR(10),bathroom VARCHAR(10),paint VARCHAR(10),rmc VARCHAR(10),automation VARCHAR(10),dnw VARCHAR(10),roofing VARCHAR(10),glass VARCHAR(10),sand VARCHAR(10),bricks VARCHAR(10),plumbing VARCHAR(10),tiles VARCHAR(10),hardware VARCHAR(10),lighting VARCHAR(10),stones VARCHAR(10),homedecor VARCHAR(10),kitchen VARCHAR(10),chemicals VARCHAR(10) ,youare CHAR(20))";
    con.query(msql5, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
var msql6 = "CREATE TABLE temporarycontractor (Name1 VARCHAR(50) , mnumber1  BIGINT(10) , Email1 VARCHAR(40) , aadharno1  BIGINT(12) , passw1 VARCHAR(40), pass1 VARCHAR(40),civil1 CHAR(10), tile1 CHAR(10),plumbing1 CHAR(10), electrical1 CHAR(10), paint1 CHAR(10),carpenter1 CHAR(10),commercial1 CHAR(10),residential1 CHAR(10))";
    con.query(msql6, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
var msql7 = "CREATE TABLE temporaryconsultant (Name2 VARCHAR(50) , mnumber2  BIGINT(10), Email2 VARCHAR(40) , aadharno2  BIGINT(12) , passw2 VARCHAR(40), pass2 VARCHAR(40),commercial2 CHAR(30),residential2 CHAR(30),ur2 CHAR(30))";
    con.query(msql7, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
var msql8 = "CREATE TABLE temporarycustomer (Name3 VARCHAR(50) , mnumber3  BIGINT(10), Email3 VARCHAR(40), aadharno3  BIGINT(12) , passw3 VARCHAR(40), pass3 VARCHAR(40),bt3 CHAR(30))";
    con.query(msql8, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  })
*/
  });
module.exports = con;