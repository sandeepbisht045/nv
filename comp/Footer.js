import React from 'react'
import { Text,View } from 'react-native'
import Setting from "../assets/settings.svg"
import Record from "../assets/record.svg"
import Shield from "../assets/shield.svg"
import Prewhite from "../assets/prewhite.svg"
import Bell from "../assets/bell.svg"
import Gallery from "../assets/gallery.svg"



export const Footer=()=>{

return(
<>

<View style={{display:"flex",flexDirection:"row",paddingTop:15}}>

<Shield style={{marginLeft:20}}/>
<Gallery style={{marginLeft:50}}/>
<Record style={{marginLeft:40,backgroundColor:"#F86602",borderRadius:90,top:-35,padding:18,}}/>
<Bell style={{marginLeft:60}}/>
<Prewhite style={{marginLeft:60}}/>

</View>

</>



)

}