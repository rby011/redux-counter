### Reference 

```
// redux lecture index
https://velopert.com/3365
// lecture #1 
https://velopert.com/3346
// react lecture index
https://velopert.com/reactjs-tutorials
```

* https://medium.com/@enro2414_40667/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-export-import%EC%A0%95%EB%A6%AC-137ac9e327d9

### Directory Structure (Redux 창시자가 제안한 구조)

- actions: 액션타입, 액션생성자 파일이 저장
- components: 뷰만을 담당하는 presentational 컴포넌트들이 저장
- containers: store 에 접근이 닿는 container 컴포넌트들이 저장
- reducers: 스토어의 기본상태와, 상태의 업데이트를 담당하는 리듀서 파일들이 저장
- utils: 일부 컴포넌트들에서 공용되는 파일이 저장

#### Presentational Component

- 프리젠테이셔널 컴포넌트는 오직 뷰만을 담당하는 컴포넌트
- 이 안에는 DOM 엘리먼트, 그리고 스타일을 갖고 있으며, 프리젠테이셔널 컴포넌트나 컨테이너 컴포넌트를 가지고 있을 수도 있음
- 리덕스의 스토어에는 직접적인 접근 권한이 없으며 오직 props 로만 데이터를 가져올수 있음
- 대부분의 경우 state 를 갖고있지 않으며, 갖고있을 경우엔 데이터에 관련된것이 아니라 UI 에 관련된것이어야 함
- 주로 함수형 컴포넌트로 작성되며, state 를 갖고있어야하거나, 최적화를 위해 LifeCycle 이 필요해질때 클래스형 컴포넌트로 작성

#### Container Component

- 프리젠테이셔널 컴포넌트들과 컨테이너 컴포넌트들을 관리하는것을 담당
- 주로 내부에 DOM 엘리먼트가 직접적으로 사용되는 경우는 없음 (단, 감싸는 용도일때만 사용)
- 스타일을 가지고있지 않아야합니다. 스타일들은 모두 프리젠테이셔널 컴포넌트에서 정의되어야 함
- 상태를 가지고 있을 때가 많으며, 리덕스에 직접적으로 접근