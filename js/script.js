// cats inverse
function inversecat(name,inverfile,file){
    var catname = document.getElementById(name);
    catname.addEventListener("mousedown",function(){
        this.src=inverfile;
    })
    catname.addEventListener("mouseup",function(){
        this.src=file;
    })
}

inversecat("cat1","asset/cat_change/cat1_inverse.jpg","asset/cat_normal/cat1.jpg")
inversecat("cat2","asset/cat_change/cat2_inverse.jpg","asset/cat_normal/cat2.jpg")
inversecat("cat3","asset/cat_change/cat3_inverse.jpg","asset/cat_normal/cat3.jpg")
inversecat("cat4","asset/cat_change/cat4_inverse.jpg","asset/cat_normal/cat4.jpg")
inversecat("cat5","asset/cat_change/cat5_inverse.jpg","asset/cat_normal/cat5.jpg")

//feed cats
var cat1_satiety = 0;
var cat2_satiety = 0;
var cat3_satiety = 0;
var cat4_satiety = 0;
var cat5_satiety = 0;
var cat6_satiety = 0;
var catsname = ["Alpha", "Bata", "Gamma", "Delta", "Omega"];

function dofeed(num,satiety){
    var name = 'feedcat' + num;
    var sat = 'satcat' + num;
    var who = document.getElementById(name);
    var satcat = document.getElementById(sat);
    if (satiety==1){
        alert(catsname[num-1]+'is full.');
        return 1;
    }
    satiety = satiety + 0.25;
    who.style.top = "-3.5vh";
    who.style.opacity = satiety;
    satcat.innerText = 'Satiety: ' + satiety*100 + '%';
    if (satiety==1){
        satcat.style.color = "red";
    }
    return satiety;
}

var feed = document.getElementById("feed");
var breed = document.getElementById("breed_name");
var form = document.getElementById("form1");

feed.addEventListener("click",function(event){
    if(breed.value==""){
        if (form[5].checked){
            cat1_satiety = dofeed(1,cat1_satiety);
            cat2_satiety = dofeed(2,cat2_satiety);
            cat3_satiety = dofeed(3,cat3_satiety);
            cat4_satiety = dofeed(4,cat4_satiety);
            cat5_satiety = dofeed(5,cat5_satiety);
        }
        else if (form[0].checked){
            cat1_satiety = dofeed(1,cat1_satiety);
        }
        else if (form[1].checked){
            cat2_satiety = dofeed(2,cat2_satiety);
        }
        else if (form[2].checked){
            cat3_satiety = dofeed(3,cat3_satiety);
        }
        else if (form[3].checked){
            cat4_satiety = dofeed(4,cat4_satiety);
        }
        else if (form[4].checked){
            cat5_satiety = dofeed(5,cat5_satiety);
        }
    }

    else if(breed.value=="ragdoll"){
        cat1_satiety = dofeed(1,cat1_satiety);
        cat2_satiety = dofeed(2,cat2_satiety);
        cat5_satiety = dofeed(5,cat5_satiety);
    }
    else if(breed.value=="ring"){
        cat3_satiety = dofeed(3,cat3_satiety);
    }
    else if(breed.value=="tardar"){
        cat4_satiety = dofeed(4,cat4_satiety);
    }
    else if(breed.value=="meme"){
        alert("Popcat doesn't like to eat.");
    }
    else {
        alert("No such breed.")
    }
    
    breed.value="";
    event.preventDefault();
    if (cat1_satiety==1 && cat2_satiety && cat3_satiety && cat4_satiety && cat5_satiety){
        alert("What is it?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var popcatpic = document.getElementById("cat6");
        var popcatname = document.getElementById("popcatname");
        var popcatbreed = document.getElementById("popcatbreed");
        popcatpic.src = "asset/popcat1.jpg";
        popcatname.innerText = "Popcat";
        popcatbreed.innerText = "meme";
        var catname = document.getElementById("cat6");
        var satcat = document.getElementById("satcat6");
        catname.addEventListener("mousedown",function(){
            cat6_satiety +=1;
            satcat.innerText = 'Satiety: ' + cat6_satiety + '%';
            if (cat6_satiety==100){
                alert("???????????????????????????????????????????????????");
            }
            else if (cat6_satiety>=100){
                this.src="asset/popcat3.jpg";
                satcat.style.color = "black";
            }
            else{
                this.src="asset/popcat2.jpg";
            }
        })
        catname.addEventListener("mouseup",function(){
            if (cat6_satiety>=100){
                satcat.style.color = "red";
            }
            this.src="asset/popcat1.jpg";
        })
    }
})

feed.addEventListener("mouseenter",function(){
    feed.style.transitionDelay = "50ms"
    feed.style.transform = "scale(1.3)";
})
feed.addEventListener("mouseout",function(){
    feed.style.transform = "scale(1)";
})
feed.addEventListener("mousedown",function(){
    feed.style.transform = "scale(1)";
})
feed.addEventListener("mouseup",function(){
    feed.style.transitionDelay = "100ms"
    feed.style.transform = "scale(1.3)";
})
