/**
 * 인재채용; 공고 메뉴
 */
type CareerTabMenuList = {
  /**
   * 맵핑 고유 키
   */
  routeKey: string;
  /**
   * 채용공고 모집 직무명
   */
  name: string;
  /**
   * 채용공고 모집 코드
   */
  code: string;
  /**
   * 채용공고 경로
   */
  path: string;
  /**
   * 선택 여부
   */
  selected: boolean;
};
