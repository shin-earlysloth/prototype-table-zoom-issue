import styled, { css } from "styled-components";

const TdBorderExample = () => {
  return (
    <Table>
      <thead>
        <tr>
          <HeaderTH>이름</HeaderTH>
          <HeaderTH>휴대폰</HeaderTH>
          <HeaderTH>이메일</HeaderTH>
        </tr>
      </thead>

      <tbody>
        {Array(10)
          .fill(true)
          .map((_, outerIndex) => (
            <BodyTr key={`outer-${outerIndex}`}>
              {["김김김", "", "aaaa@gmail.com"].map((cellData, index) => (
                <BodyTd
                  isError={outerIndex === 4}
                  key={`inner-${outerIndex}-${index}`}
                >
                  {cellData}
                </BodyTd>
              ))}
            </BodyTr>
          ))}
      </tbody>
    </Table>
  );
};

export default TdBorderExample;

const Table = styled.table`
  border: 1px solid rgb(223, 222, 221);
  border-collapse: collapse;
  width: 100%;
`;

const HeaderTH = styled.th`
  border: 1px solid rgb(223, 222, 221);
  min-width: 105px;
  box-sizing: border-box;
  padding: 12px 14px;
  background-color: rgb(240, 240, 240);
  font-family: "Pretendard Bold";
  font-size: 12px;
  line-height: 150%;
  text-align: start;
  letter-spacing: -0.5px;
  color: rgb(43, 46, 51);
  white-space: nowrap;
`;

const BodyTr = styled.tr`
  height: 45px;
`;

const BodyTd = styled.td<{ isError?: boolean }>`
  border: 1px solid rgb(223, 222, 221);
  padding: 14px;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -0.5px;
  color: rgb(43, 46, 51);
  white-space: nowrap;

  ${(props) =>
    props.isError &&
    css`
      border: 1.5px solid red;
      border-left: 1px solid rgb(223, 222, 221);
      border-right: 1px solid rgb(223, 222, 221);

      &:first-of-type {
        border-left: 1.5px solid red;
      }
      &:last-of-type {
        border-right: 1.5px solid red;
      }
    `}
`;
