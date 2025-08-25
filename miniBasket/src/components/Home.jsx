import { useNavigate } from "react-router-dom"


export default function Home() {
   const nav = useNavigate()
    return(
         <>

          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary mx-5 mt-5" onClick={() => nav('/product')}>View Product</button>
            </div>
          </>
    )
}
