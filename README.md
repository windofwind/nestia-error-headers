# nestia 에러 재현 코드 입니다.

1. 콘트롤러 arguments :  fn(@Headers() headers: Base.headers) 만 쓰면 swagger에서 정상 출력
2. 콘트롤러 arguments :  fn(@Headers() headers: Base.headers, @TypedParam('id') id: string) 만 쓰면 swagger에서 @Headers() 포함된 라우트가 다 사라짐

