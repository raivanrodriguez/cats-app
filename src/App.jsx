import { useEffect, useState } from "react"
import './App.css'

const CATRANDOM_FACT = 'https://catfact.ninja/fact'
const CATRANDOM_IMG = 'https://cataas.com/'


export function App (){

   const  [fact, setfact] = useState()
   const [imageUrl, setimageUrl] = useState()

   useEffect (() => {
    fetch(CATRANDOM_FACT).then(res => res.json())
    .then(data => {
        const {fact} = data
        setfact(fact)
        console.log(data)
        
        
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)
        
        const cat = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
       

       fetch(cat).then( res => res).then( response => {const {url} =  response 
        setimageUrl(url)
        console.log(response)
    
    
    
    }
    )
        
        
        
        
        })

   },[])


    return (<main >
        <h1>Gatitos Para Belén</h1>
        <p>{fact}</p>
        <section></section>
        <img src={`${imageUrl}`}alt="asassasassas" />
        </main>)

}