import styled from "styled-components";


export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  height: 300px;
  padding: 0 16px;
  margin: 10px auto;
  
`;
export const HomeMain = styled.div`
  width: 625px;
  margin-right: 55px;
  padding-top: 30px;
  // box-shadow: 0 1px 3px rgba(26,26,26,.1);
`;

export const ArticleLists = styled.ul`

`;
export const List = styled.li`
  display: flex;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
`;
export const ListContent = styled.div`
  flex: 1;
  padding-right: 15px;
`;
export const ListImg = styled.div`
  height: 100px;
  width: 150px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const ListTitle = styled.a`
  display: block;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
  color: #2f2f2f;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const ListAbstract = styled.p`
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`;
export const HomeLeft = styled.div`
  flex: 1;
  border: 1px solid #f0f0f0;
`;

export const LoadMore = styled.div`
  height: 40px;
  width: 100px;
  margin:30px auto;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  background-color: #a5a5a5;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position:  fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #dcdcdc;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  color: #969696;
  cursor: pointer;
`;