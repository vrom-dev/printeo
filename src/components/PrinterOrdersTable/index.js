import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'

import { CustomButton } from '../CustomButton'
import { Spinner } from '../Spinner'

import { PrintService } from '../../service/PrintService'

import './styles.css'


export const OrdersTable = () => {
  const { authToken } = useContext(AuthContext)
  const { addPrint } = useContext(CartContext)
  const [prints, setPrints] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getPrints() {
      const printService = new PrintService()
      const response = await printService.getPrintsFromUser(authToken)
      setPrints(response)
      setIsLoading(false)
    }
    getPrints()
  }, [])

  return isLoading ?
    <Spinner /> :
    prints.length === 0 ?
      <div>
        No hay impresiones guardadas.
      </div> :
      <div className='prints-table-container'>
        <table className='prints-table'>
          <thead>
            <tr>
              <th>Archivo</th>
              <th>Material</th>
              <th>Escala</th>
              <th>Precisión</th>
              <th>Relleno</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {prints.map(print => {
              return (
                <tr key={print.id}>
                  <td>{print.file.fileName}</td>
                  <td>{print.material}</td>
                  <td>{print.scale}</td>
                  <td>{print.accuracy}</td>
                  <td>{print.innerFill}</td>
                  <td>
                    <Link
                      to={`/user/prints/${print.id}`}
                    >
                      <CustomButton secondary >
                        Editar
                      </CustomButton>
                    </Link>
                  </td>
                  <th>
                    <CustomButton
                      addToCart
                      onClick={() => addPrint(print.id)}
                    >
                      Añadir al carrito
                    </CustomButton>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
}