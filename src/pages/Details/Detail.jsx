import  './detail.css'
import { useParams } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
function Detail() {
  const {id} = useParams()
  const url = "http://localhost:3000/tarifler/"+id
  const {data:tarif,isloading,error} = UseFetch(url)
  const {mode,color} = useContext(ThemeContext)
  return (
    <div className={`text-${mode==="dark" ? "light" : "dark"} border-${mode==="dark" ? "light" : "dark"} `}>
      <div className="row mt-3">
        {isloading && <div className='alert alert-warning'>Yükleniyor...</div>}
        {error && <div className='alert alert-danger'>{error}</div>}
      
        {
          tarif && (
            <>
              <div className="col-4">
              <img className='img-fluid rounded' src={`/img/${tarif.resim}`} alt={tarif.baslik} />
              
            
              </div>
              <div className="col-8">
                <h5>{tarif.baslik}</h5>
                <p>{tarif.aciklama}</p>
                <ul>
                {
                  tarif.malzemeler.map(malzeme => (
                    <li>{malzeme}</li>
                  ))
                }
                  </ul>
              </div>
              <div className="col-12">
                  <a className={`btn btn-outline-${color}`} href={tarif.url}>Tarifi İncele</a>
                  <p className='mt-3'>{tarif.hazirlanisi}</p>
              </div>
              
            </>
          )
        }
      </div>
    </div>
  )
}

export default Detail