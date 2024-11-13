import { createContext, useState } from "react";
import run from "../Config/gemini";

export const Context = createContext();

const ContextProvider =(props)=>{

    const[input,setInput]=useState("");
    const[recent,setRecent] =useState("");
    const[prev,setPrev]= useState([]);
    const[result,setResult]=useState(false);
    const[loading,setLoading] =useState(false);
    const[resultData,setResultData]=useState("");

    const delayPara =(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        },75*index)
    }
    const newChat =() => {
        setLoading(false);
        setResult(false);
    }

    const onSent = async (prompt)=>{
        
            setResultData("");
            setLoading(true);
            setResult(true);
            let response;
            if(prompt !== undefined){
                response = await run(prompt);
                setRecent(prompt);
            }
            else{
                setPrev(prev=>[...prev,input]);
                setRecent(input);
                response =await run(input);
            }
            setRecent(input);
            setPrev(prev=>[...prev,input])
             
            let responseArray =response.split("**");
            let newResponse;
            for(let i=0; i<responseArray.length;i++){
                if(i===0 || i%2!==1){
                    newResponse +=  responseArray[i] ;   
                }
                else{
                    newResponse += "<b>" + responseArray[i] +"</b>";
                }
            }
            let newResponse2 = newResponse.split("*").join("</br>")
           let newResponseArray = newResponse2.split(" ");
           for(let i=0 ;i<newResponseArray.length;i++){
            const nextWord =newResponseArray[i];
            delayPara(i,nextWord+" ");
           }
           setLoading(false);
           setInput("");
    }
    
        const contextValue ={
            prev,
            setPrev,
            onSent,
            setRecent,
            recent,
            result,
            loading,
            resultData,
            input,
            setInput,
            newChat
        }
        return(
            <Context.Provider value={contextValue}>
                {props.children}
            </Context.Provider>
        )
}

export default ContextProvider;