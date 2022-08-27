import styled from "styled-components";
import Skill from "../Skill/Skill";

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  padding: 40px 0;
  text-transform: uppercase;
`;

const SkillsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

const SkillsCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const Skills = () => {
  return (
    <div>
      <Title>Способности</Title>
      <SkillsWrapper>
      <SkillsCol>
        <Skill borderColor="#302020" title="Атака" />
      </SkillsCol>
      <SkillsCol>
        <Skill borderColor="#37492C" title="Стелс" />
        <Skill borderColor="#37492C" title="Стрельба" />
      </SkillsCol>
      <SkillsCol>
        <Skill borderColor="#3B6C81" title="Обучаемость" />
        <Skill borderColor="#3B6C81" title="Выживание" />
        <Skill borderColor="#3B6C81" title="Медицина" />
      </SkillsCol>
      <SkillsCol>
        <Skill borderColor="#27385A" title="Запугивание" />
        <Skill borderColor="#27385A" title="Проницательность" />
        <Skill borderColor="#27385A" title="Внешний вид" />
        <Skill borderColor="#27385A" title="Манипулирование" />
      </SkillsCol>
    </SkillsWrapper>
    </div>
  );
};

export default Skills;
