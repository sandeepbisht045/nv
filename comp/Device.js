
import React from 'react'
import { Text,View ,Image} from 'react-native'
import Ai from "../assets/ai.svg"
import Play from "../assets/play.svg"
import Shield from "../assets/shield.svg"
import Accordion from "@gapur/react-native-accordion";
import Setting from "../assets/settings.svg"
import Camera from "../assets/camera.svg"
import Addgrey from "../assets/addgrey.svg"




export const Device=()=>{

return(
<>
<Accordion
  showButton
  buttonStyle={{left:140,top:-35}}
  style={{elevation:1,marginLeft:25,width:360}}
  renderHeader={() => <>
 <View style={{display:"flex",flexDirection:"row"}}>
    <Image style={{borderRadius:19,width:70,height:70}} source={require("../assets/qr.png")} />
   <Text style={{fontFamily:"Poppins-Medium",color:"black",fontWeight:"bold",top:20}}>New room</Text>
   <Camera style={{top:40,left:-64}}/>
   <Text style={{top:43,left:-59}}>2</Text>
   <Setting style={{top:30,left:70}}/>
    <View style={{}}>
     
    </View>
  </View>
  </>}>
      <View style={{borderWidth:1,borderColor:"rgba(238,238,228,0.6)",height:1,width:357,left:-15}}></View>
     <View style={{elevation:1,display:"flex",flexDirection:"row", marginTop:20}}>
        <View style={{borderRadius:10,borderColor:"rgba(11,12,12,0.1)",borderWidth:1,padding:10,
        minWidth:150,height:130}}>
        <Text style={{color:"black",fontFamily:"Poppins-Medium",fontWeight:"bold"
        ,maxWidth:80}}>Dev Version Test </Text>
        <Text style={{color:"green",fontFamily:"Poppins-Medium"}}>Online
        </Text>
           <Text style={{left:105,top:-50}}>
              <Setting style={{}}/>
              </Text>

              <View style={{display:"flex",flexDirection:"row",backgroundColor:"rgba(242, 242, 242,1)"
              ,bottom:20,borderWidth:1,borderColor:"rgba(241, 250, 255,0.1)",borderRadius:10,marginBottom:20,
              marginTop:10,minHeight:45,maxHeight:45}}>
              <Ai style={{marginRight:20,marginLeft:8,marginTop:15}}/>
              <Shield style={{marginTop:10,marginRight:20}}/>
               <Play style={{marginTop:15}}/>
               
              </View>
        </View>
              {/* --------------------------------- */}
              <View style={{borderRadius:10,borderColor:"rgba(11,12,12,0.1)",borderWidth:1,padding:10,
        minWidth:150,height:130,left:5}}>
        <Text style={{color:"black",fontFamily:"Poppins-Medium",fontWeight:"bold"
        ,maxWidth:80}}>Dev Version Test </Text>
        <Text style={{color:"green",fontFamily:"Poppins-Medium"}}>Online
        </Text>
           <Text style={{left:105,top:-50}}>
              <Setting style={{}}/>
              </Text>

              <View style={{display:"flex",flexDirection:"row",backgroundColor:"rgba(242, 242, 242,1)"
              ,bottom:20,borderWidth:1,borderColor:"rgba(241, 250, 255,0.1)",borderRadius:10,marginBottom:20,
              marginTop:10,minHeight:45,maxHeight:45}}>
              <Ai style={{marginRight:20,marginLeft:8,marginTop:15}}/>
              <Shield style={{marginTop:10,marginRight:20}}/>
               <Play style={{marginTop:15}}/>
               
              </View>
        </View>
              {/* ------------------------------------- */}

          {/* --------------------------------- */}
       

     </View>
     <View style={{borderRadius:10,borderColor:"rgba(11,12,12,0.1)",borderWidth:1,padding:10,
        width:160,height:130,left:70,marginTop:8,alignItems:"center",maxHeight:90}}>
     <Addgrey style={{alignItems:"center",top:10}}/>
     <Text style={{fontFamily:"Poppins-Medium",top:20,fontWeight:"bold"}}>Add Camera</Text>
        </View>
              {/* ------------------------------------- */}

</Accordion>








</>



)



}
