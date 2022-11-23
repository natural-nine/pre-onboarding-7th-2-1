# 기술 스택

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3498db?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react-444444?style=for-the-badge&logo=react"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/axios-FFCA28?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"><img src="https://img.shields.io/badge/redux-8e44ad?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/redux_toolkit-8e44ad?style=for-the-badge&logo=redux&logoColor=white">

# 주요 기능

| 페이지                 | API 연결 및 기능                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `/` 메인페이지         | ✅ 전체 리스트 가져오기 <br> ✅ 리스트 없을 때 처리 <br> ✅ spinner 표시 <br> ✅ option 클릭 시 맞는 리스트 가져오기 <br> |
| `/detail` 디테일페이지 | ✅ 상세 리스트 가져오기 <br> ✅ 뒤로가기 클릭 시 option 맞는 리스트 가져오기 <br>                                         |

# 상세 설명

1. `/` 메인 페이지

   - `/` 처음 접속 시 `option` 의 `전체` 리스트를 가져옵니다.
   - 리스트 가져오면서 로딩 중일 때 `spinner` 와 함께 `불러오는 중` 을 렌더링 합니다.
   - 리스트가 없을 시 `없습니다.`를 렌더링합니다.
   - `option` 클릭 시 해당 `option` 의 리스트를 렌더링 합니다.
   - 현재 `option` 값에 같은 값의 `option` 클릭 시 리스트를 불러오지 않습니다.

2. `detail` 상세 페이지
   - `navigate` 의 `state` 를 활용하여 해당 리스트를 저장하고 렌더링합니다.
   - 뒤로가기 클릭 시 기존 `option` 리스트를 렌더링 합니다.

---

모든 `state` 는 전역으로 `redux`로 관리, `width` 450px ~ 280px(갤럭시 폴드) 반응형.
