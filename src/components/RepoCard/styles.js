import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        // marginTop:20,
        marginBottom:16,
        backgroundColor:'#fff',
        // flexDirection:'row',
        // alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        borderColor:"#e7e7e7",
        paddingHorizontal:5,
        paddingVertical:14,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    contentContainer:{
flexDirection:'row',
alignItems:"center"
    },
    infoCardsContainer:{
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center'
    },
    image:{
        borderRadius:8,
        backgroundColor:'#000000',
        width:60,
        height:60
    },
    rightView:{
        marginStart:8,
    },
    title:{
        fontSize:20,
        lineHeight:32
    },
    desc:{
        fontSize:12,
        lineHeight:30
    }
});