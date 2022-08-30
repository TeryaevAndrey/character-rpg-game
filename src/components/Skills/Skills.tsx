import React from "react";
import styled from "styled-components";
import Skill from "../Skill/Skill";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { setSkills } from "../../store/Character";

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
  flex-wrap: wrap;

  @media(max-width: 420px) {
    justify-content: center;
  }
`;

const Skills = () => {
  const dispatch = useAppDispatch();

  const initialCounts = [
    {
      name: "attack",
      mainParameter: "power",
      title: "Атака",
      borderColor: "#302020",
      value: 0,
      level: 0,
    },
    {
      name: "stealth",
      mainParameter: "dexterity",
      title: "Стелс",
      borderColor: "#37492C",
      value: 0,
      level: 0,
    },
    {
      name: "shooting",
      mainParameter: "dexterity",
      title: "Стрельба",
      borderColor: "#37492C",
      value: 0,
      level: 0,
    },
    {
      name: "learnability",
      mainParameter: "intelligence",
      title: "Обучаемость",
      borderColor: "#3B6C81",
      value: 0,
      level: 0,
    },
    {
      name: "survival",
      mainParameter: "intelligence",
      title: "Выживание",
      borderColor: "#3B6C81",
      value: 0,
      level: 0,
    },
    {
      name: "medicine",
      mainParameter: "intelligence",
      title: "Медицина",
      borderColor: "#3B6C81",
      value: 0,
      level: 0,
    },
    {
      name: "intimidation",
      mainParameter: "charisma",
      title: "Запугивание",
      borderColor: "#27385A",
      value: 0,
      level: 0,
    },
    {
      name: "insight",
      mainParameter: "charisma",
      title: "Проницаемость",
      borderColor: "#27385A",
      value: 0,
      level: 0,
    },
    {
      name: "appearance",
      mainParameter: "charisma",
      title: "Внешний вид",
      borderColor: "#27385A",
      value: 0,
      level: 0,
    },
    {
      name: "manipulation",
      mainParameter: "charisma",
      title: "Манипулирование",
      borderColor: "#27385A",
      value: 0,
      level: 0,
    },
  ];

  const [counts, setCounts] = React.useState(initialCounts);

  const mainParameters = useAppSelector(
    (state) => state.character.mainParameters
  );

  const mainParametersInfo = [
    {
      title: "power",
      value: mainParameters.power,
    },
    {
      title: "dexterity",
      value: mainParameters.dexterity,
    },
    {
      title: "intelligence",
      value: mainParameters.intelligence,
    },
    {
      title: "charisma",
      value: mainParameters.charisma,
    },
  ];

  const increment = (name: string) => {
    const updatesCounts = counts.map((count) => {
      mainParametersInfo.forEach((parameter) => {
        if (count.name === name) {
          if (
            count.mainParameter === parameter.title &&
            count.value < parameter.value
          ) {
            return { ...count, value: (count.value += 1) };
          }
        }
      });

      if (count.name === name) {
        if (count.value % 10 === 0 && count.value / 10) {
          return { ...count, level: (count.level += 1) };
        }
      }

      return count;
    });

    setCounts(updatesCounts);
  };

  const skillParameters = counts.map((count) => {
    return { name: count.name, value: count.value, level: count.level };
  });

  React.useEffect(() => {
    dispatch(setSkills(skillParameters));
  }, [counts]);

  return (
    <div>
      <Title>Способности</Title>
      <SkillsWrapper>
        {counts.map((count) => (
          <Skill
            key={count.name}
            borderColor={count.borderColor}
            title={count.title}
            count={count.value}
            increment={() => increment(count.name)}
            level={count.level}
          />
        ))}
      </SkillsWrapper>
    </div>
  );
};

export default Skills;
