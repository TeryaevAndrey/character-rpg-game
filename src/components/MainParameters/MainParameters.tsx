import React from "react";
import styled from "styled-components";
import MainParameter from "../../components/Parameters/MainParameter/MainParameter";
import PowerfulImg from "../../img/powerful.png";
import DexterityImg from "../../img/dexterity.png";
import IntelligenceImg from "../../img/intelligence.png";
import CharismaImg from "../../img/charisma.png";
import { count } from "console";

const MainParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const initialCounters = [
  {
    id: "power",
    img: `${PowerfulImg}`,
    borderColor: "#302020",
    title: "Сила",
    value: 0,
  },
  {
    id: "dexterity",
    img: `${DexterityImg}`,
    borderColor: "#37492C",
    title: "Ловкость",
    value: 0,
  },
  {
    id: "intelligence",
    img: `${IntelligenceImg}`,
    borderColor: "#3B6C81",
    title: "Интеллект",
    value: 0,
  },
  {
    id: "charisma",
    img: `${CharismaImg}`,
    borderColor: "#27385A",
    title: "Харизма",
    value: 0,
  },
];

interface Count {
  id: string;
  img: string;
  borderColor: string;
  title: string;
  value: number;
}

const MainParameters = () => {
  const [counts, setCounts] = React.useState(initialCounters);

  const decrement = (id: string) => {
    const updatesCounts = counts.map((count: Count) => {
      if(count.id === id && count.value > 0) {
        return {...count, value: count.value - 1};
      } else {
        return count;
      }
    });

    setCounts(updatesCounts);
  };

  const increment = (id: string) => {
    const updatesCounts = counts.map((count: Count) => {
      if(count.id === id) {
        return {...count, value: count.value + 1};
      } else {
        return count;
      }
    }) 

    setCounts(updatesCounts);
  };

  return (
    <MainParametersStyle>
      {counts.map((count) => (
        <MainParameter
          key={count.id}
          borderColor={count.borderColor}
          title={count.title}
          img={count.img}
          count={count.value}
          decrement={() => decrement(count.id)}
          increment={() => increment(count.id)}
        />
      ))}
    </MainParametersStyle>
  );
};

export default MainParameters;
