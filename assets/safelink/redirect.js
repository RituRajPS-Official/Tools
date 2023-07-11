function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;
	for (i = 0; i < sURLVariables.length; i++) {
		var arr = sURLVariables[i].split('='),
			sParameterName = arr.splice(0, 1);
		sParameterName.push(arr.join('='));
		if (sParameterName[0] === sParam) {
			return typeof sParameterName[1] === undefined ? flase : decodeURIComponent(sParameterName[1]);
		}
	}
	return false;
};

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
randomEmoij = () => {
	var items = ["🤫", "👌", "💯", "💎", "🤞", "🔑", "🥰"];
	return items[Math.floor(Math.random() * items.length)];
}
hashCode = s => s.split('').reduce((a, b) => {
	a = ((a << 5) - a) + b.charCodeAt(0);
	return a & a
}, 0);
stayTime = 10;
(async () => {
	var note = document.getElementById('loadingNote');
	var nextUrl = getUrlParameter("~gitforge");
	if (!nextUrl) {
		document.getElementById("success").remove();
		document.getElementById("error").remove();
		return;
	}
	try {
		var json = decodeURIComponent(atob(nextUrl)),
			url = JSON.parse(json).url;
	} catch (er) {}
	if (url) {
		document.getElementById("error").remove();
		var fdlid = "fdl_" + Math.abs(hashCode(url));
		var preProgressBar = document.getElementById("preProgressBar");
		if (!localStorage.getItem(fdlid) || (new Date()).getTime() - localStorage.getItem("fdl_1907307024") > 1 * 30 * 60 * 1000) {
			var d = stayTime;
			preProgressBar.style["-webkit-animation-duration"] = d + "s";
			preProgressBar.style["animation-duration"] = d + "s";
			note.innerHTML = "Looking For Your Link.." + randomEmoij();
			await sleep(200 * d);
			note.innerHTML = "Analysis Done By 🔎 GitForge";
			await sleep(400 * d);
			note.innerHTML = "Decrypting Your Link.. " + randomEmoij();
			await sleep(200 * d);
			note.innerHTML = randomEmoij();
			await sleep(50 * d);
			note.innerHTML = "Wait A Second! " + randomEmoij();
			await sleep(150 * d);
			note.innerHTML = "Link Is Ready To Visit! 🔗";
		} else {
			var d = (Math.round(10 * stayTime) * 0.018);
			preProgressBar.style["-webkit-animation-duration"] = d + "s";
			preProgressBar.style["animation-duration"] = d + "s";
			note.innerHTML = "Looking for your link...";
			await sleep(1000 * d);
			note.innerHTML = "Link is ready to visit!";
		}
		document.getElementById("link-href").classList.remove("load");
		var golink = document.getElementById("goLink"),
			goBack = document.getElementById("goBack");
		golink.classList.remove("load");
		goBack.classList.remove("load");
		golink.href = url;
		goBack.href = "javascript:self.close()|(window.location.href='/')";
		localStorage.setItem(fdlid, (new Date()).getTime());
	} else {
		document.getElementById("success").remove();
	}
})();

function displayLink() {}

if (document.getElementById("loadingAnimation")) document.getElementById("loadingAnimation").innerHTML = `<style scoped>div#cubeLoading{margin-top:12px;position:relative;height:150px;width:150px;transform:scale(0.5)}div#cubeLoading>div{display:flex;justify-content:center}div#cubeLoading .cube{position:absolute;width:86px;height:100px}div#cubeLoading .right{background:#e79c10;transform:rotate(-30deg) skewX(-30deg) translate(49px, 65px) scaleY(0.86)}div#cubeLoading .left{background:#d53a33;transform:rotate(90deg) skewX(-30deg) scaleY(0.86) translate(25px, -50px)}div#cubeLoading .top{background:#1d9099;transform:rotate(210deg) skew(-30deg) translate(-75px, -22px) scaleY(0.86);z-index:2}div#cubeLoading .face{height:50px;width:50px;position:absolute;transform-origin:0 0}div#cubeLoading .h1.w1.l1{z-index:-1;animation-name:h1w1l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w1l1{0%{transform:translate(0%,-100%)}14%{transform:translate(-50%,-125%)}28%{transform:translate(0%,-150%)}43%{transform:translate(0%,-200%)}57%{transform:translate(50%,-175%)}71%{transform:translate(0%,-150%)}85%{transform:translate(0%,-100%)}100%{transform:translate(0%,-100%)}}.h1.w1.l2{z-index:-1;animation-name:h1w1l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w1l2{0%{transform:translate(50%,-75%)}14%{transform:translate(50%,-75%)}28%{transform:translate(100%,-100%)}43%{transform:translate(100%,-150%)}57%{transform:translate(100%,-150%)}71%{transform:translate(50%,-125%)}85%{transform:translate(50%,-75%)}100%{transform:translate(50%,-75%)}}.h1.w1.l3{z-index:-1;animation-name:h1w1l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w1l3{0%{transform:translate(100%,-50%)}14%{transform:translate(150%,-25%)}28%{transform:translate(200%,-50%)}43%{transform:translate(200%,-100%)}57%{transform:translate(150%,-125%)}71%{transform:translate(100%,-100%)}85%{transform:translate(100%,-50%)}100%{transform:translate(100%,-50%)}}.h1.w2.l1{z-index:-1;animation-name:h1w2l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w2l1{0%{transform:translate(-50%,-75%)}14%{transform:translate(-100%,-100%)}28%{transform:translate(-100%,-100%)}43%{transform:translate(-100%,-150%)}57%{transform:translate(-50%,-125%)}71%{transform:translate(-50%,-125%)}85%{transform:translate(-50%,-75%)}100%{transform:translate(-50%,-75%)}}.h1.w2.l2{z-index:-1;animation-name:h1w2l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w2l2{0%{transform:translate(0%,-50%)}14%{transform:translate(0%,-50%)}28%{transform:translate(0%,-50%)}43%{transform:translate(0%,-100%)}57%{transform:translate(0%,-100%)}71%{transform:translate(0%,-100%)}85%{transform:translate(0%,-50%)}100%{transform:translate(0%,-50%)}}.h1.w2.l3{z-index:-1;animation-name:h1w2l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w2l3{0%{transform:translate(50%,-25%)}14%{transform:translate(100%,0%)}28%{transform:translate(100%,0%)}43%{transform:translate(100%,-50%)}57%{transform:translate(50%,-75%)}71%{transform:translate(50%,-75%)}85%{transform:translate(50%,-25%)}100%{transform:translate(50%,-25%)}}.h1.w3.l1{z-index:-1;animation-name:h1w3l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w3l1{0%{transform:translate(-100%,-50%)}14%{transform:translate(-150%,-75%)}28%{transform:translate(-200%,-50%)}43%{transform:translate(-200%,-100%)}57%{transform:translate(-150%,-75%)}71%{transform:translate(-100%,-100%)}85%{transform:translate(-100%,-50%)}100%{transform:translate(-100%,-50%)}}.h1.w3.l2{z-index:-1;animation-name:h1w3l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w3l2{0%{transform:translate(-50%,-25%)}14%{transform:translate(-50%,-25%)}28%{transform:translate(-100%,0%)}43%{transform:translate(-100%,-50%)}57%{transform:translate(-100%,-50%)}71%{transform:translate(-50%,-75%)}85%{transform:translate(-50%,-25%)}100%{transform:translate(-50%,-25%)}}.h1.w3.l3{z-index:-1;animation-name:h1w3l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h1w3l3{0%{transform:translate(0%,0%)}14%{transform:translate(50%,25%)}28%{transform:translate(0%,50%)}43%{transform:translate(0%,0%)}57%{transform:translate(-50%,-25%)}71%{transform:translate(0%,-50%)}85%{transform:translate(0%,0%)}100%{transform:translate(0%,0%)}}.h2.w1.l1{z-index:-2;animation-name:h2w1l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w1l1{0%{transform:translate(0%,-50%)}14%{transform:translate(-50%,-75%)}28%{transform:translate(0%,-100%)}43%{transform:translate(0%,-100%)}57%{transform:translate(50%,-75%)}71%{transform:translate(0%,-50%)}85%{transform:translate(0%,-50%)}100%{transform:translate(0%,-50%)}}.h2.w1.l2{z-index:-2;animation-name:h2w1l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w1l2{0%{transform:translate(50%,-25%)}14%{transform:translate(50%,-25%)}28%{transform:translate(100%,-50%)}43%{transform:translate(100%,-50%)}57%{transform:translate(100%,-50%)}71%{transform:translate(50%,-25%)}85%{transform:translate(50%,-25%)}100%{transform:translate(50%,-25%)}}.h2.w1.l3{z-index:-2;animation-name:h2w1l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w1l3{0%{transform:translate(100%,0%)}14%{transform:translate(150%,25%)}28%{transform:translate(200%,0%)}43%{transform:translate(200%,0%)}57%{transform:translate(150%,-25%)}71%{transform:translate(100%,0%)}85%{transform:translate(100%,0%)}100%{transform:translate(100%,0%)}}.h2.w2.l1{z-index:-2;animation-name:h2w2l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w2l1{0%{transform:translate(-50%,-25%)}14%{transform:translate(-100%,-50%)}28%{transform:translate(-100%,-50%)}43%{transform:translate(-100%,-50%)}57%{transform:translate(-50%,-25%)}71%{transform:translate(-50%,-25%)}85%{transform:translate(-50%,-25%)}100%{transform:translate(-50%,-25%)}}.h2.w2.l2{z-index:-2;animation-name:h2w2l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w2l2{0%{transform:translate(0%,0%)}14%{transform:translate(0%,0%)}28%{transform:translate(0%,0%)}43%{transform:translate(0%,0%)}57%{transform:translate(0%,0%)}71%{transform:translate(0%,0%)}85%{transform:translate(0%,0%)}100%{transform:translate(0%,0%)}}.h2.w2.l3{z-index:-2;animation-name:h2w2l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w2l3{0%{transform:translate(50%,25%)}14%{transform:translate(100%,50%)}28%{transform:translate(100%,50%)}43%{transform:translate(100%,50%)}57%{transform:translate(50%,25%)}71%{transform:translate(50%,25%)}85%{transform:translate(50%,25%)}100%{transform:translate(50%,25%)}}.h2.w3.l1{z-index:-2;animation-name:h2w3l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w3l1{0%{transform:translate(-100%,0%)}14%{transform:translate(-150%,-25%)}28%{transform:translate(-200%,0%)}43%{transform:translate(-200%,0%)}57%{transform:translate(-150%,25%)}71%{transform:translate(-100%,0%)}85%{transform:translate(-100%,0%)}100%{transform:translate(-100%,0%)}}.h2.w3.l2{z-index:-2;animation-name:h2w3l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w3l2{0%{transform:translate(-50%,25%)}14%{transform:translate(-50%,25%)}28%{transform:translate(-100%,50%)}43%{transform:translate(-100%,50%)}57%{transform:translate(-100%,50%)}71%{transform:translate(-50%,25%)}85%{transform:translate(-50%,25%)}100%{transform:translate(-50%,25%)}}.h2.w3.l3{z-index:-2;animation-name:h2w3l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h2w3l3{0%{transform:translate(0%,50%)}14%{transform:translate(50%,75%)}28%{transform:translate(0%,100%)}43%{transform:translate(0%,100%)}57%{transform:translate(-50%,75%)}71%{transform:translate(0%,50%)}85%{transform:translate(0%,50%)}100%{transform:translate(0%,50%)}}.h3.w1.l1{z-index:-3;animation-name:h3w1l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w1l1{0%{transform:translate(0%,0%)}14%{transform:translate(-50%,-25%)}28%{transform:translate(0%,-50%)}43%{transform:translate(0%,0%)}57%{transform:translate(50%,25%)}71%{transform:translate(0%,50%)}85%{transform:translate(0%,0%)}100%{transform:translate(0%,0%)}}.h3.w1.l2{z-index:-3;animation-name:h3w1l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w1l2{0%{transform:translate(50%,25%)}14%{transform:translate(50%,25%)}28%{transform:translate(100%,0%)}43%{transform:translate(100%,50%)}57%{transform:translate(100%,50%)}71%{transform:translate(50%,75%)}85%{transform:translate(50%,25%)}100%{transform:translate(50%,25%)}}.h3.w1.l3{z-index:-3;animation-name:h3w1l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w1l3{0%{transform:translate(100%,50%)}14%{transform:translate(150%,75%)}28%{transform:translate(200%,50%)}43%{transform:translate(200%,100%)}57%{transform:translate(150%,75%)}71%{transform:translate(100%,100%)}85%{transform:translate(100%,50%)}100%{transform:translate(100%,50%)}}.h3.w2.l1{z-index:-3;animation-name:h3w2l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w2l1{0%{transform:translate(-50%,25%)}14%{transform:translate(-100%,0%)}28%{transform:translate(-100%,0%)}43%{transform:translate(-100%,50%)}57%{transform:translate(-50%,75%)}71%{transform:translate(-50%,75%)}85%{transform:translate(-50%,25%)}100%{transform:translate(-50%,25%)}}.h3.w2.l2{z-index:-3;animation-name:h3w2l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w2l2{0%{transform:translate(0%,50%)}14%{transform:translate(0%,50%)}28%{transform:translate(0%,50%)}43%{transform:translate(0%,100%)}57%{transform:translate(0%,100%)}71%{transform:translate(0%,100%)}85%{transform:translate(0%,50%)}100%{transform:translate(0%,50%)}}.h3.w2.l3{z-index:-3;animation-name:h3w2l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w2l3{0%{transform:translate(50%,75%)}14%{transform:translate(100%,100%)}28%{transform:translate(100%,100%)}43%{transform:translate(100%,150%)}57%{transform:translate(50%,125%)}71%{transform:translate(50%,125%)}85%{transform:translate(50%,75%)}100%{transform:translate(50%,75%)}}.h3.w3.l1{z-index:-3;animation-name:h3w3l1;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w3l1{0%{transform:translate(-100%,50%)}14%{transform:translate(-150%,25%)}28%{transform:translate(-200%,50%)}43%{transform:translate(-200%,100%)}57%{transform:translate(-150%,125%)}71%{transform:translate(-100%,100%)}85%{transform:translate(-100%,50%)}100%{transform:translate(-100%,50%)}}.h3.w3.l2{z-index:-3;animation-name:h3w3l2;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w3l2{0%{transform:translate(-50%,75%)}14%{transform:translate(-50%,75%)}28%{transform:translate(-100%,100%)}43%{transform:translate(-100%,150%)}57%{transform:translate(-100%,150%)}71%{transform:translate(-50%,125%)}85%{transform:translate(-50%,75%)}100%{transform:translate(-50%,75%)}}.h3.w3.l3{z-index:-3;animation-name:h3w3l3;animation-timing-function:ease;animation-duration:3s;animation-iteration-count:infinite}@keyframes h3w3l3{0%{transform:translate(0%,100%)}14%{transform:translate(50%,125%)}28%{transform:translate(0%,150%)}43%{transform:translate(0%,200%)}57%{transform:translate(-50%,175%)}71%{transform:translate(0%,150%)}85%{transform:translate(0%,100%)}100%{transform:translate(0%, 100%)}}</style><div id="cubeLoading" class=""><div class="h1Container"><div class="cube h1 w1 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w1 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w1 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w2 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w2 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w2 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w3 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w3 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h1 w3 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div></div><div class="h2Container"><div class="cube h2 w1 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w1 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w1 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w2 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w2 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w2 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w3 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w3 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h2 w3 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div></div><div class="h3Container"><div class="cube h3 w1 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w1 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w1 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w2 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w2 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w2 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w3 l1"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w3 l2"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div><div class="cube h3 w3 l3"><div class="face top"></div><div class="face left"></div><div class="face right"></div></div></div></div>`;

var timeleft = 10;
var downloadTimer = setInterval(function() {
	timeleft--;
	document.getElementById("countdowntimer").textContent = timeleft;
	if (timeleft <= 0) clearInterval(downloadTimer);
}, 1000);