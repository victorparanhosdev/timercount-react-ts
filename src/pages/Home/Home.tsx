
import { useState, useEffect, ChangeEvent } from 'react';
import {Container, Input, TimerDisplay} from './style'
import {format} from 'date-fns'
import { ptBR } from 'date-fns/locale';

export function Home(){
    const [seconds, setSeconds] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(secondss=> secondss - 1);
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [seconds]);
  
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
    };
  
    const startTimer = () => {
      const inputSeconds = parseInt(inputValue, 10);
      if (!isNaN(inputSeconds) && inputSeconds > 0) {
        setSeconds(inputSeconds);
      }
    };

    const dataFormatada = format(new Date(), "'Dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm:ss", {locale: ptBR});
    console.log(dataFormatada);

    return(
        <Container>
        <Input
          type="number"
          placeholder="Digite os segundos"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={startTimer}>Iniciar Contagem</button>
        <TimerDisplay>
          {Math.floor(seconds / 60)}:{(seconds % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}
        </TimerDisplay>
      </Container>
    )
}