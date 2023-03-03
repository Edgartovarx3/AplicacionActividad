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
 
        <Text style={styles.Titulos} >MATERIAS</Text>
        <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria(newText)}
        placeholder={materia1}
        editable={isEditable}
        />
          <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria2(newText)}
        placeholder={materia2}
        editable={isEditable}
        />
          <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria3(newText)}
        placeholder={materia3}
        editable={isEditable}
        />
        
        
        
        <Button 
          style={styles.Botones}
          onPress={()=>{
          setActivo(false);
          setIsEditable(false);
          
        }}
        disabled={!activo}
        title={activo ? "Cargar Materias" :"Materias Cargadas" }
       
      />
      
        <Button  
          style={styles.Botones} 
          onPress={()=>{
          setActivo(true);
          setIsEditable(true);
          
        }}
        disabled={activo}
        title="Editar"
        
        

        
     
      />
     
     {!activo ? <Text style={styles.Titulos}> Materias Cargadas: {<Text style={styles.Materias}> {"\n"+materia1+" \n"+materia2+" \n"+ materia3}</Text>} </Text>:"" }
     
       
      
      <StatusBar style="auto" />
    </View>
  );
}

<Text style={{ fontFamily: 'Yatra-One', fontSize: 27 }}>Yatra-One</Text>

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
    letterSpacing:2.50,
    fontSize:14,
    borderRadius:10,
    padding:10,
    margin:10
    

  },
  Botones:{
    fontSize:14,
    borderRadius:10,
    padding:10,
    margin:10

  },
  Titulos:{
    fontFamily:'Yatra-One',
    fontSize: 27,
   fontWeight:'bold',
   height:80

  },
  Materias:{
    fontFamily:'apitalize',
    fontSize:18,
    fontWeight:'normal',
    height:40,
    paddingTop:30,
    marginTop:30

  }
});
