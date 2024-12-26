lifecycle functions ma njmouch nest3mlouhm maa functional componenet , lezem class, kima zeda constructor wkol

-> solutions : hooks

twali tejm test3mlhm fi funct compo...

///// useState

const [nomvariable, setNomvariable] = useState('initial value mte3 lvariable' exemple 0)

/////

()=> arrow function

/////

<button onClick={()=>setCount(count+1)}

>+w/buttonW

/////////////useEffect:

t3awdhelna 2:

1(componentdidmount----->)

2(componentwillUpdate----->)

-tejm taaml akthr mn 1 useeffect

---->

useEffect(()=>{

},[dependecies])

dependecies ki t7otha fer8a [] yaani 5ademli l useffect mara bark

///// update

useEffect(()=>{

console.log('welcome')

},[count])

kol ma nenzel ala count bch yaawd y5adem el useffect 5atr 7atithelo fl dependecies

//////////////

useEffect(()=>{

}) haka bch te5dm fl update mte3 el zouz count w x mathln wala + w - , yaani ala kol update par defaut bch t5dm

/////// useRef:

const name=useRef()

<input type=text ref={name]/>

print({name.current.value} 



idha nheb nda5l brcha files, nzid multiple

<input type=file multiple ref={image]/>

 print({image.current.files[0]} 

[0] idha andi file wehd bark , 

print({name.current.value} s