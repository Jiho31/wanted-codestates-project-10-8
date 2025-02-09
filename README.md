
# wanted-codestates-project-10-8
---
#  배포 링크
📎 [과제링크](https://forest-app.herokuapp.com/)

# 🌳 Forest-Memo

<img width="500" alt="image" src="https://user-images.githubusercontent.com/82592845/155390853-41dff1fd-90bf-4453-9117-4e8849155e83.png">

> 충청북도의 오픈API 데이터를 활용하여, 마음에 드는 휴양림에 메모를 남기고 관리할 수 있는 웹페이지입니다.


# 프로젝트 실행 방법
 1. 메인 페이지의 오른쪽 하단의 (+) 버튼을 눌러 충청북도 휴양림 리스트 페이지로 이동합니다.
 2. 스크롤을 내리면 추가 목록이 나타납니다.
 3. 휴양림을 선택하여 메모를 입력하고 저장할 수 있습니다.
 4. 메인 페이지에서 저장된 휴양림 목록을 확인할 수 있습니다.
 5. 메인 페이지의 휴양림을 선택하면 메모를 수정하거나, 목록에서 삭제할 수 있습니다.
 
# 구현한 기능 목록
 - 무한 스크롤 10개씩 조회, 라이브러리 미사용.
 - 이름, 주소, 메모를 통해 저장된 휴양림 목록 필터링 가능.
 - 휴양림 저장 시 메모 요청 모달이 뜨고, 저장되지 않습니다.
 - 데이터는 로컬 스토리지에 저장했습니다.
 - 휴양림의 이름, 주소, 연락처 수정은 불가합니다.
 - 저장된 휴양림의 메모를 수정하거나 목록에서 제거할 수 있습니다.
 - 상황에 따라 메모 요청, 저장 완료, 삭제 완료의 피드백 모달이 보입니다.

 
# 구현 방법 및 구현하면서 어려웠던 점 등
- 피드백 모달이 나타나면 자동으로 사라지는 기능을 구현할 때 setTimeOut을 이용하여 애니메이션 효과를 주었습니다. setTimeOut을 통해 변경된 값을 스타일에 적용시키는 과정에서 렌더링이 제대로 안되는 문제가 어려웠는데, useEffect를 통해 해결했습니다.
- 전체적으로 팀원 각각 작은 기능들을 나눠 진행했는데 병합 시 많은 버그들이 발생해 어려웠습니다.


# 해당 과제에 대해서 소개하고 싶은 내용을 자유롭게 적어주세요.
- 충청북도 지역의 휴양림을 확인할 수 있습니다
- 원한다면 휴양림을 선택하여 메모를 남기고 확인할 수 있습니다.
- 지금 당장 휴양림을 골라서 바쁜 날을 한 템포 쉬어갈 수 있도록 해보세요!


## 팀 구성
**팀장**
`홍인열`
<br/>
**팀원**
`김주영`|`박창진`|`복지호`|`우혁주`|`장혜민`|`전용태`

