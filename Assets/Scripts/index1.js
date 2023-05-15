var xnhrid = new XMLHttpRequest();
xnhrid.open("get", "https://reqres.in/api/users/")
xnhrid.send();

var data1 = []
var idarr = [];
var avatararr = [];
xnhrid.addEventListener("load", function () {
    var response = JSON.parse(xnhrid.response);
    data1 = response.data;

    for (i = 0; i < data1.length; i++) {
        idarr[i] = data1[i].id

    }
    for (i = 0; i < data1.length; i++) {
        avatararr[i] = data1[i].avatar

    }


})
var xnhruserid = new XMLHttpRequest();
xnhruserid.open("get", "https://jsonplaceholder.typicode.com/posts")
xnhruserid.send();

var data = [];
var titlearr = []
var bodyarr = []

xnhruserid.addEventListener("load", first)


var ELEMENT1 = document.querySelector('#tweet1')
var ELEMENT2 = document.querySelector('#tweet2')
var ELEMENT3 = document.querySelector('#tweet3')
var ELEMENT4 = document.querySelector('#tweet4')

var element = [ELEMENT1, ELEMENT2, ELEMENT3, ELEMENT4]

function first() {

    var response = JSON.parse(xnhruserid.response);
    data = response;
    for (x = 0; x < data.length; x++) { titlearr[x] = data[x].title }
    for (x = 0; x < data.length; x++) { bodyarr[x] = data[x].body }

    var img1 = document.createElement('img')
    var div1 = document.createElement('div')
    var img2 = document.createElement('img')
    var div2 = document.createElement('div')
    var img3 = document.createElement('img')
    var div3 = document.createElement('div')
    var img4 = document.createElement('img')
    var div4 = document.createElement('div')



    var arr = [img1, img2, img3, img4]
    var div = [div1, div2, div3, div4]

    for (i = 0; i < element.length; i++) {
        div[i].setAttribute("class", "postdiv")
        arr[i].setAttribute('class', "postimg")

        arr[i].setAttribute('src', avatararr[i])
        element[i].appendChild(arr[i])

        div[i].innerHTML = data1[i].first_name+" "+data1[i].last_name+date+"<br><br>"+ titlearr[i] + "<br>" + bodyarr[i]
        element[i].appendChild(div[i])


    }

}






var img5 = document.createElement('img')
var div5 = document.createElement('div')
var img6 = document.createElement('img')
var div6 = document.createElement('div')
var img7 = document.createElement('img')
var div7 = document.createElement('div')
var img8 = document.createElement('img')
var div8 = document.createElement('div')


var arr2 = [img5, img6,img7,img8]
var div2 = [div5, div6,div7,div8]

var maindiv1 = document.createElement('div')
var maindiv2 = document.createElement('div')
var maindiv3 = document.createElement('div')
var maindiv4 = document.createElement('div')
var feeddiv = [maindiv1, maindiv2,maindiv3,maindiv4]
feeddiv.forEach(function (el) {
    el.setAttribute('class', 'post-style')
})

var date = new Date().toLocaleString();

function second() {

    document.getElementById("refresh").style.display="none"
    document.getElementById('mother-div').insertBefore(maindiv1, element[0])
    document.getElementById('mother-div').insertBefore(maindiv2, element[0])
    document.getElementById('mother-div').insertBefore(maindiv3, element[0])
    document.getElementById('mother-div').insertBefore(maindiv4, element[0])

    for (i = 4; i < 8; i++) {
        if(i>5){
            div2[i - 4].setAttribute("class", "postdiv")
            arr2[i - 4].setAttribute('class', "postimg")
            arr2[i - 4].setAttribute('src', avatararr[i-3])
            feeddiv[i - 4].appendChild(arr2[i - 4])
            div2[i-4].innerHTML =date+"<br><br>"+ titlearr[i] + "<br>" + bodyarr[i]
            feeddiv[i - 4].appendChild(div2[i - 4])
        }
        else
        {
        div2[i - 4].setAttribute("class", "postdiv")
        arr2[i - 4].setAttribute('class', "postimg")
        
        arr2[i - 4].setAttribute('src', avatararr[i])
        feeddiv[i - 4].appendChild(arr2[i - 4])
           
        div2[i-4].innerHTML = data1[i].first_name+" "+data1[i].last_name+date+"<br><br>"+"this is title<br>" + titlearr[i] + "<br>" + bodyarr[i]
        feeddiv[i - 4].appendChild(div2[i - 4])
    }
    
}}

var xid = localStorage.getItem("id");

var input = Number(xid)-1;

// console.log(input+1);

var imgx = document.createElement('img')
var divx = document.createElement('div')
var divx1 = document.createElement('div')


var nhr = new XMLHttpRequest();
nhr.open("get","https://reqres.in/api/users/")
nhr.send()
nhr.addEventListener("load",function(){
    var metadata = JSON.parse(nhr.response);
    var data= metadata.data;
    console.log(data[2].first_name)
    

var element=document.getElementById('user-display');
imgx.setAttribute("src",avatararr[input])
imgx.setAttribute("class","imgx")
element.appendChild(imgx)
divx.innerHTML= data[input].first_name+" "+data[input].last_name;
divx.setAttribute("class","divx")
element.appendChild(divx)
divx1.innerHTML=data[input].email;
divx1.setAttribute("class","divx1")
element.appendChild(divx1)
  
})







