import React from "react";
import styled from "styled-components";
import MainParameter from "../../components/Parameters/MainParameter/MainParameter";
import PowerfulImg from "../../img/powerful.png";
import DexterityImg from "../../img/dexterity.png";
import IntelligenceImg from "../../img/intelligence.png";
import CharismaImg from "../../img/charisma.png";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { setMainParameters, setSecondParameters } from "../../store/Character";

const MainParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const initialCounts = [
  {
    name: "power",
    img: `${PowerfulImg}`,
    borderColor: "#302020",
    title: "Сила",
    value: 0,
  },
  {
    name: "dexterity",
    img: `${DexterityImg}`,
    borderColor: "#37492C",
    title: "Ловкость",
    value: 0,
  },
  {
    name: "intelligence",
    img: `${IntelligenceImg}`,
    borderColor: "#3B6C81",
    title: "Интеллект",
    value: 0,
  },
  {
    name: "charisma",
    img: `${CharismaImg}`,
    borderColor: "#27385A",
    title: "Харизма",
    value: 0,
  },
];

interface Count {
  name: string;
  img: string;
  borderColor: string;
  title: string;
  value: number;
}

const MainParameters = () => {
  let powerValue: number;
  let dexterityValue: number;
  let intelligenceValue: number;
  let charismaValue: number;

  const [counts, setCounts] = React.useState(initialCounts);
  const dispatch = useAppDispatch();

  const decrement = (id: string) => {
    const updatesCounts = counts.map((count: Count) => {
      if (count.name === id && count.value > 0) {
        return { ...count, value: (count.value -= 1) };
      } else {
        return count;
      }
    });

    setCounts(updatesCounts);
  };

  const increment = (id: string) => {
    const updatesCounts = counts.map((count: Count) => {
      if (count.name === id) {
        return { ...count, value: (count.value += 1) };
      } else {
        return count;
      }
    });

    setCounts(updatesCounts);
  };

  counts.forEach((count) => {
    if (count.name === "power") {
      powerValue = count.value;
    }
    if (count.name === "dexterity") {
      dexterityValue = count.value;
    }
    if (count.name === "intelligence") {
      intelligenceValue = count.value;
    }
    if (count.name === "charisma") {
      charismaValue = count.value;
    }
  });

  React.useEffect(() => {
    dispatch(
      setMainParameters({
        power: powerValue,
        dexterity: dexterityValue,
        intelligence: intelligenceValue,
        charisma: charismaValue,
      })
    );

    dispatch(setSecondParameters({
      lifeForce: powerValue + 3,
      evasion: dexterityValue + 10,
      energy: intelligenceValue + charismaValue
    }));
  }, [counts]);


  return (
    <MainParametersStyle>
      {counts.map((count) => (
        <MainParameter
          key={count.name}
          borderColor={count.borderColor}
          title={count.title}
          img={count.img}
          count={count.value}
          decrement={() => decrement(count.name)}
          increment={() => increment(count.name)}
        />
      ))}
    </MainParametersStyle>
  );
};

export default MainParameters;
