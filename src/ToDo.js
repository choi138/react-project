function ToDo() {
    return (
        <div class="Wrap">
            <form class="WriteWrap" action="/add" method="POST"> {/* <!-- POST는 수정이다. /add는 경로이다. --> */}
                <div>
                    <h1>기록해도 안할 거 알지만</h1>
                    <div class="todo">
                        <h4>오늘의 할일</h4>
                        <input class="asdf" placeholder="오늘의 할일" name="title" />
                    </div>
                    <div>
                        <h4>세부내용</h4>
                        <textarea class="asdfg" placeholder="세부내용" name="date"></textarea>
                        {/* <!-- Post요청으로 서버에 데이터 전송하고 싶으면 form데이터의 경우 input들에게 name쓰기 -->*/}
                    </div>
                    <button class="button">Submit</button>
                </div>
            </form>
        </div >
    )
};

export default ToDo;