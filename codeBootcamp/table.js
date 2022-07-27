//List of variables
var res = '';
var shortDescription = document.getElementById("discription");
var caller = document.getElementById("caller");
var priority = document.getElementById("priority");
//var state = document.getElementById("state").value;
var assignmentGroup = document.getElementById("state");
  
var requestBody =
    '{"short_description":"' +
    shortDescription +
    '","assignment_group":"' +
    assignmentGroup +
    
    '","priority":"' +
    priority +
    '","caller":"' +
    caller +
    '"}';

//List of Functions
function DataRetrive(){ 
 
    var client=new XMLHttpRequest();
    client.open("get","https://dev86324.service-now.com/api/now/table/incident?sysparm_limit=10");
    
    client.setRequestHeader('Accept','application/json');
    client.setRequestHeader('Content-Type','application/json');
    
    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'uX-Tqj5^Zu6I'));
    
    client.onreadystatechange = function() { 
    
        if(this.readyState == this.DONE) {
        var res = this.response;
        var parsedData = JSON.parse(res);
        parsedData=parsedData.result;
        var tablebody = "";
        //var htmlBody = document.getElementById("tableBody").innerHTML=`<tr><th >${element.number}</th><td>${element.state}</td><td>${element.short_description}</td><td>${element.priority}</td><td>${element.assignmentgroup}</td></tr>`;
       
          parsedData.forEach(element => {
          tablebody = tablebody + `<tr><th><a href="readRecord.html?sys_id=${element.sys_id}">${element.number}</a></th><td>${element.state}</td><td>${element.description}</td><td>${element.priority}</td><td>${element.discription}</td></td><button>Delete</button></tr>`;
          
      }),
      document.getElementById("tableBody").innerHTML=tablebody;
    }
        
      };
    client.send(requestBody);
    }
    //-------Create 
    var requestBody = ""; 

    var client=new XMLHttpRequest();
    client.open("post","https://dev86324.service-now.com/api/now/table/incident");
    
    client.setRequestHeader('Accept','application/json');
    client.setRequestHeader('Content-Type','application/json');
    
    //Eg. UserName="admin", Password="admin" for this code sample.
    client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'uX-Tqj5^Zu6I'));
    
    client.onreadystatechange = function() { 
        if(this.readyState == this.DONE) {
            document.getElementById("response").innerHTML=this.status + this.response; 
        }
    }; 
    client.send(requestBody);
  