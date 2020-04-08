
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"344",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",0],
      "vtp_queryKey":"subscribed",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amt",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.top!==window.self}catch(a){return!1}})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.year"
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.oreilly\\.com.*schedule\\\/(grid|full|presentations|stype|stopic|proceedings).*","value","Schedule"],["map","key",".*\\.oreilly\\.com.*schedule\\\/speaker.*","value","Speakers"],["map","key",".*\\.oreilly\\.com.*public\\\/register.*","value","Registration"],["map","key",".*\\.oreilly\\.com.*user\\\/account.*","value","User Info"],["map","key",".*\\.oreilly\\.com.*\\\/hotel.*","value","Venue, travel, and hotel"],["map","key",".*\\.oreilly\\.com.*schedule\\\/detail\\\/.*","value","Sessions, Tutorials, Keynotes"],["map","key",".*\\.oreilly\\.com.*users\\\/sign_in.*","value","Sign In or Create a New Account"],["map","key",".*\\.oreilly\\.com.*\\\/sponsors.*","value","Sponsors"],["map","key",".*\\.oreilly\\.com.*\\\/about.*","value","About"],["map","key",".*\\.oreilly\\.com.*\\\/resources.*","value","Resources"],["map","key",".*\\.oreilly\\.com.*\\\/(cfp|proposal|reviewing).*","value","CFP"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a=a.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){var c=\/www.oreilly.com\\\/member\\\/(register|login|reset-password|profile)?\\\/?(\\?(.*))?$\/i,d=\/linkedin\\.com\\\/(oauth\\\/v(.*)\\\/login-success|uas\\\/login|uas\\\/oauth2\\\/authorization)\\\/?(\\?(.*))?$\/i,e=\/facebook\\.com\\\/(login\\.php|v(.*)\\\/dialog\\\/oauth(.*))\/i,f=\/api\\.twitter\\.com\\\/oauth\\\/(authorize|authenticate)\\\/?(\\?(.*))?$\/i,g=\/accounts\\.google\\.(.*)\\\/(signin\\\/oauth\\\/consent|accounts\\\/SetSID|signin\\\/oauth\\\/oauthchooseaccount)(\\?(.*))?$\/i,a=document.referrer;(c.test(a)||d.test(a)||\ne.test(a)||f.test(a)||g.test(a))\u0026\u0026b.set(\"referrer\",null)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdentifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.franchise"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conference.location"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"businessLine"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^.*conferences.oreilly.com\\\/(strata($|\\\/|\\?).*)|^.*conferences.oreilly.com\\\/(strata\\-data\\-ai($|\\\/|\\?).*)","value","UA-112091926-2"],["map","key","^.*conferences.oreilly.com\\\/(software-?architecture($|\\\/|\\?).*)","value","UA-112091926-3"],["map","key","^.*conferences.oreilly.com\\\/(artificial-intelligence($|\\\/|\\?).*)","value","UA-112091926-4"],["map","key","^.*ai.oreilly.com.cn\\\/ai-cn(\\\/?|(.*))$","value","UA-112091926-4"],["map","key","^.*conferences.oreilly.com\\\/(velocity($|\\\/|\\?).*)","value","UA-112091926-5"],["map","key","^.*conferences.oreilly.com\\\/(fluent($|\\\/|\\?).*)","value","UA-112091926-6"],["map","key","^.*conferences.oreilly.com\\\/(oscon($|\\\/|\\?).*)","value","UA-112091926-7"],["map","key","^.*conferences.oreilly.com\\\/(jupyter($|\\\/|\\?).*)","value","UA-112091926-8"],["map","key","(.*)oreilly.com\\\/blended-courses.*","value","UA-112091926-11"],["map","key","^.*conferences.oreilly.com\\\/(tensorflow($|\\\/|\\?).*)","value","UA-112091926-12"],["map","key","^.*conferences.oreilly.com\\\/(infrastructure-ops($|\\\/|\\?).*)","value","UA-112091926-13"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",8]],["map","index","1","group",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",10],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",11]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","3","dimension",["macro",8]],["map","index","4","dimension",["macro",15]],["map","index","5","dimension",["macro",16]],["map","index","6","dimension",["macro",12]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",24],8,16],".replace(\"\/conferences.oreilly.com\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"VPTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.parentTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.formatType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.location.href.indexOf(\"www.safaribooksonline.com\"))return\"oreilly.com\";if(-1\u003Cdocument.location.href.indexOf(\"oreilly.com\"))return\"www.safaribooksonline.com\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formSuccessURL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",30],8,16],";if(void 0!=a\u0026\u0026\"\"!=a\u0026\u0026null!=a)return a;if(2==",["escape",["macro",2],8,16],".split(\"\/\").length\u0026\u0026!",["escape",["macro",2],8,16],".endsWith(\".html\")){if(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"?\")\u0026\u00260\u003E",["escape",["macro",0],8,16],".indexOf(\"\/?\"))return ",["escape",["macro",2],8,16],"+\"\/?\"+",["escape",["macro",0],8,16],".split(\"?\")[1];if(!(-1\u003C",["escape",["macro",0],8,16],".indexOf(\"\/?\")))return ",["escape",["macro",2],8,16],"+\"\/\"}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",32],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.safaribooksonline.com|learning.oreilly.com","value","Learning Platform"],["map","key","www.oreilly.com|get.oreilly.com|members.oreilly.com","value","Content \u0026 Marketing"]]
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"membersLoggedIn"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.title"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.identifier"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.author"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.publisher"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.releaseDate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product.topic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.free"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subdirectory"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.subTopic"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningPaidAccount"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"learningAccountType"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"organization"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.add"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"myTopics.remove"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.name"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slider.cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sectionName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cardTitle"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"filterName"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orgID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"topicSearchValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSuggestGroup"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.experiment"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ld.variation"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)(get.oreilly.com|www.oreilly.com|members.oreilly.com|shop.oreilly.com|ssearch.oreilly.com|learning.oreilly.com|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com)(.*)","value","UA-112091926-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","3","group",["macro",27]],["map","index","4","group",["macro",28]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",29],
      "vtp_cookieDomain":["macro",10],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",31]],["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",33]],["map","index","2","dimension",["macro",34]],["map","index","4","dimension",["macro",35]],["map","index","9","dimension",["macro",36]],["map","index","10","dimension",["macro",37]],["map","index","11","dimension",["macro",38]],["map","index","12","dimension",["macro",39]],["map","index","13","dimension",["macro",28]],["map","index","14","dimension",["macro",40]],["map","index","15","dimension",["macro",41]],["map","index","16","dimension",["macro",42]],["map","index","17","dimension",["macro",43]],["map","index","18","dimension",["macro",27]],["map","index","19","dimension",["macro",44]],["map","index","20","dimension",["macro",45]],["map","index","21","dimension",["macro",46]],["map","index","27","dimension",["macro",47]],["map","index","22","dimension",["macro",16]],["map","index","6","dimension",["macro",48]],["map","index","7","dimension",["macro",49]],["map","index","8","dimension",["macro",50]],["map","index","25","dimension",["macro",51]],["map","index","26","dimension",["macro",52]],["map","index","23","dimension",["macro",53]],["map","index","24","dimension",["macro",54]],["map","index","28","dimension",["macro",55]],["map","index","30","dimension",["macro",56]],["map","index","29","dimension",["macro",57]],["map","index","31","dimension",["macro",58]],["map","index","32","dimension",["macro",59]],["map","index","33","dimension",["macro",12]],["map","index","34","dimension",["macro",60]],["map","index","36","dimension",["macro",61]],["map","index","37","dimension",["macro",62]],["map","index","38","dimension",["macro",63]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";if(\"profile icon\"==",["escape",["macro",21],8,16],"\u0026\u0026\"hover\"==",["escape",["macro",22],8,16],"||\"global\"==",["escape",["macro",21],8,16],"\u0026\u0026\"navigation\"==",["escape",["macro",22],8,16],"\u0026\u0026\"your oreilly|hover\"==",["escape",["macro",23],8,16],")a=1;return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",70],8,16],";switch(a){case \"start\":return\"play\";case \"progress\":return\"\"+",["escape",["macro",71],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-170"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"oid",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"type",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ccy",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key",".*www.oreilly.com.*","value","true"],["map","key",".*learning.oreilly.com.*learning-paths.*","value","true"],["map","key",".*learning.oreilly.com.*case-studies.*","value","true"],["map","key",".*learning.oreilly.com.*live-training.*","value","true"],["map","key",".*conferences.oreilly.com.*","value","true"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"logged_in"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"term",
      "vtp_customUrlSource":["macro",0],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39299553-8",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*artificial-intelligence.*|.*conferences.oreilly.com.*artificial-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*GANS.*|.*conferences.oreilly.com.*GANS.*","value","true"],["map","key",".*www.oreilly.com.*NLP.*|.*conferences.oreilly.com.*NLP.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*NSTM.*|.*conferences.oreilly.com.*NSTM.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/software-architecture\/sa-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__smm",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",70],
      "vtp_map":["list",["map","key","start","value","play"],["map","key","progress","value",["macro",71]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/strata\/strata-ca\/public\/schedule\/topic\/2867","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionID"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/purchased*","value","true"],["map","key","conferences.oreilly.com\/strata\/strata-ca\/public\/register\/invoice*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*data-science.*|.*conferences.oreilly.com.*data-science.*","value","true"],["map","key",".*www.oreilly.com.*big-data.*|.*conferences.oreilly.com.*big-data.*","value","true"],["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*data-engineering.*|.*conferences.oreilly.com.*data-engineering.*","value","true"],["map","key",".*www.oreilly.com.*data-architecture.*|.*conferences.oreilly.com.*data-architecture.*","value","true"],["map","key",".*www.oreilly.com.*business-intelligence.*|.*conferences.oreilly.com.*business-intelligence.*","value","true"],["map","key",".*www.oreilly.com.*databases.*|.*conferences.oreilly.com.*databases.*","value","true"],["map","key",".*www.oreilly.com.*analytics.*|.*conferences.oreilly.com.*analytics.*","value","true"],["map","key",".*www.oreilly.com.*data-show-podcasts.*|.*conferences.oreilly.com.*data-show-podcasts.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*machine-learning.*|.*conferences.oreilly.com.*machine-learning.*","value","true"],["map","key",".*www.oreilly.com.*deep-learning.*|.*conferences.oreilly.com.*deep-learning.*","value","true"],["map","key",".*www.oreilly.com.*reinforcement-learning.*|.*conferences.oreilly.com.*reinforcement-learning.*","value","true"],["map","key",".*www.oreilly.com.*neural-networks.*|.*conferences.oreilly.com.*neural-networks.*","value","true"],["map","key",".*www.oreilly.com.*natural-language-processing.*|.*conferences.oreilly.com.*natural-language-processing.*","value","true"],["map","key",".*www.oreilly.com.*bots.*|.*conferences.oreilly.com.*bots.*","value","true"],["map","key",".*www.oreilly.com.*agents.*|.*conferences.oreilly.com.*agents.*","value","true"],["map","key",".*www.oreilly.com.*tensorflow.*|.*conferences.oreilly.com.*tensorflow.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*www.oreilly.com.*open-source.*|.*conferences.oreilly.com.*open-source.*","value","true"],["map","key",".*www.oreilly.com.*cloud-native.*|.*conferences.oreilly.com.*cloud-native.*","value","true"],["map","key",".*www.oreilly.com.*software-development.*|.*conferences.oreilly.com.*software-development.*","value","true"],["map","key",".*www.oreilly.com.*blockchain.*|.*conferences.oreilly.com.*blockchain.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/sponsors","value","True"],["map","key","https:\/\/conferences.oreilly.com\/oscon\/oscon-or\/public\/content\/resources","value","True"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){max=100;min=1;return Math.floor(Math.random()*(max-min+1))+min})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/strata\/strata-ny\/public\/content\/resources","value","True"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*artificial-intelligence.*","value","true"],["map","key",".*tensorflow.*","value","true"],["map","key",".*neural-networks.*","value","true"],["map","key",".*data-mining.*","value","true"],["map","key",".*unsupervised-learning.*","value","true"],["map","key",".*deep-learning.*","value","true"],["map","key",".*machine-learning.*","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",0],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"False",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/sponsors","value","True"],["map","key","conferences.oreilly.com\/software-architecture\/sa-eu\/public\/content\/resources","value","True"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OrderID"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"107-FMS-070\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/get.oreilly.com\/rs\/107-FMS-070\/images\/digitalpi-utm-tracker-oreilly.com.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1047975969",
      "vtp_conversionLabel":"WjAECOPA2nMQobDb8wM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":31
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"1047975969",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":true,
      "tag_id":32
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"70561",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"tfRcCMnwwHQQk4a4jwM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":35
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"837681939",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":true,
      "tag_id":36
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"zLNTCNHo-XYQk4a4jwM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":39
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":40
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"Safari",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"Submit",
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",19],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",18],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",25]],["map","fieldName","title","value",["macro",26]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"837681939",
      "vtp_conversionLabel":"pYI4CLSnrXwQk4a4jwM",
      "vtp_url":["macro",3],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-39299553-7",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":63
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",25]],["map","fieldName","title","value",["macro",26]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",64,0]],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",66],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":67
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":68
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":78
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_eventCategory":"form",
      "vtp_tagId":"5794699",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"CUSTOM",
      "vtp_eventAction":"submit",
      "vtp_eventLabel":"free trial",
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["template",["macro",69],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":93
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"AW-773515308",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",3],
      "vtp_enableRdpCheckbox":true,
      "tag_id":130
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":"0",
      "vtp_eventCategory":"video plays",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",72],
      "vtp_eventLabel":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",19],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":294
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"VWO",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Custom",
      "vtp_dimension":["list",["map","index","35","dimension",["macro",73]]],
      "vtp_trackingId":"UA-112091926-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":726
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":["macro",66],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",20],
      "vtp_eventCategory":["macro",21],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",65],
      "vtp_eventAction":["macro",22],
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":759
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4KPR77","nickname","Account App"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",0],"\/account\/",false,false]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","ua"]],
      "tag_id":1214
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"3000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"1669222_110",
      "tag_id":1215
    },{
      "function":"__cl",
      "tag_id":1216
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75,95",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1669222_203",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1217
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25, 50, 75, 95",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1669222_204",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1218
    },{
      "function":"__hl",
      "tag_id":1219
    },{
      "function":"__hl",
      "tag_id":1220
    },{
      "function":"__hl",
      "tag_id":1221
    },{
      "function":"__cl",
      "tag_id":1222
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"input[name='promotionCode']",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1064",
      "tag_id":1223
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.orm-ff-NavigationWidget-navigationWidgetContainer",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"1669222_1106",
      "tag_id":1224
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Ciframe height=\"1\" width=\"1\" frameborder=\"0\" scrolling=\"no\" src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId=2775\u0026amp;ITEM1=Safari-Subscription\u0026amp;AMT1=",["escape",["macro",5],12],"\u0026amp;QTY1=1\u0026amp;CID=1525054\u0026amp;OID=",["escape",["macro",74],12],"\u0026amp;TYPE=",["escape",["macro",75],12],"\u0026amp;CURRENCY=",["escape",["macro",76],12],"\" name=\"cj_conversion\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"SafariSubscription\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_track,docHost=document.location.hostname;if(\"conferences.oreilly.com\"==docHost.toLowerCase()||\"ai.oreilly.com.cn\"==docHost.toLowerCase()){domains_to_track=[\"conference.oreilly.com\"];var folders_to_track=",["escape",["macro",2],8,16],".split(\"\/\")[1]}else if(\"oreilly.com\"==docHost.toLowerCase()||\"www.oreilly.com\"==docHost.toLowerCase())domains_to_track=[\"www.oreilly.com\"],folders_to_track=\"\";\nvar extDoc=\".doc .docx .xls .xlsx .xlsm .ppt .pptx .exe .zip .pdf .js .txt .csv\".split(\" \"),socSites=\"\",isSubDomainTracker=!0,isSeparateDomainTracker=!0,isGTM=!0,eValues={downloads:{category:\"Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbound_downloads:{category:\"Outbound Assets\",action:\"Download\",label:\"\",value:0,nonInteraction:0},outbounds_oreilly:{category:\"Outbound Links\",action:\"Oreilly\",label:\"\",value:0,nonInteraction:0},outbounds:{category:\"Outbound Links\",action:\"Non-Oreilly\",\nlabel:\"\",value:0,nonInteraction:0},email:{category:\"Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},outbound_email:{category:\"Outbound Email Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},telephone:{category:\"Telephone Clicks\",action:\"Click\",label:\"\",value:0,nonInteraction:0},social:{category:\"Social Profiles\",action:\"Click\",label:\"\",value:0,nonInteraction:0}},mainDomain=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];\nmainDomain=mainDomain.toLowerCase();1==isSubDomainTracker\u0026\u0026(mainDomain=document.location.hostname.replace(\"www.\",\"\").toLowerCase());var arr=document.getElementsByTagName(\"a\");\nfor(i=0;i\u003Carr.length;i++){var flag=0;if(!isExcluded(arr[i])){var mDownAtt=arr[i].getAttribute(\"onmousedown\"),doname=\"\",linkType=\"\",mailPattern=\/^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i,urlPattern=\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=\u0026%@!\\-\\\/]))?\/i,telPattern=\/^tel:(.*)([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$\/i,internalDomain=\/(.*)(oreilly.com|safaribooksonline.com)(.*)\/i;if(mailPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||telPattern.test(arr[i].href)){try{!urlPattern.test(arr[i].href)||\nmailPattern.test(arr[i].href)||telPattern.test(arr[i].href)?!mailPattern.test(arr[i].href)||telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)?!telPattern.test(arr[i].href)||urlPattern.test(arr[i].href)||mailPattern.test(arr[i].href)||(doname=arr[i].href.toLowerCase(),linkType=\"tel\"):(doname=arr[i].href.toLowerCase().split(\"@\")[1],linkType=\"mail\"):(doname=arr[i].hostname.toLowerCase().replace(\"www.\",\"\"),linkType=\"url\")}catch(b){continue}if(null!=mDownAtt\u0026\u0026(mDownAtt=String(mDownAtt),-1\u003CmDownAtt.indexOf(\"dataLayer.push\")||\n-1\u003CmDownAtt.indexOf(\"('send'\")))continue;var condition=!1;if(condition=isSeparateDomainTracker?doname==mainDomain:-1!=doname.indexOf(mainDomain))\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?_isDownload(arr[i].href)\u0026\u0026\n(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt)));else for(var k=0;k\u003Cdomains_to_track.length;k++){var condition1=!1;condition1=isSeparateDomainTracker?doname==domains_to_track[k]:-1!=doname.indexOf(domains_to_track[k]);condition1?\"mail\"===linkType?(eValues.email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/i),_tagLinks(arr[i],eValues.email.category,eValues.email.action,eValues.email.label,eValues.email.value,eValues.email.nonInteraction,mDownAtt)):\"url\"===linkType\u0026\u0026(\"\"==folders_to_track||_isInternalFolder(arr[i].href)?\n_isDownload(arr[i].href)\u0026\u0026(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.downloads.category,eValues.downloads.action,eValues.downloads.label,eValues.downloads.value,eValues.downloads.nonInteraction,mDownAtt)):_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?\n(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,\nmDownAtt))):(flag++,flag==domains_to_track.length\u0026\u0026(\"mail\"===linkType\u0026\u0026(eValues.outbound_email.label=arr[i].href.toLowerCase().match(\/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}\/),_tagLinks(arr[i],eValues.outbound_email.category,eValues.outbound_email.action,eValues.outbound_email.label,eValues.outbound_email.value,eValues.outbound_email.nonInteraction,mDownAtt)),\"tel\"===linkType\u0026\u0026(eValues.telephone.label=arr[i].href.toLowerCase().split(\"tel:\")[1],_tagLinks(arr[i],eValues.telephone.category,eValues.telephone.action,\neValues.telephone.label,eValues.telephone.value,eValues.telephone.nonInteraction,mDownAtt)),\"url\"===linkType\u0026\u0026(_isDownload(arr[i].href)?(_setDownloadData(arr[i].href,doname),_tagLinks(arr[i],eValues.outbound_downloads.category,eValues.outbound_downloads.action,eValues.outbound_downloads.label,eValues.outbound_downloads.value,eValues.outbound_downloads.nonInteraction,mDownAtt)):_isSocial(arr[i].href)?(eValues.social.label=arr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],eValues.social.action=\neValues.social.label.split(\".\")[0],_tagLinks(arr[i],eValues.social.category,eValues.social.action,eValues.social.label,eValues.social.value,eValues.social.nonInteraction,mDownAtt)):internalDomain.test(arr[i].href)?(eValues.outbounds_oreilly.label=arr[i].href.replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds_oreilly.category,eValues.outbounds_oreilly.action,eValues.outbounds_oreilly.label,eValues.outbounds_oreilly.value,eValues.outbounds_oreilly.nonInteraction,mDownAtt)):(eValues.outbounds.label=\narr[i].href.toLowerCase().replace(\"www.\",\"\").split(\"\/\/\")[1],_tagLinks(arr[i],eValues.outbounds.category,eValues.outbounds.action,eValues.outbounds.label,eValues.outbounds.value,eValues.outbounds.nonInteraction,mDownAtt)))))}}}}function _isSocial(b){return\"\"!=socSites?null!=b.toLowerCase().replace(\/[+#]\/,\"\").match(new RegExp(\"^(.*)(\"+socSites.toLowerCase()+\")(.*)$\"))?!0:!1:!1}\nfunction _isInternalFolder(b){return\"\"!=folders_to_track?null!=b.toLowerCase().match(new RegExp(\"^(.*)(\"+folders_to_track+\")(.*)$\"))?!0:!1:!1}function _isDownload(b){for(var c=0,a=0;a\u003CextDoc.length;a++){var d=b.split(\".\");d=d[d.length-1].split(\/[#?\u0026?]\/);if(\".\"+d[0].toLowerCase()==extDoc[a])return!0;c++;if(c==extDoc.length)return!1}}\nfunction _setDownloadData(b,c){var a=b.toLowerCase().split(\".\");a=a[a.length-1].split(\/[#?\u0026?]\/);var d=b.toLowerCase().split(c);d=d[1].split(\/[#?\u0026?]\/);eValues.downloads.action=eValues.outbound_downloads.action=a;eValues.downloads.label=eValues.outbound_downloads.label=d}\nfunction _tagLinks(b,c,a,d,g,e,f){isGTM?b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"dataLayer.push({'event': 'eventTracker', 'eventCat': '\"+c+\"', 'eventAct':'\"+a+\"', 'eventLbl': '\"+d+\"', 'eventVal': \"+g+\", 'nonInteraction': \"+e+\"});\"):(e=0==e?!1:!0,b.setAttribute(\"onmousedown\",(null!=f?f+\"; \":\"\")+\"ga('send', 'event', '\"+c+\"', '\"+a+\"', '\"+d+\"', \"+g+\", { nonInteraction: \"+e+\"});\"))}\nfunction isExcluded(b){var c=document.getElementsByTagName(\"footer\")[0];1\u003Cdocument.getElementsByTagName(\"footer\").length\u0026\u0026(c=document.getElementsByTagName(\"footer\")[document.getElementsByTagName(\"footer\").length-1]);for(var a=b.parentNode;null!=a;){if(a==c)return!0;a=a.parentNode}c=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;a=\/((.*)oreilly.com\\\/(learning|radar|idea)(.*))\/i;return c.test(b.href)\u0026\u0026a.test(document.location.href)\u0026\u0026jQuery\u0026\u0026(jQuery(b).parents(\".article-body\").length||\njQuery(b).parents(\".block-product\").length||jQuery(this).closest(\"[data-type \\x3d 'note']\").length)?!0:!1};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar checkin=new Date,checkout=new Date;checkin.setDate((new Date).getDate()+10);checkout.setDate((new Date).getDate()+24);\nvar trialends=(1==(checkin.getMonth()+1).toString().length?\"0\"+(checkin.getMonth()+1):checkin.getMonth()+1)+\"\/\"+(1==checkin.getDate().toString().length?\"0\"+checkin.getDate():checkin.getDate())+\"\/\"+checkin.getFullYear(),trialends2=(1==(checkout.getMonth()+1).toString().length?\"0\"+(checkout.getMonth()+1):checkout.getMonth()+1)+\"\/\"+(1==checkout.getDate().toString().length?\"0\"+checkout.getDate():checkout.getDate())+\"\/\"+checkout.getFullYear();window.criteo_q=window.criteo_q||[];\nvar deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";\nwindow.criteo_q.push({event:\"manualFlush\"},{event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"},function(){setTimeout(function(){criteo_q.push({event:\"viewSearch\",din:trialends,dout:trialends2},{event:\"viewHome\"},{event:\"setData\",trialends:trialends},{event:\"flushEvents\"})},1E3)});\u003C\/script\u003E ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"##user_email##\"},{event:\"trackTransaction\",id:(new Date).getTime(),item:[{id:\"1\",price:\"##subscription_cost##\",quantity:1}]});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E \u003Cscript type=\"text\/gtmscript\"\u003Ewindow.criteo_q=window.criteo_q||[];var deviceType=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";window.criteo_q.push({event:\"setAccount\",account:47920},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",item:\"1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003E(function(){window.medalliaUserIdentifier=document.documentElement.dataset.userUuid;window.medalliaUserName=document.documentElement.dataset.username})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wu\/314849\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domains_to_include_regex=\/(.*)(conferences.oreilly.com|www.safaribooksonline.com|learning.oreilly.com|shop.oreilly.com)(.*)\/i;jQuery(\".block-product\").on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"right sidebar\",eventLbl:this.href,eventVal:0})});\njQuery('[data-type\\x3d\"note\"]').on(\"mousedown\",\"a\",function(){domains_to_include_regex.test(this.href)\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"editor note\",eventLbl:this.href,eventVal:0})});\njQuery(\".article-body\").on(\"mousedown\",\"a\",function(){!domains_to_include_regex.test(this.href)||jQuery(this).closest(\"[data-type \\x3d 'note']\").length||jQuery(this).parents(\".block-product\").length||dataLayer.push({event:\"eventTracker\",eventCat:\"content promo\",eventAct:\"body\",eventLbl:this.href,eventVal:0})});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=function(e){var a,c,b,h,k,l,m,d,n=\"podcast\",f=0;var p=",["escape",["macro",39],8,16],";var g=SC.Widget(e);g.bind(SC.Widget.Events.READY,function(){g.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-f\u0026\u0026(a=\"Play\",q(n,a,p),f=Date.now())});g.bind(SC.Widget.Events.PLAY_PROGRESS,function(e){d=!1;c=Math.round(100*e.relativePosition);10!==c||b||(a=\"10%\",d=b=!0);25!==c||h||(a=\"25%\",d=h=!0);50!==c||k||(a=\"50%\",d=k=!0);75!==c||l||(a=\"75%\",d=l=!0);95!==c||m||(a=\"75%\",d=m=!0);d\u0026\u0026q(n,a,p)});g.bind(SC.Widget.Events.FINISH,\nfunction(){a=\"100%\";b=h=k=l=m=!1;q(n,a,p)})})},q=function(b,a,c){window.dataLayer.push({event:\"eventTracker\",eventCat:b,eventAct:a,eventLbl:c,eventVal:0,nonInteraction:0})},f,r=document.querySelectorAll('iframe[src*\\x3d\"api.soundcloud.com\"]');var b=0;for(f=r.length;b\u003Cf;b+=1)t(r[b])}catch(e){console.log(\"Error with SoundCloud API: \"+e.message)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"376595806465162\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=376595806465162\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){if(null!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')\u0026\u0026void 0!==document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]')){var a=!1;window.addEventListener(\"blur\",function(){a\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"facebook\",eventVal:0,nonInteraction:0})});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseover\",function(){window.focus();\na=!0});document.querySelector('iframe[title\\x3d\"fb:share_button Facebook Social Plugin\"]').addEventListener(\"mouseout\",function(){a=!1})}if(null!==document.querySelector(\"iframe.twitter-share-button\")\u0026\u0026void 0!==document.querySelector(\"iframe.twitter-share-button\")){var b=!1;window.addEventListener(\"blur\",function(){b\u0026\u0026dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0})});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseover\",\nfunction(){window.focus();b=!0});document.querySelector(\"iframe.twitter-share-button\").addEventListener(\"mouseout\",function(){b=!1})}try{window.twttr=function(a,b,d){var c,e=a.getElementsByTagName(b)[0];if(!a.getElementById(d))return a=a.createElement(b),a.id=d,a.src=\"\/\/platform.twitter.com\/widgets.js\",e.parentNode.insertBefore(a,e),window.twttr||(c={_e:[],ready:function(a){c._e.push(a)}})}(document,\"script\",\"twitter-wjs\"),twttr.ready(function(a){a.events.bind(\"tweet\",trackTwitter)})}catch(c){}})();\nnull!==document.querySelector(\".IN-widget\")\u0026\u0026void 0!==document.querySelector(\".IN-widget\")\u0026\u0026document.querySelector(\".IN-widget\").addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"linkedin\",eventVal:0,nonInteraction:0})});\nfunction trackTwitter(a){a\u0026\u0026(a.target\u0026\u0026\"IFRAME\"==a.target.nodeName\u0026\u0026(opt_target=extractParamFromUri(a.target.src,\"url\")),dataLayer.push({event:\"eventTracker\",eventCat:\"social\",eventAct:\"share\",eventLbl:\"twitter\",eventVal:0,nonInteraction:0}))}function extractParamFromUri(a,b){if(a\u0026\u0026(b=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\"),a=b.exec(a),null!=a))return unescape(a[1])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"443792972845831\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=443792972845831\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"custom.historyChange\",custom:{historyChangeSource:",["escape",["macro",67],8,16],"}})},a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"domReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eadroll_adv_id=\"BOHFZPCX5ZAM5LXWJURNUB\";adroll_pix_id=\"3QFV44ZHVZG53BOB75QP3D\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._pp=window._pp||[];if(\"",["escape",["macro",2],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",78],7],"\"==\"https:\/\/learning.oreilly.com\/register\/\")_pp.targetUrl=\"\/confirm\/trial\";else if(\"",["escape",["macro",2],7],"\"==\"\/confirmation\/nv\/\"\u0026\u0026\"",["escape",["macro",78],7],"\"==\"https:\/\/learning.oreilly.com\/subscribe\/\")_pp.targetUrl=\"\/confirm\/paid\";else if(\"",["escape",["macro",2],7],"\"==\"\/confirmation\/nnv\/\"\u0026\u0026\"",["escape",["macro",78],7],"\"==\"https:\/\/learning.oreilly.com\/signup\/\")_pp.targetUrl=\"\/confirm\/paid\";_pp.siteId=\"2508\";\n_pp.siteUId=\"",["escape",["macro",12],7],"\";_pp.orderValue=\"",["escape",["macro",79],7],"\";_pp.orderId=\"",["escape",["macro",80],7],"\";(function(){var ppjs=document.createElement(\"script\");ppjs.type=\"text\/javascript\";ppjs.async=true;ppjs.src=(\"https:\"==document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.pbbl.co\/r\/\"+_pp.siteId+\".js\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(ppjs,s)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":269
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1732687426968531\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1732687426968531\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":287
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction forceInputUppercase(a){var b=a.target.selectionStart,c=a.target.selectionEnd;a.target.value=a.target.value.toUpperCase();a.target.setSelectionRange(b,c)}void 0!=document.getElementById(\"id_promotion\")\u0026\u0026null!=document.getElementById(\"id_promotion\")\u0026\u0026document.getElementById(\"id_promotion\").addEventListener(\"keyup\",forceInputUppercase,!1);\nvoid 0!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026null!=document.getElementsByName(\"promotionCode\")[0]\u0026\u0026document.getElementsByName(\"promotionCode\")[0].addEventListener(\"keyup\",forceInputUppercase,!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar nonwExpandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-headerListItem a, .orm-ff-NavigationView-headerListItem a\");nonwExpandable.forEach(function(a,b){b+1!=nonwExpandable.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):b+1==nonwExpandable.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar nonwExpandableFo=document.querySelectorAll(\".drop-content li:not(.flyout-parent) a\");\nnonwExpandableFo.forEach(function(a,b){\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1!=nonwExpandableFo.length?a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.childNodes[1].textContent})}):\"drop-content\"==a.parentNode.parentNode.parentNode.className\u0026\u0026b+1==nonwExpandableFo.length\u0026\u0026a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"user login\",eventAct:\"logout\",eventLbl:\"global nav | unified\"})})});\nvar expandable=document.querySelectorAll(\".orm-ff-NavigationSubnav-toggleControls a, .orm-ff-NavigationView-toggleControls a\");expandable.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.parentNode.parentNode.parentNode.querySelectorAll(\".orm-Button-btnContentWrap span\")[0].childNodes[1].textContent+\" | \"+a.textContent})})});var flyoutLinks=document.querySelectorAll(\".flyout a\");\nflyoutLinks.forEach(function(a){a.addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"global nav\",eventAct:\"navigation\",eventLbl:a.closest(\"li.flyout-parent\").getElementsByTagName(\"a\")[0].textContent+\" | \"+a.textContent})})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":724
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof kWidget\u0026\u0026kWidget.addReadyCallback(function(c){var b=document.getElementById(c);b.kBind(\"playerPlayEnd.pe\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"End\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0});b.kUnbind(\".pe\")});var d=!1,e=!1,f=!1,g=!1,h=!1;b.addJsListener(\"playerUpdatePlayhead\",function(){var a=b.evaluate(\"{video.player.currentTime}\"),c=b.evaluate(\"{mediaProxy.entry.duration}\");a=100*parseFloat(a\/c);0\u003Ca\u0026\u0026!d\u0026\u0026(d=!0,dataLayer.push({event:\"eventTracker\",\neventCat:\"video plays\",eventAct:\"play\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));25\u003Ca\u0026\u0026!e\u0026\u0026(e=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"25%\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));50\u003Ca\u0026\u0026!f\u0026\u0026(f=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"50%\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));75\u003Ca\u0026\u0026!g\u0026\u0026(g=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"75%\",eventLbl:",["escape",["macro",39],8,16],",\neventVal:0,nonInteraction:0}));95\u003Ca\u0026\u0026!h\u0026\u0026(h=!0,dataLayer.push({event:\"eventTracker\",eventCat:\"video plays\",eventAct:\"95%\",eventLbl:",["escape",["macro",39],8,16],",eventVal:0,nonInteraction:0}));b.kUnbind(\".pp\")})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":744
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=4E3;window.setTimeout(function(){window.dataLayer.push({event:\"windowReadyTimer\"})},a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":746
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({\"ld.experiment\":void 0,\"ld.variation\":void 0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1213
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/enterprise\\\/how\\-learning\\-accelerates\\-change\\-download\\\/|\\\/enterprise\\\/one\\-size\\-fits\\-all\\-training\\-doesnt\\-work\\-download\\\/|\\\/enterprise\\\/six\\-ways\\-leaders\\-can\\-navigate\\-change\\-download\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"ent.*_confirm\\.html"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0.0"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com\/velocity"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"Start your free trial"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"eventTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*oreilly.com\\\/blended-courses.*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VPTracker"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/account\\\/insights"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com(\\\/?$|\\\/about\\\/approach.html|\\\/sign-in\\.html|(.*\\\/)*free\\\/(.*)*|\\\/ideas(\\\/.*)*|\\\/radar(\\\/.*)*|\\\/content(\\\/.*)*|\\\/learning(\\\/.*)*|\\\/topics(\\\/.*)*|\\\/people(\\\/.*)*|\\\/feed\\\/four\\-short\\-links\\\/?|\\\/all)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)get.oreilly.com(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www.oreilly.com\\\/online-learning(\\\/?$|\\\/enterprise\\.html|\\\/teams\\.html|\\\/individuals\\.html|\\\/government\\.html|\\\/academic\\.html|\\\/pricing\\.html|\\\/try-now\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"conferences.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",23],
      "arg1":"your oreilly|hover"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"(.*)oreilly.com|www.safaribooksonline.com|learning.oreilly.review|oreilly.review|nc\\-proxy.binderhub\\-prod.gcp.oreilly.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)www\\.oreilly\\.com\\\/blended-courses.*|learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",67],
      "arg1":"pushState"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(resource-centers|case-studies|learning-paths|videos|certifications).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"learning\\.oreilly\\.(review|com)\\\/(case-studies|learning-paths|videos|resource-centers|certifications).*|www\\.oreilly\\.(review|com)\\\/(resource-centers).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"domReadyTimer"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"custom.historyChange"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"article|podcast",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"jupyter notebook"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_204($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"oreilly.com\/skills\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_203($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"learning platform sign up",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"updatedEcommerce"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"VWO"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"((.*)(oreilly.com\/(feed\/four\\-short\\-links|all)(\/?))$)|((.*)oreilly.com\/(ideas|learning|topics|people)(\\\/(.*)|$|\\?(.*)))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"conferences.oreilly.com"
    },{
      "function":"_cn",
      "arg0":["macro",77],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)conferences.oreilly.com(.*)|(.*)ai.oreilly.com.cn(.*)|(.*)www.oreilly.com(.*)"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|radar|ideas)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.review(.*)|www.oreilly.review\\\/register\\\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"safaribooksonline.com\/subscribe\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/signup\/"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)oreilly.com\\\/(learning|ideas|radar|content)(\\\/(.*)|\\?(.*))",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"podcast"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*www.oreilly.com.*data-science.*"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"get.oreilly.com\/ind_introduction-to-machine-learning-interpretability.html"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"(.*)learning.oreilly.com(.*)|www.oreilly.com\\\/register\\\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_1064($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",68],
      "arg1":"(^$|((^|,)1669222_1106($|,)))"
    }],
  "rules":[
    [["if",0,1],["add",2,13]],
    [["if",1,2],["add",2,13]],
    [["if",1],["add",3,8,22,29,44,53,54,31,32,34,35,36,37,38,39]],
    [["if",1,3],["add",4]],
    [["if",1,4],["add",4]],
    [["if",1,5,6],["add",5,40,42,46]],
    [["if",1],["unless",7],["add",6,18]],
    [["if",8,9],["add",7,9,19,45,59]],
    [["if",1,10,11],["add",10]],
    [["if",1,12],["add",10]],
    [["if",10,13],["add",11]],
    [["if",13,14],["add",11]],
    [["if",10,15],["add",12]],
    [["if",1,16],["add",14]],
    [["if",15,17],["add",15]],
    [["if",15,18],["add",15]],
    [["if",15,19],["add",15]],
    [["if",13,20],["unless",21,22],["add",16]],
    [["if",1,24],["unless",21,25],["add",17]],
    [["if",26,28],["unless",27],["add",17]],
    [["if",29,30],["add",17]],
    [["if",29,31],["add",17,62]],
    [["if",32,33],["add",20]],
    [["if",34,36,37],["unless",35],["add",21]],
    [["if",1,38],["add",23,51]],
    [["if",32,39,40],["add",24]],
    [["if",13,41],["add",25]],
    [["if",42],["add",26]],
    [["if",44],["unless",43],["add",27]],
    [["if",13,23],["add",28],["block",16]],
    [["if",1,45],["add",30]],
    [["if",46],["add",33,52,60,61]],
    [["if",1],["unless",47],["add",41]],
    [["if",1,48],["add",0,1]],
    [["if",33,49],["unless",50],["add",43]],
    [["if",33,51],["add",44,48,58]],
    [["if",1,52],["add",47]],
    [["if",1,53],["add",47]],
    [["if",46,54],["add",49]],
    [["if",33,55],["add",50]],
    [["if",1,56],["add",51]],
    [["if",26,28,29],["add",55]],
    [["if",29,33],["add",56]],
    [["if",1,57],["add",57]],
    [["if",1,58],["add",58]],
    [["if",59,60],["add",60]],
    [["if",59,61],["add",61]],
    [["if",32,46],["add",62,63]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={yf:!0},ia={};try{ia.__proto__=ha;fa=ia.yf;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea,ka=this||self,la=/^[\w+/_-]+[=]{0,2}$/,na=null;var oa=function(){},pa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},qa=function(a){return"number"==typeof a&&!isNaN(a)},ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},q=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!qa(a)||
!qa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},C=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},za=function(a){return Math.round(Number(a))||0},Aa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ba=function(a){var b=[];if(ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ca=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ea=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Fa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ga=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ha=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ia=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ja=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ka=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},La=function(a){var b=
[];C(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},D=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=D(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=D(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Za=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,Za)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,Za)+"'"}};var hb=/['()]/g,ib=function(a){return"%"+a.charCodeAt(0).toString(16)};Qa[12]=function(a){var b=
encodeURIComponent(String(a));hb.lastIndex=0;return hb.test(b)?b.replace(hb,ib):b};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],tb=[],ub={},vb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ub[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ub[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=pb[f];if(!h||b.Pc(h))return;c[f]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Xf(d,k))}catch(y){b.ye&&b.ye(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Bb(a[n],b,c);xb&&(m=m||r===xb.yb);d.push(r)}return xb&&m?xb.$f(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ra(a[1])&&"macro"===a[1][0]&&xb.zg(a))return xb.Tg(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={me:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Eb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return vb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{ud:a("convert_case_to"),vd:a("convert_false_to"),wd:a("convert_null_to"),xd:a("convert_true_to"),yd:a("convert_undefined_to"),Bh:a("debug_mode_metadata"),sa:a("function"),Xe:a("instance_name"),af:a("live_only"),cf:a("malware_disabled"),df:a("metadata"),Ch:a("original_vendor_template_id"),jf:a("once_per_event"),Hd:a("once_per_load"),Pd:a("setup_tags"),Rd:a("tag_id"),Sd:a("teardown_tags")}}();var Gb=null,Kb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var f=qb[e],h=Jb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Gb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var cc,dc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Lf&&(l["fix_"+m]=!0),l.ne=l.ne||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,N:p.N,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,B){var A=y||x||B||f.test(w)&&w||null,z=document.createElement("div");z.innerHTML=A;t[w]=z.textContent||z.innerText||A});return{tagName:p[1],N:t,rb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=r[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.ne&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.we=function(){return this[this.length-1]};v.Rc=function(z){var E=this.we();return E&&E.tagName&&E.tagName.toUpperCase()===z.toUpperCase()};v.Wf=
function(z){for(var E=0,H;H=this[E];E++)if(H.tagName===z)return!0;return!1};var w=function(z){z&&"startTag"===z.type&&(z.rb=p.test(z.tagName)||z.rb);return z},y=u,x=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(z){var E=z.tagName;"TR"===E.toUpperCase()&&v.Rc("TABLE")?(k="<TBODY>"+k,A()):l.Lh&&t.test(E)&&v.Wf(E)?v.Rc(E)?x():(k="</"+z.tagName+">"+k,A()):z.rb||v.push(z)},endTag:function(z){v.we()?l.ig&&!v.Rc(z.tagName)?x():v.pop():l.ig&&(y(),A())}},A=function(){var z=k,E=w(y());k=z;if(E&&
B[E.type])B[E.type](E)};u=function(){A();return w(y())}}();return{append:function(p){k+=p},ah:u,Sh:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Th:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Xh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Wh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.O=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.N){var u=m.N[r];n+=
" "+r+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.rb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.F=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;cc=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,u,p){var t,v=r&&r.length||0;for(t=0;t<v;t++)u.call(p,r[t],t)}function d(r,u,p){for(var t in r)r.hasOwnProperty(t)&&u.call(p,t,r[t])}function e(r,
u){d(u,function(p,t){r[p]=t});return r}function f(r,u){r=r||{};d(u,function(p,t){b(r[p])||(r[p]=t)});return r}function h(r){try{return m.call(r)}catch(p){var u=[];c(r,function(t){u.push(t)});return u}}var k={Cf:a,Df:a,Ef:a,Ff:a,Mf:a,Nf:function(r){return r},done:a,error:function(r){throw r;},eh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,sb:v.defaultView||v.parentWindow,Ja:v,Yb:cc("",{Lf:!0}),Dc:[p],ad:"",bd:v.createElement(p.nodeName),ob:[],za:[]});r(this.bd,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.za,arguments);for(var p;!this.Lb&&this.za.length;)p=this.za.shift(),"function"===typeof p?this.Sf(p):this.nd(p)};u.prototype.Sf=function(p){var t={type:"function",value:p.name||p.toString()};this.Xc(t);p.call(this.sb,this.Ja);this.Ce(t)};
u.prototype.nd=function(p){this.Yb.append(p);for(var t,v=[],w,y;(t=this.Yb.ah())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.wh(v);w&&this.qg(t);y&&this.rg(t)};u.prototype.wh=function(p){var t=this.Pf(p);t.ce&&(t.Nc=this.ad+t.ce,this.ad+=t.Xg,this.bd.innerHTML=t.Nc,this.th())};u.prototype.Pf=function(p){var t=this.Dc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.N){if(!/^noscript$/i.test(x.tagName)){var B=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==x.N.id&&"ps-style"!==x.N.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+B+(x.rb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Yh:p,raw:v.join(""),ce:w.join(""),Xg:y.join("")}};u.prototype.th=function(){for(var p,t=[this.bd];b(p=t.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.Dc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.Dc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.qg=function(p){var t=this.Yb.clear();t&&this.za.unshift(t);p.src=p.N.src||p.N.Dh;p.src&&this.ob.length?this.Lb=p:this.Xc(p);var v=this;this.vh(p,function(){v.Ce(p)})};u.prototype.rg=function(p){var t=this.Yb.clear();t&&this.za.unshift(t);p.type=p.N.type||p.N.Eh||"text/css";this.xh(p);t&&this.write()};u.prototype.xh=function(p){var t=this.Rf(p);this.wg(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Ja.createTextNode(p.content)))};u.prototype.Rf=function(p){var t=this.Ja.createElement(p.tagName);t.setAttribute("type",p.type);d(p.N,function(v,w){t.setAttribute(v,w)});return t};u.prototype.wg=function(p){this.nd('<span id="ps-style"/>');var t=this.Ja.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Xc=function(p){p.Og=this.za;this.za=[];this.ob.unshift(p)};u.prototype.Ce=function(p){p!==this.ob[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.ob.shift(),this.write.apply(this,p.Og),!this.ob.length&&this.Lb&&(this.Xc(this.Lb),this.Lb=null))};u.prototype.vh=function(p,t){var v=this.Qf(p),w=this.kh(v),y=this.options.Cf;p.src&&(v.src=p.src,this.ih(v,w?y:function(){t();y()}));try{this.vg(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Qf=function(p){var t=this.Ja.createElement(p.tagName);d(p.N,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.vg=function(p){this.nd('<span id="ps-script"/>');
var t=this.Ja.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.ih=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.kh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.eh&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function r(){var w=t.shift(),y;w&&(y=w[w.length-1],y.Df(),w.stream=u.apply(null,w),y.Ef())}function u(w,y,x){function B(H){H=x.Nf(H);v.write(H);x.Ff(H)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var A=w.ownerDocument,z={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return B(h(arguments).join(""))},writeln:function(){return B(h(arguments).join("")+"\n")}});var E=v.sb.onerror||a;v.sb.onerror=function(H,K,R){x.error({Ph:H+
" - "+K+":"+R});E.apply(v.sb,arguments)};v.write(y,function(){e(A,z);v.sb.onerror=E;x.done();v=null;r()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Nh?w[0]:w;var B=[w,y,x];w.Sg={cancel:function(){B.stream?B.stream.abort():B[1]=a}};x.Mf(B);t.push(B);v||r();return w.Sg},{streams:{},Rh:t,Hh:n})}();dc=l.postscribe}})();var F=window,G=document,ec=navigator,fc=G.currentScript&&G.currentScript.src,gc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},hc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},ic=function(a,b,c){var d=G.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;hc(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=ka.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=G.getElementsByTagName("script")[0]||G.body||G.head;l.parentNode.insertBefore(d,l);return d},jc=function(){if(fc){var a=fc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},kc=function(a,b){var c=G.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=G.body&&G.body.lastChild||
G.body||G.head;d.parentNode.insertBefore(c,d);hc(c,b);void 0!==a&&(c.src=a);return c},lc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},mc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},nc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){F.setTimeout(a,0)},oc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},pc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},qc=function(a){var b=G.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},rc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},sc=function(a){ec.sendBeacon&&ec.sendBeacon(a)||lc(a)},tc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?G.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!G.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(G.querySelectorAll)try{var zc=G.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==G.documentElement&&(yc=!0)}catch(a){}var vc=yc;var J={ra:"_ee",Fh:"_uci",uc:"event_callback",xb:"event_timeout",C:"gtag.config",X:"allow_ad_personalization_signals",vc:"restricted_data_processing",Sa:"allow_google_signals",Y:"cookie_expires",wb:"cookie_update",Ta:"session_duration",ca:"user_properties"};J.qe=[J.X,J.Sa,J.wb];J.te=[J.Y,J.xb,J.Ta];var Qc=/[A-Z]+/,Rc=/\s/,Sc=function(a){if(g(a)&&(a=Ca(a),!Rc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Qc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Uc=function(a){for(var b={},c=0;c<a.length;++c){var d=Sc(a[c]);d&&(b[d.id]=d)}Tc(b);var e=[];C(b,function(f,h){e.push(h)});return e};
function Tc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Vc={},Wc=null,Xc=Math.random();Vc.s="GTM-5P4V6Z";Vc.Cb="3p1";var Yc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var $c=Zc,ad=null,bd=null,cd=null,ed="//www.googletagmanager.com/a?id="+Vc.s+"&cv=344",fd={},gd={},hd=function(){var a=Wc.sequence||0;Wc.sequence=a+1;return a};var id={},jd=function(a,b){id[a]=id[a]||[];id[a][b]=!0},kd=function(a){for(var b=[],c=id[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+sb.filter(function(a){return a}).length},od=function(){md||(md=F.setTimeout(nd,500))},nd=function(){md&&(F.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.Bg()||0>=vd--?(jd("GTM",1),td[pd]=!0):(ud.bh(),lc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[ed,"&v=3&t=t",
"&pid="+wa(),"&rv="+Vc.Cb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{Bg:function(){if(c<a)return!1;Ea()-d>=b&&(c=0);return c>=a},bh:function(){Ea()-d>=b&&(c=0);c++;d=Ea()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&
!td[a]&&b){a!==pd&&(nd(),pd=a);var d,e=String(b[Fb.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(ub[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=
sd?sd+"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new xa,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){D(Ka(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new xa;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&jd("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),D(Ka(a,b),Jd),Ld())},Ld=function(a){C(Kd,function(b,c){Id.set(b,c);D(Ka(b,void 0),Jd);D(Ka(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Na(d)||"object"===Na(d)?Hd[a][b]=D(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Xd()||d||"http:"!=F.location.protocol?a:b)+c},Xd=function(){var a=jc(),b;if(1===a)a:{var c=$c;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=G.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&jd("GTM",9);var c=b&&Ja(Ba(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&jd("GTM",3);
d?jd("GTM",8):d=[];pe()&&(d=Ba(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=q(Ba(d),"google")&&jd("GTM",2);var e=d&&Ja(Ba(d),ne),f={};return function(h){var k=h&&h[Fb.sa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=gd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>q(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>q(c,l[r])){jd("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=q(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&jd("GTM",10);u=t}}var v=!m||u;v||!(0<=q(l,"sandboxedScripts"))||c&&-1!==q(c,"sandboxedScripts")||(v=ya(e,oe));return f[k]=v}},pe=function(){return le.test(F.location&&F.location.hostname)};var re={Xf:function(a,b){b[Fb.ud]&&"string"===typeof a&&(a=1==b[Fb.ud]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.wd)&&null===a&&(a=b[Fb.wd]);b.hasOwnProperty(Fb.yd)&&void 0===a&&(a=b[Fb.yd]);b.hasOwnProperty(Fb.xd)&&!0===a&&(a=b[Fb.xd]);b.hasOwnProperty(Fb.vd)&&!1===a&&(a=b[Fb.vd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=Wc.zones;!b&&a&&(b=Wc.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=G.createEventObject,c="complete"==G.readyState,d="interactive"==G.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)I(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{G.documentElement.doScroll("left"),ye()}catch(a){F.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Yc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=D(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Vc.s,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};pa(b)&&Ge(a,b);c&&F.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ga(function(){return I(function(){b(Vc.s,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ga(function(){b++;d&&b>=c&&Fe(a)})},Jf:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!qa(d)||0>d?0:d}if(!Wc._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=qa(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;Wc._li={cst:a(c-b),cbt:a(bd-b)}}};var Ne={},Oe=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||jd("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}Je();return F[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return F.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||jd("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=q(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=G.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||jd("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=sb[a],f=gf(a,b,c,d);if(!f)return null;var h=Bb(e[Fb.Pd],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{B:f,w:1===k.me?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Fb.cf])k();else{var w=Cb(f,c,[]),y=De(c.id,String(f[Fb.sa]),Number(f[Fb.Rd]),w[Fb.df]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ea()-A;Fd(c.id,sb[a],"5");Ee(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ea()-A;Fd(c.id,sb[a],"6");Ee(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var B=function(){var z=Ea()-A;Fd(c.id,f,"7");Ee(c.id,y,"exception",z);x||(x=!0,k())};var A=Ea();try{Ab(w,c)}catch(z){B(z)}}}var f=sb[a],h=b.B,k=b.w,l=b.terminate;if(c.Pc(f))return null;var m=Bb(f[Fb.Sd],c,[]);if(m&&m.length){var n=m[0],r=ff(n.index,{B:h,w:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.me?l:r}if(f[Fb.Hd]||f[Fb.jf]){var u=f[Fb.Hd]?tb:c.lh,p=h,t=k;if(!u[a]){e=Ga(e);var v=hf(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{B:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.mb[d]){var e=sb[d];var f=b.add();try{var h=ff(d,{B:f,w:f,terminate:f},a,d);h?c.push({Le:d,Ge:Db(e),hg:h}):(mf(d,a),f())}catch(l){f()}}b.Jf();c.sort(nf);for(var k=0;k<c.length;k++)c[k].hg();return 0<c.length};function nf(a,b){var c,d=b.Ge,e=a.Ge;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Le,k=b.Le;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Pc(sb[d])?"3":"4",f=Bb(sb[d][Fb.Pd],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,sb[d],e);var h=Bb(sb[d][Fb.Sd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Pc:qe(c),mb:[],lh:[],ye:function(){jd("GTM",6)}};h.mb=Kb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Vc.s);if(!k)return k;for(var l=0;l<h.mb.length;l++)if(h.mb[l]){var m=sb[l];if(m&&!Yc[String(m[Fb.sa])])return!0}return!1};var rf={},sf={},tf=function(a){return void 0==sf[a]?void 0:sf[a]};var uf=[];function vf(){var a=gc("google_tag_data",{}),b=void 0!=tf("ogt_cc")&&void 0!=tf("ogt_ccr");a.ics||(a.ics={entries:{},set:wf,update:xf,addListener:yf,notifyListeners:zf,active:!1,valid:b});return a.ics}function wf(a,b,c){var d=vf();d.active=!0;if(void 0!=b){var e=d.entries,f=e[a]||{},h=c&&g(c)?c.toUpperCase():void 0,k=f.region;h!==tf("ogt_ccr")&&(h===tf("ogt_cc")?k===tf("ogt_ccr"):h||k)||(e[a]={region:h,initial:"granted"===b,update:f.update})}}
function xf(a,b){var c=vf();c.active=!0;if(void 0!=b){var d=Af(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(Af(a)!==d)for(var f=0;f<uf.length;++f){var h=uf[f];ra(h.fe)&&-1!==h.fe.indexOf(a)&&(h.Fe=!0)}}}function yf(a,b){uf.push({fe:a,jg:b})}function zf(){for(var a=0;a<uf.length;++a){var b=uf[a];if(b.Fe){b.Fe=!1;try{b.jg.call()}catch(c){}}}}var Af=function(a){if(0==vf().valid)return!1;var b=vf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0};var Bf=[J.Mg,J.Rg];var Df=/^https?:\/\/www\.googletagmanager\.com/;function Ef(){var a;return a}function Gf(a,b){}
function Ff(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function Hf(){var a=!1;return a};var If=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},Jf=function(a){var b=new If;b.eventModel=a;return b},Kf=function(a,b){a.targetConfig=b;return a},Lf=function(a,b){a.containerConfig=b;return a},Mf=function(a,b){a.h=b;return a},Nf=function(a,b){a.globalConfig=b;return a},Of=function(a,b){a.B=b;return a},Pf=function(a,b){a.w=b;return a};
If.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Qf=function(a){function b(e){C(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];C(c,function(e){d.push(e)});return d};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Uf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Mb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.nb},c);return e[0]?e[0].id:void 0}};
function Vf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c){function d(p,t,v){if(null==v)return delete h[t],p;h[t]=v;return p+"; "+t+"="+v}function e(p,t){if(null==t)return delete h[t],p;h[t]=!0;return p+"; "+t}var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Wf(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Oh);f=d(f,"samesite",c.Uh);c.Vh&&(f=e(f,"secure"));
f=e(f,c.flags);var l=c.domain;if("auto"===l){for(var m=Xf(),n=0;n<m.length;++n){var r="none"!==m[n]?m[n]:void 0,u=d(f,"domain",r);if(!Yf(r,c.path)&&Vf(u,a,b))return!0}return!1}l&&"none"!==l&&(f=d(f,"domain",l));return Yf(l,c.path)?!1:Vf(f,a,b)},$f=function(a,b,c,d,e,f,h){var k={domain:d,path:c,expires:e,flags:h,encode:f};null==k.path&&(k.path="/");k.domain||(k.domain="auto");return Zf(a,b,k)};
function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Mb:1*k[0]||1,nb:1*k[1]||1}))}}return c}
var Wf=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ag=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,bg=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return bg.test(document.location.hostname)||"/"===b&&ag.test(a)},Xf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;bg.test(e)||ag.test(e)||a.push("none");
return a};function cg(){for(var a=eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var eg,gg;function hg(a){eg=eg||fg();gg=gg||cg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(eg[l],eg[m],eg[n],eg[r])}return b.join("")}
function ig(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eg=eg||fg();gg=gg||cg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;var ng=function(){var a=kg,b=lg,c=mg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){mc(G,"mousedown",d);mc(G,"keyup",d);mc(G,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},og=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};mg().decorators.push(f)},pg=function(a,b,c){for(var d=mg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==G.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Ha(e,h.callback())}}return e},mg=function(){var a=gc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qg=/(.*?)\*(.*?)\*(.*)/,rg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,sg=/^(?:www\.|m\.|amp\.)+/,tg=/([^?#]+)(\?[^#]*)?(#.*)?/;function ug(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var wg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hg(String(d))))}var e=b.join("*");return["1",vg(e),e].join("*")},vg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}jg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},yg=function(){return function(a){var b=af(F.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=xg(d)||{};var e=$e(b,"fragment").match(ug("_gl"));a.fragment=xg(e&&e[3]||"")||{}}},zg=function(){var a=yg(),b=mg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ha(c,d.query),Ha(c,d.fragment));return c},xg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=qg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===vg(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=ig(u[p+1]);return r}}}}catch(t){}};
function Ag(a,b,c,d){function e(n){var r=n,u=ug(a).exec(r),p=r;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=tg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Bg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=pg(b,1,c),e=pg(b,2,c),f=pg(b,3,c);if(Ia(d)){var h=wg(d);c?Cg("_gl",h,a):Dg("_gl",h,a,!1)}if(!c&&Ia(e)){var k=wg(e);Dg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Dg(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Cg(m,n,r);break a}}"string"==typeof r&&Ag(m,n,r,void 0)}}
function Dg(a,b,c,d){if(c.href){var e=Ag(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function Cg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=G.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Ag(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var kg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Bg(e,e.hostname)}}catch(h){}},lg=function(a){try{if(a.action){var b=$e(af(a.action),"host");Bg(a,b)}}catch(c){}},Eg=function(a,b,c,d){ng();og(a,b,"fragment"===c?2:1,!!d,!1)},Fg=function(a){ng();og(a,[F.location.hostname],3,!0,!0)},Gg=function(){var a=G.location.hostname,b=rg.exec(G.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(sg,""),l=e.replace(sg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Hg=function(a,b){return!1===a?!1:a||b||Gg()};var Ig=/^\w+$/,Jg=/^[\w-]+$/,Kg=/^~?[\w-]+$/,Lg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Mg(a){return a&&"string"==typeof a&&a.match(Ig)?a:"_gcl"}
var Og=function(){var a=af(F.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return Ng(b,c,d)},Ng=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Jg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
rf.gtm_3pds?0:rf.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Qg=function(a){var b=Og();Pg(b,a)};
function Pg(a,b,c){function d(r,u){var p=Rg(r,e);p&&$f(p,u,h,f,l,!0)}b=b||{};var e=Mg(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ma?7776E3:b.Ma;c=c||Ea();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(r){return["GCL",m,r].join(".")};a.aw&&(!0===b.Zh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Tg=function(a,b,c,d,e){for(var f=zg(),h=Mg(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Lg[l]){var m=Rg(l,h),n=f[m];if(n){var r=Math.min(Sg(n),Ea()),u;b:{for(var p=r,t=Rf(m,G.cookie),v=0;v<t.length;++v)if(Sg(t[v])>p){u=!0;break b}u=!1}u||$f(m,n,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Pg(Ng(f.gclid,f.gclsrc),w)},Rg=function(a,b){var c=Lg[a];if(void 0!==c)return b+c},Sg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ug(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Vg=function(a,b,c,d,e){if(ra(b)){var f=Mg(e);Eg(function(){for(var h={},k=0;k<a.length;++k){var l=Rg(a[k],f);if(l){var m=Rf(l,G.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Wg=function(a){return a.filter(function(b){return Kg.test(b)})},Xg=function(a,b){for(var c=Mg(b&&b.prefix),d={},e=0;e<a.length;e++)Lg[a[e]]&&(d[a[e]]=Lg[a[e]]);C(d,function(f,h){var k=Rf(c+h,G.cookie);if(k.length){var l=k[0],m=Sg(l),n={};n[f]=[Ug(l)];Pg(n,b,m)}})},Yg=function(){var a=["","aw.ds"],b=Og(),
c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&Fg(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Zg(){var a=Og(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Wc.reported_gclid||(Wc.reported_gclid={});d=Wc.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));sc("https://www.google.com"+e)}}};var $g;if(3===Vc.Cb.length)$g="g";else{var ah="G";$g=ah}
var bh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:$g,OPT:"o"},ch=function(a){var b=Vc.s.split("-"),c=b[0].toUpperCase(),d=bh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Vc.Cb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Vc.Cb+e};var mh=function(){for(var a=ec.userAgent+(G.cookie||"")+(G.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ea()/1E3)].join(".")},ph=function(a,b,c,d){var e=nh(b);return Uf(a,e,oh(c),d)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var rh=["1"],sh={},wh=function(a,b,c,d){var e=th(a);sh[e]||uh(e,b,c)||(vh(e,mh(),b,c,d),uh(e,b,c))};function vh(a,b,c,d,e){var f=qh(b,"1",d,c);$f(a,f,c,d,0==e?void 0:new Date(Ea()+1E3*(void 0==e?7776E3:e)))}function uh(a,b,c){var d=ph(a,b,c,rh);d&&(sh[a]=d);return d}function th(a){return(a||"_gcl")+"_au"};var xh=function(){for(var a=[],b=G.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({hd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].hd]||(f[a[h].hd]=[]),f[a[h].hd].push({timestamp:k[1],lg:k[2]}))}return f};var yh=/^\d+\.fls\.doubleclick\.net$/;function zh(a){var b=af(F.location.href),c=$e(b,"host",!1);if(c&&c.match(yh)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ah(a,b){if("aw"==a||"dc"==a){var c=zh("gcl"+a);if(c)return c.split(".")}var d=Mg(b);if("_gcl"==d){var e;e=Og()[a]||[];if(0<e.length)return e}var f=Rg(a,d),h;if(f){var k=[];if(G.cookie){var l=Rf(f,G.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Ug(l[m]);n&&-1===q(k,n)&&k.push(n)}h=Wg(k)}else h=k}else h=k}else h=[];return h}
var Bh=function(){var a=zh("gac");if(a)return decodeURIComponent(a);var b=xh(),c=[];C(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].lg);f=Wg(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},Ch=function(a,b,c,d,e){wh(b,c,d,e);var f=sh[th(b)],h=Og().dc||[],k=!1;if(f&&0<h.length){var l=Wc.joined_au=Wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var r="https://adservice.google.com/ddm/regclk";r=r+"?gclid="+h[n]+"&auiddc="+f;sc(r);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var u=
th(b),p=sh[u];p&&vh(u,p,c,d,e)}};var ui={},vi=["G","GP"];ui.Me="";var wi=ui.Me.split(",");function xi(){var a=Wc;return a.gcq=a.gcq||new yi}
var zi=function(a,b,c){xi().register(a,b,c)},Ai=function(a,b,c,d){xi().push("event",[b,a],c,d)},Bi=function(a,b){xi().push("config",[a],b)},Ci={},Di=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Ei=function(a,b,c,d,e){this.type=a;this.m=b;this.U=c||"";this.h=d;this.i=e},yi=function(){this.i={};this.m={};this.h=[]},Fi=function(a,b){var c=Sc(b);return a.i[c.containerId]=a.i[c.containerId]||new Di},Gi=function(a,b,c,d){if(d.U){var e=Fi(a,d.U),
f=e.m;if(f){var h=D(c),k=D(e.targetConfig[d.U]),l=D(e.containerConfig),m=D(e.i),n=D(a.m),r=Md("gtm.uniqueEventId"),u=Sc(d.U).prefix,p=Pf(Of(Nf(Mf(Lf(Kf(Jf(h),k),l),m),n),function(){Gd(r,u,"2");}),function(){Gd(r,u,"3");});try{Gd(r,u,"1");f(d.U,b,d.m,p)}catch(t){
Gd(r,u,"4");}}}};
yi.prototype.register=function(a,b,c){if(3!==Fi(this,a).status){Fi(this,a).m=b;Fi(this,a).status=3;c&&(Fi(this,a).i=c);var d=Sc(a),e=Ci[d.containerId];if(void 0!==e){var f=Wc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Wc[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Ea()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+n:"&cl="+n}delete Ci[d.containerId]}this.flush()}};
yi.prototype.push=function(a,b,c,d){var e=Math.floor(Ea()/1E3);a:if(c){var f=Sc(c),h;if(h=f){var k;if(k=1===Fi(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(Fi(this,c).status=2,this.push("require",[],f.containerId),Ci[f.containerId]=Ea(),Wd()){}else{var n=encodeURIComponent(f.containerId),r=("http:"!=F.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
ic(r+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new Ei(a,e,c,b,d));d||this.flush()};
yi.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Fi(this,c.U).status&&!a)return;break;case "set":C(c.h[0],function(l,m){D(Ka(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[J.Ub];delete d[J.Ub];var f=Fi(this,c.U),h=Sc(c.U),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.U]={});f.h&&e||Gi(this,J.C,d,c);f.h=!0;delete d[J.ra];k?D(d,f.containerConfig):D(d,f.targetConfig[c.U]);break;
case "event":Gi(this,c.h[1],c.h[0],c)}this.h.shift()}};var Hi=["GP","G"],Ii="G".split(/,/);Ii.push("HA");var Ji=!1;Ji=!0;var Ki=null,Li={},Mi={},Ni;function Oi(a,b){var c={event:a};b&&(c.eventModel=D(b),b[J.uc]&&(c.eventCallback=b[J.uc]),b[J.xb]&&(c.eventTimeout=b[J.xb]));return c}
var Ui={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Oi(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Pa(a[1])?b=D(a[1]):3==a.length&&
g(a[1])&&(b={},Pa(a[2])||ra(a[2])?b[a[1]]=D(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var Vi={policy:!0};var Wi=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Yi=function(a){var b=Xi(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Zi=!1,$i=[];function aj(){if(!Zi){Zi=!0;for(var a=0;a<$i.length;a++)I($i[a])}}var bj=function(a){Zi?I(a):$i.push(a)};var rj=function(a){if(qj(a))return a;this.h=a};rj.prototype.pg=function(){return this.h};var qj=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};rj.prototype.getUntrustedUpdateValue=rj.prototype.pg;var sj=[],tj=!1,uj=function(a){return F["dataLayer"].push(a)},vj=function(a){var b=Wc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function wj(a){var b=a._clear;C(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});ad||(ad=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=hd(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));cd=c;var e=xj(a);
cd=null;switch(c){case "gtm.init":jd("GTM",19),e&&jd("GTM",20)}return e}function xj(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Wc.zones;d=e?e.checkState(Vc.s,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function yj(){for(var a=!1;!tj&&0<sj.length;){tj=!0;delete Jd.eventModel;Ld();var b=sj.shift();if(null!=b){var c=qj(b);if(c){var d=b;b=qj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(ra(k)||Pa(k))k=D(k);Kd[h]=k}}try{if(pa(b))try{b.call(Nd)}catch(v){}else if(ra(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=Md(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=Ui[b[0]];if(t&&(!c||!Vi[b[0]])){b=t(b);break a}}b=void 0}if(!b){tj=!1;continue}}a=wj(b)||a}}finally{c&&Ld(!0)}}tj=!1}
return!a}function zj(){var a=yj();try{Wi(F["dataLayer"],Vc.s)}catch(b){}return a}
var Bj=function(){var a=gc("dataLayer",[]),b=gc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});bj(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new rj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);sj.push.apply(sj,d);if(300<
this.length)for(jd("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return yj()&&h};sj.push.apply(sj,a.slice(0));Aj()&&I(zj)},Aj=function(){var a=!0;return a};var Cj={};Cj.yb=new String("undefined");
var Dj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Cj.yb?b:a[d]);return c.join("")}};Dj.prototype.toString=function(){return this.h("undefined")};Dj.prototype.valueOf=Dj.prototype.toString;Cj.uf=Dj;Cj.Bc={};Cj.$f=function(a){return new Dj(a)};var Ej={};Cj.dh=function(a,b){var c=hd();Ej[c]=[a,b];return c};Cj.he=function(a){var b=a?0:1;return function(c){var d=Ej[c];if(d&&"function"===typeof d[b])d[b]();Ej[c]=void 0}};Cj.zg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Cj.Tg=function(a){if(a===Cj.yb)return a;var b=hd();Cj.Bc[b]=a;return'google_tag_manager["'+Vc.s+'"].macro('+b+")"};Cj.Jg=function(a,b,c){a instanceof Cj.uf&&(a=a.h(Cj.dh(b,c)),b=oa);return{Nc:a,B:b}};var Fj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||oc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Gj=function(a){Wc.hasOwnProperty("autoEventsSettings")||(Wc.autoEventsSettings={});var b=Wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Hj=function(a,b,c){Gj(a)[b]=c},Ij=function(a,b,c,d){var e=Gj(a),f=Fa(e,b,d);e[b]=c(f)},Jj=function(a,b,c){var d=Gj(a);return Fa(d,b,c)};var Kj=["input","select","textarea"],Lj=["button","hidden","image","reset","submit"],Mj=function(a){var b=a.tagName.toLowerCase();return!va(Kj,function(c){return c===b})||"input"===b&&va(Lj,function(c){return c===a.type.toLowerCase()})?!1:!0},Nj=function(a){return a.form?a.form.tagName?a.form:G.getElementById(a.form):rc(a,["form"],100)},Oj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Mj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Pj=!!F.MutationObserver,Qj=void 0,Rj=function(a){if(!Qj){var b=function(){var c=G.body;if(c)if(Pj)(new MutationObserver(function(){for(var e=0;e<Qj.length;e++)I(Qj[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;mc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Qj.length;e++)I(Qj[e])}))})}};Qj=[];G.body?b():I(b)}Qj.push(a)};
var ck=function(){var a=G.body,b=G.documentElement||a&&a.parentElement,c,d;if(G.compatMode&&"BackCompat"!==G.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};jd("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},dk=function(a){var b=ck(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},ek=function(a){if(G.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,null))}return!1};var fk=[],gk=!(!F.IntersectionObserver||!F.IntersectionObserverEntry),hk=function(a,b,c){for(var d=new F.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<fk.length;f++)if(!fk[f])return fk[f]=d,f;return fk.push(d)-1},ik=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ea()};I(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=dk(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},jk=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(gk){var e=!1;I(function(){e||ik(a,b,c)()});return hk(function(f){e=!0;for(var h={Pa:0};h.Pa<f.length;h={Pa:h.Pa},h.Pa++)I(function(k){return function(){return a(f[k.Pa])}}(h))},b,c)}return F.setInterval(ik(a,b,c),1E3)},kk=function(a){gk?0<=a&&a<fk.length&&fk[a]&&(fk[a].disconnect(),fk[a]=void 0):F.clearInterval(a)};
var lk=function(a,b,c){function d(){var h=a();f+=e?(Ea()-e)*h.playbackRate/1E3:0;e=Ea()}var e=0,f=0;return{Nb:function(h,k,l){var m=a(),n=m.ie,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.ie*k):Math.round(m.ag),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(r/n*100),p=G.hidden?!1:.5<=dk(c);d();var t=Fj(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(n);t["gtm.videoCurrentTime"]=
Math.round(r);t["gtm.videoElapsedTime"]=Math.round(f);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;uj(t)},fh:function(){e=Ea()},Cc:function(){d()}}};var mk=F.clearTimeout,nk=F.setTimeout,S=function(a,b,c){if(Wd()){b&&I(b)}else return ic(a,b,c)},ok=function(){return F.location.href},pk=function(a){return $e(af(a),"fragment")},qk=function(a){return Ze(af(a))},U=function(a,b){return Md(a,b||2)},rk=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=uj(a)):d=uj(a);return d},sk=function(a,b){F[a]=b},X=function(a,b,c){b&&(void 0===F[a]||c&&!F[a])&&(F[a]=
b);return F[a]},tk=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},uk=function(a,b){if(Wd()){b&&I(b)}else kc(a,b)},vk=function(a){return!!Jj(a,"init",!1)},wk=function(a){Hj(a,"init",!0)},xk=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$c;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Q("https://","http://",c))},yk=function(a,b){var c=a[b];return c};
var zk=Cj.Jg;var Wk=new xa;function Xk(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),n=$e(k,"port"),r=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Yk(a){return Zk(a)?1:0}
function Zk(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ra(c)){for(var d=0;d<c.length;d++)if(Yk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=q(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Wk.get(p);t||(t=new RegExp(c,u),Wk.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Xk(b,
c)}return!1};var $k=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var al={},bl=encodeURI,Y=encodeURIComponent,cl=lc;var dl=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var el=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};al.Ag=function(){var a=!1;return a};var rm=function(){var a=F.gaGlobal=F.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Cm=window,Dm=document,Em=function(a){var b=Cm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Cm["ga-disable-"+a])return!0;try{var c=Cm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",Dm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dm.getElementById("__gaOptOutExtension")?!0:!1};var Hm=function(a){C(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[J.ca]||{};C(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Lm=function(a,b,c){Ai(b,c,a)},Mm=function(a,b,c){Ai(b,c,a,!0)},Om=function(a,b){};
function Nm(a,b){}var Z={a:{}};

Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var B=[],A=x.split(","),z=0;z<A.length;z++){var E=Number(A[z]);if(isNaN(E))return[];n.test(A[z])||B.push(E)}return B}function c(){var x=0,B=0;return function(){var A=ck(),z=A.height;x=Math.max(v.scrollLeft+A.width,x);B=Math.max(v.scrollTop+z,B);return{cg:x,dg:B}}}function d(){p=X("self");
t=p.document;v=t.scrollingElement||t.body&&t.body.parentNode;y=c()}function e(x,B,A,z){var E=l(B),H={},K;for(K in E){H.Aa=K;if(E.hasOwnProperty(H.Aa)){var R=Number(H.Aa);x<R||(rk({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":E[H.Aa].join(",")}),Ij("sdl",B,function(V){return function(W){delete W[V.Aa];return W}}(H),{}))}H={Aa:H.Aa}}}function f(){var x=y(),B=x.cg,A=x.dg,z=B/v.scrollWidth*100,E=A/v.scrollHeight*100;e(B,"horiz.pix",
r.Ab,u.Ad);e(z,"horiz.pct",r.zb,u.Ad);e(A,"vert.pix",r.Ab,u.Wd);e(E,"vert.pct",r.zb,u.Wd);Hj("sdl","pending",!1)}function h(){var x=250,B=!1;t.scrollingElement&&t.documentElement&&p.addEventListener&&(x=50,B=!0);var A=0,z=!1,E=function(){z?A=nk(E,x):(A=0,f(),vk("sdl")&&!a()&&(nc(p,"scroll",H),nc(p,"resize",H),Hj("sdl","init",!1)));z=!1},H=function(){B&&y();A?z=!0:(A=nk(E,x),Hj("sdl","pending",!0))};return H}function k(x,B,A){if(B){var z=b(String(x));Ij("sdl",A,function(E){for(var H=0;H<z.length;H++){var K=
String(z[H]);E.hasOwnProperty(K)||(E[K]=[]);E[K].push(B)}return E},{})}}function l(x){return Jj("sdl",x,{})}function m(x){I(x.vtp_gtmOnSuccess);var B=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,K=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.Ab:k(A,B,"horiz.pix");break;case r.zb:k(z,B,"horiz.pct")}switch(E){case r.Ab:k(H,B,"vert.pix");break;case r.zb:k(K,
B,"vert.pct")}vk("sdl")?Jj("sdl","pending")||(w||(d(),w=!0),I(function(){return f()})):(d(),w=!0,v&&(wk("sdl"),Hj("sdl","pending",!0),I(function(){f();if(a()){var R=h();mc(p,"scroll",R);mc(p,"resize",R)}else Hj("sdl","init",!1)})))}var n=/^\s*$/,r={zb:"PERCENT",Ab:"PIXELS"},u={Wd:"vertical",Ad:"horizontal"},p,t,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):bj(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure;Je();S(b,function(){var d=X("google_trackConversion");if(pa(d)){var e={};"DATA_LAYER"==a.vtp_customParamsFormat?e=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(e=el(a.vtp_customParams,
"key","value"));var f={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(e.event=a.vtp_eventName),a.vtp_eventValue&&(f.value=a.vtp_eventValue),a.vtp_eventItems&&(f.items=a.vtp_eventItems));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:e,google_gtag_event_data:f,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:ch()};a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=a.vtp_userId);
d(h)||c()}else c()},c)})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||G.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):qk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Fj(c,"gtm.click");rk(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!vk("cl")){var c=X("document");mc(c,"click",a,!0);wk("cl")}I(b.vtp_gtmOnSuccess)})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return tk(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||ok();var d=b[a("vtp_component")];if(!d||"URL"==d)return qk(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ra(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=$e(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Sc&&b.Uc>=b.Sc)b.Oc&&X("self").clearInterval(b.Oc);else{b.Uc++;var c=(new Date).getTime();rk({event:b.Z,"gtm.timerId":b.Oc,"gtm.timerEventNumber":b.Uc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Sc,"gtm.timerStartTime":b.Ke,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ke,"gtm.triggers":b.ph})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{Z:b.vtp_eventName,Uc:0,interval:Number(b.vtp_interval),Sc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ph:String(b.vtp_uniqueTriggerId||"0"),Ke:(new Date).getTime()};c.Oc=X("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;D(el(n.vtp_fieldsToSet,"fieldName","value"),f);D(el(n.vtp_contentGroup,"index","group"),h);D(el(n.vtp_dimension,"index","dimension"),k);D(el(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=D(n);d=D(d,r)}D(el(d.vtp_fieldsToSet,"fieldName","value"),f);D(el(d.vtp_contentGroup,
"index","group"),h);D(el(d.vtp_dimension,"index","dimension"),k);D(el(d.vtp_metric,"index","metric"),l);var u=Qe(d.vtp_functionName);if(pa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+hd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var L=[].slice.call(arguments,0);L[0]=p+L[0];u.apply(window,L)},x=function(O,L){return void 0===L?L:O(L)},B=function(O,L){if(L)for(var ta in L)L.hasOwnProperty(ta)&&
y("set",O+ta,L[ta])},A=function(){var O=function(Sm,hj,Tm){if(!Pa(hj))return!1;for(var dd=Fa(Object(hj),Tm,[]),dg=0;dd&&dg<dd.length;dg++)y(Sm,dd[dg]);return!!dd&&0<dd.length},L;if(d.vtp_useEcommerceDataLayer){var ta=!1;ta||(L=U("ecommerce",1))}else d.vtp_ecommerceMacroData&&
(L=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(L))return;L=Object(L);var Ib=Fa(f,"currencyCode",L.currencyCode);void 0!==Ib&&y("set","&cu",Ib);O("ec:addImpression",L,"impressions");if(O("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){y("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Da="detail checkout checkout_option click add remove purchase refund".split(" "),$a="refund purchase remove checkout checkout_option add click detail".split(" "),
ab=0;ab<Da.length;ab++){var lb=L[Da[ab]];if(lb){O("ec:addProduct",lb,"products");y("ec:setAction",Da[ab],lb.actionField);if(Cd)for(var wb=0;wb<$a.length;wb++){var uc=L[$a[wb]];if(uc){uc!==lb&&jd("GTM",13);break}}break}}},z=function(O,L,ta){var Ib=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(ta&&v[Da]||!ta&&void 0===v[Da])){var $a=w[Da]?Aa(O[Da]):O[Da];"anonymizeIp"!=Da||$a||($a=void 0);L[Da]=$a;Ib++}return Ib},E={name:t};z(f,
E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",ch(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&y("set",O,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;pa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(za,d.vtp_eventValue||e.value)};z(K,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var sa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:sa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ma})}K?y("send","pageview",K):y("send","pageview");
d.vtp_autoLinkDomains&&Re(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var ua=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var bb=Q("https:","http:","//www.google-analytics.com/"+ua,f&&f.forceSSL);
S(bb,function(){var O=Oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return G.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!t){var x=X("document");t=x.location.protocol+"//"+x.location.hostname;x.location.port&&(t+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.jd)&&(w.setAttribute("data-gtm-yt-inspected-"+y.jd,"true"),d(w,y.oe))){w.id||(w.id=a());var x=X("YT"),B=x.get(w.id);B||(B=new x.Player(w.id));var A=h(B,y),z={},E;for(E in A)z.Qa=E,A.hasOwnProperty(z.Qa)&&B.addEventListener(z.Qa,function(H){return function(K){return A[H.Qa](K.data)}}(z)),z={Qa:z.Qa}}}
function f(w){I(function(){function y(){for(var B=x.getElementsByTagName("iframe"),A=B.length,z=0;z<A;z++)e(B[z],w)}var x=X("document");y();Rj(y)})}function h(w,y){var x,B;function A(){da=lk(function(){return{url:P,title:T,ie:N,ag:w.getCurrentTime(),playbackRate:sa}},y.jd,w.getIframe());N=0;T=P="";sa=1;return z}function z(O){switch(O){case p.PLAYING:N=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var L=w.getVideoData();T=L?L.title:""}sa=w.getPlaybackRate();y.Vf?da.Nb("start"):da.Cc();
M=m(y.Vg,y.Ug,w.getDuration());return E(O);default:return z}}function E(){ma=w.getCurrentTime();ua=(new Date).getTime();da.fh();ca();return H}function H(O){var L;switch(O){case p.ENDED:return R(O);case p.PAUSED:L="pause";case p.BUFFERING:var ta=w.getCurrentTime()-ma;L=1<Math.abs(((new Date).getTime()-ua)/1E3*sa-ta)?"seek":L||"buffering";w.getCurrentTime()&&(y.Uf?da.Nb(L):da.Cc());W();return K;case p.UNSTARTED:return A(O);default:return H}}function K(O){switch(O){case p.ENDED:return R(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return A(O);default:return K}}function R(){for(;B;){var O=x;mk(B);O()}y.Tf&&da.Nb("complete",1);return A(p.UNSTARTED)}function V(){}function W(){B&&(mk(B),B=0,x=V)}function ca(){if(M.length&&0!==sa){var O=-1,L;do{L=M[0];if(L.xa>w.getDuration())return;O=(L.xa-w.getCurrentTime())/sa;if(0>O&&(M.shift(),0===M.length))return}while(0>O);x=function(){B=0;x=V;0<M.length&&M[0].xa===L.xa&&(M.shift(),da.Nb("progress",L.Ee,L.Ie));ca()};B=nk(x,1E3*O)}}var da,M=[],N,P,T,sa,ma,ua,bb=A(p.UNSTARTED);
B=0;x=V;return{onStateChange:function(O){bb=bb(O)},onPlaybackRateChange:function(O){ma=w.getCurrentTime();ua=(new Date).getTime();da.Cc();sa=O;W();ca()}}}function k(w){for(var y=w.split(","),x=y.length,B=[],A=0;A<x;A++){var z=parseInt(y[A],10);isNaN(z)||100<z||0>z||B.push(z/100)}B.sort(function(E,H){return E-H});return B}function l(w){for(var y=w.split(","),x=y.length,B=[],A=0;A<x;A++){var z=parseInt(y[A],10);isNaN(z)||0>z||B.push(z)}B.sort(function(E,H){return E-H});return B}function m(w,y,x){var B=
w.map(function(E){return{xa:E,Ie:E,Ee:void 0}});if(!y.length)return B;var A=y.map(function(E){return{xa:E*x,Ie:void 0,Ee:E}});if(!B.length)return A;var z=B.concat(A);z.sort(function(E,H){return E.xa-H.xa});return z}function n(w){w.vtp_triggerStartOption?r(w):Ae(function(){r(w)})}function r(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,B=!!w.vtp_capturePause,A=k(w.vtp_progressThresholdsPercent+""),z=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||B||A.length||
z.length){var H={Vf:y,Tf:x,Uf:B,Ug:A,Vg:z,oe:E,jd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},K=X("YT"),R=function(){f(H)};I(w.vtp_gtmOnSuccess);if(K)K.ready&&K.ready(R);else{var V=X("onYouTubeIframeAPIReady");sk("onYouTubeIframeAPIReady",function(){V&&V();R()});I(function(){for(var W=X("document"),ca=W.getElementsByTagName("script"),da=ca.length,M=0;M<da;M++){var N=ca[M].getAttribute("src");if(b(N,"iframe_api")||b(N,"player_api"))return}for(var P=W.getElementsByTagName("iframe"),T=P.length,
sa=0;sa<T;sa++)if(!v&&d(P[sa],H.oe)){S("https://www.youtube.com/iframe_api");v=!0;break}})}}else I(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();


Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Gg())){Tg(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ma:void 0};Qg(m);Xg(["aw","dc"],m);Ch(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var r=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Vg(a,r,u,p,n);}
Zg();})}();

Z.a.aev=["google"],function(){function a(p,t){var v=Ud(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var B=a(p,w);if(B&&(x=v(B),n[y]=x,r.push(y),35<r.length)){var A=r.shift();delete n[A]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(ok());ra(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!dl(p,w)}function e(p){m.test(p)||(p="http://"+p);return $e(af(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return oc(p,"value");case "button":return pc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)Mj(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&oc(w,t)||v}var m=/^https?:\/\//i,n={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,pc)||v;case "URL":var x;a:{var B=String(a(t,"elementUrl")||v||""),A=af(B),z=String(p.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,p.vtp_affiliatedDomains);break a;default:x=$e(A,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var H=p.vtp_attribute,K=a(t,"element");E=K&&oc(K,H)||v||""}return E;case "MD":var R=p.vtp_mdValue,V=b(t,"MD",Yj);return R&&V?bk(V,R)||
v:V||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=D(a),c=b;c[Fb.sa]=null;c[Fb.Xe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:ok()}function b(f,h){mc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:qk(l),J:pk(l)})})}function c(f,h){mc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:qk(l),J:pk(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(pa(m))try{l[f]=function(n,r,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:qk(ok()),
J:pk(ok())})}}catch(n){}}function e(){var f={source:null,state:X("history").state||null,url:qk(ok()),J:pk(ok())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;rk(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=X("self");if(!vk("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);wk("hl")}I(f.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){Je();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:ch()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var B="DATA_LAYER"==v?U(x):k[y];B&&(l[w]=B)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items&&l.google_conversion_items.map&&(l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));var r=function(v,w){(l.google_additional_conversion_params=
l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,B){var A="DATA_LAYER"==v?U(x):k[y];B(A)&&r(w,A)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",
function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,
S(p,f(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){F._linkedin_data_partner_id=a.vtp_id;S("https://snap.licdn.com/li.lms-analytics/insight.min.js",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=0;f<c.length;f++){var h=c[f].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[f].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=X(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},h=function(k,l){void 0!==c[k]&&(f[l]=c[k])};h("vtp_goalValue","gv");h("vtp_eventCategory","ec");h("vtp_eventAction","ea");h("vtp_eventLabel","el");h("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",
function(){var k=$k(X("UET"),{ti:c.vtp_tagId,q:e});F[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){I(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.b="baut";Z.__baut.g=!0;Z.__baut.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=el(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();
Z.a.zone=[],function(){function a(r){for(var u=r.vtp_boundaries||[],p=0;p<u.length;p++)if(!u[p])return!1;return!0}function b(r){var u=Vc.s,p=u+":"+r.vtp_gtmTagId,t=U("gtm.uniqueEventId")||0,v=te(function(){return new h}),w=a(r),y=r.vtp_enableTypeRestrictions?r.vtp_whitelistedTypes.map(function(H){return H.typeId}):null;y=y&&Ja(y,f);if(v.registerZone(p,t,w,y))for(var x=r.vtp_childContainers.map(function(H){return H.publicId}),B=0;B<x.length;B++){var A=String(x[B]);if(v.registerChild(A,u,p)){var z=
0!==A.indexOf("GTM-");if(z){var E=function(H,K){rk(arguments)};E("js",new Date);m?(E("config",A),l||xk(A,z)):Bi({},A)}else xk(A,z)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.h={};this.i={}};h.prototype.checkState=function(r,u){var p=this.h[r];if(!p)return d;var t=this.checkState(p.De,u);if(!t.active)return c;
for(var v=[],w=0;w<p.rd.length;w++){var y=this.i[p.rd[w]];y.lb(u)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,B){B=B||[];if(!t.isWhitelisted(x,B))return!1;for(var A=0;A<v.length;++A)if(v[A].isWhitelisted(x,B))return!0;return!1}}:c};h.prototype.unregisterChild=function(r){delete this.h[r]};h.prototype.registerZone=function(r,u,p,t){var v=this.i[r];if(v)return v.m(u,p),!1;if(!p)return!1;this.i[r]=new k(u,t);return!0};h.prototype.registerChild=function(r,u,p){var t=this.h[r];if(!t&&
Wc[r]||t&&t.De!==u)return!1;if(t)return t.rd.push(p),!1;this.h[r]={De:u,rd:[p]};return!0};var k=function(r,u){this.h=[{eventId:r,lb:!0}];this.i=null;if(u){this.i={};for(var p=0;p<u.length;p++)this.i[u[p]]=!0}};k.prototype.m=function(r,u){var p=this.h[this.h.length-1];r<=p.eventId||p.lb!=u&&this.h.push({eventId:r,lb:u})};k.prototype.lb=function(r){if(!this.h||0==this.h.length)return!1;for(var u=this.h.length-1;0<=u;u--)if(this.h[u].eventId<=r)return this.h[u].lb;return!1};k.prototype.isWhitelisted=
function(r,u){u=u||[];if(!this.i||e[r]||this.i[r])return!0;for(var p=0;p<u.length;++p)if(this.i[u[p]])return!0;return!1};var l=!1;var m=!0;var n=function(r){b(r);I(r.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.b="zone";Z.__zone.g=!0;Z.__zone.priorityOverride=0}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=G.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,hc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){I(h)}}}var b=function(d,e,f){Ae(function(){var h,k=Wc;k.postscribe||(k.postscribe=dc);h=k.postscribe;var l={done:e},m=G.createElement("div");m.style.display="none";m.style.visibility="hidden";G.body.appendChild(m);try{h(m,d,l)}catch(n){I(f)}})};var c=function(d){if(G.body){var e=
d.vtp_gtmOnFailure,f=zk(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Nc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(G.body,qc(h),k,e)()}else nk(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(U("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!ek(f.target)){h.has(e.Bb)||h.set(e.Bb,""+b());h.has(e.xc)||h.set(e.xc,""+b());var r=0;h.has(e.Db)&&(r=Number(h.get(e.Db)));r+=100;h.set(e.Db,""+r);if(r>=k){var u=Fj(f.target,"gtm.elementVisibility",[h.uid]),p=dk(f.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.xc));
u["gtm.visibleLastTime"]=Number(h.get(e.Bb));rk(u);l()}}}if(!h.has(e.Xa)&&(0==k&&m(),!h.has(e.Ca))){var n=X("self").setInterval(m,100);h.set(e.Xa,n)}}function d(f){f.has(e.Xa)&&(X("self").clearInterval(Number(f.get(e.Xa))),f.h(e.Xa))}var e={Xa:"polling-id-",xc:"first-on-screen-",Bb:"recent-on-screen-",Db:"total-visible-time-",Ca:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.h=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=wc(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var B=G.getElementById(m);B&&(x=[B],y=1!=v.length||v[0]!==B)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var z=
new a(v[A],p);d(z)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&kk(w);0<v.length&&(w=jk(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Ca)||c(y,x,r,"ONCE"===t?function(){for(var B=0;B<v.length;B++){var A=new a(v[B],p);A.set(e.Ca,"1");d(A)}kk(w);if(n&&Qj)for(var z=0;z<Qj.length;z++)Qj[z]===h&&Qj.splice(z,1)}:function(){x.set(e.Ca,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.Ca)&&(x.h(e.Ca),x.h(e.Db)),x.h(e.Bb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;h();n&&Rj(h);I(f.vtp_gtmOnSuccess)})}();


var Pm={};Pm.macro=function(a){if(Cj.Bc.hasOwnProperty(a))return Cj.Bc[a]},Pm.onHtmlSuccess=Cj.he(!0),Pm.onHtmlFailure=Cj.he(!1);Pm.dataLayer=Nd;Pm.callback=function(a){fd.hasOwnProperty(a)&&pa(fd[a])&&fd[a]();delete fd[a]};function Qm(){Wc[Vc.s]=Pm;Ha(gd,Z.a);xb=xb||Cj;yb=re}
function Rm(){rf.gtm_3pds=!0;Wc=F.google_tag_manager=F.google_tag_manager||{};if(Wc[Vc.s]){var a=Wc.zones;a&&a.unregisterChild(Vc.s)}else{for(var b=data.resource||
{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)sb.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(r)}ub=Z;vb=Yk;Qm();Bj();ve=!1;we=0;if("interactive"==G.readyState&&!G.createEventObject||"complete"==G.readyState)ye();else{mc(G,"DOMContentLoaded",ye);mc(G,"readystatechange",ye);if(G.createEventObject&&
G.documentElement.doScroll){var p=!0;try{p=!F.frameElement}catch(y){}p&&ze()}mc(F,"load",ye)}Zi=!1;"complete"===G.readyState?aj():mc(F,"load",aj);a:{if(!Cd)break a;F.setInterval(Dd,864E5);}bd=(new Date).getTime();}}Rm();

})()
