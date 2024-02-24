
import './home.css'
import ProductCard from '../../components/ProductCard'
import UseFetch from '../../hooks/UseFetch'

function Home() {
  
  const {data:tarifler,isloading,error} = UseFetch("http://localhost:3000/tarifler")
 

  return (
   <div className="row mt-3">
    {isloading && <div className='alert alert-warning'>Yükleniyor...</div>}
    {error && <div className='alert alert-danger'>{error}</div>}
    
    {
      tarifler && tarifler.map(tarif => (
       <ProductCard tarif={tarif} key={tarif.id}/>
      ))
    }
   </div>
  )
}

export default Home