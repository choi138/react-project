import * as S from "../../component/writeForm/Style";



function Login() {
    return (
        <S.Wrap>
            <S.WriteWrap action="/login" method="POST">
                <div>
                    <S.Title>로그인</S.Title>
                    <S.ToDoDiv>
                        <S.H4>아이디</S.H4>
                        <S.Input name="username" />
                    </S.ToDoDiv>
                    <S.ToDoDiv>
                        <S.H4>비밀번호</S.H4>
                        <S.Input name="password" />
                    </S.ToDoDiv>
                    <S.Button className="button">Submit</S.Button>
                </div>
            </S.WriteWrap>
        </S.Wrap>
    );
}

export default Login;