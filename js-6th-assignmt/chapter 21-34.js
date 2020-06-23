var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
var x ,y
x=prompt("Enter finding item")
for (let i=0;i<A.length;i++){
     y= A[i];
    if (y.toLowerCase() ===x.toLowerCase() ){
         document.write('cokie is availble in index '+i+' inour bakery')
    }
    else{
        document.write('not found')
    }
}


//task 2
var x=prompt("enter your favorite mobile modle :");
document.write('length of string :'+x.length)

//task 3

var x='pakistani';
for (let i=0;i<x.length;i++){
    if (x[i]==='n'){
        document.write('index of '+x[i]+' :'+i)
    }
}


////task 4
var x='Hello World';
var y=x.length
for (let i=y;i>=0;i--){
    if (x[i]==='l'){
        document.write('index of '+x[i]+' :'+i)
        break
    }

}

//task 5
var x='pakistani';
document.write('character at index 3 :'+x[2])


////task 7
var city,afcity
city ='Hydrabad';
afcity =city.replace('Hydr','Islam')
document.write(afcity)


////task 8
var x,y,z
x = 'Ali and Sami are best friends. They play cricket and football together'
y = x.replace('and','&')
document.write(y)
for (let i in x){
    document.write(i)
}

var username,y
username= prompt("enter username")
for (let i in username){
    if (username[i]===String.fromCharCode(64) | username [i] === String.fromCharCode(33) | username[i] === String.fromCharCode(46) | username[i] === String.fromCharCode){
        document.write('not use !,.@ this charcetrs')
    }
}
document.write(username)
  username[i]
  document.write(y +'\n')


    document.write(username[i] +'\n')

    document.write(i+'<br>')

// var A,x
A=['cake', 'apple pie', 'cookie', 'chips', 'patties']
x='apple pie'
for (let i in A){
    if ( x===A[i]){
        document.write('item is awailible')
    }
    else{
        continue
    }
}

var x,y
x='0fahad';
y=x.split('')
if (y[0]>=0){
    document.write('pass ')
}
else if (x.length<=6){
    document.write('lenth  not correct')
}

document.write(y)

var x='University,of,Karachi'
x=x.split(',');
document.write(x)

var x,y
x='pakistan';
y=x.length
document.write(x[y-1])

var x,y
y=0
x='The quick brown fox jumps over the lazy dog'
x=x.split(' ')
for (let i in x){
    if (x[i].toLowerCase()==='the'){
        y=y+1
    }
}
document.write('occurence of "the" :'+y)

var x, y, z, a
x = prompt('Enter num')

x = Number(x)
if (x <= 0) {
    document.write(x)
    y = Math.round(x)
    document.write(y)
    z = Math.floor(x)
    document.write(z)
    a = Math.ceil(x)
    document.write(a)
}
else{
    document.write('num is neg')
}


var x, n

n = 0
while (n < 10) {
    x = Math.random()*2
    x=Math.ceil(x)
    if (x===1){
        document.write('head')
    }
    else{
        document.write('tail')
    }
    
    n+=1
}

var a,b


n = 0
while (n < 10) {
    a= Math.random()*10
    a = Math.floor(a)
    
    
    n=n+1
}