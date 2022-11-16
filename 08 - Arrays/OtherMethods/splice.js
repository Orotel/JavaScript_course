// Using Splice to Remove elements
let carnival =['Juarema','Portugal','Tiete','Alipembe','sterlinina','Judedê']
//               (position) (quantity -rm)  
carnival.splice(     2     ,     2   )
console.log(carnival)


//we than use to comeback 
//               (position) (quantity -rm)  
carnival.splice(      2    ,     0  ,'Tiete','Alipembe')
console.log(carnival)