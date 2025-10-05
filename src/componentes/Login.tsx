import React from 'react'
import fotoLogin from '../../assets/foto_login.jpg';


export const Login = () => {
    return (
        <>  
        <section className = " min-vh-100">
        <div className="text-center barra-superior">
                <h1 className='py-3'>Bienvenido a Conexion 360</h1>
                <h5 className='py-1'>Tu espacio cuando lo necesites</h5>
        </div>
                <section className = "flex-fill"
                          style={{ backgroundImage: `url(${fotoLogin})` }}>
            <form className="p-4 transparente rounded-4 w-25 mx-auto">
                <div className="form-group border p-4 rounded-4">
                  <h4 className='text-center mb-4'>Completa los datos para ingresar</h4>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">
                            Usuario: 
                        </label>
                        <br />
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">
                            Contraseña: 
                        </label>
                        <br />
                        <input type="text" className="form-control" />
                    </div>
                    <div className='text-center mt-4'>
                    <button type="submit" className="btn btn-naranja">Iniciar Sesión</button>
                </div>
                </div>
                
            </form>
            </section>
        </section>
        </>
    )
}
