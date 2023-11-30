
import { useState, useEffect, useReducer } from 'react';
import { Container } from './style'
import { differenceInSeconds } from 'date-fns'

import { Plus } from "@phosphor-icons/react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

type newCicleProps = zod.infer<typeof newCicle>

interface PropsTimer {
  id: string,
  numeroplay: number,
  startNumber: Date
}
const newCicle = zod.object({
  numeroplay: zod.number().min(1, 'minimo 1').max(60, 'o maximo é 60')
})



export function Home() {
  const [dataTime, dispatch] = useReducer((state: PropsTimer[], action: any)=> {

   if(action.type === "ADD_NEW_CICLE"){
    return [...state, action.payload.DadosTimer]
   }

      return state
  },[])


  const [isActiveId, setActiveId] = useState<string | null>(null)
  const [amouteSecondsPassed, setAmouteSecondsPassed] = useState(0)

  const { register, watch, reset, handleSubmit, formState: { errors } } = useForm<newCicleProps>({
    resolver: zodResolver(newCicle),
    defaultValues: {
      numeroplay: 0
    }
  })



  function addDataForm(data: newCicleProps) {
    const DadosTimer = {
      id: String(new Date().getTime()),
      numeroplay: data.numeroplay,
      startNumber: new Date(),
    }

    setActiveId(DadosTimer.id)
    setAmouteSecondsPassed(0)

    dispatch({
      type: 'ADD_NEW_CICLE',
      payload: {
        DadosTimer
      }

    })

    reset()
  }

  const isSubmitDisabled = watch('numeroplay')
  const ActiveNumber = dataTime.find(dadostimer => dadostimer.id === isActiveId)

  const dataSeconds = ActiveNumber ? ActiveNumber.numeroplay * 60 : 0
  const currentSeconds = ActiveNumber ? dataSeconds - amouteSecondsPassed : 0

  const minutesAmouts = Math.floor(currentSeconds / 60)
  const secondsAmout = currentSeconds % 60


  const minutes = String(minutesAmouts).padStart(2, '0')
  const seconds = String(secondsAmout).padStart(2, '0')




  useEffect(() => {


    let interval: number

    if (ActiveNumber) {

      interval = setInterval(() => {
        const CounterSeconds = differenceInSeconds(new Date(), ActiveNumber.startNumber)
        setAmouteSecondsPassed(CounterSeconds)
        if (CounterSeconds === dataSeconds) {
          setActiveId(null)
          clearInterval(interval)

        }


      }, 1000)

    }

    return () => {

      clearInterval(interval)

    }
  }, [ActiveNumber])



  useEffect(() => {
    document.title = `CountTimer ${minutes}:${seconds}`
  }, [minutes, seconds, ActiveNumber])

  return (
    <Container>
      <form onSubmit={handleSubmit(addDataForm)}>
        <div>
          <label htmlFor="box-number">Cronometro</label>
          <input min={0} type="number" id="box-number" {...register("numeroplay", { valueAsNumber: true })} />
        </div>
        {errors.numeroplay && <p>{errors.numeroplay.message}</p>}
        <button disabled={!isSubmitDisabled || isSubmitDisabled < 1} type="submit"><Plus size={24} />  Adicionar</button>

      </form>

      <div>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
    </Container>
  )
}