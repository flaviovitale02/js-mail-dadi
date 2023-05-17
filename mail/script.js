const mail = prompt('inserisci la tua mail')

 const ListaMail = [
    'pinopinocchio@gmail.com',
    'mastrogeppetto@libero.it',
    'filippoalbertone@gmail.com'
 ] 
 let hoTrovatoMail = 0

 for(let i = 0; i < ListaMail.length;i++){
   if(mail == ListaMail[i]){
    hoTrovatoMail = 1
   }
 }

 if (hoTrovatoMail ==0){
    console.log('email non autorizzata');
 } else {
    console.log('email autorizzata');
 }


 