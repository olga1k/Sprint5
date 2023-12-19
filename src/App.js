import { useState } from "react";
import Card from "./Card";
import "./App.css";
import Indicator from "./Indicator";
function App() {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, peró notaràs una millora ràpidament.",
      bgColor: "#4da2a9",
      image: "time_management.svg",
      id: 0,
      unicName: "zero",
    },
    {
      title: "Programa projectes propis",
      description:
        "Més vale 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#d3d4d9",
      image: "programming.svg",
      id: 1,
      unicName: "one",
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffd167",
      image: "meditation.svg",
      id: 2,
      unicName: "two",
    },
  ];
  let [step, setStep] = useState(0);

  const currentCardData = tutorialData[step];

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
    /*const currentCard = document.querySelector(`#${currentCardData.unicName}`);
  
  //animation 
  if (step < tutorialData.length - 1 && currentCard) {
    currentCard.classList.add('disappearRight');
    setTimeout(() => {
      setStep(prevStep => prevStep + 1);
    }, 300);
  }*/
  }

  function prevStep() {
    setStep((prevStep) => prevStep - 1);

    /*
 //animation
 const currentCard = document.querySelector(`#${currentCardData.unicName}`);
  if (step > 0 && currentCard) {
    currentCard.classList.add('disappearLeft');
   setTimeout(() => {
      setStep(prevStep => prevStep - 1);
    }, 300); 
  }*/
  }
  function pick(id) {
    for (let i = 0; i < tutorialData.length; i++) {
      if (i === id) {
        step = id;
        setStep(step);
      }
    }
  }

  return (
    <main>
      <Card
        title={currentCardData.title}
        description={currentCardData.description}
        image={currentCardData.image}
        bgColor={currentCardData.bgColor}
        unicName={currentCardData.unicName}
        step={step}
        dataLength={tutorialData.length}
        nextStep={nextStep}
        prevStep={prevStep}
      >
        <Indicator
          data={tutorialData}
          step={step}
          dataLength={tutorialData.length}
          pick={pick}
        />
      </Card>
    </main>
  );
}

export default App;
