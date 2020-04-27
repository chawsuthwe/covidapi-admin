var session = require("electron").remote.session;

function getcookie(cname) {
	// var name = cname + "=";
	// var decodedCookie = decodeURIComponent(document.cookie);
	// var ca = decodedCookie.split(";");
	// for (var i = 0; i < ca.length; i++) {
	// 	var c = ca[i];
	// 	while (c.charAt(0) == " ") {
	// 		c = c.substring(1);
	// 	}
	// 	if (c.indexOf(name) == 0) {
	// 		return c.substring(name.length, c.length);
	// 	}
	// }
	// return "";
	// session.defaultSession.cookies
	// 	.get({ url: "http://covid19mm.info/api", name: cname })
	// 	.then(
	// 		(cookies) => {
	// 			if (cookies[0]) {
	// 				return cookies[0].value;
	// 			} else {
	// 				return "";
	// 			}
	// 		},
	// 		(err) => {
	// 			console.log(err);
	// 		}
	// 	);
	let item = localStorage.getItem(cname);

	item = JSON.parse(item);
	var d = new Date();

	if (!item) {
		return "";
	}
	if (d > item["expire"]) {
		return "";
	} else {
		return item["value"];
	}
}

function setcookie(cname, value, exd) {
	var d = new Date();
	d.setTime(d.getTime() + exd * 24 * 60 * 60 * 1000);
	var expires = `expires=${d.toUTCString()}`;
	// document.cookie = `${cname}=${value}; ${expires}; path=/`;
	// session.defaultSession.cookies
	// 	.set({
	// 		url: "http://covid19mm.info/api",
	// 		name: cname,
	// 		value: value,
	// 		expirationDate: expires,
	// 	})
	// 	.then(
	// 		() => {
	// 			console.log("successfully set cookie");
	// 		},
	// 		(err) => {
	// 			console.error(err);
	// 		}
	// 	);
	let item = {};
	item["value"] = value;
	item["expire"] = expires;

	localStorage.setItem(cname, JSON.stringify(item));
}
