import { createContext } from "react"
import { useContext } from "react"
import { useState,useEffect } from "react"
const DetailsContext = createContext();

function DetailsProvider({children}){
    const [allProducts,setAllProducts] = useState([])
  const [price,setPrice] = useState(0)
  const [isError,setIsError] = useState(false)
  const [cart,setCart]= useState([])
  const [isPayment,setIsPayment] = useState(false)
  const [balanceAmount,setBalanceAmount] = useState(1000)
  const [userDetails,setUserDetails] = useState(()=>{
    const savedItems = localStorage.getItem('users');
    return savedItems ? JSON.parse(savedItems) : [];
  }
  )
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(userDetails))
  },[userDetails])
  const [isLogged,setIsLogged] = useState(false)
  
  const [userName,setUsername] = useState("")
  const [passWord,setPassWord] = useState("")
  const [isLoading,setIsLoading] = useState(false)


  const [filteredProducts,setFilteredProducts] = useState([])
  const [category,setCategory] = useState("")
  useEffect(()=>{
    async function getAllProducts(){
      setIsLoading(true)
      
      try{
      const res = await fetch(import.meta.env.VITE_API_SHOPPING);
      const data = await res.json()
      
      setAllProducts(data)
      }catch(err){
        setIsError(true)
        console.log(err.message)
      }finally{
        setIsLoading(false)
      }
      
    }
    getAllProducts()
  },[])
  const [wishList,setWishList] = useState(()=>{
    const savedItems = localStorage.getItem('wishItem');
    
    return savedItems ? JSON.parse(savedItems) : [];
  })

  useEffect(()=>{
    localStorage.setItem('wishItem',JSON.stringify(wishList))
  },[wishList])
  
  const [rememberUser,setRememberUser] = useState(()=>{
    const savedItems = localStorage.getItem('rememberMe');
    return savedItems ? JSON.parse(savedItems) : {};
  })

  

  useEffect(()=>{
    localStorage.setItem('rememberMe',JSON.stringify(rememberUser))
  },[rememberUser])

  return(
    <DetailsContext.Provider  value={{
        allProducts,setAllProducts,price,setPrice,isError,setIsError,cart,setCart,isPayment,setIsPayment,balanceAmount,setBalanceAmount,userDetails,setUserDetails,isLogged,setIsLogged,userName,setUsername,passWord,setPassWord,isLoading,setIsLoading,filteredProducts,setFilteredProducts,category,setCategory,wishList,setWishList,rememberUser,setRememberUser
    }}>
        {children}
    </DetailsContext.Provider>
  )
}

function useDetails(){
    const context = useContext(DetailsContext);
    if(!context){
        throw new Error("useDetails must be used inside DetailsProvider!")
    }
    return context
}

export {DetailsProvider,useDetails}