import React from 'react'


const Formulario = () =>{

    return(
        <form>

            <div>
                <label htmlFor="">Marca</label>
                <div class="form-group">
                  <select class="form-control" name="" id="">
                    <option value="">--Seleccione--</option>
                    <option value="Americano">Americano</option>
                    <option value="Europeo">Europeo</option>
                    <option value="Japones">Japones</option>
                  </select>
                </div>
            </div>
            <div>
                <label htmlFor="">Year</label>
                <div class="form-group">
                  <select class="form-control" name="" id="">
                  <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                  </select>
                </div>
            </div>
            <div>
                <label htmlFor="">Year</label>
                <input
                type="radio"
                name = "plan"
                value="basico"
                ></input>
                <input
                type="radio"
                name = "plan"
                value="completo"
                ></input>
            
            </div>
        </form>
    );
};

export default Formulario;