import React from "react";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import { View,Text,FlatList,Image,ScrollView,TouchableOpacity,Separator} from 'react-native'
import Accordion from "@gapur/react-native-accordion";


export const Home=()=>{
  const arr = [{ camid: 1, camname: "New 1" }, { camid: 2, camname: "New 2" }, { camid: 3, camname: "New 3"
 },{ camid: 4, camname: "New 4" }]


return <>
<View >

<Image style={{width:50,height:30,color:"black",margin:12}} source={{uri: 'https://cdn.icon-icons.com/icons2/2582/PNG/512/menu_icon_153999.png'}}/>
<Text style={{bottom:40,left:340}}>
<Image style={{width:21,height:20}} source={{uri:'https://cdn.icon-icons.com/icons2/2551/PNG/512/search_icon_152764.png'}}/>
<Image style={{width:20,height:20}} source={{uri:'data:image/png;base64,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'}}/>

</Text>




 
<Text style={{ marginLeft: 20, marginTop: 30, fontFamily: "Poppins-Medium", fontSize: 20, color: "#8a8a8a" }} >
                Hey Iclear test user ,
            </Text>

            <Text style={{  fontWeight:'bold',left: 60, marginBottom: 12, fontFamily: "Poppins-Medium", 
            fontSize: 20,color:"black"
          }} >
                Welcome To AI World
            </Text>

            <FlatList style={{margin:30}}
            data={arr}
            renderItem={
              ({item})=>
              <Text style={{width: '100%', borderColor: "rgba(0,0,0,0.1)", justifyContent: "center"
              , fontWeight: "bold", padding: 30, borderRadius: 10, marginBottom: 20 ,
              borderWidth:1
      }}>
        <View style={{}}>

 <Image style={{width:40,height:40 }} source={{uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}/>
        </View>
        <Text style={{position:"relative",color:"black",fontWeight:"bold"}}>
              <Image style={{width:40,height:40}} source={{uri: 'https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/'}}/>
              {item.camname} 
              <Image style={{width:40,height:40}} source={{uri: 'https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/'}}/>
              <Image style={{left:30,width:15,height:15}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png'}}/>
              </Text>
              <Text>
              <Image style={{width:40,height:40}} source={{uri: 'https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/'}}/>

              <Accordion headerTitle="v" style={{marginTop:20}}>
  <View style={{borderColor:"rgba(0,0,0,0.1)",borderWidth:1,borderRadius:8,padding:10}}>
  {/* <Image style={{width:13,height:13}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/60/60781.png'}}/> */}
   
    <Text style={{fontWeight:"bold",color:"black"}}>Dev Version Test
    
    <Image style={{width:10,height:10}} source={{uri: 'https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/'}}/>

    <Image style={{left:30,width:15,height:15}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/126/126472.png'}}/>


    </Text>
    
    <Text style={{color:"#36a832",fontFamily: "Poppins-Medium",fontWeight:"bold",fontSize:12}}>Online
    </Text>
    <Text> 
    <Text>
      <Image style={{height:15,width:15}} source={{uri:"https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/"}}/>
    <Image style={{width:13,height:13}} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png'}}/>
    </Text>
    <Text>
    <Image style={{height:15,width:15}} source={{uri:"https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/"}}/>
    <Image style={{height:18,width:18}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPub1IjG0EaVajRxgBPuPHh_bet-mnpf4Pg&usqp=CAU"}}/>
    </Text>

    <Text>
    <Image style={{height:15,width:15}} source={{uri:"https://pixabay.com/vectors/gear-mechanics-settings-icon-1119298/"}}/>
    <Image style={{height:15,width:15}} source={{uri:"https://toppng.com/uploads/preview/lay-icon-play-icon-11563266312mklxafh8gy.png"}}/>
    </Text>
    </Text>


    
  </View>
  <View style={{borderWidth:1,borderColor:"rgba(0,0,0,0.1)",borderRadius:9,height:80,marginTop:10}}>
  <Image style={{width:20,height:20,left:50,top:28}} source={{uri: 'https://www.kindpng.com/picc/m/441-4414019_file-argument-for-svg-add-icons-vector-svg.png'}}/>
                <Text style={{left:24,top:33,fontFamily: "Poppins-Medium"}}>Add Camera</Text>
                 </View>
</Accordion>
              </Text>
             
            
              </Text>
              
            }
            
            />
         

           
    <View style={{flexDirection:"row",bottom:200}}>    
   {/* <Text  style={{marginRight:22,backgroundColor:"grey",borderRadius:4,padding:5,fontWeight:"bold"}}>Alarm</Text> */}
   <Image style={{height:30,width:30,left:50}} source={{uri:"https://icons-for-free.com/download-icon-bx+check+shield-1325051854507277842_512.png"}}/>
   <Image style={{height:35,width:35,left:80}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQg2_FishDBNO_sw7556JXH5tMHdgBKnUFw&usqp=CAU"}}/>
   <Image style={{height:30,width:30,left:110,bottom:20,backgroundColor:"#ed582b",borderRadius:12}} source={{uri:"https://cdn.icon-icons.com/icons2/2645/PNG/512/camera_video_icon_160318.png"}}/>
   <Image style={{height:30,width:30,left:140}} source={{uri:"data:image/png;base64,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"}}/>
   <Image source={require("../assets/subs.png")} style={{left:170,width:30,height:23}} />
   {/* <Image style={{height:30,width:30}} source={{uri:"https://cdn.icon-icons.com/icons2/2645/PNG/512/camera_video_icon_160318.png"}}/> */}
   {/* <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}} >Gallery</Text> */}
   {/* <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Home</Text> */}
   {/* <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Notifications</Text> */}
   {/* <Text style={{marginRight:22,backgroundColor:"grey", borderRadius:4,padding:5,fontWeight:"bold"}}>Subscribe</Text> */}
    </View>

     {/* <Footer/> */}
</View>
</>


}

