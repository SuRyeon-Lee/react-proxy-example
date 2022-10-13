const { createProxyMiddleware } = require('http-proxy-middleware');

//꼭 setupProxy라는 이름으로 src 폴더 최상위에 만들어야 한다.
module.exports = function(app) {
  app.use(
    ['/api','/api2'],//proxy가 필요한 path prameter를 배열로 입력합니다.
    createProxyMiddleware({ 
      target: 'http://localhost:3080', //api의 port적음
      //타겟이 되는 api url를 입력합니다.(여러개로 라우트 될때 가장 첫번째 기본 백서버)
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분
      router: {
        '/api2' : 'http://localhost:3070' //api2로 들어오는건 이걸로 처리하겠다 정해줌
      }
    })
  );
};
// "/api" 로 들어가는 요청을 "http://localhost:3080" 으로 바꿔서 보내라
