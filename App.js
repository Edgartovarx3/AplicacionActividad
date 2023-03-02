import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const getDatosAlumno=(nombre,carrera,especialidad)=>{
    return nombre+" "+carrera+" "+" "+especialidad;
  }
   
  const [materia,setMateria]=useState("Inscribirse a la materia");
  const [activo,setActivo]=useState(true);

  const Materias =(props)=>{
    return(
      <View> <Text>{props.nombre}</Text> </View>
    );
  }
 
  return (
    Ejercicio1()
    /*
    <View style={styles.container}>
      <Text>Hola {getDatosAlumno("Edgar garibay", "ITICS","FullStack")}</Text>
        <Materias nombre={materia}/>
      
        <Text >MATERIAS</Text>
        <Materias nombre="Aplicaciones Hibridas"/>
        <Materias nombre="Administracion de redes"/>
        <Materias nombre="Arquitectura de servicios"/>

        <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria(newText)}
        defaultValue={materia}
        />

        <Button onPress={()=>{
          setActivo(false);
        }}
        disabled={!activo}
        title={activo ? "Click..." :"No activo"}
      />
      <StatusBar style="auto" />
    </View>
 */ ); 
}

function Ejercicio1(){
 
  const getMateriasCargadas=(Materia1,materia2,materia3)=>{
    return Materia1+" "+materia2+" "+" "+materia3;
  }
  const [materia1,setMateria]=useState("Inscribirse a la materia");
  const [materia2,setMateria2]=useState("Inscribirse a la materia");
  const [materia3,setMateria3]=useState("Inscribirse a la materia");
  const [activo,setActivo]=useState(true);
  const [isEditable, setIsEditable] = useState(true);
  

  const Materias =(props)=>{
    return(
      <View> <Text>{props.materia1 + props.materia2 +  props.materia3}</Text> </View>
    );
  }
  return (
    <View style={styles.container}>
 
        <Text >MATERIAS</Text>
        <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria(newText)}
        defaultValue={materia1}
        editable={isEditable}
        />
          <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria2(newText)}
        defaultValue={materia2}
        editable={isEditable}
        />
          <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria3(newText)}
        defaultValue={materia3}
        editable={isEditable}
        />
        
        
        
        <Button onPress={()=>{
          setActivo(false);
          setIsEditable(false);
          
        }}
        disabled={!activo}
        title={activo ? "Cargar Materias" :"Materias Cargadas" }
      />
      
        <Button onPress={()=>{
          setActivo(true);
          setIsEditable(true);
          
        }}
        disabled={activo}
        title={!activo ? "Editar" :"Editar"}
        
        

        

      />
     
     {!activo ? <Text> {"Materias Cargadas: \n"+materia1+" \n"+materia2+" \n"+ materia3} </Text>:"" }
      
       
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto:{
    height:40,
    borderColor:"gray",
    borderWidth:1,
    minWidth:200,
  },
});
