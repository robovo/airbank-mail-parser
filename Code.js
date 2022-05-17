function myFunction() {
	const labelName = "Pohyby na účtu";
  
  const label = GmailApp.getUserLabelByName(labelName);
  // log(label.getName())
  const threads = label.getThreads();
  const bodyArray = [];

  



  for (let threadnum in threads) {
    const thread = threads[threadnum];
    const emails = thread.getMessages()
    for (let emailnum in emails) {
      const email = emails[emailnum];
      const body = email.getBody();
      bodyArray.push(processEmail(body))
      

      break
    }
    break
  }


  //log(bodyArray)
  
}
  
function processEmail(body) {
  const lines = body.split("\r\n");
  //log(lines)
  const firstLine = lines[2];
  const transType = lines[6];
  const details = [];
  let i = 7;
  while (lines[i].length > 1) {
    details.push(lines[i]);
    i++;
  }
  log(firstLine)
  log(transType)
  log(details)

  const t = {};
  // first line does not change
  t.myAccountName = firstLine.split("účtu ")[1].split(" číslo ")[0];
  t.myAaccountNumber = firstLine.split("číslo ")[1].split(" se")[0];
  t.income = firstLine.split(t.myAaccountNumber + " se ")[1].split(" ")[0] === "zvýšil";
  t.date = firstLine.match(/\d\d\.\d\d.\d\d\d\d/)[0];
  t.time = firstLine.match(/\d\d:\d\d/)[0];
  t.balance = firstLine.split(t.time + " je ")[1]

  

  log(t)
 
}
function log (text) {
  Logger.log(text)
}







