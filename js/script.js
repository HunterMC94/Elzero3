  /* Setting up loader */
  document.onreadystatechange = function() {
    if (document.readyState == "complete") {
      document.querySelector(
        "#loader").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
    }
  };
  


$('#menu-open').on('click', function(){
	$('.menu').toggleClass('opened-menu');
	$('.menu').toggleClass('closed-menu');
});


$('#switch').on('click', function(){
  $('.mobile-menu').removeClass('hide-menu');
  $('.mobile-menu').addClass('show-menu');
  $('#switch').addClass('hide-switch');
});

$('#close-menu').on('click', function(){
  $('.mobile-menu').removeClass('show-menu');
  $('.mobile-menu').addClass('hide-menu');
  $('#switch').removeClass('hide-switch');
});

const skills = document.getElementById("skills");

function animateSkills(){
	
	const skillsTop = skills.getBoundingClientRect().top;
	const skillsBottom = skills.getBoundingClientRect().bottom;
	
	if(skillsTop < window.innerHeight / 2 && skillsBottom >= window.innerHeight / 2){
		document.querySelector('.html').classList.add('html-active');
		document.querySelector('.css').classList.add('css-active');
		document.querySelector('.js').classList.add('js-active');
		document.querySelector('.php').classList.add('php-active');
	}
	else{
		document.querySelector('.html').classList.remove('html-active');
		document.querySelector('.css').classList.remove('css-active');
		document.querySelector('.js').classList.remove('js-active');
		document.querySelector('.php').classList.remove('php-active');
	}
}


window.addEventListener('scroll', animateSkills);



setInterval(function(){
	if(parseInt(document.getElementById("seconds").innerHTML) < 10){
	document.querySelector('.scnd-zero').classList.remove('hide-el');
}
else{
	document.querySelector('.scnd-zero').classList.add('hide-el');
}
}, 1);


setInterval(function(){
	if(parseInt(document.getElementById("minutes").innerHTML) < 10){
	document.querySelector('.mnt-zero').classList.remove('hide-el');
}
else{
	document.querySelector('.mnt-zero').classList.add('hide-el');
}
}, 1);


setInterval(function(){
	if(parseInt(document.getElementById("hours").innerHTML) < 10){
	document.querySelector('.hur-zero').classList.remove('hide-el');
}
else{
	document.querySelector('.hur-zero').classList.add('hide-el');
}
}, 1);


setInterval(function(){
	if(parseInt(document.getElementById("days").innerHTML) < 10){
	document.querySelector('.days-zero').classList.remove('hide-el');
}
else{
	document.querySelector('.days-zero').classList.add('hide-el');
}
}, 1);

function startTimer(secCount){
	
	var seconds = setInterval(function(){
		document.getElementById("seconds").innerHTML = secCount;
		secCount--;
	    if (document.getElementById("seconds").innerHTML == 1){
			clearInterval(seconds);
			
			var minutes = setInterval(function(){
				document.getElementById("minutes").innerHTML = document.getElementById("minutes").innerHTML - 1;
				if (document.getElementById("minutes").innerHTML == -1){
				document.getElementById("minutes").innerHTML = 59;
				document.getElementById("hours").innerHTML = document.getElementById("hours").innerHTML - 1;
				
				if(document.getElementById("hours").innerHTML == -1){
					document.getElementById("hours").innerHTML = 23;
					document.getElementById("days").innerHTML = document.getElementById("days").innerHTML -1;
				}
				}
				clearInterval(minutes);
			}, 1000);
			
			if(document.getElementById("days").innerHTML == 0){
				clearInterval(seconds);
				clearInterval(minutes);
				var final = setInterval(function(){
					document.getElementById("seconds").innerHTML = 0;
					clearInterval(final);
				}, 1000);
				
			}
			else{
				startTimer(59);
			}
		}
	}, 1000);
}
startTimer(document.getElementById("seconds").innerHTML - 1);


const stats = document.getElementById("stats-cont");

function animateStats(){
	
	const statsTop = stats.getBoundingClientRect().top;
	const statsBottom = stats.getBoundingClientRect().bottom;
	
	
	if(statsTop < window.innerHeight / 2 && statsBottom >= window.innerHeight / 2){
	  
		statsInterval = setInterval(function(){
		  
			if(document.getElementById('clients').innerHTML < 300){
				document.getElementById('clients').innerHTML++;
			}
			if(document.getElementById('projects').innerHTML < 400){
				document.getElementById('projects').innerHTML++;
			}
			if(document.getElementById('countries').innerHTML < 12){
				document.getElementById('countries').innerHTML++;
			}
			if(document.getElementById('money').innerHTML < 500){
				document.getElementById('money').innerHTML++;
			}
			
			else {
			  clearInterval(statsInterval);
			  window.removeEventListener('scroll', animateStats);
			}
		}, 100);
	}
}

window.addEventListener('scroll', animateStats);



$('#vid1').on('click', function(){
	$('#vid-frame').attr('src', 'https://r1---sn-5hnednss.googlevideo.com/videoplayback?expire=1684021275&ei=u8tfZPWKHsS1gwOXpIeIDQ&ip=2607%3A5300%3A60%3A6137%3A4ef9%3A133c%3A1495%3A9c10&id=o-ADmNLRWZOZ8X6zicoIX3Nl0OUoH7CVF_4p1OqTgcDFa0&itag=18&source=youtube&requiressl=yes&spc=qEK7B28W4pFX7F-fp73gKvcVHojCJR4&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=68.800&lmt=1636738948274352&fexp=24007246&c=ANDROID&txp=2218224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgRh5nOlquUrnnOcSzSc5jg88-cUhNi2T6V_C5bufLUBwCIQDKZFXiLN_TgHwVywr1S2FB4rAY3N2rGLU-OMDlIwLj-A%3D%3D&rm=sn-nq15po-3gue7l&req_id=b5b2935a1481a3ee&redirect_counter=2&cm2rm=sn-5hnezs7e&cms_redirect=yes&cmsv=e&mh=lz&mip=41.95.64.229&mm=34&mn=sn-5hnednss&ms=ltu&mt=1683999403&mv=m&mvi=1&pl=20&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgJ7J3i0sXZSIjzl9Ya5D-esJz7Yo9IYlG5nW_FRAz1YUCICehaL7LNjVWiw7SQmmV7SP0UtziblFjAbjlKE73MhTh');
	$('#vid-thum').attr('src', 'img/preview1.jpeg');
	$('#vid-frame').removeClass('hide-el');
	$('#vid-title').html('How To Create Sub Domain');
	$('#close-vid').removeClass('hide-el');
});

$('#vid2').on('click', function(){
	$('#vid-frame').attr('src', 'https://r1---sn-5hne6nzd.googlevideo.com/videoplayback?expire=1684021588&ei=9MxfZKGGLMaJ8wTSlrDwAQ&ip=2607%3A5300%3A60%3A6140%3A3bd1%3A2007%3A58f8%3A5475&id=o-AFeTrrftJ3AQ_mAuL8aI7C6aVSYt98iFwNDKa8e-1Kuz&itag=18&source=youtube&requiressl=yes&spc=qEK7B-vuNQkc2XghzHfM2LZVDQ9M1lQ&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=13462381&ratebypass=yes&dur=344.909&lmt=1678854943870344&fexp=24007246,24362685,24362687,51000023&c=ANDROID&txp=5438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgUhpJ2NkXNqRDrDTPGHqgTL_WXkxex3YJzgkAcRNhZjkCIHpwxsqerUafRQAi6fL23M7zTnB1HaR0lFk4McxuxgjU&redirect_counter=1&rm=sn-nq15po-3gue7e&req_id=fff9d74ce3f9a3ee&cms_redirect=yes&cmsv=e&mh=du&mip=41.95.64.229&mm=29&mn=sn-5hne6nzd&ms=rdu&mt=1683999670&mv=m&mvi=1&pl=20&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgEajmIlhP2dekjz-w9PU3TSxqGh-AH96Dm3pltE347_ICIQDDrrcnGppZefuCOoXJK3DvlBdgvx_aPZk61ndR1c5_Qw%3D%3D');
	$('#vid-thum').attr('src', 'img/preview2.png');
	$('#vid-frame').removeClass('hide-el');
	$('#vid-title').html('Playing With The DNS');
	$('#close-vid').removeClass('hide-el');
});

$('#vid3').on('click', function(){
	$('#vid-frame').attr('src', 'https://r2---sn-5hneknee.googlevideo.com/videoplayback?expire=1684021812&ei=1M1fZOfCG8nN8wTQmKHoAg&ip=2607%3A5300%3A60%3A6174%3Aa1f%3A31b%3Ac930%3Ad96b&id=o-AFBy6GqhEQgZ5d58FeMMn-n0MrnANEHnD0tqoOAjuorb&itag=18&source=youtube&requiressl=yes&spc=qEK7B525G_Xw0W5iMbga5me-uw1o7-Y&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=331.859&lmt=1676748399884457&fexp=24007246,24362685,24362686&c=ANDROID&txp=6219224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAL-FngB0f0UZK0wEK87uKAMage566w0FikjDXYpHd9FQAiAaJI7wwVsRUChnvNs3wb7FMFlEHa4TjzYOmr-lQNOFNA%3D%3D&rm=sn-nq15po-3gue7e&req_id=2edf26d8c5d9a3ee&redirect_counter=2&cm2rm=sn-4g5ezl7l&cms_redirect=yes&cmsv=e&mh=kp&mip=41.95.64.229&mm=34&mn=sn-5hneknee&ms=ltu&mt=1683999894&mv=m&mvi=2&pl=20&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOZv1hV7KZNq5Qxntjt3hldQN7JKTzIft_DOr3BINJBsAiEAjmkQIKfQKCywjssnbZPRoEVQNH-fceFqjPmREpVk8Xo%3D');
	$('#vid-thum').attr('src', 'img/preview3.jpg');
	$('#vid-frame').removeClass('hide-el');
	$('#vid-title').html('Everything About The Virtual Hosts');
	$('#close-vid').removeClass('hide-el');
});

$('#vid4').on('click', function(){
	$('#vid-frame').attr('src', 'https://r2---sn-5hnekn7d.googlevideo.com/videoplayback?expire=1684022091&ei=685fZNzzOLyT_9EP-5KLmAU&ip=2607%3A5300%3A60%3A6174%3Aa1f%3A31b%3Ac930%3Ad96b&id=o-AOwqgx4w9MJm4g23db-wR5SropI_wGjUPbzR5_-KebO8&itag=18&source=youtube&requiressl=yes&spc=qEK7B8OUY8VAhfby18vMZwfWkkEp1kA&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=480.560&lmt=1662383214121772&fexp=24007246,24363392&c=ANDROID&txp=5318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAOqKlMJlGrkgdpNE-mIsZtPZU2J0cLBliPhWWZ7eZ07dAiAgSu0PZOJQzLM22sNJqHptN8Kz2a1csbZIYyr2L0QNDg%3D%3D&cm2rm=sn-nq15po-3gue7e,sn-5hnel67l&req_id=10244c3c7f62a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=s2&mip=41.240.180.73&mm=34&mn=sn-5hnekn7d&ms=ltu&mt=1684000362&mv=m&mvi=2&pl=18&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhANCgZDHuKtFJNfV2k40OJbVR6M5mnoflhlLwuMU9WXh_AiAniddn6HF-BVeAw07RnkNiXC1_Q14pZf-4TXlBUxsJ5g%3D%3D');
	$('#vid-thum').attr('src', 'img/preview4.jpg');
	$('#vid-frame').removeClass('hide-el');
	$('#vid-title').html('How To Monitor Your Website');
	$('#close-vid').removeClass('hide-el');
});

$('#vid5').on('click', function(){
	$('#vid-frame').attr('src', 'https://r2---sn-5hne6nsy.googlevideo.com/videoplayback?expire=1684022490&ei=etBfZOjQN9mM_9EP-6SYiAc&ip=2607%3A5300%3A60%3A6102%3A9fd6%3A6b9c%3A9944%3A7340&id=o-AIDNAOrI7qWKyxnjpQJQ1g9lTXsKXES5CbHsU4FK-b4-&itag=18&source=youtube&requiressl=yes&spc=qEK7B13JfI5cZclXhS_t8Wu_3EcfH7s&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=671.451&lmt=1661326059354912&fexp=24007246&c=ANDROID&txp=1318224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgYfnBW1N6NnODuKApY5aOvCQC4bKYVRdZffSLMsvvQ9cCIQCiP6TY9BBhFAC3RIthd_VpFNnWPk80--R6HVlH4GH9mA%3D%3D&cm2rm=sn-nq15po-3gue7e,sn-5hnese7l&req_id=dd95db0e06b8a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=I5&mip=41.240.180.73&mm=34&mn=sn-5hne6nsy&ms=ltu&mt=1684000607&mv=m&mvi=2&pl=18&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhALaKbeBpq2C3RE7kabKglZEwjzv8EHsTI50_uo_EjIPmAiAHRbnKGW9O6wRE29PrqPZ6bdJ9-gr2li115qKh0-weng%3D%3D');
	$('#vid-thum').attr('src', 'img/preview5.png');
	$('#vid-frame').removeClass('hide-el');
	$('#vid-title').html('Uncharted Beating The Last Boss');
	$('#close-vid').removeClass('hide-el');
});

$('#vid6').on('click', function(){
	$('#vid-frame').attr('src', 'https://r2---sn-5hnekn7k.googlevideo.com/videoplayback?expire=1684022726&ei=ZtFfZNaAKIf08gT6mZuIBA&ip=2607%3A5300%3A60%3A6198%3Ab47%3A4186%3A7f71%3A8aa4&id=o-AEINKjKTQWpDYGGOm5Smt_WRBTzbH4lkahChwPAQbTpR&itag=18&source=youtube&requiressl=yes&spc=qEK7B5voVoxC4AwtBy2rNuNbhKPOwjg&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=638.943&lmt=1673424196974603&fexp=24007246,24362687,51000024&c=ANDROID&txp=6219224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAPr6y7TgzdkOM_iFur2me8SZL6m08R-oUnCFeBfBV06pAiA_P-Y3RB4rzdLcgs-TRncLPYQUMBa9kPCGYEldvPaWoQ%3D%3D&cm2rm=sn-nq15po-3gue7l,sn-5hnell7s&req_id=a79b903da017a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&mh=XF&mip=41.240.180.73&mm=34&mn=sn-5hnekn7k&ms=ltu&mt=1684000841&mv=m&mvi=2&pl=18&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJpy9VF4w4AUu0PK2QfV1tC191cmUEAUn_EOF1E6Ws07AiBhWzQEgsHClRKCFiCbfcLmbWIYOehR6rAJs1bXoLOHQw%3D%3D');
	$('#vid-thum').attr('src', 'img/preview6.jpg');
	$('#vid-frame').removeClass('hide-el');
	$('#vid-title').html('Ys Oath In Felghana Overview');
	$('#close-vid').removeClass('hide-el');
});

$('#close-vid').on('click', function(){
	$('#vid-frame').addClass('hide-el');
	$('#vid-thum').attr('src', 'img/preview.jpg');
	$('#vid-title').html('Choose a Video');
	$('#close-vid').addClass('hide-el');
});

var min = 1;
var max = 6;
$('#random-vid').on('click', function(){
  var randNum = Math.floor(Math.random() * (max - min + 1)) + 1;
  $('#vid' + randNum.toString()).click();
});
