import React from "react";
import { View,Text,Image } from 'react-native'
// import VectorImage from 'react-native-vector-image';

export const Subscribe=()=>
{

return <>
<View>
   <Image source={require("../assets/pic.png")} style={{left:120,width:150,height:100,top:60}} />
  <Text style={{top:76,left:80,fontWeight: "bold", fontFamily: "Poppins-Medium", fontSize: 26,color:"black"}}>
      Welcome To AI World
  </Text>
  <Text style={{top:85,left:95, fontFamily: "Poppins-Medium"}}>
      first subscribe your cameras
  </Text>
  <Text style={{top:135,left:125, fontFamily: "Poppins-Medium",fontSize:15,color:"black",fontWeight:"bold"}}>
      What we are offering
  </Text>

  <Image style={{height:20,width:20,left:127,top:155}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-g-ymvgE2KoBKoBd_SFz2pbnHwCJP18czP2jXrClm7zY8VNUbCKZxHRbnSXo3hKBGtc&usqp=CAU"}}/>
<Text style={{position:"relative",left:90,top:160,color:"black",fontFamily: "Poppins-Medium"}}>camera Tampering
{/* <Image style={{height:20,width:20,left:127,top:155}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-g-ymvgE2KoBKoBd_SFz2pbnHwCJP18czP2jXrClm7zY8VNUbCKZxHRbnSXo3hKBGtc&usqp=CAU"}}/> */}

</Text>



</View>



</>
}




