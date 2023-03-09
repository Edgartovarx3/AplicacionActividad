import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Button, StyleSheet, Text, TextInput,ScrollView, View, Alert } from 'react-native';


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
    Ejercicio3()
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
 function Ejercicio2(){
 
  const Materias =(props)=>{
    return(
      <View> <Text>{props.nombre}</Text> </View>
    );
  }
  const getDatosAlumno=(nombre,carrera,especialidad)=>{
    return nombre+" "+carrera+" "+" "+especialidad;
  }
   return(
  <ScrollView showVerticalScrollIndicator="true">
      <Text>Hola {getDatosAlumno("Edgar garibay", "ITICS","FullStack")}</Text>
         <Materias nombre={materia}/>
      
        <Text style={styles.texto2} >MATERIAS - Grupo 1</Text>
        <Materias nombre="Aplicaciones Hibridas"/>
        <Materias nombre="Administracion de redes"/>
        <Materias nombre="Arquitectura de servicios"/>

        <Materias nombre="Materia 1"/>
        <Materias nombre="Materia 2"/>
        <Materias nombre="Materia 3"/>
        <Materias nombre="Materia 4"/>
        <Materias nombre="Materia 5"/>
        <Materias nombre="Materia 6"/>
        <Materias nombre="Materia 7"/>
        <Materias nombre="Materia 8"/>
        <Materias nombre="Materia 9"/>
        <Materias nombre="Materia 10"/>
        <Materias nombre="Materia 11"/>

        
      <StatusBar style="auto" />
      
    </ScrollView>
)
}

function Ejercicio3(){

    const materiaData = [
      { key: 'Materia 1' },
      { key: 'Materia 2' },
      { key: 'Materia 3' },
      { key: 'Materia 4' },
      { key: 'Materia 5' },
      { key: 'Materia 6' },
      { key: 'Materia 7' },
      { key: 'Materia 8' },
      { key: 'Materia 9' },
      { key: 'Materia 10' },
    ];
    const [buscarTexto, setBuscarTexto] = useState('');
const [itemResaltado, setItemResaltado] = useState(null);
const Materia = (props) => {
const itemStyle = {
backgroundColor: props.nombre === itemResaltado ? '#efc3e6' : 'transparent',
color: props.nombre === itemResaltado ? 'white' : 'black',
borderColor: '#fb6f92',
borderWidth: 0.7,
margin: 5,
padding: 15,
marginTop: 3
};
return (
  <TouchableOpacity style={itemStyle}>
  <Text>{props.nombre}</Text>
  </TouchableOpacity>
  );
  };
  const handleSearch = () => {
    setItemResaltado(null);
    materiaData.forEach((item) => {
    if (item.key === buscarTexto) {
    setItemResaltado(item.key);
    }
    });
    };
   
    return (
      <View style={styles.container}>
        <Text style={styles.titulodisenio}>Lista de Materias</Text>
        <FlatList
          data={materiaData}
          keyExtractor= {(item) => item.key }

          renderItem={({ item }) => <Materia nombre={item.key} />}
         
          >

            
          </FlatList>
        
        <TextInput
          style= {styles.cajatexto}
          onChangeText={(newText) => setBuscarTexto(newText)}
          placeholder= "Hola"/>

        
        
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
<Text style={styles.buttonText}>Buscar</Text>
</TouchableOpacity>
        
        

       
      </View>
    );
  };
  
 
 



function Ejercicio1(){
 
  const getMateriasCargadas=(Materia1,materia2,materia3)=>{
    return Materia1+" "+materia2+" "+" "+materia3;
  }
  const [Fondo,setFondo]=useState("Inscribirse a la materia");
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
        placeholder={Fondo}
        editable={isEditable}
        />
          <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria2(newText)}
        placeholder={Fondo}
        editable={isEditable}
        />
          <TextInput
        style={styles.cajaTexto}
        onChangeText={(newText)=>setMateria3(newText)}
        placeholder={Fondo}
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
     
     {!activo ? <Text style={styles.Titulos}> Materias Cargadas: {<Text style={styles.Materias} > {materia1+" \n"+materia2+"\n"+ materia3+"\n"}</Text>} </Text>:"" }
     
       
      
      <StatusBar style="auto" />
    </View>
  );
}
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
    fontFamily:'monospace',
    fontSize: 27,
   fontWeight:'bold',
   height:80

  },
  Materias:{
    fontFamily:'sans-serif',
    fontSize:18,
    fontWeight:'normal',
  },
  texto1:{
    marginBottom:5,
  },
  texto2:{
    marginTop:10,
    marginBottom: 10,
    textTransform:"uppercase",
    fontWeight:"bold",
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
