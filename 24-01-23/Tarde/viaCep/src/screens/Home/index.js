
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import {BoxInput} from '../../components/BoxInput/index'
import { useState } from "react";

export function Home() {
    const[cep, setCep] = useState('000');
    const[logradouro, setLogradouro] = useState('000');
    const[bairro, setBairro] = useState('000');
    const[cidade, setCidade] = useState('000');
    const[estado, setEstado] = useState('000');
    const[uf, setUf] = useState('000');
    
    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                textLabel="informar CEP"
                    placeholder='Cep...'
                    editable={true}
                    keyType='numeric'
                    maxLength={9}
                    fieldValue={cep}
                    onChangeText={(tx)=>{setCep(tx)}}
                />
                <BoxInput
                    textLabel="Logradouro"
                    editable={true}
                    placeholder='Logradouro...'
                    fieldValue={logradouro}
                    onChangeText={(tx)=> {setLogradouro(tx)}} //tx = evento de mudar o texto
                />
                <BoxInput
                textLabel="Bairro"
                    placeholder='Bairro...'
                    maxLength={9}
                    editable={true}
                    fieldWidth={100}
                    fieldValue={bairro}
                    onChangeText={(tx)=> {setBairro(tx)}}
                />
                <BoxInput
                textLabel="Cidade"
                    placeholder='Cidade...'
                    keyType='numeric'
                    editable={true}
                    maxLength={9}
                    fieldWidth={100}
                    fieldValue={cidade}
                    onChangeText={(tx)=>{setCidade(tx)}}
                />

                <ContainerInput>
                <BoxInput
                textLabel="Estado"
                    placeholder='Estado...'
                    keyType='numeric'
                    maxLength={9}
                    fieldWidth={60}
                    editable={true}
                    fieldValue={estado}
                    onChangeText={(tx)=>{setEstado(tx)}}
                />
                <BoxInput
                textLabel="UF"
                    placeholder='UF...'
                    keyType='numeric'
                    maxLength={9}
                    fieldWidth={30}
                    fieldValue={uf}
                    editable={true}
                    onChangeText={(tx)=>{setUf(tx)}}
                />
                </ContainerInput>
            </ContainerForm>
        </ScrollForm>
    )
}