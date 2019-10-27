var logModule = require('./Log.js'); // 모듈을 로딩에서 변수에 지정

var simpleMessage = require('./exports/sample1'); // .js 는 생략 가능
var module2 = require('./exports/sample2'); // 폴더안에 있는 파일은 경로도 지정해 줘야 되요.
var person = require('./exports/sample3'); 
var logModule = require('./exports/sample4'); 

logModule.info(simpleMessage);

module2.display("안녕하세요");

// 클래스 사용법
var jinho = new person('진호', '박');
module2.display(jinho.fullName());