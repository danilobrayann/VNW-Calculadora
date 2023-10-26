import React, { useState } from "react"
import { Main, H1, Input, Button, P, H2 } from '../page/styles'
export default function Home() {

    const [primeiroValor, setPrimeiroValor] = useState()
    const [SegundoValor, setSegundoValor] = useState()
    const [resultado, setresultado] = useState()

    const CapturandoPrimeiroValor = (event) => {
        setPrimeiroValor(Number(event.target.value))

    }

    const CapturandoSegundoValor = (event) => {
        setSegundoValor(Number(event.target.value))

    }

    const soma = () => {
        setresultado(primeiroValor + SegundoValor)
    }

    const Subitrair = () => {
        setresultado(primeiroValor - SegundoValor)
    }

    const Multiplicar = () => {
        setresultado(primeiroValor * SegundoValor)
    }

    const Dividir = () => {
        setresultado(primeiroValor / SegundoValor)
    }



    return (
        <>
            <Main>

                <H1>Calculadora</H1>
                <Input onChange={CapturandoPrimeiroValor} type="text" />
                <Input onChange={CapturandoSegundoValor} type="text" />
                <div>
                    <Button onClick={soma}>+</Button>
                    <Button onClick={Subitrair}>-</Button>
                    <Button onClick={Multiplicar}>*</Button>
                    <Button onClick={Dividir}>/</Button>
                </div>
                <P>Resultado</P>
                <H2>{resultado}</H2>

            </Main>
        </>
    )
}