var a
a=prompt('Enter Value Of a ')
document.write('The value of a is: '+a);
document.write('The value of ++a is: '+ ++a);
document.write('The value of a++ is: '+ a++);
document.write('The value of --a is: '+ --a);
document.write('The value of a-- is: '+ a--);
  
/* task 2 */
var a=2;
var b=1;
document.write('a is: '+ a);
document.write('b is: '+ b);
document.write('Result is: '+ --a - --b + ++b + b--);

/* task 3 */
name=prompt("enter your name :");
alert('Hello '+name);

/* task 4 & 5 */
var num=5;
num=prompt('Enter num :');
document.write(num+' x 1 = '+num+"<br>" );
document.write(num+' x 2 ='+num*2+"<br>");
document.write(num+' x 3 ='+num*3+"<br>");
document.write(num+' x 4 ='+num*4+"<br>");
document.write(num+' x 5 ='+num*5+"<br>");
document.write(num+' x 6 ='+num*6+"<br>");
document.write(num+' x 7 ='+num*7+"<br>");
document.write(num+' x 8 ='+num*8+"<br>");
document.write(num+' x 9 ='+num*9+"<br>");
document.write(num+' x 10 ='+num*10+"<br>");

/* task 4 & 5 */

en=prompt('Enter your english obtained marks :');
math=prompt('Enter your math obtained marks :');
urdu=prompt('Enter your urdu obtained marks :')
totalObtained=(parseInt(en)+parseInt(math)+parseInt(urdu));
var total=100;
document.write('<h1>Marks Sheet</h1> <br><br>')
document.write('<h2>Subject \n\n\nTotal\nMarks\n\n\nObtained\nMarks\n\n\nPercentage</h2><br>')
document.write('English    '+  total+'\n\n\n'+en+'\n\n\n'+en*100/100+'%<br>');
document.write('Math       '+total+'\n\n\n'+math+'\n\n\n'+math*100/100+'%<br>');
document.write('Urdu       '+total+'\n\n\n'+urdu+'\n\n\n'+urdu*100/100+'%<br>');
document.write('\n\n\n\n\n'+total*3+'\n\n\n'+ totalObtained+'\n\n\n'+totalObtained*100/300+'%')




