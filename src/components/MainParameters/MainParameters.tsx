import React from "react";
import styled from "styled-components";
import PowerImg from "../../img/powerful.png";
import DexterityImg from "../../img/dexterity.png";
import IntelligenceImg from "../../img/intelligence.png";
import CharismaImg from "../../img/charisma.png";
import MainParameter from "../Parameters/MainParameter/MainParameter";
import {useAppDispatch, useAppSelector} from "../../store/Hooks";
import {setMainParameters, setSecondParameters} from "../../store/Character";

const MainParametersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const MainParameters = () => {
    const dispatch = useAppDispatch();
    const mainParameters = useAppSelector((state) => state.character.mainParameters);

    let initialCounts = [
      {
          name: "power",
          value: mainParameters.power,
          borderColor: "#302020",
          img: `${PowerImg}`,
          title: "Сила",
      },
      {
          name: "dexterity",
          value: mainParameters.dexterity,
          borderColor: "#37492C",
          img: `${DexterityImg}`,
          title: "Ловкость",
      },
      {
          name: "intelligence",
          value: mainParameters.intelligence,
          borderColor: "#3B6C81",
          img: `${IntelligenceImg}`,
          title: "Интеллект",
      },
      {
          name: "charisma",
          value: mainParameters.charisma,
          borderColor: "#27385A",
          img: `${CharismaImg}`,
          title: "Харизма",
      },
  ];

    const [counts, setCounts] = React.useState(initialCounts);

    const decrement = (name: string) => {
        const updatesCounts = counts.map((count) => {
            if (name === count.name && count.value > 0) {
                return {...count, value: count.value -= 1};
            } else {
                return count;
            }
        });

        setCounts(updatesCounts);
    };

    const increment = (name: string) => {
        const updatesCounts = counts.map((count) => {
            if (name === count.name) {
                return {...count, value: count.value += 1};
            } else {
                return count;
            }
        });

        setCounts(updatesCounts);
    };

    let powerValue: number;
    let dexterityValue: number;
    let intelligenceValue: number;
    let charismaValue: number;

    counts.forEach((count) => {
      if(count.name === "power") return powerValue = count.value;
      if(count.name === "dexterity") return dexterityValue = count.value;
      if(count.name === "intelligence") return intelligenceValue = count.value;
      if(count.name === "charisma") return charismaValue = count.value;
    });

    React.useEffect(() => {
      dispatch(setMainParameters({
        power: powerValue,
        dexterity: dexterityValue,
        intelligence: intelligenceValue,
        charisma: charismaValue,
      }));
      dispatch(setSecondParameters({
        lifeForce: powerValue + 3,
        evasion: dexterityValue + 10,
        energy: intelligenceValue + charismaValue,
      }));
    }, [counts]);

    React.useEffect(() => {
      setCounts(initialCounts);
    }, [mainParameters])

    return (
        <MainParametersStyle>
            {
                counts.map((parameter) => (
                    <MainParameter key={parameter.name} borderColor={parameter.borderColor} img={parameter.img} title={parameter.title}
                                   value={parameter.value} decrement={() => decrement(parameter.name)}
                                   increment={() => increment(parameter.name)}/>
                ))
            }
        </MainParametersStyle>
    );
};

export default MainParameters;
