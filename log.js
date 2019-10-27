var log = {
    info: function (info) { 
        console.log('정보: ' + info);
    },
    warning:function (warning) { 
        console.log('경고: ' + warning);
    },
    error:function (error) { 
        console.log('에러: ' + error);
    }
};

module.exports = log;

/* 
노드는 각각의 파일을 모듈(module)이라고 불러요.
쉽게 말하면 모듈이라는 상자안에 여러가지 로컬 변수랑 함수를 지정해 놓고
module.export를 써서 외부에서 불러 쓸수 있게 하는 거죠.
*/

