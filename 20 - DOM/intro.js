const myImg = document.createElement('img')
myImg.src = 'https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80'
document.body.append(myImg)
myImg.style.width='200px'
myImg.style.transition='all 2s'


setInterval(() => {
  const x = Math.floor(document.body.clientWidth*Math.random())
  const y = Math.floor(document.body.clientHeight*Math.random())
  myImg.style.transform =`translate(${y}px,${x}px)`
},2000 );