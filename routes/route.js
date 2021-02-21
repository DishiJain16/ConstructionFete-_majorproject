const express = require("express");
const Router = express.Router();
var con = require("../connection");
var bodyParser = require("body-parser");
Router.use(bodyParser.urlencoded({extended:true}));
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR API KEY');
var randtoken = require('rand-token');
Router.use(express.static("public"));
Router.get("/", (request,response)=>{
 con.query("SELECT * FROM sellers", function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });
})
 Router.post('/submit',function(request,response)
  {	  
  con.query('Select * from sellers WHERE mnumber = ? OR Email = ? OR  GSTno= ? OR PANno = ? ',[request.body.mnumber,request.body.Email,request.body.GSTno,request.body.PANno], function(error, results, fields) {
0
if (results.length > 0) {
	response.send("Account already exists");
}
else {	
	       var token1;
				token1 = randtoken.generate(4);
				var tokenex = new Date();
				tokenex.setMinutes(tokenex.getMinutes() +5);
				var sqltok = "insert into tokenx values ('"+token1+"', '"+tokenex+"')";
				con.query(sqltok, function(err){
				  if(err) throw err
				  		});	
				const url = "http://localhost:3000/success/"+ token1;
                const msg = {
                    to: request.body.Email,
                    from: 'Your mail id ',
                    subject: 'Sending from ConstructionFETE',
                   text: 'Verify your email',
                    html: `<p>Click to activate your account<a href="${url}"> Link</a></p><br><p>Your otp is:${token1}</p> `,
                }
				
                sgMail.send(msg);
				response.render("step2.ejs");
  con.query("delete from temporarysellers");
  var tempsql0 = " INSERT INTO temporarysellers VALUES('"+ request.body.Name +"', '"+ request.body.cname +"',  "+ request.body.mnumber+",'"+ request.body.Email+"','"+ request.body.GSTno+"', '"+ request.body.Saddress+"' ,'"+ request.body.PANno+"' ,'"+ request.body.brand+"' ,'"+ request.body.passw+"','"+ request.body.pass+"','"+ request.body.cement+"','"+ request.body.tmt+"', '"+ request.body.electrical+"','"+ request.body.wooden+"','"+ request.body.bathroom+"','"+ request.body.paint+"','"+ request.body.rmc+"','"+ request.body.automation+"','"+ request.body.dnw+"','"+ request.body.roofing+"','"+ request.body.glass+"','"+ request.body.sand+"','"+ request.body.bricks+"','"+ request.body.plumbing+"','"+ request.body.tile+"','"+ request.body.hardware+"','"+ request.body.lighting+"','"+ request.body.stones+"','"+ request.body.homedecor+"','"+ request.body.kitchen+"','"+ request.body.chemicals+"','"+ request.body.youare+"')";
  con.query(tempsql0);
  }
  });
  });
 Router.post('/submit1',function(request,response)
  {
	con.query('Select * from contracting WHERE mnumber1 = ? OR Email1 = ? OR aadharno1 = ? ',[request.body.mnumber1,request.body.Email1,request.body.aadharno1], function(error, results, fields) {
if (results.length > 0) {
	response.send("Account already exists");
}
else {	
	       var token1;
				token1 = randtoken.generate(4);
				var tokenex = new Date();
				tokenex.setMinutes(tokenex.getMinutes() +5);
				var sqltok = "insert into tokenx values ('"+token1+"', '"+tokenex+"')";
				con.query(sqltok, function(err){
				  if(err) throw err
				  		});	
				const url = "http://localhost:3000/success3/"+ token1;
                const msg = {
                    to: request.body.Email1,
                    from: 'disheejain16@gmail.com',
                    subject: 'Sending from ConstructionFETE',
                    text: 'Verify your email',
                    html: `<p>Click to activate your account<a href="${url}"> Link</a></p><br><p>Your otp is:${token1}</p> `,
                }
				
                sgMail.send(msg);
				response.render("step3.ejs");
 con.query("delete from temporarycontractor");
 
 var tempsql3 = " INSERT INTO temporarycontractor VALUES('"+ request.body.Name1 +"',  "+ request.body.mnumber1+", '"+ request.body.Email1+"' ,"+ request.body.aadharno1+",'"+ request.body.passw1+"','"+ request.body.pass1+"','"+ request.body.civil1+"','"+ request.body.tile1+"', '"+ request.body.plumbing1+"','"+ request.body.electrical1+"','"+ request.body.paint1+"','"+ request.body.carpenter1+"','"+ request.body.commercial1+"','"+ request.body.residential1+"')";
  con.query(tempsql3);
  }
  });
  });
 Router.post('/submit2',function(request,response)
  {
	  con.query('Select * from consulting WHERE mnumber2 = ? OR Email2 = ? OR  aadharno2 = ?',[request.body.mnumber2,request.body.Email2,request.body.aadharno2no], function(error, results, fields) {

if (results.length > 0) {
	response.send("Account already exists");
}
else {	
	       var token1;
				token1 = randtoken.generate(4);
				var tokenex = new Date();
				tokenex.setMinutes(tokenex.getMinutes() +5);
				var sqltok = "insert into tokenx values ('"+token1+"', '"+tokenex+"')";
				con.query(sqltok, function(err){
				  if(err) throw err
				  		});	
				const url = "http://localhost:3000/success4/"+ token1;
                const msg = {
                    to: request.body.Email2,
                    from: 'disheejain16@gmail.com',
                    subject: 'Sending from ConstructionFETE',
                    text: 'Verify your email',
                    html: `<p>Click to activate your account<a href="${url}"> Link</a></p><br><p>Your otp is:${token1}</p> `,
                }
				
                sgMail.send(msg);
				response.render("step4.ejs");
				con.query("delete from temporaryconsultant");
 
  var tempsql1 = " INSERT INTO temporaryconsultant VALUES('"+ request.body.Name2 +"',  "+ request.body.mnumber2+", '"+ request.body.Email2+"' ,"+ request.body.aadharno2+",'"+ request.body.passw2+"','"+ request.body.pass2+"','"+ request.body.commercial2+"','"+ request.body.residential2+"','"+ request.body.ur2+"')";
  con.query(tempsql1);
  }
  });
  });

 Router.post('/submit3',function(request,response)
  {
	  con.query('Select * from coustomer WHERE mnumber3 = ? OR Email3 = ? OR aadharno3 = ? ',[request.body.mnumber3,request.body.Email3,request.body.aadharno3], function(error, results, fields) {

if (results.length > 0) {
	response.send("Account already exists");
}

else {	
	       var token1;
				token1 = randtoken.generate(4);
				var tokenex = new Date();
				tokenex.setMinutes(tokenex.getMinutes() +5);
				var sqltok = "insert into tokenx values ('"+token1+"', '"+tokenex+"')";
				con.query(sqltok, function(err){
				  if(err) throw err
				  		});	
				const url = "http://localhost:3000/success5/"+ token1;
                const msg = {
                    to: request.body.Email3,
                    from: 'disheejain16@gmail.com',
                    subject: 'Sending from ConstructionFETE',
                    text: 'Verify your email',
                    html: `<p>Click to activate your account<a href="${url}"> Link</a></p><br><p>Your otp is:${token1}</p> `,
                }
				
                sgMail.send(msg);
				response.render("step5.ejs");
 con.query("delete from temporarycustomer");
  
 var tempsql2 = " INSERT INTO temporarycustomer VALUES('"+ request.body.Name3 +"',  "+ request.body.mnumber3+", '"+ request.body.Email3+"' ,"+ request.body.aadharno3+",'"+ request.body.passw3+"','"+ request.body.pass3+"','"+ request.body.bt3+"')";
  con.query(tempsql2);
  }
 
  });
  });
  
 
Router.get('/success/:token1', (req,res)=>{
    con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.params.token1, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporarysellers', function(err,results,feild){
	
	var sql0 = " INSERT INTO sellers VALUES('"+ results[0].Name +"', '"+ results[0].cname +"',  "+ results[0].mnumber+",'"+ results[0].Email+"','"+ results[0].GSTno+"', '"+ results[0].Saddress+"' ,'"+ results[0].PANno+"' ,'"+ results[0].brand+"' ,'"+ results[0].passw+"','"+ results[0].pass+"','"+ results[0].cement+"','"+ results[0].tmt+"', '"+ results[0].electrical+"','"+ results[0].wooden+"','"+ results[0].bathroom+"','"+ results[0].paint+"','"+ results[0].rmc+"','"+ results[0].automation+"','"+ results[0].dnw+"','"+ results[0].roofing+"','"+ results[0].glass+"','"+ results[0].sand+"','"+ results[0].bricks+"','"+ results[0].plumbing+"','"+ results[0].tile+"','"+ results[0].hardware+"','"+ results[0].lighting+"','"+ results[0].stones+"','"+ results[0].homedecor+"','"+ results[0].kitchen+"','"+ results[0].chemicals+"','"+ results[0].youare+"')";
  con.query(sql0, function(err){
  if(err) throw err
  con.query('delete from temporarysellers'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("Link expired!!!!");
	}
	});
	
});
Router.post('/success', (req,res)=>{
	con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.body.token, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporarysellers', function(err,results,feild){
	
   var sql0 = " INSERT INTO sellers VALUES('"+ results[0].Name +"', '"+ results[0].cname +"',  "+ results[0].mnumber+",'"+ results[0].Email+"','"+ results[0].GSTno+"', '"+ results[0].Saddress+"' ,'"+ results[0].PANno+"' ,'"+ results[0].brand+"' ,'"+ results[0].passw+"','"+ results[0].pass+"','"+ results[0].cement+"','"+ results[0].tmt+"', '"+ results[0].electrical+"','"+ results[0].wooden+"','"+ results[0].bathroom+"','"+ results[0].paint+"','"+ results[0].rmc+"','"+ results[0].automation+"','"+ results[0].dnw+"','"+ results[0].roofing+"','"+ results[0].glass+"','"+ results[0].sand+"','"+ results[0].bricks+"','"+ results[0].plumbing+"','"+ results[0].tile+"','"+ results[0].hardware+"','"+ results[0].lighting+"','"+ results[0].stones+"','"+ results[0].homedecor+"','"+ results[0].kitchen+"','"+ results[0].chemicals+"','"+ results[0].youare+"')";
  con.query(sql0, function(err){ 
  if(err) throw err
  con.query('delete from temporarysellers'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("wrong otp");
	}
	});
	})

Router.get('/success4/:token1', (req,res)=>{
    con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.params.token1, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporaryconsultant', function(err,results,feild){
	
	var sql1 = " INSERT INTO consulting VALUES('"+ results[0].Name2 +"',  "+ results[0].mnumber2+", '"+ results[0].Email2+"' ,"+ results[0].aadharno2+",'"+ results[0].passw2+"','"+ results[0].pass2+"','"+ results[0].commercial2+"','"+ results[0].residential2+"','"+ results[0].ur2+"')";
  con.query(sql1, function(err){
  if(err) throw err
  con.query('delete from temporaryconsultant'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("Link expired!!!!");
	}
	});
	
});

Router.post('/success4', (req,res)=>{
	con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.body.token, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporaryconsultant', function(err,results,feild){
	
	var sql1 = " INSERT INTO consulting VALUES('"+ results[0].Name2 +"',  "+ results[0].mnumber2+", '"+ results[0].Email2+"' ,"+ results[0].aadharno2+",'"+ results[0].passw2+"','"+ results[0].pass2+"','"+ results[0].commercial2+"','"+ results[0].residential2+"','"+ results[0].ur2+"')";
  con.query(sql1, function(err){
  if(err) throw err
  con.query('delete from temporaryconsultant'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("wrong otp");
	}
	});
	})

Router.get('/success3/:token1', (req,res)=>{
    con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.params.token1, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporarycontractor', function(err,results,feild){
	
	var sql2 = " INSERT INTO contracting VALUES('"+ results[0].Name1 +"',  "+ results[0].mnumber1+", '"+ results[0].Email1+"' ,"+ results[0].aadharno1+",'"+ results[0].passw1+"','"+ results[0].pass1+"','"+ results[0].civil1+"','"+ results[0].tile1+"', '"+ results[0].plumbing1+"','"+ results[0].electrical1+"','"+ results[0].paint1+"','"+ results[0].carpenter1+"','"+ results[0].commercial1+"','"+ results[0].residential1+"')";
	con.query(sql2, function(err){
  if(err) throw err
  con.query('delete from temporarycontractor'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("Link expired!!!!");
	}
	});
	
});0

Router.post('/success3', (req,res)=>{
	con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.body.token, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporarycontractor', function(err,results,feild){
	
	var sql2 = " INSERT INTO contracting VALUES('"+ results[0].Name1 +"',  "+ results[0].mnumber1+", '"+ results[0].Email1+"' ,"+ results[0].aadharno1+",'"+ results[0].passw1+"','"+ results[0].pass1+"','"+ results[0].civil1+"','"+ results[0].tile1+"', '"+ results[0].plumbing1+"','"+ results[0].electrical1+"','"+ results[0].paint1+"','"+ results[0].carpenter1+"','"+ results[0].commercial1+"','"+ results[0].residential1+"')";
	con.query(sql2, function(err){
  if(err) throw err
  con.query('delete from temporarycontractor'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("wrong otp");
	}
	});
	})

Router.get('/success5/:token1', (req,res)=>{
    con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.params.token1, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporarycustomer', function(err,results,feild){
	
	var sql3 = " INSERT INTO coustomer VALUES('"+ results[0].Name3 +"',  "+ results[0].mnumber3+", '"+ results[0].Email3+"' ,"+ results[0].aadharno3+",'"+ results[0].passw3+"','"+ results[0].pass3+"','"+ results[0].bt3+"')";
	con.query(sql3, function(err){
  if(err) throw err
  con.query('delete from temporarycontractor'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("Link expired!!!!");
	}
	});
	
});

Router.post('/success5', (req,res)=>{
	con.query ('select * from tokenx where tokenid = ? and tokenexp > ? ',[req.body.token, new Date()], function(error,result,feilds){
	if (result.length > 0) {
		con.query('delete from tokenx');
	con.query('select * from temporarycustomer', function(err,results,feild){
	
	var sql3 = " INSERT INTO coustomer VALUES('"+ results[0].Name3 +"',  "+ results[0].mnumber3+", '"+ results[0].Email3+"' ,"+ results[0].aadharno3+",'"+ results[0].passw3+"','"+ results[0].pass3+"','"+ results[0].bt3+"')";
	con.query(sql3, function(err){
  if(err) throw err
  con.query('delete from temporarycontractor'); 
  res.render('success.ejs');
  });
	});	
  }
	else {
		res.send("wrong otp");
	}
	});
	})

  
module.exports = Router;