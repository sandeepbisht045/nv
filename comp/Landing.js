import React from 'react'
import { View,Text,FlatList,TouchableOpacity,ScrollView,Image} from 'react-native'
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
import Ai from "../assets/ai.svg"
import Play from "../assets/play.svg"
import {Device} from "./Device.js"
import {List} from "./List.js"
import {Footer} from "./Footer.js"




 export const Landing=()=>{
const rooms=[
  {key:1},{key:2},{key:3},{key:4}
]
return(
<>
<View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20
          
        }}>
           <TouchableOpacity style={{marginHorizontal:8,justifyContent:"center"}}>
              <Menu/>
           </TouchableOpacity>

      <View style={{flexDirection:"row",marginHorizontal:8}}>
         <TouchableOpacity style={{marginHorizontal:10}}>
            <Search/>
         </TouchableOpacity>

         <TouchableOpacity>
            <Broken/>
         </TouchableOpacity>

      </View>
      

   </View>

   <View>
   <View style={{paddingHorizontal:9,marginHorizontal:15}}>
      <Text style={{fontFamily:"Poppins-Medium",color:"#8a8a8a",fontSize:19}}>
         Hey Iclear test user
      </Text>
      <Text style={{fontFamily:"Poppins-Medium",color:"#000",fontSize:27}}>
         Welcome To AI World
      </Text>
      </View>
   </View>
   <ScrollView>

   {/* <List/>
   <List/>
   <List/>
   <List/>
   <List/>
   <List/>  */}


 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>
 <Device/>

  


   </ScrollView>
<Footer/>




</>)}
