import { a as __esmMin, i as __commonJSMin, l as __toESM, n as require_jsx_runtime, o as __exportAll, r as require_react, t as theme } from "./theme.LZxTPVqa.chunk.js";
//#region src/build-shims.js
var global, process$1;
var init_build_shims = __esmMin((() => {
	global = globalThis || self;
	process$1 = { env: {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "browser",
		"PROD": true,
		"REACT_APP_BACKEND_WORKER_HASH": "BXJU2FYb",
		"SSR": false,
		NODE_ENV: "production",
		PUBLIC_URL: "/".slice(0, -1)
	} };
}));
//#endregion
//#region ../../node_modules/ua-parser-js/src/main/ua-parser.mjs
init_build_shims();
var LIBVERSION = "2.0.9", UA_MAX_LENGTH = 500, USER_AGENT = "user-agent", EMPTY = "", UNKNOWN = "?", TYPEOF = {
	FUNCTION: "function",
	OBJECT: "object",
	STRING: "string",
	UNDEFINED: "undefined"
}, BROWSER = "browser", CPU = "cpu", DEVICE = "device", ENGINE = "engine", OS$1 = "os", RESULT = "result", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", MAJOR = "major", MODEL = "model", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", XR = "xr", EMBEDDED = "embedded", FETCHER = "fetcher", INAPP = "inapp", BRANDS = "brands", FORMFACTORS = "formFactors", FULLVERLIST = "fullVersionList", PLATFORM = "platform", PLATFORMVER = "platformVersion", BITNESS = "bitness", CH = "sec-ch-ua", CH_FULL_VER_LIST = CH + "-full-version-list", CH_ARCH = CH + "-arch", CH_BITNESS = CH + "-" + BITNESS, CH_FORM_FACTORS = CH + "-form-factors", CH_MOBILE = CH + "-" + MOBILE, CH_MODEL = CH + "-" + MODEL, CH_PLATFORM = CH + "-" + PLATFORM, CH_PLATFORM_VER = CH_PLATFORM + "-version", CH_ALL_VALUES = [
	BRANDS,
	FULLVERLIST,
	MOBILE,
	MODEL,
	PLATFORM,
	PLATFORMVER,
	ARCHITECTURE,
	FORMFACTORS,
	BITNESS
], AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", GOOGLE = "Google", HUAWEI = "Huawei", LENOVO = "Lenovo", HONOR = "Honor", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", NVIDIA = "Nvidia", ONEPLUS = "OnePlus", OPPO = "OPPO", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", CHROME = "Chrome", CHROMIUM = "Chromium", CHROMECAST = "Chromecast", EDGE = "Edge", FIREFOX = "Firefox", OPERA = "Opera", FACEBOOK = "Facebook", SOGOU = "Sogou", PREFIX_MOBILE = "Mobile ", SUFFIX_BROWSER = " Browser", WINDOWS = "Windows";
var NAVIGATOR = typeof window !== TYPEOF.UNDEFINED && window.navigator ? window.navigator : void 0, NAVIGATOR_UADATA = NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : void 0;
var extend = function(defaultRgx, extensions) {
	var mergedRgx = {};
	var extraRgx = extensions;
	if (!isExtensions(extensions)) {
		extraRgx = {};
		for (var i in extensions) for (var j in extensions[i]) extraRgx[j] = extensions[i][j].concat(extraRgx[j] ? extraRgx[j] : []);
	}
	for (var k in defaultRgx) mergedRgx[k] = extraRgx[k] && extraRgx[k].length % 2 === 0 ? extraRgx[k].concat(defaultRgx[k]) : defaultRgx[k];
	return mergedRgx;
}, enumerize = function(arr) {
	var enums = {};
	for (var i = 0; i < arr.length; i++) enums[arr[i].toUpperCase()] = arr[i];
	return enums;
}, has$1 = function(str1, str2) {
	if (typeof str1 === TYPEOF.OBJECT && str1.length > 0) {
		for (var i in str1) if (lowerize(str2) == lowerize(str1[i])) return true;
		return false;
	}
	return isString$2(str1) ? lowerize(str2) == lowerize(str1) : false;
}, isExtensions = function(obj, deep) {
	for (var prop in obj) return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
}, isString$2 = function(val) {
	return typeof val === TYPEOF.STRING;
}, itemListToArray = function(header) {
	if (!header) return void 0;
	var arr = [];
	var tokens = strip(/\\?\"/g, header).split(",");
	for (var i = 0; i < tokens.length; i++) if (tokens[i].indexOf(";") > -1) {
		var token = trim$1(tokens[i]).split(";v=");
		arr[i] = {
			brand: token[0],
			version: token[1]
		};
	} else arr[i] = trim$1(tokens[i]);
	return arr;
}, lowerize = function(str) {
	return isString$2(str) ? str.toLowerCase() : str;
}, majorize = function(version) {
	return isString$2(version) ? strip(/[^\d\.]/g, version).split(".")[0] : void 0;
}, setProps = function(arr) {
	for (var i in arr) {
		if (!arr.hasOwnProperty(i)) continue;
		var propName = arr[i];
		if (typeof propName == TYPEOF.OBJECT && propName.length == 2) this[propName[0]] = propName[1];
		else this[propName] = void 0;
	}
	return this;
}, strip = function(pattern, str) {
	return isString$2(str) ? str.replace(pattern, EMPTY) : str;
}, stripQuotes$1 = function(str) {
	return strip(/\\?\"/g, str);
}, trim$1 = function(str, len) {
	str = strip(/^\s\s*/, String(str));
	return typeof len === TYPEOF.UNDEFINED ? str : str.substring(0, len);
};
var rgxMapper = function(ua, arrays) {
	if (!ua || !arrays) return;
	var i = 0, j, k, p, q, matches, match;
	while (i < arrays.length && !matches) {
		var regex = arrays[i], props = arrays[i + 1];
		j = k = 0;
		while (j < regex.length && !matches) {
			if (!regex[j]) break;
			matches = regex[j++].exec(ua);
			if (!!matches) for (p = 0; p < props.length; p++) {
				match = matches[++k];
				q = props[p];
				if (typeof q === TYPEOF.OBJECT && q.length > 0) {
					if (q.length === 2) if (typeof q[1] == TYPEOF.FUNCTION) this[q[0]] = q[1].call(this, match);
					else this[q[0]] = q[1];
					else if (q.length >= 3) {
						if (typeof q[1] === TYPEOF.FUNCTION && !(q[1].exec && q[1].test)) if (q.length > 3) this[q[0]] = match ? q[1].apply(this, q.slice(2)) : void 0;
						else this[q[0]] = match ? q[1].call(this, match, q[2]) : void 0;
						else if (q.length == 3) this[q[0]] = match ? match.replace(q[1], q[2]) : void 0;
						else if (q.length == 4) this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : void 0;
						else if (q.length > 4) this[q[0]] = match ? q[3].apply(this, [match.replace(q[1], q[2])].concat(q.slice(4))) : void 0;
					}
				} else this[q] = match ? match : void 0;
			}
		}
		i += 2;
	}
}, strMapper = function(str, map) {
	for (var i in map) if (typeof map[i] === TYPEOF.OBJECT && map[i].length > 0) {
		for (var j = 0; j < map[i].length; j++) if (has$1(map[i][j], str)) return i === UNKNOWN ? void 0 : i;
	} else if (has$1(map[i], str)) return i === UNKNOWN ? void 0 : i;
	return map.hasOwnProperty("*") ? map["*"] : str;
};
var windowsVersionMap = {
	"ME": "4.90",
	"NT 3.51": "3.51",
	"NT 4.0": "4.0",
	"2000": ["5.0", "5.01"],
	"XP": ["5.1", "5.2"],
	"Vista": "6.0",
	"7": "6.1",
	"8": "6.2",
	"8.1": "6.3",
	"10": ["6.4", "10.0"],
	"NT": ""
}, formFactorsMap = {
	"embedded": "Automotive",
	"mobile": "Mobile",
	"tablet": ["Tablet", "EInk"],
	"smarttv": "TV",
	"wearable": "Watch",
	"xr": ["VR", "XR"],
	"?": ["Desktop", "Unknown"],
	"*": void 0
}, browserHintsMap = {
	"Chrome": "Google Chrome",
	"Edge": "Microsoft Edge",
	"Edge WebView2": "Microsoft Edge WebView2",
	"Chrome WebView": "Android WebView",
	"Chrome Headless": "HeadlessChrome",
	"Huawei Browser": "HuaweiBrowser",
	"MIUI Browser": "Miui Browser",
	"Opera Mobi": "OperaMobile",
	"Yandex": "YaBrowser"
};
var defaultRegexes = {
	browser: [
		[/\b(?:crmo|crios)\/([\w\.]+)/i],
		[VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
		[/webview.+edge\/([\w\.]+)/i],
		[VERSION, [NAME, EDGE + " WebView"]],
		[/edg(?:e|ios|a)?\/([\w\.]+)/i],
		[VERSION, [NAME, "Edge"]],
		[
			/(opera mini)\/([-\w\.]+)/i,
			/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
			/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
		],
		[NAME, VERSION],
		[/opios[\/ ]+([\w\.]+)/i],
		[VERSION, [NAME, OPERA + " Mini"]],
		[/\bop(?:rg)?x\/([\w\.]+)/i],
		[VERSION, [NAME, OPERA + " GX"]],
		[/\bopr\/([\w\.]+)/i],
		[VERSION, [NAME, OPERA]],
		[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
		[VERSION, [NAME, "Baidu"]],
		[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
		[VERSION, [NAME, "Maxthon"]],
		[
			/(kindle)\/([\w\.]+)/i,
			/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
			/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
			/(?:ms|\()(ie) ([\w\.]+)/i,
			/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
			/(brave)(?: chrome)?\/([\d\.]+)/i,
			/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
			/(qwant)(?:ios|mobile)\/([\d\.]+)/i,
			/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
		],
		[NAME, VERSION],
		[/quark(?:pc)?\/([-\w\.]+)/i],
		[VERSION, [NAME, "Quark"]],
		[/\bddg\/([\w\.]+)/i],
		[VERSION, [NAME, "DuckDuckGo"]],
		[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
		[VERSION, [NAME, "UCBrowser"]],
		[
			/microm.+\bqbcore\/([\w\.]+)/i,
			/\bqbcore\/([\w\.]+).+microm/i,
			/micromessenger\/([\w\.]+)/i
		],
		[VERSION, [NAME, "WeChat"]],
		[/konqueror\/([\w\.]+)/i],
		[VERSION, [NAME, "Konqueror"]],
		[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
		[VERSION, [NAME, "IE"]],
		[/ya(?:search)?browser\/([\w\.]+)/i],
		[VERSION, [NAME, "Yandex"]],
		[/slbrowser\/([\w\.]+)/i],
		[VERSION, [NAME, "Smart " + LENOVO + SUFFIX_BROWSER]],
		[/(av(?:ast|g|ira))\/([\w\.]+)/i],
		[[
			NAME,
			/(.+)/,
			"$1 Secure" + SUFFIX_BROWSER
		], VERSION],
		[/norton\/([\w\.]+)/i],
		[VERSION, [NAME, "Norton Private" + SUFFIX_BROWSER]],
		[/\bfocus\/([\w\.]+)/i],
		[VERSION, [NAME, FIREFOX + " Focus"]],
		[/ mms\/([\w\.]+)$/i],
		[VERSION, [NAME, OPERA + " Neon"]],
		[/ opt\/([\w\.]+)$/i],
		[VERSION, [NAME, OPERA + " Touch"]],
		[/coc_coc\w+\/([\w\.]+)/i],
		[VERSION, [NAME, "Coc Coc"]],
		[/dolfin\/([\w\.]+)/i],
		[VERSION, [NAME, "Dolphin"]],
		[/coast\/([\w\.]+)/i],
		[VERSION, [NAME, OPERA + " Coast"]],
		[/miuibrowser\/([\w\.]+)/i],
		[VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
		[/fxios\/([\w\.-]+)/i],
		[VERSION, [NAME, PREFIX_MOBILE + FIREFOX]],
		[/\bqihoobrowser\/?([\w\.]*)/i],
		[VERSION, [NAME, "360"]],
		[/\b(qq)\/([\w\.]+)/i],
		[[
			NAME,
			/(.+)/,
			"$1Browser"
		], VERSION],
		[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
		[[
			NAME,
			/(.+)/,
			"$1" + SUFFIX_BROWSER
		], VERSION],
		[/samsungbrowser\/([\w\.]+)/i],
		[VERSION, [NAME, SAMSUNG + " Internet"]],
		[/metasr[\/ ]?([\d\.]+)/i],
		[VERSION, [NAME, SOGOU + " Explorer"]],
		[/(sogou)mo\w+\/([\d\.]+)/i],
		[[NAME, SOGOU + " Mobile"], VERSION],
		[
			/(electron)\/([\w\.]+) safari/i,
			/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
			/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
		],
		[NAME, VERSION],
		[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
		[NAME],
		[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
		[VERSION, NAME],
		[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
		[
			[NAME, FACEBOOK],
			VERSION,
			[TYPE, INAPP]
		],
		[
			/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
			/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
			/(daum)apps[\/ ]([\w\.]+)/i,
			/safari (line)\/([\w\.]+)/i,
			/\b(line)\/([\w\.]+)\/iab/i,
			/(alipay)client\/([\w\.]+)/i,
			/(twitter)(?:and| f.+e\/([\w\.]+))/i,
			/(bing)(?:web|sapphire)\/([\w\.]+)/i,
			/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i
		],
		[
			NAME,
			VERSION,
			[TYPE, INAPP]
		],
		[/\bgsa\/([\w\.]+) .*safari\//i],
		[
			VERSION,
			[NAME, "GSA"],
			[TYPE, INAPP]
		],
		[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
		[
			VERSION,
			[NAME, "TikTok"],
			[TYPE, INAPP]
		],
		[/\[(linkedin)app\]/i],
		[NAME, [TYPE, INAPP]],
		[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
		[
			[
				NAME,
				/(.+)/,
				"Zalo"
			],
			VERSION,
			[TYPE, INAPP]
		],
		[/(chromium)[\/ ]([-\w\.]+)/i],
		[NAME, VERSION],
		[/ome-(lighthouse)$/i],
		[NAME, [TYPE, FETCHER]],
		[/headlesschrome(?:\/([\w\.]+)| )/i],
		[VERSION, [NAME, CHROME + " Headless"]],
		[/wv\).+chrome\/([\w\.]+).+edgw\//i],
		[VERSION, [NAME, EDGE + " WebView2"]],
		[/ wv\).+(chrome)\/([\w\.]+)/i],
		[[NAME, CHROME + " WebView"], VERSION],
		[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
		[VERSION, [NAME, "Android" + SUFFIX_BROWSER]],
		[/chrome\/([\w\.]+) mobile/i],
		[VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
		[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
		[NAME, VERSION],
		[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
		[VERSION, [NAME, PREFIX_MOBILE + "Safari"]],
		[/iphone .*mobile(?:\/\w+ | ?)safari/i],
		[[NAME, PREFIX_MOBILE + "Safari"]],
		[/version\/([\w\.\,]+) .*(safari)/i],
		[VERSION, NAME],
		[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
		[NAME, [VERSION, "1"]],
		[/(webkit|khtml)\/([\w\.]+)/i],
		[NAME, VERSION],
		[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
		[[NAME, PREFIX_MOBILE + FIREFOX], VERSION],
		[/(navigator|netscape\d?)\/([-\w\.]+)/i],
		[[NAME, "Netscape"], VERSION],
		[/(wolvic|librewolf)\/([\w\.]+)/i],
		[NAME, VERSION],
		[/mobile vr; rv:([\w\.]+)\).+firefox/i],
		[VERSION, [NAME, FIREFOX + " Reality"]],
		[
			/ekiohf.+(flow)\/([\w\.]+)/i,
			/(swiftfox)/i,
			/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
			/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
			/(firefox)\/([\w\.]+)/i,
			/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
			/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
			/\b(links) \(([\w\.]+)/i
		],
		[NAME, [
			VERSION,
			/_/g,
			"."
		]],
		[/(cobalt)\/([\w\.]+)/i],
		[NAME, [
			VERSION,
			/[^\d\.]+./,
			EMPTY
		]]
	],
	cpu: [
		[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
		[[ARCHITECTURE, "amd64"]],
		[/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
		[[ARCHITECTURE, "ia32"]],
		[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
		[[ARCHITECTURE, "arm64"]],
		[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
		[[ARCHITECTURE, "armhf"]],
		[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
		[[ARCHITECTURE, "arm"]],
		[/ sun4\w[;\)]/i],
		[[ARCHITECTURE, "sparc"]],
		[
			/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
			/((ppc|powerpc)(64)?)( mac|;|\))/i,
			/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i
		],
		[[
			ARCHITECTURE,
			/ower/,
			EMPTY,
			lowerize
		]],
		[/mc680.0/i],
		[[ARCHITECTURE, "68k"]],
		[/winnt.+\[axp/i],
		[[ARCHITECTURE, "alpha"]]
	],
	device: [
		[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
		[
			MODEL,
			[VENDOR, SAMSUNG],
			[TYPE, TABLET]
		],
		[
			/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
			/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
			/sec-(sgh\w+)/i
		],
		[
			MODEL,
			[VENDOR, SAMSUNG],
			[TYPE, MOBILE]
		],
		[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
		[
			MODEL,
			[VENDOR, APPLE],
			[TYPE, MOBILE]
		],
		[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
		[
			MODEL,
			[VENDOR, APPLE],
			[TYPE, TABLET]
		],
		[/(macintosh);/i],
		[MODEL, [VENDOR, APPLE]],
		[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
		[
			MODEL,
			[VENDOR, SHARP],
			[TYPE, MOBILE]
		],
		[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
		[
			MODEL,
			[VENDOR, HONOR],
			[TYPE, TABLET]
		],
		[/honor([-\w ]+)[;\)]/i],
		[
			MODEL,
			[VENDOR, HONOR],
			[TYPE, MOBILE]
		],
		[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
		[
			MODEL,
			[VENDOR, HUAWEI],
			[TYPE, TABLET]
		],
		[/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
		[
			MODEL,
			[VENDOR, HUAWEI],
			[TYPE, MOBILE]
		],
		[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
		[
			[
				MODEL,
				/_/g,
				" "
			],
			[VENDOR, XIAOMI],
			[TYPE, TABLET]
		],
		[
			/\b; (\w+) build\/hm\1/i,
			/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
			/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
			/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
			/ ([\w ]+) miui\/v?\d/i
		],
		[
			[
				MODEL,
				/_/g,
				" "
			],
			[VENDOR, XIAOMI],
			[TYPE, MOBILE]
		],
		[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
		[
			MODEL,
			[VENDOR, ONEPLUS],
			[TYPE, MOBILE]
		],
		[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
		[
			MODEL,
			[VENDOR, OPPO],
			[TYPE, MOBILE]
		],
		[/\b(opd2(\d{3}a?))(?: bui|\))/i],
		[
			MODEL,
			[
				VENDOR,
				strMapper,
				{
					"OnePlus": [
						"203",
						"304",
						"403",
						"404",
						"413",
						"415"
					],
					"*": OPPO
				}
			],
			[TYPE, TABLET]
		],
		[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
		[
			MODEL,
			[VENDOR, "BLU"],
			[TYPE, MOBILE]
		],
		[/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
		[
			MODEL,
			[VENDOR, "Vivo"],
			[TYPE, MOBILE]
		],
		[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
		[
			MODEL,
			[VENDOR, "Realme"],
			[TYPE, MOBILE]
		],
		[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
		[
			MODEL,
			[VENDOR, LENOVO],
			[TYPE, TABLET]
		],
		[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
		[
			MODEL,
			[VENDOR, LENOVO],
			[TYPE, MOBILE]
		],
		[
			/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
			/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
			/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i
		],
		[
			MODEL,
			[VENDOR, MOTOROLA],
			[TYPE, MOBILE]
		],
		[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
		[
			MODEL,
			[VENDOR, MOTOROLA],
			[TYPE, TABLET]
		],
		[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
		[
			MODEL,
			[VENDOR, LG],
			[TYPE, TABLET]
		],
		[
			/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
			/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
			/\blg-?([\d\w]+) bui/i
		],
		[
			MODEL,
			[VENDOR, LG],
			[TYPE, MOBILE]
		],
		[/(nokia) (t[12][01])/i],
		[
			VENDOR,
			MODEL,
			[TYPE, TABLET]
		],
		[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
		[
			[
				MODEL,
				/_/g,
				" "
			],
			[TYPE, MOBILE],
			[VENDOR, "Nokia"]
		],
		[/(pixel (c|tablet))\b/i],
		[
			MODEL,
			[VENDOR, GOOGLE],
			[TYPE, TABLET]
		],
		[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
		[
			MODEL,
			[VENDOR, GOOGLE],
			[TYPE, MOBILE]
		],
		[/(google) (pixelbook( go)?)/i],
		[VENDOR, MODEL],
		[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
		[
			MODEL,
			[VENDOR, SONY],
			[TYPE, MOBILE]
		],
		[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
		[
			[MODEL, "Xperia Tablet"],
			[VENDOR, SONY],
			[TYPE, TABLET]
		],
		[
			/(alexa)webm/i,
			/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
			/(kf[a-z]+)( bui|\)).+silk\//i
		],
		[
			MODEL,
			[VENDOR, AMAZON],
			[TYPE, TABLET]
		],
		[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
		[
			[
				MODEL,
				/(.+)/g,
				"Fire Phone $1"
			],
			[VENDOR, AMAZON],
			[TYPE, MOBILE]
		],
		[/(playbook);[-\w\),; ]+(rim)/i],
		[
			MODEL,
			VENDOR,
			[TYPE, TABLET]
		],
		[/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
		[
			MODEL,
			[VENDOR, BLACKBERRY],
			[TYPE, MOBILE]
		],
		[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
		[
			MODEL,
			[VENDOR, ASUS],
			[TYPE, TABLET]
		],
		[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
		[
			MODEL,
			[VENDOR, ASUS],
			[TYPE, MOBILE]
		],
		[/(nexus 9)/i],
		[
			MODEL,
			[VENDOR, "HTC"],
			[TYPE, TABLET]
		],
		[
			/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
			/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
			/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
		],
		[
			VENDOR,
			[
				MODEL,
				/_/g,
				" "
			],
			[TYPE, MOBILE]
		],
		[/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
		[
			MODEL,
			[VENDOR, "TCL"],
			[TYPE, TABLET]
		],
		[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
		[
			MODEL,
			[VENDOR, "TCL"],
			[TYPE, MOBILE]
		],
		[/(itel) ((\w+))/i],
		[
			[VENDOR, lowerize],
			MODEL,
			[
				TYPE,
				strMapper,
				{
					"tablet": ["p10001l", "w7001"],
					"*": "mobile"
				}
			]
		],
		[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
		[
			MODEL,
			[VENDOR, "Acer"],
			[TYPE, TABLET]
		],
		[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
		[
			MODEL,
			[VENDOR, "Meizu"],
			[TYPE, MOBILE]
		],
		[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
		[
			MODEL,
			[VENDOR, "Ulefone"],
			[TYPE, MOBILE]
		],
		[/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
		[
			MODEL,
			[VENDOR, "Energizer"],
			[TYPE, MOBILE]
		],
		[/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
		[
			MODEL,
			[VENDOR, "Cat"],
			[TYPE, MOBILE]
		],
		[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
		[
			MODEL,
			[VENDOR, "Smartfren"],
			[TYPE, MOBILE]
		],
		[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
		[
			MODEL,
			[VENDOR, "Nothing"],
			[TYPE, MOBILE]
		],
		[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
		[
			MODEL,
			[VENDOR, "Archos"],
			[TYPE, TABLET]
		],
		[/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
		[
			MODEL,
			[VENDOR, "Archos"],
			[TYPE, MOBILE]
		],
		[/; (n159v)/i],
		[
			MODEL,
			[VENDOR, "HMD"],
			[TYPE, MOBILE]
		],
		[/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
		[
			VENDOR,
			MODEL,
			[TYPE, TABLET]
		],
		[
			/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
			/; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
			/(hp) ([\w ]+\w)/i,
			/(microsoft); (lumia[\w ]+)/i,
			/(oppo) ?([\w ]+) bui/i,
			/(hisense) ([ehv][\w ]+)\)/i,
			/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i
		],
		[
			VENDOR,
			MODEL,
			[TYPE, MOBILE]
		],
		[
			/(kobo)\s(ereader|touch)/i,
			/(hp).+(touchpad(?!.+tablet)|tablet)/i,
			/(kindle)\/([\w\.]+)/i
		],
		[
			VENDOR,
			MODEL,
			[TYPE, TABLET]
		],
		[/(surface duo)/i],
		[
			MODEL,
			[VENDOR, MICROSOFT],
			[TYPE, TABLET]
		],
		[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
		[
			MODEL,
			[VENDOR, "Fairphone"],
			[TYPE, MOBILE]
		],
		[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
		[
			MODEL,
			[VENDOR, NVIDIA],
			[TYPE, TABLET]
		],
		[/(sprint) (\w+)/i],
		[
			VENDOR,
			MODEL,
			[TYPE, MOBILE]
		],
		[/(kin\.[onetw]{3})/i],
		[
			[
				MODEL,
				/\./g,
				" "
			],
			[VENDOR, MICROSOFT],
			[TYPE, MOBILE]
		],
		[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
		[
			MODEL,
			[VENDOR, ZEBRA],
			[TYPE, TABLET]
		],
		[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
		[
			MODEL,
			[VENDOR, ZEBRA],
			[TYPE, MOBILE]
		],
		[/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
		[VENDOR, [TYPE, SMARTTV]],
		[/hbbtv.+maple;(\d+)/i],
		[
			[
				MODEL,
				/^/,
				"SmartTV"
			],
			[VENDOR, SAMSUNG],
			[TYPE, SMARTTV]
		],
		[/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
		[
			VENDOR,
			MODEL,
			[TYPE, SMARTTV]
		],
		[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
		[[VENDOR, LG], [TYPE, SMARTTV]],
		[/(apple) ?tv/i],
		[
			VENDOR,
			[MODEL, APPLE + " TV"],
			[TYPE, SMARTTV]
		],
		[/crkey.*devicetype\/chromecast/i],
		[
			[MODEL, CHROMECAST + " Third Generation"],
			[VENDOR, GOOGLE],
			[TYPE, SMARTTV]
		],
		[/crkey.*devicetype\/([^/]*)/i],
		[
			[
				MODEL,
				/^/,
				"Chromecast "
			],
			[VENDOR, GOOGLE],
			[TYPE, SMARTTV]
		],
		[/fuchsia.*crkey/i],
		[
			[MODEL, CHROMECAST + " Nest Hub"],
			[VENDOR, GOOGLE],
			[TYPE, SMARTTV]
		],
		[/crkey/i],
		[
			[MODEL, CHROMECAST],
			[VENDOR, GOOGLE],
			[TYPE, SMARTTV]
		],
		[/(portaltv)/i],
		[
			MODEL,
			[VENDOR, FACEBOOK],
			[TYPE, SMARTTV]
		],
		[/droid.+aft(\w+)( bui|\))/i],
		[
			MODEL,
			[VENDOR, AMAZON],
			[TYPE, SMARTTV]
		],
		[/(shield \w+ tv)/i],
		[
			MODEL,
			[VENDOR, NVIDIA],
			[TYPE, SMARTTV]
		],
		[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
		[
			MODEL,
			[VENDOR, SHARP],
			[TYPE, SMARTTV]
		],
		[/(bravia[\w ]+)( bui|\))/i],
		[
			MODEL,
			[VENDOR, SONY],
			[TYPE, SMARTTV]
		],
		[/(mi(tv|box)-?\w+) bui/i],
		[
			MODEL,
			[VENDOR, XIAOMI],
			[TYPE, SMARTTV]
		],
		[/Hbbtv.*(technisat) (.*);/i],
		[
			VENDOR,
			MODEL,
			[TYPE, SMARTTV]
		],
		[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
		[
			[
				VENDOR,
				/.+\/(\w+)/,
				"$1",
				strMapper,
				{ "LG": "lge" }
			],
			[MODEL, trim$1],
			[TYPE, SMARTTV]
		],
		[/(playstation \w+)/i],
		[
			MODEL,
			[VENDOR, SONY],
			[TYPE, CONSOLE]
		],
		[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
		[
			MODEL,
			[VENDOR, MICROSOFT],
			[TYPE, CONSOLE]
		],
		[
			/(ouya)/i,
			/(nintendo) (\w+)/i,
			/(retroid) (pocket ([^\)]+))/i,
			/(valve).+(steam deck)/i,
			/droid.+; ((shield|rgcube|gr0006))( bui|\))/i
		],
		[
			[
				VENDOR,
				strMapper,
				{
					"Nvidia": "Shield",
					"Anbernic": "RGCUBE",
					"Logitech": "GR0006"
				}
			],
			MODEL,
			[TYPE, CONSOLE]
		],
		[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
		[
			MODEL,
			[VENDOR, SAMSUNG],
			[TYPE, WEARABLE]
		],
		[/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
		[
			VENDOR,
			MODEL,
			[TYPE, WEARABLE]
		],
		[/(ow(?:19|20)?we?[1-3]{1,3})/i],
		[
			MODEL,
			[VENDOR, OPPO],
			[TYPE, WEARABLE]
		],
		[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
		[
			MODEL,
			[VENDOR, APPLE],
			[TYPE, WEARABLE]
		],
		[/(opwwe\d{3})/i],
		[
			MODEL,
			[VENDOR, ONEPLUS],
			[TYPE, WEARABLE]
		],
		[/(moto 360)/i],
		[
			MODEL,
			[VENDOR, MOTOROLA],
			[TYPE, WEARABLE]
		],
		[/(smartwatch 3)/i],
		[
			MODEL,
			[VENDOR, SONY],
			[TYPE, WEARABLE]
		],
		[/(g watch r)/i],
		[
			MODEL,
			[VENDOR, LG],
			[TYPE, WEARABLE]
		],
		[/droid.+; (wt63?0{2,3})\)/i],
		[
			MODEL,
			[VENDOR, ZEBRA],
			[TYPE, WEARABLE]
		],
		[/droid.+; (glass) \d/i],
		[
			MODEL,
			[VENDOR, GOOGLE],
			[TYPE, XR]
		],
		[/(pico) ([\w ]+) os\d/i],
		[
			VENDOR,
			MODEL,
			[TYPE, XR]
		],
		[/(quest( \d| pro)?s?).+vr/i],
		[
			MODEL,
			[VENDOR, FACEBOOK],
			[TYPE, XR]
		],
		[/mobile vr; rv.+firefox/i],
		[[TYPE, XR]],
		[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
		[VENDOR, [TYPE, EMBEDDED]],
		[/(aeobc)\b/i],
		[
			MODEL,
			[VENDOR, AMAZON],
			[TYPE, EMBEDDED]
		],
		[/(homepod).+mac os/i],
		[
			MODEL,
			[VENDOR, APPLE],
			[TYPE, EMBEDDED]
		],
		[/windows iot/i],
		[[TYPE, EMBEDDED]],
		[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
		[MODEL, [TYPE, SMARTTV]],
		[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
		[[TYPE, SMARTTV]],
		[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
		[MODEL, [
			TYPE,
			strMapper,
			{
				"mobile": "Mobile",
				"xr": "VR",
				"*": TABLET
			}
		]],
		[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
		[[TYPE, TABLET]],
		[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
		[[TYPE, MOBILE]],
		[/droid .+?; ([\w\. -]+)( bui|\))/i],
		[MODEL, [VENDOR, "Generic"]]
	],
	engine: [
		[/windows.+ edge\/([\w\.]+)/i],
		[VERSION, [NAME, EDGE + "HTML"]],
		[/(arkweb)\/([\w\.]+)/i],
		[NAME, VERSION],
		[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
		[VERSION, [NAME, "Blink"]],
		[
			/(presto)\/([\w\.]+)/i,
			/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
			/ekioh(flow)\/([\w\.]+)/i,
			/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
			/(icab)[\/ ]([23]\.[\d\.]+)/i,
			/\b(libweb)/i
		],
		[NAME, VERSION],
		[/ladybird\//i],
		[[NAME, "LibWeb"]],
		[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
		[VERSION, NAME]
	],
	os: [
		[/(windows nt) (6\.[23]); arm/i],
		[[
			NAME,
			/N/,
			"R"
		], [
			VERSION,
			strMapper,
			windowsVersionMap
		]],
		[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
		[NAME, VERSION],
		[/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
		[[
			VERSION,
			/(;|\))/g,
			"",
			strMapper,
			windowsVersionMap
		], [NAME, WINDOWS]],
		[/(windows ce)\/?([\d\.]*)/i],
		[NAME, VERSION],
		[
			/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
			/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
			/\btvos ?([\w\.]+)/i,
			/cfnetwork\/.+darwin/i
		],
		[[
			VERSION,
			/_/g,
			"."
		], [NAME, "iOS"]],
		[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
		[[NAME, "macOS"], [
			VERSION,
			/_/g,
			"."
		]],
		[/android ([\d\.]+).*crkey/i],
		[VERSION, [NAME, CHROMECAST + " Android"]],
		[/fuchsia.*crkey\/([\d\.]+)/i],
		[VERSION, [NAME, CHROMECAST + " Fuchsia"]],
		[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
		[VERSION, [NAME, CHROMECAST + " SmartSpeaker"]],
		[/linux.*crkey\/([\d\.]+)/i],
		[VERSION, [NAME, CHROMECAST + " Linux"]],
		[/crkey\/([\d\.]+)/i],
		[VERSION, [NAME, CHROMECAST]],
		[/droid ([\w\.]+)\b.+(android[- ]x86)/i],
		[VERSION, NAME],
		[/(ubuntu) ([\w\.]+) like android/i],
		[[
			NAME,
			/(.+)/,
			"$1 Touch"
		], VERSION],
		[/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
		[NAME, VERSION],
		[/\(bb(10);/i],
		[VERSION, [NAME, BLACKBERRY]],
		[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
		[VERSION, [NAME, "Symbian"]],
		[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],
		[VERSION, [NAME, FIREFOX + " OS"]],
		[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
		[VERSION, [NAME, "webOS"]],
		[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
		[[
			VERSION,
			strMapper,
			{
				"25": "120",
				"24": "108",
				"23": "94",
				"22": "87",
				"6": "79",
				"5": "68",
				"4": "53",
				"3": "38",
				"2": "538",
				"1": "537",
				"*": "TV"
			}
		], [NAME, "webOS"]],
		[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
		[VERSION, [NAME, "watchOS"]],
		[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
		[VERSION, [NAME, "Chrome OS"]],
		[/kepler ([\w\.]+); (aft|aeo)/i],
		[VERSION, [NAME, "Vega OS"]],
		[
			/(netrange)mmh/i,
			/(nettv)\/(\d+\.[\w\.]+)/i,
			/(nintendo|playstation) (\w+)/i,
			/(xbox); +xbox ([^\);]+)/i,
			/(pico) .+os([\w\.]+)/i,
			/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
			/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
			/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
			/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
			/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
			/\b(aix)[; ]([1-9\.]{0,4})/i,
			/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
			/(gnu) ?([\w\.]*)/i,
			/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
			/(haiku) ?(r\d)?/i
		],
		[NAME, VERSION],
		[/(sunos) ?([\d\.]*)/i],
		[[NAME, "Solaris"], VERSION],
		[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
		[NAME, VERSION]
	]
};
var defaultProps = (function() {
	var props = {
		init: {},
		isIgnore: {},
		isIgnoreRgx: {},
		toString: {}
	};
	setProps.call(props.init, [
		[BROWSER, [
			NAME,
			VERSION,
			MAJOR,
			TYPE
		]],
		[CPU, [ARCHITECTURE]],
		[DEVICE, [
			TYPE,
			MODEL,
			VENDOR
		]],
		[ENGINE, [NAME, VERSION]],
		[OS$1, [NAME, VERSION]]
	]);
	setProps.call(props.isIgnore, [
		[BROWSER, [VERSION, MAJOR]],
		[ENGINE, [VERSION]],
		[OS$1, [VERSION]]
	]);
	setProps.call(props.isIgnoreRgx, [[BROWSER, / ?browser$/i], [OS$1, / ?os$/i]]);
	setProps.call(props.toString, [
		[BROWSER, [NAME, VERSION]],
		[CPU, [ARCHITECTURE]],
		[DEVICE, [VENDOR, MODEL]],
		[ENGINE, [NAME, VERSION]],
		[OS$1, [NAME, VERSION]]
	]);
	return props;
})();
var createIData = function(item, itemType) {
	var init_props = defaultProps.init[itemType], is_ignoreProps = defaultProps.isIgnore[itemType] || 0, is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0, toString_props = defaultProps.toString[itemType] || 0;
	function IData() {
		setProps.call(this, init_props);
	}
	IData.prototype.getItem = function() {
		return item;
	};
	IData.prototype.withClientHints = function() {
		if (!NAVIGATOR_UADATA) return item.parseCH().get();
		return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res) {
			return item.setCH(new UACHData(res, false)).parseCH().get();
		});
	};
	IData.prototype.withFeatureCheck = function() {
		return item.detectFeature().get();
	};
	if (itemType != RESULT) {
		IData.prototype.is = function(strToCheck) {
			var is = false;
			for (var i in this) if (this.hasOwnProperty(i) && !has$1(is_ignoreProps, i) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
				is = true;
				if (strToCheck != TYPEOF.UNDEFINED) break;
			} else if (strToCheck == TYPEOF.UNDEFINED && is) {
				is = !is;
				break;
			}
			return is;
		};
		IData.prototype.toString = function() {
			var str = EMPTY;
			for (var i in toString_props) if (typeof this[toString_props[i]] !== TYPEOF.UNDEFINED) str += (str ? " " : EMPTY) + this[toString_props[i]];
			return str || TYPEOF.UNDEFINED;
		};
	}
	IData.prototype.then = function(cb) {
		var that = this;
		var IDataResolve = function() {
			for (var prop in that) if (that.hasOwnProperty(prop)) this[prop] = that[prop];
		};
		IDataResolve.prototype = {
			is: IData.prototype.is,
			toString: IData.prototype.toString,
			withClientHints: IData.prototype.withClientHints,
			withFeatureCheck: IData.prototype.withFeatureCheck
		};
		var resolveData = new IDataResolve();
		cb(resolveData);
		return resolveData;
	};
	return new IData();
};
function UACHData(uach, isHttpUACH) {
	uach = uach || {};
	setProps.call(this, CH_ALL_VALUES);
	if (isHttpUACH) setProps.call(this, [
		[BRANDS, itemListToArray(uach[CH])],
		[FULLVERLIST, itemListToArray(uach[CH_FULL_VER_LIST])],
		[MOBILE, /\?1/.test(uach[CH_MOBILE])],
		[MODEL, stripQuotes$1(uach[CH_MODEL])],
		[PLATFORM, stripQuotes$1(uach[CH_PLATFORM])],
		[PLATFORMVER, stripQuotes$1(uach[CH_PLATFORM_VER])],
		[ARCHITECTURE, stripQuotes$1(uach[CH_ARCH])],
		[FORMFACTORS, itemListToArray(uach[CH_FORM_FACTORS])],
		[BITNESS, stripQuotes$1(uach[CH_BITNESS])]
	]);
	else for (var prop in uach) if (this.hasOwnProperty(prop) && typeof uach[prop] !== TYPEOF.UNDEFINED) this[prop] = uach[prop];
}
function UAItem(itemType, ua, rgxMap, uaCH) {
	setProps.call(this, [
		["itemType", itemType],
		["ua", ua],
		["uaCH", uaCH],
		["rgxMap", rgxMap],
		["data", createIData(this, itemType)]
	]);
	return this;
}
UAItem.prototype.get = function(prop) {
	if (!prop) return this.data;
	return this.data.hasOwnProperty(prop) ? this.data[prop] : void 0;
};
UAItem.prototype.set = function(prop, val) {
	this.data[prop] = val;
	return this;
};
UAItem.prototype.setCH = function(ch) {
	this.uaCH = ch;
	return this;
};
UAItem.prototype.detectFeature = function() {
	if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) switch (this.itemType) {
		case BROWSER:
			if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == TYPEOF.FUNCTION) this.set(NAME, "Brave");
			break;
		case DEVICE:
			if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) this.set(TYPE, MOBILE);
			if (this.get(MODEL) == "Macintosh" && NAVIGATOR && typeof NAVIGATOR.standalone !== TYPEOF.UNDEFINED && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) this.set(MODEL, "iPad").set(TYPE, TABLET);
			break;
		case OS$1:
			if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
			break;
		case RESULT:
			var data = this.data;
			var detect = function(itemType) {
				return data[itemType].getItem().detectFeature().get();
			};
			this.set(BROWSER, detect(BROWSER)).set(CPU, detect(CPU)).set(DEVICE, detect(DEVICE)).set(ENGINE, detect(ENGINE)).set(OS$1, detect(OS$1));
	}
	return this;
};
UAItem.prototype.parseUA = function() {
	if (this.itemType != RESULT) rgxMapper.call(this.data, this.ua, this.rgxMap);
	switch (this.itemType) {
		case BROWSER:
			this.set(MAJOR, majorize(this.get(VERSION)));
			break;
		case OS$1:
			if (this.get(NAME) == "iOS" && this.get(VERSION) == "18.6") {
				var realVersion = /\) Version\/([\d\.]+)/.exec(this.ua);
				if (realVersion && parseInt(realVersion[1].substring(0, 2), 10) >= 26) this.set(VERSION, realVersion[1]);
			}
			break;
	}
	return this;
};
UAItem.prototype.parseCH = function() {
	var uaCH = this.uaCH, rgxMap = this.rgxMap;
	switch (this.itemType) {
		case BROWSER:
		case ENGINE:
			var brands = uaCH[FULLVERLIST] || uaCH[BRANDS], prevName;
			if (brands) for (var i = 0; i < brands.length; i++) {
				var brandName = brands[i].brand || brands[i], brandVersion = brands[i].version;
				if (this.itemType == BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || /Chrom/.test(prevName) && brandName != CHROMIUM || prevName == EDGE && /WebView2/.test(brandName))) {
					brandName = strMapper(brandName, browserHintsMap);
					prevName = this.get(NAME);
					if (!(prevName && !/Chrom/.test(prevName) && /Chrom/.test(brandName))) this.set(NAME, brandName).set(VERSION, brandVersion).set(MAJOR, majorize(brandVersion));
					prevName = brandName;
				}
				if (this.itemType == ENGINE && brandName == CHROMIUM) this.set(VERSION, brandVersion);
			}
			break;
		case CPU:
			var archName = uaCH[ARCHITECTURE];
			if (archName) {
				if (archName && uaCH[BITNESS] == "64") archName += "64";
				rgxMapper.call(this.data, archName + ";", rgxMap);
			}
			break;
		case DEVICE:
			if (uaCH[MOBILE]) this.set(TYPE, MOBILE);
			if (uaCH[MODEL]) {
				this.set(MODEL, uaCH[MODEL]);
				if (!this.get(TYPE) || !this.get(VENDOR)) {
					var reParse = {};
					rgxMapper.call(reParse, "droid 9; " + uaCH[MODEL] + ")", rgxMap);
					if (!this.get(TYPE) && !!reParse.type) this.set(TYPE, reParse.type);
					if (!this.get(VENDOR) && !!reParse.vendor) this.set(VENDOR, reParse.vendor);
				}
			}
			if (uaCH[FORMFACTORS]) {
				var ff;
				if (typeof uaCH[FORMFACTORS] !== "string") {
					var idx = 0;
					while (!ff && idx < uaCH[FORMFACTORS].length) ff = strMapper(uaCH[FORMFACTORS][idx++], formFactorsMap);
				} else ff = strMapper(uaCH[FORMFACTORS], formFactorsMap);
				this.set(TYPE, ff);
			}
			break;
		case OS$1:
			var osName = uaCH[PLATFORM];
			if (osName) {
				var osVersion = uaCH[PLATFORMVER];
				if (osName == WINDOWS) osVersion = parseInt(majorize(osVersion), 10) >= 13 ? "11" : "10";
				this.set(NAME, osName).set(VERSION, osVersion);
			}
			if (this.get(NAME) == WINDOWS && uaCH[MODEL] == "Xbox") this.set(NAME, "Xbox").set(VERSION, void 0);
			break;
		case RESULT:
			var data = this.data;
			var parse = function(itemType) {
				return data[itemType].getItem().setCH(uaCH).parseCH().get();
			};
			this.set(BROWSER, parse(BROWSER)).set(CPU, parse(CPU)).set(DEVICE, parse(DEVICE)).set(ENGINE, parse(ENGINE)).set(OS$1, parse(OS$1));
	}
	return this;
};
function UAParser(ua, extensions, headers) {
	if (typeof ua === TYPEOF.OBJECT) {
		if (isExtensions(ua, true)) {
			if (typeof extensions === TYPEOF.OBJECT) headers = extensions;
			extensions = ua;
		} else {
			headers = ua;
			extensions = void 0;
		}
		ua = void 0;
	} else if (typeof ua === TYPEOF.STRING && !isExtensions(extensions, true)) {
		headers = extensions;
		extensions = void 0;
	}
	if (headers) if (typeof headers.append === TYPEOF.FUNCTION) {
		var kv = {};
		headers.forEach(function(v, k) {
			kv[String(k).toLowerCase()] = v;
		});
		headers = kv;
	} else {
		var normalized = {};
		for (var header in headers) if (headers.hasOwnProperty(header)) normalized[String(header).toLowerCase()] = headers[header];
		headers = normalized;
	}
	if (!(this instanceof UAParser)) return new UAParser(ua, extensions, headers).getResult();
	var userAgent = typeof ua === TYPEOF.STRING ? ua : headers && headers[USER_AGENT] ? headers[USER_AGENT] : NAVIGATOR && NAVIGATOR.userAgent ? NAVIGATOR.userAgent : EMPTY, httpUACH = new UACHData(headers, true), regexMap = extensions ? extend(defaultRegexes, extensions) : defaultRegexes, createItemFunc = function(itemType) {
		if (itemType == RESULT) return function() {
			return new UAItem(itemType, userAgent, regexMap, httpUACH).set("ua", userAgent).set(BROWSER, this.getBrowser()).set(CPU, this.getCPU()).set(DEVICE, this.getDevice()).set(ENGINE, this.getEngine()).set(OS$1, this.getOS()).get();
		};
		else return function() {
			return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH).parseUA().get();
		};
	};
	setProps.call(this, [
		["getBrowser", createItemFunc(BROWSER)],
		["getCPU", createItemFunc(CPU)],
		["getDevice", createItemFunc(DEVICE)],
		["getEngine", createItemFunc(ENGINE)],
		["getOS", createItemFunc(OS$1)],
		["getResult", createItemFunc(RESULT)],
		["getUA", function() {
			return userAgent;
		}],
		["setUA", function(ua) {
			if (isString$2(ua)) userAgent = trim$1(ua, UA_MAX_LENGTH);
			return this;
		}]
	]).setUA(userAgent);
	return this;
}
UAParser.VERSION = LIBVERSION;
UAParser.BROWSER = enumerize([
	NAME,
	VERSION,
	MAJOR,
	TYPE
]);
UAParser.CPU = enumerize([ARCHITECTURE]);
UAParser.DEVICE = enumerize([
	MODEL,
	VENDOR,
	TYPE,
	CONSOLE,
	MOBILE,
	SMARTTV,
	TABLET,
	WEARABLE,
	EMBEDDED
]);
UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
//#endregion
//#region ../loot-core/src/shared/platform.ts
var isWindows = navigator.platform && navigator.platform.toLowerCase() === "win32";
var isMac = navigator.platform && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
var isPlaywright = navigator.userAgent === "playwright";
var OS = isWindows ? "windows" : isMac ? "mac" : "linux";
var isIOSAgent = UAParser(navigator.userAgent).browser.name === "Mobile Safari";
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region ../../node_modules/i18next/dist/esm/i18next.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var isString$1 = (obj) => typeof obj === "string";
var defer = () => {
	let res;
	let rej;
	const promise = new Promise((resolve, reject) => {
		res = resolve;
		rej = reject;
	});
	promise.resolve = res;
	promise.reject = rej;
	return promise;
};
var makeString = (object) => {
	if (object == null) return "";
	return "" + object;
};
var copy$1 = (a, s, t) => {
	a.forEach((m) => {
		if (s[m]) t[m] = s[m];
	});
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString$1(object);
var getLastOfPath = (object, path, Empty) => {
	const stack = !isString$1(path) ? path : path.split(".");
	let stackIndex = 0;
	while (stackIndex < stack.length - 1) {
		if (canNotTraverseDeeper(object)) return {};
		const key = cleanKey(stack[stackIndex]);
		if (!object[key] && Empty) object[key] = new Empty();
		if (Object.prototype.hasOwnProperty.call(object, key)) object = object[key];
		else object = {};
		++stackIndex;
	}
	if (canNotTraverseDeeper(object)) return {};
	return {
		obj: object,
		k: cleanKey(stack[stackIndex])
	};
};
var setPath = (object, path, newValue) => {
	const { obj, k } = getLastOfPath(object, path, Object);
	if (obj !== void 0 || path.length === 1) {
		obj[k] = newValue;
		return;
	}
	let e = path[path.length - 1];
	let p = path.slice(0, path.length - 1);
	let last = getLastOfPath(object, p, Object);
	while (last.obj === void 0 && p.length) {
		e = `${p[p.length - 1]}.${e}`;
		p = p.slice(0, p.length - 1);
		last = getLastOfPath(object, p, Object);
		if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") last.obj = void 0;
	}
	last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path, newValue, concat) => {
	const { obj, k } = getLastOfPath(object, path, Object);
	obj[k] = obj[k] || [];
	obj[k].push(newValue);
};
var getPath = (object, path) => {
	const { obj, k } = getLastOfPath(object, path);
	if (!obj) return void 0;
	if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
	return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
	const value = getPath(data, key);
	if (value !== void 0) return value;
	return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
	for (const prop in source) if (prop !== "__proto__" && prop !== "constructor") if (prop in target) if (isString$1(target[prop]) || target[prop] instanceof String || isString$1(source[prop]) || source[prop] instanceof String) {
		if (overwrite) target[prop] = source[prop];
	} else deepExtend(target[prop], source[prop], overwrite);
	else target[prop] = source[prop];
	return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
};
var escape = (data) => {
	if (isString$1(data)) return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
	return data;
};
var RegExpCache = class {
	constructor(capacity) {
		this.capacity = capacity;
		this.regExpMap = /* @__PURE__ */ new Map();
		this.regExpQueue = [];
	}
	getRegExp(pattern) {
		const regExpFromCache = this.regExpMap.get(pattern);
		if (regExpFromCache !== void 0) return regExpFromCache;
		const regExpNew = new RegExp(pattern);
		if (this.regExpQueue.length === this.capacity) this.regExpMap.delete(this.regExpQueue.shift());
		this.regExpMap.set(pattern, regExpNew);
		this.regExpQueue.push(pattern);
		return regExpNew;
	}
};
var chars = [
	" ",
	",",
	"?",
	"!",
	";"
];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
	nsSeparator = nsSeparator || "";
	keySeparator = keySeparator || "";
	const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
	if (possibleChars.length === 0) return true;
	const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
	let matched = !r.test(key);
	if (!matched) {
		const ki = key.indexOf(keySeparator);
		if (ki > 0 && !r.test(key.substring(0, ki))) matched = true;
	}
	return matched;
};
var deepFind = (obj, path, keySeparator = ".") => {
	if (!obj) return void 0;
	if (obj[path]) {
		if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
		return obj[path];
	}
	const tokens = path.split(keySeparator);
	let current = obj;
	for (let i = 0; i < tokens.length;) {
		if (!current || typeof current !== "object") return;
		let next;
		let nextPath = "";
		for (let j = i; j < tokens.length; ++j) {
			if (j !== i) nextPath += keySeparator;
			nextPath += tokens[j];
			next = current[nextPath];
			if (next !== void 0) {
				if ([
					"string",
					"number",
					"boolean"
				].indexOf(typeof next) > -1 && j < tokens.length - 1) continue;
				i += j - i + 1;
				break;
			}
		}
		current = next;
	}
	return current;
};
var getCleanedCode = (code) => code?.replace(/_/g, "-");
var consoleLogger = {
	type: "logger",
	log(args) {
		this.output("log", args);
	},
	warn(args) {
		this.output("warn", args);
	},
	error(args) {
		this.output("error", args);
	},
	output(type, args) {
		console?.[type]?.apply?.(console, args);
	}
};
var baseLogger = new class Logger {
	constructor(concreteLogger, options = {}) {
		this.init(concreteLogger, options);
	}
	init(concreteLogger, options = {}) {
		this.prefix = options.prefix || "i18next:";
		this.logger = concreteLogger || consoleLogger;
		this.options = options;
		this.debug = options.debug;
	}
	log(...args) {
		return this.forward(args, "log", "", true);
	}
	warn(...args) {
		return this.forward(args, "warn", "", true);
	}
	error(...args) {
		return this.forward(args, "error", "");
	}
	deprecate(...args) {
		return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
	}
	forward(args, lvl, prefix, debugOnly) {
		if (debugOnly && !this.debug) return null;
		if (isString$1(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
		return this.logger[lvl](args);
	}
	create(moduleName) {
		return new Logger(this.logger, {
			prefix: `${this.prefix}:${moduleName}:`,
			...this.options
		});
	}
	clone(options) {
		options = options || this.options;
		options.prefix = options.prefix || this.prefix;
		return new Logger(this.logger, options);
	}
}();
var EventEmitter = class {
	constructor() {
		this.observers = {};
	}
	on(events, listener) {
		events.split(" ").forEach((event) => {
			if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
			const numListeners = this.observers[event].get(listener) || 0;
			this.observers[event].set(listener, numListeners + 1);
		});
		return this;
	}
	off(event, listener) {
		if (!this.observers[event]) return;
		if (!listener) {
			delete this.observers[event];
			return;
		}
		this.observers[event].delete(listener);
	}
	emit(event, ...args) {
		if (this.observers[event]) Array.from(this.observers[event].entries()).forEach(([observer, numTimesAdded]) => {
			for (let i = 0; i < numTimesAdded; i++) observer(...args);
		});
		if (this.observers["*"]) Array.from(this.observers["*"].entries()).forEach(([observer, numTimesAdded]) => {
			for (let i = 0; i < numTimesAdded; i++) observer.apply(observer, [event, ...args]);
		});
	}
};
var ResourceStore = class extends EventEmitter {
	constructor(data, options = {
		ns: ["translation"],
		defaultNS: "translation"
	}) {
		super();
		this.data = data || {};
		this.options = options;
		if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
		if (this.options.ignoreJSONStructure === void 0) this.options.ignoreJSONStructure = true;
	}
	addNamespaces(ns) {
		if (this.options.ns.indexOf(ns) < 0) this.options.ns.push(ns);
	}
	removeNamespaces(ns) {
		const index = this.options.ns.indexOf(ns);
		if (index > -1) this.options.ns.splice(index, 1);
	}
	getResource(lng, ns, key, options = {}) {
		const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
		const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
		let path;
		if (lng.indexOf(".") > -1) path = lng.split(".");
		else {
			path = [lng, ns];
			if (key) if (Array.isArray(key)) path.push(...key);
			else if (isString$1(key) && keySeparator) path.push(...key.split(keySeparator));
			else path.push(key);
		}
		const result = getPath(this.data, path);
		if (!result && !ns && !key && lng.indexOf(".") > -1) {
			lng = path[0];
			ns = path[1];
			key = path.slice(2).join(".");
		}
		if (result || !ignoreJSONStructure || !isString$1(key)) return result;
		return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
	}
	addResource(lng, ns, key, value, options = { silent: false }) {
		const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
		let path = [lng, ns];
		if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
		if (lng.indexOf(".") > -1) {
			path = lng.split(".");
			value = ns;
			ns = path[1];
		}
		this.addNamespaces(ns);
		setPath(this.data, path, value);
		if (!options.silent) this.emit("added", lng, ns, key, value);
	}
	addResources(lng, ns, resources, options = { silent: false }) {
		for (const m in resources) if (isString$1(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], { silent: true });
		if (!options.silent) this.emit("added", lng, ns, resources);
	}
	addResourceBundle(lng, ns, resources, deep, overwrite, options = {
		silent: false,
		skipCopy: false
	}) {
		let path = [lng, ns];
		if (lng.indexOf(".") > -1) {
			path = lng.split(".");
			deep = resources;
			resources = ns;
			ns = path[1];
		}
		this.addNamespaces(ns);
		let pack = getPath(this.data, path) || {};
		if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
		if (deep) deepExtend(pack, resources, overwrite);
		else pack = {
			...pack,
			...resources
		};
		setPath(this.data, path, pack);
		if (!options.silent) this.emit("added", lng, ns, resources);
	}
	removeResourceBundle(lng, ns) {
		if (this.hasResourceBundle(lng, ns)) delete this.data[lng][ns];
		this.removeNamespaces(ns);
		this.emit("removed", lng, ns);
	}
	hasResourceBundle(lng, ns) {
		return this.getResource(lng, ns) !== void 0;
	}
	getResourceBundle(lng, ns) {
		if (!ns) ns = this.options.defaultNS;
		return this.getResource(lng, ns);
	}
	getDataByLanguage(lng) {
		return this.data[lng];
	}
	hasLanguageSomeTranslations(lng) {
		const data = this.getDataByLanguage(lng);
		return !!(data && Object.keys(data) || []).find((v) => data[v] && Object.keys(data[v]).length > 0);
	}
	toJSON() {
		return this.data;
	}
};
var postProcessor = {
	processors: {},
	addPostProcessor(module) {
		this.processors[module.name] = module;
	},
	handle(processors, value, key, options, translator) {
		processors.forEach((processor) => {
			value = this.processors[processor]?.process(value, key, options, translator) ?? value;
		});
		return value;
	}
};
var PATH_KEY = Symbol("i18next/PATH_KEY");
function createProxy$1() {
	const state = [];
	const handler = Object.create(null);
	let proxy;
	handler.get = (target, key) => {
		proxy?.revoke?.();
		if (key === PATH_KEY) return state;
		state.push(key);
		proxy = Proxy.revocable(target, handler);
		return proxy.proxy;
	};
	return Proxy.revocable(Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
	const { [PATH_KEY]: path } = selector(createProxy$1());
	const keySeparator = opts?.keySeparator ?? ".";
	const nsSeparator = opts?.nsSeparator ?? ":";
	if (path.length > 1 && nsSeparator) {
		const ns = opts?.ns;
		const nsArray = Array.isArray(ns) ? ns : null;
		if (nsArray && nsArray.length > 1 && nsArray.slice(1).includes(path[0])) return `${path[0]}${nsSeparator}${path.slice(1).join(keySeparator)}`;
	}
	return path.join(keySeparator);
}
var checkedLoadedFor = {};
var shouldHandleAsObject = (res) => !isString$1(res) && typeof res !== "boolean" && typeof res !== "number";
var Translator = class Translator extends EventEmitter {
	constructor(services, options = {}) {
		super();
		copy$1([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], services, this);
		this.options = options;
		if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
		this.logger = baseLogger.create("translator");
	}
	changeLanguage(lng) {
		if (lng) this.language = lng;
	}
	exists(key, o = { interpolation: {} }) {
		const opt = { ...o };
		if (key == null) return false;
		const resolved = this.resolve(key, opt);
		if (resolved?.res === void 0) return false;
		const isObject = shouldHandleAsObject(resolved.res);
		if (opt.returnObjects === false && isObject) return false;
		return true;
	}
	extractFromKey(key, opt) {
		let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
		if (nsSeparator === void 0) nsSeparator = ":";
		const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
		let namespaces = opt.ns || this.options.defaultNS || [];
		const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
		const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
		if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
			const m = key.match(this.interpolator.nestingRegexp);
			if (m && m.length > 0) return {
				key,
				namespaces: isString$1(namespaces) ? [namespaces] : namespaces
			};
			const parts = key.split(nsSeparator);
			if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
			key = parts.join(keySeparator);
		}
		return {
			key,
			namespaces: isString$1(namespaces) ? [namespaces] : namespaces
		};
	}
	translate(keys, o, lastKey) {
		let opt = typeof o === "object" ? { ...o } : o;
		if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) opt = this.options.overloadTranslationOptionHandler(arguments);
		if (typeof opt === "object") opt = { ...opt };
		if (!opt) opt = {};
		if (keys == null) return "";
		if (typeof keys === "function") keys = keysFromSelector(keys, {
			...this.options,
			...opt
		});
		if (!Array.isArray(keys)) keys = [String(keys)];
		keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
			...this.options,
			...opt
		}) : String(k));
		const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
		const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
		const { key, namespaces } = this.extractFromKey(keys[keys.length - 1], opt);
		const namespace = namespaces[namespaces.length - 1];
		let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
		if (nsSeparator === void 0) nsSeparator = ":";
		const lng = opt.lng || this.language;
		const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (lng?.toLowerCase() === "cimode") {
			if (appendNamespaceToCIMode) {
				if (returnDetails) return {
					res: `${namespace}${nsSeparator}${key}`,
					usedKey: key,
					exactUsedKey: key,
					usedLng: lng,
					usedNS: namespace,
					usedParams: this.getUsedParamsDetails(opt)
				};
				return `${namespace}${nsSeparator}${key}`;
			}
			if (returnDetails) return {
				res: key,
				usedKey: key,
				exactUsedKey: key,
				usedLng: lng,
				usedNS: namespace,
				usedParams: this.getUsedParamsDetails(opt)
			};
			return key;
		}
		const resolved = this.resolve(keys, opt);
		let res = resolved?.res;
		const resUsedKey = resolved?.usedKey || key;
		const resExactUsedKey = resolved?.exactUsedKey || key;
		const noObject = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		];
		const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
		const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
		const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
		const hasDefaultValue = Translator.hasDefaultValue(opt);
		const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
		const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, { ordinal: false }) : "";
		const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
		const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
		let resForObjHndl = res;
		if (handleAsObjectInI18nFormat && !res && hasDefaultValue) resForObjHndl = defaultValue;
		const handleAsObject = shouldHandleAsObject(resForObjHndl);
		const resType = Object.prototype.toString.apply(resForObjHndl);
		if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString$1(joinArrays) && Array.isArray(resForObjHndl))) {
			if (!opt.returnObjects && !this.options.returnObjects) {
				if (!this.options.returnedObjectHandler) this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
					...opt,
					ns: namespaces
				}) : `key '${key} (${this.language})' returned an object instead of string.`;
				if (returnDetails) {
					resolved.res = r;
					resolved.usedParams = this.getUsedParamsDetails(opt);
					return resolved;
				}
				return r;
			}
			if (keySeparator) {
				const resTypeIsArray = Array.isArray(resForObjHndl);
				const copy = resTypeIsArray ? [] : {};
				const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
				for (const m in resForObjHndl) if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
					const deepKey = `${newKeyToUse}${keySeparator}${m}`;
					if (hasDefaultValue && !res) copy[m] = this.translate(deepKey, {
						...opt,
						defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
						joinArrays: false,
						ns: namespaces
					});
					else copy[m] = this.translate(deepKey, {
						...opt,
						joinArrays: false,
						ns: namespaces
					});
					if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
				}
				res = copy;
			}
		} else if (handleAsObjectInI18nFormat && isString$1(joinArrays) && Array.isArray(res)) {
			res = res.join(joinArrays);
			if (res) res = this.extendTranslation(res, keys, opt, lastKey);
		} else {
			let usedDefault = false;
			let usedKey = false;
			if (!this.isValidLookup(res) && hasDefaultValue) {
				usedDefault = true;
				res = defaultValue;
			}
			if (!this.isValidLookup(res)) {
				usedKey = true;
				res = key;
			}
			const resForMissing = (opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && usedKey ? void 0 : res;
			const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
			if (usedKey || usedDefault || updateMissing) {
				this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
				if (keySeparator) {
					const fk = this.resolve(key, {
						...opt,
						keySeparator: false
					});
					if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let lngs = [];
				const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) for (let i = 0; i < fallbackLngs.length; i++) lngs.push(fallbackLngs[i]);
				else if (this.options.saveMissingTo === "all") lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
				else lngs.push(opt.lng || this.language);
				const send = (l, k, specificDefaultValue) => {
					const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
					if (this.options.missingKeyHandler) this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
					else if (this.backendConnector?.saveMissing) this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
					this.emit("missingKey", l, namespace, k, res);
				};
				if (this.options.saveMissing) if (this.options.saveMissingPlurals && needsPluralHandling) lngs.forEach((language) => {
					const suffixes = this.pluralResolver.getSuffixes(language, opt);
					if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) suffixes.push(`${this.options.pluralSeparator}zero`);
					suffixes.forEach((suffix) => {
						send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
					});
				});
				else send(lngs, key, defaultValue);
			}
			res = this.extendTranslation(res, keys, opt, resolved, lastKey);
			if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}${nsSeparator}${key}`;
			if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
		}
		if (returnDetails) {
			resolved.res = res;
			resolved.usedParams = this.getUsedParamsDetails(opt);
			return resolved;
		}
		return res;
	}
	extendTranslation(res, key, opt, resolved, lastKey) {
		if (this.i18nFormat?.parse) res = this.i18nFormat.parse(res, {
			...this.options.interpolation.defaultVariables,
			...opt
		}, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, { resolved });
		else if (!opt.skipInterpolation) {
			if (opt.interpolation) this.interpolator.init({
				...opt,
				interpolation: {
					...this.options.interpolation,
					...opt.interpolation
				}
			});
			const skipOnVariables = isString$1(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
			let nestBef;
			if (skipOnVariables) {
				const nb = res.match(this.interpolator.nestingRegexp);
				nestBef = nb && nb.length;
			}
			let data = opt.replace && !isString$1(opt.replace) ? opt.replace : opt;
			if (this.options.interpolation.defaultVariables) data = {
				...this.options.interpolation.defaultVariables,
				...data
			};
			res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
			if (skipOnVariables) {
				const na = res.match(this.interpolator.nestingRegexp);
				const nestAft = na && na.length;
				if (nestBef < nestAft) opt.nest = false;
			}
			if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
			if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
				if (lastKey?.[0] === args[0] && !opt.context) {
					this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
					return null;
				}
				return this.translate(...args, key);
			}, opt);
			if (opt.interpolation) this.interpolator.reset();
		}
		const postProcess = opt.postProcess || this.options.postProcess;
		const postProcessorNames = isString$1(postProcess) ? [postProcess] : postProcess;
		if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...resolved,
				usedParams: this.getUsedParamsDetails(opt)
			},
			...opt
		} : opt, this);
		return res;
	}
	resolve(keys, opt = {}) {
		let found;
		let usedKey;
		let exactUsedKey;
		let usedLng;
		let usedNS;
		if (isString$1(keys)) keys = [keys];
		if (Array.isArray(keys)) keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
			...this.options,
			...opt
		}) : k);
		keys.forEach((k) => {
			if (this.isValidLookup(found)) return;
			const extracted = this.extractFromKey(k, opt);
			const key = extracted.key;
			usedKey = key;
			let namespaces = extracted.namespaces;
			if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
			const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
			const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
			const needsContextHandling = opt.context !== void 0 && (isString$1(opt.context) || typeof opt.context === "number") && opt.context !== "";
			const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
			namespaces.forEach((ns) => {
				if (this.isValidLookup(found)) return;
				usedNS = ns;
				if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
					checkedLoadedFor[`${codes[0]}-${ns}`] = true;
					this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
				}
				codes.forEach((code) => {
					if (this.isValidLookup(found)) return;
					usedLng = code;
					const finalKeys = [key];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
					else {
						let pluralSuffix;
						if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
						const zeroSuffix = `${this.options.pluralSeparator}zero`;
						const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (needsPluralHandling) {
							if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
							finalKeys.push(key + pluralSuffix);
							if (needsZeroSuffixLookup) finalKeys.push(key + zeroSuffix);
						}
						if (needsContextHandling) {
							const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
							finalKeys.push(contextKey);
							if (needsPluralHandling) {
								if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
								finalKeys.push(contextKey + pluralSuffix);
								if (needsZeroSuffixLookup) finalKeys.push(contextKey + zeroSuffix);
							}
						}
					}
					let possibleKey;
					while (possibleKey = finalKeys.pop()) if (!this.isValidLookup(found)) {
						exactUsedKey = possibleKey;
						found = this.getResource(code, ns, possibleKey, opt);
					}
				});
			});
		});
		return {
			res: found,
			usedKey,
			exactUsedKey,
			usedLng,
			usedNS
		};
	}
	isValidLookup(res) {
		return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
	}
	getResource(code, ns, key, options = {}) {
		if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
		return this.resourceStore.getResource(code, ns, key, options);
	}
	getUsedParamsDetails(options = {}) {
		const optionsKeys = [
			"defaultValue",
			"ordinal",
			"context",
			"replace",
			"lng",
			"lngs",
			"fallbackLng",
			"ns",
			"keySeparator",
			"nsSeparator",
			"returnObjects",
			"returnDetails",
			"joinArrays",
			"postProcess",
			"interpolation"
		];
		const useOptionsReplaceForData = options.replace && !isString$1(options.replace);
		let data = useOptionsReplaceForData ? options.replace : options;
		if (useOptionsReplaceForData && typeof options.count !== "undefined") data.count = options.count;
		if (this.options.interpolation.defaultVariables) data = {
			...this.options.interpolation.defaultVariables,
			...data
		};
		if (!useOptionsReplaceForData) {
			data = { ...data };
			for (const key of optionsKeys) delete data[key];
		}
		return data;
	}
	static hasDefaultValue(options) {
		const prefix = "defaultValue";
		for (const option in options) if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, 12) && void 0 !== options[option]) return true;
		return false;
	}
};
var LanguageUtil = class {
	constructor(options) {
		this.options = options;
		this.supportedLngs = this.options.supportedLngs || false;
		this.logger = baseLogger.create("languageUtils");
	}
	getScriptPartFromCode(code) {
		code = getCleanedCode(code);
		if (!code || code.indexOf("-") < 0) return null;
		const p = code.split("-");
		if (p.length === 2) return null;
		p.pop();
		if (p[p.length - 1].toLowerCase() === "x") return null;
		return this.formatLanguageCode(p.join("-"));
	}
	getLanguagePartFromCode(code) {
		code = getCleanedCode(code);
		if (!code || code.indexOf("-") < 0) return code;
		const p = code.split("-");
		return this.formatLanguageCode(p[0]);
	}
	formatLanguageCode(code) {
		if (isString$1(code) && code.indexOf("-") > -1) {
			let formattedCode;
			try {
				formattedCode = Intl.getCanonicalLocales(code)[0];
			} catch (e) {}
			if (formattedCode && this.options.lowerCaseLng) formattedCode = formattedCode.toLowerCase();
			if (formattedCode) return formattedCode;
			if (this.options.lowerCaseLng) return code.toLowerCase();
			return code;
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	}
	isSupportedCode(code) {
		if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) code = this.getLanguagePartFromCode(code);
		return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
	}
	getBestMatchFromCodes(codes) {
		if (!codes) return null;
		let found;
		codes.forEach((code) => {
			if (found) return;
			const cleanedLng = this.formatLanguageCode(code);
			if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
		});
		if (!found && this.options.supportedLngs) codes.forEach((code) => {
			if (found) return;
			const lngScOnly = this.getScriptPartFromCode(code);
			if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
			const lngOnly = this.getLanguagePartFromCode(code);
			if (this.isSupportedCode(lngOnly)) return found = lngOnly;
			found = this.options.supportedLngs.find((supportedLng) => {
				if (supportedLng === lngOnly) return supportedLng;
				if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
				if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
				if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
			});
		});
		if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
		return found;
	}
	getFallbackCodes(fallbacks, code) {
		if (!fallbacks) return [];
		if (typeof fallbacks === "function") fallbacks = fallbacks(code);
		if (isString$1(fallbacks)) fallbacks = [fallbacks];
		if (Array.isArray(fallbacks)) return fallbacks;
		if (!code) return fallbacks.default || [];
		let found = fallbacks[code];
		if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
		if (!found) found = fallbacks[this.formatLanguageCode(code)];
		if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
		if (!found) found = fallbacks.default;
		return found || [];
	}
	toResolveHierarchy(code, fallbackCode) {
		const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
		const codes = [];
		const addCode = (c) => {
			if (!c) return;
			if (this.isSupportedCode(c)) codes.push(c);
			else this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
		};
		if (isString$1(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
			if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
			if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
			if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
		} else if (isString$1(code)) addCode(this.formatLanguageCode(code));
		fallbackCodes.forEach((fc) => {
			if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
		});
		return codes;
	}
};
var suffixesOrder = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
};
var dummyRule = {
	select: (count) => count === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
};
var PluralResolver = class {
	constructor(languageUtils, options = {}) {
		this.languageUtils = languageUtils;
		this.options = options;
		this.logger = baseLogger.create("pluralResolver");
		this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(code, options = {}) {
		const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
		const type = options.ordinal ? "ordinal" : "cardinal";
		const cacheKey = JSON.stringify({
			cleanedCode,
			type
		});
		if (cacheKey in this.pluralRulesCache) return this.pluralRulesCache[cacheKey];
		let rule;
		try {
			rule = new Intl.PluralRules(cleanedCode, { type });
		} catch (err) {
			if (typeof Intl === "undefined") {
				this.logger.error("No Intl support, please use an Intl polyfill!");
				return dummyRule;
			}
			if (!code.match(/-|_/)) return dummyRule;
			const lngPart = this.languageUtils.getLanguagePartFromCode(code);
			rule = this.getRule(lngPart, options);
		}
		this.pluralRulesCache[cacheKey] = rule;
		return rule;
	}
	needsPlural(code, options = {}) {
		let rule = this.getRule(code, options);
		if (!rule) rule = this.getRule("dev", options);
		return rule?.resolvedOptions().pluralCategories.length > 1;
	}
	getPluralFormsOfKey(code, key, options = {}) {
		return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
	}
	getSuffixes(code, options = {}) {
		let rule = this.getRule(code, options);
		if (!rule) rule = this.getRule("dev", options);
		if (!rule) return [];
		return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
	}
	getSuffix(code, count, options = {}) {
		const rule = this.getRule(code, options);
		if (rule) return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
		this.logger.warn(`no plural rule found for: ${code}`);
		return this.getSuffix("dev", count, options);
	}
};
var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
	let path = getPathWithDefaults(data, defaultData, key);
	if (!path && ignoreJSONStructure && isString$1(key)) {
		path = deepFind(data, key, keySeparator);
		if (path === void 0) path = deepFind(defaultData, key, keySeparator);
	}
	return path;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");
var Interpolator = class {
	constructor(options = {}) {
		this.logger = baseLogger.create("interpolator");
		this.options = options;
		this.format = options?.interpolation?.format || ((value) => value);
		this.init(options);
	}
	init(options = {}) {
		if (!options.interpolation) options.interpolation = { escapeValue: true };
		const { escape: escape$1, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = options.interpolation;
		this.escape = escape$1 !== void 0 ? escape$1 : escape;
		this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
		this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
		this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
		this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
		this.formatSeparator = formatSeparator || ",";
		this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
		this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
		this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
		this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
		this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
		this.maxReplaces = maxReplaces || 1e3;
		this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
		this.resetRegExp();
	}
	reset() {
		if (this.options) this.init(this.options);
	}
	resetRegExp() {
		const getOrResetRegExp = (existingRegExp, pattern) => {
			if (existingRegExp?.source === pattern) {
				existingRegExp.lastIndex = 0;
				return existingRegExp;
			}
			return new RegExp(pattern, "g");
		};
		this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
		this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
		this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(str, data, lng, options) {
		let match;
		let value;
		let replaces;
		const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
		const handleFormat = (key) => {
			if (key.indexOf(this.formatSeparator) < 0) {
				const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(path, void 0, lng, {
					...options,
					...data,
					interpolationkey: key
				}) : path;
			}
			const p = key.split(this.formatSeparator);
			const k = p.shift().trim();
			const f = p.join(this.formatSeparator).trim();
			return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
				...options,
				...data,
				interpolationkey: k
			});
		};
		this.resetRegExp();
		const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
		const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
		[{
			regex: this.regexpUnescape,
			safeValue: (val) => regexSafe(val)
		}, {
			regex: this.regexp,
			safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
		}].forEach((todo) => {
			replaces = 0;
			while (match = todo.regex.exec(str)) {
				const matchedVar = match[1].trim();
				value = handleFormat(matchedVar);
				if (value === void 0) if (typeof missingInterpolationHandler === "function") {
					const temp = missingInterpolationHandler(str, match, options);
					value = isString$1(temp) ? temp : "";
				} else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) value = "";
				else if (skipOnVariables) {
					value = match[0];
					continue;
				} else {
					this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
					value = "";
				}
				else if (!isString$1(value) && !this.useRawValueToEscape) value = makeString(value);
				const safeValue = todo.safeValue(value);
				str = str.replace(match[0], safeValue);
				if (skipOnVariables) {
					todo.regex.lastIndex += value.length;
					todo.regex.lastIndex -= match[0].length;
				} else todo.regex.lastIndex = 0;
				replaces++;
				if (replaces >= this.maxReplaces) break;
			}
		});
		return str;
	}
	nest(str, fc, options = {}) {
		let match;
		let value;
		let clonedOptions;
		const handleHasOptions = (key, inheritedOptions) => {
			const sep = this.nestingOptionsSeparator;
			if (key.indexOf(sep) < 0) return key;
			const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
			let optionsString = `{${c[1]}`;
			key = c[0];
			optionsString = this.interpolate(optionsString, clonedOptions);
			const matchedSingleQuotes = optionsString.match(/'/g);
			const matchedDoubleQuotes = optionsString.match(/"/g);
			if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) optionsString = optionsString.replace(/'/g, "\"");
			try {
				clonedOptions = JSON.parse(optionsString);
				if (inheritedOptions) clonedOptions = {
					...inheritedOptions,
					...clonedOptions
				};
			} catch (e) {
				this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
				return `${key}${sep}${optionsString}`;
			}
			if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
			return key;
		};
		while (match = this.nestingRegexp.exec(str)) {
			let formatters = [];
			clonedOptions = { ...options };
			clonedOptions = clonedOptions.replace && !isString$1(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
			clonedOptions.applyPostProcessor = false;
			delete clonedOptions.defaultValue;
			const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
			if (keyEndIndex !== -1) {
				formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
				match[1] = match[1].slice(0, keyEndIndex);
			}
			value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
			if (value && match[0] === str && !isString$1(value)) return value;
			if (!isString$1(value)) value = makeString(value);
			if (!value) {
				this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
				value = "";
			}
			if (formatters.length) value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
				...options,
				interpolationkey: match[1].trim()
			}), value.trim());
			str = str.replace(match[0], value);
			this.regexp.lastIndex = 0;
		}
		return str;
	}
};
var parseFormatStr = (formatStr) => {
	let formatName = formatStr.toLowerCase().trim();
	const formatOptions = {};
	if (formatStr.indexOf("(") > -1) {
		const p = formatStr.split("(");
		formatName = p[0].toLowerCase().trim();
		const optStr = p[1].substring(0, p[1].length - 1);
		if (formatName === "currency" && optStr.indexOf(":") < 0) {
			if (!formatOptions.currency) formatOptions.currency = optStr.trim();
		} else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
			if (!formatOptions.range) formatOptions.range = optStr.trim();
		} else optStr.split(";").forEach((opt) => {
			if (opt) {
				const [key, ...rest] = opt.split(":");
				const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
				const trimmedKey = key.trim();
				if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
				if (val === "false") formatOptions[trimmedKey] = false;
				if (val === "true") formatOptions[trimmedKey] = true;
				if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
			}
		});
	}
	return {
		formatName,
		formatOptions
	};
};
var createCachedFormatter = (fn) => {
	const cache = {};
	return (v, l, o) => {
		let optForCache = o;
		if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) optForCache = {
			...optForCache,
			[o.interpolationkey]: void 0
		};
		const key = l + JSON.stringify(optForCache);
		let frm = cache[key];
		if (!frm) {
			frm = fn(getCleanedCode(l), o);
			cache[key] = frm;
		}
		return frm(v);
	};
};
var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
var Formatter = class {
	constructor(options = {}) {
		this.logger = baseLogger.create("formatter");
		this.options = options;
		this.init(options);
	}
	init(services, options = { interpolation: {} }) {
		this.formatSeparator = options.interpolation.formatSeparator || ",";
		const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
		this.formats = {
			number: cf((lng, opt) => {
				const formatter = new Intl.NumberFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			}),
			currency: cf((lng, opt) => {
				const formatter = new Intl.NumberFormat(lng, {
					...opt,
					style: "currency"
				});
				return (val) => formatter.format(val);
			}),
			datetime: cf((lng, opt) => {
				const formatter = new Intl.DateTimeFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			}),
			relativetime: cf((lng, opt) => {
				const formatter = new Intl.RelativeTimeFormat(lng, { ...opt });
				return (val) => formatter.format(val, opt.range || "day");
			}),
			list: cf((lng, opt) => {
				const formatter = new Intl.ListFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			})
		};
	}
	add(name, fc) {
		this.formats[name.toLowerCase().trim()] = fc;
	}
	addCached(name, fc) {
		this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
	}
	format(value, format, lng, options = {}) {
		const formats = format.split(this.formatSeparator);
		if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f) => f.indexOf(")") > -1)) {
			const lastIndex = formats.findIndex((f) => f.indexOf(")") > -1);
			formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
		}
		return formats.reduce((mem, f) => {
			const { formatName, formatOptions } = parseFormatStr(f);
			if (this.formats[formatName]) {
				let formatted = mem;
				try {
					const valOptions = options?.formatParams?.[options.interpolationkey] || {};
					const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
					formatted = this.formats[formatName](mem, l, {
						...formatOptions,
						...options,
						...valOptions
					});
				} catch (error) {
					this.logger.warn(error);
				}
				return formatted;
			} else this.logger.warn(`there was no format function for ${formatName}`);
			return mem;
		}, value);
	}
};
var removePending = (q, name) => {
	if (q.pending[name] !== void 0) {
		delete q.pending[name];
		q.pendingCount--;
	}
};
var Connector = class extends EventEmitter {
	constructor(backend, store, services, options = {}) {
		super();
		this.backend = backend;
		this.store = store;
		this.services = services;
		this.languageUtils = services.languageUtils;
		this.options = options;
		this.logger = baseLogger.create("backendConnector");
		this.waitingReads = [];
		this.maxParallelReads = options.maxParallelReads || 10;
		this.readingCalls = 0;
		this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
		this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
		this.state = {};
		this.queue = [];
		this.backend?.init?.(services, options.backend, options);
	}
	queueLoad(languages, namespaces, options, callback) {
		const toLoad = {};
		const pending = {};
		const toLoadLanguages = {};
		const toLoadNamespaces = {};
		languages.forEach((lng) => {
			let hasAllNamespaces = true;
			namespaces.forEach((ns) => {
				const name = `${lng}|${ns}`;
				if (!options.reload && this.store.hasResourceBundle(lng, ns)) this.state[name] = 2;
				else if (this.state[name] < 0);
				else if (this.state[name] === 1) {
					if (pending[name] === void 0) pending[name] = true;
				} else {
					this.state[name] = 1;
					hasAllNamespaces = false;
					if (pending[name] === void 0) pending[name] = true;
					if (toLoad[name] === void 0) toLoad[name] = true;
					if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
				}
			});
			if (!hasAllNamespaces) toLoadLanguages[lng] = true;
		});
		if (Object.keys(toLoad).length || Object.keys(pending).length) this.queue.push({
			pending,
			pendingCount: Object.keys(pending).length,
			loaded: {},
			errors: [],
			callback
		});
		return {
			toLoad: Object.keys(toLoad),
			pending: Object.keys(pending),
			toLoadLanguages: Object.keys(toLoadLanguages),
			toLoadNamespaces: Object.keys(toLoadNamespaces)
		};
	}
	loaded(name, err, data) {
		const s = name.split("|");
		const lng = s[0];
		const ns = s[1];
		if (err) this.emit("failedLoading", lng, ns, err);
		if (!err && data) this.store.addResourceBundle(lng, ns, data, void 0, void 0, { skipCopy: true });
		this.state[name] = err ? -1 : 2;
		if (err && data) this.state[name] = 0;
		const loaded = {};
		this.queue.forEach((q) => {
			pushPath(q.loaded, [lng], ns);
			removePending(q, name);
			if (err) q.errors.push(err);
			if (q.pendingCount === 0 && !q.done) {
				Object.keys(q.loaded).forEach((l) => {
					if (!loaded[l]) loaded[l] = {};
					const loadedKeys = q.loaded[l];
					if (loadedKeys.length) loadedKeys.forEach((n) => {
						if (loaded[l][n] === void 0) loaded[l][n] = true;
					});
				});
				q.done = true;
				if (q.errors.length) q.callback(q.errors);
				else q.callback();
			}
		});
		this.emit("loaded", loaded);
		this.queue = this.queue.filter((q) => !q.done);
	}
	read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
		if (!lng.length) return callback(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng,
				ns,
				fcName,
				tried,
				wait,
				callback
			});
			return;
		}
		this.readingCalls++;
		const resolver = (err, data) => {
			this.readingCalls--;
			if (this.waitingReads.length > 0) {
				const next = this.waitingReads.shift();
				this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
			}
			if (err && data && tried < this.maxRetries) {
				setTimeout(() => {
					this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
				}, wait);
				return;
			}
			callback(err, data);
		};
		const fc = this.backend[fcName].bind(this.backend);
		if (fc.length === 2) {
			try {
				const r = fc(lng, ns);
				if (r && typeof r.then === "function") r.then((data) => resolver(null, data)).catch(resolver);
				else resolver(null, r);
			} catch (err) {
				resolver(err);
			}
			return;
		}
		return fc(lng, ns, resolver);
	}
	prepareLoading(languages, namespaces, options = {}, callback) {
		if (!this.backend) {
			this.logger.warn("No backend was added via i18next.use. Will not load resources.");
			return callback && callback();
		}
		if (isString$1(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
		if (isString$1(namespaces)) namespaces = [namespaces];
		const toLoad = this.queueLoad(languages, namespaces, options, callback);
		if (!toLoad.toLoad.length) {
			if (!toLoad.pending.length) callback();
			return null;
		}
		toLoad.toLoad.forEach((name) => {
			this.loadOne(name);
		});
	}
	load(languages, namespaces, callback) {
		this.prepareLoading(languages, namespaces, {}, callback);
	}
	reload(languages, namespaces, callback) {
		this.prepareLoading(languages, namespaces, { reload: true }, callback);
	}
	loadOne(name, prefix = "") {
		const s = name.split("|");
		const lng = s[0];
		const ns = s[1];
		this.read(lng, ns, "read", void 0, void 0, (err, data) => {
			if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
			if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
			this.loaded(name, err, data);
		});
	}
	saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {}) {
		if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
			this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
			return;
		}
		if (key === void 0 || key === null || key === "") return;
		if (this.backend?.create) {
			const opts = {
				...options,
				isUpdate
			};
			const fc = this.backend.create.bind(this.backend);
			if (fc.length < 6) try {
				let r;
				if (fc.length === 5) r = fc(languages, namespace, key, fallbackValue, opts);
				else r = fc(languages, namespace, key, fallbackValue);
				if (r && typeof r.then === "function") r.then((data) => clb(null, data)).catch(clb);
				else clb(null, r);
			} catch (err) {
				clb(err);
			}
			else fc(languages, namespace, key, fallbackValue, clb, opts);
		}
		if (!languages || !languages[0]) return;
		this.store.addResource(languages[0], namespace, key, fallbackValue);
	}
};
var get$1 = () => ({
	debug: false,
	initAsync: true,
	ns: ["translation"],
	defaultNS: ["translation"],
	fallbackLng: ["dev"],
	fallbackNS: false,
	supportedLngs: false,
	nonExplicitSupportedLngs: false,
	load: "all",
	preload: false,
	simplifyPluralSuffix: true,
	keySeparator: ".",
	nsSeparator: ":",
	pluralSeparator: "_",
	contextSeparator: "_",
	partialBundledLanguages: false,
	saveMissing: false,
	updateMissing: false,
	saveMissingTo: "fallback",
	saveMissingPlurals: true,
	missingKeyHandler: false,
	missingInterpolationHandler: false,
	postProcess: false,
	postProcessPassResolved: false,
	returnNull: false,
	returnEmptyString: true,
	returnObjects: false,
	joinArrays: false,
	returnedObjectHandler: false,
	parseMissingKeyHandler: false,
	appendNamespaceToMissingKey: false,
	appendNamespaceToCIMode: false,
	overloadTranslationOptionHandler: (args) => {
		let ret = {};
		if (typeof args[1] === "object") ret = args[1];
		if (isString$1(args[1])) ret.defaultValue = args[1];
		if (isString$1(args[2])) ret.tDescription = args[2];
		if (typeof args[2] === "object" || typeof args[3] === "object") {
			const options = args[3] || args[2];
			Object.keys(options).forEach((key) => {
				ret[key] = options[key];
			});
		}
		return ret;
	},
	interpolation: {
		escapeValue: true,
		format: (value) => value,
		prefix: "{{",
		suffix: "}}",
		formatSeparator: ",",
		unescapePrefix: "-",
		nestingPrefix: "$t(",
		nestingSuffix: ")",
		nestingOptionsSeparator: ",",
		maxReplaces: 1e3,
		skipOnVariables: true
	},
	cacheInBuiltFormats: true
});
var transformOptions = (options) => {
	if (isString$1(options.ns)) options.ns = [options.ns];
	if (isString$1(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
	if (isString$1(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
	if (options.supportedLngs?.indexOf?.("cimode") < 0) options.supportedLngs = options.supportedLngs.concat(["cimode"]);
	if (typeof options.initImmediate === "boolean") options.initAsync = options.initImmediate;
	return options;
};
var noop$2 = () => {};
var bindMemberFunctions = (inst) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(inst)).forEach((mem) => {
		if (typeof inst[mem] === "function") inst[mem] = inst[mem].bind(inst);
	});
};
var SUPPORT_NOTICE_KEY = "__i18next_supportNoticeShown";
var getSupportNoticeShown = () => {
	if (typeof globalThis !== "undefined" && !!globalThis[SUPPORT_NOTICE_KEY]) return true;
	if (typeof process !== "undefined" && process$1.env && process$1.env.I18NEXT_NO_SUPPORT_NOTICE) return true;
	if (typeof process !== "undefined" && process$1.env && true) return true;
	return false;
};
var setSupportNoticeShown = () => {
	if (typeof globalThis !== "undefined") globalThis[SUPPORT_NOTICE_KEY] = true;
};
var usesLocize = (inst) => {
	if (inst?.modules?.backend?.name?.indexOf("Locize") > 0) return true;
	if (inst?.modules?.backend?.constructor?.name?.indexOf("Locize") > 0) return true;
	if (inst?.options?.backend?.backends) {
		if (inst.options.backend.backends.some((b) => b?.name?.indexOf("Locize") > 0 || b?.constructor?.name?.indexOf("Locize") > 0)) return true;
	}
	if (inst?.options?.backend?.projectId) return true;
	if (inst?.options?.backend?.backendOptions) {
		if (inst.options.backend.backendOptions.some((b) => b?.projectId)) return true;
	}
	return false;
};
var instance = class I18n extends EventEmitter {
	constructor(options = {}, callback) {
		super();
		this.options = transformOptions(options);
		this.services = {};
		this.logger = baseLogger;
		this.modules = { external: [] };
		bindMemberFunctions(this);
		if (callback && !this.isInitialized && !options.isClone) {
			if (!this.options.initAsync) {
				this.init(options, callback);
				return this;
			}
			setTimeout(() => {
				this.init(options, callback);
			}, 0);
		}
	}
	init(options = {}, callback) {
		this.isInitializing = true;
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		if (options.defaultNS == null && options.ns) {
			if (isString$1(options.ns)) options.defaultNS = options.ns;
			else if (options.ns.indexOf("translation") < 0) options.defaultNS = options.ns[0];
		}
		const defOpts = get$1();
		this.options = {
			...defOpts,
			...this.options,
			...transformOptions(options)
		};
		this.options.interpolation = {
			...defOpts.interpolation,
			...this.options.interpolation
		};
		if (options.keySeparator !== void 0) this.options.userDefinedKeySeparator = options.keySeparator;
		if (options.nsSeparator !== void 0) this.options.userDefinedNsSeparator = options.nsSeparator;
		if (typeof this.options.overloadTranslationOptionHandler !== "function") this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
		if (this.options.showSupportNotice !== false && !usesLocize(this) && !getSupportNoticeShown()) {
			if (typeof console !== "undefined" && typeof console.info !== "undefined") console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙");
			setSupportNoticeShown();
		}
		const createClassOnDemand = (ClassOrObject) => {
			if (!ClassOrObject) return null;
			if (typeof ClassOrObject === "function") return new ClassOrObject();
			return ClassOrObject;
		};
		if (!this.options.isClone) {
			if (this.modules.logger) baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
			else baseLogger.init(null, this.options);
			let formatter;
			if (this.modules.formatter) formatter = this.modules.formatter;
			else formatter = Formatter;
			const lu = new LanguageUtil(this.options);
			this.store = new ResourceStore(this.options.resources, this.options);
			const s = this.services;
			s.logger = baseLogger;
			s.resourceStore = this.store;
			s.languageUtils = lu;
			s.pluralResolver = new PluralResolver(lu, {
				prepend: this.options.pluralSeparator,
				simplifyPluralSuffix: this.options.simplifyPluralSuffix
			});
			if (this.options.interpolation.format && this.options.interpolation.format !== defOpts.interpolation.format) this.logger.deprecate(`init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting`);
			if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
				s.formatter = createClassOnDemand(formatter);
				if (s.formatter.init) s.formatter.init(s, this.options);
				this.options.interpolation.format = s.formatter.format.bind(s.formatter);
			}
			s.interpolator = new Interpolator(this.options);
			s.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) };
			s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
			s.backendConnector.on("*", (event, ...args) => {
				this.emit(event, ...args);
			});
			if (this.modules.languageDetector) {
				s.languageDetector = createClassOnDemand(this.modules.languageDetector);
				if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
			}
			if (this.modules.i18nFormat) {
				s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
				if (s.i18nFormat.init) s.i18nFormat.init(this);
			}
			this.translator = new Translator(this.services, this.options);
			this.translator.on("*", (event, ...args) => {
				this.emit(event, ...args);
			});
			this.modules.external.forEach((m) => {
				if (m.init) m.init(this);
			});
		}
		this.format = this.options.interpolation.format;
		if (!callback) callback = noop$2;
		if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
			const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
		}
		if (!this.services.languageDetector && !this.options.lng) this.logger.warn("init: no languageDetector is used and no lng is defined");
		[
			"getResource",
			"hasResourceBundle",
			"getResourceBundle",
			"getDataByLanguage"
		].forEach((fcName) => {
			this[fcName] = (...args) => this.store[fcName](...args);
		});
		[
			"addResource",
			"addResources",
			"addResourceBundle",
			"removeResourceBundle"
		].forEach((fcName) => {
			this[fcName] = (...args) => {
				this.store[fcName](...args);
				return this;
			};
		});
		const deferred = defer();
		const load = () => {
			const finish = (err, t) => {
				this.isInitializing = false;
				if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
				this.isInitialized = true;
				if (!this.options.isClone) this.logger.log("initialized", this.options);
				this.emit("initialized", this.options);
				deferred.resolve(t);
				callback(err, t);
			};
			if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, finish);
		};
		if (this.options.resources || !this.options.initAsync) load();
		else setTimeout(load, 0);
		return deferred;
	}
	loadResources(language, callback = noop$2) {
		let usedCallback = callback;
		const usedLng = isString$1(language) ? language : this.language;
		if (typeof language === "function") usedCallback = language;
		if (!this.options.resources || this.options.partialBundledLanguages) {
			if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
			const toLoad = [];
			const append = (lng) => {
				if (!lng) return;
				if (lng === "cimode") return;
				this.services.languageUtils.toResolveHierarchy(lng).forEach((l) => {
					if (l === "cimode") return;
					if (toLoad.indexOf(l) < 0) toLoad.push(l);
				});
			};
			if (!usedLng) this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => append(l));
			else append(usedLng);
			this.options.preload?.forEach?.((l) => append(l));
			this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
				if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
				usedCallback(e);
			});
		} else usedCallback(null);
	}
	reloadResources(lngs, ns, callback) {
		const deferred = defer();
		if (typeof lngs === "function") {
			callback = lngs;
			lngs = void 0;
		}
		if (typeof ns === "function") {
			callback = ns;
			ns = void 0;
		}
		if (!lngs) lngs = this.languages;
		if (!ns) ns = this.options.ns;
		if (!callback) callback = noop$2;
		this.services.backendConnector.reload(lngs, ns, (err) => {
			deferred.resolve();
			callback(err);
		});
		return deferred;
	}
	use(module) {
		if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		if (module.type === "backend") this.modules.backend = module;
		if (module.type === "logger" || module.log && module.warn && module.error) this.modules.logger = module;
		if (module.type === "languageDetector") this.modules.languageDetector = module;
		if (module.type === "i18nFormat") this.modules.i18nFormat = module;
		if (module.type === "postProcessor") postProcessor.addPostProcessor(module);
		if (module.type === "formatter") this.modules.formatter = module;
		if (module.type === "3rdParty") this.modules.external.push(module);
		return this;
	}
	setResolvedLanguage(l) {
		if (!l || !this.languages) return;
		if (["cimode", "dev"].indexOf(l) > -1) return;
		for (let li = 0; li < this.languages.length; li++) {
			const lngInLngs = this.languages[li];
			if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
			if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
				this.resolvedLanguage = lngInLngs;
				break;
			}
		}
		if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
			this.resolvedLanguage = l;
			this.languages.unshift(l);
		}
	}
	changeLanguage(lng, callback) {
		this.isLanguageChangingTo = lng;
		const deferred = defer();
		this.emit("languageChanging", lng);
		const setLngProps = (l) => {
			this.language = l;
			this.languages = this.services.languageUtils.toResolveHierarchy(l);
			this.resolvedLanguage = void 0;
			this.setResolvedLanguage(l);
		};
		const done = (err, l) => {
			if (l) {
				if (this.isLanguageChangingTo === lng) {
					setLngProps(l);
					this.translator.changeLanguage(l);
					this.isLanguageChangingTo = void 0;
					this.emit("languageChanged", l);
					this.logger.log("languageChanged", l);
				}
			} else this.isLanguageChangingTo = void 0;
			deferred.resolve((...args) => this.t(...args));
			if (callback) callback(err, (...args) => this.t(...args));
		};
		const setLng = (lngs) => {
			if (!lng && !lngs && this.services.languageDetector) lngs = [];
			const fl = isString$1(lngs) ? lngs : lngs && lngs[0];
			const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString$1(lngs) ? [lngs] : lngs);
			if (l) {
				if (!this.language) setLngProps(l);
				if (!this.translator.language) this.translator.changeLanguage(l);
				this.services.languageDetector?.cacheUserLanguage?.(l);
			}
			this.loadResources(l, (err) => {
				done(err, l);
			});
		};
		if (!lng && this.services.languageDetector && !this.services.languageDetector.async) setLng(this.services.languageDetector.detect());
		else if (!lng && this.services.languageDetector && this.services.languageDetector.async) if (this.services.languageDetector.detect.length === 0) this.services.languageDetector.detect().then(setLng);
		else this.services.languageDetector.detect(setLng);
		else setLng(lng);
		return deferred;
	}
	getFixedT(lng, ns, keyPrefix) {
		const fixedT = (key, opts, ...rest) => {
			let o;
			if (typeof opts !== "object") o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
			else o = { ...opts };
			o.lng = o.lng || fixedT.lng;
			o.lngs = o.lngs || fixedT.lngs;
			o.ns = o.ns || fixedT.ns;
			if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
			const selectorOpts = {
				...this.options,
				...o
			};
			if (typeof o.keyPrefix === "function") o.keyPrefix = keysFromSelector(o.keyPrefix, selectorOpts);
			const keySeparator = this.options.keySeparator || ".";
			let resultKey;
			if (o.keyPrefix && Array.isArray(key)) resultKey = key.map((k) => {
				if (typeof k === "function") k = keysFromSelector(k, selectorOpts);
				return `${o.keyPrefix}${keySeparator}${k}`;
			});
			else {
				if (typeof key === "function") key = keysFromSelector(key, selectorOpts);
				resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
			}
			return this.t(resultKey, o);
		};
		if (isString$1(lng)) fixedT.lng = lng;
		else fixedT.lngs = lng;
		fixedT.ns = ns;
		fixedT.keyPrefix = keyPrefix;
		return fixedT;
	}
	t(...args) {
		return this.translator?.translate(...args);
	}
	exists(...args) {
		return this.translator?.exists(...args);
	}
	setDefaultNamespace(ns) {
		this.options.defaultNS = ns;
	}
	hasLoadedNamespace(ns, options = {}) {
		if (!this.isInitialized) {
			this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
			return false;
		}
		if (!this.languages || !this.languages.length) {
			this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
			return false;
		}
		const lng = options.lng || this.resolvedLanguage || this.languages[0];
		const fallbackLng = this.options ? this.options.fallbackLng : false;
		const lastLng = this.languages[this.languages.length - 1];
		if (lng.toLowerCase() === "cimode") return true;
		const loadNotPending = (l, n) => {
			const loadState = this.services.backendConnector.state[`${l}|${n}`];
			return loadState === -1 || loadState === 0 || loadState === 2;
		};
		if (options.precheck) {
			const preResult = options.precheck(this, loadNotPending);
			if (preResult !== void 0) return preResult;
		}
		if (this.hasResourceBundle(lng, ns)) return true;
		if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
		if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
		return false;
	}
	loadNamespaces(ns, callback) {
		const deferred = defer();
		if (!this.options.ns) {
			if (callback) callback();
			return Promise.resolve();
		}
		if (isString$1(ns)) ns = [ns];
		ns.forEach((n) => {
			if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
		});
		this.loadResources((err) => {
			deferred.resolve();
			if (callback) callback(err);
		});
		return deferred;
	}
	loadLanguages(lngs, callback) {
		const deferred = defer();
		if (isString$1(lngs)) lngs = [lngs];
		const preloaded = this.options.preload || [];
		const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
		if (!newLngs.length) {
			if (callback) callback();
			return Promise.resolve();
		}
		this.options.preload = preloaded.concat(newLngs);
		this.loadResources((err) => {
			deferred.resolve();
			if (callback) callback(err);
		});
		return deferred;
	}
	dir(lng) {
		if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
		if (!lng) return "rtl";
		try {
			const l = new Intl.Locale(lng);
			if (l && l.getTextInfo) {
				const ti = l.getTextInfo();
				if (ti && ti.direction) return ti.direction;
			}
		} catch (e) {}
		const rtlLngs = [
			"ar",
			"shu",
			"sqr",
			"ssh",
			"xaa",
			"yhd",
			"yud",
			"aao",
			"abh",
			"abv",
			"acm",
			"acq",
			"acw",
			"acx",
			"acy",
			"adf",
			"ads",
			"aeb",
			"aec",
			"afb",
			"ajp",
			"apc",
			"apd",
			"arb",
			"arq",
			"ars",
			"ary",
			"arz",
			"auz",
			"avl",
			"ayh",
			"ayl",
			"ayn",
			"ayp",
			"bbz",
			"pga",
			"he",
			"iw",
			"ps",
			"pbt",
			"pbu",
			"pst",
			"prp",
			"prd",
			"ug",
			"ur",
			"ydd",
			"yds",
			"yih",
			"ji",
			"yi",
			"hbo",
			"men",
			"xmn",
			"fa",
			"jpr",
			"peo",
			"pes",
			"prs",
			"dv",
			"sam",
			"ckb"
		];
		const languageUtils = this.services?.languageUtils || new LanguageUtil(get$1());
		if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
		return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(options = {}, callback) {
		const instance = new I18n(options, callback);
		instance.createInstance = I18n.createInstance;
		return instance;
	}
	cloneInstance(options = {}, callback = noop$2) {
		const forkResourceStore = options.forkResourceStore;
		if (forkResourceStore) delete options.forkResourceStore;
		const mergedOptions = {
			...this.options,
			...options,
			isClone: true
		};
		const clone = new I18n(mergedOptions);
		if (options.debug !== void 0 || options.prefix !== void 0) clone.logger = clone.logger.clone(options);
		[
			"store",
			"services",
			"language"
		].forEach((m) => {
			clone[m] = this[m];
		});
		clone.services = { ...this.services };
		clone.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
		if (forkResourceStore) {
			clone.store = new ResourceStore(Object.keys(this.store.data).reduce((prev, l) => {
				prev[l] = { ...this.store.data[l] };
				prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
					acc[n] = { ...prev[l][n] };
					return acc;
				}, prev[l]);
				return prev;
			}, {}), mergedOptions);
			clone.services.resourceStore = clone.store;
		}
		if (options.interpolation) {
			const mergedInterpolation = {
				...get$1().interpolation,
				...this.options.interpolation,
				...options.interpolation
			};
			const mergedForInterpolator = {
				...mergedOptions,
				interpolation: mergedInterpolation
			};
			clone.services.interpolator = new Interpolator(mergedForInterpolator);
		}
		clone.translator = new Translator(clone.services, mergedOptions);
		clone.translator.on("*", (event, ...args) => {
			clone.emit(event, ...args);
		});
		clone.init(mergedOptions, callback);
		clone.translator.options = mergedOptions;
		clone.translator.backendConnector.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
		return clone;
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage
		};
	}
}.createInstance();
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
var t$1 = instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
//#endregion
//#region ../../node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var import_void_elements = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This file automatically generated from `pre-publish.js`.
	* Do not manually edit.
	*/
	module.exports = {
		"area": true,
		"base": true,
		"br": true,
		"col": true,
		"embed": true,
		"hr": true,
		"img": true,
		"input": true,
		"link": true,
		"meta": true,
		"param": true,
		"source": true,
		"track": true,
		"wbr": true
	};
})))());
var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function n(n) {
	var r = {
		type: "tag",
		name: "",
		voidElement: !1,
		attrs: {},
		children: []
	}, i = n.match(/<\/?([^\s]+?)[/\s>]/);
	if (i && (r.name = i[1], (import_void_elements.default[i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
		var s = n.indexOf("-->");
		return {
			type: "comment",
			comment: -1 !== s ? n.slice(4, s) : ""
		};
	}
	for (var a = new RegExp(t), c = null; null !== (c = a.exec(n));) if (c[0].trim()) if (c[1]) {
		var o = c[1].trim(), l = [o, ""];
		o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
	} else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
	return r;
}
var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, i = /^\s*$/, s = Object.create(null);
function a(e, t) {
	switch (t.type) {
		case "text": return e + t.content;
		case "tag": return e += "<" + t.name + (t.attrs ? function(e) {
			var t = [];
			for (var n in e) t.push(n + "=\"" + e[n] + "\"");
			return t.length ? " " + t.join(" ") : "";
		}(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";
		case "comment": return e + "<!--" + t.comment + "-->";
	}
}
var c = {
	parse: function(e, t) {
		t || (t = {}), t.components || (t.components = s);
		var a, c = [], o = [], l = -1, m = !1;
		if (0 !== e.indexOf("<")) {
			var u = e.indexOf("<");
			c.push({
				type: "text",
				content: -1 === u ? e : e.substring(0, u)
			});
		}
		return e.replace(r, function(r, s) {
			if (m) {
				if (r !== "</" + a.name + ">") return;
				m = !1;
			}
			var u, f = "/" !== r.charAt(1), h = r.startsWith("<!--"), p = s + r.length, d = e.charAt(p);
			if (h) {
				var v = n(r);
				return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
			}
			if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
				type: "text",
				content: e.slice(p, e.indexOf("<", p))
			}), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
				u = -1 === l ? c : o[l].children;
				var x = e.indexOf("<", p), g = e.slice(p, -1 === x ? void 0 : x);
				i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
					type: "text",
					content: g
				});
			}
		}), c;
	},
	stringify: function(e) {
		return e.reduce(function(e, t) {
			return e + a("", t);
		}, "");
	}
};
//#endregion
//#region ../../node_modules/react-i18next/dist/es/utils.js
var warn = (i18n, code, msg, rest) => {
	const args = [msg, {
		code,
		...rest || {}
	}];
	if (i18n?.services?.logger?.forward) return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
	if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
	if (i18n?.services?.logger?.warn) i18n.services.logger.warn(...args);
	else if (console?.warn) console.warn(...args);
};
var alreadyWarned = {};
var warnOnce = (i18n, code, msg, rest) => {
	if (isString(msg) && alreadyWarned[msg]) return;
	if (isString(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
	warn(i18n, code, msg, rest);
};
var loadedClb = (i18n, cb) => () => {
	if (i18n.isInitialized) cb();
	else {
		const initialized = () => {
			setTimeout(() => {
				i18n.off("initialized", initialized);
			}, 0);
			cb();
		};
		i18n.on("initialized", initialized);
	}
};
var loadNamespaces = (i18n, ns, cb) => {
	i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
var loadLanguages = (i18n, lng, ns, cb) => {
	if (isString(ns)) ns = [ns];
	if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
	ns.forEach((n) => {
		if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
	});
	i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
var hasLoadedNamespace = (ns, i18n, options = {}) => {
	if (!i18n.languages || !i18n.languages.length) {
		warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: i18n.languages });
		return true;
	}
	return i18n.hasLoadedNamespace(ns, {
		lng: options.lng,
		precheck: (i18nInstance, loadNotPending) => {
			if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
		}
	});
};
var isString = (obj) => typeof obj === "string";
var isObject = (obj) => typeof obj === "object" && obj !== null;
//#endregion
//#region ../../node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
};
var unescapeHtmlEntity = (m) => htmlEntities[m];
var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
//#endregion
//#region ../../node_modules/react-i18next/dist/es/defaults.js
var defaultOptions$1 = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: true,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: true,
	unescape,
	transDefaultProps: void 0
};
var setDefaults = (options = {}) => {
	defaultOptions$1 = {
		...defaultOptions$1,
		...options
	};
};
var getDefaults = () => defaultOptions$1;
//#endregion
//#region ../../node_modules/react-i18next/dist/es/i18nInstance.js
var i18nInstance;
var setI18n = (instance) => {
	i18nInstance = instance;
};
var getI18n = () => i18nInstance;
//#endregion
//#region ../../node_modules/react-i18next/dist/es/TransWithoutContext.js
var hasChildren = (node, checkLength) => {
	if (!node) return false;
	const base = node.props?.children ?? node.children;
	if (checkLength) return base.length > 0;
	return !!base;
};
var getChildren = (node) => {
	if (!node) return [];
	const children = node.props?.children ?? node.children;
	return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
};
var hasValidReactChildren = (children) => Array.isArray(children) && children.every(import_react.isValidElement);
var getAsArray = (data) => Array.isArray(data) ? data : [data];
var mergeProps = (source, target) => {
	const newTarget = { ...target };
	newTarget.props = {
		...target.props,
		...source.props
	};
	return newTarget;
};
var getValuesFromChildren = (children) => {
	const values = {};
	if (!children) return values;
	const getData = (childs) => {
		getAsArray(childs).forEach((child) => {
			if (isString(child)) return;
			if (hasChildren(child)) getData(getChildren(child));
			else if (isObject(child) && !(0, import_react.isValidElement)(child)) Object.assign(values, child);
		});
	};
	getData(children);
	return values;
};
var nodesToString = (children, i18nOptions, i18n, i18nKey) => {
	if (!children) return "";
	let stringNode = "";
	const childrenArray = getAsArray(children);
	const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
	childrenArray.forEach((child, childIndex) => {
		if (isString(child)) {
			stringNode += `${child}`;
			return;
		}
		if ((0, import_react.isValidElement)(child)) {
			const { props, type } = child;
			const childPropsCount = Object.keys(props).length;
			const shouldKeepChild = keepArray.indexOf(type) > -1;
			const childChildren = props.children;
			if (!childChildren && shouldKeepChild && !childPropsCount) {
				stringNode += `<${type}/>`;
				return;
			}
			if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
				stringNode += `<${childIndex}></${childIndex}>`;
				return;
			}
			if (shouldKeepChild && childPropsCount === 1 && isString(childChildren)) {
				stringNode += `<${type}>${childChildren}</${type}>`;
				return;
			}
			const content = nodesToString(childChildren, i18nOptions, i18n, i18nKey);
			stringNode += `<${childIndex}>${content}</${childIndex}>`;
			return;
		}
		if (child === null) {
			warn(i18n, "TRANS_NULL_VALUE", `Passed in a null value as child`, { i18nKey });
			return;
		}
		if (isObject(child)) {
			const { format, ...clone } = child;
			const keys = Object.keys(clone);
			if (keys.length === 1) {
				const value = format ? `${keys[0]}, ${format}` : keys[0];
				stringNode += `{{${value}}}`;
				return;
			}
			warn(i18n, "TRANS_INVALID_OBJ", `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
				i18nKey,
				child
			});
			return;
		}
		warn(i18n, "TRANS_INVALID_VAR", `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
			i18nKey,
			child
		});
	});
	return stringNode;
};
var escapeLiteralLessThan = (str, keepArray = [], knownComponentsMap = {}) => {
	if (!str) return str;
	const knownNames = Object.keys(knownComponentsMap);
	const allValidNames = [...keepArray, ...knownNames];
	let result = "";
	let i = 0;
	while (i < str.length) if (str[i] === "<") {
		let isValidTag = false;
		const closingMatch = str.slice(i).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9_-]*)>/);
		if (closingMatch) {
			const tagName = closingMatch[1];
			if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
				isValidTag = true;
				result += closingMatch[0];
				i += closingMatch[0].length;
			}
		}
		if (!isValidTag) {
			const openingMatch = str.slice(i).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9_-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
			if (openingMatch) {
				const tagName = openingMatch[1];
				if (/^\d+$/.test(tagName) || allValidNames.includes(tagName)) {
					isValidTag = true;
					result += openingMatch[0];
					i += openingMatch[0].length;
				}
			}
		}
		if (!isValidTag) {
			result += "&lt;";
			i += 1;
		}
	} else {
		result += str[i];
		i += 1;
	}
	return result;
};
var renderNodes = (children, knownComponentsMap, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) => {
	if (targetString === "") return [];
	const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
	const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map((keep) => `<${keep}`).join("|")).test(targetString);
	if (!children && !knownComponentsMap && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
	const data = knownComponentsMap ?? {};
	const getData = (childs) => {
		getAsArray(childs).forEach((child) => {
			if (isString(child)) return;
			if (hasChildren(child)) getData(getChildren(child));
			else if (isObject(child) && !(0, import_react.isValidElement)(child)) Object.assign(data, child);
		});
	};
	getData(children);
	const escapedString = escapeLiteralLessThan(targetString, keepArray, data);
	const ast = c.parse(`<0>${escapedString}</0>`);
	const opts = {
		...data,
		...combinedTOpts
	};
	const renderInner = (child, node, rootReactNode) => {
		const childs = getChildren(child);
		const mappedChildren = mapAST(childs, node.children, rootReactNode);
		return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
	};
	const pushTranslatedJSX = (child, inner, mem, i, isVoid) => {
		if (child.dummy) {
			child.children = inner;
			mem.push((0, import_react.cloneElement)(child, { key: i }, isVoid ? void 0 : inner));
		} else mem.push(...import_react.Children.map([child], (c) => {
			const INTERNAL_DYNAMIC_MARKER = "data-i18n-is-dynamic-list";
			const override = {
				key: i,
				[INTERNAL_DYNAMIC_MARKER]: void 0
			};
			if (c && c.props) Object.keys(c.props).forEach((k) => {
				if (k === "ref" || k === "children" || k === "i18nIsDynamicList" || k === INTERNAL_DYNAMIC_MARKER) return;
				override[k] = c.props[k];
			});
			return (0, import_react.cloneElement)(c, override, isVoid ? null : inner);
		}));
	};
	const mapAST = (reactNode, astNode, rootReactNode) => {
		const reactNodes = getAsArray(reactNode);
		return getAsArray(astNode).reduce((mem, node, i) => {
			const translationContent = node.children?.[0]?.content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
			if (node.type === "tag") {
				let tmp = reactNodes[parseInt(node.name, 10)];
				if (!tmp && knownComponentsMap) tmp = knownComponentsMap[node.name];
				if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
				if (!tmp) tmp = {};
				const props = { ...node.attrs };
				if (shouldUnescape) Object.keys(props).forEach((p) => {
					const val = props[p];
					if (isString(val)) props[p] = unescape(val);
				});
				const child = Object.keys(props).length !== 0 ? mergeProps({ props }, tmp) : tmp;
				const isElement = (0, import_react.isValidElement)(child);
				const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
				const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && isObject(child) && child.dummy && !isElement;
				const isKnownComponent = isObject(knownComponentsMap) && Object.hasOwnProperty.call(knownComponentsMap, node.name);
				if (isString(child)) {
					const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
					mem.push(value);
				} else if (hasChildren(child) || isValidTranslationWithChildren) pushTranslatedJSX(child, renderInner(child, node, rootReactNode), mem, i);
				else if (isEmptyTransWithHTML) pushTranslatedJSX(child, mapAST(reactNodes, node.children, rootReactNode), mem, i);
				else if (Number.isNaN(parseFloat(node.name))) if (isKnownComponent) pushTranslatedJSX(child, renderInner(child, node, rootReactNode), mem, i, node.voidElement);
				else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) if (node.voidElement) mem.push((0, import_react.createElement)(node.name, { key: `${node.name}-${i}` }));
				else {
					const inner = mapAST(reactNodes, node.children, rootReactNode);
					mem.push((0, import_react.createElement)(node.name, { key: `${node.name}-${i}` }, inner));
				}
				else if (node.voidElement) mem.push(`<${node.name} />`);
				else {
					const inner = mapAST(reactNodes, node.children, rootReactNode);
					mem.push(`<${node.name}>${inner}</${node.name}>`);
				}
				else if (isObject(child) && !isElement) {
					const content = node.children[0] ? translationContent : null;
					if (content) mem.push(content);
				} else pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
			} else if (node.type === "text") {
				const wrapTextNodes = i18nOptions.transWrapTextNodes;
				const unescapeFn = typeof i18nOptions.unescape === "function" ? i18nOptions.unescape : getDefaults().unescape;
				const content = shouldUnescape ? unescapeFn(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
				if (wrapTextNodes) mem.push((0, import_react.createElement)(wrapTextNodes, { key: `${node.name}-${i}` }, content));
				else mem.push(content);
			}
			return mem;
		}, []);
	};
	return getChildren(mapAST([{
		dummy: true,
		children: children || []
	}], ast, getAsArray(children || []))[0]);
};
var fixComponentProps = (component, index, translation) => {
	const componentKey = component.key || index;
	const comp = (0, import_react.cloneElement)(component, { key: componentKey });
	if (!comp.props || !comp.props.children || translation.indexOf(`${index}/>`) < 0 && translation.indexOf(`${index} />`) < 0) return comp;
	function Componentized() {
		return (0, import_react.createElement)(import_react.Fragment, null, comp);
	}
	return (0, import_react.createElement)(Componentized, { key: componentKey });
};
var generateArrayComponents = (components, translation) => components.map((c, index) => fixComponentProps(c, index, translation));
var generateObjectComponents = (components, translation) => {
	const componentMap = {};
	Object.keys(components).forEach((c) => {
		Object.assign(componentMap, { [c]: fixComponentProps(components[c], c, translation) });
	});
	return componentMap;
};
var generateComponents = (components, translation, i18n, i18nKey) => {
	if (!components) return null;
	if (Array.isArray(components)) return generateArrayComponents(components, translation);
	if (isObject(components)) return generateObjectComponents(components, translation);
	warnOnce(i18n, "TRANS_INVALID_COMPONENTS", `<Trans /> "components" prop expects an object or array`, { i18nKey });
	return null;
};
var isComponentsMap = (object) => {
	if (!isObject(object)) return false;
	if (Array.isArray(object)) return false;
	return Object.keys(object).reduce((acc, key) => acc && Number.isNaN(Number.parseFloat(key)), true);
};
function Trans$1({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
	const i18n = i18nFromProps || getI18n();
	if (!i18n) {
		warnOnce(i18n, "NO_I18NEXT_INSTANCE", `Trans: You need to pass in an i18next instance using i18nextReactModule`, { i18nKey });
		return children;
	}
	const t = tFromProps || i18n.t.bind(i18n) || ((k) => k);
	const reactI18nextOptions = {
		...getDefaults(),
		...i18n.options?.react
	};
	let namespaces = ns || t.ns || i18n.options?.defaultNS;
	namespaces = isString(namespaces) ? [namespaces] : namespaces || ["translation"];
	const { transDefaultProps } = reactI18nextOptions;
	const mergedTOptions = transDefaultProps?.tOptions ? {
		...transDefaultProps.tOptions,
		...tOptions
	} : tOptions;
	const mergedShouldUnescape = shouldUnescape ?? transDefaultProps?.shouldUnescape;
	const mergedValues = transDefaultProps?.values ? {
		...transDefaultProps.values,
		...values
	} : values;
	const mergedComponents = transDefaultProps?.components ? {
		...transDefaultProps.components,
		...components
	} : components;
	const nodeAsString = nodesToString(children, reactI18nextOptions, i18n, i18nKey);
	const defaultValue = defaults || mergedTOptions?.defaultValue || nodeAsString || reactI18nextOptions.transEmptyNodeValue || (typeof i18nKey === "function" ? keysFromSelector(i18nKey) : i18nKey);
	const { hashTransKey } = reactI18nextOptions;
	const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
	if (i18n.options?.interpolation?.defaultVariables) values = mergedValues && Object.keys(mergedValues).length > 0 ? {
		...mergedValues,
		...i18n.options.interpolation.defaultVariables
	} : { ...i18n.options.interpolation.defaultVariables };
	else values = mergedValues;
	const valuesFromChildren = getValuesFromChildren(children);
	if (valuesFromChildren && typeof valuesFromChildren.count === "number" && count === void 0) count = valuesFromChildren.count;
	const interpolationOverride = values || count !== void 0 && !i18n.options?.interpolation?.alwaysFormat || !children ? mergedTOptions.interpolation : { interpolation: {
		...mergedTOptions.interpolation,
		prefix: "#$?",
		suffix: "?$#"
	} };
	const combinedTOpts = {
		...mergedTOptions,
		context: context || mergedTOptions.context,
		count,
		...values,
		...interpolationOverride,
		defaultValue,
		ns: namespaces
	};
	let translation = key ? t(key, combinedTOpts) : defaultValue;
	if (translation === key && defaultValue) translation = defaultValue;
	const generatedComponents = generateComponents(mergedComponents, translation, i18n, i18nKey);
	let indexedChildren = generatedComponents || children;
	let componentsMap = null;
	if (isComponentsMap(generatedComponents)) {
		componentsMap = generatedComponents;
		indexedChildren = children;
	}
	const content = renderNodes(indexedChildren, componentsMap, translation, i18n, reactI18nextOptions, combinedTOpts, mergedShouldUnescape);
	const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
	return useAsParent ? (0, import_react.createElement)(useAsParent, additionalProps, content) : content;
}
//#endregion
//#region ../../node_modules/react-i18next/dist/es/initReactI18next.js
var initReactI18next = {
	type: "3rdParty",
	init(instance) {
		setDefaults(instance.options.react);
		setI18n(instance);
	}
};
//#endregion
//#region ../../node_modules/react-i18next/dist/es/context.js
var I18nContext = (0, import_react.createContext)();
var ReportNamespaces = class {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(namespaces) {
		namespaces.forEach((ns) => {
			if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
};
//#endregion
//#region ../../node_modules/react-i18next/dist/es/Trans.js
function Trans({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
	const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, import_react.useContext)(I18nContext) || {};
	const i18n = i18nFromProps || i18nFromContext || getI18n();
	const t = tFromProps || i18n?.t.bind(i18n);
	return Trans$1({
		children,
		count,
		parent,
		i18nKey,
		context,
		tOptions,
		values,
		defaults,
		components,
		ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
		i18n,
		t: tFromProps,
		shouldUnescape,
		...additionalProps
	});
}
//#endregion
//#region ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
//#endregion
//#region ../../node_modules/use-sync-external-store/shim/index.js
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
//#endregion
//#region ../../node_modules/react-i18next/dist/es/useTranslation.js
var import_shim = require_shim();
var notReadyT = (k, optsOrDefaultValue) => {
	if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
	if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
	if (typeof k === "function") return "";
	if (Array.isArray(k)) {
		const last = k[k.length - 1];
		return typeof last === "function" ? "" : last;
	}
	return k;
};
var notReadySnapshot = {
	t: notReadyT,
	ready: false
};
var dummySubscribe = () => () => {};
var useTranslation = (ns, props = {}) => {
	const { i18n: i18nFromProps } = props;
	const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, import_react.useContext)(I18nContext) || {};
	const i18n = i18nFromProps || i18nFromContext || getI18n();
	if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
	if (!i18n) warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
	const i18nOptions = (0, import_react.useMemo)(() => ({
		...getDefaults(),
		...i18n?.options?.react,
		...props
	}), [i18n, props]);
	const { useSuspense, keyPrefix } = i18nOptions;
	const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
	const unstableNamespaces = isString(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
	const namespaces = (0, import_react.useMemo)(() => unstableNamespaces, unstableNamespaces);
	i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
	const revisionRef = (0, import_react.useRef)(0);
	const subscribe = (0, import_react.useCallback)((callback) => {
		if (!i18n) return dummySubscribe;
		const { bindI18n, bindI18nStore } = i18nOptions;
		const wrappedCallback = () => {
			revisionRef.current += 1;
			callback();
		};
		if (bindI18n) i18n.on(bindI18n, wrappedCallback);
		if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
		return () => {
			if (bindI18n) bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
			if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
		};
	}, [i18n, i18nOptions]);
	const snapshotRef = (0, import_react.useRef)();
	const getSnapshot = (0, import_react.useCallback)(() => {
		if (!i18n) return notReadySnapshot;
		const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
		const currentLng = props.lng || i18n.language;
		const currentRevision = revisionRef.current;
		const lastSnapshot = snapshotRef.current;
		if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) return lastSnapshot;
		const newSnapshot = {
			t: i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix),
			ready: calculatedReady,
			lng: currentLng,
			keyPrefix,
			revision: currentRevision
		};
		snapshotRef.current = newSnapshot;
		return newSnapshot;
	}, [
		i18n,
		namespaces,
		keyPrefix,
		i18nOptions,
		props.lng
	]);
	const [loadCount, setLoadCount] = (0, import_react.useState)(0);
	const { t, ready } = (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
	(0, import_react.useEffect)(() => {
		if (i18n && !ready && !useSuspense) {
			const onLoaded = () => setLoadCount((c) => c + 1);
			if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
			else loadNamespaces(i18n, namespaces, onLoaded);
		}
	}, [
		i18n,
		props.lng,
		namespaces,
		ready,
		useSuspense,
		loadCount
	]);
	const finalI18n = i18n || {};
	const wrapperRef = (0, import_react.useRef)(null);
	const wrapperLangRef = (0, import_react.useRef)();
	const createI18nWrapper = (original) => {
		const descriptors = Object.getOwnPropertyDescriptors(original);
		if (descriptors.__original) delete descriptors.__original;
		const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
		if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) try {
			Object.defineProperty(wrapper, "__original", {
				value: original,
				writable: false,
				enumerable: false,
				configurable: false
			});
		} catch (_) {}
		return wrapper;
	};
	const ret = (0, import_react.useMemo)(() => {
		const original = finalI18n;
		const lang = original?.language;
		let i18nWrapper = original;
		if (original) if (wrapperRef.current && wrapperRef.current.__original === original) if (wrapperLangRef.current !== lang) {
			i18nWrapper = createI18nWrapper(original);
			wrapperRef.current = i18nWrapper;
			wrapperLangRef.current = lang;
		} else i18nWrapper = wrapperRef.current;
		else {
			i18nWrapper = createI18nWrapper(original);
			wrapperRef.current = i18nWrapper;
			wrapperLangRef.current = lang;
		}
		const effectiveT = !ready && !useSuspense ? (...args) => {
			warnOnce(i18n, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
			return t(...args);
		} : t;
		const arr = [
			effectiveT,
			i18nWrapper,
			ready
		];
		arr.t = effectiveT;
		arr.i18n = i18nWrapper;
		arr.ready = ready;
		return arr;
	}, [
		t,
		finalI18n,
		ready,
		finalI18n.resolvedLanguage,
		finalI18n.language,
		finalI18n.languages
	]);
	if (i18n && useSuspense && !ready) throw new Promise((resolve) => {
		const onLoaded = () => resolve();
		if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
		else loadNamespaces(i18n, namespaces, onLoaded);
	});
	return ret;
};
//#endregion
//#region ../../node_modules/i18next-resources-to-backend/dist/esm/index.js
var resourcesToBackend = function resourcesToBackend(res) {
	return {
		type: "backend",
		init: function init(services, backendOptions, i18nextOptions) {},
		read: function read(language, namespace, callback) {
			if (typeof res === "function") {
				if (res.length < 3) {
					try {
						var r = res(language, namespace);
						if (r && typeof r.then === "function") r.then(function(data) {
							return callback(null, data && data.default || data);
						}).catch(callback);
						else callback(null, r);
					} catch (err) {
						callback(err);
					}
					return;
				}
				res(language, namespace, callback);
				return;
			}
			callback(null, res && res[language] && res[language][namespace]);
		}
	};
};
//#endregion
//#region src/languages.ts
var languages = /* @__PURE__ */ Object.assign({
	"/locale/aii.json": () => __vitePreload(() => import("./aii.R288nkii.chunk.js"), []),
	"/locale/ar.json": () => __vitePreload(() => import("./ar.Cby4k9Wp.chunk.js"), []),
	"/locale/ars.json": () => __vitePreload(() => import("./ars.BQc7Adhz.chunk.js"), []),
	"/locale/bg.json": () => __vitePreload(() => import("./bg.JjmkLj7X.chunk.js"), []),
	"/locale/bn.json": () => __vitePreload(() => import("./bn.CdUA4qCj.chunk.js"), []),
	"/locale/ca.json": () => __vitePreload(() => import("./ca.BL5UdgOy.chunk.js"), []),
	"/locale/cs.json": () => __vitePreload(() => import("./cs.C7d-V1Xg.chunk.js"), []),
	"/locale/da.json": () => __vitePreload(() => import("./da.Cu7rsnOo.chunk.js"), []),
	"/locale/de.json": () => __vitePreload(() => import("./de.CkBuqMP5.chunk.js"), []),
	"/locale/el.json": () => __vitePreload(() => import("./el.wws9lbJz.chunk.js"), []),
	"/locale/en-GB.json": () => __vitePreload(() => import("./en-GB.CdfNsXeo.chunk.js"), []),
	"/locale/en.json": () => __vitePreload(() => import("./en.DlM3X-yJ.chunk.js"), []),
	"/locale/es.json": () => __vitePreload(() => import("./es.BEfQ4hnk.chunk.js"), []),
	"/locale/et.json": () => __vitePreload(() => import("./et.o3OCLS5C.chunk.js"), []),
	"/locale/fa.json": () => __vitePreload(() => import("./fa.Cd_MqAyD.chunk.js"), []),
	"/locale/fi.json": () => __vitePreload(() => import("./fi.CMbIozm8.chunk.js"), []),
	"/locale/fil.json": () => __vitePreload(() => import("./fil.CtYaEYaS.chunk.js"), []),
	"/locale/fr-CA.json": () => __vitePreload(() => import("./fr-CA.BRfU9OeR.chunk.js"), []),
	"/locale/fr.json": () => __vitePreload(() => import("./fr._o53DyS8.chunk.js"), []),
	"/locale/gl.json": () => __vitePreload(() => import("./gl.CsQcULOs.chunk.js"), []),
	"/locale/he.json": () => __vitePreload(() => import("./he.BXXXI1P0.chunk.js"), []),
	"/locale/hi.json": () => __vitePreload(() => import("./hi.DsR4adEz.chunk.js"), []),
	"/locale/hu.json": () => __vitePreload(() => import("./hu.V0Fl1oJ9.chunk.js"), []),
	"/locale/id.json": () => __vitePreload(() => import("./id.DTVB7k8-.chunk.js"), []),
	"/locale/it.json": () => __vitePreload(() => import("./it.B1JkV0JT.chunk.js"), []),
	"/locale/ja.json": () => __vitePreload(() => import("./ja.7fxabqEo.chunk.js"), []),
	"/locale/ko.json": () => __vitePreload(() => import("./ko.BhBWFtYx.chunk.js"), []),
	"/locale/lt.json": () => __vitePreload(() => import("./lt.C74QFy2U.chunk.js"), []),
	"/locale/nb-NO.json": () => __vitePreload(() => import("./nb-NO.m8Iv1We6.chunk.js"), []),
	"/locale/nl.json": () => __vitePreload(() => import("./nl.D21VBKP_.chunk.js"), []),
	"/locale/pl.json": () => __vitePreload(() => import("./pl.BRedzCFz.chunk.js"), []),
	"/locale/pt-BR.json": () => __vitePreload(() => import("./pt-BR.CsuEH9WQ.chunk.js"), []),
	"/locale/pt.json": () => __vitePreload(() => import("./pt.BNNs8hEf.chunk.js"), []),
	"/locale/ro.json": () => __vitePreload(() => import("./ro.Bkt9ECp0.chunk.js"), []),
	"/locale/ru.json": () => __vitePreload(() => import("./ru.xc2kaHyu.chunk.js"), []),
	"/locale/sk.json": () => __vitePreload(() => import("./sk.BIT9mQFC.chunk.js"), []),
	"/locale/sl.json": () => __vitePreload(() => import("./sl.uQODHXVk.chunk.js"), []),
	"/locale/sq.json": () => __vitePreload(() => import("./sq.BVJXGOJY.chunk.js"), []),
	"/locale/sr.json": () => __vitePreload(() => import("./sr.C8YLSkl4.chunk.js"), []),
	"/locale/sv.json": () => __vitePreload(() => import("./sv.COHKW9bY.chunk.js"), []),
	"/locale/ta.json": () => __vitePreload(() => import("./ta.1A4U4yN8.chunk.js"), []),
	"/locale/th.json": () => __vitePreload(() => import("./th.hIru4NuH.chunk.js"), []),
	"/locale/tr.json": () => __vitePreload(() => import("./tr.lbsgZwax.chunk.js"), []),
	"/locale/uk.json": () => __vitePreload(() => import("./uk.q1Yja-vf.chunk.js"), []),
	"/locale/vi.json": () => __vitePreload(() => import("./vi.DrJuQ2wf.chunk.js"), []),
	"/locale/zh-Hans.json": () => __vitePreload(() => import("./zh-Hans.CvKWj-z7.chunk.js"), []),
	"/locale/zh-Hant.json": () => __vitePreload(() => import("./zh-Hant.Dfe_FJkD.chunk.js"), [])
});
//#endregion
//#region src/i18n.ts
var availableLanguages = isPlaywright ? [] : Object.keys(languages).map((path) => path.split("/")[2].split(".")[0]);
var isLanguageAvailable = (language) => Object.hasOwn(languages, `/locale/${language}.json`);
var loadLanguage = (language) => {
	if (!isLanguageAvailable(language)) throw new Error(`Unknown locale ${language}`);
	return languages[`/locale/${language}.json`]();
};
instance.use(initReactI18next).use(resourcesToBackend(loadLanguage)).init({
	lng: "en",
	nsSeparator: false,
	keySeparator: false,
	fallbackLng: false,
	interpolation: { escapeValue: false },
	react: { transSupportBasicHtmlNodes: false }
});
var resolveLanguage = (language) => {
	if (language === "en") return "en";
	if (isLanguageAvailable(language)) return language;
	const lowercaseLanguage = language.toLowerCase();
	if (lowercaseLanguage !== language) {
		console.info(`Unknown locale ${language}, falling back to ${lowercaseLanguage}`);
		return resolveLanguage(lowercaseLanguage);
	}
	if (language.includes("-")) {
		const fallback = language.split("-")[0];
		console.info(`Unknown locale ${language}, falling back to ${fallback}`);
		return resolveLanguage(fallback);
	}
};
var setI18NextLanguage = (language) => {
	const defaultLanguages = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language || "en"];
	const languagesToTry = language ? [language] : defaultLanguages;
	let resolved;
	for (const lang of languagesToTry) {
		resolved = resolveLanguage(lang);
		if (resolved) break;
	}
	if (!resolved) {
		console.info(language ? `Unknown locale ${language}, falling back to en` : `Unknown locales [${languagesToTry.join(", ")}] falling back to en`);
		resolved = "en";
	}
	if (resolved === instance.language) return;
	instance.changeLanguage(resolved);
};
//#endregion
//#region ../../node_modules/react-dom/cjs/react-dom.production.js
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	}, REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.2.4";
}));
//#endregion
//#region ../../node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}));
//#endregion
//#region ../../node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.production.js
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
//#endregion
//#region ../../node_modules/react-redux/dist/react-redux.mjs
var import_with_selector = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_with_selector_production();
})))();
function defaultNoopBatch(callback) {
	callback();
}
function createListenerCollection() {
	let first = null;
	let last = null;
	return {
		clear() {
			first = null;
			last = null;
		},
		notify() {
			defaultNoopBatch(() => {
				let listener = first;
				while (listener) {
					listener.callback();
					listener = listener.next;
				}
			});
		},
		get() {
			const listeners = [];
			let listener = first;
			while (listener) {
				listeners.push(listener);
				listener = listener.next;
			}
			return listeners;
		},
		subscribe(callback) {
			let isSubscribed = true;
			const listener = last = {
				callback,
				next: null,
				prev: last
			};
			if (listener.prev) listener.prev.next = listener;
			else first = listener;
			return function unsubscribe() {
				if (!isSubscribed || first === null) return;
				isSubscribed = false;
				if (listener.next) listener.next.prev = listener.prev;
				else last = listener.prev;
				if (listener.prev) listener.prev.next = listener.next;
				else first = listener.next;
			};
		}
	};
}
var nullListeners = {
	notify() {},
	get: () => []
};
function createSubscription(store, parentSub) {
	let unsubscribe;
	let listeners = nullListeners;
	let subscriptionsAmount = 0;
	let selfSubscribed = false;
	function addNestedSub(listener) {
		trySubscribe();
		const cleanupListener = listeners.subscribe(listener);
		let removed = false;
		return () => {
			if (!removed) {
				removed = true;
				cleanupListener();
				tryUnsubscribe();
			}
		};
	}
	function notifyNestedSubs() {
		listeners.notify();
	}
	function handleChangeWrapper() {
		if (subscription.onStateChange) subscription.onStateChange();
	}
	function isSubscribed() {
		return selfSubscribed;
	}
	function trySubscribe() {
		subscriptionsAmount++;
		if (!unsubscribe) {
			unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
			listeners = createListenerCollection();
		}
	}
	function tryUnsubscribe() {
		subscriptionsAmount--;
		if (unsubscribe && subscriptionsAmount === 0) {
			unsubscribe();
			unsubscribe = void 0;
			listeners.clear();
			listeners = nullListeners;
		}
	}
	function trySubscribeSelf() {
		if (!selfSubscribed) {
			selfSubscribed = true;
			trySubscribe();
		}
	}
	function tryUnsubscribeSelf() {
		if (selfSubscribed) {
			selfSubscribed = false;
			tryUnsubscribe();
		}
	}
	const subscription = {
		addNestedSub,
		notifyNestedSubs,
		handleChangeWrapper,
		isSubscribed,
		trySubscribe: trySubscribeSelf,
		tryUnsubscribe: tryUnsubscribeSelf,
		getListeners: () => listeners
	};
	return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? import_react.useLayoutEffect : import_react.useEffect;
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
function is$1(x, y) {
	if (x === y) return x !== 0 || y !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
}
function shallowEqual(objA, objB) {
	if (is$1(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;
	for (let i = 0; i < keysA.length; i++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) return false;
	return true;
}
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : {};
function getContext() {
	if (!import_react.createContext) return {};
	const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
	let realContext = contextMap.get(import_react.createContext);
	if (!realContext) {
		realContext = import_react.createContext(null);
		contextMap.set(import_react.createContext, realContext);
	}
	return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
function Provider(providerProps) {
	const { children, context, serverState, store } = providerProps;
	const contextValue = import_react.useMemo(() => {
		return {
			store,
			subscription: createSubscription(store),
			getServerState: serverState ? () => serverState : void 0
		};
	}, [store, serverState]);
	const previousState = import_react.useMemo(() => store.getState(), [store]);
	useIsomorphicLayoutEffect(() => {
		const { subscription } = contextValue;
		subscription.onStateChange = subscription.notifyNestedSubs;
		subscription.trySubscribe();
		if (previousState !== store.getState()) subscription.notifyNestedSubs();
		return () => {
			subscription.tryUnsubscribe();
			subscription.onStateChange = void 0;
		};
	}, [contextValue, previousState]);
	const Context = context || ReactReduxContext;
	return /* @__PURE__ */ import_react.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
function createReduxContextHook(context = ReactReduxContext) {
	return function useReduxContext2() {
		return import_react.useContext(context);
	};
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
function createStoreHook(context = ReactReduxContext) {
	const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	const useStore2 = () => {
		const { store } = useReduxContext2();
		return store;
	};
	Object.assign(useStore2, { withTypes: () => useStore2 });
	return useStore2;
}
var useStore$1 = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
	const useStore2 = context === ReactReduxContext ? useStore$1 : createStoreHook(context);
	const useDispatch2 = () => {
		return useStore2().dispatch;
	};
	Object.assign(useDispatch2, { withTypes: () => useDispatch2 });
	return useDispatch2;
}
var useDispatch$1 = /* @__PURE__ */ createDispatchHook();
var refEquality = (a, b) => a === b;
function createSelectorHook(context = ReactReduxContext) {
	const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	const useSelector2 = (selector, equalityFnOrOptions = {}) => {
		const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? { equalityFn: equalityFnOrOptions } : equalityFnOrOptions;
		const { store, subscription, getServerState } = useReduxContext2();
		import_react.useRef(true);
		const wrappedSelector = import_react.useCallback({ [selector.name](state) {
			return selector(state);
		} }[selector.name], [selector]);
		const selectedState = (0, import_with_selector.useSyncExternalStoreWithSelector)(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
		import_react.useDebugValue(selectedState);
		return selectedState;
	};
	Object.assign(useSelector2, { withTypes: () => useSelector2 });
	return useSelector2;
}
var useSelector$1 = /* @__PURE__ */ createSelectorHook();
//#endregion
//#region ../loot-core/src/platform/client/undo/index.ts
var HISTORY_SIZE = 40;
var UNDO_STATE_MRU = [];
var currentUndoState = {
	url: null,
	openModal: null,
	selectedItems: null,
	undoEvent: null
};
var setUndoState = (name, value) => {
	currentUndoState[name] = value;
	currentUndoState.id = crypto.randomUUID();
};
var getUndoState = (name) => {
	return currentUndoState[name];
};
var getTaggedState = (id) => {
	return UNDO_STATE_MRU.find((state) => state.id === id);
};
var snapshot = () => {
	const tagged = {
		...currentUndoState,
		id: crypto.randomUUID()
	};
	UNDO_STATE_MRU.unshift(tagged);
	UNDO_STATE_MRU = UNDO_STATE_MRU.slice(0, HISTORY_SIZE);
	return tagged.id;
};
var gc = (id) => {
	UNDO_STATE_MRU = UNDO_STATE_MRU.filter((state) => state.id !== id);
};
//#endregion
//#region ../loot-core/src/platform/server/log/index.ts
var verboseMode = true;
var logger = {
	info: (...args) => {
		if (verboseMode) console.log(...args);
	},
	warn: (...args) => {
		console.warn(...args);
	},
	log: (...args) => {
		if (verboseMode) console.log(...args);
	},
	error: (...args) => {
		console.error(...args);
	},
	debug: (...args) => {
		if (verboseMode) console.debug(...args);
	},
	group: (...args) => {
		if (verboseMode) console.group(...args);
	},
	groupEnd: () => {
		if (verboseMode) console.groupEnd();
	}
};
//#endregion
//#region ../loot-core/src/platform/exceptions/index.ts
var captureException = function(exc) {
	logger.error("[Exception]", exc);
};
var captureBreadcrumb = function(crumb) {
	logger.info("[Breadcrumb]", crumb);
};
//#endregion
//#region ../loot-core/src/platform/client/connection/index.ts
init_build_shims();
var replyHandlers = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Map();
var messageQueue = [];
var globalWorker = null;
var ReconstructedError = class extends Error {
	url;
	line;
	column;
	constructor(message, stack, url, line, column) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		Object.defineProperty(this, "stack", {
			get: function() {
				return "extended " + this._stack;
			},
			set: function(value) {
				this._stack = value;
			}
		});
		this.stack = stack;
		this.url = url;
		this.line = line;
		this.column = column;
	}
};
function handleMessage(msg) {
	if (msg.type === "error") {
		const { id, error } = msg;
		const handler = replyHandlers.get(id);
		if (handler) {
			replyHandlers.delete(id);
			handler.reject(error);
		}
	} else if (msg.type === "reply") {
		const { id, result, mutated, undoTag } = msg;
		const handler = replyHandlers.get(id);
		if (handler) {
			replyHandlers.delete(id);
			if (!mutated) gc(undoTag);
			handler.resolve(result);
		}
	} else if (msg.type === "push") {
		const { name, args } = msg;
		const listens = listeners.get(name);
		if (listens) {
			for (let i = 0; i < listens.length; i++) if (listens[i](args) === true) break;
		}
	} else if (!msg.type.startsWith("__")) throw new Error("Unknown message type: " + JSON.stringify(msg));
}
function connectWorker(worker, onOpen, onError) {
	globalWorker = worker;
	worker.onmessage = (event) => {
		const msg = event.data;
		if (msg.type === "connect") {
			if (messageQueue?.length > 0) {
				messageQueue.forEach((msg) => worker.postMessage(msg));
				messageQueue = null;
			}
			globalWorker.postMessage({ name: "client-connected-to-backend" });
			onOpen();
		} else if (msg.type === "app-init-failure") {
			globalWorker.postMessage({ name: "__app-init-failure-acknowledged" });
			onError(msg);
		} else if (msg.type === "capture-exception") {
			captureException(msg.stack ? new ReconstructedError(msg.message, msg.stack, msg.url, msg.line, msg.column) : msg.exc);
			if (msg.message && msg.message.includes("indexeddb-quota-error")) alert(t$1("We hit a limit on the local storage available. Edits may not be saved. Please get in touch https://actualbudget.org/contact/ so we can help debug this."));
		} else if (msg.type === "capture-breadcrumb") captureBreadcrumb(msg.data);
		else handleMessage(msg);
	};
	if (worker instanceof MessagePort) worker.start();
}
var init = async function() {
	const worker = await global.Actual.getServerSocket();
	return new Promise((resolve, reject) => connectWorker(worker, resolve, reject));
};
var send = function(...params) {
	const [name, args, { catchErrors = false } = {}] = params;
	return new Promise((resolve, reject) => {
		const id = crypto.randomUUID();
		replyHandlers.set(id, {
			resolve,
			reject
		});
		const message = {
			id,
			name,
			args,
			undoTag: snapshot(),
			catchErrors
		};
		if (messageQueue) messageQueue.push(message);
		else globalWorker.postMessage(message);
	});
};
var sendCatch = function(name, args) {
	return send(name, args, { catchErrors: true });
};
var listen = function(name, cb) {
	if (!listeners.get(name)) listeners.set(name, []);
	listeners.get(name).push(cb);
	return () => {
		const arr = listeners.get(name);
		listeners.set(name, arr.filter((cb_) => cb_ !== cb));
	};
};
//#endregion
//#region ../../node_modules/redux/dist/redux.mjs
function formatProdErrorMessage$1(code) {
	return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var symbol_observable_default = typeof Symbol === "function" && Symbol.observable || "@@observable";
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var actionTypes_default = {
	INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
	REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
	PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
function isPlainObject$2(obj) {
	if (typeof obj !== "object" || obj === null) return false;
	let proto = obj;
	while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
	return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
function createStore(reducer, preloadedState, enhancer) {
	if (typeof reducer !== "function") throw new Error(formatProdErrorMessage$1(2));
	if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(formatProdErrorMessage$1(0));
	if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
		enhancer = preloadedState;
		preloadedState = void 0;
	}
	if (typeof enhancer !== "undefined") {
		if (typeof enhancer !== "function") throw new Error(formatProdErrorMessage$1(1));
		return enhancer(createStore)(reducer, preloadedState);
	}
	let currentReducer = reducer;
	let currentState = preloadedState;
	let currentListeners = /* @__PURE__ */ new Map();
	let nextListeners = currentListeners;
	let listenerIdCounter = 0;
	let isDispatching = false;
	function ensureCanMutateNextListeners() {
		if (nextListeners === currentListeners) {
			nextListeners = /* @__PURE__ */ new Map();
			currentListeners.forEach((listener, key) => {
				nextListeners.set(key, listener);
			});
		}
	}
	function getState() {
		if (isDispatching) throw new Error(formatProdErrorMessage$1(3));
		return currentState;
	}
	function subscribe(listener) {
		if (typeof listener !== "function") throw new Error(formatProdErrorMessage$1(4));
		if (isDispatching) throw new Error(formatProdErrorMessage$1(5));
		let isSubscribed = true;
		ensureCanMutateNextListeners();
		const listenerId = listenerIdCounter++;
		nextListeners.set(listenerId, listener);
		return function unsubscribe() {
			if (!isSubscribed) return;
			if (isDispatching) throw new Error(formatProdErrorMessage$1(6));
			isSubscribed = false;
			ensureCanMutateNextListeners();
			nextListeners.delete(listenerId);
			currentListeners = null;
		};
	}
	function dispatch(action) {
		if (!isPlainObject$2(action)) throw new Error(formatProdErrorMessage$1(7));
		if (typeof action.type === "undefined") throw new Error(formatProdErrorMessage$1(8));
		if (typeof action.type !== "string") throw new Error(formatProdErrorMessage$1(17));
		if (isDispatching) throw new Error(formatProdErrorMessage$1(9));
		try {
			isDispatching = true;
			currentState = currentReducer(currentState, action);
		} finally {
			isDispatching = false;
		}
		(currentListeners = nextListeners).forEach((listener) => {
			listener();
		});
		return action;
	}
	function replaceReducer(nextReducer) {
		if (typeof nextReducer !== "function") throw new Error(formatProdErrorMessage$1(10));
		currentReducer = nextReducer;
		dispatch({ type: actionTypes_default.REPLACE });
	}
	function observable() {
		const outerSubscribe = subscribe;
		return {
			subscribe(observer) {
				if (typeof observer !== "object" || observer === null) throw new Error(formatProdErrorMessage$1(11));
				function observeState() {
					const observerAsObserver = observer;
					if (observerAsObserver.next) observerAsObserver.next(getState());
				}
				observeState();
				return { unsubscribe: outerSubscribe(observeState) };
			},
			[symbol_observable_default]() {
				return this;
			}
		};
	}
	dispatch({ type: actionTypes_default.INIT });
	return {
		dispatch,
		subscribe,
		getState,
		replaceReducer,
		[symbol_observable_default]: observable
	};
}
function assertReducerShape(reducers) {
	Object.keys(reducers).forEach((key) => {
		const reducer = reducers[key];
		if (typeof reducer(void 0, { type: actionTypes_default.INIT }) === "undefined") throw new Error(formatProdErrorMessage$1(12));
		if (typeof reducer(void 0, { type: actionTypes_default.PROBE_UNKNOWN_ACTION() }) === "undefined") throw new Error(formatProdErrorMessage$1(13));
	});
}
function combineReducers(reducers) {
	const reducerKeys = Object.keys(reducers);
	const finalReducers = {};
	for (let i = 0; i < reducerKeys.length; i++) {
		const key = reducerKeys[i];
		if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
	}
	const finalReducerKeys = Object.keys(finalReducers);
	let shapeAssertionError;
	try {
		assertReducerShape(finalReducers);
	} catch (e) {
		shapeAssertionError = e;
	}
	return function combination(state = {}, action) {
		if (shapeAssertionError) throw shapeAssertionError;
		let hasChanged = false;
		const nextState = {};
		for (let i = 0; i < finalReducerKeys.length; i++) {
			const key = finalReducerKeys[i];
			const reducer = finalReducers[key];
			const previousStateForKey = state[key];
			const nextStateForKey = reducer(previousStateForKey, action);
			if (typeof nextStateForKey === "undefined") {
				action && action.type;
				throw new Error(formatProdErrorMessage$1(14));
			}
			nextState[key] = nextStateForKey;
			hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
		}
		hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
		return hasChanged ? nextState : state;
	};
}
function bindActionCreator(actionCreator, dispatch) {
	return function(...args) {
		return dispatch(actionCreator.apply(this, args));
	};
}
function bindActionCreators(actionCreators, dispatch) {
	if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
	if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(formatProdErrorMessage$1(16));
	const boundActionCreators = {};
	for (const key in actionCreators) {
		const actionCreator = actionCreators[key];
		if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	}
	return boundActionCreators;
}
function compose(...funcs) {
	if (funcs.length === 0) return (arg) => arg;
	if (funcs.length === 1) return funcs[0];
	return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
	return (createStore2) => (reducer, preloadedState) => {
		const store = createStore2(reducer, preloadedState);
		let dispatch = () => {
			throw new Error(formatProdErrorMessage$1(15));
		};
		const middlewareAPI = {
			getState: store.getState,
			dispatch: (action, ...args) => dispatch(action, ...args)
		};
		dispatch = compose(...middlewares.map((middleware) => middleware(middlewareAPI)))(store.dispatch);
		return {
			...store,
			dispatch
		};
	};
}
function isAction(action) {
	return isPlainObject$2(action) && "type" in action && typeof action.type === "string";
}
//#endregion
//#region ../../node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
	throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
var O = Object;
var getPrototypeOf = O.getPrototypeOf;
var CONSTRUCTOR = "constructor";
var PROTOTYPE = "prototype";
var CONFIGURABLE = "configurable";
var ENUMERABLE = "enumerable";
var WRITABLE = "writable";
var VALUE = "value";
var isDraft = (value) => !!value && !!value[DRAFT_STATE];
function isDraftable(value) {
	if (!value) return false;
	return isPlainObject$1(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject$1(value) {
	if (!value || !isObjectish(value)) return false;
	const proto = getPrototypeOf(value);
	if (proto === null || proto === O[PROTOTYPE]) return true;
	const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
	if (Ctor === Object) return true;
	if (!isFunction(Ctor)) return false;
	let ctorString = cachedCtorStrings.get(Ctor);
	if (ctorString === void 0) {
		ctorString = Function.toString.call(Ctor);
		cachedCtorStrings.set(Ctor, ctorString);
	}
	return ctorString === objectCtorString;
}
function each(obj, iter, strict = true) {
	if (getArchtype(obj) === 0) (strict ? Reflect.ownKeys(obj) : O.keys(obj)).forEach((key) => {
		iter(key, obj[key], obj);
	});
	else obj.forEach((entry, index) => iter(index, entry, obj));
}
function getArchtype(thing) {
	const state = thing[DRAFT_STATE];
	return state ? state.type_ : isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
var has = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
var get = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.get(prop) : thing[prop];
var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
	if (type === 2) thing.set(propOrOldValue, value);
	else if (type === 3) thing.add(value);
	else thing[propOrOldValue] = value;
};
function is(x, y) {
	if (x === y) return x !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
}
var isArray = Array.isArray;
var isMap = (target) => target instanceof Map;
var isSet = (target) => target instanceof Set;
var isObjectish = (target) => typeof target === "object";
var isFunction = (target) => typeof target === "function";
var isBoolean$1 = (target) => typeof target === "boolean";
function isArrayIndex(value) {
	const n = +value;
	return Number.isInteger(n) && String(n) === value;
}
var latest = (state) => state.copy_ || state.base_;
var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
function shallowCopy(base, strict) {
	if (isMap(base)) return new Map(base);
	if (isSet(base)) return new Set(base);
	if (isArray(base)) return Array[PROTOTYPE].slice.call(base);
	const isPlain = isPlainObject$1(base);
	if (strict === true || strict === "class_only" && !isPlain) {
		const descriptors = O.getOwnPropertyDescriptors(base);
		delete descriptors[DRAFT_STATE];
		let keys = Reflect.ownKeys(descriptors);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			const desc = descriptors[key];
			if (desc[WRITABLE] === false) {
				desc[WRITABLE] = true;
				desc[CONFIGURABLE] = true;
			}
			if (desc.get || desc.set) descriptors[key] = {
				[CONFIGURABLE]: true,
				[WRITABLE]: true,
				[ENUMERABLE]: desc[ENUMERABLE],
				[VALUE]: base[key]
			};
		}
		return O.create(getPrototypeOf(base), descriptors);
	} else {
		const proto = getPrototypeOf(base);
		if (proto !== null && isPlain) return { ...base };
		const obj = O.create(proto);
		return O.assign(obj, base);
	}
}
function freeze(obj, deep = false) {
	if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
	if (getArchtype(obj) > 1) O.defineProperties(obj, {
		set: dontMutateMethodOverride,
		add: dontMutateMethodOverride,
		clear: dontMutateMethodOverride,
		delete: dontMutateMethodOverride
	});
	O.freeze(obj);
	if (deep) each(obj, (_key, value) => {
		freeze(value, true);
	}, false);
	return obj;
}
function dontMutateFrozenCollections() {
	die(2);
}
var dontMutateMethodOverride = { [VALUE]: dontMutateFrozenCollections };
function isFrozen(obj) {
	if (obj === null || !isObjectish(obj)) return true;
	return O.isFrozen(obj);
}
var PluginMapSet = "MapSet";
var PluginPatches = "Patches";
var PluginArrayMethods = "ArrayMethods";
var plugins = {};
function getPlugin(pluginKey) {
	const plugin = plugins[pluginKey];
	if (!plugin) die(0, pluginKey);
	return plugin;
}
var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];
var currentScope;
var getCurrentScope = () => currentScope;
var createScope = (parent_, immer_) => ({
	drafts_: [],
	parent_,
	immer_,
	canAutoFreeze_: true,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
	arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
});
function usePatchesInScope(scope, patchListener) {
	if (patchListener) {
		scope.patchPlugin_ = getPlugin(PluginPatches);
		scope.patches_ = [];
		scope.inversePatches_ = [];
		scope.patchListener_ = patchListener;
	}
}
function revokeScope(scope) {
	leaveScope(scope);
	scope.drafts_.forEach(revokeDraft);
	scope.drafts_ = null;
}
function leaveScope(scope) {
	if (scope === currentScope) currentScope = scope.parent_;
}
var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
function revokeDraft(draft) {
	const state = draft[DRAFT_STATE];
	if (state.type_ === 0 || state.type_ === 1) state.revoke_();
	else state.revoked_ = true;
}
function processResult(result, scope) {
	scope.unfinalizedDrafts_ = scope.drafts_.length;
	const baseDraft = scope.drafts_[0];
	if (result !== void 0 && result !== baseDraft) {
		if (baseDraft[DRAFT_STATE].modified_) {
			revokeScope(scope);
			die(4);
		}
		if (isDraftable(result)) result = finalize(scope, result);
		const { patchPlugin_ } = scope;
		if (patchPlugin_) patchPlugin_.generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope);
	} else result = finalize(scope, baseDraft);
	maybeFreeze(scope, result, true);
	revokeScope(scope);
	if (scope.patches_) scope.patchListener_(scope.patches_, scope.inversePatches_);
	return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value) {
	if (isFrozen(value)) return value;
	const state = value[DRAFT_STATE];
	if (!state) return handleValue(value, rootScope.handledSet_, rootScope);
	if (!isSameScope(state, rootScope)) return value;
	if (!state.modified_) return state.base_;
	if (!state.finalized_) {
		const { callbacks_ } = state;
		if (callbacks_) while (callbacks_.length > 0) callbacks_.pop()(rootScope);
		generatePatchesAndFinalize(state, rootScope);
	}
	return state.copy_;
}
function maybeFreeze(scope, value, deep = false) {
	if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) freeze(value, deep);
}
function markStateFinalized(state) {
	state.finalized_ = true;
	state.scope_.unfinalizedDrafts_--;
}
var isSameScope = (state, rootScope) => state.scope_ === rootScope;
var EMPTY_LOCATIONS_RESULT = [];
function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
	const parentCopy = latest(parent);
	const parentType = parent.type_;
	if (originalKey !== void 0) {
		if (get(parentCopy, originalKey, parentType) === draftValue) {
			set(parentCopy, originalKey, finalizedValue, parentType);
			return;
		}
	}
	if (!parent.draftLocations_) {
		const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
		each(parentCopy, (key, value) => {
			if (isDraft(value)) {
				const keys = draftLocations.get(value) || [];
				keys.push(key);
				draftLocations.set(value, keys);
			}
		});
	}
	const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
	for (const location of locations) set(parentCopy, location, finalizedValue, parentType);
}
function registerChildFinalizationCallback(parent, child, key) {
	parent.callbacks_.push(function childCleanup(rootScope) {
		const state = child;
		if (!state || !isSameScope(state, rootScope)) return;
		rootScope.mapSetPlugin_?.fixSetContents(state);
		const finalizedValue = getFinalValue(state);
		updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
		generatePatchesAndFinalize(state, rootScope);
	});
}
function generatePatchesAndFinalize(state, rootScope) {
	if (state.modified_ && !state.finalized_ && (state.type_ === 3 || state.type_ === 1 && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0)) {
		const { patchPlugin_ } = rootScope;
		if (patchPlugin_) {
			const basePath = patchPlugin_.getPath(state);
			if (basePath) patchPlugin_.generatePatches_(state, basePath, rootScope);
		}
		markStateFinalized(state);
	}
}
function handleCrossReference(target, key, value) {
	const { scope_ } = target;
	if (isDraft(value)) {
		const state = value[DRAFT_STATE];
		if (isSameScope(state, scope_)) state.callbacks_.push(function crossReferenceCleanup() {
			prepareCopy(target);
			updateDraftInParent(target, value, getFinalValue(state), key);
		});
	} else if (isDraftable(value)) target.callbacks_.push(function nestedDraftCleanup() {
		const targetCopy = latest(target);
		if (target.type_ === 3) {
			if (targetCopy.has(value)) handleValue(value, scope_.handledSet_, scope_);
		} else if (get(targetCopy, key, target.type_) === value) {
			if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) handleValue(get(target.copy_, key, target.type_), scope_.handledSet_, scope_);
		}
	});
}
function handleValue(target, handledSet, rootScope) {
	if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) return target;
	if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) return target;
	handledSet.add(target);
	each(target, (key, value) => {
		if (isDraft(value)) {
			const state = value[DRAFT_STATE];
			if (isSameScope(state, rootScope)) {
				set(target, key, getFinalValue(state), target.type_);
				markStateFinalized(state);
			}
		} else if (isDraftable(value)) handleValue(value, handledSet, rootScope);
	});
	return target;
}
function createProxyProxy(base, parent) {
	const baseIsArray = isArray(base);
	const state = {
		type_: baseIsArray ? 1 : 0,
		scope_: parent ? parent.scope_ : getCurrentScope(),
		modified_: false,
		finalized_: false,
		assigned_: void 0,
		parent_: parent,
		base_: base,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: false,
		callbacks_: void 0
	};
	let target = state;
	let traps = objectTraps;
	if (baseIsArray) {
		target = [state];
		traps = arrayTraps;
	}
	const { revoke, proxy } = Proxy.revocable(target, traps);
	state.draft_ = proxy;
	state.revoke_ = revoke;
	return [proxy, state];
}
var objectTraps = {
	get(state, prop) {
		if (prop === DRAFT_STATE) return state;
		let arrayPlugin = state.scope_.arrayMethodsPlugin_;
		const isArrayWithStringProp = state.type_ === 1 && typeof prop === "string";
		if (isArrayWithStringProp) {
			if (arrayPlugin?.isArrayOperationMethod(prop)) return arrayPlugin.createMethodInterceptor(state, prop);
		}
		const source = latest(state);
		if (!has(source, prop, state.type_)) return readPropFromProto(state, source, prop);
		const value = source[prop];
		if (state.finalized_ || !isDraftable(value)) return value;
		if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(state.operationMethod) && isArrayIndex(prop)) return value;
		if (value === peek$1(state.base_, prop)) {
			prepareCopy(state);
			const childKey = state.type_ === 1 ? +prop : prop;
			const childDraft = createProxy(state.scope_, value, state, childKey);
			return state.copy_[childKey] = childDraft;
		}
		return value;
	},
	has(state, prop) {
		return prop in latest(state);
	},
	ownKeys(state) {
		return Reflect.ownKeys(latest(state));
	},
	set(state, prop, value) {
		const desc = getDescriptorFromProto(latest(state), prop);
		if (desc?.set) {
			desc.set.call(state.draft_, value);
			return true;
		}
		if (!state.modified_) {
			const current2 = peek$1(latest(state), prop);
			const currentState = current2?.[DRAFT_STATE];
			if (currentState && currentState.base_ === value) {
				state.copy_[prop] = value;
				state.assigned_.set(prop, false);
				return true;
			}
			if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_))) return true;
			prepareCopy(state);
			markChanged(state);
		}
		if (state.copy_[prop] === value && (value !== void 0 || prop in state.copy_) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
		state.copy_[prop] = value;
		state.assigned_.set(prop, true);
		handleCrossReference(state, prop, value);
		return true;
	},
	deleteProperty(state, prop) {
		prepareCopy(state);
		if (peek$1(state.base_, prop) !== void 0 || prop in state.base_) {
			state.assigned_.set(prop, false);
			markChanged(state);
		} else state.assigned_.delete(prop);
		if (state.copy_) delete state.copy_[prop];
		return true;
	},
	getOwnPropertyDescriptor(state, prop) {
		const owner = latest(state);
		const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
		if (!desc) return desc;
		return {
			[WRITABLE]: true,
			[CONFIGURABLE]: state.type_ !== 1 || prop !== "length",
			[ENUMERABLE]: desc[ENUMERABLE],
			[VALUE]: owner[prop]
		};
	},
	defineProperty() {
		die(11);
	},
	getPrototypeOf(state) {
		return getPrototypeOf(state.base_);
	},
	setPrototypeOf() {
		die(12);
	}
};
var arrayTraps = {};
for (let key in objectTraps) {
	let fn = objectTraps[key];
	arrayTraps[key] = function() {
		const args = arguments;
		args[0] = args[0][0];
		return fn.apply(this, args);
	};
}
arrayTraps.deleteProperty = function(state, prop) {
	return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
	return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek$1(draft, prop) {
	const state = draft[DRAFT_STATE];
	return (state ? latest(state) : draft)[prop];
}
function readPropFromProto(state, source, prop) {
	const desc = getDescriptorFromProto(source, prop);
	return desc ? VALUE in desc ? desc[VALUE] : desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
	if (!(prop in source)) return void 0;
	let proto = getPrototypeOf(source);
	while (proto) {
		const desc = Object.getOwnPropertyDescriptor(proto, prop);
		if (desc) return desc;
		proto = getPrototypeOf(proto);
	}
}
function markChanged(state) {
	if (!state.modified_) {
		state.modified_ = true;
		if (state.parent_) markChanged(state.parent_);
	}
}
function prepareCopy(state) {
	if (!state.copy_) {
		state.assigned_ = /* @__PURE__ */ new Map();
		state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
	}
}
var Immer2 = class {
	constructor(config) {
		this.autoFreeze_ = true;
		this.useStrictShallowCopy_ = false;
		this.useStrictIteration_ = false;
		/**
		* The `produce` function takes a value and a "recipe function" (whose
		* return value often depends on the base state). The recipe function is
		* free to mutate its first argument however it wants. All mutations are
		* only ever applied to a __copy__ of the base state.
		*
		* Pass only a function to create a "curried producer" which relieves you
		* from passing the recipe function every time.
		*
		* Only plain objects and arrays are made mutable. All other objects are
		* considered uncopyable.
		*
		* Note: This function is __bound__ to its `Immer` instance.
		*
		* @param {any} base - the initial state
		* @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
		* @param {Function} patchListener - optional function that will be called with all the patches produced here
		* @returns {any} a new state, or the initial state if nothing was modified
		*/
		this.produce = (base, recipe, patchListener) => {
			if (isFunction(base) && !isFunction(recipe)) {
				const defaultBase = recipe;
				recipe = base;
				const self = this;
				return function curriedProduce(base2 = defaultBase, ...args) {
					return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
				};
			}
			if (!isFunction(recipe)) die(6);
			if (patchListener !== void 0 && !isFunction(patchListener)) die(7);
			let result;
			if (isDraftable(base)) {
				const scope = enterScope(this);
				const proxy = createProxy(scope, base, void 0);
				let hasError = true;
				try {
					result = recipe(proxy);
					hasError = false;
				} finally {
					if (hasError) revokeScope(scope);
					else leaveScope(scope);
				}
				usePatchesInScope(scope, patchListener);
				return processResult(result, scope);
			} else if (!base || !isObjectish(base)) {
				result = recipe(base);
				if (result === void 0) result = base;
				if (result === NOTHING) result = void 0;
				if (this.autoFreeze_) freeze(result, true);
				if (patchListener) {
					const p = [];
					const ip = [];
					getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
						patches_: p,
						inversePatches_: ip
					});
					patchListener(p, ip);
				}
				return result;
			} else die(1, base);
		};
		this.produceWithPatches = (base, recipe) => {
			if (isFunction(base)) return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
			let patches, inversePatches;
			return [
				this.produce(base, recipe, (p, ip) => {
					patches = p;
					inversePatches = ip;
				}),
				patches,
				inversePatches
			];
		};
		if (isBoolean$1(config?.autoFreeze)) this.setAutoFreeze(config.autoFreeze);
		if (isBoolean$1(config?.useStrictShallowCopy)) this.setUseStrictShallowCopy(config.useStrictShallowCopy);
		if (isBoolean$1(config?.useStrictIteration)) this.setUseStrictIteration(config.useStrictIteration);
	}
	createDraft(base) {
		if (!isDraftable(base)) die(8);
		if (isDraft(base)) base = current(base);
		const scope = enterScope(this);
		const proxy = createProxy(scope, base, void 0);
		proxy[DRAFT_STATE].isManual_ = true;
		leaveScope(scope);
		return proxy;
	}
	finishDraft(draft, patchListener) {
		const state = draft && draft[DRAFT_STATE];
		if (!state || !state.isManual_) die(9);
		const { scope_: scope } = state;
		usePatchesInScope(scope, patchListener);
		return processResult(void 0, scope);
	}
	/**
	* Pass true to automatically freeze all copies created by Immer.
	*
	* By default, auto-freezing is enabled.
	*/
	setAutoFreeze(value) {
		this.autoFreeze_ = value;
	}
	/**
	* Pass true to enable strict shallow copy.
	*
	* By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
	*/
	setUseStrictShallowCopy(value) {
		this.useStrictShallowCopy_ = value;
	}
	/**
	* Pass false to use faster iteration that skips non-enumerable properties
	* but still handles symbols for compatibility.
	*
	* By default, strict iteration is enabled (includes all own properties).
	*/
	setUseStrictIteration(value) {
		this.useStrictIteration_ = value;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(base, patches) {
		let i;
		for (i = patches.length - 1; i >= 0; i--) {
			const patch = patches[i];
			if (patch.path.length === 0 && patch.op === "replace") {
				base = patch.value;
				break;
			}
		}
		if (i > -1) patches = patches.slice(i + 1);
		const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
		if (isDraft(base)) return applyPatchesImpl(base, patches);
		return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
	}
};
function createProxy(rootScope, value, parent, key) {
	const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
	(parent?.scope_ ?? getCurrentScope()).drafts_.push(draft);
	state.callbacks_ = parent?.callbacks_ ?? [];
	state.key_ = key;
	if (parent && key !== void 0) registerChildFinalizationCallback(parent, state, key);
	else state.callbacks_.push(function rootDraftCleanup(rootScope2) {
		rootScope2.mapSetPlugin_?.fixSetContents(state);
		const { patchPlugin_ } = rootScope2;
		if (state.modified_ && patchPlugin_) patchPlugin_.generatePatches_(state, [], rootScope2);
	});
	return draft;
}
function current(value) {
	if (!isDraft(value)) die(10, value);
	return currentImpl(value);
}
function currentImpl(value) {
	if (!isDraftable(value) || isFrozen(value)) return value;
	const state = value[DRAFT_STATE];
	let copy;
	let strict = true;
	if (state) {
		if (!state.modified_) return state.base_;
		state.finalized_ = true;
		copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
		strict = state.scope_.immer_.shouldUseStrictIteration();
	} else copy = shallowCopy(value, true);
	each(copy, (key, childValue) => {
		set(copy, key, currentImpl(childValue));
	}, strict);
	if (state) state.finalized_ = false;
	return copy;
}
var produce = new Immer2().produce;
//#endregion
//#region ../../node_modules/reselect/dist/reselect.mjs
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
	if (typeof func !== "function") throw new TypeError(errorMessage);
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
	if (typeof object !== "object") throw new TypeError(errorMessage);
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
	if (!array.every((item) => typeof item === "function")) {
		const itemTypes = array.map((item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
		throw new TypeError(`${errorMessage}[${itemTypes}]`);
	}
}
var ensureIsArray = (item) => {
	return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
	const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
	assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
	return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
	const inputSelectorResults = [];
	const { length } = dependencies;
	for (let i = 0; i < length; i++) inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
	return inputSelectorResults;
}
var StrongRef = class {
	constructor(value) {
		this.value = value;
	}
	deref() {
		return this.value;
	}
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
	return {
		s: UNTERMINATED,
		v: void 0,
		o: null,
		p: null
	};
}
function weakMapMemoize(func, options = {}) {
	let fnNode = createCacheNode();
	const { resultEqualityCheck } = options;
	let lastResult;
	let resultsCount = 0;
	function memoized() {
		let cacheNode = fnNode;
		const { length } = arguments;
		for (let i = 0, l = length; i < l; i++) {
			const arg = arguments[i];
			if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
				let objectCache = cacheNode.o;
				if (objectCache === null) cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
				const objectNode = objectCache.get(arg);
				if (objectNode === void 0) {
					cacheNode = createCacheNode();
					objectCache.set(arg, cacheNode);
				} else cacheNode = objectNode;
			} else {
				let primitiveCache = cacheNode.p;
				if (primitiveCache === null) cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
				const primitiveNode = primitiveCache.get(arg);
				if (primitiveNode === void 0) {
					cacheNode = createCacheNode();
					primitiveCache.set(arg, cacheNode);
				} else cacheNode = primitiveNode;
			}
		}
		const terminatedNode = cacheNode;
		let result;
		if (cacheNode.s === TERMINATED) result = cacheNode.v;
		else {
			result = func.apply(null, arguments);
			resultsCount++;
			if (resultEqualityCheck) {
				const lastResultValue = lastResult?.deref?.() ?? lastResult;
				if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
					result = lastResultValue;
					resultsCount !== 0 && resultsCount--;
				}
				lastResult = typeof result === "object" && result !== null || typeof result === "function" ? new Ref(result) : result;
			}
		}
		terminatedNode.s = TERMINATED;
		terminatedNode.v = result;
		return result;
	}
	memoized.clearCache = () => {
		fnNode = createCacheNode();
		memoized.resetResultsCount();
	};
	memoized.resultsCount = () => resultsCount;
	memoized.resetResultsCount = () => {
		resultsCount = 0;
	};
	return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
	const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
		memoize: memoizeOrOptions,
		memoizeOptions: memoizeOptionsFromArgs
	} : memoizeOrOptions;
	const createSelector2 = (...createSelectorArgs) => {
		let recomputations = 0;
		let dependencyRecomputations = 0;
		let lastResult;
		let directlyPassedOptions = {};
		let resultFunc = createSelectorArgs.pop();
		if (typeof resultFunc === "object") {
			directlyPassedOptions = resultFunc;
			resultFunc = createSelectorArgs.pop();
		}
		assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
		const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = {
			...createSelectorCreatorOptions,
			...directlyPassedOptions
		};
		const finalMemoizeOptions = ensureIsArray(memoizeOptions);
		const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
		const dependencies = getDependencies(createSelectorArgs);
		const memoizedResultFunc = memoize(function recomputationWrapper() {
			recomputations++;
			return resultFunc.apply(null, arguments);
		}, ...finalMemoizeOptions);
		const selector = argsMemoize(function dependenciesChecker() {
			dependencyRecomputations++;
			const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
			lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
			return lastResult;
		}, ...finalArgsMemoizeOptions);
		return Object.assign(selector, {
			resultFunc,
			memoizedResultFunc,
			dependencies,
			dependencyRecomputations: () => dependencyRecomputations,
			resetDependencyRecomputations: () => {
				dependencyRecomputations = 0;
			},
			lastResult: () => lastResult,
			recomputations: () => recomputations,
			resetRecomputations: () => {
				recomputations = 0;
			},
			memoize,
			argsMemoize
		});
	};
	Object.assign(createSelector2, { withTypes: () => createSelector2 });
	return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector) => {
	assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
	const inputSelectorKeys = Object.keys(inputSelectorsObject);
	return selectorCreator(inputSelectorKeys.map((key) => inputSelectorsObject[key]), (...inputSelectorResults) => {
		return inputSelectorResults.reduce((composition, value, index) => {
			composition[inputSelectorKeys[index]] = value;
			return composition;
		}, {});
	});
}, { withTypes: () => createStructuredSelector });
//#endregion
//#region ../../node_modules/redux-thunk/dist/redux-thunk.mjs
function createThunkMiddleware(extraArgument) {
	const middleware = ({ dispatch, getState }) => (next) => (action) => {
		if (typeof action === "function") return action(dispatch, getState, extraArgument);
		return next(action);
	};
	return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
//#endregion
//#region ../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length === 0) return void 0;
	if (typeof arguments[0] === "object") return compose;
	return compose.apply(null, arguments);
};
typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
var hasMatchFunction = (v) => {
	return v && typeof v.match === "function";
};
function createAction(type, prepareAction) {
	function actionCreator(...args) {
		if (prepareAction) {
			let prepared = prepareAction(...args);
			if (!prepared) throw new Error(formatProdErrorMessage(0));
			return {
				type,
				payload: prepared.payload,
				..."meta" in prepared && { meta: prepared.meta },
				..."error" in prepared && { error: prepared.error }
			};
		}
		return {
			type,
			payload: args[0]
		};
	}
	actionCreator.toString = () => `${type}`;
	actionCreator.type = type;
	actionCreator.match = (action) => isAction(action) && action.type === type;
	return actionCreator;
}
var Tuple = class _Tuple extends Array {
	constructor(...items) {
		super(...items);
		Object.setPrototypeOf(this, _Tuple.prototype);
	}
	static get [Symbol.species]() {
		return _Tuple;
	}
	concat(...arr) {
		return super.concat.apply(this, arr);
	}
	prepend(...arr) {
		if (arr.length === 1 && Array.isArray(arr[0])) return new _Tuple(...arr[0].concat(this));
		return new _Tuple(...arr.concat(this));
	}
};
function freezeDraftable(val) {
	return isDraftable(val) ? produce(val, () => {}) : val;
}
function getOrInsertComputed(map, key, compute) {
	if (map.has(key)) return map.get(key);
	return map.set(key, compute(key)).get(key);
}
function isBoolean(x) {
	return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
	const { thunk: thunk$1 = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options ?? {};
	let middlewareArray = new Tuple();
	if (thunk$1) if (isBoolean(thunk$1)) middlewareArray.push(thunk);
	else middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
	return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = () => (payload) => ({
	payload,
	meta: { [SHOULD_AUTOBATCH]: true }
});
var createQueueWithTimer = (timeout) => {
	return (notify) => {
		setTimeout(notify, timeout);
	};
};
var autoBatchEnhancer = (options = { type: "raf" }) => (next) => (...args) => {
	const store = next(...args);
	let notifying = true;
	let shouldNotifyAtEndOfTick = false;
	let notificationQueued = false;
	const listeners = /* @__PURE__ */ new Set();
	const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
	const notifyListeners = () => {
		notificationQueued = false;
		if (shouldNotifyAtEndOfTick) {
			shouldNotifyAtEndOfTick = false;
			listeners.forEach((l) => l());
		}
	};
	return Object.assign({}, store, {
		subscribe(listener2) {
			const wrappedListener = () => notifying && listener2();
			const unsubscribe = store.subscribe(wrappedListener);
			listeners.add(listener2);
			return () => {
				unsubscribe();
				listeners.delete(listener2);
			};
		},
		dispatch(action) {
			try {
				notifying = !action?.meta?.[SHOULD_AUTOBATCH];
				shouldNotifyAtEndOfTick = !notifying;
				if (shouldNotifyAtEndOfTick) {
					if (!notificationQueued) {
						notificationQueued = true;
						queueCallback(notifyListeners);
					}
				}
				return store.dispatch(action);
			} finally {
				notifying = true;
			}
		}
	});
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
	const { autoBatch = true } = options ?? {};
	let enhancerArray = new Tuple(middlewareEnhancer);
	if (autoBatch) enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
	return enhancerArray;
};
function configureStore(options) {
	const getDefaultMiddleware = buildGetDefaultMiddleware();
	const { reducer = void 0, middleware, devTools = true, duplicateMiddlewareCheck = true, preloadedState = void 0, enhancers = void 0 } = options || {};
	let rootReducer;
	if (typeof reducer === "function") rootReducer = reducer;
	else if (isPlainObject$2(reducer)) rootReducer = combineReducers(reducer);
	else throw new Error(formatProdErrorMessage(1));
	let finalMiddleware;
	if (typeof middleware === "function") finalMiddleware = middleware(getDefaultMiddleware);
	else finalMiddleware = getDefaultMiddleware();
	let finalCompose = compose;
	if (devTools) finalCompose = composeWithDevTools({
		trace: false,
		...typeof devTools === "object" && devTools
	});
	const getDefaultEnhancers = buildGetDefaultEnhancers(applyMiddleware(...finalMiddleware));
	let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
	const composedEnhancer = finalCompose(...storeEnhancers);
	return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
	const actionsMap = {};
	const actionMatchers = [];
	let defaultCaseReducer;
	const builder = {
		addCase(typeOrActionCreator, reducer) {
			const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
			if (!type) throw new Error(formatProdErrorMessage(28));
			if (type in actionsMap) throw new Error(formatProdErrorMessage(29));
			actionsMap[type] = reducer;
			return builder;
		},
		addAsyncThunk(asyncThunk, reducers) {
			if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
			if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
			if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
			if (reducers.settled) actionMatchers.push({
				matcher: asyncThunk.settled,
				reducer: reducers.settled
			});
			return builder;
		},
		addMatcher(matcher, reducer) {
			actionMatchers.push({
				matcher,
				reducer
			});
			return builder;
		},
		addDefaultCase(reducer) {
			defaultCaseReducer = reducer;
			return builder;
		}
	};
	builderCallback(builder);
	return [
		actionsMap,
		actionMatchers,
		defaultCaseReducer
	];
}
function isStateFunction(x) {
	return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
	let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
	let getInitialState;
	if (isStateFunction(initialState)) getInitialState = () => freezeDraftable(initialState());
	else {
		const frozenInitialState = freezeDraftable(initialState);
		getInitialState = () => frozenInitialState;
	}
	function reducer(state = getInitialState(), action) {
		let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({ matcher }) => matcher(action)).map(({ reducer: reducer2 }) => reducer2)];
		if (caseReducers.filter((cr) => !!cr).length === 0) caseReducers = [finalDefaultCaseReducer];
		return caseReducers.reduce((previousState, caseReducer) => {
			if (caseReducer) if (isDraft(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) return previousState;
				return result;
			} else if (!isDraftable(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) {
					if (previousState === null) return previousState;
					throw Error("A case reducer on a non-draftable value must not return undefined");
				}
				return result;
			} else return produce(previousState, (draft) => {
				return caseReducer(draft, action);
			});
			return previousState;
		}, state);
	}
	reducer.getInitialState = getInitialState;
	return reducer;
}
var matches = (matcher, action) => {
	if (hasMatchFunction(matcher)) return matcher.match(action);
	else return matcher(action);
};
function isAnyOf(...matchers) {
	return (action) => {
		return matchers.some((matcher) => matches(matcher, action));
	};
}
function hasExpectedRequestMetadata(action, validStatus) {
	if (!action || !action.meta) return false;
	const hasValidRequestId = typeof action.meta.requestId === "string";
	const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
	return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
	return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isRejected(...asyncThunks) {
	if (asyncThunks.length === 0) return (action) => hasExpectedRequestMetadata(action, ["rejected"]);
	if (!isAsyncThunkArray(asyncThunks)) return isRejected()(asyncThunks[0]);
	return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.rejected));
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
	let id = "";
	let i = size;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};
var commonProperties = [
	"name",
	"message",
	"stack",
	"code"
];
var RejectWithValue = class {
	constructor(payload, meta) {
		this.payload = payload;
		this.meta = meta;
	}
	_type;
};
var FulfillWithMeta = class {
	constructor(payload, meta) {
		this.payload = payload;
		this.meta = meta;
	}
	_type;
};
var miniSerializeError = (value) => {
	if (typeof value === "object" && value !== null) {
		const simpleError = {};
		for (const property of commonProperties) if (typeof value[property] === "string") simpleError[property] = value[property];
		return simpleError;
	}
	return { message: String(value) };
};
var externalAbortMessage = "External signal was aborted";
var createAsyncThunk = /* @__PURE__ */ (() => {
	function createAsyncThunk2(typePrefix, payloadCreator, options) {
		const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
			payload,
			meta: {
				...meta || {},
				arg,
				requestId,
				requestStatus: "fulfilled"
			}
		}));
		const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
			payload: void 0,
			meta: {
				...meta || {},
				arg,
				requestId,
				requestStatus: "pending"
			}
		}));
		const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
			payload,
			error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
			meta: {
				...meta || {},
				arg,
				requestId,
				rejectedWithValue: !!payload,
				requestStatus: "rejected",
				aborted: error?.name === "AbortError",
				condition: error?.name === "ConditionError"
			}
		}));
		function actionCreator(arg, { signal } = {}) {
			return (dispatch, getState, extra) => {
				const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
				const abortController = new AbortController();
				let abortHandler;
				let abortReason;
				function abort(reason) {
					abortReason = reason;
					abortController.abort();
				}
				if (signal) if (signal.aborted) abort(externalAbortMessage);
				else signal.addEventListener("abort", () => abort(externalAbortMessage), { once: true });
				const promise = async function() {
					let finalAction;
					try {
						let conditionResult = options?.condition?.(arg, {
							getState,
							extra
						});
						if (isThenable(conditionResult)) conditionResult = await conditionResult;
						if (conditionResult === false || abortController.signal.aborted) throw {
							name: "ConditionError",
							message: "Aborted due to condition callback returning false."
						};
						const abortedPromise = new Promise((_, reject) => {
							abortHandler = () => {
								reject({
									name: "AbortError",
									message: abortReason || "Aborted"
								});
							};
							abortController.signal.addEventListener("abort", abortHandler, { once: true });
						});
						dispatch(pending(requestId, arg, options?.getPendingMeta?.({
							requestId,
							arg
						}, {
							getState,
							extra
						})));
						finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
							dispatch,
							getState,
							extra,
							requestId,
							signal: abortController.signal,
							abort,
							rejectWithValue: (value, meta) => {
								return new RejectWithValue(value, meta);
							},
							fulfillWithValue: (value, meta) => {
								return new FulfillWithMeta(value, meta);
							}
						})).then((result) => {
							if (result instanceof RejectWithValue) throw result;
							if (result instanceof FulfillWithMeta) return fulfilled(result.payload, requestId, arg, result.meta);
							return fulfilled(result, requestId, arg);
						})]);
					} catch (err) {
						finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
					} finally {
						if (abortHandler) abortController.signal.removeEventListener("abort", abortHandler);
					}
					if (!(options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition)) dispatch(finalAction);
					return finalAction;
				}();
				return Object.assign(promise, {
					abort,
					requestId,
					arg,
					unwrap() {
						return promise.then(unwrapResult);
					}
				});
			};
		}
		return Object.assign(actionCreator, {
			pending,
			rejected,
			fulfilled,
			settled: isAnyOf(rejected, fulfilled),
			typePrefix
		});
	}
	createAsyncThunk2.withTypes = () => createAsyncThunk2;
	return createAsyncThunk2;
})();
function unwrapResult(action) {
	if (action.meta && action.meta.rejectedWithValue) throw action.payload;
	if (action.error) throw action.error;
	return action.payload;
}
function isThenable(value) {
	return value !== null && typeof value === "object" && typeof value.then === "function";
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function getType(slice, actionKey) {
	return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
	const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
	return function createSlice2(options) {
		const { name, reducerPath = name } = options;
		if (!name) throw new Error(formatProdErrorMessage(11));
		const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
		const reducerNames = Object.keys(reducers);
		const context = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		};
		const contextMethods = {
			addCase(typeOrActionCreator, reducer2) {
				const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
				if (!type) throw new Error(formatProdErrorMessage(12));
				if (type in context.sliceCaseReducersByType) throw new Error(formatProdErrorMessage(13));
				context.sliceCaseReducersByType[type] = reducer2;
				return contextMethods;
			},
			addMatcher(matcher, reducer2) {
				context.sliceMatchers.push({
					matcher,
					reducer: reducer2
				});
				return contextMethods;
			},
			exposeAction(name2, actionCreator) {
				context.actionCreators[name2] = actionCreator;
				return contextMethods;
			},
			exposeCaseReducer(name2, reducer2) {
				context.sliceCaseReducersByName[name2] = reducer2;
				return contextMethods;
			}
		};
		reducerNames.forEach((reducerName) => {
			const reducerDefinition = reducers[reducerName];
			const reducerDetails = {
				reducerName,
				type: getType(name, reducerName),
				createNotation: typeof options.reducers === "function"
			};
			if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
			else handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
		});
		function buildReducer() {
			const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
			const finalCaseReducers = {
				...extraReducers,
				...context.sliceCaseReducersByType
			};
			return createReducer(options.initialState, (builder) => {
				for (let key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
				for (let sM of context.sliceMatchers) builder.addMatcher(sM.matcher, sM.reducer);
				for (let m of actionMatchers) builder.addMatcher(m.matcher, m.reducer);
				if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
			});
		}
		const selectSelf = (state) => state;
		const injectedSelectorCache = /* @__PURE__ */ new Map();
		const injectedStateCache = /* @__PURE__ */ new WeakMap();
		let _reducer;
		function reducer(state, action) {
			if (!_reducer) _reducer = buildReducer();
			return _reducer(state, action);
		}
		function getInitialState() {
			if (!_reducer) _reducer = buildReducer();
			return _reducer.getInitialState();
		}
		function makeSelectorProps(reducerPath2, injected = false) {
			function selectSlice(state) {
				let sliceState = state[reducerPath2];
				if (typeof sliceState === "undefined") {
					if (injected) sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
				}
				return sliceState;
			}
			function getSelectors(selectState = selectSelf) {
				return getOrInsertComputed(getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap()), selectState, () => {
					const map = {};
					for (const [name2, selector] of Object.entries(options.selectors ?? {})) map[name2] = wrapSelector(selector, selectState, () => getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
					return map;
				});
			}
			return {
				reducerPath: reducerPath2,
				getSelectors,
				get selectors() {
					return getSelectors(selectSlice);
				},
				selectSlice
			};
		}
		const slice = {
			name,
			reducer,
			actions: context.actionCreators,
			caseReducers: context.sliceCaseReducersByName,
			getInitialState,
			...makeSelectorProps(reducerPath),
			injectInto(injectable, { reducerPath: pathOpt, ...config } = {}) {
				const newReducerPath = pathOpt ?? reducerPath;
				injectable.inject({
					reducerPath: newReducerPath,
					reducer
				}, config);
				return {
					...slice,
					...makeSelectorProps(newReducerPath, true)
				};
			}
		};
		return slice;
	};
}
function wrapSelector(selector, selectState, getInitialState, injected) {
	function wrapper(rootState, ...args) {
		let sliceState = selectState(rootState);
		if (typeof sliceState === "undefined") {
			if (injected) sliceState = getInitialState();
		}
		return selector(sliceState, ...args);
	}
	wrapper.unwrapped = selector;
	return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
	function asyncThunk(payloadCreator, config) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator,
			...config
		};
	}
	asyncThunk.withTypes = () => asyncThunk;
	return {
		reducer(caseReducer) {
			return Object.assign({ [caseReducer.name](...args) {
				return caseReducer(...args);
			} }[caseReducer.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(prepare, reducer) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare,
				reducer
			};
		},
		asyncThunk
	};
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
	let caseReducer;
	let prepareCallback;
	if ("reducer" in maybeReducerWithPrepare) {
		if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) throw new Error(formatProdErrorMessage(17));
		caseReducer = maybeReducerWithPrepare.reducer;
		prepareCallback = maybeReducerWithPrepare.prepare;
	} else caseReducer = maybeReducerWithPrepare;
	context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
	if (!cAT) throw new Error(formatProdErrorMessage(18));
	const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
	const thunk = cAT(type, payloadCreator, options);
	context.exposeAction(reducerName, thunk);
	if (fulfilled) context.addCase(thunk.fulfilled, fulfilled);
	if (pending) context.addCase(thunk.pending, pending);
	if (rejected) context.addCase(thunk.rejected, rejected);
	if (settled) context.addMatcher(thunk.settled, settled);
	context.exposeCaseReducer(reducerName, {
		fulfilled: fulfilled || noop$1,
		pending: pending || noop$1,
		rejected: rejected || noop$1,
		settled: settled || noop$1
	});
}
function noop$1() {}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
	constructor(code) {
		this.code = code;
		this.message = `${task} ${cancelled} (reason: ${code})`;
	}
	name = "TaskAbortError";
	message;
};
var assertFunction = (func, expected) => {
	if (typeof func !== "function") throw new TypeError(formatProdErrorMessage(32));
};
var noop2 = () => {};
var catchRejection = (promise, onError = noop2) => {
	promise.catch(onError);
	return promise;
};
var addAbortSignalListener = (abortSignal, callback) => {
	abortSignal.addEventListener("abort", callback, { once: true });
	return () => abortSignal.removeEventListener("abort", callback);
};
var validateActive = (signal) => {
	if (signal.aborted) throw new TaskAbortError(signal.reason);
};
function raceWithSignal(signal, promise) {
	let cleanup = noop2;
	return new Promise((resolve, reject) => {
		const notifyRejection = () => reject(new TaskAbortError(signal.reason));
		if (signal.aborted) {
			notifyRejection();
			return;
		}
		cleanup = addAbortSignalListener(signal, notifyRejection);
		promise.finally(() => cleanup()).then(resolve, reject);
	}).finally(() => {
		cleanup = noop2;
	});
}
var runTask = async (task2, cleanUp) => {
	try {
		await Promise.resolve();
		return {
			status: "ok",
			value: await task2()
		};
	} catch (error) {
		return {
			status: error instanceof TaskAbortError ? "cancelled" : "rejected",
			error
		};
	} finally {
		cleanUp?.();
	}
};
var createPause = (signal) => {
	return (promise) => {
		return catchRejection(raceWithSignal(signal, promise).then((output) => {
			validateActive(signal);
			return output;
		}));
	};
};
var createDelay = (signal) => {
	const pause = createPause(signal);
	return (timeoutMs) => {
		return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
	};
};
var { assign: assign$1 } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises) => {
	const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => controller.abort(parentAbortSignal.reason));
	return (taskExecutor, opts) => {
		assertFunction(taskExecutor, "taskExecutor");
		const childAbortController = new AbortController();
		linkControllers(childAbortController);
		const result = runTask(async () => {
			validateActive(parentAbortSignal);
			validateActive(childAbortController.signal);
			const result2 = await taskExecutor({
				pause: createPause(childAbortController.signal),
				delay: createDelay(childAbortController.signal),
				signal: childAbortController.signal
			});
			validateActive(childAbortController.signal);
			return result2;
		}, () => childAbortController.abort(taskCompleted));
		if (opts?.autoJoin) parentBlockingPromises.push(result.catch(noop2));
		return {
			result: createPause(parentAbortSignal)(result),
			cancel() {
				childAbortController.abort(taskCancelled);
			}
		};
	};
};
var createTakePattern = (startListening, signal) => {
	const take = async (predicate, timeout) => {
		validateActive(signal);
		let unsubscribe = () => {};
		const promises = [new Promise((resolve, reject) => {
			let stopListening = startListening({
				predicate,
				effect: (action, listenerApi) => {
					listenerApi.unsubscribe();
					resolve([
						action,
						listenerApi.getState(),
						listenerApi.getOriginalState()
					]);
				}
			});
			unsubscribe = () => {
				stopListening();
				reject();
			};
		})];
		if (timeout != null) promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
		try {
			const output = await raceWithSignal(signal, Promise.race(promises));
			validateActive(signal);
			return output;
		} finally {
			unsubscribe();
		}
	};
	return (predicate, timeout) => catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options) => {
	let { type, actionCreator, matcher, predicate, effect } = options;
	if (type) predicate = createAction(type).match;
	else if (actionCreator) {
		type = actionCreator.type;
		predicate = actionCreator.match;
	} else if (matcher) predicate = matcher;
	else if (predicate) {} else throw new Error(formatProdErrorMessage(21));
	assertFunction(effect, "options.listener");
	return {
		predicate,
		type,
		effect
	};
};
var createListenerEntry = /* @__PURE__ */ assign$1((options) => {
	const { type, predicate, effect } = getListenerEntryPropsFrom(options);
	return {
		id: nanoid(),
		effect,
		type,
		predicate,
		pending: /* @__PURE__ */ new Set(),
		unsubscribe: () => {
			throw new Error(formatProdErrorMessage(22));
		}
	};
}, { withTypes: () => createListenerEntry });
var findListenerEntry = (listenerMap, options) => {
	const { type, effect, predicate } = getListenerEntryPropsFrom(options);
	return Array.from(listenerMap.values()).find((entry) => {
		return (typeof type === "string" ? entry.type === type : entry.predicate === predicate) && entry.effect === effect;
	});
};
var cancelActiveListeners = (entry) => {
	entry.pending.forEach((controller) => {
		controller.abort(listenerCancelled);
	});
};
var createClearListenerMiddleware = (listenerMap, executingListeners) => {
	return () => {
		for (const listener2 of executingListeners.keys()) cancelActiveListeners(listener2);
		listenerMap.clear();
	};
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
	try {
		errorHandler(errorToNotify, errorInfo);
	} catch (errorHandlerError) {
		setTimeout(() => {
			throw errorHandlerError;
		}, 0);
	}
};
var addListener = /* @__PURE__ */ assign$1(/* @__PURE__ */ createAction(`${alm}/add`), { withTypes: () => addListener });
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign$1(/* @__PURE__ */ createAction(`${alm}/remove`), { withTypes: () => removeListener });
var defaultErrorHandler = (...args) => {
	console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {}) => {
	const listenerMap = /* @__PURE__ */ new Map();
	const executingListeners = /* @__PURE__ */ new Map();
	const trackExecutingListener = (entry) => {
		const count = executingListeners.get(entry) ?? 0;
		executingListeners.set(entry, count + 1);
	};
	const untrackExecutingListener = (entry) => {
		const count = executingListeners.get(entry) ?? 1;
		if (count === 1) executingListeners.delete(entry);
		else executingListeners.set(entry, count - 1);
	};
	const { extra, onError = defaultErrorHandler } = middlewareOptions;
	assertFunction(onError, "onError");
	const insertEntry = (entry) => {
		entry.unsubscribe = () => listenerMap.delete(entry.id);
		listenerMap.set(entry.id, entry);
		return (cancelOptions) => {
			entry.unsubscribe();
			if (cancelOptions?.cancelActive) cancelActiveListeners(entry);
		};
	};
	const startListening = (options) => {
		return insertEntry(findListenerEntry(listenerMap, options) ?? createListenerEntry(options));
	};
	assign$1(startListening, { withTypes: () => startListening });
	const stopListening = (options) => {
		const entry = findListenerEntry(listenerMap, options);
		if (entry) {
			entry.unsubscribe();
			if (options.cancelActive) cancelActiveListeners(entry);
		}
		return !!entry;
	};
	assign$1(stopListening, { withTypes: () => stopListening });
	const notifyListener = async (entry, action, api, getOriginalState) => {
		const internalTaskController = new AbortController();
		const take = createTakePattern(startListening, internalTaskController.signal);
		const autoJoinPromises = [];
		try {
			entry.pending.add(internalTaskController);
			trackExecutingListener(entry);
			await Promise.resolve(entry.effect(action, assign$1({}, api, {
				getOriginalState,
				condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
				take,
				delay: createDelay(internalTaskController.signal),
				pause: createPause(internalTaskController.signal),
				extra,
				signal: internalTaskController.signal,
				fork: createFork(internalTaskController.signal, autoJoinPromises),
				unsubscribe: entry.unsubscribe,
				subscribe: () => {
					listenerMap.set(entry.id, entry);
				},
				cancelActiveListeners: () => {
					entry.pending.forEach((controller, _, set) => {
						if (controller !== internalTaskController) {
							controller.abort(listenerCancelled);
							set.delete(controller);
						}
					});
				},
				cancel: () => {
					internalTaskController.abort(listenerCancelled);
					entry.pending.delete(internalTaskController);
				},
				throwIfCancelled: () => {
					validateActive(internalTaskController.signal);
				}
			})));
		} catch (listenerError) {
			if (!(listenerError instanceof TaskAbortError)) safelyNotifyError(onError, listenerError, { raisedBy: "effect" });
		} finally {
			await Promise.all(autoJoinPromises);
			internalTaskController.abort(listenerCompleted);
			untrackExecutingListener(entry);
			entry.pending.delete(internalTaskController);
		}
	};
	const clearListenerMiddleware = createClearListenerMiddleware(listenerMap, executingListeners);
	const middleware = (api) => (next) => (action) => {
		if (!isAction(action)) return next(action);
		if (addListener.match(action)) return startListening(action.payload);
		if (clearAllListeners.match(action)) {
			clearListenerMiddleware();
			return;
		}
		if (removeListener.match(action)) return stopListening(action.payload);
		let originalState = api.getState();
		const getOriginalState = () => {
			if (originalState === INTERNAL_NIL_TOKEN) throw new Error(formatProdErrorMessage(23));
			return originalState;
		};
		let result;
		try {
			result = next(action);
			if (listenerMap.size > 0) {
				const currentState = api.getState();
				const listenerEntries = Array.from(listenerMap.values());
				for (const entry of listenerEntries) {
					let runListener = false;
					try {
						runListener = entry.predicate(action, currentState, originalState);
					} catch (predicateError) {
						runListener = false;
						safelyNotifyError(onError, predicateError, { raisedBy: "predicate" });
					}
					if (!runListener) continue;
					notifyListener(entry, action, api, getOriginalState);
				}
			}
		} finally {
			originalState = INTERNAL_NIL_TOKEN;
		}
		return result;
	};
	return {
		middleware,
		startListening,
		stopListening,
		clearListeners: clearListenerMiddleware
	};
};
function formatProdErrorMessage(code) {
	return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/subscribable.js
var Subscribable = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set();
		this.subscribe = this.subscribe.bind(this);
	}
	subscribe(listener) {
		this.listeners.add(listener);
		this.onSubscribe();
		return () => {
			this.listeners.delete(listener);
			this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
};
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/focusManager.js
var FocusManager = class extends Subscribable {
	#focused;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onFocus) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const listener = () => onFocus();
				window.addEventListener("visibilitychange", listener, false);
				return () => {
					window.removeEventListener("visibilitychange", listener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup((focused) => {
			if (typeof focused === "boolean") this.setFocused(focused);
			else this.onFocus();
		});
	}
	setFocused(focused) {
		if (this.#focused !== focused) {
			this.#focused = focused;
			this.onFocus();
		}
	}
	onFocus() {
		const isFocused = this.isFocused();
		this.listeners.forEach((listener) => {
			listener(isFocused);
		});
	}
	isFocused() {
		if (typeof this.#focused === "boolean") return this.#focused;
		return globalThis.document?.visibilityState !== "hidden";
	}
};
var focusManager = new FocusManager();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/timeoutManager.js
var defaultTimeoutProvider = {
	setTimeout: (callback, delay) => setTimeout(callback, delay),
	clearTimeout: (timeoutId) => clearTimeout(timeoutId),
	setInterval: (callback, delay) => setInterval(callback, delay),
	clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
	#provider = defaultTimeoutProvider;
	#providerCalled = false;
	setTimeoutProvider(provider) {
		this.#provider = provider;
	}
	setTimeout(callback, delay) {
		return this.#provider.setTimeout(callback, delay);
	}
	clearTimeout(timeoutId) {
		this.#provider.clearTimeout(timeoutId);
	}
	setInterval(callback, delay) {
		return this.#provider.setInterval(callback, delay);
	}
	clearInterval(intervalId) {
		this.#provider.clearInterval(intervalId);
	}
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
	setTimeout(callback, 0);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/utils.js
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
	return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
	return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
	return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
	return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
	return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
	const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
	if (queryKey) {
		if (exact) {
			if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
		} else if (!partialMatchKey(query.queryKey, queryKey)) return false;
	}
	if (type !== "all") {
		const isActive = query.isActive();
		if (type === "active" && !isActive) return false;
		if (type === "inactive" && isActive) return false;
	}
	if (typeof stale === "boolean" && query.isStale() !== stale) return false;
	if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
	if (predicate && !predicate(query)) return false;
	return true;
}
function matchMutation(filters, mutation) {
	const { exact, status, predicate, mutationKey } = filters;
	if (mutationKey) {
		if (!mutation.options.mutationKey) return false;
		if (exact) {
			if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
		} else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
	}
	if (status && mutation.state.status !== status) return false;
	if (predicate && !predicate(mutation)) return false;
	return true;
}
function hashQueryKeyByOptions(queryKey, options) {
	return (options?.queryKeyHashFn || hashKey)(queryKey);
}
function hashKey(queryKey) {
	return JSON.stringify(queryKey, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
		result[key] = val[key];
		return result;
	}, {}) : val);
}
function partialMatchKey(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
	return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
	if (a === b) return a;
	if (depth > 500) return b;
	const array = isPlainArray(a) && isPlainArray(b);
	if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
	const aSize = (array ? a : Object.keys(a)).length;
	const bItems = array ? b : Object.keys(b);
	const bSize = bItems.length;
	const copy = array ? new Array(bSize) : {};
	let equalItems = 0;
	for (let i = 0; i < bSize; i++) {
		const key = array ? i : bItems[i];
		const aItem = a[key];
		const bItem = b[key];
		if (aItem === bItem) {
			copy[key] = aItem;
			if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
			continue;
		}
		if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
			copy[key] = bItem;
			continue;
		}
		const v = replaceEqualDeep(aItem, bItem, depth + 1);
		copy[key] = v;
		if (v === aItem) equalItems++;
	}
	return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
	if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
	for (const key in a) if (a[key] !== b[key]) return false;
	return true;
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	if (Object.getPrototypeOf(o) !== Object.prototype) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
	return new Promise((resolve) => {
		timeoutManager.setTimeout(resolve, timeout);
	});
}
function replaceData(prevData, data, options) {
	if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
	else if (options.structuralSharing !== false) return replaceEqualDeep(prevData, data);
	return data;
}
function keepPreviousData(previousData) {
	return previousData;
}
function addToEnd(items, item, max = 0) {
	const newItems = [...items, item];
	return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
	const newItems = [item, ...items];
	return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
	if (!options.queryFn && fetchOptions?.initialPromise) return () => fetchOptions.initialPromise;
	if (!options.queryFn || options.queryFn === skipToken) return () => Promise.reject(/* @__PURE__ */ new Error(`Missing queryFn: '${options.queryHash}'`));
	return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
	if (typeof throwOnError === "function") return throwOnError(...params);
	return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
	let consumed = false;
	let signal;
	Object.defineProperty(object, "signal", {
		enumerable: true,
		get: () => {
			signal ??= getSignal();
			if (consumed) return signal;
			consumed = true;
			if (signal.aborted) onCancelled();
			else signal.addEventListener("abort", onCancelled, { once: true });
			return signal;
		}
	});
	return object;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/environmentManager.js
var environmentManager = /* @__PURE__ */ (() => {
	let isServerFn = () => isServer;
	return {
		isServer() {
			return isServerFn();
		},
		setIsServer(isServerValue) {
			isServerFn = isServerValue;
		}
	};
})();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/thenable.js
function pendingThenable() {
	let resolve;
	let reject;
	const thenable = new Promise((_resolve, _reject) => {
		resolve = _resolve;
		reject = _reject;
	});
	thenable.status = "pending";
	thenable.catch(() => {});
	function finalize(data) {
		Object.assign(thenable, data);
		delete thenable.resolve;
		delete thenable.reject;
	}
	thenable.resolve = (value) => {
		finalize({
			status: "fulfilled",
			value
		});
		resolve(value);
	};
	thenable.reject = (reason) => {
		finalize({
			status: "rejected",
			reason
		});
		reject(reason);
	};
	return thenable;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/notifyManager.js
var defaultScheduler = systemSetTimeoutZero;
function createNotifyManager() {
	let queue = [];
	let transactions = 0;
	let notifyFn = (callback) => {
		callback();
	};
	let batchNotifyFn = (callback) => {
		callback();
	};
	let scheduleFn = defaultScheduler;
	const schedule = (callback) => {
		if (transactions) queue.push(callback);
		else scheduleFn(() => {
			notifyFn(callback);
		});
	};
	const flush = () => {
		const originalQueue = queue;
		queue = [];
		if (originalQueue.length) scheduleFn(() => {
			batchNotifyFn(() => {
				originalQueue.forEach((callback) => {
					notifyFn(callback);
				});
			});
		});
	};
	return {
		batch: (callback) => {
			let result;
			transactions++;
			try {
				result = callback();
			} finally {
				transactions--;
				if (!transactions) flush();
			}
			return result;
		},
		batchCalls: (callback) => {
			return (...args) => {
				schedule(() => {
					callback(...args);
				});
			};
		},
		schedule,
		setNotifyFunction: (fn) => {
			notifyFn = fn;
		},
		setBatchNotifyFunction: (fn) => {
			batchNotifyFn = fn;
		},
		setScheduler: (fn) => {
			scheduleFn = fn;
		}
	};
}
var notifyManager = createNotifyManager();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/onlineManager.js
var OnlineManager = class extends Subscribable {
	#online = true;
	#cleanup;
	#setup;
	constructor() {
		super();
		this.#setup = (onOnline) => {
			if (typeof window !== "undefined" && window.addEventListener) {
				const onlineListener = () => onOnline(true);
				const offlineListener = () => onOnline(false);
				window.addEventListener("online", onlineListener, false);
				window.addEventListener("offline", offlineListener, false);
				return () => {
					window.removeEventListener("online", onlineListener);
					window.removeEventListener("offline", offlineListener);
				};
			}
		};
	}
	onSubscribe() {
		if (!this.#cleanup) this.setEventListener(this.#setup);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) {
			this.#cleanup?.();
			this.#cleanup = void 0;
		}
	}
	setEventListener(setup) {
		this.#setup = setup;
		this.#cleanup?.();
		this.#cleanup = setup(this.setOnline.bind(this));
	}
	setOnline(online) {
		if (this.#online !== online) {
			this.#online = online;
			this.listeners.forEach((listener) => {
				listener(online);
			});
		}
	}
	isOnline() {
		return this.#online;
	}
};
var onlineManager = new OnlineManager();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/retryer.js
function defaultRetryDelay(failureCount) {
	return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
	return (networkMode ?? "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
	constructor(options) {
		super("CancelledError");
		this.revert = options?.revert;
		this.silent = options?.silent;
	}
};
function createRetryer(config) {
	let isRetryCancelled = false;
	let failureCount = 0;
	let continueFn;
	const thenable = pendingThenable();
	const isResolved = () => thenable.status !== "pending";
	const cancel = (cancelOptions) => {
		if (!isResolved()) {
			const error = new CancelledError(cancelOptions);
			reject(error);
			config.onCancel?.(error);
		}
	};
	const cancelRetry = () => {
		isRetryCancelled = true;
	};
	const continueRetry = () => {
		isRetryCancelled = false;
	};
	const canContinue = () => focusManager.isFocused() && (config.networkMode === "always" || onlineManager.isOnline()) && config.canRun();
	const canStart = () => canFetch(config.networkMode) && config.canRun();
	const resolve = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.resolve(value);
		}
	};
	const reject = (value) => {
		if (!isResolved()) {
			continueFn?.();
			thenable.reject(value);
		}
	};
	const pause = () => {
		return new Promise((continueResolve) => {
			continueFn = (value) => {
				if (isResolved() || canContinue()) continueResolve(value);
			};
			config.onPause?.();
		}).then(() => {
			continueFn = void 0;
			if (!isResolved()) config.onContinue?.();
		});
	};
	const run = () => {
		if (isResolved()) return;
		let promiseOrValue;
		const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
		try {
			promiseOrValue = initialPromise ?? config.fn();
		} catch (error) {
			promiseOrValue = Promise.reject(error);
		}
		Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
			if (isResolved()) return;
			const retry = config.retry ?? (environmentManager.isServer() ? 0 : 3);
			const retryDelay = config.retryDelay ?? defaultRetryDelay;
			const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
			const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
			if (isRetryCancelled || !shouldRetry) {
				reject(error);
				return;
			}
			failureCount++;
			config.onFail?.(failureCount, error);
			sleep(delay).then(() => {
				return canContinue() ? void 0 : pause();
			}).then(() => {
				if (isRetryCancelled) reject(error);
				else run();
			});
		});
	};
	return {
		promise: thenable,
		status: () => thenable.status,
		cancel,
		continue: () => {
			continueFn?.();
			return thenable;
		},
		cancelRetry,
		continueRetry,
		canStart,
		start: () => {
			if (canStart()) run();
			else pause().then(run);
			return thenable;
		}
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/removable.js
var Removable = class {
	#gcTimeout;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout();
		if (isValidTimeout(this.gcTime)) this.#gcTimeout = timeoutManager.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime);
	}
	updateGcTime(newGcTime) {
		this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (environmentManager.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		if (this.#gcTimeout !== void 0) {
			timeoutManager.clearTimeout(this.#gcTimeout);
			this.#gcTimeout = void 0;
		}
	}
};
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/query.js
var Query = class extends Removable {
	#initialState;
	#revertState;
	#cache;
	#client;
	#retryer;
	#defaultOptions;
	#abortSignalConsumed;
	constructor(config) {
		super();
		this.#abortSignalConsumed = false;
		this.#defaultOptions = config.defaultOptions;
		this.setOptions(config.options);
		this.observers = [];
		this.#client = config.client;
		this.#cache = this.#client.getQueryCache();
		this.queryKey = config.queryKey;
		this.queryHash = config.queryHash;
		this.#initialState = getDefaultState$1(this.options);
		this.state = config.state ?? this.#initialState;
		this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get promise() {
		return this.#retryer?.promise;
	}
	setOptions(options) {
		this.options = {
			...this.#defaultOptions,
			...options
		};
		this.updateGcTime(this.options.gcTime);
		if (this.state && this.state.data === void 0) {
			const defaultState = getDefaultState$1(this.options);
			if (defaultState.data !== void 0) {
				this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
				this.#initialState = defaultState;
			}
		}
	}
	optionalRemove() {
		if (!this.observers.length && this.state.fetchStatus === "idle") this.#cache.remove(this);
	}
	setData(newData, options) {
		const data = replaceData(this.state.data, newData, this.options);
		this.#dispatch({
			data,
			type: "success",
			dataUpdatedAt: options?.updatedAt,
			manual: options?.manual
		});
		return data;
	}
	setState(state, setStateOptions) {
		this.#dispatch({
			type: "setState",
			state,
			setStateOptions
		});
	}
	cancel(options) {
		const promise = this.#retryer?.promise;
		this.#retryer?.cancel(options);
		return promise ? promise.then(noop).catch(noop) : Promise.resolve();
	}
	destroy() {
		super.destroy();
		this.cancel({ silent: true });
	}
	get resetState() {
		return this.#initialState;
	}
	reset() {
		this.destroy();
		this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((observer) => resolveEnabled(observer.options.enabled, this) !== false);
	}
	isDisabled() {
		if (this.getObserversCount() > 0) return !this.isActive();
		return this.options.queryFn === skipToken || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => resolveStaleTime(observer.options.staleTime, this) === "static");
		return false;
	}
	isStale() {
		if (this.getObserversCount() > 0) return this.observers.some((observer) => observer.getCurrentResult().isStale);
		return this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(staleTime = 0) {
		if (this.state.data === void 0) return true;
		if (staleTime === "static") return false;
		if (this.state.isInvalidated) return true;
		return !timeUntilStale(this.state.dataUpdatedAt, staleTime);
	}
	onFocus() {
		this.observers.find((x) => x.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	onOnline() {
		this.observers.find((x) => x.shouldFetchOnReconnect())?.refetch({ cancelRefetch: false });
		this.#retryer?.continue();
	}
	addObserver(observer) {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
			this.clearGcTimeout();
			this.#cache.notify({
				type: "observerAdded",
				query: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		if (this.observers.includes(observer)) {
			this.observers = this.observers.filter((x) => x !== observer);
			if (!this.observers.length) {
				if (this.#retryer) if (this.#abortSignalConsumed || this.#isInitialPausedFetch()) this.#retryer.cancel({ revert: true });
				else this.#retryer.cancelRetry();
				this.scheduleGc();
			}
			this.#cache.notify({
				type: "observerRemoved",
				query: this,
				observer
			});
		}
	}
	getObserversCount() {
		return this.observers.length;
	}
	#isInitialPausedFetch() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		if (!this.state.isInvalidated) this.#dispatch({ type: "invalidate" });
	}
	async fetch(options, fetchOptions) {
		if (this.state.fetchStatus !== "idle" && this.#retryer?.status() !== "rejected") {
			if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) this.cancel({ silent: true });
			else if (this.#retryer) {
				this.#retryer.continueRetry();
				return this.#retryer.promise;
			}
		}
		if (options) this.setOptions(options);
		if (!this.options.queryFn) {
			const observer = this.observers.find((x) => x.options.queryFn);
			if (observer) this.setOptions(observer.options);
		}
		const abortController = new AbortController();
		const addSignalProperty = (object) => {
			Object.defineProperty(object, "signal", {
				enumerable: true,
				get: () => {
					this.#abortSignalConsumed = true;
					return abortController.signal;
				}
			});
		};
		const fetchFn = () => {
			const queryFn = ensureQueryFn(this.options, fetchOptions);
			const createQueryFnContext = () => {
				const queryFnContext2 = {
					client: this.#client,
					queryKey: this.queryKey,
					meta: this.meta
				};
				addSignalProperty(queryFnContext2);
				return queryFnContext2;
			};
			const queryFnContext = createQueryFnContext();
			this.#abortSignalConsumed = false;
			if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
			return queryFn(queryFnContext);
		};
		const createFetchContext = () => {
			const context2 = {
				fetchOptions,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#client,
				state: this.state,
				fetchFn
			};
			addSignalProperty(context2);
			return context2;
		};
		const context = createFetchContext();
		this.options.behavior?.onFetch(context, this);
		this.#revertState = this.state;
		if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) this.#dispatch({
			type: "fetch",
			meta: context.fetchOptions?.meta
		});
		this.#retryer = createRetryer({
			initialPromise: fetchOptions?.initialPromise,
			fn: context.fetchFn,
			onCancel: (error) => {
				if (error instanceof CancelledError && error.revert) this.setState({
					...this.#revertState,
					fetchStatus: "idle"
				});
				abortController.abort();
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: "pause" });
			},
			onContinue: () => {
				this.#dispatch({ type: "continue" });
			},
			retry: context.options.retry,
			retryDelay: context.options.retryDelay,
			networkMode: context.options.networkMode,
			canRun: () => true
		});
		try {
			const data = await this.#retryer.start();
			if (data === void 0) throw new Error(`${this.queryHash} data is undefined`);
			this.setData(data);
			this.#cache.config.onSuccess?.(data, this);
			this.#cache.config.onSettled?.(data, this.state.error, this);
			return data;
		} catch (error) {
			if (error instanceof CancelledError) {
				if (error.silent) return this.#retryer.promise;
				else if (error.revert) {
					if (this.state.data === void 0) throw error;
					return this.state.data;
				}
			}
			this.#dispatch({
				type: "error",
				error
			});
			this.#cache.config.onError?.(error, this);
			this.#cache.config.onSettled?.(this.state.data, error, this);
			throw error;
		} finally {
			this.scheduleGc();
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case "failed": return {
					...state,
					fetchFailureCount: action.failureCount,
					fetchFailureReason: action.error
				};
				case "pause": return {
					...state,
					fetchStatus: "paused"
				};
				case "continue": return {
					...state,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...state,
					...fetchState(state.data, this.options),
					fetchMeta: action.meta ?? null
				};
				case "success":
					const newState = {
						...state,
						...successState(action.data, action.dataUpdatedAt),
						dataUpdateCount: state.dataUpdateCount + 1,
						...!action.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					this.#revertState = action.manual ? newState : void 0;
					return newState;
				case "error":
					const error = action.error;
					return {
						...state,
						error,
						errorUpdateCount: state.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: state.fetchFailureCount + 1,
						fetchFailureReason: error,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: true
					};
				case "invalidate": return {
					...state,
					isInvalidated: true
				};
				case "setState": return {
					...state,
					...action.state
				};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.observers.forEach((observer) => {
				observer.onQueryUpdate();
			});
			this.#cache.notify({
				query: this,
				type: "updated",
				action
			});
		});
	}
};
function fetchState(data, options) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: canFetch(options.networkMode) ? "fetching" : "paused",
		...data === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function successState(data, dataUpdatedAt) {
	return {
		data,
		dataUpdatedAt: dataUpdatedAt ?? Date.now(),
		error: null,
		isInvalidated: false,
		status: "success"
	};
}
function getDefaultState$1(options) {
	const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
	const hasData = data !== void 0;
	const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
	return {
		data,
		dataUpdateCount: 0,
		dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: false,
		status: hasData ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/queryObserver.js
var QueryObserver = class extends Subscribable {
	constructor(client, options) {
		super();
		this.options = options;
		this.#client = client;
		this.#selectError = null;
		this.#currentThenable = pendingThenable();
		this.bindMethods();
		this.setOptions(options);
	}
	#client;
	#currentQuery = void 0;
	#currentQueryInitialState = void 0;
	#currentResult = void 0;
	#currentResultState;
	#currentResultOptions;
	#currentThenable;
	#selectError;
	#selectFn;
	#selectResult;
	#lastQueryWithDefinedData;
	#staleTimeoutId;
	#refetchIntervalId;
	#currentRefetchInterval;
	#trackedProps = /* @__PURE__ */ new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		if (this.listeners.size === 1) {
			this.#currentQuery.addObserver(this);
			if (shouldFetchOnMount(this.#currentQuery, this.options)) this.#executeFetch();
			else this.updateResult();
			this.#updateTimers();
		}
	}
	onUnsubscribe() {
		if (!this.hasListeners()) this.destroy();
	}
	shouldFetchOnReconnect() {
		return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set();
		this.#clearStaleTimeout();
		this.#clearRefetchInterval();
		this.#currentQuery.removeObserver(this);
	}
	setOptions(options) {
		const prevOptions = this.options;
		const prevQuery = this.#currentQuery;
		this.options = this.#client.defaultQueryOptions(options);
		if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, this.#currentQuery) !== "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#updateQuery();
		this.#currentQuery.setOptions(this.options);
		if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) this.#client.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#currentQuery,
			observer: this
		});
		const mounted = this.hasListeners();
		if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) this.#executeFetch();
		this.updateResult();
		if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || resolveStaleTime(this.options.staleTime, this.#currentQuery) !== resolveStaleTime(prevOptions.staleTime, this.#currentQuery))) this.#updateStaleTimeout();
		const nextRefetchInterval = this.#computeRefetchInterval();
		if (mounted && (this.#currentQuery !== prevQuery || resolveEnabled(this.options.enabled, this.#currentQuery) !== resolveEnabled(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) this.#updateRefetchInterval(nextRefetchInterval);
	}
	getOptimisticResult(options) {
		const query = this.#client.getQueryCache().build(this.#client, options);
		const result = this.createResult(query, options);
		if (shouldAssignObserverCurrentProperties(this, result)) {
			this.#currentResult = result;
			this.#currentResultOptions = this.options;
			this.#currentResultState = this.#currentQuery.state;
		}
		return result;
	}
	getCurrentResult() {
		return this.#currentResult;
	}
	trackResult(result, onPropTracked) {
		return new Proxy(result, { get: (target, key) => {
			this.trackProp(key);
			onPropTracked?.(key);
			if (key === "promise") {
				this.trackProp("data");
				if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") this.#currentThenable.reject(/* @__PURE__ */ new Error("experimental_prefetchInRender feature flag is not enabled"));
			}
			return Reflect.get(target, key);
		} });
	}
	trackProp(key) {
		this.#trackedProps.add(key);
	}
	getCurrentQuery() {
		return this.#currentQuery;
	}
	refetch({ ...options } = {}) {
		return this.fetch({ ...options });
	}
	fetchOptimistic(options) {
		const defaultedOptions = this.#client.defaultQueryOptions(options);
		const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
		return query.fetch().then(() => this.createResult(query, defaultedOptions));
	}
	fetch(fetchOptions) {
		return this.#executeFetch({
			...fetchOptions,
			cancelRefetch: fetchOptions.cancelRefetch ?? true
		}).then(() => {
			this.updateResult();
			return this.#currentResult;
		});
	}
	#executeFetch(fetchOptions) {
		this.#updateQuery();
		let promise = this.#currentQuery.fetch(this.options, fetchOptions);
		if (!fetchOptions?.throwOnError) promise = promise.catch(noop);
		return promise;
	}
	#updateStaleTimeout() {
		this.#clearStaleTimeout();
		const staleTime = resolveStaleTime(this.options.staleTime, this.#currentQuery);
		if (environmentManager.isServer() || this.#currentResult.isStale || !isValidTimeout(staleTime)) return;
		const timeout = timeUntilStale(this.#currentResult.dataUpdatedAt, staleTime) + 1;
		this.#staleTimeoutId = timeoutManager.setTimeout(() => {
			if (!this.#currentResult.isStale) this.updateResult();
		}, timeout);
	}
	#computeRefetchInterval() {
		return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
	}
	#updateRefetchInterval(nextInterval) {
		this.#clearRefetchInterval();
		this.#currentRefetchInterval = nextInterval;
		if (environmentManager.isServer() || resolveEnabled(this.options.enabled, this.#currentQuery) === false || !isValidTimeout(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) return;
		this.#refetchIntervalId = timeoutManager.setInterval(() => {
			if (this.options.refetchIntervalInBackground || focusManager.isFocused()) this.#executeFetch();
		}, this.#currentRefetchInterval);
	}
	#updateTimers() {
		this.#updateStaleTimeout();
		this.#updateRefetchInterval(this.#computeRefetchInterval());
	}
	#clearStaleTimeout() {
		if (this.#staleTimeoutId !== void 0) {
			timeoutManager.clearTimeout(this.#staleTimeoutId);
			this.#staleTimeoutId = void 0;
		}
	}
	#clearRefetchInterval() {
		if (this.#refetchIntervalId !== void 0) {
			timeoutManager.clearInterval(this.#refetchIntervalId);
			this.#refetchIntervalId = void 0;
		}
	}
	createResult(query, options) {
		const prevQuery = this.#currentQuery;
		const prevOptions = this.options;
		const prevResult = this.#currentResult;
		const prevResultState = this.#currentResultState;
		const prevResultOptions = this.#currentResultOptions;
		const queryInitialState = query !== prevQuery ? query.state : this.#currentQueryInitialState;
		const { state } = query;
		let newState = { ...state };
		let isPlaceholderData = false;
		let data;
		if (options._optimisticResults) {
			const mounted = this.hasListeners();
			const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
			const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
			if (fetchOnMount || fetchOptionally) newState = {
				...newState,
				...fetchState(state.data, query.options)
			};
			if (options._optimisticResults === "isRestoring") newState.fetchStatus = "idle";
		}
		let { error, errorUpdatedAt, status } = newState;
		data = newState.data;
		let skipSelect = false;
		if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
			let placeholderData;
			if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
				placeholderData = prevResult.data;
				skipSelect = true;
			} else placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
			if (placeholderData !== void 0) {
				status = "success";
				data = replaceData(prevResult?.data, placeholderData, options);
				isPlaceholderData = true;
			}
		}
		if (options.select && data !== void 0 && !skipSelect) if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) data = this.#selectResult;
		else try {
			this.#selectFn = options.select;
			data = options.select(data);
			data = replaceData(prevResult?.data, data, options);
			this.#selectResult = data;
			this.#selectError = null;
		} catch (selectError) {
			this.#selectError = selectError;
		}
		if (this.#selectError) {
			error = this.#selectError;
			data = this.#selectResult;
			errorUpdatedAt = Date.now();
			status = "error";
		}
		const isFetching = newState.fetchStatus === "fetching";
		const isPending = status === "pending";
		const isError = status === "error";
		const isLoading = isPending && isFetching;
		const hasData = data !== void 0;
		const nextResult = {
			status,
			fetchStatus: newState.fetchStatus,
			isPending,
			isSuccess: status === "success",
			isError,
			isInitialLoading: isLoading,
			isLoading,
			data,
			dataUpdatedAt: newState.dataUpdatedAt,
			error,
			errorUpdatedAt,
			failureCount: newState.fetchFailureCount,
			failureReason: newState.fetchFailureReason,
			errorUpdateCount: newState.errorUpdateCount,
			isFetched: query.isFetched(),
			isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
			isFetching,
			isRefetching: isFetching && !isPending,
			isLoadingError: isError && !hasData,
			isPaused: newState.fetchStatus === "paused",
			isPlaceholderData,
			isRefetchError: isError && hasData,
			isStale: isStale(query, options),
			refetch: this.refetch,
			promise: this.#currentThenable,
			isEnabled: resolveEnabled(options.enabled, query) !== false
		};
		if (this.options.experimental_prefetchInRender) {
			const hasResultData = nextResult.data !== void 0;
			const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
			const finalizeThenableIfPossible = (thenable) => {
				if (isErrorWithoutData) thenable.reject(nextResult.error);
				else if (hasResultData) thenable.resolve(nextResult.data);
			};
			const recreateThenable = () => {
				finalizeThenableIfPossible(this.#currentThenable = nextResult.promise = pendingThenable());
			};
			const prevThenable = this.#currentThenable;
			switch (prevThenable.status) {
				case "pending":
					if (query.queryHash === prevQuery.queryHash) finalizeThenableIfPossible(prevThenable);
					break;
				case "fulfilled":
					if (isErrorWithoutData || nextResult.data !== prevThenable.value) recreateThenable();
					break;
				case "rejected":
					if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) recreateThenable();
					break;
			}
		}
		return nextResult;
	}
	updateResult() {
		const prevResult = this.#currentResult;
		const nextResult = this.createResult(this.#currentQuery, this.options);
		this.#currentResultState = this.#currentQuery.state;
		this.#currentResultOptions = this.options;
		if (this.#currentResultState.data !== void 0) this.#lastQueryWithDefinedData = this.#currentQuery;
		if (shallowEqualObjects(nextResult, prevResult)) return;
		this.#currentResult = nextResult;
		const shouldNotifyListeners = () => {
			if (!prevResult) return true;
			const { notifyOnChangeProps } = this.options;
			const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
			if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) return true;
			const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
			if (this.options.throwOnError) includedProps.add("error");
			return Object.keys(this.#currentResult).some((key) => {
				const typedKey = key;
				return this.#currentResult[typedKey] !== prevResult[typedKey] && includedProps.has(typedKey);
			});
		};
		this.#notify({ listeners: shouldNotifyListeners() });
	}
	#updateQuery() {
		const query = this.#client.getQueryCache().build(this.#client, this.options);
		if (query === this.#currentQuery) return;
		const prevQuery = this.#currentQuery;
		this.#currentQuery = query;
		this.#currentQueryInitialState = query.state;
		if (this.hasListeners()) {
			prevQuery?.removeObserver(this);
			query.addObserver(this);
		}
	}
	onQueryUpdate() {
		this.updateResult();
		if (this.hasListeners()) this.#updateTimers();
	}
	#notify(notifyOptions) {
		notifyManager.batch(() => {
			if (notifyOptions.listeners) this.listeners.forEach((listener) => {
				listener(this.#currentResult);
			});
			this.#client.getQueryCache().notify({
				query: this.#currentQuery,
				type: "observerResultsUpdated"
			});
		});
	}
};
function shouldLoadOnMount(query, options) {
	return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
	return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
	if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
		const value = typeof field === "function" ? field(query) : field;
		return value === "always" || value !== false && isStale(query, options);
	}
	return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
	return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
	return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
	if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) return true;
	return false;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutation.js
var Mutation = class extends Removable {
	#client;
	#observers;
	#mutationCache;
	#retryer;
	constructor(config) {
		super();
		this.#client = config.client;
		this.mutationId = config.mutationId;
		this.#mutationCache = config.mutationCache;
		this.#observers = [];
		this.state = config.state || getDefaultState();
		this.setOptions(config.options);
		this.scheduleGc();
	}
	setOptions(options) {
		this.options = options;
		this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(observer) {
		if (!this.#observers.includes(observer)) {
			this.#observers.push(observer);
			this.clearGcTimeout();
			this.#mutationCache.notify({
				type: "observerAdded",
				mutation: this,
				observer
			});
		}
	}
	removeObserver(observer) {
		this.#observers = this.#observers.filter((x) => x !== observer);
		this.scheduleGc();
		this.#mutationCache.notify({
			type: "observerRemoved",
			mutation: this,
			observer
		});
	}
	optionalRemove() {
		if (!this.#observers.length) if (this.state.status === "pending") this.scheduleGc();
		else this.#mutationCache.remove(this);
	}
	continue() {
		return this.#retryer?.continue() ?? this.execute(this.state.variables);
	}
	async execute(variables) {
		const onContinue = () => {
			this.#dispatch({ type: "continue" });
		};
		const mutationFnContext = {
			client: this.#client,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#retryer = createRetryer({
			fn: () => {
				if (!this.options.mutationFn) return Promise.reject(/* @__PURE__ */ new Error("No mutationFn found"));
				return this.options.mutationFn(variables, mutationFnContext);
			},
			onFail: (failureCount, error) => {
				this.#dispatch({
					type: "failed",
					failureCount,
					error
				});
			},
			onPause: () => {
				this.#dispatch({ type: "pause" });
			},
			onContinue,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#mutationCache.canRun(this)
		});
		const restored = this.state.status === "pending";
		const isPaused = !this.#retryer.canStart();
		try {
			if (restored) onContinue();
			else {
				this.#dispatch({
					type: "pending",
					variables,
					isPaused
				});
				if (this.#mutationCache.config.onMutate) await this.#mutationCache.config.onMutate(variables, this, mutationFnContext);
				const context = await this.options.onMutate?.(variables, mutationFnContext);
				if (context !== this.state.context) this.#dispatch({
					type: "pending",
					context,
					variables,
					isPaused
				});
			}
			const data = await this.#retryer.start();
			await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
			await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
			await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
			await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
			this.#dispatch({
				type: "success",
				data
			});
			return data;
		} catch (error) {
			try {
				await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
			} catch (e) {
				Promise.reject(e);
			}
			this.#dispatch({
				type: "error",
				error
			});
			throw error;
		} finally {
			this.#mutationCache.runNext(this);
		}
	}
	#dispatch(action) {
		const reducer = (state) => {
			switch (action.type) {
				case "failed": return {
					...state,
					failureCount: action.failureCount,
					failureReason: action.error
				};
				case "pause": return {
					...state,
					isPaused: true
				};
				case "continue": return {
					...state,
					isPaused: false
				};
				case "pending": return {
					...state,
					context: action.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: action.isPaused,
					status: "pending",
					variables: action.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...state,
					data: action.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: false
				};
				case "error": return {
					...state,
					data: void 0,
					error: action.error,
					failureCount: state.failureCount + 1,
					failureReason: action.error,
					isPaused: false,
					status: "error"
				};
			}
		};
		this.state = reducer(this.state);
		notifyManager.batch(() => {
			this.#observers.forEach((observer) => {
				observer.onMutationUpdate(action);
			});
			this.#mutationCache.notify({
				mutation: this,
				type: "updated",
				action
			});
		});
	}
};
function getDefaultState() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: false,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var MutationObserver = class extends Subscribable {
	#client;
	#currentResult = void 0;
	#currentMutation;
	#mutateOptions;
	constructor(client, options) {
		super();
		this.#client = client;
		this.setOptions(options);
		this.bindMethods();
		this.#updateResult();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this);
		this.reset = this.reset.bind(this);
	}
	setOptions(options) {
		const prevOptions = this.options;
		this.options = this.#client.defaultMutationOptions(options);
		if (!shallowEqualObjects(this.options, prevOptions)) this.#client.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#currentMutation,
			observer: this
		});
		if (prevOptions?.mutationKey && this.options.mutationKey && hashKey(prevOptions.mutationKey) !== hashKey(this.options.mutationKey)) this.reset();
		else if (this.#currentMutation?.state.status === "pending") this.#currentMutation.setOptions(this.options);
	}
	onUnsubscribe() {
		if (!this.hasListeners()) this.#currentMutation?.removeObserver(this);
	}
	onMutationUpdate(action) {
		this.#updateResult();
		this.#notify(action);
	}
	getCurrentResult() {
		return this.#currentResult;
	}
	reset() {
		this.#currentMutation?.removeObserver(this);
		this.#currentMutation = void 0;
		this.#updateResult();
		this.#notify();
	}
	mutate(variables, options) {
		this.#mutateOptions = options;
		this.#currentMutation?.removeObserver(this);
		this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
		this.#currentMutation.addObserver(this);
		return this.#currentMutation.execute(variables);
	}
	#updateResult() {
		const state = this.#currentMutation?.state ?? getDefaultState();
		this.#currentResult = {
			...state,
			isPending: state.status === "pending",
			isSuccess: state.status === "success",
			isError: state.status === "error",
			isIdle: state.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#notify(action) {
		notifyManager.batch(() => {
			if (this.#mutateOptions && this.hasListeners()) {
				const variables = this.#currentResult.variables;
				const onMutateResult = this.#currentResult.context;
				const context = {
					client: this.#client,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (action?.type === "success") {
					try {
						this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (action?.type === "error") {
					try {
						this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((listener) => {
				listener(this.#currentResult);
			});
		});
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var import_jsx_runtime = require_jsx_runtime();
var QueryClientContext = import_react.createContext(void 0);
var useQueryClient = (queryClient) => {
	const client = import_react.useContext(QueryClientContext);
	if (queryClient) return queryClient;
	if (!client) throw new Error("No QueryClient set, use QueryClientProvider to set one");
	return client;
};
var QueryClientProvider = ({ client, children }) => {
	import_react.useEffect(() => {
		client.mount();
		return () => {
			client.unmount();
		};
	}, [client]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientContext.Provider, {
		value: client,
		children
	});
};
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js
var IsRestoringContext = import_react.createContext(false);
var useIsRestoring = () => import_react.useContext(IsRestoringContext);
IsRestoringContext.Provider;
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function createValue() {
	let isReset = false;
	return {
		clearReset: () => {
			isReset = false;
		},
		reset: () => {
			isReset = true;
		},
		isReset: () => {
			return isReset;
		}
	};
}
var QueryErrorResetBoundaryContext = import_react.createContext(createValue());
var useQueryErrorResetBoundary = () => import_react.useContext(QueryErrorResetBoundaryContext);
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
	const throwOnError = query?.state.error && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
	if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
		if (!errorResetBoundary.isReset()) options.retryOnMount = false;
	}
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
	import_react.useEffect(() => {
		errorResetBoundary.clearReset();
	}, [errorResetBoundary]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense }) => {
	return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/suspense.js
var ensureSuspenseTimers = (defaultedOptions) => {
	if (defaultedOptions.suspense) {
		const MIN_SUSPENSE_TIME_MS = 1e3;
		const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
		const originalStaleTime = defaultedOptions.staleTime;
		defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
		if (typeof defaultedOptions.gcTime === "number") defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
	}
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
	errorResetBoundary.clearReset();
});
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function useBaseQuery(options, Observer, queryClient) {
	const isRestoring = useIsRestoring();
	const errorResetBoundary = useQueryErrorResetBoundary();
	const client = useQueryClient(queryClient);
	const defaultedOptions = client.defaultQueryOptions(options);
	client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
	const query = client.getQueryCache().get(defaultedOptions.queryHash);
	defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
	ensureSuspenseTimers(defaultedOptions);
	ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
	useClearResetErrorBoundary(errorResetBoundary);
	const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
	const [observer] = import_react.useState(() => new Observer(client, defaultedOptions));
	const result = observer.getOptimisticResult(defaultedOptions);
	const shouldSubscribe = !isRestoring && options.subscribed !== false;
	import_react.useSyncExternalStore(import_react.useCallback((onStoreChange) => {
		const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
		observer.updateResult();
		return unsubscribe;
	}, [observer, shouldSubscribe]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
	import_react.useEffect(() => {
		observer.setOptions(defaultedOptions);
	}, [defaultedOptions, observer]);
	if (shouldSuspend(defaultedOptions, result)) throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
	if (getHasError({
		result,
		errorResetBoundary,
		throwOnError: defaultedOptions.throwOnError,
		query,
		suspense: defaultedOptions.suspense
	})) throw result.error;
	client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
	if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) (isNewCacheEntry ? fetchOptimistic(defaultedOptions, observer, errorResetBoundary) : query?.promise)?.catch(noop).finally(() => {
		observer.updateResult();
	});
	return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useQuery.js
function useQuery(options, queryClient) {
	return useBaseQuery(options, QueryObserver, queryClient);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/queryOptions.js
function queryOptions(options) {
	return options;
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useMutation.js
function useMutation(options, queryClient) {
	const client = useQueryClient(queryClient);
	const [observer] = import_react.useState(() => new MutationObserver(client, options));
	import_react.useEffect(() => {
		observer.setOptions(options);
	}, [observer, options]);
	const result = import_react.useSyncExternalStore(import_react.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
	const mutate = import_react.useCallback((variables, mutateOptions) => {
		observer.mutate(variables, mutateOptions).catch(noop);
	}, [observer]);
	if (result.error && shouldThrowError(observer.options.throwOnError, [result.error])) throw result.error;
	return {
		...result,
		mutate,
		mutateAsync: result.mutate
	};
}
//#endregion
//#region ../../node_modules/date-fns/constants.js
/**
* @constant
* @name daysInYear
* @summary Days in 1 year.
*
* @description
* How many days in a year.
*
* One years equals 365.2425 days according to the formula:
*
* > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
* > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
*/
var daysInYear = 365.2425;
-(Math.pow(10, 8) * 24 * 60 * 60 * 1e3);
/**
* @constant
* @name millisecondsInWeek
* @summary Milliseconds in 1 week.
*/
var millisecondsInWeek = 6048e5;
/**
* @constant
* @name millisecondsInDay
* @summary Milliseconds in 1 day.
*/
var millisecondsInDay = 864e5;
/**
* @constant
* @name millisecondsInMinute
* @summary Milliseconds in 1 minute
*/
var millisecondsInMinute = 6e4;
/**
* @constant
* @name millisecondsInHour
* @summary Milliseconds in 1 hour
*/
var millisecondsInHour = 36e5;
/**
* @constant
* @name millisecondsInSecond
* @summary Milliseconds in 1 second
*/
var millisecondsInSecond = 1e3;
/**
* @constant
* @name minutesInMonth
* @summary Minutes in 1 month.
*/
var minutesInMonth = 43200;
/**
* @constant
* @name minutesInDay
* @summary Minutes in 1 day.
*/
var minutesInDay = 1440;
/**
* @constant
* @name secondsInDay
* @summary Seconds in 1 day.
*/
var secondsInDay = 3600 * 24;
secondsInDay * 7;
secondsInDay * daysInYear / 12 * 3;
/**
* @constant
* @name constructFromSymbol
* @summary Symbol enabling Date extensions to inherit properties from the reference date.
*
* The symbol is used to enable the `constructFrom` function to construct a date
* using a reference date and a value. It allows to transfer extra properties
* from the reference date to the new date. It's useful for extensions like
* [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
* a constructor argument.
*/
var constructFromSymbol = Symbol.for("constructDateFrom");
//#endregion
//#region ../../node_modules/date-fns/constructFrom.js
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from "./constructFrom/date-fns";
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date>(date: DateType): DateType {
*   return constructFrom(
*     date, // Use constructor from the given date
*     date.getTime() // Use the date value to create a new date
*   );
* }
*/
function constructFrom(date, value) {
	if (typeof date === "function") return date(value);
	if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
	if (date instanceof Date) return new date.constructor(value);
	return new Date(value);
}
//#endregion
//#region ../../node_modules/date-fns/toDate.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument, context) {
	return constructFrom(context || argument, argument);
}
//#endregion
//#region ../../node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
	return defaultOptions;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const _date = toDate(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
	const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
	return dates.map(normalize);
}
//#endregion
//#region ../../node_modules/date-fns/compareAsc.js
/**
* @name compareAsc
* @category Common Helpers
* @summary Compare the two dates and return -1, 0 or 1.
*
* @description
* Compare the two dates and return 1 if the first date is after the second,
* -1 if the first date is before the second or 0 if dates are equal.
*
* @param dateLeft - The first date to compare
* @param dateRight - The second date to compare
*
* @returns The result of the comparison
*
* @example
* // Compare 11 February 1987 and 10 July 1989:
* const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
* //=> -1
*
* @example
* // Sort the array of dates:
* const result = [
*   new Date(1995, 6, 2),
*   new Date(1987, 1, 11),
*   new Date(1989, 6, 10)
* ].sort(compareAsc)
* //=> [
* //   Wed Feb 11 1987 00:00:00,
* //   Mon Jul 10 1989 00:00:00,
* //   Sun Jul 02 1995 00:00:00
* // ]
*/
function compareAsc(dateLeft, dateRight) {
	const diff = +toDate(dateLeft) - +toDate(dateRight);
	if (diff < 0) return -1;
	else if (diff > 0) return 1;
	return diff;
}
//#endregion
//#region ../../node_modules/date-fns/constructNow.js
/**
* @name constructNow
* @category Generic Helpers
* @summary Constructs a new current date using the passed value constructor.
* @pure false
*
* @description
* The function constructs a new current date using the constructor from
* the reference date. It helps to build generic functions that accept date
* extensions and use the current date.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* @param date - The reference date to take constructor from
*
* @returns Current date initialized using the given date constructor
*
* @example
* import { constructNow, isSameDay } from 'date-fns'
*
* function isToday<DateType extends Date>(
*   date: DateArg<DateType>,
* ): boolean {
*   // If we were to use `new Date()` directly, the function would  behave
*   // differently in different timezones and return false for the same date.
*   return isSameDay(date, constructNow(date));
* }
*/
function constructNow(date) {
	return constructFrom(date, Date.now());
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarMonths.js
/**
* The {@link differenceInCalendarMonths} function options.
*/
/**
* @name differenceInCalendarMonths
* @category Month Helpers
* @summary Get the number of calendar months between the given dates.
*
* @description
* Get the number of calendar months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of calendar months
*
* @example
* // How many calendar months are between 31 January 2014 and 1 September 2014?
* const result = differenceInCalendarMonths(
*   new Date(2014, 8, 1),
*   new Date(2014, 0, 31)
* )
* //=> 8
*/
function differenceInCalendarMonths(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
	const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
	return yearsDiff * 12 + monthsDiff;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/getRoundingMethod.js
function getRoundingMethod(method) {
	return (number) => {
		const result = (method ? Math[method] : Math.trunc)(number);
		return result === 0 ? 0 : result;
	};
}
//#endregion
//#region ../../node_modules/date-fns/differenceInMilliseconds.js
/**
* @name differenceInMilliseconds
* @category Millisecond Helpers
* @summary Get the number of milliseconds between the given dates.
*
* @description
* Get the number of milliseconds between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
*
* @returns The number of milliseconds
*
* @example
* // How many milliseconds are between
* // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
* const result = differenceInMilliseconds(
*   new Date(2014, 6, 2, 12, 30, 21, 700),
*   new Date(2014, 6, 2, 12, 30, 20, 600)
* )
* //=> 1100
*/
function differenceInMilliseconds(laterDate, earlierDate) {
	return +toDate(laterDate) - +toDate(earlierDate);
}
//#endregion
//#region ../../node_modules/date-fns/endOfDay.js
/**
* The {@link endOfDay} function options.
*/
/**
* @name endOfDay
* @category Day Helpers
* @summary Return the end of a day for the given date.
*
* @description
* Return the end of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a day
*
* @example
* // The end of a day for 2 September 2014 11:55:00:
* const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 23:59:59.999
*/
function endOfDay(date, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region ../../node_modules/date-fns/endOfMonth.js
/**
* The {@link endOfMonth} function options.
*/
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region ../../node_modules/date-fns/isLastDayOfMonth.js
/**
* @name isLastDayOfMonth
* @category Month Helpers
* @summary Is the given date the last day of a month?
*
* @description
* Is the given date the last day of a month?
*
* @param date - The date to check
* @param options - An object with options
*
* @returns The date is the last day of a month
*
* @example
* // Is 28 February 2014 the last day of a month?
* const result = isLastDayOfMonth(new Date(2014, 1, 28))
* //=> true
*/
function isLastDayOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	return +endOfDay(_date, options) === +endOfMonth(_date, options);
}
//#endregion
//#region ../../node_modules/date-fns/differenceInMonths.js
/**
* The {@link differenceInMonths} function options.
*/
/**
* @name differenceInMonths
* @category Month Helpers
* @summary Get the number of full months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of full months
*
* @example
* // How many full months are between 31 January 2014 and 1 September 2014?
* const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
* //=> 7
*/
function differenceInMonths(laterDate, earlierDate, options) {
	const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(options?.in, laterDate, laterDate, earlierDate);
	const sign = compareAsc(workingLaterDate, earlierDate_);
	const difference = Math.abs(differenceInCalendarMonths(workingLaterDate, earlierDate_));
	if (difference < 1) return 0;
	if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
	workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
	let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
	if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) isLastMonthNotFull = false;
	const result = sign * (difference - +isLastMonthNotFull);
	return result === 0 ? 0 : result;
}
//#endregion
//#region ../../node_modules/date-fns/differenceInSeconds.js
/**
* The {@link differenceInSeconds} function options.
*/
/**
* @name differenceInSeconds
* @category Second Helpers
* @summary Get the number of seconds between the given dates.
*
* @description
* Get the number of seconds between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options.
*
* @returns The number of seconds
*
* @example
* // How many seconds are between
* // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
* const result = differenceInSeconds(
*   new Date(2014, 6, 2, 12, 30, 20, 0),
*   new Date(2014, 6, 2, 12, 30, 7, 999)
* )
* //=> 12
*/
function differenceInSeconds(laterDate, earlierDate, options) {
	const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
	return getRoundingMethod(options?.roundingMethod)(diff);
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
};
var formatDistance$1 = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "in " + result;
	else return result + " ago";
	return result;
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
	return (options = {}) => {
		const width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region ../../node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
* The localize function argument callback which allows to convert raw value to
* the actual type.
*
* @param value - The value to convert
*
* @returns The converted value
*/
/**
* The map of localized values for each width.
*/
/**
* The index type of the locale unit value. It types conversion of units of
* values that don't start at 0 (i.e. quarters).
*/
/**
* Converts the unit value to the tuple of values.
*/
/**
* The tuple of localized era values. The first element represents BC,
* the second element represents AD.
*/
/**
* The tuple of localized quarter values. The first element represents Q1.
*/
/**
* The tuple of localized day values. The first element represents Sunday.
*/
/**
* The tuple of localized month values. The first element represents January.
*/
function buildLocalizeFn(args) {
	return (value, options) => {
		const context = options?.context ? String(options.context) : "standalone";
		let valuesArray;
		if (context === "formatting" && args.formattingValues) {
			const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			const width = options?.width ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			const defaultWidth = args.defaultWidth;
			const width = options?.width ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[width] || args.values[defaultWidth];
		}
		const index = args.argumentCallback ? args.argumentCallback(value) : value;
		return valuesArray[index];
	};
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
	narrow: ["B", "A"],
	abbreviated: ["BC", "AD"],
	wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1st quarter",
		"2nd quarter",
		"3rd quarter",
		"4th quarter"
	]
};
var monthValues = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	wide: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	short: [
		"Su",
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	wide: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1: return number + "st";
		case 2: return number + "nd";
		case 3: return number + "rd";
	}
	return number + "th";
};
var localize = {
	ordinalNumber,
	era: buildLocalizeFn({
		values: eraValues,
		defaultWidth: "wide"
	}),
	quarter: buildLocalizeFn({
		values: quarterValues,
		defaultWidth: "wide",
		argumentCallback: (quarter) => quarter - 1
	}),
	month: buildLocalizeFn({
		values: monthValues,
		defaultWidth: "wide"
	}),
	day: buildLocalizeFn({
		values: dayValues,
		defaultWidth: "wide"
	}),
	dayPeriod: buildLocalizeFn({
		values: dayPeriodValues,
		defaultWidth: "wide",
		formattingValues: formattingDayPeriodValues,
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
	return (string, options = {}) => {
		const width = options.width;
		const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		const matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
		let value;
		value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (let key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
	return (string, options = {}) => {
		const matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
var match$1 = {
	ordinalNumber: buildMatchPatternFn({
		matchPattern: /^(\d+)(th|st|nd|rd)?/i,
		parsePattern: /\d+/i,
		valueCallback: (value) => parseInt(value, 10)
	}),
	era: buildMatchFn({
		matchPatterns: {
			narrow: /^(b|a)/i,
			abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
			wide: /^(before christ|before common era|anno domini|common era)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [/^b/i, /^(a|c)/i] },
		defaultParseWidth: "any"
	}),
	quarter: buildMatchFn({
		matchPatterns: {
			narrow: /^[1234]/i,
			abbreviated: /^q[1234]/i,
			wide: /^[1234](th|st|nd|rd)? quarter/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: { any: [
			/1/i,
			/2/i,
			/3/i,
			/4/i
		] },
		defaultParseWidth: "any",
		valueCallback: (index) => index + 1
	}),
	month: buildMatchFn({
		matchPatterns: {
			narrow: /^[jfmasond]/i,
			abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
			wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^j/i,
				/^f/i,
				/^m/i,
				/^a/i,
				/^m/i,
				/^j/i,
				/^j/i,
				/^a/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			],
			any: [
				/^ja/i,
				/^f/i,
				/^mar/i,
				/^ap/i,
				/^may/i,
				/^jun/i,
				/^jul/i,
				/^au/i,
				/^s/i,
				/^o/i,
				/^n/i,
				/^d/i
			]
		},
		defaultParseWidth: "any"
	}),
	day: buildMatchFn({
		matchPatterns: {
			narrow: /^[smtwf]/i,
			short: /^(su|mo|tu|we|th|fr|sa)/i,
			abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
			wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
		},
		defaultMatchWidth: "wide",
		parsePatterns: {
			narrow: [
				/^s/i,
				/^m/i,
				/^t/i,
				/^w/i,
				/^t/i,
				/^f/i,
				/^s/i
			],
			any: [
				/^su/i,
				/^m/i,
				/^tu/i,
				/^w/i,
				/^th/i,
				/^f/i,
				/^sa/i
			]
		},
		defaultParseWidth: "any"
	}),
	dayPeriod: buildMatchFn({
		matchPatterns: {
			narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
			any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
		},
		defaultMatchWidth: "any",
		parsePatterns: { any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		} },
		defaultParseWidth: "any"
	})
};
//#endregion
//#region ../../node_modules/date-fns/locale/en-US.js
/**
* @category Locales
* @summary English locale (United States).
* @language English
* @iso-639-2 eng
* @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
* @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
*/
var enUS = {
	code: "en-US",
	formatDistance: formatDistance$1,
	formatLong,
	formatRelative,
	localize,
	match: match$1,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region ../../node_modules/date-fns/formatDistance.js
/**
* The {@link formatDistance} function options.
*/
/**
* @name formatDistance
* @category Common Helpers
* @summary Return the distance between the given dates in words.
*
* @description
* Return the distance between the given dates in words.
*
* | Distance between dates                                            | Result              |
* |-------------------------------------------------------------------|---------------------|
* | 0 ... 30 secs                                                     | less than a minute  |
* | 30 secs ... 1 min 30 secs                                         | 1 minute            |
* | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
* | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
* | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
* | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
* | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
* | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
* | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
* | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
* | 1 yr ... 1 yr 3 months                                            | about 1 year        |
* | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
* | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
* | N yrs ... N yrs 3 months                                          | about N years       |
* | N yrs 3 months ... N yrs 9 months                                 | over N years        |
* | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
*
* With `options.includeSeconds == true`:
* | Distance between dates | Result               |
* |------------------------|----------------------|
* | 0 secs ... 5 secs      | less than 5 seconds  |
* | 5 secs ... 10 secs     | less than 10 seconds |
* | 10 secs ... 20 secs    | less than 20 seconds |
* | 20 secs ... 40 secs    | half a minute        |
* | 40 secs ... 60 secs    | less than a minute   |
* | 60 secs ... 90 secs    | 1 minute             |
*
* @param laterDate - The date
* @param earlierDate - The date to compare with
* @param options - An object with options
*
* @returns The distance in words
*
* @throws `date` must not be Invalid Date
* @throws `baseDate` must not be Invalid Date
* @throws `options.locale` must contain `formatDistance` property
*
* @example
* // What is the distance between 2 July 2014 and 1 January 2015?
* const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
* //=> '6 months'
*
* @example
* // What is the distance between 1 January 2015 00:00:15
* // and 1 January 2015 00:00:00, including seconds?
* const result = formatDistance(
*   new Date(2015, 0, 1, 0, 0, 15),
*   new Date(2015, 0, 1, 0, 0, 0),
*   { includeSeconds: true }
* )
* //=> 'less than 20 seconds'
*
* @example
* // What is the distance from 1 January 2016
* // to 1 January 2015, with a suffix?
* const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
*   addSuffix: true
* })
* //=> 'about 1 year ago'
*
* @example
* // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
* import { eoLocale } from 'date-fns/locale/eo'
* const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
*   locale: eoLocale
* })
* //=> 'pli ol 1 jaro'
*/
function formatDistance(laterDate, earlierDate, options) {
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS;
	const minutesInAlmostTwoDays = 2520;
	const comparison = compareAsc(laterDate, earlierDate);
	if (isNaN(comparison)) throw new RangeError("Invalid time value");
	const localizeOptions = Object.assign({}, options, {
		addSuffix: options?.addSuffix,
		comparison
	});
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]);
	const seconds = differenceInSeconds(earlierDate_, laterDate_);
	const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
	const minutes = Math.round((seconds - offsetInSeconds) / 60);
	let months;
	if (minutes < 2) if (options?.includeSeconds) if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
	else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
	else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
	else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
	else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
	else return locale.formatDistance("xMinutes", 1, localizeOptions);
	else if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
	else return locale.formatDistance("xMinutes", minutes, localizeOptions);
	else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
	else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
	else if (minutes < 1440) {
		const hours = Math.round(minutes / 60);
		return locale.formatDistance("aboutXHours", hours, localizeOptions);
	} else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
	else if (minutes < 43200) {
		const days = Math.round(minutes / minutesInDay);
		return locale.formatDistance("xDays", days, localizeOptions);
	} else if (minutes < 43200 * 2) {
		months = Math.round(minutes / minutesInMonth);
		return locale.formatDistance("aboutXMonths", months, localizeOptions);
	}
	months = differenceInMonths(earlierDate_, laterDate_);
	if (months < 12) {
		const nearestMonth = Math.round(minutes / minutesInMonth);
		return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
	} else {
		const monthsSinceStartOfYear = months % 12;
		const years = Math.trunc(months / 12);
		if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
		else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
		else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
	}
}
//#endregion
//#region ../../node_modules/date-fns/formatDistanceToNow.js
/**
* The {@link formatDistanceToNow} function options.
*/
/**
* @name formatDistanceToNow
* @category Common Helpers
* @summary Return the distance between the given date and now in words.
* @pure false
*
* @description
* Return the distance between the given date and now in words.
*
* | Distance to now                                                   | Result              |
* |-------------------------------------------------------------------|---------------------|
* | 0 ... 30 secs                                                     | less than a minute  |
* | 30 secs ... 1 min 30 secs                                         | 1 minute            |
* | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
* | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
* | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
* | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
* | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
* | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
* | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
* | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
* | 1 yr ... 1 yr 3 months                                            | about 1 year        |
* | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
* | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
* | N yrs ... N yrs 3 months                                          | about N years       |
* | N yrs 3 months ... N yrs 9 months                                 | over N years        |
* | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
*
* With `options.includeSeconds == true`:
* | Distance to now     | Result               |
* |---------------------|----------------------|
* | 0 secs ... 5 secs   | less than 5 seconds  |
* | 5 secs ... 10 secs  | less than 10 seconds |
* | 10 secs ... 20 secs | less than 20 seconds |
* | 20 secs ... 40 secs | half a minute        |
* | 40 secs ... 60 secs | less than a minute   |
* | 60 secs ... 90 secs | 1 minute             |
*
* @param date - The given date
* @param options - The object with options
*
* @returns The distance in words
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `formatDistance` property
*
* @example
* // If today is 1 January 2015, what is the distance to 2 July 2014?
* const result = formatDistanceToNow(
*   new Date(2014, 6, 2)
* )
* //=> '6 months'
*
* @example
* // If now is 1 January 2015 00:00:00,
* // what is the distance to 1 January 2015 00:00:15, including seconds?
* const result = formatDistanceToNow(
*   new Date(2015, 0, 1, 0, 0, 15),
*   {includeSeconds: true}
* )
* //=> 'less than 20 seconds'
*
* @example
* // If today is 1 January 2015,
* // what is the distance to 1 January 2016, with a suffix?
* const result = formatDistanceToNow(
*   new Date(2016, 0, 1),
*   {addSuffix: true}
* )
* //=> 'in about 1 year'
*
* @example
* // If today is 1 January 2015,
* // what is the distance to 1 August 2016 in Esperanto?
* const eoLocale = require('date-fns/locale/eo')
* const result = formatDistanceToNow(
*   new Date(2016, 7, 1),
*   {locale: eoLocale}
* )
* //=> 'pli ol 1 jaro'
*/
function formatDistanceToNow(date, options) {
	return formatDistance(date, constructNow(date), options);
}
//#endregion
//#region ../loot-core/src/shared/util.ts
function last(arr) {
	return arr[arr.length - 1];
}
function getChangedValues(obj1, obj2) {
	const diff = {};
	const keys = Object.keys(obj2);
	let hasChanged = false;
	if (obj1.id) diff.id = obj1.id;
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (obj1[key] !== obj2[key]) {
			diff[key] = obj2[key];
			hasChanged = true;
		}
	}
	return hasChanged ? diff : null;
}
function applyChanges(changes, items) {
	items = [...items];
	if (changes.added) changes.added.forEach((add) => {
		items.push(add);
	});
	if (changes.updated) changes.updated.forEach(({ id, ...fields }) => {
		const idx = items.findIndex((t) => t.id === id);
		items[idx] = {
			...items[idx],
			...fields
		};
	});
	if (changes.deleted) changes.deleted.forEach((t) => {
		const idx = items.findIndex((t2) => t.id === t2.id);
		if (idx !== -1) items.splice(idx, 1);
	});
	return items;
}
function _groupById(data) {
	const res = /* @__PURE__ */ new Map();
	for (let i = 0; i < data.length; i++) {
		const item = data[i];
		res.set(item.id, item);
	}
	return res;
}
function diffItems(items, newItems) {
	const grouped = _groupById(items);
	const newGrouped = _groupById(newItems);
	const added = [];
	const updated = [];
	const deleted = items.filter((item) => !newGrouped.has(item.id)).map((item) => ({ id: item.id }));
	newItems.forEach((newItem) => {
		const item = grouped.get(newItem.id);
		if (!item) added.push(newItem);
		else {
			const changes = getChangedValues(item, newItem);
			if (changes) updated.push(changes);
		}
	});
	return {
		added,
		updated,
		deleted
	};
}
function groupById(data) {
	if (!data) return {};
	const res = {};
	for (let i = 0; i < data.length; i++) {
		const item = data[i];
		res[item.id] = item;
	}
	return res;
}
function titleFirst(str) {
	if (!str || str.length <= 1) return str?.toUpperCase() ?? "";
	return str[0].toUpperCase() + str.slice(1);
}
function reapplyThousandSeparators(amountText) {
	if (!amountText || typeof amountText !== "string") return amountText;
	const { decimalSeparator, thousandsSeparator, value } = getNumberFormat();
	const [integerPartRaw, decimalPart = ""] = amountText.split(decimalSeparator);
	const numericValue = Number((value === "apostrophe-dot" ? (s) => s.replaceAll(/[\u2019\u0027]/g, "") : (s) => s.replaceAll(thousandsSeparator, ""))(integerPartRaw));
	if (isNaN(numericValue)) return amountText;
	const integerPart = numericValue.toLocaleString("en-US").replaceAll(",", thousandsSeparator);
	return decimalPart ? integerPart + decimalSeparator + decimalPart : integerPart;
}
function appendDecimals(amountText, hideDecimals = false) {
	const { decimalSeparator: separator } = getNumberFormat();
	let result = amountText;
	if (result.slice(-1) === separator) result = result.slice(0, -1);
	if (!hideDecimals) {
		result = result.replaceAll(/[,.]/g, "");
		result = result.replace(/^0+(?!$)/, "");
		result = result.padStart(3, "0");
		result = result.slice(0, -2) + separator + result.slice(-2);
	}
	return amountToCurrency(currencyToAmount(result));
}
var NUMBER_FORMATS = [
	"comma-dot",
	"dot-comma",
	"space-comma",
	"apostrophe-dot",
	"comma-dot",
	"comma-dot-in"
];
function isNumberFormat(input = "") {
	return NUMBER_FORMATS.includes(input);
}
var numberFormats = [
	{
		value: "comma-dot",
		label: "1,000.33",
		labelNoFraction: "1,000"
	},
	{
		value: "dot-comma",
		label: "1.000,33",
		labelNoFraction: "1.000"
	},
	{
		value: "space-comma",
		label: "1 000,33",
		labelNoFraction: "1 000"
	},
	{
		value: "apostrophe-dot",
		label: "1'000.33",
		labelNoFraction: "1'000"
	},
	{
		value: "comma-dot-in",
		label: "1,00,000.33",
		labelNoFraction: "1,00,000"
	}
];
var numberFormatConfig = {
	format: "comma-dot",
	hideFraction: false
};
function parseNumberFormat({ format, hideFraction }) {
	return {
		format: isNumberFormat(format) ? format : "comma-dot",
		hideFraction: String(hideFraction) === "true"
	};
}
function setNumberFormat(config) {
	numberFormatConfig = config;
}
function getNumberFormat({ format = numberFormatConfig.format, hideFraction = numberFormatConfig.hideFraction, decimalPlaces } = numberFormatConfig) {
	let locale, thousandsSeparator, decimalSeparator;
	const currentFormat = format || numberFormatConfig.format;
	const currentHideFraction = typeof hideFraction === "boolean" ? hideFraction : numberFormatConfig.hideFraction;
	switch (format) {
		case "space-comma":
			locale = "fr-FR";
			thousandsSeparator = " ";
			decimalSeparator = ",";
			break;
		case "dot-comma":
			locale = "de-DE";
			thousandsSeparator = ".";
			decimalSeparator = ",";
			break;
		case "apostrophe-dot":
			locale = "de-CH";
			thousandsSeparator = "’";
			decimalSeparator = ".";
			break;
		case "comma-dot-in":
			locale = "en-IN";
			thousandsSeparator = ",";
			decimalSeparator = ".";
			break;
		default:
			locale = "en-US";
			thousandsSeparator = ",";
			decimalSeparator = ".";
	}
	const fractionDigitsOptions = typeof decimalPlaces === "number" ? {
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces
	} : {
		minimumFractionDigits: currentHideFraction ? 0 : 2,
		maximumFractionDigits: currentHideFraction ? 0 : 2
	};
	const intlFormatter = new Intl.NumberFormat(locale, fractionDigitsOptions);
	return {
		value: currentFormat,
		thousandsSeparator,
		decimalSeparator,
		formatter: { format: (value) => {
			let formatted = intlFormatter.format(value);
			if (currentFormat === "apostrophe-dot") formatted = formatted.replace(/'/g, "’");
			return formatted === "-0" ? "0" : formatted;
		} }
	};
}
var MAX_SAFE_NUMBER = 2 ** 51 - 1;
var MIN_SAFE_NUMBER = -MAX_SAFE_NUMBER;
function safeNumber(value) {
	if (!Number.isInteger(value)) throw new Error("safeNumber: number is not an integer: " + JSON.stringify(value));
	if (value > MAX_SAFE_NUMBER || value < MIN_SAFE_NUMBER) throw new Error("safeNumber: can't safely perform arithmetic with number: " + value);
	return value;
}
function toRelaxedNumber(currencyAmount) {
	return integerToAmount(currencyToInteger(currencyAmount) || 0);
}
function integerToCurrency(integerAmount, formatter = getNumberFormat().formatter, decimalPlaces = 2) {
	const divisor = Math.pow(10, decimalPlaces);
	const amount = safeNumber(integerAmount) / divisor;
	return formatter.format(amount);
}
function integerToCurrencyWithDecimal(integerAmount) {
	if (integerAmount % 100 !== 0) return integerToCurrency(integerAmount, getNumberFormat({
		...numberFormatConfig,
		hideFraction: false
	}).formatter);
	return integerToCurrency(integerAmount);
}
function amountToCurrency(amount) {
	return getNumberFormat().formatter.format(amount);
}
function currencyToAmount(currencyAmount) {
	currencyAmount = currencyAmount.replace(/\u2212/g, "-");
	let integer, fraction;
	const match = currencyAmount.match(/[,.](?=[^.,]*$)/);
	if (!match || match[0] === getNumberFormat().thousandsSeparator && match.index + 4 <= currencyAmount.length) {
		fraction = null;
		integer = currencyAmount.replace(/[^\d-]/g, "");
	} else {
		integer = currencyAmount.slice(0, match.index).replace(/[^\d-]/g, "");
		fraction = currencyAmount.slice(match.index + 1);
	}
	const amount = parseFloat(integer + "." + fraction);
	return isNaN(amount) ? null : amount;
}
function currencyToInteger(currencyAmount) {
	const amount = currencyToAmount(currencyAmount);
	return amount == null ? null : amountToInteger(amount);
}
function amountToInteger(amount, decimalPlaces = 2) {
	return Math.round(amount * Math.pow(10, decimalPlaces));
}
function integerToAmount(integerAmount, decimalPlaces = 2) {
	return integerAmount / Math.pow(10, decimalPlaces);
}
function looselyParseAmount(amount) {
	function safeNumber(v) {
		if (isNaN(v)) return null;
		const value = v * 100;
		if (value > MAX_SAFE_NUMBER || value < MIN_SAFE_NUMBER) return null;
		return v;
	}
	function extractNumbers(v) {
		return v.replace(/[^0-9-]/g, "");
	}
	amount = amount.trim();
	if (amount.startsWith("(") && amount.endsWith(")")) {
		amount = amount.replace(/\u2212/g, "");
		amount = amount.replace("(", "-").replace(")", "");
	} else amount = amount.replace(/\u2212/g, "-");
	const m = amount.match(/[.,]([^.,]{4,9}|[^.,]{1,2})$/);
	if (!m || m.index === void 0) return safeNumber(parseFloat(extractNumbers(amount)));
	const left = extractNumbers(amount.slice(0, m.index));
	const right = extractNumbers(amount.slice(m.index + 1));
	return safeNumber(parseFloat(left + "." + right));
}
function tsToRelativeTime(ts, locale, options = { capitalize: false }) {
	if (!ts) return "Unknown";
	let distance = formatDistanceToNow(new Date(parseInt(ts, 10)), {
		addSuffix: true,
		locale
	});
	if (options.capitalize) distance = distance.charAt(0).toUpperCase() + distance.slice(1);
	return distance;
}
function applyFindReplace(text, find, replace, useRegex) {
	if (find === "") return text ?? "";
	if (!text) return "";
	try {
		const pattern = useRegex ? new RegExp(find, "g") : find;
		return text.replaceAll(pattern, replace);
	} catch {
		return text;
	}
}
//#endregion
//#region ../../node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
	return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
	if (first === second) return true;
	if (safeIsNaN(first) && safeIsNaN(second)) return true;
	return false;
}
function areInputsEqual(newInputs, lastInputs) {
	if (newInputs.length !== lastInputs.length) return false;
	for (var i = 0; i < newInputs.length; i++) if (!isEqual(newInputs[i], lastInputs[i])) return false;
	return true;
}
function memoizeOne(resultFn, isEqual) {
	if (isEqual === void 0) isEqual = areInputsEqual;
	var cache = null;
	function memoized() {
		var newArgs = [];
		for (var _i = 0; _i < arguments.length; _i++) newArgs[_i] = arguments[_i];
		if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) return cache.lastResult;
		var lastResult = resultFn.apply(this, newArgs);
		cache = {
			lastResult,
			lastArgs: newArgs,
			lastThis: this
		};
		return lastResult;
	}
	memoized.clear = function clear() {
		cache = null;
	};
	return memoized;
}
//#endregion
//#region ../loot-core/src/shared/errors.ts
function getUploadError({ reason, meta }) {
	switch (reason) {
		case "unauthorized": return t$1("You are not logged in.");
		case "encrypt-failure":
			if (meta.isMissingKey) return t$1("Encrypting your file failed because you are missing your encryption key. Create your key in the next step.");
			return t$1("Encrypting the file failed. You have the correct key so this is an internal bug. To fix this, generate a new key in the next step.");
		case "file-has-reset": return t$1("Something went wrong while resetting your file. Please try again.");
		case "file-has-new-key": return t$1("Unable to encrypt your data because you are missing the key. Create the latest key in the next step.");
		case "network": return t$1("Uploading the file failed. Check your network connection.");
		default: return t$1("An internal error occurred, sorry! Visit https://actualbudget.org/contact/ for support. (ref: {{reason}})", { reason });
	}
}
function getDownloadError({ reason, meta, fileName }) {
	switch (reason) {
		case "network":
		case "download-failure": return t$1("Downloading the file failed. Check your network connection.");
		case "not-zip-file":
		case "invalid-zip-file":
		case "invalid-meta-file": return t$1("Downloaded file is invalid, sorry! Visit https://actualbudget.org/contact/ for support.");
		case "decrypt-failure": return "Unable to decrypt file " + (fileName || "(unknown)") + ". To change your key, first download this file with the proper password.";
		case "out-of-sync-migrations": return t$1("This budget cannot be loaded with this version of the app. Make sure the app is up-to-date.");
		case "clock-drift": return t$1("Failed to download the budget because your device time differs too much from the server. Please check your device time settings and ensure they are correct.");
		default: return t$1("Something went wrong trying to download that file, sorry! Visit https://actualbudget.org/contact/ for support. reason: {{reason}}{{info}}", {
			reason,
			info: meta && typeof meta === "object" && "fileId" in meta && meta.fileId ? `, fileId: ${String(meta.fileId)}` : ""
		});
	}
}
function getCreateKeyError(error) {
	return getUploadError(error);
}
function getTestKeyError({ reason }) {
	switch (reason) {
		case "network": return t$1("Unable to connect to the server. We need to access the server to get some information about your keys.");
		case "old-key-style": return t$1("This file is encrypted with an old unsupported key style. Recreate the key on a device where the file is available, or use an older version of Actual to download it.");
		case "decrypt-failure": return t$1("Unable to decrypt file with this password. Please try again.");
		default: return t$1("Something went wrong trying to create a key, sorry! Visit https://actualbudget.org/contact/ for support.");
	}
}
function getSyncError(error, id) {
	if (error === "out-of-sync-migrations" || error === "out-of-sync-data") return t$1("This budget cannot be loaded with this version of the app.");
	else if (error === "budget-not-found") return t$1("Budget \"{{id}}\" not found. Check the ID of your budget in the Advanced section of the settings page.", { id });
	else if (error === "clock-drift") return t$1("Failed to sync because your device time differs too much from the server. Please check your device time settings and ensure they are correct.");
	else return t$1("We had an unknown problem opening \"{{id}}\".", { id });
}
var LazyLoadFailedError = class extends Error {
	type = "app-init-failure";
	meta = {};
	constructor(name, cause) {
		super(`Error: failed loading lazy-loaded module ${name}`);
		this.meta = { name };
		this.cause = cause;
	}
};
function getUserAccessErrors(reason) {
	switch (reason) {
		case "unauthorized": return t$1("You are not logged in.");
		case "token-expired": return t$1("Login expired, please log in again.");
		case "user-cant-be-empty": return t$1("Please select a user.");
		case "invalid-file-id": return t$1("This file is invalid.");
		case "file-denied": return t$1("You don`t have permissions over this file.");
		case "user-already-have-access": return t$1("User already has access.");
		default: return t$1("An internal error occurred, sorry! Visit https://actualbudget.org/contact/ for support. (ref: {{reason}})", { reason });
	}
}
function getSecretsError(error, reason) {
	switch (reason) {
		case "unauthorized": return t$1("You are not logged in.");
		case "not-admin": return t$1("You have to be admin to set secrets");
		default: return error;
	}
}
function getOpenIdErrors(reason) {
	switch (reason) {
		case "unauthorized": return t$1("You are not logged in.");
		case "configuration-error": return t$1("This configuration is not valid. Please check it again.");
		case "unable-to-change-file-config-enabled": return t$1("Unable to enable OpenID. Please update the config.json file in this case.");
		default: return t$1("An internal error occurred, sorry! Visit https://actualbudget.org/contact/ for support. (ref: {{reason}})", { reason });
	}
}
//#endregion
//#region src/accounts/queries.ts
function selectActive(accounts) {
	return accounts.filter((account) => !account.closed);
}
var accountQueries = {
	all: () => ["accounts"],
	lists: () => [...accountQueries.all(), "lists"],
	list: () => queryOptions({
		queryKey: [...accountQueries.lists()],
		queryFn: async () => {
			return await send("accounts-get");
		},
		placeholderData: [],
		staleTime: Infinity
	}),
	listActive: () => queryOptions({
		...accountQueries.list(),
		select: selectActive
	}),
	listClosed: () => queryOptions({
		...accountQueries.list(),
		select: (accounts) => accounts.filter((account) => !!account.closed)
	}),
	listOnBudget: () => queryOptions({
		...accountQueries.list(),
		select: (accounts) => selectActive(accounts).filter((account) => !account.offbudget)
	}),
	listOffBudget: () => queryOptions({
		...accountQueries.list(),
		select: (accounts) => selectActive(accounts).filter((account) => !!account.offbudget)
	})
};
//#endregion
//#region src/hooks/useAccounts.ts
function useAccounts() {
	return useQuery(accountQueries.list());
}
//#endregion
//#region src/notifications/notificationsSlice.ts
var sliceName$7 = "notifications";
var initialState$7 = {
	notifications: [],
	inset: {}
};
var notificationsSlice = createSlice({
	name: sliceName$7,
	initialState: initialState$7,
	reducers: {
		addNotification(state, action) {
			const notification = {
				...action.payload.notification,
				id: action.payload.notification.id || crypto.randomUUID()
			};
			if (state.notifications.find((n) => n.id === notification.id)) return;
			state.notifications = [...state.notifications, notification];
		},
		addGenericErrorNotification(state) {
			const notification = {
				id: crypto.randomUUID(),
				type: "error",
				message: t$1("Something internally went wrong. You may want to restart the app if anything looks wrong. Please report this as a new issue on GitHub.")
			};
			state.notifications = [...state.notifications, notification];
		},
		removeNotification(state, action) {
			state.notifications = state.notifications.filter((notif) => notif.id !== action.payload.id);
		},
		setNotificationInset(state, action) {
			state.inset = action.payload?.inset ? action.payload.inset : {};
		}
	},
	extraReducers: (builder) => {
		builder.addCase(resetApp, () => initialState$7);
	}
});
var { name: name$7, reducer: reducer$7, getInitialState: getInitialState$7 } = notificationsSlice;
var actions$7 = { ...notificationsSlice.actions };
var { addGenericErrorNotification, addNotification, removeNotification, setNotificationInset } = actions$7;
//#endregion
//#region src/payees/location-adapters.ts
/**
* Browser implementation of geolocation using the Web Geolocation API
*/
var BrowserGeolocationAdapter = class {
	async getCurrentPosition(options = {}) {
		if (!navigator.geolocation) throw new Error("Geolocation is not supported by this browser");
		const defaultOptions = {
			enableHighAccuracy: true,
			timeout: 15e3,
			maximumAge: 6e4
		};
		const position = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject, {
				...defaultOptions,
				...options
			});
		});
		return {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		};
	}
};
/**
* Implementation using the existing send function for API calls
*/
var SendApiLocationClient = class {
	async saveLocation(payeeId, coordinates) {
		return await send("payee-location-create", {
			payeeId,
			latitude: coordinates.latitude,
			longitude: coordinates.longitude
		});
	}
	async getLocations(payeeId) {
		return await send("payee-locations-get", { payeeId });
	}
	async deleteLocation(locationId) {
		await send("payee-location-delete", { id: locationId });
	}
	async getNearbyPayees(coordinates, maxDistance) {
		return await send("payees-get-nearby", {
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
			maxDistance
		}) || [];
	}
};
//#endregion
//#region src/payees/location-service.ts
var LocationService = class {
	currentPosition = null;
	lastLocationTime = 0;
	CACHE_DURATION = 6e4;
	constructor(geolocation, apiClient) {
		this.geolocation = geolocation;
		this.apiClient = apiClient;
	}
	async getCurrentPosition() {
		if (this.currentPosition && Date.now() - this.lastLocationTime < this.CACHE_DURATION) return this.currentPosition;
		try {
			this.currentPosition = await this.geolocation.getCurrentPosition();
			this.lastLocationTime = Date.now();
			return this.currentPosition;
		} catch (error) {
			console.warn("Geolocation error:", error);
			throw error;
		}
	}
	async savePayeeLocation(payeeId, coordinates) {
		try {
			return await this.apiClient.saveLocation(payeeId, coordinates);
		} catch (error) {
			console.error("Failed to save payee location:", error);
			throw error;
		}
	}
	async getPayeeLocations(payeeId) {
		try {
			return await this.apiClient.getLocations(payeeId);
		} catch (error) {
			console.error("Failed to get payee locations:", error);
			throw error;
		}
	}
	async deletePayeeLocation(locationId) {
		try {
			await this.apiClient.deleteLocation(locationId);
		} catch (error) {
			console.error("Failed to delete payee location:", error);
			throw error;
		}
	}
	async getNearbyPayees(coordinates, maxDistance = 500) {
		try {
			return await this.apiClient.getNearbyPayees(coordinates, maxDistance);
		} catch (error) {
			console.error("Failed to get nearby payees:", error);
			return [];
		}
	}
	/**
	* Reset the cached location data
	* Useful for testing or when you want to force a fresh location request
	*/
	reset() {
		this.currentPosition = null;
		this.lastLocationTime = 0;
	}
};
//#endregion
//#region src/payees/location.ts
var locationService = new LocationService(new BrowserGeolocationAdapter(), new SendApiLocationClient());
//#endregion
//#region src/payees/queries.ts
var payeeQueries = {
	all: () => ["payees"],
	lists: () => [...payeeQueries.all(), "lists"],
	list: () => queryOptions({
		queryKey: [...payeeQueries.lists()],
		queryFn: async () => {
			return translatePayees(await send("payees-get") ?? []);
		},
		placeholderData: [],
		staleTime: Infinity
	}),
	listCommon: () => queryOptions({
		queryKey: [...payeeQueries.lists(), "common"],
		queryFn: async () => {
			return translatePayees(await send("common-payees-get") ?? []);
		},
		placeholderData: [],
		staleTime: Infinity
	}),
	listOrphaned: () => queryOptions({
		queryKey: [...payeeQueries.lists(), "orphaned"],
		queryFn: async () => {
			return await send("payees-get-orphaned") ?? [];
		},
		placeholderData: [],
		staleTime: Infinity
	}),
	ruleCounts: () => queryOptions({
		queryKey: [...payeeQueries.lists(), "ruleCounts"],
		queryFn: async () => {
			const counts = await send("payees-get-rule-counts");
			return new Map(Object.entries(counts ?? {}));
		},
		placeholderData: /* @__PURE__ */ new Map()
	}),
	listNearby: () => queryOptions({
		queryKey: [...payeeQueries.all(), "nearby"],
		queryFn: async () => {
			const position = await locationService.getCurrentPosition();
			return locationService.getNearbyPayees({
				latitude: position.latitude,
				longitude: position.longitude
			});
		},
		placeholderData: [],
		staleTime: Infinity
	})
};
var getActivePayees = memoizeOne((payees, accounts) => {
	const accountsById = getAccountsById(accounts);
	return translatePayees(payees.filter((payee) => {
		if (payee.transfer_acct) {
			const account = accountsById[payee.transfer_acct];
			return account != null && !account.closed;
		}
		return true;
	}));
});
var getPayeesById = memoizeOne((payees) => groupById(translatePayees(payees || [])));
function translatePayees(payees) {
	return payees.map((payee) => payee.name === "Starting Balance" ? {
		...payee,
		name: t$1("Starting Balance")
	} : payee);
}
//#endregion
//#region src/redux/index.ts
var createAppAsyncThunk = createAsyncThunk.withTypes();
var useStore = useStore$1.withTypes();
var useDispatch = useDispatch$1.withTypes();
var useSelector = useSelector$1.withTypes();
//#endregion
//#region src/payees/mutations.ts
function invalidateQueries$1(queryClient, queryKey) {
	queryClient.invalidateQueries({ queryKey: queryKey ?? payeeQueries.lists() });
}
function dispatchErrorNotification$1(dispatch, message, error) {
	dispatch(addNotification({ notification: {
		id: crypto.randomUUID(),
		type: "error",
		message,
		pre: error ? error.message : void 0
	} }));
}
function useDeletePayeeLocationMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async (locationId) => {
			await locationService.deletePayeeLocation(locationId);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: payeeQueries.listNearby().queryKey });
		},
		onError: (error) => {
			console.error("Error deleting payee location:", error);
			dispatchErrorNotification$1(dispatch, t("There was an error forgetting the location. Please try again."), error);
		}
	});
}
function useSavePayeeLocationMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async (payeeId) => {
			const coords = await locationService.getCurrentPosition();
			await locationService.savePayeeLocation(payeeId, coords);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: payeeQueries.listNearby().queryKey });
		},
		onError: (error) => {
			console.error("Error saving payee location:", error);
			dispatchErrorNotification$1(dispatch, t("There was an error saving the location. Please try again."), error);
		}
	});
}
function useCreatePayeeMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ name }) => {
			return await send("payee-create", { name: name.trim() });
		},
		onSuccess: () => invalidateQueries$1(queryClient),
		onError: (error) => {
			console.error("Error creating payee:", error);
			dispatchErrorNotification$1(dispatch, t("There was an error creating the payee. Please try again."), error);
		}
	});
}
//#endregion
//#region src/transactions/transactionsSlice.ts
var sliceName$6 = "transactions";
var initialState$6 = {
	newTransactions: [],
	matchedTransactions: [],
	lastTransaction: null
};
var transactionsSlice = createSlice({
	name: sliceName$6,
	initialState: initialState$6,
	reducers: {
		setNewTransactions(state, action) {
			state.newTransactions = action.payload.newTransactions ? [...state.newTransactions, ...action.payload.newTransactions] : state.newTransactions;
			state.matchedTransactions = action.payload.matchedTransactions ? [...state.matchedTransactions, ...action.payload.matchedTransactions] : state.matchedTransactions;
		},
		updateNewTransactions(state, action) {
			state.newTransactions = state.newTransactions.filter((id) => id !== action.payload.id);
			state.matchedTransactions = state.matchedTransactions.filter((id) => id !== action.payload.id);
		},
		setLastTransaction(state, action) {
			state.lastTransaction = action.payload.transaction;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(resetApp, () => initialState$6);
	}
});
var { name: name$6, reducer: reducer$6, getInitialState: getInitialState$6 } = transactionsSlice;
var actions$6 = { ...transactionsSlice.actions };
var { setNewTransactions, updateNewTransactions, setLastTransaction } = transactionsSlice.actions;
//#endregion
//#region src/accounts/mutations.ts
var invalidateQueries = (queryClient, queryKey) => {
	queryClient.invalidateQueries({ queryKey: queryKey ?? accountQueries.lists() });
};
var dispatchErrorNotification = (dispatch, message, error) => {
	dispatch(addNotification({ notification: {
		id: crypto.randomUUID(),
		type: "error",
		message,
		pre: error ? error.message : void 0
	} }));
};
function useCreateAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ name, balance, offBudget }) => {
			return await send("account-create", {
				name,
				balance,
				offBudget
			});
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error creating account:", error);
			dispatchErrorNotification(dispatch, t("There was an error creating the account. Please try again."), error);
		}
	});
}
function useCloseAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id, transferAccountId, categoryId, forced }) => {
			await send("account-close", {
				id,
				transferAccountId: transferAccountId || void 0,
				categoryId: categoryId || void 0,
				forced
			});
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error closing account:", error);
			dispatchErrorNotification(dispatch, t("There was an error closing the account. Please try again."), error);
		}
	});
}
function useReopenAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id }) => {
			await send("account-reopen", { id });
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error re-opening account:", error);
			dispatchErrorNotification(dispatch, t("There was an error re-opening the account. Please try again."), error);
		}
	});
}
function useUpdateAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ account }) => {
			await send("account-update", account);
			return account;
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error updating account:", error);
			dispatchErrorNotification(dispatch, t("There was an error updating the account. Please try again."), error);
		}
	});
}
function useMoveAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id, targetId }) => {
			await send("account-move", {
				id,
				targetId
			});
		},
		onSuccess: () => {
			invalidateQueries(queryClient);
			invalidateQueries(queryClient, payeeQueries.lists());
		},
		onError: (error) => {
			console.error("Error moving account:", error);
			dispatchErrorNotification(dispatch, t("There was an error moving the account. Please try again."), error);
		}
	});
}
function useImportPreviewTransactionsMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ accountId, transactions, reimportDeleted }) => {
			const { errors = [], updatedPreview } = await send("transactions-import", {
				accountId,
				transactions,
				isPreview: true,
				opts: reimportDeleted !== void 0 ? { reimportDeleted } : void 0
			});
			errors.forEach((error) => {
				dispatch(addNotification({ notification: {
					type: "error",
					message: error.message
				} }));
			});
			return updatedPreview;
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error importing preview transactions to account:", error);
			dispatchErrorNotification(dispatch, t("There was an error importing preview transactions to the account. Please try again."), error);
		}
	});
}
function useImportTransactionsMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ accountId, transactions, reconcile, reimportDeleted }) => {
			if (!reconcile) {
				await send("api/transactions-add", {
					accountId,
					transactions
				});
				return true;
			}
			const { errors = [], added, updated } = await send("transactions-import", {
				accountId,
				transactions,
				isPreview: false,
				opts: reimportDeleted !== void 0 ? { reimportDeleted } : void 0
			});
			errors.forEach((error) => {
				dispatch(addNotification({ notification: {
					type: "error",
					message: error.message
				} }));
			});
			dispatch(setNewTransactions({
				newTransactions: added,
				matchedTransactions: updated
			}));
			dispatch(markUpdatedAccounts({ ids: added.length > 0 ? [accountId] : [] }));
			return added.length > 0 || updated.length > 0;
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error importing transactions to account:", error);
			dispatchErrorNotification(dispatch, t("There was an error importing transactions to the account. Please try again."), error);
		}
	});
}
function useUnlinkAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ id }) => {
			await send("account-unlink", { id });
		},
		onSuccess: (_, { id }) => {
			invalidateQueries(queryClient);
			dispatch(markAccountSuccess({ id }));
		},
		onError: (error) => {
			console.error("Error unlinking account:", error);
			dispatchErrorNotification(dispatch, t("There was an error unlinking the account. Please try again."), error);
		}
	});
}
function useLinkAccountMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ requisitionId, account, upgradingId, offBudget, startingDate, startingBalance }) => {
			await send("gocardless-accounts-link", {
				requisitionId,
				account,
				upgradingId,
				offBudget,
				startingDate,
				startingBalance
			});
		},
		onSuccess: () => {
			invalidateQueries(queryClient);
			invalidateQueries(queryClient, payeeQueries.lists());
		},
		onError: (error) => {
			console.error("Error linking account:", error);
			dispatchErrorNotification(dispatch, t("There was an error linking the account. Please try again."), error);
		}
	});
}
function useLinkAccountSimpleFinMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ externalAccount, upgradingId, offBudget, startingDate, startingBalance }) => {
			await send("simplefin-accounts-link", {
				externalAccount,
				upgradingId,
				offBudget,
				startingDate,
				startingBalance
			});
		},
		onSuccess: () => {
			invalidateQueries(queryClient);
			invalidateQueries(queryClient, payeeQueries.lists());
		},
		onError: (error) => {
			console.error("Error linking account to SimpleFIN:", error);
			dispatchErrorNotification(dispatch, t("There was an error linking the account to SimpleFIN. Please try again."), error);
		}
	});
}
function useLinkAccountPluggyAiMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	return useMutation({
		mutationFn: async ({ externalAccount, upgradingId, offBudget, startingDate, startingBalance }) => {
			await send("pluggyai-accounts-link", {
				externalAccount,
				upgradingId,
				offBudget,
				startingDate,
				startingBalance
			});
		},
		onSuccess: () => {
			invalidateQueries(queryClient);
			invalidateQueries(queryClient, payeeQueries.lists());
		},
		onError: (error) => {
			console.error("Error linking account to PluggyAI:", error);
			dispatchErrorNotification(dispatch, t("There was an error linking the account to PluggyAI. Please try again."), error);
		}
	});
}
function useSyncAccountsMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const { data: accounts = [] } = useAccounts();
	const store = useStore();
	return useMutation({
		mutationFn: async ({ id }) => {
			const { account: { accountsSyncing = [] } } = store.getState();
			if (accountsSyncing.length > 0) return false;
			if (id === "uncategorized") {
				dispatch(setAccountsSyncing({ ids: [] }));
				return false;
			}
			let accountIdsToSync;
			if (id === "offbudget" || id === "onbudget") {
				const targetOffbudget = id === "offbudget" ? 1 : 0;
				accountIdsToSync = accounts.filter(({ bank, closed, tombstone, offbudget }) => !!bank && !closed && !tombstone && offbudget === targetOffbudget).sort((a, b) => a.sort_order - b.sort_order).map(({ id }) => id);
			} else if (id) accountIdsToSync = [id];
			else accountIdsToSync = accounts.filter(({ bank, closed, tombstone }) => !!bank && !closed && !tombstone).sort((a, b) => a.offbudget === b.offbudget ? a.sort_order - b.sort_order : a.offbudget - b.offbudget).map(({ id }) => id);
			dispatch(setAccountsSyncing({ ids: accountIdsToSync }));
			const simpleFinAccounts = accounts.filter((a) => a.account_sync_source === "simpleFin" && accountIdsToSync.includes(a.id));
			let isSyncSuccess = false;
			const newTransactions = [];
			const matchedTransactions = [];
			const updatedAccounts = [];
			if (simpleFinAccounts.length > 0) {
				console.log("Using SimpleFin batch sync");
				const res = await send("simplefin-batch-sync", { ids: simpleFinAccounts.map((a) => a.id) });
				for (const account of res) if (handleSyncResponse(account.accountId, account.res, dispatch, queryClient, newTransactions, matchedTransactions, updatedAccounts)) isSyncSuccess = true;
				accountIdsToSync = accountIdsToSync.filter((id) => !simpleFinAccounts.find((sfa) => sfa.id === id));
			}
			for (let idx = 0; idx < accountIdsToSync.length; idx++) {
				const accountId = accountIdsToSync[idx];
				if (handleSyncResponse(accountId, await send("accounts-bank-sync", { ids: [accountId] }), dispatch, queryClient, newTransactions, matchedTransactions, updatedAccounts)) isSyncSuccess = true;
				dispatch(setAccountsSyncing({ ids: accountIdsToSync.slice(idx + 1) }));
			}
			dispatch(setNewTransactions({
				newTransactions,
				matchedTransactions
			}));
			dispatch(markUpdatedAccounts({ ids: updatedAccounts }));
			dispatch(setAccountsSyncing({ ids: [] }));
			return isSyncSuccess;
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error syncing accounts:", error);
			dispatchErrorNotification(dispatch, t("There was an error syncing accounts. Please try again."), error);
		}
	});
}
function handleSyncResponse(accountId, res, dispatch, queryClient, resNewTransactions, resMatchedTransactions, resUpdatedAccounts) {
	const { errors, newTransactions, matchedTransactions, updatedAccounts } = res;
	const [error] = errors;
	if (error) {
		if ("type" in error && error.type === "SyncError") dispatch(markAccountFailed({
			id: accountId,
			errorType: error.category,
			errorCode: error.code
		}));
	} else dispatch(markAccountSuccess({ id: accountId }));
	errors.forEach((error) => {
		if ("type" in error && error.type === "SyncError") dispatch(addNotification({ notification: {
			type: "error",
			message: error.message
		} }));
		else dispatch(addNotification({ notification: {
			type: "error",
			message: error.message,
			internal: "internal" in error ? error.internal : void 0
		} }));
	});
	resNewTransactions.push(...newTransactions);
	resMatchedTransactions.push(...matchedTransactions);
	resUpdatedAccounts.push(...updatedAccounts);
	invalidateQueries(queryClient);
	return newTransactions.length > 0 || matchedTransactions.length > 0;
}
function useSyncAndDownloadMutation() {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const syncAccounts = useSyncAccountsMutation();
	return useMutation({
		mutationFn: async ({ id }) => {
			const syncState = await dispatch(sync()).unwrap();
			if (syncState.error) return { error: syncState.error };
			const hasDownloaded = await syncAccounts.mutateAsync({ id });
			if (hasDownloaded) {
				const syncState = await dispatch(sync()).unwrap();
				if (syncState.error) return { error: syncState.error };
				return true;
			}
			return { hasUpdated: hasDownloaded };
		},
		onSuccess: () => invalidateQueries(queryClient),
		onError: (error) => {
			console.error("Error syncing accounts:", error);
			dispatchErrorNotification(dispatch, t("There was an error syncing accounts. Please try again."), error);
		}
	});
}
//#endregion
//#region src/prefs/prefsSlice.ts
var sliceName$5 = "prefs";
var initialState$5 = {
	local: {},
	global: {},
	synced: {},
	server: {}
};
var loadPrefs = createAppAsyncThunk(`${sliceName$5}/loadPrefs`, async (_, { dispatch, getState }) => {
	const prefs = await send("load-prefs");
	const currentPrefs = getState().prefs.local;
	if (prefs && prefs.id && !currentPrefs) dispatch(closeModal());
	const [globalPrefs, syncedPrefs] = await Promise.all([send("load-global-prefs"), send("preferences/get")]);
	dispatch(setPrefs({
		local: prefs,
		global: globalPrefs,
		synced: syncedPrefs
	}));
	setNumberFormat(parseNumberFormat({
		format: syncedPrefs.numberFormat,
		hideFraction: syncedPrefs.hideFraction
	}));
	setI18NextLanguage(globalPrefs.language ?? "");
	return prefs;
});
var savePrefs = createAppAsyncThunk(`${sliceName$5}/savePrefs`, async ({ prefs }, { dispatch }) => {
	await send("save-prefs", prefs);
	dispatch(mergeLocalPrefs(prefs));
});
var loadGlobalPrefs = createAppAsyncThunk(`${sliceName$5}/loadGlobalPrefs`, async (_, { dispatch, getState }) => {
	const globalPrefs = await send("load-global-prefs");
	dispatch(setPrefs({
		local: getState().prefs.local,
		global: globalPrefs,
		synced: getState().prefs.synced
	}));
	return globalPrefs;
});
var saveGlobalPrefs = createAppAsyncThunk(`${sliceName$5}/saveGlobalPrefs`, async ({ prefs, onSaveGlobalPrefs }, { dispatch }) => {
	await send("save-global-prefs", prefs);
	dispatch(mergeGlobalPrefs(prefs));
	onSaveGlobalPrefs?.();
});
var saveSyncedPrefs = createAppAsyncThunk(`${sliceName$5}/saveSyncedPrefs`, async ({ prefs }, { dispatch }) => {
	await Promise.all(Object.entries(prefs).map(([prefName, value]) => send("preferences/save", {
		id: prefName,
		value
	})));
	dispatch(mergeSyncedPrefs(prefs));
});
var saveServerPrefs = createAppAsyncThunk(`${sliceName$5}/saveServerPrefs`, async ({ prefs }, { dispatch }) => {
	const result = await send("save-server-prefs", { prefs });
	if (result && "error" in result) return { error: result.error };
	dispatch(mergeServerPrefs(prefs));
	return {};
});
var prefsSlice = createSlice({
	name: sliceName$5,
	initialState: initialState$5,
	reducers: {
		setPrefs(state, action) {
			state.local = action.payload.local;
			state.global = action.payload.global;
			state.synced = action.payload.synced;
		},
		mergeLocalPrefs(state, action) {
			state.local = {
				...state.local,
				...action.payload
			};
		},
		mergeGlobalPrefs(state, action) {
			state.global = {
				...state.global,
				...action.payload
			};
		},
		mergeSyncedPrefs(state, action) {
			state.synced = {
				...state.synced,
				...action.payload
			};
		},
		mergeServerPrefs(state, action) {
			state.server = {
				...state.server,
				...action.payload
			};
		}
	},
	extraReducers: (builder) => {
		builder.addCase(resetApp, (state) => ({
			...initialState$5,
			global: state.global || initialState$5.global,
			server: state.server || initialState$5.server
		}));
		builder.addCase(getUserData.fulfilled, (state, action) => {
			if (!action.payload || typeof action.payload !== "object") return state;
			const { serverPrefs } = action.payload;
			if (!serverPrefs) return state;
			state.server = {
				...state.server,
				...serverPrefs
			};
		});
	}
});
var { name: name$5, reducer: reducer$5, getInitialState: getInitialState$5 } = prefsSlice;
var actions$5 = {
	...prefsSlice.actions,
	loadPrefs,
	savePrefs,
	loadGlobalPrefs,
	saveGlobalPrefs,
	saveSyncedPrefs,
	saveServerPrefs
};
var { mergeGlobalPrefs, mergeLocalPrefs, mergeServerPrefs, mergeSyncedPrefs, setPrefs } = actions$5;
//#endregion
//#region src/budgetfiles/budgetfilesSlice.ts
var sliceName$4 = "budgetfiles";
var loadBudgets = createAppAsyncThunk(`${sliceName$4}/loadBudgets`, async (_, { dispatch }) => {
	dispatch(setBudgets({ budgets: await send("get-budgets") }));
});
var loadRemoteFiles = createAppAsyncThunk(`${sliceName$4}/loadRemoteFiles`, async (_, { dispatch }) => {
	dispatch(setRemoteFiles({ remoteFiles: await send("get-remote-files") }));
});
var loadAllFiles = createAppAsyncThunk(`${sliceName$4}/loadAllFiles`, async (_, { dispatch, getState }) => {
	dispatch(setAllFiles({
		budgets: await send("get-budgets"),
		remoteFiles: await send("get-remote-files")
	}));
	return getState().budgetfiles.allFiles;
});
var loadBudget = createAppAsyncThunk(`${sliceName$4}/loadBudget`, async ({ id, options = {} }, { dispatch }) => {
	dispatch(setAppState({ loadingText: t$1("Loading...") }));
	const { error } = await send("load-budget", {
		id,
		...options
	});
	if (error) {
		const message = getSyncError(error, id);
		if (error === "out-of-sync-migrations") dispatch(pushModal({ modal: { name: "out-of-sync-migrations" } }));
		else if (error === "out-of-sync-data") if (typeof window.confirm !== "undefined") {
			if (window.confirm(message + " " + t$1("Make sure the app is up-to-date. Do you want to load a backup?"))) dispatch(pushModal({ modal: {
				name: "load-backup",
				options: {}
			} }));
		} else alert(message + " " + t$1("Make sure the app is up-to-date."));
		else alert(message);
	} else {
		dispatch(closeModal());
		await dispatch(loadPrefs());
	}
	dispatch(setAppState({ loadingText: null }));
});
var closeBudget = createAppAsyncThunk(`${sliceName$4}/closeBudget`, async (_, { dispatch, getState, extra: { queryClient } }) => {
	const prefs = getState().prefs.local;
	if (prefs && prefs.id) {
		dispatch(resetApp());
		queryClient.clear();
		dispatch(setAppState({ loadingText: t$1("Closing...") }));
		await send("close-budget");
		dispatch(setAppState({ loadingText: null }));
		if (localStorage.getItem("SharedArrayBufferOverride")) window.location.reload();
	}
});
var closeBudgetUI = createAppAsyncThunk(`${sliceName$4}/closeBudgetUI`, async (_, { dispatch, getState, extra: { queryClient } }) => {
	const prefs = getState().prefs.local;
	if (prefs && prefs.id) {
		dispatch(resetApp());
		queryClient.clear();
	}
});
var deleteBudget = createAppAsyncThunk(`${sliceName$4}/deleteBudget`, async ({ id, cloudFileId }, { dispatch }) => {
	await send("delete-budget", {
		id,
		cloudFileId
	});
	await dispatch(loadAllFiles());
});
var createBudget = createAppAsyncThunk(`${sliceName$4}/createBudget`, async ({ testMode = false, demoMode = false }, { dispatch }) => {
	dispatch(setAppState({ loadingText: testMode || demoMode ? t$1("Making demo...") : t$1("Creating budget...") }));
	if (demoMode) await send("create-demo-budget");
	else await send("create-budget", { testMode });
	dispatch(closeModal());
	await dispatch(loadAllFiles());
	await dispatch(loadPrefs());
	dispatch(setAppState({ loadingText: null }));
});
var duplicateBudget = createAppAsyncThunk(`${sliceName$4}/duplicateBudget`, async ({ id, oldName, newName, managePage, loadBudget = "none", cloudSync }, { dispatch }) => {
	if (!id) throw new Error("Unable to duplicate a budget that is not local.");
	try {
		dispatch(setAppState({ loadingText: t$1("Duplicating: {{oldName}} to: {{newName}}", {
			oldName,
			newName
		}) }));
		await send("duplicate-budget", {
			id,
			newName,
			cloudSync,
			open: loadBudget
		});
		dispatch(closeModal());
		if (managePage) await dispatch(loadAllFiles());
	} catch (error) {
		console.error("Error duplicating budget:", error);
		throw error instanceof Error ? error : /* @__PURE__ */ new Error("Error duplicating budget: " + String(error));
	} finally {
		dispatch(setAppState({ loadingText: null }));
	}
});
var importBudget = createAppAsyncThunk(`${sliceName$4}/importBudget`, async ({ filepath, type }, { dispatch }) => {
	const { error } = await send("import-budget", {
		filepath,
		type
	});
	if (error) throw new Error(error);
	dispatch(closeModal());
	await dispatch(loadPrefs());
});
var uploadBudget = createAppAsyncThunk(`${sliceName$4}/uploadBudget`, async ({ id }, { dispatch }) => {
	const { error } = await send("upload-budget", { id });
	if (error) return { error };
	await dispatch(loadAllFiles());
	return {};
});
var closeAndLoadBudget = createAppAsyncThunk(`${sliceName$4}/closeAndLoadBudget`, async ({ fileId }, { dispatch }) => {
	await dispatch(closeBudget());
	await dispatch(loadBudget({ id: fileId }));
});
var closeAndDownloadBudget = createAppAsyncThunk(`${sliceName$4}/closeAndDownloadBudget`, async ({ cloudFileId }, { dispatch }) => {
	await dispatch(closeBudget());
	await dispatch(downloadBudget({
		cloudFileId,
		replace: true
	}));
});
var downloadBudget = createAppAsyncThunk(`${sliceName$4}/downloadBudget`, async ({ cloudFileId, replace = false }, { dispatch }) => {
	dispatch(setAppState({ loadingText: t$1("Downloading...") }));
	const { id, error } = await send("download-budget", { cloudFileId });
	if (error) {
		if (error.reason === "decrypt-failure") {
			dispatch(pushModal({ modal: {
				name: "fix-encryption-key",
				options: {
					hasExistingKey: Boolean(error.meta && typeof error.meta === "object" && "isMissingKey" in error.meta && error.meta.isMissingKey),
					cloudFileId,
					onSuccess: () => {
						dispatch(downloadBudget({
							cloudFileId,
							replace
						}));
					}
				}
			} }));
			dispatch(setAppState({ loadingText: null }));
		} else if (error.reason === "file-exists") {
			alert(t$1("A file with id \"{{id}}\" already exists with the name \"{{name}}\". This file will be replaced. This probably happened because files were manually moved around outside of Actual.", {
				id: error.meta && typeof error.meta === "object" && "id" in error.meta && error.meta.id,
				name: error.meta && typeof error.meta === "object" && "name" in error.meta && error.meta.name
			}));
			return await dispatch(downloadBudget({
				cloudFileId,
				replace: true
			})).unwrap();
		} else {
			dispatch(setAppState({ loadingText: null }));
			alert(getDownloadError(error));
		}
		return null;
	} else {
		if (!id) throw new Error("No id returned from download.");
		await Promise.all([
			dispatch(loadGlobalPrefs()),
			dispatch(loadAllFiles()),
			dispatch(loadBudget({ id }))
		]);
		dispatch(setAppState({ loadingText: null }));
		return id;
	}
});
var loadBackup = createAppAsyncThunk(`${sliceName$4}/loadBackup`, async ({ budgetId, backupId }, { dispatch, getState }) => {
	const prefs = getState().prefs.local;
	if (prefs && prefs.id) await dispatch(closeBudget());
	await send("backup-load", {
		id: budgetId,
		backupId
	});
	await dispatch(loadBudget({ id: budgetId }));
});
var makeBackup = createAppAsyncThunk(`${sliceName$4}/makeBackup`, async (_, { getState }) => {
	const prefs = getState().prefs.local;
	if (prefs && prefs.id) await send("backup-make", { id: prefs.id });
});
var initialState$4 = {
	budgets: [],
	remoteFiles: null,
	allFiles: null
};
var budgetfilesSlice = createSlice({
	name: sliceName$4,
	initialState: initialState$4,
	reducers: {
		setBudgets(state, action) {
			state.budgets = action.payload.budgets;
			state.allFiles = reconcileFiles(action.payload.budgets, state.remoteFiles);
		},
		setRemoteFiles(state, action) {
			state.remoteFiles = action.payload.remoteFiles;
			state.allFiles = reconcileFiles(state.budgets, action.payload.remoteFiles);
		},
		setAllFiles(state, action) {
			state.budgets = action.payload.budgets;
			state.remoteFiles = action.payload.remoteFiles;
			state.allFiles = reconcileFiles(action.payload.budgets, action.payload.remoteFiles);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(signOut.fulfilled, (state) => {
			state.allFiles = null;
		});
		builder.addCase(resetApp, (state) => state || initialState$4);
	}
});
var { name: name$4, reducer: reducer$4, getInitialState: getInitialState$4 } = budgetfilesSlice;
var actions$4 = {
	...budgetfilesSlice.actions,
	loadBudgets,
	loadRemoteFiles,
	loadAllFiles,
	loadBudget,
	closeBudget,
	closeBudgetUI,
	deleteBudget,
	createBudget,
	duplicateBudget,
	importBudget,
	uploadBudget,
	closeAndLoadBudget,
	closeAndDownloadBudget,
	downloadBudget,
	loadBackup,
	makeBackup
};
var { setBudgets, setRemoteFiles, setAllFiles } = actions$4;
function sortFiles(arr) {
	arr.sort((x, y) => {
		const name1 = x.name.toLowerCase();
		const name2 = y.name.toLowerCase();
		let i = name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
		if (i === 0) {
			const xId = x.state === "remote" ? x.cloudFileId : x.id;
			const yId = y.state === "remote" ? y.cloudFileId : y.id;
			i = xId < yId ? -1 : xId > yId ? 1 : 0;
		}
		return i;
	});
	return arr;
}
function reconcileFiles(localFiles, remoteFiles) {
	const reconciled = /* @__PURE__ */ new Set();
	const sorted = sortFiles(localFiles.map((localFile) => {
		const { cloudFileId, groupId } = localFile;
		if (cloudFileId && groupId) {
			if (remoteFiles == null) return {
				...localFile,
				cloudFileId,
				groupId,
				deleted: false,
				state: "unknown",
				hasKey: true,
				owner: ""
			};
			const remote = remoteFiles.find((f) => localFile.cloudFileId === f.fileId);
			if (remote) {
				reconciled.add(remote.fileId);
				if (remote.groupId === localFile.groupId) return {
					...localFile,
					cloudFileId,
					groupId,
					name: remote.name,
					deleted: remote.deleted,
					encryptKeyId: remote.encryptKeyId,
					hasKey: remote.hasKey,
					state: "synced",
					owner: remote.owner,
					usersWithAccess: remote.usersWithAccess
				};
				else return {
					...localFile,
					cloudFileId,
					groupId,
					name: remote.name,
					deleted: remote.deleted,
					encryptKeyId: remote.encryptKeyId,
					hasKey: remote.hasKey,
					state: "detached",
					owner: remote.owner,
					usersWithAccess: remote.usersWithAccess
				};
			} else return {
				...localFile,
				cloudFileId,
				groupId,
				deleted: false,
				state: "broken",
				hasKey: true,
				owner: ""
			};
		} else return {
			...localFile,
			deleted: false,
			state: "local",
			hasKey: true
		};
	}).concat((remoteFiles || []).filter((f) => !reconciled.has(f.fileId)).map((f) => {
		return {
			cloudFileId: f.fileId,
			groupId: f.groupId,
			name: f.name,
			deleted: f.deleted,
			encryptKeyId: f.encryptKeyId,
			hasKey: f.hasKey,
			state: "remote",
			owner: f.owner,
			usersWithAccess: f.usersWithAccess
		};
	})).filter((f) => !f.deleted));
	return sorted.filter((f) => f.state !== "broken").concat(sorted.filter((f) => f.state === "broken"));
}
//#endregion
//#region src/users/usersSlice.ts
var sliceName$3 = "user";
var getUserData = createAppAsyncThunk(`${sliceName$3}/getUserData`, async (_, { dispatch }) => {
	const data = await send("subscribe-get-user");
	dispatch(loadUserData({ data }));
	return data;
});
var loggedIn = createAppAsyncThunk(`${sliceName$3}/loggedIn`, async (_, { dispatch }) => {
	await dispatch(getUserData());
	dispatch(loadAllFiles());
});
var signOut = createAppAsyncThunk(`${sliceName$3}/signOut`, async (_, { dispatch }) => {
	await send("subscribe-sign-out");
	dispatch(getUserData());
	dispatch(loadGlobalPrefs());
	dispatch(closeBudget());
});
var initialState$3 = { data: null };
var usersSlice = createSlice({
	name: sliceName$3,
	initialState: initialState$3,
	reducers: { loadUserData(state, action) {
		state.data = action.payload.data;
	} },
	extraReducers: (builder) => {
		builder.addCase(resetApp, (state) => state || initialState$3);
	}
});
var { name: name$3, reducer: reducer$3, getInitialState: getInitialState$3 } = usersSlice;
var actions$3 = {
	...usersSlice.actions,
	getUserData,
	loggedIn,
	signOut
};
var { loadUserData } = actions$3;
//#endregion
//#region src/modals/modalsSlice.ts
var sliceName$2 = "modals";
var openAccountCloseModal = createAppAsyncThunk(`${sliceName$2}/openAccountCloseModal`, async ({ accountId }, { dispatch, extra }) => {
	const { balance, numTransactions } = await send("account-properties", { id: accountId });
	const account = (await extra.queryClient.ensureQueryData(accountQueries.list())).find((acct) => acct.id === accountId);
	if (!account) throw new Error(`Account with ID ${accountId} does not exist.`);
	dispatch(pushModal({ modal: {
		name: "close-account",
		options: {
			account,
			balance,
			canDelete: numTransactions === 0
		}
	} }));
});
var initialState$2 = {
	modalStack: [],
	isHidden: false
};
var modalsSlice = createSlice({
	name: sliceName$2,
	initialState: initialState$2,
	reducers: {
		pushModal(state, action) {
			const modal = action.payload.modal;
			if (modal.name.endsWith("keyboard-shortcuts") && (state.modalStack.length > 0 || window.document.querySelector("div[data-testid=\"filters-menu-tooltip\"]") !== null)) return state;
			state.modalStack = [...state.modalStack, modal];
		},
		replaceModal(state, action) {
			state.modalStack = [action.payload.modal];
		},
		popModal(state) {
			state.modalStack = state.modalStack.slice(0, -1);
		},
		closeModal(state) {
			state.modalStack = [];
		},
		collapseModals(state, action) {
			const idx = state.modalStack.findIndex((m) => m.name === action.payload.rootModalName);
			state.modalStack = idx < 0 ? state.modalStack : state.modalStack.slice(0, idx);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(setAppState, (state, action) => {
			state.isHidden = action.payload.loadingText !== null;
		});
		builder.addCase(signOut.fulfilled, () => initialState$2);
		builder.addCase(resetApp, () => initialState$2);
	}
});
var { name: name$2, reducer: reducer$2, getInitialState: getInitialState$2 } = modalsSlice;
var actions$2 = {
	...modalsSlice.actions,
	openAccountCloseModal
};
var { pushModal, closeModal, collapseModals, popModal, replaceModal } = actions$2;
//#endregion
//#region src/util/versions.ts
init_build_shims();
function parseSemanticVersion(versionString) {
	return versionString.replace("v", "").split(".").map((n) => parseInt(n));
}
function cmpSemanticVersion(versionStringA, versionStringB) {
	const x = parseSemanticVersion(versionStringA);
	const y = parseSemanticVersion(versionStringB);
	return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
}
async function getLatestVersion() {
	if (isPlaywright || process$1.env.REACT_APP_REVIEW_ID) return Promise.resolve("v99.9.9");
	try {
		return (await (await fetch("https://api.github.com/repos/actualbudget/actual/releases/latest")).json())?.tag_name ?? "unknown";
	} catch {
		return "unknown";
	}
}
function getIsOutdated(latestVersion) {
	const clientVersion = window.Actual.ACTUAL_VERSION;
	if (latestVersion === "unknown") return false;
	return cmpSemanticVersion(clientVersion, latestVersion) < 0;
}
//#endregion
//#region src/app/appSlice.ts
init_build_shims();
var sliceName$1 = "app";
var initialState$1 = {
	loadingText: null,
	updateInfo: null,
	showUpdateNotification: true,
	managerHasInitialized: false,
	versionInfo: null
};
var resetApp = createAction(`${sliceName$1}/resetApp`);
var updateApp = createAppAsyncThunk(`${sliceName$1}/updateApp`, async (_, { dispatch }) => {
	await global.Actual.applyAppUpdate();
	dispatch(setAppState({ updateInfo: null }));
});
var resetSync = createAppAsyncThunk(`${sliceName$1}/resetSync`, async (_, { dispatch }) => {
	const { error } = await send("sync-reset");
	if (error) {
		alert(getUploadError(error));
		if (error.reason === "encrypt-failure" && error.meta.isMissingKey || error.reason === "file-has-new-key") dispatch(pushModal({ modal: {
			name: "fix-encryption-key",
			options: { onSuccess: () => {
				dispatch(resetSync());
			} }
		} }));
		else if (error.reason === "encrypt-failure") dispatch(pushModal({ modal: {
			name: "create-encryption-key",
			options: { recreate: true }
		} }));
	} else await dispatch(sync());
});
var sync = createAppAsyncThunk(`${sliceName$1}/sync`, async (_, { dispatch, getState }) => {
	const prefs = getState().prefs.local;
	if (prefs && prefs.id) {
		const result = await send("sync");
		if (result && "error" in result) return { error: result.error };
		await dispatch(loadPrefs());
	}
	return {};
});
var getLatestAppVersion = createAppAsyncThunk(`${sliceName$1}/getLatestAppVersion`, async (_, { dispatch, getState }) => {
	const globalPrefs = getState().prefs.global;
	if (globalPrefs && globalPrefs.notifyWhenUpdateIsAvailable) {
		const theLatestVersion = await getLatestVersion();
		dispatch(setAppState({ versionInfo: {
			latestVersion: theLatestVersion,
			isOutdated: getIsOutdated(theLatestVersion)
		} }));
	}
});
var appSlice = createSlice({
	name: sliceName$1,
	initialState: initialState$1,
	reducers: { setAppState(state, action) {
		return {
			...state,
			...action.payload
		};
	} },
	extraReducers: (builder) => {
		builder.addCase(resetApp, (state) => ({
			...initialState$1,
			loadingText: state.loadingText || null,
			managerHasInitialized: state.managerHasInitialized || false
		}));
	}
});
var { name: name$1, reducer: reducer$1, getInitialState: getInitialState$1 } = appSlice;
var actions$1 = {
	...appSlice.actions,
	resetApp,
	updateApp,
	resetSync,
	sync,
	getLatestAppVersion
};
var { setAppState } = actions$1;
//#endregion
//#region src/accounts/accountsSlice.ts
var sliceName = "account";
var initialState = {
	failedAccounts: {},
	accountsSyncing: [],
	updatedAccounts: []
};
var accountsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setAccountsSyncing(state, action) {
			state.accountsSyncing = action.payload.ids;
		},
		markAccountFailed(state, action) {
			state.failedAccounts[action.payload.id] = {
				type: action.payload.errorType,
				code: action.payload.errorCode
			};
		},
		markAccountSuccess(state, action) {
			delete state.failedAccounts[action.payload.id];
		},
		markUpdatedAccounts(state, action) {
			state.updatedAccounts = action.payload.ids ? [...state.updatedAccounts, ...action.payload.ids] : state.updatedAccounts;
		},
		markAccountRead(state, action) {
			state.updatedAccounts = state.updatedAccounts.filter((id) => id !== action.payload.id);
		}
	},
	extraReducers: (builder) => {
		builder.addCase(resetApp, () => initialState);
	}
});
var getAccountsById = memoizeOne((accounts) => groupById(accounts));
var { name, reducer, getInitialState } = accountsSlice;
var actions = { ...accountsSlice.actions };
var { markAccountRead, markAccountFailed, markAccountSuccess, markUpdatedAccounts, setAccountsSyncing } = accountsSlice.actions;
//#endregion
//#region ../../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment$1 = false;
function sheetForTag(tag) {
	if (tag.sheet) return tag.sheet;
	/* istanbul ignore next */
	for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}
function createStyleElement(options) {
	var tag = document.createElement("style");
	tag.setAttribute("data-emotion", options.key);
	if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
	tag.appendChild(document.createTextNode(""));
	tag.setAttribute("data-s", "");
	return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
	function StyleSheet(options) {
		var _this = this;
		this._insertTag = function(tag) {
			var before;
			if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
			else if (_this.prepend) before = _this.container.firstChild;
			else before = _this.before;
			else before = _this.tags[_this.tags.length - 1].nextSibling;
			_this.container.insertBefore(tag, before);
			_this.tags.push(tag);
		};
		this.isSpeedy = options.speedy === void 0 ? !isDevelopment$1 : options.speedy;
		this.tags = [];
		this.ctr = 0;
		this.nonce = options.nonce;
		this.key = options.key;
		this.container = options.container;
		this.prepend = options.prepend;
		this.insertionPoint = options.insertionPoint;
		this.before = null;
	}
	var _proto = StyleSheet.prototype;
	_proto.hydrate = function hydrate(nodes) {
		nodes.forEach(this._insertTag);
	};
	_proto.insert = function insert(rule) {
		if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
		var tag = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var sheet = sheetForTag(tag);
			try {
				sheet.insertRule(rule, sheet.cssRules.length);
			} catch (e) {}
		} else tag.appendChild(document.createTextNode(rule));
		this.ctr++;
	};
	_proto.flush = function flush() {
		this.tags.forEach(function(tag) {
			var _tag$parentNode;
			return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
		});
		this.tags = [];
		this.ctr = 0;
	};
	return StyleSheet;
}();
//#endregion
//#region ../../node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
//#endregion
//#region ../../node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @return {number}
*/
function indexof(value, search) {
	return value.indexOf(search);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
//#endregion
//#region ../../node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {number} length
*/
function node(value, root, parent, type, props, children, length) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: ""
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
//#endregion
//#region ../../node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f") != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent), declarations);
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
							break;
						default: parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @return {object}
*/
function comment(value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @return {object}
*/
function declaration(value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}
//#endregion
//#region ../../node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	var length = sizeof(children);
	for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: element.value = element.props.join(",");
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
//#endregion
//#region ../../node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
//#endregion
//#region ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
	var cache = Object.create(null);
	return function(arg) {
		if (cache[arg] === void 0) cache[arg] = fn(arg);
		return cache[arg];
	};
}
//#endregion
//#region ../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
	var previous = 0;
	var character = 0;
	while (true) {
		previous = character;
		character = peek();
		if (previous === 38 && character === 12) points[index] = 1;
		if (token(character)) break;
		next();
	}
	return slice(begin, position);
};
var toRules = function toRules(parsed, points) {
	var index = -1;
	var character = 44;
	do
		switch (token(character)) {
			case 0:
				if (character === 38 && peek() === 12) points[index] = 1;
				parsed[index] += identifierWithPointTracking(position - 1, points, index);
				break;
			case 2:
				parsed[index] += delimit(character);
				break;
			case 4: if (character === 44) {
				parsed[++index] = peek() === 58 ? "&\f" : "";
				points[index] = parsed[index].length;
				break;
			}
			default: parsed[index] += from(character);
		}
	while (character = next());
	return parsed;
};
var getRules = function getRules(value, points) {
	return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat(element) {
	if (element.type !== "rule" || !element.parent || element.length < 1) return;
	var value = element.value;
	var parent = element.parent;
	var isImplicitRule = element.column === parent.column && element.line === parent.line;
	while (parent.type !== "rule") {
		parent = parent.parent;
		if (!parent) return;
	}
	if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
	if (isImplicitRule) return;
	fixedElements.set(element, true);
	var points = [];
	var rules = getRules(value, points);
	var parentRules = parent.props;
	for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel(element) {
	if (element.type === "decl") {
		var value = element.value;
		if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
			element["return"] = "";
			element.value = "";
		}
	}
};
function prefix(value, length) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 6828:
		case 4268: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length) + value : value;
			}
			break;
		case 4949: if (charat(value, length + 1) !== 115) break;
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
				case 107: return replace(value, ":", ":" + WEBKIT) + value;
				case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
			}
			break;
		case 5936:
			switch (charat(value, length + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			return WEBKIT + value + MS + value + value;
	}
	return value;
}
var defaultStylisPlugins = [function prefixer(element, index, children, callback) {
	if (element.length > -1) {
		if (!element["return"]) switch (element.type) {
			case DECLARATION:
				element["return"] = prefix(element.value, element.length);
				break;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(element.props, function(value) {
				switch (match(value, /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write": return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
					case "::placeholder": return serialize([
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
					], callback);
				}
				return "";
			});
		}
	}
}];
var createCache = function createCache(options) {
	var key = options.key;
	if (key === "css") {
		var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(ssrStyles, function(node) {
			if (node.getAttribute("data-emotion").indexOf(" ") === -1) return;
			document.head.appendChild(node);
			node.setAttribute("data-s", "");
		});
	}
	var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	var inserted = {};
	var container;
	var nodesToHydrate = [];
	container = options.container || document.head;
	Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
		var attrib = node.getAttribute("data-emotion").split(" ");
		for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
		nodesToHydrate.push(node);
	});
	var _insert;
	var omnipresentPlugins = [compat, removeLabel];
	var currentSheet;
	var finalizingPlugins = [stringify, rulesheet(function(rule) {
		currentSheet.insert(rule);
	})];
	var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	var stylis = function stylis(styles) {
		return serialize(compile(styles), serializer);
	};
	_insert = function insert(selector, serialized, sheet, shouldCache) {
		currentSheet = sheet;
		stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
		if (shouldCache) cache.inserted[serialized.name] = true;
	};
	var cache = {
		key,
		sheet: new StyleSheet({
			key,
			container,
			nonce: options.nonce,
			speedy: options.speedy,
			prepend: options.prepend,
			insertionPoint: options.insertionPoint
		}),
		nonce: options.nonce,
		inserted,
		registered: {},
		insert: _insert
	};
	cache.sheet.hydrate(nodesToHydrate);
	return cache;
};
//#endregion
//#region ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
	var h = 0;
	var k, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
		k ^= k >>> 24;
		h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h ^= str.charCodeAt(i) & 255;
			h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	h ^= h >>> 13;
	h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	return ((h ^ h >>> 15) >>> 0).toString(36);
}
//#endregion
//#region ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
//#endregion
//#region ../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var isDevelopment = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty(property) {
	return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue(value) {
	return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
	return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
	switch (key) {
		case "animation":
		case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
			cursor = {
				name: p1,
				styles: p2,
				next: cursor
			};
			return p1;
		});
	}
	if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
	return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
	if (interpolation == null) return "";
	var componentSelector = interpolation;
	if (componentSelector.__emotion_styles !== void 0) return componentSelector;
	switch (typeof interpolation) {
		case "boolean": return "";
		case "object":
			var keyframes = interpolation;
			if (keyframes.anim === 1) {
				cursor = {
					name: keyframes.name,
					styles: keyframes.styles,
					next: cursor
				};
				return keyframes.name;
			}
			var serializedStyles = interpolation;
			if (serializedStyles.styles !== void 0) {
				var next = serializedStyles.next;
				if (next !== void 0) while (next !== void 0) {
					cursor = {
						name: next.name,
						styles: next.styles,
						next: cursor
					};
					next = next.next;
				}
				return serializedStyles.styles + ";";
			}
			return createStringFromObject(mergedProps, registered, interpolation);
		case "function":
			if (mergedProps !== void 0) {
				var previousCursor = cursor;
				var result = interpolation(mergedProps);
				cursor = previousCursor;
				return handleInterpolation(mergedProps, registered, result);
			}
			break;
	}
	var asString = interpolation;
	if (registered == null) return asString;
	var cached = registered[asString];
	return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
	var string = "";
	if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	else for (var key in obj) {
		var value = obj[key];
		if (typeof value !== "object") {
			var asString = value;
			if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
			else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
		} else {
			if (key === "NO_COMPONENT_SELECTOR" && isDevelopment) throw new Error(noComponentSelectorMessage);
			if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
				for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
			} else {
				var interpolated = handleInterpolation(mergedProps, registered, value);
				switch (key) {
					case "animation":
					case "animationName":
						string += processStyleName(key) + ":" + interpolated + ";";
						break;
					default: string += key + "{" + interpolated + "}";
				}
			}
		}
	}
	return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
	if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
	var stringMode = true;
	var styles = "";
	cursor = void 0;
	var strings = args[0];
	if (strings == null || strings.raw === void 0) {
		stringMode = false;
		styles += handleInterpolation(mergedProps, registered, strings);
	} else styles += strings[0];
	for (var i = 1; i < args.length; i++) {
		styles += handleInterpolation(mergedProps, registered, args[i]);
		if (stringMode) styles += strings[i];
	}
	labelPattern.lastIndex = 0;
	var identifierName = "";
	var match;
	while ((match = labelPattern.exec(styles)) !== null) identifierName += "-" + match[1];
	return {
		name: murmur2(styles) + identifierName,
		styles,
		next: cursor
	};
}
//#endregion
//#region ../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles$1(registered, registeredStyles, classNames) {
	var rawClassName = "";
	classNames.split(" ").forEach(function(className) {
		if (registered[className] !== void 0) registeredStyles.push(registered[className] + ";");
		else if (className) rawClassName += className + " ";
	});
	return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
	var className = cache.key + "-" + serialized.name;
	if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) cache.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	registerStyles(cache, serialized, isStringTag);
	var className = cache.key + "-" + serialized.name;
	if (cache.inserted[serialized.name] === void 0) {
		var current = serialized;
		do {
			cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
			current = current.next;
		} while (current !== void 0);
	}
};
//#endregion
//#region ../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function insertWithoutScoping(cache, serialized) {
	if (cache.inserted[serialized.name] === void 0) return cache.insert("", serialized, cache.sheet, true);
}
function merge$1(registered, css, className) {
	var registeredStyles = [];
	var rawClassName = getRegisteredStyles$1(registered, registeredStyles, className);
	if (registeredStyles.length < 2) return className;
	return rawClassName + css(registeredStyles);
}
var createEmotion = function createEmotion(options) {
	var cache = createCache(options);
	cache.sheet.speedy = function(value) {
		this.isSpeedy = value;
	};
	cache.compat = true;
	var css = function css() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		var serialized = serializeStyles(args, cache.registered, void 0);
		insertStyles(cache, serialized, false);
		return cache.key + "-" + serialized.name;
	};
	return {
		css,
		cx: function cx() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return merge$1(cache.registered, css, classnames(args));
		},
		injectGlobal: function injectGlobal() {
			for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
			insertWithoutScoping(cache, serializeStyles(args, cache.registered));
		},
		keyframes: function keyframes() {
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			var serialized = serializeStyles(args, cache.registered);
			var animation = "animation-" + serialized.name;
			insertWithoutScoping(cache, {
				name: serialized.name,
				styles: "@keyframes " + animation + "{" + serialized.styles + "}"
			});
			return animation;
		},
		hydrate: function hydrate(ids) {
			ids.forEach(function(key) {
				cache.inserted[key] = true;
			});
		},
		flush: function flush() {
			cache.registered = {};
			cache.inserted = {};
			cache.sheet.flush();
		},
		sheet: cache.sheet,
		cache,
		getRegisteredStyles: getRegisteredStyles$1.bind(null, cache.registered),
		merge: merge$1.bind(null, cache.registered, css)
	};
};
var classnames = function classnames(args) {
	var cls = "";
	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		if (arg == null) continue;
		var toAdd = void 0;
		switch (typeof arg) {
			case "boolean": break;
			case "object":
				if (Array.isArray(arg)) toAdd = classnames(arg);
				else {
					toAdd = "";
					for (var k in arg) if (arg[k] && k) {
						toAdd && (toAdd += " ");
						toAdd += k;
					}
				}
				break;
			default: toAdd = arg;
		}
		if (toAdd) {
			cls && (cls += " ");
			cls += toAdd;
		}
	}
	return cls;
}, _createEmotion = createEmotion({ key: "css" });
_createEmotion.flush;
_createEmotion.hydrate;
//#endregion
//#region ../../node_modules/@emotion/css/dist/emotion-css.esm.js
var cx = _createEmotion.cx;
_createEmotion.merge;
_createEmotion.getRegisteredStyles;
_createEmotion.injectGlobal;
var keyframes = _createEmotion.keyframes, css = _createEmotion.css;
_createEmotion.sheet;
_createEmotion.cache;
//#endregion
//#region ../component-library/src/tokens.ts
var breakpoints = {
	small: 512,
	medium: 730,
	wide: 1100
};
var tokens = Object.entries(breakpoints).reduce((acc, [key, val]) => ({
	...acc,
	[`breakpoint_${key}`]: `${val}px`
}), {});
//#endregion
//#region ../component-library/src/styles.ts
var MOBILE_MIN_HEIGHT = 40;
var shadowLarge = { boxShadow: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)" };
var styles = {
	incomeHeaderHeight: 70,
	cardShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
	monthRightPadding: 5,
	menuBorderRadius: 4,
	mobileMinHeight: MOBILE_MIN_HEIGHT,
	mobileMenuItem: {
		fontSize: 17,
		fontWeight: 400,
		paddingTop: 8,
		paddingBottom: 8,
		height: MOBILE_MIN_HEIGHT,
		minHeight: MOBILE_MIN_HEIGHT
	},
	mobileEditingPadding: 12,
	altMenuMaxHeight: 250,
	altMenuText: { fontSize: 13 },
	altMenuHeaderText: {
		fontSize: 13,
		fontWeight: 700
	},
	veryLargeText: {
		fontSize: 30,
		fontWeight: 600
	},
	largeText: {
		fontSize: 20,
		fontWeight: 700,
		letterSpacing: .5
	},
	mediumText: {
		fontSize: 15,
		fontWeight: 500
	},
	smallText: { fontSize: 13 },
	verySmallText: { fontSize: 12 },
	tinyText: { fontSize: 10 },
	page: {
		flex: 1,
		"@media (max-height: 550px)": { minHeight: 700 },
		paddingTop: 8,
		[`@media (min-width: ${tokens.breakpoint_small})`]: { paddingTop: 36 }
	},
	pageContent: {
		paddingLeft: 2,
		paddingRight: 2,
		[`@media (min-width: ${tokens.breakpoint_small})`]: {
			paddingLeft: 20,
			paddingRight: 20
		}
	},
	settingsPageContent: {
		padding: 20,
		[`@media (min-width: ${tokens.breakpoint_small})`]: { padding: "inherit" }
	},
	staticText: {
		cursor: "default",
		userSelect: "none"
	},
	shadow: { boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)" },
	shadowLarge,
	tnum: { fontFeatureSettings: "\"tnum\", \"ss01\", \"ss04\"" },
	notFixed: { fontFeatureSettings: "" },
	text: { fontSize: 16 },
	delayedFadeIn: {
		animationName: keyframes({
			"0%": { opacity: 0 },
			"100%": { opacity: 1 }
		}),
		animationDuration: "1s",
		animationFillMode: "both",
		animationDelay: "0.5s"
	},
	underlinedText: { borderBottom: `2px solid` },
	noTapHighlight: {
		WebkitTapHighlightColor: "transparent",
		":focus": { outline: "none" }
	},
	lineClamp: (lines) => {
		return {
			display: "-webkit-box",
			WebkitLineClamp: lines,
			WebkitBoxOrient: "vertical",
			overflow: "hidden",
			textOverflow: "ellipsis",
			wordBreak: "break-word"
		};
	},
	tooltip: {
		padding: 5,
		...shadowLarge,
		borderWidth: 2,
		borderRadius: 4,
		borderStyle: "solid",
		borderColor: theme.tooltipBorder,
		backgroundColor: theme.tooltipBackground,
		color: theme.tooltipText,
		overflow: "auto"
	},
	popover: {
		border: "none",
		backgroundColor: theme.menuBackground,
		color: theme.menuItemText
	},
	horizontalScrollbar: null,
	lightScrollbar: null,
	darkScrollbar: null,
	scrollbarWidth: null,
	editorPill: {
		color: theme.pillText,
		backgroundColor: theme.pillBackground,
		borderRadius: 4,
		padding: "3px 5px"
	},
	mobileListItem: {
		borderBottom: `1px solid ${theme.tableBorder}`,
		backgroundColor: theme.tableBackground,
		padding: 16,
		cursor: "pointer"
	},
	tableContainer: {
		flex: 1,
		border: "1px solid " + theme.tableBorder,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		overflow: "hidden"
	}
};
//#endregion
//#region src/hooks/useSyncedPref.ts
function useSyncedPref(prefName) {
	const dispatch = useDispatch();
	const setPref = (0, import_react.useCallback)((value) => {
		dispatch(saveSyncedPrefs({ prefs: { [prefName]: value } }));
	}, [prefName, dispatch]);
	return [useSelector((state) => state.prefs.synced[prefName]), setPref];
}
//#endregion
//#region src/hooks/useFeatureFlag.ts
var DEFAULT_FEATURE_FLAG_STATE = {
	goalTemplatesEnabled: false,
	goalTemplatesUIEnabled: false,
	actionTemplating: false,
	formulaMode: false,
	currency: false,
	crossoverReport: false,
	ageOfMoneyReport: false,
	customThemes: false,
	budgetAnalysisReport: false,
	payeeLocations: false,
	sankeyReport: false
};
function useFeatureFlag(name) {
	const [value] = useSyncedPref(`flags.${name}`);
	return value === void 0 ? DEFAULT_FEATURE_FLAG_STATE[name] || false : String(value) === "true";
}
//#endregion
//#region src/hooks/useGlobalPref.ts
function useGlobalPref(prefName, onSaveGlobalPrefs) {
	const dispatch = useDispatch();
	const setGlobalPref = (0, import_react.useCallback)((value) => {
		dispatch(saveGlobalPrefs({
			prefs: { [prefName]: value },
			onSaveGlobalPrefs
		}));
	}, [
		prefName,
		dispatch,
		onSaveGlobalPrefs
	]);
	return [useSelector((state) => state.prefs.global?.[prefName]), setGlobalPref];
}
//#endregion
//#region src/style/customThemes.ts
/**
* Custom theme utilities: fetch, validation, and storage helpers.
*/
var BASE_THEME_OPTIONS = [
	"light",
	"dark",
	"midnight"
];
/**
* Safely extract the owner from a GitHub repo string.
* Handles malformed repo strings by returning "Unknown" when owner cannot be determined.
*/
function extractRepoOwner(repo) {
	if (!repo || typeof repo !== "string" || !repo.includes("/")) return "Unknown";
	return repo.split("/")[0]?.trim() || "Unknown";
}
/**
* Normalize a GitHub repo identifier to a full GitHub URL.
* Accepts "owner/repo" format.
* Returns "https://github.com/owner/repo".
* @throws {Error} If repo is invalid or missing owner/repo.
*/
function normalizeGitHubRepo(repo) {
	const trimmed = repo.trim();
	if (!trimmed.includes("/")) throw new Error("Invalid repo: must be in \"owner/repo\" format");
	const parts = trimmed.split("/");
	const owner = parts[0]?.trim();
	const repoName = parts[1]?.trim();
	if (!owner || !repoName) throw new Error("Invalid repo: must include both owner and repo name");
	return `https://github.com/${owner}/${repoName}`;
}
/**
* Try fetching actual.css from main branch.
*/
function fetchThemeCss(repo) {
	return fetchDirectCss(`https://raw.githubusercontent.com/${repo}/refs/heads/main/actual.css`);
}
/**
* Fetch CSS from a direct URL (not a GitHub repo).
*/
async function fetchDirectCss(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`Failed to fetch CSS from ${url}: ${response.status} ${response.statusText}`);
	return response.text();
}
/** Strip surrounding single or double quotes from a string. */
function stripQuotes(s) {
	const t = s.trim();
	if (t.startsWith("'") && t.endsWith("'") || t.startsWith("\"") && t.endsWith("\"")) return t.slice(1, -1).trim();
	return t;
}
/**
* Validate a font-family value for a --font-* CSS variable.
*
* Any font name is allowed — referencing a font the user doesn't have
* installed simply triggers the browser's normal fallback behaviour
* (no network requests). The only things we block are function calls
* (url(), expression(), etc.) because those could load external resources
* or execute expressions.
*
* Quoted or unquoted font names are both accepted.
*
* Examples of accepted values:
*   Georgia, serif
*   'Fira Code', monospace
*   "My Theme Font", sans-serif
*/
function validateFontFamilyValue(value, property) {
	const trimmed = value.trim();
	if (!trimmed) throw new Error(`Invalid font-family value for "${property}": value must not be empty.`);
	const families = trimmed.split(",");
	for (const raw of families) {
		const name = stripQuotes(raw);
		if (!name) throw new Error(`Invalid font-family value for "${property}": empty font name in comma-separated list.`);
		if (/\(/.test(name)) throw new Error(`Invalid font-family value for "${property}": function calls are not allowed. Only font names are permitted.`);
	}
}
/** Only var(--custom-property-name) is allowed; no fallbacks. Variable name: -- then [a-zA-Z0-9_-]+ (no trailing dash). */
var VAR_ONLY_PATTERN = /^var\s*\(\s*(--[a-zA-Z0-9_-]+)\s*\)$/i;
function isValidSimpleVarValue(value) {
	const m = value.trim().match(VAR_ONLY_PATTERN);
	if (!m) return false;
	const name = m[1];
	return name !== "--" && !name.endsWith("-");
}
/**
* Validate that a CSS property value only contains allowed content (allowlist approach).
* Allows: colors (hex, rgb/rgba, hsl/hsla), lengths, numbers, keywords, and var(--name) only (no fallbacks).
* Font properties (--font-*) are validated against a safe font family allowlist instead.
*/
function validatePropertyValue(value, property) {
	if (/^--font-/i.test(property)) {
		validateFontFamilyValue(value, property);
		return;
	}
	if (!value || value.length === 0) return;
	const trimmedValue = value.trim();
	if (isValidSimpleVarValue(trimmedValue)) return;
	if (/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?([0-9a-fA-F]{2})?$/.test(trimmedValue) || /^rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(,\s*[\d.]+)?\s*\)$/.test(trimmedValue) || /^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+)?\s*\)$/.test(trimmedValue) || /^(\d+\.?\d*|\d*\.\d+)(px|em|rem|%|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ex|ch)$/.test(trimmedValue) || /^(\d+\.?\d*|\d*\.\d+)$/.test(trimmedValue) || /^(inherit|initial|unset|revert|transparent|none|auto|normal)$/i.test(trimmedValue)) return;
	throw new Error(`Invalid value "${trimmedValue}" for property "${property}". Only simple CSS values are allowed (colors, lengths, numbers, keywords, or var(--name)). Other functions, URLs, and complex constructs are not permitted.`);
}
/** Maximum size of a single base64-encoded font (bytes of decoded data). 2 MB. */
var MAX_FONT_FILE_SIZE = 2 * 1024 * 1024;
/** Maximum total size of all embedded font data across all @font-face blocks. 10 MB. */
var MAX_TOTAL_FONT_SIZE = 10 * 1024 * 1024;
/**
* Extract @font-face blocks from CSS. Returns the blocks and the remaining CSS.
* Only matches top-level @font-face blocks (not nested inside other rules).
*/
function extractFontFaceBlocks(css) {
	const fontFaceBlocks = [];
	let remaining = css;
	for (;;) {
		const atIdx = remaining.indexOf("@font-face");
		if (atIdx === -1) break;
		const openBrace = remaining.indexOf("{", atIdx);
		if (openBrace === -1) break;
		const closeBrace = remaining.indexOf("}", openBrace + 1);
		if (closeBrace === -1) break;
		fontFaceBlocks.push(remaining.substring(openBrace + 1, closeBrace).trim());
		remaining = remaining.substring(0, atIdx) + remaining.substring(closeBrace + 1);
	}
	return {
		fontFaceBlocks,
		remaining: remaining.trim()
	};
}
/**
* Validate @font-face blocks: only data: URIs allowed (no remote URLs).
* Enforces size limits to prevent DoS.
*/
function validateFontFaceBlocks(fontFaceBlocks) {
	let totalSize = 0;
	const urlRegex = /url\(\s*(?:'([^']*)'|"([^"]*)"|([^'")\s]+))\s*\)/g;
	for (const block of fontFaceBlocks) {
		urlRegex.lastIndex = 0;
		let match;
		while ((match = urlRegex.exec(block)) !== null) {
			const uri = (match[1] ?? match[2] ?? match[3]).trim();
			if (!uri.startsWith("data:")) throw new Error("Invalid font src: only data: URIs are allowed in @font-face. Remote URLs (http/https) are not permitted to protect user privacy. Font files are automatically embedded when installing from GitHub.");
			const base64Match = uri.match(/;base64,(.+)$/);
			if (base64Match) {
				const size = Math.ceil(base64Match[1].length * 3 / 4);
				if (size > 2097152) throw new Error(`Font file exceeds maximum size of ${MAX_FONT_FILE_SIZE / 1024 / 1024}MB.`);
				totalSize += size;
			}
		}
	}
	if (totalSize > 10485760) throw new Error(`Total embedded font data exceeds maximum of ${MAX_TOTAL_FONT_SIZE / 1024 / 1024}MB.`);
}
/**
* Split CSS declarations by semicolons, but respect quoted strings and url() contents.
* This is needed because data: URIs contain semicolons (e.g., "data:font/woff2;base64,...").
*/
function splitDeclarations(content) {
	const declarations = [];
	let start = 0;
	let inSingleQuote = false;
	let inDoubleQuote = false;
	let parenDepth = 0;
	for (let i = 0; i < content.length; i++) {
		const ch = content[i];
		if (ch === "'" && !inDoubleQuote && parenDepth === 0) inSingleQuote = !inSingleQuote;
		else if (ch === "\"" && !inSingleQuote && parenDepth === 0) inDoubleQuote = !inDoubleQuote;
		else if (ch === "(" && !inSingleQuote && !inDoubleQuote) parenDepth++;
		else if (ch === ")" && !inSingleQuote && !inDoubleQuote && parenDepth > 0) parenDepth--;
		if (ch === ";" && !inSingleQuote && !inDoubleQuote && parenDepth === 0) {
			const trimmed = content.substring(start, i).trim();
			if (trimmed) declarations.push(trimmed);
			start = i + 1;
		}
	}
	const trimmed = content.substring(start).trim();
	if (trimmed) declarations.push(trimmed);
	return declarations;
}
/**
* Validate the content inside a :root { ... } block.
* Only CSS custom properties (--*) with safe values are allowed.
*/
function validateRootContent(rootContent) {
	if (/@[a-z-]+/i.test(rootContent)) throw new Error("Theme CSS contains forbidden at-rules (@import, @media, @keyframes, etc.). Only CSS variable declarations are allowed inside :root { ... }.");
	if (/\{/.test(rootContent)) throw new Error("Theme CSS contains nested blocks or additional selectors. Only CSS variable declarations are allowed inside :root { ... }.");
	for (const decl of splitDeclarations(rootContent)) {
		const colonIndex = decl.indexOf(":");
		if (colonIndex === -1) throw new Error(`Invalid CSS declaration: "${decl}"`);
		const property = decl.substring(0, colonIndex).trim();
		if (!property.startsWith("--")) throw new Error(`Invalid property "${property}". Only CSS custom properties (starting with --) are allowed.`);
		if (property === "--" || property === "-") throw new Error(`Invalid property "${property}". Property name cannot be empty or contain only dashes.`);
		const propertyNameAfterDashes = property.substring(2);
		if (propertyNameAfterDashes.length === 0) throw new Error(`Invalid property "${property}". Property name cannot be empty after "--".`);
		if (!/^[a-zA-Z0-9_-]+$/.test(propertyNameAfterDashes)) throw new Error(`Invalid property "${property}". Property name contains invalid characters. Only letters, digits, underscores, and dashes are allowed.`);
		if (property.endsWith("-")) throw new Error(`Invalid property "${property}". Property name cannot end with a dash.`);
		validatePropertyValue(decl.substring(colonIndex + 1).trim(), property);
	}
}
/**
* Validate theme CSS. Accepts:
* 1. Optional @font-face blocks (with data: URI fonts only)
* 2. Exactly one :root { ... } block with CSS variable declarations
*
* @font-face blocks must appear before :root.
* Returns the validated CSS or throws an error.
*/
function validateThemeCss(css) {
	const cleaned = css.replace(/\/\*[\s\S]*?\*\//g, "").trim();
	const { fontFaceBlocks, remaining } = extractFontFaceBlocks(cleaned);
	validateFontFaceBlocks(fontFaceBlocks);
	if (!remaining.match(/^:root\s*\{/)) throw new Error("Theme CSS must contain :root { ... } with CSS variable definitions. No other selectors or content allowed.");
	const rootStart = remaining.indexOf(":root");
	const openBrace = remaining.indexOf("{", rootStart);
	if (openBrace === -1) throw new Error("Theme CSS must contain :root { ... } with CSS variable definitions. No other selectors or content allowed.");
	const closeBrace = remaining.indexOf("}", openBrace + 1);
	if (closeBrace === -1) throw new Error("Theme CSS must contain :root { ... } with CSS variable definitions. No other selectors or content allowed.");
	validateRootContent(remaining.substring(openBrace + 1, closeBrace).trim());
	if (remaining.substring(closeBrace + 1).trim().length > 0) throw new Error("Theme CSS must contain :root { ... } with CSS variable definitions. No other selectors or content allowed.");
	return cleaned;
}
/** Map of file extensions to font MIME types for data: URI construction. */
var FONT_EXTENSION_MIME = {
	".woff2": "font/woff2",
	".woff": "font/woff",
	".ttf": "font/ttf",
	".otf": "font/opentype"
};
/** Convert an ArrayBuffer to a base64 string using chunked processing. */
function arrayBufferToBase64(buffer) {
	const bytes = new Uint8Array(buffer);
	const chunks = [];
	for (let i = 0; i < bytes.length; i += 8192) {
		const chunk = bytes.subarray(i, Math.min(i + 8192, bytes.length));
		chunks.push(String.fromCharCode(...chunk));
	}
	return btoa(chunks.join(""));
}
/**
* Embed fonts referenced in @font-face blocks by fetching them from a GitHub
* repo and converting to data: URIs.
*
* This runs at install time only. Relative URL references like
* `url('./fonts/MyFont.woff2')` are resolved relative to the repo's root
* directory and fetched from GitHub's raw content API.
*
* The returned CSS has all font URLs replaced with self-contained data: URIs,
* so no network requests are needed at runtime.
*
* @param css - The raw theme CSS (may contain relative url() references)
* @param repo - GitHub repo in "owner/repo" format
* @returns CSS with all font URLs replaced by data: URIs
*/
async function embedThemeFonts(css, repo) {
	const baseUrl = `https://raw.githubusercontent.com/${repo}/refs/heads/main/`;
	const urlRegex = /url\(\s*(?:(['"])([^'"]*?)\1|([^'")\s]+))\s*\)/g;
	const fontRefs = [];
	let searchCss = css;
	let offset = 0;
	for (;;) {
		const atIdx = searchCss.indexOf("@font-face", 0);
		if (atIdx === -1) break;
		const openBrace = searchCss.indexOf("{", atIdx);
		if (openBrace === -1) break;
		const closeBrace = searchCss.indexOf("}", openBrace + 1);
		if (closeBrace === -1) break;
		const blockContent = searchCss.substring(openBrace + 1, closeBrace);
		let urlMatch;
		urlRegex.lastIndex = 0;
		while ((urlMatch = urlRegex.exec(blockContent)) !== null) {
			const fullMatch = urlMatch[0];
			const quote = urlMatch[1] || "";
			const path = urlMatch[2] ?? urlMatch[3];
			if (path.startsWith("data:")) continue;
			if (/^https?:\/\//i.test(path)) throw new Error(`Remote font URL "${path}" is not allowed. Only relative paths to fonts in the same GitHub repo are supported.`);
			const cleanPath = path.replace(/^\.\//, "");
			if (cleanPath.startsWith("/") || cleanPath.includes("..")) throw new Error(`Font path "${path}" is not allowed. Only relative paths within the repo are supported (no "/" prefix or ".." segments).`);
			const ext = cleanPath.substring(cleanPath.lastIndexOf(".")).toLowerCase();
			const mime = FONT_EXTENSION_MIME[ext];
			if (!mime) throw new Error(`Unsupported font file extension "${ext}". Supported: ${Object.keys(FONT_EXTENSION_MIME).join(", ")}.`);
			fontRefs.push({
				fullMatch,
				quote,
				path,
				cleanPath,
				mime
			});
		}
		offset = closeBrace + 1;
		searchCss = searchCss.substring(offset);
	}
	if (fontRefs.length === 0) return css;
	const fetched = [];
	let totalBytes = 0;
	for (const ref of fontRefs) {
		const fontUrl = baseUrl + ref.cleanPath;
		const response = await fetch(fontUrl);
		if (!response.ok) throw new Error(`Failed to fetch font file "${ref.cleanPath}" from ${fontUrl}: ${response.status} ${response.statusText}`);
		const buffer = await response.arrayBuffer();
		if (buffer.byteLength > 2097152) throw new Error(`Font file "${ref.cleanPath}" exceeds maximum size of ${MAX_FONT_FILE_SIZE / 1024 / 1024}MB.`);
		totalBytes += buffer.byteLength;
		if (totalBytes > 10485760) throw new Error(`Total embedded font data exceeds maximum of ${MAX_TOTAL_FONT_SIZE / 1024 / 1024}MB.`);
		const base64 = arrayBufferToBase64(buffer);
		fetched.push({
			ref,
			dataUri: `data:${ref.mime};base64,${base64}`
		});
	}
	let result = css;
	for (const { ref, dataUri } of fetched) {
		const q = ref.quote || "'";
		result = result.replace(ref.fullMatch, `url(${q}${dataUri}${q})`);
	}
	return result;
}
/**
* Generate a unique ID for a theme based on its repo URL or direct CSS URL.
*/
function generateThemeId(urlOrRepo) {
	let hash = 0;
	for (let i = 0; i < urlOrRepo.length; i++) {
		const char = urlOrRepo.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return `theme-${Math.abs(hash).toString(36)}`;
}
/**
* Parse the installed theme JSON from global prefs.
* Returns a single InstalledTheme or null if none is installed.
*/
function parseInstalledTheme(json) {
	if (!json) return null;
	try {
		const parsed = JSON.parse(json);
		if (parsed && typeof parsed === "object" && typeof parsed.id === "string" && typeof parsed.name === "string" && typeof parsed.repo === "string" && typeof parsed.cssContent === "string") {
			const result = {
				id: parsed.id,
				name: parsed.name,
				repo: parsed.repo,
				cssContent: parsed.cssContent
			};
			if (typeof parsed.baseTheme === "string" && BASE_THEME_OPTIONS.includes(parsed.baseTheme)) result.baseTheme = parsed.baseTheme;
			return result;
		}
		return null;
	} catch {
		return null;
	}
}
/**
* Serialize installed theme to JSON for global prefs.
*/
function serializeInstalledTheme(theme) {
	return JSON.stringify(theme);
}
/**
* Extract the legacy `overrideCss` field from an installed theme JSON string.
* Used by the one-time migration that moves the field out of InstalledTheme
* and into the standalone `customCssOverride` global pref.
*
* Returns null if the JSON is missing, malformed, not an object, or does not
* contain a non-whitespace string `overrideCss` field. Leading/trailing
* whitespace is stripped from the returned value.
*/
function extractLegacyOverride(json) {
	if (!json) return null;
	try {
		const parsed = JSON.parse(json);
		if (parsed && typeof parsed === "object" && !Array.isArray(parsed) && typeof parsed.overrideCss === "string") {
			const trimmed = parsed.overrideCss.trim();
			if (trimmed.length > 0) return trimmed;
		}
		return null;
	} catch {
		return null;
	}
}
/**
* One-time migration helper: moves a legacy `overrideCss` field out of the
* installed theme JSON blobs and into the standalone customCssOverride value.
*
* Collision rule: if both light and dark carry a legacy override, light wins.
* The other is silently dropped — users wrote one shared override in the UI
* today; two different values is a pathological case that only shows up if
* someone edited prefs.json by hand.
*
* Returns null when no migration is needed. Otherwise returns the migrated
* override plus the re-serialized installed theme JSONs (with `overrideCss`
* stripped). Callers write all three values back to global prefs.
*/
function migrateLegacyOverride(params) {
	const { existingOverride, lightJson, darkJson } = params;
	if (existingOverride?.trim()) return null;
	const lightLegacy = extractLegacyOverride(lightJson);
	const darkLegacy = extractLegacyOverride(darkJson);
	const legacy = lightLegacy ?? darkLegacy;
	if (!legacy) return null;
	const stripOverride = (json) => {
		const parsed = parseInstalledTheme(json);
		return parsed ? serializeInstalledTheme(parsed) : json;
	};
	return {
		override: legacy,
		newLightJson: lightLegacy ? stripOverride(lightJson) : lightJson,
		newDarkJson: darkLegacy ? stripOverride(darkJson) : darkJson
	};
}
//#endregion
//#region src/style/palette.ts
var gray50 = "#f6f8fa";
var gray80 = "#f0f4f6";
var gray100 = "#e8ecf0";
var gray150 = "#d4dae0";
var gray200 = "#bdc5cf";
var gray300 = "#98a1ae";
var gray400 = "#747c8b";
var gray500 = "#4d5768";
var gray600 = "#373b4a";
var gray700 = "#242733";
var gray800 = "#141520";
var gray900 = "#080811";
var navy50 = "#f7fafc";
var navy100 = "#e8ecf0";
var navy150 = "#d9e2ec";
var navy200 = "#bcccdc";
var navy300 = "#9fb3c8";
var navy400 = "#829ab1";
var navy500 = "#627d98";
var navy600 = "#486581";
var navy700 = "#334e68";
var navy800 = "#243b53";
var navy900 = "#102a43";
var blue150 = "#b3d9ff";
var blue200 = "#8bcafd";
var blue300 = "#66b5fa";
var blue400 = "#40a5f7";
var blue500 = "#2b8fed";
var blue600 = "#1980d4";
var blue800 = "#0b5fa3";
var blue900 = "#034388";
var green100 = "#effcf6";
var green150 = "#c6f7e2";
var green200 = "#8eedc7";
var green300 = "#65d6ad";
var green400 = "#3ebd93";
var green500 = "#27ab83";
var green600 = "#199473";
var green700 = "#147d64";
var green800 = "#0c6b58";
var green900 = "#014d40";
var orange100 = "#fffbea";
var orange150 = "#fff7c4";
var orange200 = "#fcf088";
var orange300 = "#f5e35d";
var orange500 = "#e6bb20";
var orange700 = "#b88115";
var orange800 = "#87540d";
var orange900 = "#733309";
var red100 = "#ffe3e3";
var red150 = "#ffbdbd";
var red200 = "#ff9b9b";
var red300 = "#f86a6a";
var red500 = "#e12d39";
var red700 = "#ab091e";
var red800 = "#8a041a";
var red900 = "#610316";
var purple100 = "#f2ebfe";
var purple125 = "#e4d4ff";
var purple150 = "#dac4ff";
var purple200 = "#b990ff";
var purple300 = "#a368fc";
var purple400 = "#9446ed";
var purple500 = "#8719e0";
var purple600 = "#7a0ecc";
var purple700 = "#690cb0";
var purple800 = "#580a94";
var white = "#ffffff";
var black = "#000000";
var chartQual1$3 = "#45B29D";
var chartQual2$3 = "#EFC94C";
var chartQual3$3 = "#E27A3F";
var chartQual4$3 = "#DF5A49";
var chartQual5$3 = "#5F91B8";
var chartQual6$3 = "#E2A37F";
var chartQual7$3 = "#55DBC1";
var chartQual8$3 = "#EFDA97";
var chartQual9$3 = "#DF948A";
//#endregion
//#region src/style/themes/dark.ts
var dark_exports = /* @__PURE__ */ __exportAll({
	budgetCurrentMonth: () => budgetCurrentMonth$2,
	budgetHeaderCurrentMonth: () => budgetHeaderCurrentMonth$2,
	budgetHeaderOtherMonth: () => budgetHeaderOtherMonth$2,
	budgetNumberNegative: () => budgetNumberNegative$2,
	budgetNumberNeutral: () => budgetNumberNeutral$2,
	budgetNumberPositive: () => budgetNumberPositive$2,
	budgetNumberZero: () => budgetNumberZero$2,
	budgetOtherMonth: () => budgetOtherMonth$2,
	buttonBareBackground: () => buttonBareBackground$2,
	buttonBareBackgroundActive: () => buttonBareBackgroundActive$2,
	buttonBareBackgroundHover: () => buttonBareBackgroundHover$2,
	buttonBareDisabledBackground: () => buttonBareDisabledBackground$2,
	buttonBareDisabledText: () => buttonBareDisabledText$2,
	buttonBareText: () => buttonBareText$2,
	buttonBareTextHover: () => buttonBareTextHover$2,
	buttonMenuBackground: () => buttonMenuBackground$2,
	buttonMenuBackgroundHover: () => buttonMenuBackgroundHover$2,
	buttonMenuBorder: () => buttonMenuBorder$2,
	buttonMenuSelectedBackground: () => buttonMenuSelectedBackground$2,
	buttonMenuSelectedBackgroundHover: () => buttonMenuSelectedBackgroundHover$2,
	buttonMenuSelectedBorder: () => buttonMenuSelectedBorder$2,
	buttonMenuSelectedText: () => buttonMenuSelectedText$2,
	buttonMenuSelectedTextHover: () => buttonMenuSelectedTextHover$2,
	buttonMenuText: () => buttonMenuText$2,
	buttonMenuTextHover: () => buttonMenuTextHover$2,
	buttonNormalBackground: () => buttonNormalBackground$2,
	buttonNormalBackgroundHover: () => buttonNormalBackgroundHover$2,
	buttonNormalBorder: () => buttonNormalBorder$2,
	buttonNormalDisabledBackground: () => buttonNormalDisabledBackground$2,
	buttonNormalDisabledBorder: () => buttonNormalDisabledBorder$2,
	buttonNormalDisabledText: () => buttonNormalDisabledText$2,
	buttonNormalSelectedBackground: () => buttonNormalSelectedBackground$2,
	buttonNormalSelectedText: () => buttonNormalSelectedText$2,
	buttonNormalShadow: () => buttonNormalShadow$2,
	buttonNormalText: () => buttonNormalText$2,
	buttonNormalTextHover: () => buttonNormalTextHover$2,
	buttonPrimaryBackground: () => buttonPrimaryBackground$2,
	buttonPrimaryBackgroundHover: () => buttonPrimaryBackgroundHover$2,
	buttonPrimaryBorder: () => buttonPrimaryBorder$2,
	buttonPrimaryDisabledBackground: () => buttonPrimaryDisabledBackground$2,
	buttonPrimaryDisabledBorder: () => buttonPrimaryDisabledBorder$2,
	buttonPrimaryDisabledText: () => buttonPrimaryDisabledText$2,
	buttonPrimaryShadow: () => buttonPrimaryShadow$2,
	buttonPrimaryText: () => buttonPrimaryText$2,
	buttonPrimaryTextHover: () => buttonPrimaryTextHover$2,
	calendarBackground: () => calendarBackground$2,
	calendarCellBackground: () => calendarCellBackground$2,
	calendarItemBackground: () => calendarItemBackground$2,
	calendarItemText: () => calendarItemText$2,
	calendarSelectedBackground: () => calendarSelectedBackground$2,
	calendarText: () => calendarText$2,
	cardBackground: () => cardBackground$2,
	cardBorder: () => cardBorder$2,
	cardShadow: () => cardShadow$2,
	chartQual1: () => chartQual1$2,
	chartQual2: () => chartQual2$2,
	chartQual3: () => chartQual3$2,
	chartQual4: () => chartQual4$2,
	chartQual5: () => chartQual5$2,
	chartQual6: () => chartQual6$2,
	chartQual7: () => chartQual7$2,
	chartQual8: () => chartQual8$2,
	chartQual9: () => chartQual9$2,
	checkboxBackgroundSelected: () => checkboxBackgroundSelected$2,
	checkboxBorderSelected: () => checkboxBorderSelected$2,
	checkboxShadowSelected: () => checkboxShadowSelected$2,
	checkboxText: () => checkboxText$2,
	checkboxToggleBackground: () => checkboxToggleBackground$2,
	checkboxToggleBackgroundSelected: () => checkboxToggleBackgroundSelected$2,
	checkboxToggleDisabled: () => checkboxToggleDisabled$2,
	errorBackground: () => errorBackground$2,
	errorBorder: () => errorBorder$2,
	errorText: () => errorText$2,
	errorTextDark: () => errorTextDark$2,
	errorTextDarker: () => errorTextDarker$2,
	errorTextMenu: () => errorTextMenu$2,
	floatingActionBarBackground: () => floatingActionBarBackground$2,
	floatingActionBarBorder: () => floatingActionBarBorder$2,
	floatingActionBarText: () => floatingActionBarText$2,
	formInputBackground: () => formInputBackground$2,
	formInputBackgroundSelected: () => formInputBackgroundSelected$2,
	formInputBackgroundSelection: () => formInputBackgroundSelection$2,
	formInputBorder: () => formInputBorder$2,
	formInputBorderSelected: () => formInputBorderSelected$2,
	formInputShadowSelected: () => formInputShadowSelected$2,
	formInputText: () => formInputText$2,
	formInputTextHighlight: () => formInputTextHighlight$2,
	formInputTextPlaceholder: () => formInputTextPlaceholder$2,
	formInputTextPlaceholderSelected: () => formInputTextPlaceholderSelected$2,
	formInputTextReadOnlySelection: () => formInputTextReadOnlySelection$2,
	formInputTextSelected: () => formInputTextSelected$2,
	formInputTextSelection: () => formInputTextSelection$2,
	formLabelBackground: () => formLabelBackground$2,
	formLabelText: () => formLabelText$2,
	markdownDark: () => markdownDark$2,
	markdownLight: () => markdownLight$2,
	markdownNormal: () => markdownNormal$2,
	menuAutoCompleteBackground: () => menuAutoCompleteBackground$2,
	menuAutoCompleteBackgroundHover: () => menuAutoCompleteBackgroundHover$2,
	menuAutoCompleteItemText: () => menuAutoCompleteItemText$2,
	menuAutoCompleteText: () => menuAutoCompleteText$2,
	menuAutoCompleteTextHeader: () => menuAutoCompleteTextHeader$2,
	menuBackground: () => menuBackground$2,
	menuBorder: () => menuBorder$2,
	menuBorderHover: () => menuBorderHover$2,
	menuItemBackground: () => menuItemBackground$2,
	menuItemBackgroundHover: () => menuItemBackgroundHover$2,
	menuItemText: () => menuItemText$2,
	menuItemTextHeader: () => menuItemTextHeader$2,
	menuItemTextHover: () => menuItemTextHover$2,
	menuItemTextSelected: () => menuItemTextSelected$2,
	menuKeybindingText: () => menuKeybindingText$2,
	mobileAccountShadow: () => mobileAccountShadow$2,
	mobileAccountText: () => mobileAccountText$2,
	mobileConfigServerViewTheme: () => mobileConfigServerViewTheme$2,
	mobileHeaderBackground: () => mobileHeaderBackground$2,
	mobileHeaderText: () => mobileHeaderText$2,
	mobileHeaderTextHover: () => mobileHeaderTextHover$2,
	mobileHeaderTextSubdued: () => mobileHeaderTextSubdued$2,
	mobileNavBackground: () => mobileNavBackground$2,
	mobileNavItem: () => mobileNavItem$2,
	mobileNavItemSelected: () => mobileNavItemSelected$2,
	mobilePageBackground: () => mobilePageBackground$2,
	mobileTransactionSelected: () => mobileTransactionSelected$2,
	mobileViewTheme: () => mobileViewTheme$2,
	modalBackground: () => modalBackground$2,
	modalBorder: () => modalBorder$2,
	noteTagBackground: () => noteTagBackground$2,
	noteTagBackgroundHover: () => noteTagBackgroundHover$2,
	noteTagDefault: () => noteTagDefault$2,
	noteTagText: () => noteTagText$2,
	noticeBackground: () => noticeBackground$2,
	noticeBackgroundDark: () => noticeBackgroundDark$2,
	noticeBackgroundLight: () => noticeBackgroundLight$2,
	noticeBorder: () => noticeBorder$2,
	noticeText: () => noticeText$2,
	noticeTextDark: () => noticeTextDark$2,
	noticeTextLight: () => noticeTextLight$2,
	noticeTextMenu: () => noticeTextMenu$2,
	numberNegative: () => numberNegative$2,
	numberNeutral: () => numberNeutral$2,
	numberPositive: () => numberPositive$2,
	overlayBackground: () => overlayBackground$2,
	pageBackground: () => pageBackground$2,
	pageBackgroundBottomRight: () => pageBackgroundBottomRight$2,
	pageBackgroundLineBottom: () => pageBackgroundLineBottom$2,
	pageBackgroundLineMid: () => pageBackgroundLineMid$2,
	pageBackgroundLineTop: () => pageBackgroundLineTop$2,
	pageBackgroundModalActive: () => pageBackgroundModalActive$2,
	pageBackgroundTopLeft: () => pageBackgroundTopLeft$2,
	pageText: () => pageText$2,
	pageTextDark: () => pageTextDark$2,
	pageTextLight: () => pageTextLight$2,
	pageTextLink: () => pageTextLink$2,
	pageTextLinkLight: () => pageTextLinkLight$2,
	pageTextPositive: () => pageTextPositive$2,
	pageTextSubdued: () => pageTextSubdued$2,
	pillBackground: () => pillBackground$2,
	pillBackgroundLight: () => pillBackgroundLight$2,
	pillBackgroundSelected: () => pillBackgroundSelected$2,
	pillBorder: () => pillBorder$2,
	pillBorderDark: () => pillBorderDark$2,
	pillBorderSelected: () => pillBorderSelected$2,
	pillText: () => pillText$2,
	pillTextHighlighted: () => pillTextHighlighted$2,
	pillTextSelected: () => pillTextSelected$2,
	pillTextSubdued: () => pillTextSubdued$2,
	reportsBlue: () => reportsBlue$2,
	reportsChartFill: () => reportsChartFill$2,
	reportsGray: () => reportsGray$2,
	reportsGreen: () => reportsGreen$2,
	reportsInnerLabel: () => reportsInnerLabel$2,
	reportsLabel: () => reportsLabel$2,
	reportsNumberNegative: () => reportsNumberNegative$2,
	reportsNumberNeutral: () => reportsNumberNeutral$2,
	reportsNumberPositive: () => reportsNumberPositive$2,
	reportsRed: () => reportsRed$2,
	sidebarBackground: () => sidebarBackground$2,
	sidebarBudgetName: () => sidebarBudgetName$2,
	sidebarItemAccentSelected: () => sidebarItemAccentSelected$2,
	sidebarItemBackgroundFailed: () => sidebarItemBackgroundFailed$2,
	sidebarItemBackgroundHover: () => sidebarItemBackgroundHover$2,
	sidebarItemBackgroundPending: () => sidebarItemBackgroundPending$2,
	sidebarItemBackgroundPositive: () => sidebarItemBackgroundPositive$2,
	sidebarItemText: () => sidebarItemText$2,
	sidebarItemTextSelected: () => sidebarItemTextSelected$2,
	tableBackground: () => tableBackground$2,
	tableBorder: () => tableBorder$2,
	tableBorderHover: () => tableBorderHover$2,
	tableBorderSelected: () => tableBorderSelected$2,
	tableBorderSeparator: () => tableBorderSeparator$2,
	tableHeaderBackground: () => tableHeaderBackground$2,
	tableHeaderText: () => tableHeaderText$2,
	tableRowBackgroundHighlight: () => tableRowBackgroundHighlight$2,
	tableRowBackgroundHighlightText: () => tableRowBackgroundHighlightText$2,
	tableRowBackgroundHover: () => tableRowBackgroundHover$2,
	tableRowHeaderBackground: () => tableRowHeaderBackground$2,
	tableRowHeaderText: () => tableRowHeaderText$2,
	tableText: () => tableText$2,
	tableTextHover: () => tableTextHover$2,
	tableTextInactive: () => tableTextInactive$2,
	tableTextLight: () => tableTextLight$2,
	tableTextSelected: () => tableTextSelected$2,
	tableTextSubdued: () => tableTextSubdued$2,
	templateNumberFunded: () => templateNumberFunded$2,
	templateNumberUnderFunded: () => templateNumberUnderFunded$2,
	toBudgetNegative: () => toBudgetNegative$2,
	toBudgetPositive: () => toBudgetPositive$2,
	toBudgetZero: () => toBudgetZero$2,
	tooltipBackground: () => tooltipBackground$2,
	tooltipBorder: () => tooltipBorder$2,
	tooltipText: () => tooltipText$2,
	upcomingBackground: () => upcomingBackground$2,
	upcomingBorder: () => upcomingBorder$2,
	upcomingText: () => upcomingText$2,
	warningBackground: () => warningBackground$2,
	warningBorder: () => warningBorder$2,
	warningText: () => warningText$2,
	warningTextDark: () => warningTextDark$2,
	warningTextLight: () => warningTextLight$2
});
var pageBackground$2 = gray900;
var pageBackgroundModalActive$2 = gray800;
var pageBackgroundTopLeft$2 = navy800;
var pageBackgroundBottomRight$2 = gray700;
var pageBackgroundLineTop$2 = purple400;
var pageBackgroundLineMid$2 = navy900;
var pageBackgroundLineBottom$2 = navy150;
var pageText$2 = navy150;
var pageTextLight$2 = navy300;
var pageTextSubdued$2 = navy500;
var pageTextDark$2 = navy100;
var pageTextPositive$2 = purple200;
var pageTextLink$2 = purple400;
var pageTextLinkLight$2 = purple200;
var cardBackground$2 = gray800;
var cardBorder$2 = purple400;
var cardShadow$2 = navy700;
var tableBackground$2 = navy800;
var tableRowBackgroundHover$2 = navy700;
var tableText$2 = navy150;
var tableTextLight$2 = tableText$2;
var tableTextSubdued$2 = navy500;
var tableTextSelected$2 = navy150;
var tableTextHover$2 = navy400;
var tableTextInactive$2 = navy500;
var tableHeaderText$2 = navy300;
var tableHeaderBackground$2 = navy700;
var tableBorder$2 = navy600;
var tableBorderSelected$2 = purple400;
var tableBorderHover$2 = purple300;
var tableBorderSeparator$2 = navy400;
var tableRowBackgroundHighlight$2 = purple800;
var tableRowBackgroundHighlightText$2 = navy150;
var tableRowHeaderBackground$2 = navy700;
var tableRowHeaderText$2 = navy150;
var numberPositive$2 = green300;
var numberNegative$2 = red200;
var numberNeutral$2 = navy500;
var budgetNumberNegative$2 = numberNegative$2;
var budgetNumberZero$2 = tableTextSubdued$2;
var budgetNumberNeutral$2 = tableText$2;
var budgetNumberPositive$2 = budgetNumberNeutral$2;
var templateNumberFunded$2 = numberPositive$2;
var templateNumberUnderFunded$2 = orange300;
var toBudgetPositive$2 = numberPositive$2;
var toBudgetZero$2 = numberPositive$2;
var toBudgetNegative$2 = budgetNumberNegative$2;
var sidebarBackground$2 = navy900;
var sidebarItemBackgroundPending$2 = orange200;
var sidebarItemBackgroundPositive$2 = green500;
var sidebarItemBackgroundFailed$2 = red300;
var sidebarItemAccentSelected$2 = purple200;
var sidebarItemBackgroundHover$2 = navy700;
var sidebarItemText$2 = navy150;
var sidebarItemTextSelected$2 = purple200;
var sidebarBudgetName$2 = navy300;
var menuBackground$2 = navy800;
var menuItemBackground$2 = navy800;
var menuItemBackgroundHover$2 = navy500;
var menuItemText$2 = navy100;
var menuItemTextHover$2 = navy50;
var menuItemTextSelected$2 = purple400;
var menuItemTextHeader$2 = purple200;
var menuBorder$2 = navy900;
var menuBorderHover$2 = purple400;
var menuKeybindingText$2 = purple200;
var menuAutoCompleteBackground$2 = navy900;
var menuAutoCompleteBackgroundHover$2 = navy600;
var menuAutoCompleteText$2 = navy200;
var menuAutoCompleteTextHeader$2 = purple200;
var menuAutoCompleteItemText$2 = menuItemText$2;
var modalBackground$2 = gray800;
var modalBorder$2 = navy600;
var mobileHeaderBackground$2 = purple800;
var mobileHeaderText$2 = navy150;
var mobileHeaderTextSubdued$2 = gray200;
var mobileHeaderTextHover$2 = "rgba(200, 200, 200, .15)";
var mobilePageBackground$2 = navy700;
var mobileNavBackground$2 = navy800;
var mobileNavItem$2 = navy150;
var mobileNavItemSelected$2 = purple400;
var mobileAccountShadow$2 = cardShadow$2;
var mobileAccountText$2 = blue800;
var mobileTransactionSelected$2 = purple400;
var mobileViewTheme$2 = mobileHeaderBackground$2;
var mobileConfigServerViewTheme$2 = purple500;
var markdownNormal$2 = purple700;
var markdownDark$2 = purple500;
var markdownLight$2 = purple800;
var buttonMenuText$2 = navy200;
var buttonMenuTextHover$2 = buttonMenuText$2;
var buttonMenuBackground$2 = "transparent";
var buttonMenuBackgroundHover$2 = "rgba(200, 200, 200, .25)";
var buttonMenuBorder$2 = navy500;
var buttonMenuSelectedText$2 = green800;
var buttonMenuSelectedTextHover$2 = orange800;
var buttonMenuSelectedBackground$2 = orange200;
var buttonMenuSelectedBackgroundHover$2 = orange300;
var buttonMenuSelectedBorder$2 = buttonMenuSelectedBackground$2;
var buttonPrimaryText$2 = white;
var buttonPrimaryTextHover$2 = buttonPrimaryText$2;
var buttonPrimaryBackground$2 = purple400;
var buttonPrimaryBackgroundHover$2 = purple600;
var buttonPrimaryBorder$2 = buttonPrimaryBackground$2;
var buttonPrimaryShadow$2 = "rgba(0, 0, 0, 0.6)";
var buttonPrimaryDisabledText$2 = navy700;
var buttonPrimaryDisabledBackground$2 = navy400;
var buttonPrimaryDisabledBorder$2 = buttonPrimaryDisabledBackground$2;
var buttonNormalText$2 = navy150;
var buttonNormalTextHover$2 = navy150;
var buttonNormalBackground$2 = navy800;
var buttonNormalBackgroundHover$2 = navy600;
var buttonNormalBorder$2 = navy300;
var buttonNormalShadow$2 = "rgba(0, 0, 0, 0.4)";
var buttonNormalSelectedText$2 = white;
var buttonNormalSelectedBackground$2 = purple600;
var buttonNormalDisabledText$2 = navy500;
var buttonNormalDisabledBackground$2 = navy800;
var buttonNormalDisabledBorder$2 = navy500;
var calendarText$2 = navy50;
var calendarBackground$2 = navy900;
var calendarItemText$2 = navy150;
var calendarItemBackground$2 = navy800;
var calendarSelectedBackground$2 = buttonNormalSelectedBackground$2;
var buttonBareText$2 = buttonNormalText$2;
var buttonBareTextHover$2 = buttonNormalText$2;
var buttonBareBackground$2 = "transparent";
var buttonBareBackgroundHover$2 = "rgba(200, 200, 200, .3)";
var buttonBareBackgroundActive$2 = "rgba(200, 200, 200, .5)";
var buttonBareDisabledText$2 = buttonNormalDisabledText$2;
var buttonBareDisabledBackground$2 = buttonBareBackground$2;
var noticeBackground$2 = green800;
var noticeBackgroundLight$2 = green900;
var noticeBackgroundDark$2 = green500;
var noticeText$2 = green300;
var noticeTextLight$2 = green500;
var noticeTextDark$2 = green150;
var noticeTextMenu$2 = green500;
var noticeBorder$2 = green800;
var warningBackground$2 = orange800;
var warningText$2 = orange300;
var warningTextLight$2 = orange500;
var warningTextDark$2 = orange100;
var warningBorder$2 = orange500;
var errorBackground$2 = red800;
var errorText$2 = red200;
var errorTextDark$2 = red150;
var errorTextDarker$2 = errorTextDark$2;
var errorTextMenu$2 = red200;
var errorBorder$2 = red500;
var upcomingBackground$2 = purple700;
var upcomingText$2 = purple100;
var upcomingBorder$2 = tableBorder$2;
var formLabelText$2 = purple150;
var formLabelBackground$2 = blue900;
var formInputBackground$2 = navy800;
var formInputBackgroundSelected$2 = navy700;
var formInputBackgroundSelection$2 = purple400;
var formInputBorder$2 = navy600;
var formInputTextReadOnlySelection$2 = navy800;
var formInputBorderSelected$2 = purple400;
var formInputText$2 = navy150;
var formInputTextSelected$2 = black;
var formInputTextPlaceholder$2 = navy150;
var formInputTextPlaceholderSelected$2 = navy100;
var formInputTextSelection$2 = navy800;
var formInputShadowSelected$2 = purple200;
var formInputTextHighlight$2 = purple400;
var checkboxText$2 = tableText$2;
var checkboxBackgroundSelected$2 = purple300;
var checkboxBorderSelected$2 = purple300;
var checkboxShadowSelected$2 = purple500;
var checkboxToggleBackground$2 = gray700;
var checkboxToggleBackgroundSelected$2 = purple300;
var checkboxToggleDisabled$2 = gray400;
var pillBackground$2 = navy800;
var pillBackgroundLight$2 = navy900;
var pillText$2 = navy200;
var pillTextHighlighted$2 = purple200;
var pillBorder$2 = navy700;
var pillBorderDark$2 = pillBorder$2;
var pillBackgroundSelected$2 = purple600;
var pillTextSelected$2 = navy150;
var pillBorderSelected$2 = purple400;
var pillTextSubdued$2 = navy500;
var reportsRed$2 = red300;
var reportsBlue$2 = blue400;
var reportsGreen$2 = green400;
var reportsGray$2 = gray400;
var reportsLabel$2 = pageText$2;
var reportsInnerLabel$2 = navy800;
var reportsNumberPositive$2 = numberPositive$2;
var reportsNumberNegative$2 = numberNegative$2;
var reportsNumberNeutral$2 = numberNeutral$2;
var reportsChartFill$2 = reportsNumberPositive$2;
var noteTagBackground$2 = purple700;
var noteTagBackgroundHover$2 = purple500;
var noteTagDefault$2 = purple700;
var noteTagText$2 = purple100;
var budgetOtherMonth$2 = navy900;
var budgetCurrentMonth$2 = tableBackground$2;
var budgetHeaderOtherMonth$2 = navy800;
var budgetHeaderCurrentMonth$2 = tableHeaderBackground$2;
var floatingActionBarBackground$2 = purple800;
var floatingActionBarBorder$2 = floatingActionBarBackground$2;
var floatingActionBarText$2 = navy150;
var tooltipText$2 = navy100;
var tooltipBackground$2 = navy800;
var tooltipBorder$2 = navy700;
var calendarCellBackground$2 = navy900;
var overlayBackground$2 = "rgba(0, 0, 0, 0.3)";
var chartQual1$2 = chartQual1$3;
var chartQual2$2 = chartQual2$3;
var chartQual3$2 = chartQual3$3;
var chartQual4$2 = chartQual4$3;
var chartQual5$2 = chartQual5$3;
var chartQual6$2 = chartQual6$3;
var chartQual7$2 = chartQual7$3;
var chartQual8$2 = chartQual8$3;
var chartQual9$2 = chartQual9$3;
//#endregion
//#region src/style/themes/light.ts
var light_exports = /* @__PURE__ */ __exportAll({
	budgetCurrentMonth: () => budgetCurrentMonth$1,
	budgetHeaderCurrentMonth: () => budgetHeaderCurrentMonth$1,
	budgetHeaderOtherMonth: () => budgetHeaderOtherMonth$1,
	budgetNumberNegative: () => budgetNumberNegative$1,
	budgetNumberNeutral: () => budgetNumberNeutral$1,
	budgetNumberPositive: () => budgetNumberPositive$1,
	budgetNumberZero: () => budgetNumberZero$1,
	budgetOtherMonth: () => budgetOtherMonth$1,
	buttonBareBackground: () => buttonBareBackground$1,
	buttonBareBackgroundActive: () => buttonBareBackgroundActive$1,
	buttonBareBackgroundHover: () => buttonBareBackgroundHover$1,
	buttonBareDisabledBackground: () => buttonBareDisabledBackground$1,
	buttonBareDisabledText: () => buttonBareDisabledText$1,
	buttonBareText: () => buttonBareText$1,
	buttonBareTextHover: () => buttonBareTextHover$1,
	buttonMenuBackground: () => buttonMenuBackground$1,
	buttonMenuBackgroundHover: () => buttonMenuBackgroundHover$1,
	buttonMenuBorder: () => buttonMenuBorder$1,
	buttonMenuSelectedBackground: () => buttonMenuSelectedBackground$1,
	buttonMenuSelectedBackgroundHover: () => buttonMenuSelectedBackgroundHover$1,
	buttonMenuSelectedBorder: () => buttonMenuSelectedBorder$1,
	buttonMenuSelectedText: () => buttonMenuSelectedText$1,
	buttonMenuSelectedTextHover: () => buttonMenuSelectedTextHover$1,
	buttonMenuText: () => buttonMenuText$1,
	buttonMenuTextHover: () => buttonMenuTextHover$1,
	buttonNormalBackground: () => buttonNormalBackground$1,
	buttonNormalBackgroundHover: () => buttonNormalBackgroundHover$1,
	buttonNormalBorder: () => buttonNormalBorder$1,
	buttonNormalDisabledBackground: () => buttonNormalDisabledBackground$1,
	buttonNormalDisabledBorder: () => buttonNormalDisabledBorder$1,
	buttonNormalDisabledText: () => buttonNormalDisabledText$1,
	buttonNormalSelectedBackground: () => buttonNormalSelectedBackground$1,
	buttonNormalSelectedText: () => buttonNormalSelectedText$1,
	buttonNormalShadow: () => buttonNormalShadow$1,
	buttonNormalText: () => buttonNormalText$1,
	buttonNormalTextHover: () => buttonNormalTextHover$1,
	buttonPrimaryBackground: () => buttonPrimaryBackground$1,
	buttonPrimaryBackgroundHover: () => buttonPrimaryBackgroundHover$1,
	buttonPrimaryBorder: () => buttonPrimaryBorder$1,
	buttonPrimaryDisabledBackground: () => buttonPrimaryDisabledBackground$1,
	buttonPrimaryDisabledBorder: () => buttonPrimaryDisabledBorder$1,
	buttonPrimaryDisabledText: () => buttonPrimaryDisabledText$1,
	buttonPrimaryShadow: () => buttonPrimaryShadow$1,
	buttonPrimaryText: () => buttonPrimaryText$1,
	buttonPrimaryTextHover: () => buttonPrimaryTextHover$1,
	calendarBackground: () => calendarBackground$1,
	calendarCellBackground: () => calendarCellBackground$1,
	calendarItemBackground: () => calendarItemBackground$1,
	calendarItemText: () => calendarItemText$1,
	calendarSelectedBackground: () => calendarSelectedBackground$1,
	calendarText: () => calendarText$1,
	cardBackground: () => cardBackground$1,
	cardBorder: () => cardBorder$1,
	cardShadow: () => cardShadow$1,
	chartQual1: () => chartQual1$1,
	chartQual2: () => chartQual2$1,
	chartQual3: () => chartQual3$1,
	chartQual4: () => chartQual4$1,
	chartQual5: () => chartQual5$1,
	chartQual6: () => chartQual6$1,
	chartQual7: () => chartQual7$1,
	chartQual8: () => chartQual8$1,
	chartQual9: () => chartQual9$1,
	checkboxBackgroundSelected: () => checkboxBackgroundSelected$1,
	checkboxBorderSelected: () => checkboxBorderSelected$1,
	checkboxShadowSelected: () => checkboxShadowSelected$1,
	checkboxText: () => checkboxText$1,
	checkboxToggleBackground: () => checkboxToggleBackground$1,
	checkboxToggleBackgroundSelected: () => checkboxToggleBackgroundSelected$1,
	checkboxToggleDisabled: () => checkboxToggleDisabled$1,
	errorBackground: () => errorBackground$1,
	errorBorder: () => errorBorder$1,
	errorText: () => errorText$1,
	errorTextDark: () => errorTextDark$1,
	errorTextDarker: () => errorTextDarker$1,
	errorTextMenu: () => errorTextMenu$1,
	floatingActionBarBackground: () => floatingActionBarBackground$1,
	floatingActionBarBorder: () => floatingActionBarBorder$1,
	floatingActionBarText: () => floatingActionBarText$1,
	formInputBackground: () => formInputBackground$1,
	formInputBackgroundSelected: () => formInputBackgroundSelected$1,
	formInputBackgroundSelection: () => formInputBackgroundSelection$1,
	formInputBorder: () => formInputBorder$1,
	formInputBorderSelected: () => formInputBorderSelected$1,
	formInputShadowSelected: () => formInputShadowSelected$1,
	formInputText: () => formInputText$1,
	formInputTextHighlight: () => formInputTextHighlight$1,
	formInputTextPlaceholder: () => formInputTextPlaceholder$1,
	formInputTextPlaceholderSelected: () => formInputTextPlaceholderSelected$1,
	formInputTextReadOnlySelection: () => formInputTextReadOnlySelection$1,
	formInputTextSelected: () => formInputTextSelected$1,
	formInputTextSelection: () => formInputTextSelection$1,
	formLabelBackground: () => formLabelBackground$1,
	formLabelText: () => formLabelText$1,
	markdownDark: () => markdownDark$1,
	markdownLight: () => markdownLight$1,
	markdownNormal: () => markdownNormal$1,
	menuAutoCompleteBackground: () => menuAutoCompleteBackground$1,
	menuAutoCompleteBackgroundHover: () => menuAutoCompleteBackgroundHover$1,
	menuAutoCompleteItemText: () => menuAutoCompleteItemText$1,
	menuAutoCompleteItemTextHover: () => menuAutoCompleteItemTextHover$1,
	menuAutoCompleteText: () => menuAutoCompleteText$1,
	menuAutoCompleteTextHeader: () => menuAutoCompleteTextHeader$1,
	menuAutoCompleteTextHover: () => menuAutoCompleteTextHover$1,
	menuBackground: () => menuBackground$1,
	menuBorder: () => menuBorder$1,
	menuBorderHover: () => menuBorderHover$1,
	menuItemBackground: () => menuItemBackground$1,
	menuItemBackgroundHover: () => menuItemBackgroundHover$1,
	menuItemText: () => menuItemText$1,
	menuItemTextHeader: () => menuItemTextHeader$1,
	menuItemTextHover: () => menuItemTextHover$1,
	menuItemTextSelected: () => menuItemTextSelected$1,
	menuKeybindingText: () => menuKeybindingText$1,
	mobileAccountShadow: () => mobileAccountShadow$1,
	mobileAccountText: () => mobileAccountText$1,
	mobileConfigServerViewTheme: () => mobileConfigServerViewTheme$1,
	mobileHeaderBackground: () => mobileHeaderBackground$1,
	mobileHeaderText: () => mobileHeaderText$1,
	mobileHeaderTextHover: () => mobileHeaderTextHover$1,
	mobileHeaderTextSubdued: () => mobileHeaderTextSubdued$1,
	mobileNavBackground: () => mobileNavBackground$1,
	mobileNavItem: () => mobileNavItem$1,
	mobileNavItemSelected: () => mobileNavItemSelected$1,
	mobilePageBackground: () => mobilePageBackground$1,
	mobileTransactionSelected: () => mobileTransactionSelected$1,
	mobileViewTheme: () => mobileViewTheme$1,
	modalBackground: () => modalBackground$1,
	modalBorder: () => modalBorder$1,
	noteTagBackground: () => noteTagBackground$1,
	noteTagBackgroundHover: () => noteTagBackgroundHover$1,
	noteTagDefault: () => noteTagDefault$1,
	noteTagText: () => noteTagText$1,
	noticeBackground: () => noticeBackground$1,
	noticeBackgroundDark: () => noticeBackgroundDark$1,
	noticeBackgroundLight: () => noticeBackgroundLight$1,
	noticeBorder: () => noticeBorder$1,
	noticeText: () => noticeText$1,
	noticeTextDark: () => noticeTextDark$1,
	noticeTextLight: () => noticeTextLight$1,
	noticeTextMenu: () => noticeTextMenu$1,
	numberNegative: () => numberNegative$1,
	numberNeutral: () => numberNeutral$1,
	numberPositive: () => numberPositive$1,
	overlayBackground: () => overlayBackground$1,
	pageBackground: () => pageBackground$1,
	pageBackgroundBottomRight: () => pageBackgroundBottomRight$1,
	pageBackgroundLineBottom: () => pageBackgroundLineBottom$1,
	pageBackgroundLineMid: () => pageBackgroundLineMid$1,
	pageBackgroundLineTop: () => pageBackgroundLineTop$1,
	pageBackgroundModalActive: () => pageBackgroundModalActive$1,
	pageBackgroundTopLeft: () => pageBackgroundTopLeft$1,
	pageText: () => pageText$1,
	pageTextDark: () => pageTextDark$1,
	pageTextLight: () => pageTextLight$1,
	pageTextLink: () => pageTextLink$1,
	pageTextLinkLight: () => pageTextLinkLight$1,
	pageTextPositive: () => pageTextPositive$1,
	pageTextSubdued: () => pageTextSubdued$1,
	pillBackground: () => pillBackground$1,
	pillBackgroundLight: () => pillBackgroundLight$1,
	pillBackgroundSelected: () => pillBackgroundSelected$1,
	pillBorder: () => pillBorder$1,
	pillBorderDark: () => pillBorderDark$1,
	pillBorderSelected: () => pillBorderSelected$1,
	pillText: () => pillText$1,
	pillTextHighlighted: () => pillTextHighlighted$1,
	pillTextSelected: () => pillTextSelected$1,
	pillTextSubdued: () => pillTextSubdued$1,
	reportsBlue: () => reportsBlue$1,
	reportsChartFill: () => reportsChartFill$1,
	reportsGray: () => reportsGray$1,
	reportsGreen: () => reportsGreen$1,
	reportsInnerLabel: () => reportsInnerLabel$1,
	reportsLabel: () => reportsLabel$1,
	reportsNumberNegative: () => reportsNumberNegative$1,
	reportsNumberNeutral: () => reportsNumberNeutral$1,
	reportsNumberPositive: () => reportsNumberPositive$1,
	reportsRed: () => reportsRed$1,
	sidebarBackground: () => sidebarBackground$1,
	sidebarBudgetName: () => sidebarBudgetName$1,
	sidebarItemAccentSelected: () => sidebarItemAccentSelected$1,
	sidebarItemBackgroundFailed: () => sidebarItemBackgroundFailed$1,
	sidebarItemBackgroundHover: () => sidebarItemBackgroundHover$1,
	sidebarItemBackgroundPending: () => sidebarItemBackgroundPending$1,
	sidebarItemBackgroundPositive: () => sidebarItemBackgroundPositive$1,
	sidebarItemText: () => sidebarItemText$1,
	sidebarItemTextSelected: () => sidebarItemTextSelected$1,
	tableBackground: () => tableBackground$1,
	tableBorder: () => tableBorder$1,
	tableBorderHover: () => tableBorderHover$1,
	tableBorderSelected: () => tableBorderSelected$1,
	tableBorderSeparator: () => tableBorderSeparator$1,
	tableHeaderBackground: () => tableHeaderBackground$1,
	tableHeaderText: () => tableHeaderText$1,
	tableRowBackgroundHighlight: () => tableRowBackgroundHighlight$1,
	tableRowBackgroundHighlightText: () => tableRowBackgroundHighlightText$1,
	tableRowBackgroundHover: () => tableRowBackgroundHover$1,
	tableRowHeaderBackground: () => tableRowHeaderBackground$1,
	tableRowHeaderText: () => tableRowHeaderText$1,
	tableText: () => tableText$1,
	tableTextHover: () => tableTextHover$1,
	tableTextInactive: () => tableTextInactive$1,
	tableTextLight: () => tableTextLight$1,
	tableTextSelected: () => tableTextSelected$1,
	tableTextSubdued: () => tableTextSubdued$1,
	templateNumberFunded: () => templateNumberFunded$1,
	templateNumberUnderFunded: () => templateNumberUnderFunded$1,
	toBudgetNegative: () => toBudgetNegative$1,
	toBudgetPositive: () => toBudgetPositive$1,
	toBudgetZero: () => toBudgetZero$1,
	tooltipBackground: () => tooltipBackground$1,
	tooltipBorder: () => tooltipBorder$1,
	tooltipText: () => tooltipText$1,
	upcomingBackground: () => upcomingBackground$1,
	upcomingBorder: () => upcomingBorder$1,
	upcomingText: () => upcomingText$1,
	warningBackground: () => warningBackground$1,
	warningBorder: () => warningBorder$1,
	warningText: () => warningText$1,
	warningTextDark: () => warningTextDark$1,
	warningTextLight: () => warningTextLight$1
});
var pageBackground$1 = navy100;
var pageBackgroundModalActive$1 = navy200;
var pageBackgroundTopLeft$1 = navy100;
var pageBackgroundBottomRight$1 = blue150;
var pageBackgroundLineTop$1 = white;
var pageBackgroundLineMid$1 = navy100;
var pageBackgroundLineBottom$1 = blue150;
var pageText$1 = "#272630";
var pageTextLight$1 = navy500;
var pageTextSubdued$1 = navy300;
var pageTextDark$1 = navy800;
var pageTextPositive$1 = purple600;
var pageTextLink$1 = blue600;
var pageTextLinkLight$1 = blue300;
var cardBackground$1 = white;
var cardBorder$1 = purple700;
var cardShadow$1 = navy700;
var tableBackground$1 = white;
var tableRowBackgroundHover$1 = navy50;
var tableText$1 = pageText$1;
var tableTextLight$1 = navy400;
var tableTextSubdued$1 = navy100;
var tableTextSelected$1 = navy700;
var tableTextHover$1 = navy900;
var tableTextInactive$1 = navy500;
var tableHeaderText$1 = navy600;
var tableHeaderBackground$1 = white;
var tableBorder$1 = navy100;
var tableBorderSelected$1 = purple500;
var tableBorderHover$1 = purple400;
var tableBorderSeparator$1 = navy400;
var tableRowBackgroundHighlight$1 = blue150;
var tableRowBackgroundHighlightText$1 = navy700;
var tableRowHeaderBackground$1 = navy50;
var tableRowHeaderText$1 = navy800;
var numberPositive$1 = green700;
var numberNegative$1 = red500;
var numberNeutral$1 = navy100;
var budgetNumberNegative$1 = numberNegative$1;
var budgetNumberZero$1 = tableTextSubdued$1;
var budgetNumberNeutral$1 = tableText$1;
var budgetNumberPositive$1 = budgetNumberNeutral$1;
var templateNumberFunded$1 = numberPositive$1;
var templateNumberUnderFunded$1 = orange700;
var toBudgetPositive$1 = numberPositive$1;
var toBudgetZero$1 = numberPositive$1;
var toBudgetNegative$1 = budgetNumberNegative$1;
var sidebarBackground$1 = navy900;
var sidebarItemBackgroundPending$1 = orange200;
var sidebarItemBackgroundPositive$1 = green500;
var sidebarItemBackgroundFailed$1 = red300;
var sidebarItemBackgroundHover$1 = navy800;
var sidebarItemAccentSelected$1 = purple200;
var sidebarItemText$1 = navy150;
var sidebarItemTextSelected$1 = purple200;
var sidebarBudgetName$1 = navy150;
var menuBackground$1 = white;
var menuItemBackground$1 = navy50;
var menuItemBackgroundHover$1 = navy100;
var menuItemText$1 = navy900;
var menuItemTextHover$1 = menuItemText$1;
var menuItemTextSelected$1 = purple300;
var menuItemTextHeader$1 = navy400;
var menuBorder$1 = navy100;
var menuBorderHover$1 = purple100;
var menuKeybindingText$1 = navy400;
var menuAutoCompleteBackground$1 = navy900;
var menuAutoCompleteBackgroundHover$1 = navy600;
var menuAutoCompleteText$1 = white;
var menuAutoCompleteTextHover$1 = green150;
var menuAutoCompleteTextHeader$1 = orange150;
var menuAutoCompleteItemTextHover$1 = menuAutoCompleteText$1;
var menuAutoCompleteItemText$1 = menuAutoCompleteText$1;
var modalBackground$1 = white;
var modalBorder$1 = white;
var mobileHeaderBackground$1 = purple400;
var mobileHeaderText$1 = navy50;
var mobileHeaderTextSubdued$1 = gray200;
var mobileHeaderTextHover$1 = "rgba(200, 200, 200, .15)";
var mobilePageBackground$1 = navy50;
var mobileNavBackground$1 = white;
var mobileNavItem$1 = gray300;
var mobileNavItemSelected$1 = purple500;
var mobileAccountShadow$1 = navy300;
var mobileAccountText$1 = blue800;
var mobileTransactionSelected$1 = purple500;
var mobileViewTheme$1 = mobileHeaderBackground$1;
var mobileConfigServerViewTheme$1 = purple500;
var markdownNormal$1 = purple150;
var markdownDark$1 = purple400;
var markdownLight$1 = purple100;
var buttonMenuText$1 = navy100;
var buttonMenuTextHover$1 = navy50;
var buttonMenuBackground$1 = "transparent";
var buttonMenuBackgroundHover$1 = "rgba(200, 200, 200, .25)";
var buttonMenuBorder$1 = navy500;
var buttonMenuSelectedText$1 = green800;
var buttonMenuSelectedTextHover$1 = orange800;
var buttonMenuSelectedBackground$1 = orange200;
var buttonMenuSelectedBackgroundHover$1 = orange300;
var buttonMenuSelectedBorder$1 = buttonMenuSelectedBackground$1;
var buttonPrimaryText$1 = white;
var buttonPrimaryTextHover$1 = buttonPrimaryText$1;
var buttonPrimaryBackground$1 = purple500;
var buttonPrimaryBackgroundHover$1 = purple300;
var buttonPrimaryBorder$1 = buttonPrimaryBackground$1;
var buttonPrimaryShadow$1 = "rgba(0, 0, 0, 0.3)";
var buttonPrimaryDisabledText$1 = white;
var buttonPrimaryDisabledBackground$1 = navy300;
var buttonPrimaryDisabledBorder$1 = buttonPrimaryDisabledBackground$1;
var buttonNormalText$1 = navy900;
var buttonNormalTextHover$1 = buttonNormalText$1;
var buttonNormalBackground$1 = white;
var buttonNormalBackgroundHover$1 = buttonNormalBackground$1;
var buttonNormalBorder$1 = navy150;
var buttonNormalShadow$1 = "rgba(0, 0, 0, 0.2)";
var buttonNormalSelectedText$1 = white;
var buttonNormalSelectedBackground$1 = blue600;
var buttonNormalDisabledText$1 = navy300;
var buttonNormalDisabledBackground$1 = buttonNormalBackground$1;
var buttonNormalDisabledBorder$1 = buttonNormalBorder$1;
var calendarText$1 = navy50;
var calendarBackground$1 = navy900;
var calendarItemText$1 = navy150;
var calendarItemBackground$1 = navy800;
var calendarSelectedBackground$1 = navy500;
var buttonBareText$1 = buttonNormalText$1;
var buttonBareTextHover$1 = buttonNormalText$1;
var buttonBareBackground$1 = "transparent";
var buttonBareBackgroundHover$1 = "rgba(100, 100, 100, .15)";
var buttonBareBackgroundActive$1 = "rgba(100, 100, 100, .25)";
var buttonBareDisabledText$1 = buttonNormalDisabledText$1;
var buttonBareDisabledBackground$1 = buttonBareBackground$1;
var noticeBackground$1 = green150;
var noticeBackgroundLight$1 = green100;
var noticeBackgroundDark$1 = green500;
var noticeText$1 = green700;
var noticeTextLight$1 = green500;
var noticeTextDark$1 = green900;
var noticeTextMenu$1 = green200;
var noticeBorder$1 = green500;
var warningBackground$1 = orange200;
var warningText$1 = orange700;
var warningTextLight$1 = orange500;
var warningTextDark$1 = orange900;
var warningBorder$1 = orange500;
var errorBackground$1 = red100;
var errorText$1 = red500;
var errorTextDark$1 = red700;
var errorTextDarker$1 = red900;
var errorTextMenu$1 = red200;
var errorBorder$1 = red500;
var upcomingBackground$1 = purple100;
var upcomingText$1 = purple700;
var upcomingBorder$1 = purple500;
var formLabelText$1 = blue600;
var formLabelBackground$1 = blue200;
var formInputBackground$1 = navy50;
var formInputBackgroundSelected$1 = white;
var formInputBackgroundSelection$1 = purple500;
var formInputBorder$1 = navy150;
var formInputTextReadOnlySelection$1 = navy50;
var formInputBorderSelected$1 = purple500;
var formInputText$1 = navy900;
var formInputTextSelected$1 = navy50;
var formInputTextPlaceholder$1 = navy300;
var formInputTextPlaceholderSelected$1 = navy200;
var formInputTextSelection$1 = navy100;
var formInputShadowSelected$1 = purple300;
var formInputTextHighlight$1 = purple200;
var checkboxText$1 = tableBackground$1;
var checkboxBackgroundSelected$1 = blue500;
var checkboxBorderSelected$1 = blue500;
var checkboxShadowSelected$1 = blue300;
var checkboxToggleBackground$1 = gray400;
var checkboxToggleBackgroundSelected$1 = purple600;
var checkboxToggleDisabled$1 = gray200;
var pillBackground$1 = navy150;
var pillBackgroundLight$1 = navy50;
var pillText$1 = navy800;
var pillTextHighlighted$1 = purple600;
var pillBorder$1 = navy150;
var pillBorderDark$1 = navy300;
var pillBackgroundSelected$1 = blue150;
var pillTextSelected$1 = blue900;
var pillBorderSelected$1 = purple500;
var pillTextSubdued$1 = navy200;
var reportsRed$1 = red300;
var reportsBlue$1 = blue400;
var reportsGreen$1 = green400;
var reportsGray$1 = gray400;
var reportsLabel$1 = navy900;
var reportsInnerLabel$1 = navy800;
var reportsNumberPositive$1 = numberPositive$1;
var reportsNumberNegative$1 = numberNegative$1;
var reportsNumberNeutral$1 = numberNeutral$1;
var reportsChartFill$1 = reportsNumberPositive$1;
var noteTagBackground$1 = purple125;
var noteTagBackgroundHover$1 = purple150;
var noteTagDefault$1 = purple125;
var noteTagText$1 = black;
var budgetCurrentMonth$1 = tableBackground$1;
var budgetOtherMonth$1 = gray50;
var budgetHeaderCurrentMonth$1 = budgetOtherMonth$1;
var budgetHeaderOtherMonth$1 = gray80;
var floatingActionBarBackground$1 = purple400;
var floatingActionBarBorder$1 = floatingActionBarBackground$1;
var floatingActionBarText$1 = navy50;
var tooltipText$1 = navy900;
var tooltipBackground$1 = white;
var tooltipBorder$1 = navy150;
var calendarCellBackground$1 = navy100;
var overlayBackground$1 = "rgba(0, 0, 0, 0.3)";
var chartQual1$1 = chartQual1$3;
var chartQual2$1 = chartQual2$3;
var chartQual3$1 = chartQual3$3;
var chartQual4$1 = chartQual4$3;
var chartQual5$1 = chartQual5$3;
var chartQual6$1 = chartQual6$3;
var chartQual7$1 = chartQual7$3;
var chartQual8$1 = chartQual8$3;
var chartQual9$1 = chartQual9$3;
//#endregion
//#region src/style/themes/midnight.ts
var midnight_exports = /* @__PURE__ */ __exportAll({
	budgetCurrentMonth: () => budgetCurrentMonth,
	budgetHeaderCurrentMonth: () => budgetHeaderCurrentMonth,
	budgetHeaderOtherMonth: () => budgetHeaderOtherMonth,
	budgetNumberNegative: () => budgetNumberNegative,
	budgetNumberNeutral: () => budgetNumberNeutral,
	budgetNumberPositive: () => budgetNumberPositive,
	budgetNumberZero: () => budgetNumberZero,
	budgetOtherMonth: () => budgetOtherMonth,
	buttonBareBackground: () => buttonBareBackground,
	buttonBareBackgroundActive: () => buttonBareBackgroundActive,
	buttonBareBackgroundHover: () => buttonBareBackgroundHover,
	buttonBareDisabledBackground: () => buttonBareDisabledBackground,
	buttonBareDisabledText: () => buttonBareDisabledText,
	buttonBareText: () => buttonBareText,
	buttonBareTextHover: () => buttonBareTextHover,
	buttonMenuBackground: () => buttonMenuBackground,
	buttonMenuBackgroundHover: () => buttonMenuBackgroundHover,
	buttonMenuBorder: () => buttonMenuBorder,
	buttonMenuSelectedBackground: () => buttonMenuSelectedBackground,
	buttonMenuSelectedBackgroundHover: () => buttonMenuSelectedBackgroundHover,
	buttonMenuSelectedBorder: () => buttonMenuSelectedBorder,
	buttonMenuSelectedText: () => buttonMenuSelectedText,
	buttonMenuSelectedTextHover: () => buttonMenuSelectedTextHover,
	buttonMenuText: () => buttonMenuText,
	buttonMenuTextHover: () => buttonMenuTextHover,
	buttonNormalBackground: () => buttonNormalBackground,
	buttonNormalBackgroundHover: () => buttonNormalBackgroundHover,
	buttonNormalBorder: () => buttonNormalBorder,
	buttonNormalDisabledBackground: () => buttonNormalDisabledBackground,
	buttonNormalDisabledBorder: () => buttonNormalDisabledBorder,
	buttonNormalDisabledText: () => buttonNormalDisabledText,
	buttonNormalSelectedBackground: () => buttonNormalSelectedBackground,
	buttonNormalSelectedText: () => buttonNormalSelectedText,
	buttonNormalShadow: () => buttonNormalShadow,
	buttonNormalText: () => buttonNormalText,
	buttonNormalTextHover: () => buttonNormalTextHover,
	buttonPrimaryBackground: () => buttonPrimaryBackground,
	buttonPrimaryBackgroundHover: () => buttonPrimaryBackgroundHover,
	buttonPrimaryBorder: () => buttonPrimaryBorder,
	buttonPrimaryDisabledBackground: () => buttonPrimaryDisabledBackground,
	buttonPrimaryDisabledBorder: () => buttonPrimaryDisabledBorder,
	buttonPrimaryDisabledText: () => buttonPrimaryDisabledText,
	buttonPrimaryShadow: () => buttonPrimaryShadow,
	buttonPrimaryText: () => buttonPrimaryText,
	buttonPrimaryTextHover: () => buttonPrimaryTextHover,
	calendarBackground: () => calendarBackground,
	calendarCellBackground: () => calendarCellBackground,
	calendarItemBackground: () => calendarItemBackground,
	calendarItemText: () => calendarItemText,
	calendarSelectedBackground: () => calendarSelectedBackground,
	calendarText: () => calendarText,
	cardBackground: () => cardBackground,
	cardBorder: () => cardBorder,
	cardShadow: () => cardShadow,
	chartQual1: () => chartQual1,
	chartQual2: () => chartQual2,
	chartQual3: () => chartQual3,
	chartQual4: () => chartQual4,
	chartQual5: () => chartQual5,
	chartQual6: () => chartQual6,
	chartQual7: () => chartQual7,
	chartQual8: () => chartQual8,
	chartQual9: () => chartQual9,
	checkboxBackgroundSelected: () => checkboxBackgroundSelected,
	checkboxBorderSelected: () => checkboxBorderSelected,
	checkboxShadowSelected: () => checkboxShadowSelected,
	checkboxText: () => checkboxText,
	checkboxToggleBackground: () => checkboxToggleBackground,
	checkboxToggleBackgroundSelected: () => checkboxToggleBackgroundSelected,
	checkboxToggleDisabled: () => checkboxToggleDisabled,
	errorBackground: () => errorBackground,
	errorBorder: () => errorBorder,
	errorText: () => errorText,
	errorTextDark: () => errorTextDark,
	errorTextDarker: () => errorTextDarker,
	errorTextMenu: () => errorTextMenu,
	floatingActionBarBackground: () => floatingActionBarBackground,
	floatingActionBarBorder: () => floatingActionBarBorder,
	floatingActionBarText: () => floatingActionBarText,
	formInputBackground: () => formInputBackground,
	formInputBackgroundSelected: () => formInputBackgroundSelected,
	formInputBackgroundSelection: () => formInputBackgroundSelection,
	formInputBorder: () => formInputBorder,
	formInputBorderSelected: () => formInputBorderSelected,
	formInputShadowSelected: () => formInputShadowSelected,
	formInputText: () => formInputText,
	formInputTextHighlight: () => formInputTextHighlight,
	formInputTextPlaceholder: () => formInputTextPlaceholder,
	formInputTextPlaceholderSelected: () => formInputTextPlaceholderSelected,
	formInputTextReadOnlySelection: () => formInputTextReadOnlySelection,
	formInputTextSelected: () => formInputTextSelected,
	formInputTextSelection: () => formInputTextSelection,
	formLabelBackground: () => formLabelBackground,
	formLabelText: () => formLabelText,
	markdownDark: () => markdownDark,
	markdownLight: () => markdownLight,
	markdownNormal: () => markdownNormal,
	menuAutoCompleteBackground: () => menuAutoCompleteBackground,
	menuAutoCompleteBackgroundHover: () => menuAutoCompleteBackgroundHover,
	menuAutoCompleteItemText: () => menuAutoCompleteItemText,
	menuAutoCompleteItemTextHover: () => menuAutoCompleteItemTextHover,
	menuAutoCompleteText: () => menuAutoCompleteText,
	menuAutoCompleteTextHeader: () => menuAutoCompleteTextHeader,
	menuAutoCompleteTextHover: () => menuAutoCompleteTextHover,
	menuBackground: () => menuBackground,
	menuBorder: () => menuBorder,
	menuBorderHover: () => menuBorderHover,
	menuItemBackground: () => menuItemBackground,
	menuItemBackgroundHover: () => menuItemBackgroundHover,
	menuItemText: () => menuItemText,
	menuItemTextHeader: () => menuItemTextHeader,
	menuItemTextHover: () => menuItemTextHover,
	menuItemTextSelected: () => menuItemTextSelected,
	menuKeybindingText: () => menuKeybindingText,
	mobileAccountShadow: () => mobileAccountShadow,
	mobileAccountText: () => mobileAccountText,
	mobileConfigServerViewTheme: () => mobileConfigServerViewTheme,
	mobileHeaderBackground: () => mobileHeaderBackground,
	mobileHeaderText: () => mobileHeaderText,
	mobileHeaderTextHover: () => mobileHeaderTextHover,
	mobileHeaderTextSubdued: () => mobileHeaderTextSubdued,
	mobileNavBackground: () => mobileNavBackground,
	mobileNavItem: () => mobileNavItem,
	mobileNavItemSelected: () => mobileNavItemSelected,
	mobilePageBackground: () => mobilePageBackground,
	mobileTransactionSelected: () => mobileTransactionSelected,
	mobileViewTheme: () => mobileViewTheme,
	modalBackground: () => modalBackground,
	modalBorder: () => modalBorder,
	noteTagBackground: () => noteTagBackground,
	noteTagBackgroundHover: () => noteTagBackgroundHover,
	noteTagDefault: () => noteTagDefault,
	noteTagText: () => noteTagText,
	noticeBackground: () => noticeBackground,
	noticeBackgroundDark: () => noticeBackgroundDark,
	noticeBackgroundLight: () => noticeBackgroundLight,
	noticeBorder: () => noticeBorder,
	noticeText: () => noticeText,
	noticeTextDark: () => noticeTextDark,
	noticeTextLight: () => noticeTextLight,
	noticeTextMenu: () => noticeTextMenu,
	noticeTextMenuHover: () => noticeTextMenuHover,
	numberNegative: () => numberNegative,
	numberNeutral: () => numberNeutral,
	numberPositive: () => numberPositive,
	overlayBackground: () => overlayBackground,
	pageBackground: () => pageBackground,
	pageBackgroundBottomRight: () => pageBackgroundBottomRight,
	pageBackgroundLineBottom: () => pageBackgroundLineBottom,
	pageBackgroundLineMid: () => pageBackgroundLineMid,
	pageBackgroundLineTop: () => pageBackgroundLineTop,
	pageBackgroundModalActive: () => pageBackgroundModalActive,
	pageBackgroundTopLeft: () => pageBackgroundTopLeft,
	pageText: () => pageText,
	pageTextDark: () => pageTextDark,
	pageTextLight: () => pageTextLight,
	pageTextLink: () => pageTextLink,
	pageTextLinkLight: () => pageTextLinkLight,
	pageTextPositive: () => pageTextPositive,
	pageTextSubdued: () => pageTextSubdued,
	pillBackground: () => pillBackground,
	pillBackgroundLight: () => pillBackgroundLight,
	pillBackgroundSelected: () => pillBackgroundSelected,
	pillBorder: () => pillBorder,
	pillBorderDark: () => pillBorderDark,
	pillBorderSelected: () => pillBorderSelected,
	pillText: () => pillText,
	pillTextHighlighted: () => pillTextHighlighted,
	pillTextSelected: () => pillTextSelected,
	pillTextSubdued: () => pillTextSubdued,
	reportsBlue: () => reportsBlue,
	reportsChartFill: () => reportsChartFill,
	reportsGray: () => reportsGray,
	reportsGreen: () => reportsGreen,
	reportsInnerLabel: () => reportsInnerLabel,
	reportsLabel: () => reportsLabel,
	reportsNumberNegative: () => reportsNumberNegative,
	reportsNumberNeutral: () => reportsNumberNeutral,
	reportsNumberPositive: () => reportsNumberPositive,
	reportsRed: () => reportsRed,
	sidebarBackground: () => sidebarBackground,
	sidebarBudgetName: () => sidebarBudgetName,
	sidebarItemAccentSelected: () => sidebarItemAccentSelected,
	sidebarItemBackgroundFailed: () => sidebarItemBackgroundFailed,
	sidebarItemBackgroundHover: () => sidebarItemBackgroundHover,
	sidebarItemBackgroundPending: () => sidebarItemBackgroundPending,
	sidebarItemBackgroundPositive: () => sidebarItemBackgroundPositive,
	sidebarItemText: () => sidebarItemText,
	sidebarItemTextSelected: () => sidebarItemTextSelected,
	tableBackground: () => tableBackground,
	tableBorder: () => tableBorder,
	tableBorderHover: () => tableBorderHover,
	tableBorderSelected: () => tableBorderSelected,
	tableBorderSeparator: () => tableBorderSeparator,
	tableHeaderBackground: () => tableHeaderBackground,
	tableHeaderText: () => tableHeaderText,
	tableRowBackgroundHighlight: () => tableRowBackgroundHighlight,
	tableRowBackgroundHighlightText: () => tableRowBackgroundHighlightText,
	tableRowBackgroundHover: () => tableRowBackgroundHover,
	tableRowHeaderBackground: () => tableRowHeaderBackground,
	tableRowHeaderText: () => tableRowHeaderText,
	tableText: () => tableText,
	tableTextHover: () => tableTextHover,
	tableTextInactive: () => tableTextInactive,
	tableTextLight: () => tableTextLight,
	tableTextSelected: () => tableTextSelected,
	tableTextSubdued: () => tableTextSubdued,
	templateNumberFunded: () => templateNumberFunded,
	templateNumberUnderFunded: () => templateNumberUnderFunded,
	toBudgetNegative: () => toBudgetNegative,
	toBudgetPositive: () => toBudgetPositive,
	toBudgetZero: () => toBudgetZero,
	tooltipBackground: () => tooltipBackground,
	tooltipBorder: () => tooltipBorder,
	tooltipText: () => tooltipText,
	upcomingBackground: () => upcomingBackground,
	upcomingBorder: () => upcomingBorder,
	upcomingText: () => upcomingText,
	warningBackground: () => warningBackground,
	warningBorder: () => warningBorder,
	warningText: () => warningText,
	warningTextDark: () => warningTextDark,
	warningTextLight: () => warningTextLight
});
var pageBackground = gray600;
var pageBackgroundModalActive = gray700;
var pageBackgroundTopLeft = gray800;
var pageBackgroundBottomRight = gray700;
var pageBackgroundLineTop = purple300;
var pageBackgroundLineMid = gray900;
var pageBackgroundLineBottom = gray150;
var pageText = gray100;
var pageTextLight = gray200;
var pageTextSubdued = gray400;
var pageTextDark = gray100;
var pageTextPositive = purple200;
var pageTextLink = purple300;
var pageTextLinkLight = purple300;
var cardBackground = gray800;
var cardBorder = purple300;
var cardShadow = gray900;
var tableBackground = gray800;
var tableRowBackgroundHover = gray500;
var tableText = gray150;
var tableTextLight = tableText;
var tableTextSubdued = gray500;
var tableTextSelected = gray800;
var tableTextHover = gray400;
var tableTextInactive = gray400;
var tableHeaderText = gray200;
var tableHeaderBackground = gray900;
var tableBorder = gray600;
var tableBorderSelected = purple400;
var tableBorderHover = purple300;
var tableBorderSeparator = gray400;
var tableRowBackgroundHighlight = purple150;
var tableRowBackgroundHighlightText = gray800;
var tableRowHeaderBackground = gray700;
var tableRowHeaderText = gray150;
var numberPositive = green300;
var numberNegative = red200;
var numberNeutral = gray500;
var budgetNumberNegative = numberNegative;
var budgetNumberZero = tableTextSubdued;
var budgetNumberNeutral = tableText;
var budgetNumberPositive = budgetNumberNeutral;
var templateNumberFunded = numberPositive;
var templateNumberUnderFunded = orange200;
var toBudgetPositive = numberPositive;
var toBudgetZero = numberPositive;
var toBudgetNegative = budgetNumberNegative;
var sidebarBackground = gray900;
var sidebarItemBackgroundPending = orange200;
var sidebarItemBackgroundPositive = green400;
var sidebarItemBackgroundFailed = red300;
var sidebarItemAccentSelected = purple200;
var sidebarItemBackgroundHover = gray700;
var sidebarItemText = gray100;
var sidebarItemTextSelected = purple200;
var sidebarBudgetName = gray300;
var menuBackground = gray700;
var menuItemBackground = gray200;
var menuItemBackgroundHover = gray500;
var menuItemText = gray100;
var menuItemTextHover = gray50;
var menuItemTextSelected = purple400;
var menuItemTextHeader = purple200;
var menuBorder = gray800;
var menuBorderHover = purple300;
var menuKeybindingText = purple200;
var menuAutoCompleteBackground = gray600;
var menuAutoCompleteBackgroundHover = gray500;
var menuAutoCompleteText = gray100;
var menuAutoCompleteTextHover = green400;
var menuAutoCompleteTextHeader = purple200;
var menuAutoCompleteItemTextHover = gray50;
var menuAutoCompleteItemText = menuItemText;
var modalBackground = gray700;
var modalBorder = gray200;
var mobileHeaderBackground = gray900;
var mobileHeaderText = purple200;
var mobileHeaderTextSubdued = gray200;
var mobileHeaderTextHover = "rgba(200, 200, 200, .15)";
var mobilePageBackground = gray900;
var mobileNavBackground = gray600;
var mobileNavItem = gray150;
var mobileNavItemSelected = purple200;
var mobileAccountShadow = cardShadow;
var mobileAccountText = blue800;
var mobileTransactionSelected = purple300;
var mobileViewTheme = mobileHeaderBackground;
var mobileConfigServerViewTheme = purple500;
var markdownNormal = purple700;
var markdownDark = purple500;
var markdownLight = purple800;
var buttonMenuText = gray200;
var buttonMenuTextHover = buttonMenuText;
var buttonMenuBackground = gray700;
var buttonMenuBackgroundHover = "rgba(200, 200, 200, .25)";
var buttonMenuBorder = gray500;
var buttonMenuSelectedText = green800;
var buttonMenuSelectedTextHover = orange800;
var buttonMenuSelectedBackground = orange200;
var buttonMenuSelectedBackgroundHover = gray300;
var buttonMenuSelectedBorder = buttonMenuSelectedBackground;
var buttonPrimaryText = white;
var buttonPrimaryTextHover = buttonPrimaryText;
var buttonPrimaryBackground = purple300;
var buttonPrimaryBackgroundHover = buttonPrimaryBackground;
var buttonPrimaryBorder = buttonPrimaryBackground;
var buttonPrimaryShadow = "rgba(0, 0, 0, 0.6)";
var buttonPrimaryDisabledText = gray400;
var buttonPrimaryDisabledBackground = gray700;
var buttonPrimaryDisabledBorder = buttonPrimaryDisabledBackground;
var buttonNormalText = gray150;
var buttonNormalTextHover = gray150;
var buttonNormalBackground = gray600;
var buttonNormalBackgroundHover = gray400;
var buttonNormalBorder = gray300;
var buttonNormalShadow = "rgba(0, 0, 0, 0.4)";
var buttonNormalSelectedText = white;
var buttonNormalSelectedBackground = purple500;
var buttonNormalDisabledText = gray400;
var buttonNormalDisabledBackground = gray700;
var buttonNormalDisabledBorder = gray500;
var calendarText = gray50;
var calendarBackground = gray700;
var calendarItemText = gray150;
var calendarItemBackground = gray500;
var calendarSelectedBackground = buttonNormalSelectedBackground;
var buttonBareText = buttonNormalText;
var buttonBareTextHover = buttonNormalText;
var buttonBareBackground = "transparent";
var buttonBareBackgroundHover = "rgba(200, 200, 200, .3)";
var buttonBareBackgroundActive = "rgba(200, 200, 200, .5)";
var buttonBareDisabledText = buttonNormalDisabledText;
var buttonBareDisabledBackground = buttonBareBackground;
var noticeBackground = green600;
var noticeBackgroundLight = green900;
var noticeBackgroundDark = green400;
var noticeText = green300;
var noticeTextLight = green400;
var noticeTextDark = green150;
var noticeTextMenu = green400;
var noticeTextMenuHover = green700;
var noticeBorder = green800;
var warningBackground = orange800;
var warningText = orange200;
var warningTextLight = orange500;
var warningTextDark = orange100;
var warningBorder = orange500;
var errorBackground = red800;
var errorText = red200;
var errorTextDark = red150;
var errorTextDarker = errorTextDark;
var errorTextMenu = red200;
var errorBorder = red500;
var upcomingBackground = purple800;
var upcomingText = purple200;
var upcomingBorder = tableBorder;
var formLabelText = purple150;
var formLabelBackground = blue900;
var formInputBackground = gray800;
var formInputBackgroundSelected = gray700;
var formInputBackgroundSelection = purple400;
var formInputBorder = gray600;
var formInputTextReadOnlySelection = gray800;
var formInputBorderSelected = purple300;
var formInputText = gray150;
var formInputTextSelected = black;
var formInputTextPlaceholder = gray150;
var formInputTextPlaceholderSelected = gray100;
var formInputTextSelection = gray800;
var formInputShadowSelected = purple400;
var formInputTextHighlight = purple200;
var checkboxText = tableText;
var checkboxBackgroundSelected = purple300;
var checkboxBorderSelected = purple300;
var checkboxShadowSelected = purple500;
var checkboxToggleBackground = gray400;
var checkboxToggleBackgroundSelected = purple300;
var checkboxToggleDisabled = gray700;
var pillBackground = gray500;
var pillBackgroundLight = gray900;
var pillText = gray200;
var pillTextHighlighted = purple200;
var pillBorder = gray500;
var pillBorderDark = pillBorder;
var pillBackgroundSelected = purple600;
var pillTextSelected = gray150;
var pillBorderSelected = purple300;
var pillTextSubdued = gray500;
var reportsRed = red300;
var reportsBlue = blue400;
var reportsGreen = green400;
var reportsGray = gray400;
var reportsLabel = pageText;
var reportsInnerLabel = navy800;
var reportsNumberPositive = numberPositive;
var reportsNumberNegative = numberNegative;
var reportsNumberNeutral = numberNeutral;
var reportsChartFill = reportsNumberPositive;
var noteTagBackground = purple800;
var noteTagBackgroundHover = purple600;
var noteTagDefault = purple700;
var noteTagText = purple100;
var budgetOtherMonth = gray700;
var budgetCurrentMonth = tableBackground;
var budgetHeaderOtherMonth = gray800;
var budgetHeaderCurrentMonth = tableHeaderBackground;
var floatingActionBarBackground = gray900;
var floatingActionBarBorder = purple300;
var floatingActionBarText = purple200;
var tooltipText = gray100;
var tooltipBackground = gray800;
var tooltipBorder = gray600;
var calendarCellBackground = navy900;
var overlayBackground = "rgba(0, 0, 0, 0.3)";
var chartQual1 = chartQual1$3;
var chartQual2 = chartQual2$3;
var chartQual3 = chartQual3$3;
var chartQual4 = chartQual4$3;
var chartQual5 = chartQual5$3;
var chartQual6 = chartQual6$3;
var chartQual7 = chartQual7$3;
var chartQual8 = chartQual8$3;
var chartQual9 = chartQual9$3;
//#endregion
//#region src/style/theme.tsx
var themes = {
	light: {
		name: "Light",
		colors: light_exports
	},
	dark: {
		name: "Dark",
		colors: dark_exports
	},
	midnight: {
		name: "Midnight",
		colors: midnight_exports
	},
	auto: {
		name: "System default",
		colors: dark_exports
	}
};
var themeOptions = Object.entries(themes).map(([key, { name }]) => [key, name]);
var darkThemeOptions = Object.entries({
	dark: themes.dark,
	midnight: themes.midnight
}).map(([key, { name }]) => [key, name]);
function useTheme() {
	const [theme = "auto", setThemePref] = useGlobalPref("theme");
	return [theme, setThemePref];
}
function usePreferredDarkTheme() {
	const [darkTheme = "dark", setDarkTheme] = useGlobalPref("preferredDarkTheme");
	return [darkTheme, setDarkTheme];
}
/**
* One-time migration: moves any legacy `overrideCss` field out of the
* installed theme JSON blobs and into the new `customCssOverride` global pref.
* Gated on the customThemes feature flag — users who never used the feature
* have nothing to migrate.
*
* TODO: remove this after v26.6.0 is released
*/
function useMigrateLegacyOverride() {
	const customThemesEnabled = useFeatureFlag("customThemes");
	const [customCssOverride, setCustomCssOverride] = useGlobalPref("customCssOverride");
	const [installedCustomLightThemeJson, setInstalledCustomLightThemeJson] = useGlobalPref("installedCustomLightTheme");
	const [installedCustomDarkThemeJson, setInstalledCustomDarkThemeJson] = useGlobalPref("installedCustomDarkTheme");
	(0, import_react.useEffect)(() => {
		if (!customThemesEnabled) return;
		const result = migrateLegacyOverride({
			existingOverride: customCssOverride,
			lightJson: installedCustomLightThemeJson,
			darkJson: installedCustomDarkThemeJson
		});
		if (!result) return;
		setCustomCssOverride(result.override);
		if (result.newLightJson !== installedCustomLightThemeJson) setInstalledCustomLightThemeJson(result.newLightJson);
		if (result.newDarkJson !== installedCustomDarkThemeJson) setInstalledCustomDarkThemeJson(result.newDarkJson);
	}, [
		customThemesEnabled,
		customCssOverride,
		installedCustomLightThemeJson,
		installedCustomDarkThemeJson,
		setCustomCssOverride,
		setInstalledCustomLightThemeJson,
		setInstalledCustomDarkThemeJson
	]);
}
function getBaseThemeColors(baseTheme) {
	return themes[baseTheme]?.colors;
}
function ThemeStyle() {
	const [activeTheme] = useTheme();
	const [darkThemePreference] = usePreferredDarkTheme();
	const customThemesEnabled = useFeatureFlag("customThemes");
	const [installedCustomLightThemeJson] = useGlobalPref("installedCustomLightTheme");
	const [installedCustomDarkThemeJson] = useGlobalPref("installedCustomDarkTheme");
	const [themeColors, setThemeColors] = (0, import_react.useState)(void 0);
	(0, import_react.useEffect)(() => {
		if (activeTheme === "auto") {
			const installedLight = customThemesEnabled ? parseInstalledTheme(installedCustomLightThemeJson) : null;
			const installedDark = customThemesEnabled ? parseInstalledTheme(installedCustomDarkThemeJson) : null;
			const lightColors = installedLight?.baseTheme && getBaseThemeColors(installedLight.baseTheme) || themes["light"].colors;
			const darkColors = installedDark?.baseTheme && getBaseThemeColors(installedDark.baseTheme) || themes[darkThemePreference].colors;
			function darkThemeMediaQueryListener(event) {
				if (event.matches) setThemeColors(darkColors);
				else setThemeColors(lightColors);
			}
			const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			darkThemeMediaQuery.addEventListener("change", darkThemeMediaQueryListener);
			if (darkThemeMediaQuery.matches) setThemeColors(darkColors);
			else setThemeColors(lightColors);
			return () => {
				darkThemeMediaQuery.removeEventListener("change", darkThemeMediaQueryListener);
			};
		} else {
			const installedTheme = customThemesEnabled ? parseInstalledTheme(installedCustomLightThemeJson) : null;
			if (installedTheme?.baseTheme) setThemeColors(getBaseThemeColors(installedTheme.baseTheme) ?? themes[activeTheme]?.colors);
			else setThemeColors(themes[activeTheme]?.colors);
		}
	}, [
		activeTheme,
		darkThemePreference,
		customThemesEnabled,
		installedCustomLightThemeJson,
		installedCustomDarkThemeJson
	]);
	if (!themeColors) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `:root {\n${Object.entries(themeColors).map(([key, value]) => `  --color-${key}: ${value};`).join("\n")}}` });
}
/**
* CustomThemeStyle injects CSS from the installed custom theme (if any).
* This is rendered after ThemeStyle to allow custom themes to override base theme variables.
*
* When `theme === 'auto'`, separate custom themes can be set for light and dark modes,
* injected via @media (prefers-color-scheme) rules. Otherwise, a single custom theme applies.
*/
function CustomThemeStyle() {
	useMigrateLegacyOverride();
	const customThemesEnabled = useFeatureFlag("customThemes");
	const [activeTheme] = useTheme();
	const [installedCustomLightThemeJson] = useGlobalPref("installedCustomLightTheme");
	const [installedCustomDarkThemeJson] = useGlobalPref("installedCustomDarkTheme");
	const [customCssOverride] = useGlobalPref("customCssOverride");
	const validatedCss = (0, import_react.useMemo)(() => {
		if (!customThemesEnabled) return null;
		const safeValidate = (css, errorLabel) => {
			if (!css?.trim()) return "";
			try {
				return validateThemeCss(css);
			} catch (error) {
				console.error(errorLabel, { error });
				return "";
			}
		};
		let baseCss = "";
		if (activeTheme === "auto") {
			const lightCss = safeValidate(parseInstalledTheme(installedCustomLightThemeJson)?.cssContent, "Invalid custom light theme CSS");
			if (lightCss) baseCss += `@media (prefers-color-scheme: light) { ${lightCss} }\n`;
			const darkCss = safeValidate(parseInstalledTheme(installedCustomDarkThemeJson)?.cssContent, "Invalid custom dark theme CSS");
			if (darkCss) baseCss += `@media (prefers-color-scheme: dark) { ${darkCss} }\n`;
		} else baseCss = safeValidate(parseInstalledTheme(installedCustomLightThemeJson)?.cssContent, "Invalid custom theme CSS");
		const overrideLayer = safeValidate(customCssOverride, "Invalid custom CSS override");
		return [baseCss, overrideLayer].filter(Boolean).join("\n") || null;
	}, [
		customThemesEnabled,
		activeTheme,
		installedCustomLightThemeJson,
		installedCustomDarkThemeJson,
		customCssOverride
	]);
	if (!validatedCss) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		id: "custom-theme-active",
		children: validatedCss
	});
}
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
//#endregion
export { signOut as $, getDefaultOptions as $n, Provider_default as $r, actions$7 as $t, reducer as A, looselyParseAmount as An, resolveStaleTime as Ar, useLinkAccountMutation as At, closeModal as B, match$1 as Bn, prepareAutoBatched as Br, reducer$6 as Bt, css as C, getChangedValues as Cn, hashKey as Cr, savePrefs as Ct, getAccountsById as D, integerToCurrency as Dn, matchQuery as Dr, useCreateAccountMutation as Dt, actions as E, integerToAmount as En, matchMutation as Er, useCloseAccountMutation as Et, resetSync as F, titleFirst as Fn, configureStore as Fr, useSyncAndDownloadMutation as Ft, pushModal as G, formatRelative as Gn, init as Gr, useSavePayeeLocationMutation as Gt, name$2 as H, buildMatchFn as Hn, current as Hr, updateNewTransactions as Ht, setAppState as I, toRelaxedNumber as In, createAction as Ir, useUnlinkAccountMutation as It, actions$3 as J, differenceInMonths as Jn, sendCatch as Jr, useStore as Jt, reducer$2 as K, buildFormatLongFn as Kn, listen as Kr, useDispatch as Kt, sync as L, tsToRelativeTime as Ln, createListenerMiddleware as Lr, useUpdateAccountMutation as Lt, getLatestAppVersion as M, parseNumberFormat as Mn, focusManager as Mr, useLinkAccountSimpleFinMutation as Mt, name$1 as N, reapplyThousandSeparators as Nn, Subscribable as Nr, useMoveAccountMutation as Nt, markAccountRead as O, integerToCurrencyWithDecimal as On, noop as Or, useImportPreviewTransactionsMutation as Ot, reducer$1 as P, setNumberFormat as Pn, autoBatchEnhancer as Pr, useReopenAccountMutation as Pt, reducer$3 as Q, getTimezoneOffsetInMilliseconds as Qn, setUndoState as Qr, locationService as Qt, updateApp as R, formatDistance as Rn, createSlice as Rr, actions$6 as Rt, tokens as S, diffItems as Sn, functionalUpdate as Sr, saveGlobalPrefs as St, keyframes as T, groupById as Tn, keepPreviousData as Tr, saveSyncedPrefs as Tt, openAccountCloseModal as U, localize as Un, bindActionCreators as Ur, useCreatePayeeMutation as Ut, collapseModals as V, buildMatchPatternFn as Vn, createSelector as Vr, setLastTransaction as Vt, popModal as W, buildLocalizeFn as Wn, combineReducers as Wr, useDeletePayeeLocationMutation as Wt, loggedIn as X, differenceInCalendarMonths as Xn, getTaggedState as Xr, getPayeesById as Xt, getUserData as Y, endOfMonth as Yn, logger as Yr, getActivePayees as Yt, name$3 as Z, normalizeDates as Zn, getUndoState as Zr, payeeQueries as Zt, useGlobalPref as _, appendDecimals as _n, notifyManager as _r, actions$5 as _t, darkThemeOptions as a, require_shim as ai, setNotificationInset as an, millisecondsInSecond as ar, createBudget as at, styles as b, currencyToAmount as bn, addToStart as br, name$5 as bt, useTheme as c, t$1 as ci, LazyLoadFailedError as cn, queryOptions as cr, duplicateBudget as ct, fetchThemeCss as d, isIOSAgent as di, getSecretsError as dn, QueryClientProvider as dr, loadBackup as dt, shallowEqual as ei, addGenericErrorNotification as en, toDate as er, actions$4 as et, generateThemeId as f, isPlaywright as fi, getTestKeyError as fn, useQueryClient as fr, loadBudget as ft, validateThemeCss as g, amountToInteger as gn, onlineManager as gr, uploadBudget as gt, serializeInstalledTheme as h, process$1 as hi, amountToCurrency as hn, Query as hr, reducer$4 as ht, ThemeStyle as i, useTranslation as ii, removeNotification as in, millisecondsInMinute as ir, closeBudgetUI as it, actions$1 as j, numberFormats as jn, skipToken as jr, useLinkAccountPluggyAiMutation as jt, name as k, last as kn, partialMatchKey as kr, useImportTransactionsMutation as kt, embedThemeFonts as l, __vitePreload as li, getCreateKeyError as ln, useQuery as lr, importBudget as lt, parseInstalledTheme as m, init_build_shims as mi, memoizeOne as mn, QueryObserver as mr, name$4 as mt, _objectWithoutPropertiesLoose as n, availableLanguages as ni, name$7 as nn, millisecondsInDay as nr, closeAndLoadBudget as nt, themeOptions as o, Trans as oi, useAccounts as on, millisecondsInWeek as or, deleteBudget as ot, normalizeGitHubRepo as p, global as pi, getUserAccessErrors as pn, Mutation as pr, makeBackup as pt, replaceModal as q, formatDistance$1 as qn, send as qr, useSelector as qt, CustomThemeStyle as r, setI18NextLanguage as ri, reducer$7 as rn, millisecondsInHour as rr, closeBudget as rt, usePreferredDarkTheme as s, instance as si, accountQueries as sn, useMutation as sr, downloadBudget as st, _extends as t, require_react_dom as ti, addNotification as tn, constructFrom as tr, closeAndDownloadBudget as tt, extractRepoOwner as u, OS as ui, getOpenIdErrors as un, useBaseQuery as ur, loadAllFiles as ut, useFeatureFlag as v, applyChanges as vn, addConsumeAwareSignal as vr, loadGlobalPrefs as vt, cx as w, getNumberFormat as wn, hashQueryKeyByOptions as wr, saveServerPrefs as wt, breakpoints as x, currencyToInteger as xn, ensureQueryFn as xr, reducer$5 as xt, useSyncedPref as y, applyFindReplace as yn, addToEnd as yr, loadPrefs as yt, actions$2 as z, enUS as zn, isRejected as zr, name$6 as zt };

//# sourceMappingURL=extends.opUJhDAp.chunk.js.map