import React from "react";
import styled from "styled-components";
import Skill from "../Skill/Skill";
import {useAppDispatch, useAppSelector} from "../../store/Hooks";
import {setSkills} from "../../store/Character";
import app from "../../App";

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

  @media (max-width: 420px) {
    justify-content: center;
  }
`;

const initialCounts = [
    {
        titleId: "attack",
        mainParameter: "power",
        name: "Атака",
        borderColor: "#302020",
        value: 0,
        level: 0,
    },
    {
        titleId: "stealth",
        mainParameter: "dexterity",
        name: "Стелс",
        borderColor: "#37492C",
        value: 0,
        level: 0,
    },
    {
        titleId: "shooting",
        mainParameter: "dexterity",
        name: "Стрельба",
        borderColor: "#37492C",
        value: 0,
        level: 0,
    },
    {
        titleId: "learnability",
        mainParameter: "intelligence",
        name: "Обучаемость",
        borderColor: "#3B6C81",
        value: 0,
        level: 0,
    },
    {
        titleId: "survival",
        mainParameter: "intelligence",
        name: "Выживание",
        borderColor: "#3B6C81",
        value: 0,
        level: 0,
    },
    {
        titleId: "medicine",
        mainParameter: "intelligence",
        name: "Медицина",
        borderColor: "#3B6C81",
        value: 0,
        level: 0,
    },
    {
        titleId: "intimidation",
        mainParameter: "charisma",
        name: "Запугивание",
        borderColor: "#27385A",
        value: 0,
        level: 0,
    },
    {
        titleId: "insight",
        mainParameter: "charisma",
        name: "Проницаемость",
        borderColor: "#27385A",
        value: 0,
        level: 0,
    },
    {
        titleId: "appearance",
        mainParameter: "charisma",
        name: "Внешний вид",
        borderColor: "#27385A",
        value: 0,
        level: 0,
    },
    {
        titleId: "manipulation",
        mainParameter: "charisma",
        name: "Манипулирование",
        borderColor: "#27385A",
        value: 0,
        level: 0,
    },
];

const Skills = () => {
    const dispatch = useAppDispatch();
    const mainParameters = useAppSelector((state) => state.character.mainParameters);
    const skills = useAppSelector((state) => state.character.skills);
    const [counts, setCounts] = React.useState(initialCounts);

    const mainParametersArr = [
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
        }
    ];

    const increment = (titleId: string) => {
        const updatesCounts = counts.map((count) => {
            mainParametersArr.forEach((parameter) => {
                if(count.titleId === titleId) {
                    if (count.mainParameter === parameter.title && count.value < parameter.value) {
                        return {...count, value: count.value += 1};
                    }
                }
            });

            if(count.titleId === titleId) {
                if(count.value % 10 === 0) {
                    return {...count, level: count.level + 1};
                } else {
                    return count;
                }
            }

            return count;
        });

        setCounts(updatesCounts);
    };

    React.useEffect(() => {
        const formattedCounts = counts.map((count) => {
            return {
                name: count.titleId,
                value: count.value,
                level: count.level
            };
        });

        dispatch(setSkills(formattedCounts));
    }, [counts]);

    let attackInfo = {value: 0, level: 0};
    let stealthInfo = {value: 0, level: 0};
    let shootingInfo = {value: 0, level: 0};
    let learnabilityInfo = {value: 0, level: 0};
    let survivalInfo = {value: 0, level: 0};
    let medicineInfo = {value: 0, level: 0};
    let intimidationInfo = {value: 0, level: 0};
    let insightInfo = {value: 0, level: 0};
    let appearanceInfo = {value: 0, level: 0};
    let manipulationInfo = {value: 0, level: 0};

    skills.forEach((skill) => {
        if(skill.name === "attack") return attackInfo = {value: skill.value, level: skill.level};
        if(skill.name === "stealth") return stealthInfo = {value: skill.value, level: skill.level};
        if(skill.name === "shooting") return shootingInfo = {value: skill.value, level: skill.level};
        if(skill.name === "learnability") return learnabilityInfo = {value: skill.value, level: skill.level};
        if(skill.name === "survival") return survivalInfo = {value: skill.value, level: skill.level};
        if(skill.name === "medicine") return medicineInfo = {value: skill.value, level: skill.level};
        if(skill.name === "intimidation") return intimidationInfo = {value: skill.value, level: skill.level};
        if(skill.name === "insight") return insightInfo = {value: skill.value, level: skill.level};
        if(skill.name === "appearance") return appearanceInfo = {value: skill.value, level: skill.level};
        if(skill.name === "manipulation") return manipulationInfo = {value: skill.value, level: skill.level};
    });

    const result = [
        {
            titleId: "attack",
            mainParameter: "power",
            name: "Атака",
            borderColor: "#302020",
            value: attackInfo.value,
            level: attackInfo.level,
        },
        {
            titleId: "stealth",
            mainParameter: "dexterity",
            name: "Стелс",
            borderColor: "#37492C",
            value: stealthInfo.value,
            level: stealthInfo.value,
        },
        {
            titleId: "shooting",
            mainParameter: "dexterity",
            name: "Стрельба",
            borderColor: "#37492C",
            value: shootingInfo.value,
            level: shootingInfo.value,
        },
        {
            titleId: "learnability",
            mainParameter: "intelligence",
            name: "Обучаемость",
            borderColor: "#3B6C81",
            value: learnabilityInfo.value,
            level: learnabilityInfo.level,
        },
        {
            titleId: "survival",
            mainParameter: "intelligence",
            name: "Выживание",
            borderColor: "#3B6C81",
            value: survivalInfo.value,
            level: survivalInfo.level,
        },
        {
            titleId: "medicine",
            mainParameter: "intelligence",
            name: "Медицина",
            borderColor: "#3B6C81",
            value: medicineInfo.value,
            level: medicineInfo.level,
        },
        {
            titleId: "intimidation",
            mainParameter: "charisma",
            name: "Запугивание",
            borderColor: "#27385A",
            value: intimidationInfo.value,
            level: intimidationInfo.level,
        },
        {
            titleId: "insight",
            mainParameter: "charisma",
            name: "Проницаемость",
            borderColor: "#27385A",
            value: insightInfo.value,
            level: insightInfo.value,
        },
        {
            titleId: "appearance",
            mainParameter: "charisma",
            name: "Внешний вид",
            borderColor: "#27385A",
            value: appearanceInfo.value,
            level: appearanceInfo.value,
        },
        {
            titleId: "manipulation",
            mainParameter: "charisma",
            name: "Манипулирование",
            borderColor: "#27385A",
            value: manipulationInfo.value,
            level: manipulationInfo.value,
        },
    ];

    React.useEffect(() => {
        setCounts(result);
    }, [skills])

    return (
        <div>
            <Title>Способности</Title>
            <SkillsWrapper>
                {
                    counts.map((count) => (
                        <Skill key={count.name} borderColor={count.borderColor} title={count.name} value={count.value} increment={() => increment(count.titleId)} level={count.level} />
                    ))
                }
            </SkillsWrapper>
        </div>
    );
};

export default Skills;
