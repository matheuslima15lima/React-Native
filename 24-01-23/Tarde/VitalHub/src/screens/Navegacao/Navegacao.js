import { Button, View } from "react-native"

export const Navegacao = ({navigation})=>{
    return(
        <View>
            <Button 
                title="Login" 
                onPress={()=> navigation.navigate("Login")}         
            />
            <Button 
                title="Recuperar Senha" 
                onPress={()=> navigation.navigate("Recuperar Senha")}         
            />
            <Button 
                title="Verifique seu E-mail" 
                onPress={()=> navigation.navigate("Verifique seu E-mail")}         
            />

            <Button
                    title="Redefinir Senha" 
                    onPress={()=> navigation.navigate("Redefinir Senha")}    
            />
            <Button
                    title="Criar conta" 
                    onPress={()=> navigation.navigate("Criar conta")}    
            />
            <Button
                    title="Pagina de perfil" 
                    onPress={()=> navigation.navigate("Pagina de perfil")}    
            />
            <Button
                    title="Prontuario" 
                    onPress={()=> navigation.navigate("Prontuario")}    
            />
            <Button
                    title="Pagina Home" 
                    onPress={()=> navigation.navigate("Pagina Home")}    
            />
            <Button
                    title="Pagina do paciente" 
                    onPress={()=> navigation.navigate("Pagina do paciente")}    
            />
            <Button
                    title="Selecionar Clinica" 
                    onPress={()=> navigation.navigate("Selecionar Clinica")}    
            />
            <Button
                    title="Selecionar Medico" 
                    onPress={()=> navigation.navigate("Selecionar Medico")}    
            />
        </View>
    )
}