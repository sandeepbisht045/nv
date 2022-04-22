import React from 'react'
import { View,Text,FlatList,TouchableOpacity } from 'react-native'
import Accordion from "@gapur/react-native-accordion";
// import { Accordion } from '@ant-design/react-native';
import Setting from "../assets/settings.svg"
import Menu from "../assets/menu.svg"
import Search from "../assets/search.svg"
import Broken from "../assets/broken.svg"
import Record from "../assets/record.svg"
import Shield from "../assets/shield.svg"
import Prewhite from "../assets/prewhite.svg"
import Bell from "../assets/bell.svg"
import Gallery from "../assets/gallery.svg"
import Icon from "../assets/icon.svg"
import Camera from "../assets/camera.svg"
import Expand from "../assets/expand.svg"
 
export const List=()=>{
return(
<>


   {/* starting rendering items */}
   <View style={{ borderWidth: 3,
              elevation: 4,
              marginHorizontal: 35,
              marginVertical:15,
              backgroundColor: "white",
              borderRadius: 15,
              borderColor: "white",
              marginBottom: 30,
              height: 100}} 
>

<View style={{display:"flex",flexDirection:"row"}}>
<Icon style={{marginHorizontal:10,marginVertical:20}}/>
<Text style={{marginTop:30,fontFamily:"Poppins-Medium",color:"black",fontWeight:"bold"}}>Room New</Text>

<Camera style={{marginTop:50,marginLeft:-69}}/>
<Setting style={{marginLeft:125,marginTop:35}}/>
<Text style={{marginTop:54,fontFamily:"Poppins-Medium",marginLeft:-143}}>2</Text>
<Expand style={{marginTop:35,marginLeft:155}}/>

</View>

   </View>





</>


)

}