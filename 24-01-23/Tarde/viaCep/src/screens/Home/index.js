
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import {BoxInput} from '../../components/BoxInput/index'
import { useEffect, useState } from "react";
import axios from "axios";
import reactNativeAxios from 'react-native'

export function Home() {
   
    const[cep, setCep] = useState('');
    const[logradouro, setLogradouro] = useState('');
    const[bairro, setBairro] = useState('');
    const[cidade, setCidade] = useState('');
    const[estado, setEstado] = useState('');
    const[uf, setUf] = useState('');

    useEffect(()=>{
        async function buscarCep() {
            try {
                if (cep != '' && cep.length === 8) {
                    const endereco = await reactNativeAxios.get(`https://brasilaberto.com/api/v1/zipcode/${cep}` )

                    if (endereco.error){
                        return;
                    }
    
                    
                    setBairro(endereco.data.result.district);
                    setLogradouro(endereco.data.result.street);
                    setCidade(endereco.data.result.city);
                    setEstado(endereco.data.result.state);
                    setUf(endereco.data.result.stateShortname)
                    
                    
                }

           
            } catch (error) {
                
            }
            
        }
        buscarCep();
    },[cep]);
    
    
    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                textLabel="informar CEP"
                    placeholder='Cep...'
                    editable={true}
                   
                    maxLength={9}
                    fieldValue={cep}
                    onChangeText={(tx)=>{setCep(tx)}}
                    onBlur={()=>{buscarCep}}
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
                    maxLength={200}
                    editable={true}
                    fieldWidth={100}
                    fieldValue={bairro}
                    onChangeText={(tx)=> {setBairro(tx)}}
                />
                <BoxInput
                textLabel="Cidade"
                    placeholder='Cidade...'
                   
                    editable={true}
                    maxLength={200}
                    fieldWidth={100}
                    fieldValue={cidade}
                    onChangeText={(tx)=>{setCidade(tx)}}
                />

                <ContainerInput>
                <BoxInput
                textLabel="Estado"
                    placeholder='Estado...'
                   
                    maxLength={9}
                    fieldWidth={60}
                    editable={true}
                    fieldValue={estado}
                    onChangeText={(tx)=>{setEstado(tx)}}
                />
                <BoxInput
                textLabel="UF"
                    placeholder='UF...'
                  
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